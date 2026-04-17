import {execFileSync} from 'node:child_process'
import crypto from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

import {createClient} from 'next-sanity'

import {
  defaultDevicesPage,
  defaultHomePage,
  defaultPalletsPage,
  defaultProductsPage,
  defaultProductionPage,
  defaultSiteSettings,
} from '@/sanity/lib/content'

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || 'eypnbw53'

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production'

const token =
  process.env.SANITY_API_WRITE_TOKEN ||
  process.env.SANITY_API_TOKEN ||
  process.env.SANITY_API_READ_TOKEN ||
  ''

if (!token) {
  throw new Error('Missing Sanity token. Set SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN before running the sync.')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-04-09',
  useCdn: false,
  token,
  perspective: 'raw',
})

const assetCache = new Map<string, string>()

function publicPath(relativePath: string) {
  return path.join(process.cwd(), 'public', relativePath.replace(/^\//, ''))
}

function hasAsset(value: any) {
  return Boolean(value?.asset?._ref || value?.asset?._id)
}

function toImageValue(existing: any, assetId: string) {
  return {
    ...(existing && typeof existing === 'object' ? existing : {}),
    _type: existing?._type || 'image',
    asset: {
      _type: 'reference',
      _ref: assetId,
    },
  }
}

async function ensureImageAsset(relativePath: string) {
  if (!relativePath) return ''

  const absolutePath = publicPath(relativePath)

  if (!fs.existsSync(absolutePath)) {
    throw new Error(`Missing local asset: ${absolutePath}`)
  }

  if (assetCache.has(absolutePath)) {
    return assetCache.get(absolutePath) || ''
  }

  const buffer = fs.readFileSync(absolutePath)
  const sha1 = crypto.createHash('sha1').update(buffer).digest('hex')
  const existing = await client.fetch<{_id: string} | null>(
    '*[_type == "sanity.imageAsset" && sha1hash == $sha1][0]{_id}',
    {sha1},
  )

  if (existing?._id) {
    assetCache.set(absolutePath, existing._id)
    return existing._id
  }

  let uploadPath = absolutePath
  let uploadFilename = path.basename(absolutePath)

  try {
    const uploaded = await client.assets.upload('image', fs.createReadStream(uploadPath), {
      filename: uploadFilename,
    })

    assetCache.set(absolutePath, uploaded._id)
    return uploaded._id
  } catch (error: any) {
    const isUnsupportedImage =
      error?.statusCode === 422 &&
      typeof error?.responseBody === 'string' &&
      error.responseBody.includes('unsupported image format')

    if (!isUnsupportedImage) {
      throw error
    }

    uploadFilename = `${path.parse(absolutePath).name}.jpg`
    uploadPath = path.join(os.tmpdir(), uploadFilename)

    execFileSync('sips', ['-s', 'format', 'jpeg', absolutePath, '--out', uploadPath], {
      stdio: 'ignore',
    })
  }

  const uploaded = await client.assets.upload('image', fs.createReadStream(uploadPath), {
    filename: uploadFilename,
  })

  assetCache.set(absolutePath, uploaded._id)
  return uploaded._id
}

async function withImage(existingValue: any, relativePath: string) {
  if (hasAsset(existingValue)) return existingValue
  if (!relativePath) return existingValue
  const assetId = await ensureImageAsset(relativePath)
  return toImageValue(existingValue, assetId)
}

async function withImageField(item: any, relativePath: string) {
  if (hasAsset(item?.image)) return item
  if (!relativePath) return item
  const assetId = await ensureImageAsset(relativePath)
  return {
    ...(item && typeof item === 'object' ? item : {}),
    image: toImageValue(item?.image, assetId),
  }
}

async function syncSiteSettings(id: string) {
  const current = await client.getDocument<any>(id)
  if (!current) return

  const references = await Promise.all(
    (current.references || []).map((item: any, index: number) =>
      withImageField(item, defaultSiteSettings.references[index]?.src || ''),
    ),
  )

  await client
    .patch(id)
    .set({
      logo: await withImage(current.logo, defaultSiteSettings.logoSrc),
      references,
    })
    .commit()
}

async function syncHomePage(id: string) {
  const current = await client.getDocument<any>(id)
  if (!current) return

  const services = await Promise.all(
    (current.services || []).map((item: any, index: number) =>
      withImageField(item, defaultHomePage.services[index]?.imageSrc || ''),
    ),
  )

  await client
    .patch(id)
    .set({
      heroBackgroundImage: await withImage(current.heroBackgroundImage, defaultHomePage.heroBackgroundImageSrc),
      heroProductImage: await withImage(current.heroProductImage, defaultHomePage.heroProductImageSrc),
      aboutImage: await withImage(current.aboutImage, defaultHomePage.aboutImageSrc),
      services,
    })
    .commit()
}

async function syncSimplePage(id: string, fallback: typeof defaultPalletsPage) {
  const current = await client.getDocument<any>(id)
  if (!current) return

  const sections = await Promise.all(
    (current.sections || []).map((item: any, index: number) =>
      withImageField(item, fallback.sections[index]?.imageSrc || ''),
    ),
  )

  const galleryCards = await Promise.all(
    (current.galleryCards || []).map((item: any, index: number) =>
      withImageField(item, fallback.galleryCards[index]?.imageSrc || ''),
    ),
  )

  await client
    .patch(id)
    .set({
      sections,
      galleryCards,
    })
    .commit()
}

async function syncProductsPage(id: string) {
  const current = await client.getDocument<any>(id)
  if (!current) return

  const productCatalog = await Promise.all(
    (current.productCatalog || []).map(async (item: any, index: number) => ({
      ...(await withImageField(item, defaultProductsPage.productCatalog[index]?.imageSrc || '')),
      galleryImages: await Promise.all(
        (item.galleryImages || []).map((image: any, imageIndex: number) =>
          withImage(
            image,
            defaultProductsPage.productCatalog[index]?.galleryImages[imageIndex]?.src || '',
          ),
        ),
      ),
    })),
  )

  const dimensionImages = await Promise.all(
    (current.dimensionImages || []).map((item: any, index: number) =>
      withImageField(item, defaultProductsPage.dimensionImages[index]?.src || ''),
    ),
  )

  const rangeCards = await Promise.all(
    (current.rangeCards || []).map((item: any, index: number) =>
      withImageField(item, defaultProductsPage.rangeCards[index]?.imageSrc || ''),
    ),
  )

  const accessories = await Promise.all(
    (current.accessories || []).map((item: any, index: number) =>
      withImageField(item, defaultProductsPage.accessories[index]?.imageSrc || ''),
    ),
  )

  const certificates = await Promise.all(
    (current.certificates || []).map((item: any, index: number) =>
      withImageField(item, defaultProductsPage.certificates[index]?.src || ''),
    ),
  )

  const galleryImages = await Promise.all(
    (current.galleryImages || []).map((item: any, index: number) =>
      withImage(item, defaultProductsPage.galleryImages[index]?.src || ''),
    ),
  )

  const comfortImages = await Promise.all(
    (current.comfortImages || []).map((item: any, index: number) =>
      withImageField(item, defaultProductsPage.comfortImages[index]?.src || ''),
    ),
  )

  await client
    .patch(id)
    .set({
      heroImage: await withImage(current.heroImage, defaultProductsPage.heroImageSrc),
      introImage: await withImage(current.introImage, defaultProductsPage.introImageSrc),
      productCatalog,
      dimensionImages,
      rangeCards,
      accessories,
      certificates,
      galleryImages,
      comfortImages,
    })
    .commit()
}

async function run() {
  await syncSiteSettings('siteSettings')
  await syncSiteSettings('drafts.siteSettings')
  await syncHomePage('homePage')
  await syncHomePage('drafts.homePage')
  await syncSimplePage('palletsPage', defaultPalletsPage)
  await syncSimplePage('drafts.palletsPage', defaultPalletsPage)
  await syncSimplePage('devicesPage', defaultDevicesPage)
  await syncSimplePage('drafts.devicesPage', defaultDevicesPage)
  await syncSimplePage('productionPage', defaultProductionPage)
  await syncSimplePage('drafts.productionPage', defaultProductionPage)
  await syncProductsPage('productsPage')
  await syncProductsPage('drafts.productsPage')
  console.log('Synced Sanity image assets from /public.')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
