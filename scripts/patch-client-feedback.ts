import {createClient} from 'next-sanity'

import {defaultHomePage, defaultProductsPage} from '@/sanity/lib/content'
import {normalizeYouTubeId, uniqueYouTubeVideos} from '@/sanity/lib/youtube'

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
  throw new Error('Missing Sanity token. Set SANITY_API_WRITE_TOKEN or SANITY_API_TOKEN before running the patch.')
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-04-09',
  useCdn: false,
  token,
  perspective: 'raw',
})

type ExistingDoc = Record<string, any>

function mergeDocumentLabels(existing: any[] = [], labels: string[], prefix: string) {
  return labels.map((label, index) => {
    const current = existing.find((item) => item?.label === label) || existing[index]

    return {
      _key: current?._key || `${prefix}-${index + 1}`,
      label,
      ...(current?.file ? {file: current.file} : {}),
    }
  })
}

async function patchHomePage() {
  const current = await client.getDocument<ExistingDoc>('homePage')
  if (!current) return

  const services = current.services?.length
    ? current.services.map((service: ExistingDoc, index: number) => {
        if (index !== 3) return service

        return {
          ...service,
          tag: 'Vlastný produkt',
          title: 'eTRAKTOR',
        }
      })
    : undefined

  const patch: ExistingDoc = {
    heroTitleLine2: 'spoločnosť',
  }

  patch.heroPrimaryLabel = defaultHomePage.heroPrimaryLabel
  patch.heroDescription = defaultHomePage.heroDescription
  patch.heroStats = [
    ...(current.heroStats || defaultHomePage.heroStats).map((item: ExistingDoc, index: number) => ({
      _key: item?._key || `home-hero-stat-${index + 1}`,
      value: defaultHomePage.heroStats[index]?.value || item?.value || '',
      label: defaultHomePage.heroStats[index]?.label || item?.label || '',
    })),
  ]

  if (services) {
    patch.services = services
  }

  await client.patch('homePage').set(patch).commit()
  await client.patch('drafts.homePage').set(patch).commit().catch(() => undefined)
}

async function patchSimplePages() {
  const updates = [
    {
      id: 'devicesPage',
      galleryTitle: 'Naše realizácie',
      galleryDescription: '',
    },
    {
      id: 'productionPage',
      galleryTitle: 'Výrobné priestory',
      galleryDescription:
        'Pozrite si zázemie kde vznikajú naše produkty. Kliknite na foto pre zväčšenie.',
      galleryCards: [
        {title: 'Výrobný priestor 1', description: ''},
        {title: 'Výrobný priestor 2', description: ''},
        {title: 'Výrobný priestor 3', description: ''},
        {title: 'Výrobný priestor 4', description: ''},
        {title: 'Výrobný priestor 5', description: ''},
      ],
    },
  ]

  for (const update of updates) {
    const current = await client.getDocument<ExistingDoc>(update.id)
    if (!current) continue

    const patch: ExistingDoc = {
      galleryTitle: update.galleryTitle,
      galleryDescription: update.galleryDescription,
    }

    if (update.galleryCards?.length && current.galleryCards?.length) {
      patch.galleryCards = current.galleryCards.map((card: ExistingDoc, index: number) => ({
        ...card,
        title: update.galleryCards?.[index]?.title || card.title,
        description: card.description || update.galleryCards?.[index]?.description || '',
      }))
    }

    await client.patch(update.id).set(patch).commit()
    await client.patch(`drafts.${update.id}`).set(patch).commit().catch(() => undefined)
  }
}

async function patchProductsPage() {
  const current = await client.getDocument<ExistingDoc>('productsPage')
  if (!current?.productCatalog?.length) return

  const labelSets: Record<string, string[]> = {
    'ET 2000': [
      'Cenník ET 2000',
      'Rozmery ET 2000',
      'Technické parametre ET 2000',
      'Príslušenstvo ET 2000',
      'Certifikáty ET 2000',
    ],
    'ET 3000': [
      'Cenník ET 3000',
      'Rozmery ET 3000',
      'Technické parametre ET 3000',
      'Príslušenstvo ET 3000',
      'Certifikáty ET 3000',
    ],
  }

  const productCatalog = defaultProductsPage.productCatalog.map((defaults, index) => {
    const currentItem =
      current.productCatalog.find((item: ExistingDoc) => item.title === defaults.title) || {}
    const labels = labelSets[defaults.title] || defaults.documents.map((document) => document.label)
    const sanitizedVideos = uniqueYouTubeVideos(
      (currentItem.videos || []).map((video: ExistingDoc) => ({
        ...video,
        youtubeId: normalizeYouTubeId(video.youtubeId),
      })),
    )

    return {
      ...currentItem,
      _key: currentItem._key || `catalog-item-${index + 1}`,
      badge: currentItem.badge || defaults.badge,
      title: defaults.title,
      documentsTitle: defaults.documentsTitle,
      documents: mergeDocumentLabels(currentItem.documents, labels, `product-doc-${index + 1}`),
      videos: sanitizedVideos,
      specs:
        defaults.title === 'ET 3000'
          ? defaults.specs.map((spec, specIndex) => ({
              _key: currentItem.specs?.[specIndex]?._key || `product-spec-${index + 1}-${specIndex + 1}`,
              parameter: spec.parameter,
              value: spec.value,
            }))
          : currentItem.specs,
    }
  })

  const galleryImages = defaultProductsPage.galleryImages.map((image, index) => {
    const currentImage = current.galleryImages?.[index]

    return {
      _key: currentImage?._key || `gallery-image-${index + 1}`,
      _type: 'image',
      alt: image.alt,
      ...(currentImage?.asset ? {asset: currentImage.asset} : {}),
    }
  })

  const comfortImages = defaultProductsPage.comfortImages.map((image, index) => {
    const currentImage = current.comfortImages?.[index]
    const fallbackImage = current.galleryImages?.[index + 6]

    return {
      _key: currentImage?._key || `comfort-image-${index + 1}`,
      alt: image.alt,
      ...(currentImage?.image
        ? {image: currentImage.image}
        : fallbackImage?.asset
          ? {image: fallbackImage}
          : {}),
    }
  })

  await client
    .patch('productsPage')
    .set({
      heroAccent: defaultProductsPage.heroAccent,
      heroSecondaryHref: defaultProductsPage.heroSecondaryHref,
      heroStats: (current.heroStats || defaultProductsPage.heroStats).map((item: ExistingDoc, index: number) => ({
        _key: item?._key || `product-hero-stat-${index + 1}`,
        value: defaultProductsPage.heroStats[index]?.value || item?.value || '',
        label: defaultProductsPage.heroStats[index]?.label || item?.label || '',
      })),
      introParagraphs: defaultProductsPage.introParagraphs,
      introStats: defaultProductsPage.introStats,
      benefitsTitle: defaultProductsPage.benefitsTitle,
      benefits: defaultProductsPage.benefits,
      catalogTag: defaultProductsPage.catalogTag,
      catalogTitle: defaultProductsPage.catalogTitle,
      catalogDescription: defaultProductsPage.catalogDescription,
      productCatalog,
      accessoriesTag: defaultProductsPage.accessoriesTag,
      accessoriesTitle: defaultProductsPage.accessoriesTitle,
      comfortTag: defaultProductsPage.comfortTag,
      comfortTitle: defaultProductsPage.comfortTitle,
      comfortItems: defaultProductsPage.comfortItems.map((item, index) => ({
        _key: current.comfortItems?.[index]?._key || `comfort-item-${index + 1}`,
        label: item.label,
        type: item.type,
      })),
      comfortImages,
      galleryImages,
    })
    .commit()

  await client
    .patch('drafts.productsPage')
    .set({
      heroAccent: defaultProductsPage.heroAccent,
      heroSecondaryHref: defaultProductsPage.heroSecondaryHref,
      heroStats: (current.heroStats || defaultProductsPage.heroStats).map((item: ExistingDoc, index: number) => ({
        _key: item?._key || `product-hero-stat-${index + 1}`,
        value: defaultProductsPage.heroStats[index]?.value || item?.value || '',
        label: defaultProductsPage.heroStats[index]?.label || item?.label || '',
      })),
      introParagraphs: defaultProductsPage.introParagraphs,
      introStats: defaultProductsPage.introStats,
      benefitsTitle: defaultProductsPage.benefitsTitle,
      benefits: defaultProductsPage.benefits,
      catalogTag: defaultProductsPage.catalogTag,
      catalogTitle: defaultProductsPage.catalogTitle,
      catalogDescription: defaultProductsPage.catalogDescription,
      productCatalog,
      accessoriesTag: defaultProductsPage.accessoriesTag,
      accessoriesTitle: defaultProductsPage.accessoriesTitle,
      comfortTag: defaultProductsPage.comfortTag,
      comfortTitle: defaultProductsPage.comfortTitle,
      comfortItems: defaultProductsPage.comfortItems.map((item, index) => ({
        _key: current.comfortItems?.[index]?._key || `comfort-item-${index + 1}`,
        label: item.label,
        type: item.type,
      })),
      comfortImages,
      galleryImages,
    })
    .commit()
    .catch(() => undefined)
}

async function run() {
  await patchHomePage()
  await patchSimplePages()
  await patchProductsPage()
  console.log('Patched client feedback content.')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
