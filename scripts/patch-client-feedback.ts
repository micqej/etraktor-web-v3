import {createClient} from 'next-sanity'

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
  if (!current?.services?.length) return

  const services = current.services.map((service: ExistingDoc, index: number) => {
    if (index !== 3) return service

    return {
      ...service,
      tag: 'Vlastné produkty',
      title: 'Vlastné produkty',
    }
  })

  await client.patch('homePage').set({services}).commit()
  await client.patch('drafts.homePage').set({services}).commit()
}

async function patchSimplePages() {
  const updates = [
    {
      id: 'palletsPage',
      galleryTitle: 'Realizované projekty',
      galleryDescription:
        'Galéria riešení z logistiky a automotive výroby. Obrázky aj krátke popisy sa dajú priebežne dopĺňať a meniť.',
    },
    {
      id: 'devicesPage',
      galleryTitle: 'Realizované projekty',
      galleryDescription:
        'Ukážky jednoúčelových zariadení. Projekty, obrázky aj popisy viete v Sanity priebežne pridávať a aktualizovať.',
    },
    {
      id: 'productionPage',
      galleryTitle: 'Výrobné priestory a realizácie',
      galleryDescription:
        'Pozrite si zázemie, kde vznikajú naše produkty. Obrázky s popismi môžete pridávať, meniť aj odoberať.',
      galleryCards: [
        {title: 'Výrobný priestor 1', description: 'Hlavná časť výrobného priestoru pripravená pre zákazkovú výrobu a montáž.'},
        {title: 'Výrobný priestor 2', description: 'Pracovisko pre presné spracovanie dielov a operatívnu výrobu.'},
        {title: 'Výrobný priestor 3', description: 'Zázemie pre kompletizáciu, skladovanie a prípravu jednotlivých zostáv.'},
        {title: 'Výrobný priestor 4', description: 'Technologické vybavenie pre kusovú aj sériovú zákazkovú výrobu.'},
        {title: 'Výrobný priestor 5', description: 'Doplnkové výrobné a manipulačné priestory pod jednou strechou.'},
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
    await client.patch(`drafts.${update.id}`).set(patch).commit()
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
    Príslušenstvo: [
      'Katalóg príslušenstva',
      'Cenník príslušenstva',
      'Kompatibilita ET 2000 / ET 3000',
    ],
  }

  const productCatalog = current.productCatalog.map((item: ExistingDoc, index: number) => {
    const labels = labelSets[item.title]
    if (!labels) return item

    return {
      ...item,
      documentsTitle: item.documentsTitle || 'Dokumenty na stiahnutie',
      documents: mergeDocumentLabels(item.documents, labels, `product-doc-${index + 1}`),
    }
  })

  await client
    .patch('productsPage')
    .set({
      catalogTag: 'Vlastné produkty',
      catalogTitle: 'Produkty a príslušenstvo',
      catalogDescription:
        'Začiatok všeobecne o elektrickom malotraktore a následne samostatné bloky pre ET 2000, ET 3000, príslušenstvo a ďalšie produkty.',
      productCatalog,
    })
    .commit()

  await client
    .patch('drafts.productsPage')
    .set({
      catalogTag: 'Vlastné produkty',
      catalogTitle: 'Produkty a príslušenstvo',
      catalogDescription:
        'Začiatok všeobecne o elektrickom malotraktore a následne samostatné bloky pre ET 2000, ET 3000, príslušenstvo a ďalšie produkty.',
      productCatalog,
    })
    .commit()
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
