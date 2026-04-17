import {createClient} from 'next-sanity'

import {
  defaultContactPage,
  defaultDevicesPage,
  defaultHomePage,
  defaultPalletsPage,
  defaultProductsPage,
  defaultProductionPage,
  defaultSiteSettings,
  toContactPageDocument,
  toProductsPageDocument,
  toSimplePageDocument,
} from '@/sanity/lib/content'

type SeedDocument = {
  _id: string
  _type: string
  [key: string]: unknown
}

function withKey<T extends Record<string, unknown>>(value: T, prefix: string, index: number) {
  return {
    _key: `${prefix}-${index + 1}`,
    ...value,
  }
}

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
  throw new Error(
    'Missing Sanity token. Set SANITY_API_WRITE_TOKEN (recommended) or SANITY_API_TOKEN before running the seed.',
  )
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-04-09',
  useCdn: false,
  token,
  perspective: 'raw',
})

const documents: SeedDocument[] = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteTitle: defaultSiteSettings.siteTitle,
    companyName: defaultSiteSettings.companyName,
    domain: defaultSiteSettings.domain,
    contactLabel: defaultSiteSettings.contactLabel,
    referencesTag: defaultSiteSettings.referencesTag,
    references: defaultSiteSettings.references.map((reference, index) => withKey({alt: reference.alt}, 'reference', index)),
    navItems: defaultSiteSettings.navItems.map((item, index) => withKey(item, 'nav-item', index)),
    footerLinks: defaultSiteSettings.footerLinks.map((item, index) => withKey(item, 'footer-link', index)),
    footerAddress: defaultSiteSettings.footerAddress,
    footerCredit: defaultSiteSettings.footerCredit,
  },
  {
    _id: 'homePage',
    _type: 'homePage',
    heroEyebrow: defaultHomePage.heroEyebrow,
    heroTitleLine1: defaultHomePage.heroTitleLine1,
    heroTitleLine2: defaultHomePage.heroTitleLine2,
    heroTitleAccent: defaultHomePage.heroTitleAccent,
    heroSubtitle: defaultHomePage.heroSubtitle,
    heroDescription: defaultHomePage.heroDescription,
    heroPrimaryLabel: defaultHomePage.heroPrimaryLabel,
    heroPrimaryHref: defaultHomePage.heroPrimaryHref,
    heroSecondaryLabel: defaultHomePage.heroSecondaryLabel,
    heroSecondaryHref: defaultHomePage.heroSecondaryHref,
    heroStats: defaultHomePage.heroStats.map((item, index) => withKey(item, 'home-hero-stat', index)),
    servicesTag: defaultHomePage.servicesTag,
    servicesTitle: defaultHomePage.servicesTitle,
    servicesDescription: defaultHomePage.servicesDescription,
    services: defaultHomePage.services.map((service, index) =>
      withKey(
        {
          tag: service.tag,
          title: service.title,
          description: service.description,
          buttonLabel: service.buttonLabel,
          buttonHref: service.buttonHref,
          imageAlign: service.imageAlign,
          imageFit: service.imageFit,
        },
        'service',
        index,
      ),
    ),
    extrasTag: defaultHomePage.extrasTag,
    extrasTitle: defaultHomePage.extrasTitle,
    extras: defaultHomePage.extras,
    aboutTag: defaultHomePage.aboutTag,
    aboutTitle: defaultHomePage.aboutTitle,
    aboutText: defaultHomePage.aboutText,
    aboutIcoLabel: defaultHomePage.aboutIcoLabel,
    aboutIcoValue: defaultHomePage.aboutIcoValue,
    aboutDicLabel: defaultHomePage.aboutDicLabel,
    aboutDicValue: defaultHomePage.aboutDicValue,
    aboutAddressLabel: defaultHomePage.aboutAddressLabel,
    aboutAddressValue: defaultHomePage.aboutAddressValue,
    ctaTitle: defaultHomePage.ctaTitle,
    ctaText: defaultHomePage.ctaText,
    ctaButtonLabel: defaultHomePage.ctaButtonLabel,
    ctaButtonHref: defaultHomePage.ctaButtonHref,
  },
  {
    _id: 'palletsPage',
    _type: 'palletsPage',
    ...toSimplePageDocument(defaultPalletsPage),
  },
  {
    _id: 'devicesPage',
    _type: 'devicesPage',
    ...toSimplePageDocument(defaultDevicesPage),
  },
  {
    _id: 'productionPage',
    _type: 'productionPage',
    ...toSimplePageDocument(defaultProductionPage),
  },
  {
    _id: 'contactPage',
    _type: 'contactPage',
    ...toContactPageDocument(defaultContactPage),
  },
  {
    _id: 'productsPage',
    _type: 'productsPage',
    ...toProductsPageDocument(defaultProductsPage),
  },
]

async function run() {
  for (const document of documents) {
    await client.createOrReplace(document)
    console.log(`Seeded ${document._id}`)
  }
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
