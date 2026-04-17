import {draftMode} from 'next/headers'

import {groq} from 'next-sanity'

import {getSanityClient} from '@/sanity/lib/client'
import {urlForImage} from '@/sanity/lib/image'
import {token} from '@/sanity/lib/token'

type SanityImageLike = unknown

export type NavItem = {
  href: string
  label: string
}

export type ReferenceItem = {
  alt: string
  src: string
}

export type SiteSettingsContent = {
  siteTitle: string
  companyName: string
  domain: string
  logoSrc: string
  navItems: NavItem[]
  contactLabel: string
  referencesTag: string
  references: ReferenceItem[]
  footerLinks: NavItem[]
  footerAddress: string
  footerCredit: string
}

export type HomeService = {
  tag: string
  title: string
  description: string
  buttonLabel: string
  buttonHref: string
  imageSrc: string
  imageAlt: string
  imageAlign: 'left' | 'right'
  imageFit: 'contain' | 'cover'
}

export type HomePageContent = {
  heroEyebrow: string
  heroTitleLine1: string
  heroTitleLine2: string
  heroTitleAccent: string
  heroSubtitle: string
  heroDescription: string
  heroPrimaryLabel: string
  heroPrimaryHref: string
  heroSecondaryLabel: string
  heroSecondaryHref: string
  heroBackgroundImageSrc: string
  heroProductImageSrc: string
  heroStats: {value: string; label: string}[]
  servicesTag: string
  servicesTitle: string
  servicesDescription: string
  services: HomeService[]
  extrasTag: string
  extrasTitle: string
  extras: string[]
  aboutTag: string
  aboutTitle: string
  aboutText: string
  aboutImageSrc: string
  aboutIcoLabel: string
  aboutIcoValue: string
  aboutDicLabel: string
  aboutDicValue: string
  aboutAddressLabel: string
  aboutAddressValue: string
  ctaTitle: string
  ctaText: string
  ctaButtonLabel: string
  ctaButtonHref: string
}

export type SimpleCard = {
  _key?: string
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

export type ProcessStep = {
  _key?: string
  number: string
  title: string
  description: string
}

export type SimplePageSection = {
  _key?: string
  tag: string
  title: string
  description: string
  buttonLabel?: string
  buttonHref?: string
  imageSrc?: string
  imageAlt?: string
  imageAlign?: 'left' | 'right'
  imageFit?: 'contain' | 'cover'
  bullets?: string[]
}

export type SimplePageContent = {
  heroTag: string
  heroTitle: string
  heroDescription: string
  sections: SimplePageSection[]
  galleryTag?: string
  galleryTitle?: string
  galleryDescription?: string
  galleryCards: SimpleCard[]
  processTag?: string
  processTitle?: string
  processSteps: ProcessStep[]
  ctaTitle: string
  ctaText: string
  ctaButtonLabel: string
  ctaButtonHref: string
}

export type ContactPageContent = {
  heroTag: string
  heroTitle: string
  heroText: string
  detailsTitle: string
  contactPersonLabel: string
  contactPersonValue: string
  addressLabel: string
  addressValue: string
  phoneLabel: string
  phoneValue: string
  emailLabel: string
  emailValue: string
  webLabel: string
  webValue: string
  companyDataTitle: string
  companyIco: string
  companyDic: string
  companyYear: string
  formTitle: string
  formNameLabel: string
  formPhoneLabel: string
  formEmailLabel: string
  formTopicLabel: string
  formMessageLabel: string
  formSubmitLabel: string
  inquiryOptions: string[]
}

export type ProductStat = {value: string; label: string}
export type ProductSpec = {parameter: string; valueA?: string; valueB?: string; value?: string}
export type ProductEquipmentGroup = {title: string; items: {label: string; type: string}[]}
export type ProductRangeCard = {
  title: string
  badge: string
  badgeClass: 'badge-std' | 'badge-opt'
  info: string
  imageSrc: string
}

export type ProductContent = {
  heroEyebrow: string
  heroTitle: string
  heroAccent: string
  heroSubtitle: string
  heroDescription: string
  heroPrimaryLabel: string
  heroPrimaryHref: string
  heroSecondaryLabel: string
  heroSecondaryHref: string
  heroImageSrc: string
  heroStats: ProductStat[]
  introTag: string
  introTitle: string
  introParagraphs: string[]
  introImageSrc: string
  efficiencyTitleA: string
  efficiencyValueA: string
  efficiencyTitleB: string
  efficiencyValueB: string
  benefitsTag: string
  benefitsTitle: string
  benefits: string[]
  useCasesTag: string
  useCasesTitle: string
  useCases: SimpleCard[]
  dimensionsTag: string
  dimensionsTitle: string
  dimensionImages: {src: string; alt: string}[]
  basicSpecs: ProductSpec[]
  batterySpecs: ProductSpec[]
  chargingSpecs: ProductSpec[]
  equipmentGroups: ProductEquipmentGroup[]
  rangeTag: string
  rangeTitle: string
  rangeCards: ProductRangeCard[]
  accessoriesTag: string
  accessoriesTitle: string
  accessories: SimpleCard[]
  certificatesTag: string
  certificatesTitle: string
  certificates: {src: string; alt: string; title: string}[]
  galleryTag: string
  galleryTitle: string
  galleryDescription: string
  galleryImages: {src: string; alt: string}[]
  videosTag: string
  videosTitle: string
  videos: {youtubeId: string; label: string}[]
  ctaTitle: string
  ctaText: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
}

const assetUrl = (image: SanityImageLike, fallback: string) =>
  urlForImage(image)?.width(1600).fit('max').auto('format').url() || fallback

export const siteSettingsQuery = groq`*[_type == "siteSettings" && _id == "siteSettings"][0]{
  siteTitle,
  companyName,
  domain,
  logo,
  contactLabel,
  referencesTag,
  references[]{
    alt,
    image
  },
  navItems[]{
    href,
    label
  },
  footerLinks[]{
    href,
    label
  },
  footerAddress,
  footerCredit
}`

export const homePageQuery = groq`*[_type == "homePage" && _id == "homePage"][0]{
  heroEyebrow,
  heroTitleLine1,
  heroTitleLine2,
  heroTitleAccent,
  heroSubtitle,
  heroDescription,
  heroPrimaryLabel,
  heroPrimaryHref,
  heroSecondaryLabel,
  heroSecondaryHref,
  heroBackgroundImage,
  heroProductImage,
  heroStats,
  servicesTag,
  servicesTitle,
  servicesDescription,
  services[]{
    tag,
    title,
    description,
    buttonLabel,
    buttonHref,
    image,
    imageAlign,
    imageFit
  },
  extrasTag,
  extrasTitle,
  extras,
  aboutTag,
  aboutTitle,
  aboutText,
  aboutImage,
  aboutIcoLabel,
  aboutIcoValue,
  aboutDicLabel,
  aboutDicValue,
  aboutAddressLabel,
  aboutAddressValue,
  ctaTitle,
  ctaText,
  ctaButtonLabel,
  ctaButtonHref
}`

const simplePageProjection = `{
  heroTag,
  heroTitle,
  heroDescription,
  sections[]{
    _key,
    tag,
    title,
    description,
    buttonLabel,
    buttonHref,
    image,
    imageAlign,
    imageFit,
    bullets
  },
  galleryTag,
  galleryTitle,
  galleryDescription,
  galleryCards[]{
    _key,
    title,
    description,
    image,
    alt
  },
  processTag,
  processTitle,
  processSteps[]{
    _key,
    number,
    title,
    description
  },
  ctaTitle,
  ctaText,
  ctaButtonLabel,
  ctaButtonHref
}`

export const palletsPageQuery = groq`*[_type == "palletsPage" && _id == "palletsPage"][0]${simplePageProjection}`
export const productionPageQuery = groq`*[_type == "productionPage" && _id == "productionPage"][0]${simplePageProjection}`
export const devicesPageQuery = groq`*[_type == "devicesPage" && _id == "devicesPage"][0]${simplePageProjection}`

export const contactPageQuery = groq`*[_type == "contactPage" && _id == "contactPage"][0]{
  heroTag,
  heroTitle,
  heroText,
  detailsTitle,
  contactPersonLabel,
  contactPersonValue,
  addressLabel,
  addressValue,
  phoneLabel,
  phoneValue,
  emailLabel,
  emailValue,
  webLabel,
  webValue,
  companyDataTitle,
  companyIco,
  companyDic,
  companyYear,
  formTitle,
  formNameLabel,
  formPhoneLabel,
  formEmailLabel,
  formTopicLabel,
  formMessageLabel,
  formSubmitLabel,
  inquiryOptions
}`

export const productsPageQuery = groq`*[_type == "productsPage" && _id == "productsPage"][0]{
  heroEyebrow,
  heroTitle,
  heroAccent,
  heroSubtitle,
  heroDescription,
  heroPrimaryLabel,
  heroPrimaryHref,
  heroSecondaryLabel,
  heroSecondaryHref,
  heroImage,
  heroStats,
  introTag,
  introTitle,
  introParagraphs,
  introImage,
  efficiencyTitleA,
  efficiencyValueA,
  efficiencyTitleB,
  efficiencyValueB,
  benefitsTag,
  benefitsTitle,
  benefits,
  useCasesTag,
  useCasesTitle,
  useCases[]{
    title,
    description
  },
  dimensionsTag,
  dimensionsTitle,
  dimensionImages[]{
    alt,
    image
  },
  basicSpecs,
  batterySpecs,
  chargingSpecs,
  equipmentGroups[]{
    title,
    items[]{
      label,
      type
    }
  },
  rangeTag,
  rangeTitle,
  rangeCards[]{
    title,
    badge,
    badgeClass,
    info,
    image
  },
  accessoriesTag,
  accessoriesTitle,
  accessories[]{
    title,
    description,
    image,
    alt
  },
  certificatesTag,
  certificatesTitle,
  certificates[]{
    title,
    alt,
    image
  },
  galleryTag,
  galleryTitle,
  galleryDescription,
  galleryImages[]{
    alt,
    image
  },
  videosTag,
  videosTitle,
  videos[]{
    youtubeId,
    label
  },
  ctaTitle,
  ctaText,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref
}`

async function fetchSingle<T>(query: string) {
  try {
    const isDraftMode = (await draftMode()).isEnabled
    return await getSanityClient(isDraftMode).fetch<T | null>(query)
  } catch {
    return null
  }
}

async function ensureSingletonDocument(
  id: string,
  type: string,
  initialValue: Record<string, unknown>,
) {
  if (!token) return

  try {
    await getSanityClient(false)
      .withConfig({token, useCdn: false, stega: false})
      .createIfNotExists({
        _id: id,
        _type: type,
        ...initialValue,
      })
  } catch {
    // If the token is read-only or the dataset is unavailable, keep serving fallback content.
  }
}

async function fetchSingletonWithSeed<T>(
  query: string,
  id: string,
  type: string,
  initialValue: Record<string, unknown>,
) {
  const firstResult = await fetchSingle<T>(query)
  if (firstResult) return firstResult

  await ensureSingletonDocument(id, type, initialValue)
  return await fetchSingle<T>(query)
}

export const defaultSiteSettings: SiteSettingsContent = {
  siteTitle: 'etraktor.sk',
  companyName: 'Etraktor, s.r.o.',
  domain: 'https://www.etraktor.sk',
  logoSrc: '/logo.png',
  contactLabel: 'Kontakt',
  referencesTag: 'Naši partneri a referencie',
  references: [
    {alt: 'Strojnícka fakulta TU Košice', src: '/refs/tuke.jpg'},
    {alt: 'PIAFA Vyškov', src: '/refs/piafa.jpg'},
    {alt: 'Žilinská Univerzita', src: '/refs/uniza.jpg'},
    {alt: 'Referencia 4', src: '/refs/ref4.jpg'},
    {alt: 'Referencia 5', src: '/refs/ref5.jpg'},
    {alt: 'Referencia 6', src: '/refs/ref6.jpg'},
  ],
  navItems: [
    {href: '/', label: 'Domov'},
    {href: '/palety', label: 'Transportné palety'},
    {href: '/zariadenia', label: 'Jednoúčelové zariadenia'},
    {href: '/vyroba', label: 'Výroba'},
    {href: '/produkty', label: 'eTRAKTOR'},
  ],
  footerLinks: [
    {href: '/', label: 'Domov'},
    {href: '/palety', label: 'Palety'},
    {href: '/zariadenia', label: 'Zariadenia'},
    {href: '/vyroba', label: 'Výroba'},
    {href: '/produkty', label: 'eTRAKTOR'},
    {href: '/kontakt', label: 'Kontakt'},
  ],
  footerAddress: 'Duklianska 1376/17, 08501 Bardejov',
  footerCredit: 'Web vytvorilo Monetico.sk',
}

export const defaultHomePage: HomePageContent = {
  heroEyebrow: 'Etraktor, s.r.o. — Bardejov, Slovenská republika',
  heroTitleLine1: 'Inovatívna',
  heroTitleLine2: 'spoločnosť',
  heroTitleAccent: 'v strojárstve',
  heroSubtitle: 'Vývoj • Výroba • Certifikácia',
  heroDescription:
    'Od myšlienky po realizáciu. Vyvíjame nové produkty, transportné palety, jednoúčelové zariadenia a vlastný elektrický malotraktor ET 2000.',
  heroPrimaryLabel: 'eTRAKTOR ET 2000',
  heroPrimaryHref: '/produkty',
  heroSecondaryLabel: 'Kontaktujte nás',
  heroSecondaryHref: '/kontakt',
  heroBackgroundImageSrc: '/images/elektricky-malotraktor.jpg',
  heroProductImageSrc: '/images/elektricky-malotraktor.jpg',
  heroStats: [
    {value: '2019', label: 'Rok založenia'},
    {value: 'A–Z', label: 'Vývoj produktov'},
    {value: 'ET 2000', label: 'Vlastný produkt'},
    {value: 'TISR', label: 'Certifikácia'},
  ],
  servicesTag: 'Čo robíme',
  servicesTitle: 'Naše služby',
  servicesDescription:
    'Komplexné riešenia od vývoja po realizáciu pre automobilový priemysel a ďalšie odvetvia.',
  services: [
    {
      tag: 'Logistika & Automotív',
      title: 'Transportné palety',
      description:
        'Základný kameň modernej logistiky. Nerobotické aj robotické palety pre automobilový priemysel, robotické zásobníky.',
      buttonLabel: 'Zistiť viac →',
      buttonHref: '/palety',
      imageSrc: '/images/palety_f149ab5c.jpeg',
      imageAlt: 'Transportné palety',
      imageAlign: 'left',
      imageFit: 'contain',
    },
    {
      tag: 'Priemyselná automatizácia',
      title: 'Jednoúčelové zariadenia',
      description:
        'Zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky.',
      buttonLabel: 'Zistiť viac →',
      buttonHref: '/zariadenia',
      imageSrc: '/images/zariadenia_8beb0717.jpeg',
      imageAlt: 'Jednoúčelové zariadenia',
      imageAlign: 'right',
      imageFit: 'contain',
    },
    {
      tag: 'Kompletná výroba',
      title: 'Výroba pod vlastnou strechou',
      description: 'CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.',
      buttonLabel: 'Zistiť viac →',
      buttonHref: '/vyroba',
      imageSrc: '/images/vyroba_b79432df.jpeg',
      imageAlt: 'Výroba',
      imageAlign: 'left',
      imageFit: 'cover',
    },
    {
      tag: 'Vlastný produkt',
      title: 'eTRAKTOR',
      description:
        'Elektrický malotraktor ET 2000 a ET 3000. Nulové emisie, tichá prevádzka, 90% účinnosť motora.',
      buttonLabel: 'Zistiť viac →',
      buttonHref: '/produkty',
      imageSrc: '/images/elektricky-malotraktor.jpg',
      imageAlt: 'eTRAKTOR',
      imageAlign: 'right',
      imageFit: 'cover',
    },
  ],
  extrasTag: 'Doplnkové služby',
  extrasTitle: 'Ďalšie čo ponúkame',
  extras: [
    'Renovácia starých strojov – zvýšenie bezpečnosti',
    'Analýza rizík (STN EN ISO 12100:2011, STN EN 1175)',
    'Pevnostné výpočty',
    'Digitalizácia strojov – reverzné inžinierstvo',
    'Poradenská činnosť',
    'Rešerš aktuálnych riešení vo svete',
    'Koncepty a plány nákladov',
    'Certifikácia v spolupráci s TISR',
  ],
  aboutTag: 'O spoločnosti',
  aboutTitle: 'Etraktor, s.r.o.',
  aboutText:
    'Inovatívna spoločnosť z Bardejova, hlavne zameraná na vývoj nových produktov od myšlienky po realizáciu. Zaoberáme sa vývojom transportných paliet pre prepravu dielov v automobilovom priemysle. Oblasť strojárstva, založená v roku 2019.',
  aboutImageSrc: '/images/elektricky-malotraktor.jpg',
  aboutIcoLabel: 'IČO',
  aboutIcoValue: '52134539',
  aboutDicLabel: 'DIČ',
  aboutDicValue: '2120911815',
  aboutAddressLabel: 'Sídlo',
  aboutAddressValue: 'Duklianska 1376/17, 08501 Bardejov',
  ctaTitle: 'Máte projekt na mysli?',
  ctaText: 'Ozvite sa nám – radi preberieme Vaše požiadavky a navrhneme riešenie.',
  ctaButtonLabel: 'Kontaktujte nás',
  ctaButtonHref: '/kontakt',
}

export const defaultPalletsPage: SimplePageContent = {
  heroTag: 'Logistika & Automobilový priemysel',
  heroTitle: 'Transportné palety',
  heroDescription:
    'Transportné palety sú základným kameňom modernej logistiky a skladovania nie len v automotíve. Pevná a unifikovaná základňa pre efektívny presun tovaru vo veľkom množstve.',
  sections: [
    {
      tag: 'Nerobotické palety',
      title: 'Nerobotické palety',
      description:
        'Transportné palety sú základným kameňom modernej logistiky a skladovania nie len v automotíve. Ich hlavným účelom je vytvoriť pevnú a unifikovanú základňu, ktorá umožňuje efektívny presun tovaru vo veľkom množstve bez ohľadu na to či je materiál zakladaný ručne alebo robotom.',
      buttonLabel: 'Mám záujem',
      buttonHref: '/kontakt',
      imageSrc: '/images/palety_f149ab5c.jpeg',
      imageAlt: 'Nerobotické palety',
      imageAlign: 'right',
      imageFit: 'contain',
    },
    {
      tag: 'Robotické riešenia',
      title: 'Robotické palety & zásobníky',
      description:
        'Robotické palety a zásobníky sú navrhnuté pre plne automatizované výrobné linky. Zaručujú presnú polohu dielov pre robotické uchopovanie a presun.',
      buttonLabel: 'Dopytovať riešenie',
      buttonHref: '/kontakt',
      imageSrc: '/images/palety_1c58982b.jpeg',
      imageAlt: 'Robotické palety',
      imageAlign: 'left',
      imageFit: 'contain',
      bullets: [
        'Robotické palety pre automobilový priemysel',
        'Robotické zásobníky s presnou polohou dielov',
        'Vlastná výroba pod jednou strechou',
        'Konštrukčný vývoj, výroba, montáž, dokumentácia',
      ],
    },
  ],
  galleryTag: 'Ukážky realizácií',
  galleryTitle: 'Príklady paliet',
  galleryDescription: 'Výber riešení z logistiky a automotive výroby.',
  galleryCards: [
    {
      title: 'Nerobotické transportné palety',
      description: 'Palety pre ručné zakladanie materiálu a bezpečný transport.',
      imageSrc: '/images/palety_f149ab5c.jpeg',
      imageAlt: 'Nerobotické palety',
    },
    {
      title: 'Robotické palety a zásobníky',
      description: 'Presná poloha dielov pre robotické uchopovanie.',
      imageSrc: '/images/palety_1c58982b.jpeg',
      imageAlt: 'Robotické palety',
    },
  ],
  processTag: '',
  processTitle: '',
  processSteps: [],
  ctaTitle: 'Potrebujete transportné palety?',
  ctaText: 'Navrhneme riešenie presne podľa Vašich požiadaviek.',
  ctaButtonLabel: 'Kontaktujte nás',
  ctaButtonHref: '/kontakt',
}

export const defaultDevicesPage: SimplePageContent = {
  heroTag: 'Priemyselná automatizácia',
  heroTitle: 'Jednoúčelové zariadenia',
  heroDescription:
    'Vytvoríme Vám zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky a ďalšie.',
  sections: [],
  galleryTag: 'Ukážky realizácií',
  galleryTitle: 'Naše realizácie',
  galleryDescription: '',
  galleryCards: [
    {
      title: 'Linka dverí pre školiace stredisko',
      description: 'Kompletné riešenie na kľúč vrátane konštrukčného vývoja a montáže.',
      imageSrc: '/images/zariadenia_666ca974.jpeg',
      imageAlt: 'Linka dverí',
    },
    {
      title: 'Kontrolné prípravky',
      description: 'Presné kontrolné prípravky pre výrobné linky a QA procesy.',
      imageSrc: '/images/zariadenia_8beb0717.jpeg',
      imageAlt: 'Kontrolné prípravky',
    },
    {
      title: 'Násypný vážiaci modul',
      description: 'Špeciálne zariadenie pre presné váženie a dávkovanie materiálu.',
      imageSrc: '/images/zariadenia_180dd027.jpeg',
      imageAlt: 'Násypný vážiaci modul',
    },
  ],
  processTag: 'Náš postup',
  processTitle: 'Vývoj produktu A – Z',
  processSteps: [
    {number: '01', title: 'Rešerš & Koncept', description: 'Rešerš aktuálnych riešení vo svete, koncepty a plány nákladov.'},
    {number: '02', title: 'Konštrukcia', description: 'Dodávateľ konštrukčnej dokumentácie, konštrukčný vývoj.'},
    {number: '03', title: 'Výroba & Montáž', description: 'Realizačná činnosť výroby produktu, montáž a oživenie.'},
    {number: '04', title: 'Certifikácia', description: 'Dokumentácia a certifikácia v spolupráci s TISR.'},
  ],
  ctaTitle: 'Máte špecifické požiadavky?',
  ctaText: 'Vytvoríme zariadenie na kľúč – od konceptu po certifikáciu.',
  ctaButtonLabel: 'Kontaktujte nás',
  ctaButtonHref: '/kontakt',
}

export const defaultProductionPage: SimplePageContent = {
  heroTag: 'Kompletná výroba',
  heroTitle: 'Výroba pod vlastnou strechou',
  heroDescription: 'CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.',
  sections: [],
  galleryTag: 'Naša dielňa',
  galleryTitle: 'Výrobné priestory',
  galleryDescription: 'Pozrite si zázemie kde vznikajú naše produkty.',
  galleryCards: [
    {title: 'Výrobný priestor 1', description: '', imageSrc: '/images/vyroba_b79432df.jpeg', imageAlt: 'Výrobný priestor 1'},
    {title: 'Výrobný priestor 2', description: '', imageSrc: '/images/vyroba_ac05ee94.jpeg', imageAlt: 'Výrobný priestor 2'},
    {title: 'Výrobný priestor 3', description: '', imageSrc: '/images/vyroba_781d8e3e.jpeg', imageAlt: 'Výrobný priestor 3'},
    {title: 'Výrobný priestor 4', description: '', imageSrc: '/images/vyroba_100e7e85.jpeg', imageAlt: 'Výrobný priestor 4'},
    {title: 'Výrobný priestor 5', description: '', imageSrc: '/images/vyroba_40c95da1.jpeg', imageAlt: 'Výrobný priestor 5'},
  ],
  processTag: 'Kapacity',
  processTitle: 'Čo vyrábame',
  processSteps: [
    {number: '01', title: 'CNC pálenie', description: 'Presné CNC pálenie kovových dielov pre potreby výroby aj zákazníkov.'},
    {number: '02', title: 'CNC ohýbanie', description: 'Ohýbanie plechov a profilov s presnou toleranciou.'},
    {number: '03', title: 'Elektrické rozvádzače', description: 'Návrh, výroba a montáž elektrických rozvádzačov.'},
  ],
  ctaTitle: 'Potrebujete výrobné kapacity?',
  ctaText: 'Realizujeme projekty od návrhu po hotový produkt.',
  ctaButtonLabel: 'Kontaktujte nás',
  ctaButtonHref: '/kontakt',
}

export const defaultContactPage: ContactPageContent = {
  heroTag: 'Spojme sa',
  heroTitle: 'Kontaktujte nás',
  heroText: 'Ozvite sa nám – radi preberieme Vaše požiadavky a navrhneme riešenie.',
  detailsTitle: 'Kontaktné údaje',
  contactPersonLabel: 'Kontaktná osoba',
  contactPersonValue: 'Ing. Rastislav Tribula, PhD',
  addressLabel: 'Sídlo',
  addressValue: 'Duklianska 1376/17\n08501 Bardejov\nSlovenská republika',
  phoneLabel: 'Telefón',
  phoneValue: '+421 907 933 648',
  emailLabel: 'Email',
  emailValue: 'info@etraktor.sk',
  webLabel: 'Web',
  webValue: 'https://www.etraktor.sk',
  companyDataTitle: 'Firemné údaje',
  companyIco: '52134539',
  companyDic: '2120911815',
  companyYear: '2019',
  formTitle: 'Odoslať správu',
  formNameLabel: 'Meno a priezvisko',
  formPhoneLabel: 'Telefón',
  formEmailLabel: 'Email',
  formTopicLabel: 'Oblasť záujmu',
  formMessageLabel: 'Správa',
  formSubmitLabel: 'Odoslať dopyt',
  inquiryOptions: [
    'eTRAKTOR – ET 2000',
    'eTRAKTOR – ET 3000',
    'Príslušenstvo',
    'Transportné palety',
    'Jednoúčelové zariadenia',
    'Výroba / CNC',
    'Iné',
  ],
}

export const defaultProductsPage: ProductContent = {
  heroEyebrow: 'Vlastný produkt Etraktor, s.r.o.',
  heroTitle: 'Elektrický malotraktor',
  heroAccent: 'ET 2000',
  heroSubtitle: 'Traktor, ktorý šetrí Vašu peňaženku i životné prostredie!',
  heroDescription:
    'Nulové emisie, tichá prevádzka a minimálne prevádzkové náklady. Moderná alternatíva k spaľovacím motorom pre záhradu, poľnohospodárstvo aj priemysel.',
  heroPrimaryLabel: 'Dopytovať cenu',
  heroPrimaryHref: '/kontakt',
  heroSecondaryLabel: 'Technické parametre',
  heroSecondaryHref: '#parametre',
  heroImageSrc: '/images/elektricky-malotraktor.jpg',
  heroStats: [
    {value: '90%', label: 'Účinnosť motora'},
    {value: '0', label: 'Lokálnych emisií'},
    {value: '66 dBA', label: 'Hladina hluku'},
    {value: '15 km/h', label: 'Max. rýchlosť'},
  ],
  introTag: 'Inteligentnejší pohon',
  introTitle: 'Prečo elektrický malotraktor?',
  introParagraphs: [
    'Elektrický malotraktor sa vyznačuje vyššou účinnosťou využitia energie ako klasické benzínové (resp. naftové) motory. Účinnosť spaľovacích motorov je cca 15–20%. U elektrických motoroch sa to pohybuje okolo 90%.',
    'Elektromotor má niekoľko súčastí, pri činnosti nedochádza k treniu, takže jeho životnosť je bez ohľadu na ložiská takmer neobmedzená.',
    'Samotná jazda na elektrickom traktore je veľmi jednoduchá. Maximálny záberový moment od nulových otáčkach je pôžitkom pri jazde.',
  ],
  introImageSrc: '/images/elektricky-malotraktor.jpg',
  efficiencyTitleA: 'Elektrický motor ET 2000',
  efficiencyValueA: '90%',
  efficiencyTitleB: 'Spaľovací motor (benzín/nafta)',
  efficiencyValueB: '15–20%',
  benefitsTag: 'Výhody zariadenia',
  benefitsTitle: 'Výhody ET 2000',
  benefits: [
    'Vysoký výkon – maximálny záberový moment od nulových otáčok, plynulá regulácia 0–15 km/h',
    'Tichá prevádzka – len 66 dBA, vhodný do obytných zón a uzavretých priestorov',
    'Nulové emisie – žiadne miestne emisie z výfuku, ideálny pre sklady a skleníky',
    'Jednoduchá obsluha – komfortná jazda, automatická regulácia rýchlosti',
    'Nízke prevádzkové náklady – minimum pohyblivých dielov, bez oleja a filtrov',
    'Rekuperácia energie – 90% brzdenia dobíja akumulátory späť',
  ],
  useCasesTag: 'Možnosti použitia',
  useCasesTitle: 'Kde ho využijete',
  useCases: [
    {title: 'V domácnosti', description: 'Úpravy záhrady a pozemku'},
    {title: 'Lesohospodárstvo', description: 'Práce v lese'},
    {title: 'Poľnohospodárstvo', description: 'Orba, kosenie, zber'},
    {title: 'Priemysel', description: 'Sklady, skleníky'},
    {title: 'Samospráva', description: 'Obce a parky'},
    {title: 'Certifikované', description: 'Spĺňa normy'},
  ],
  dimensionsTag: 'ET 2000 – Špecifikácie',
  dimensionsTitle: 'Technické parametre',
  dimensionImages: [
    {src: '/images/rozmerythumb1.png', alt: 'Rozmery 1'},
    {src: '/images/rozmerythumb2.png', alt: 'Rozmery 2'},
    {src: '/images/rozmerythumb3.png', alt: 'Rozmery 3'},
  ],
  basicSpecs: [
    {parameter: 'Typ zariadenia', valueA: 'ET 2000', valueB: 'ET 2000'},
    {parameter: 'Typ pohonu', valueA: 'Samonosná tuhá náprava s diferenciálom', valueB: 'Samonosná tuhá náprava s diferenciálom'},
    {parameter: 'Rýchlosť vpred / vzad', valueA: '0–15 km/h / 0–7 km/h', valueB: '0–15 km/h / 0–7 km/h'},
    {parameter: 'Najmenší priemer otáčania', valueA: '6,5 m', valueB: '6,5 m'},
    {parameter: 'Hmotnosť traktora', valueA: '380 kg', valueB: '480 kg'},
    {parameter: 'Max. ťahaný náklad', valueA: '300 kg / 1 300 kg*', valueB: '400 kg / 1 300 kg*'},
    {parameter: 'Max. celková hmotnosť', valueA: '680 kg / 1 680 kg*', valueB: '880 kg'},
    {parameter: 'Max. ťažná sila (asfalt)', valueA: '2 800 N', valueB: '3 650 N'},
    {parameter: 'Brodenie', valueA: '150 mm pri 5 km/h', valueB: '150 mm pri 5 km/h'},
    {parameter: 'Max. sklon povrchu', valueA: '10° (17%)', valueB: '10° (17%)'},
    {parameter: 'Max. veľkosť prekážky', valueA: '120 mm', valueB: '120 mm'},
    {parameter: 'Prevádzková teplota', valueA: '−5°C až +40°C', valueB: '−5°C až +40°C'},
    {parameter: 'Prevádzková vlhkosť', valueA: '30–80% (bez kondenzácie)', valueB: '30–80% (bez kondenzácie)'},
    {parameter: 'Hladina akustického tlaku', valueA: '66 dBA', valueB: '66 dBA'},
  ],
  batterySpecs: [
    {parameter: 'Typ batérií', valueA: 'Hawker XFC – trakčné (bez údržby)', valueB: 'Hawker XFC – trakčné (bez údržby)'},
    {parameter: 'Kapacita', valueA: '158 Ah', valueB: '316 Ah'},
    {parameter: 'Hmotnosť konfigurácie', valueA: '380 kg', valueB: '480 kg'},
    {parameter: 'Životnosť (60% vybitie)', valueA: '1 200 ZVEI cyklov', valueB: '1 200 ZVEI cyklov'},
    {parameter: 'Životnosť (80% vybitie)', valueA: '800 cyklov', valueB: '800 cyklov'},
    {parameter: 'Menovitá prevádzková teplota', valueA: '30°C', valueB: '30°C'},
    {parameter: 'Doplňovanie destilovanej vody', valueA: 'Nie je potrebné', valueB: 'Nie je potrebné'},
  ],
  chargingSpecs: [
    {parameter: 'Typ nabíjačky', value: 'Hawker XFC schválená nabíjačka'},
    {parameter: 'Vstupné napätie', value: '240V AC (sieť)'},
    {parameter: 'Výstupné napätie', value: '24V DC'},
    {parameter: 'Prúd nabíjačky (opcia)', value: '40A'},
    {parameter: 'Nabíjanie počas prevádzky', value: 'Kdekoľvek – bez poškodenia batérií'},
    {parameter: 'Odporúčané skladovanie', value: 'Plne nabité, 20°C, sucho'},
  ],
  equipmentGroups: [
    {
      title: 'Výkon akumulátorov',
      items: [
        {label: '2×12V DC – 158 Ah', type: 'štandard'},
        {label: '4×12V DC – 316 Ah', type: 'opcia'},
        {label: 'Nabíjačka HAWKER 24V / 40A', type: 'opcia'},
      ],
    },
    {
      title: 'Bezpečnosť',
      items: [
        {label: 'Kotúčové brzdy na prednej náprave', type: 'štandard'},
        {label: 'Elektrická parkovacia brzda', type: 'štandard'},
        {label: 'Svetlá + smerovky', type: 'štandard'},
        {label: 'Výstražná trúba', type: 'štandard'},
        {label: 'Maják', type: 'opcia'},
      ],
    },
    {
      title: 'Komfort',
      items: [
        {label: 'Odprúžené sedadlo s opierkami', type: 'štandard'},
        {label: 'Spätné zrkadlá', type: 'štandard'},
        {label: 'Informačný display', type: 'štandard'},
        {label: 'Rádio FM/MP3 + 2 reproduktory', type: 'opcia'},
        {label: 'Kabína so stieračom a ostrekovačom', type: 'opcia'},
      ],
    },
    {
      title: 'Iná výbava',
      items: [
        {label: 'Elektrická zásuvka prívesného vozíka', type: 'štandard'},
        {label: 'Ťažná guľa 50 mm', type: 'opcia'},
        {label: 'Hydraulické čerpadlo 380 bar / 12 cm³', type: 'opcia'},
        {label: 'Napäťový konektor pre príslušenstvo 50A', type: 'opcia'},
      ],
    },
  ],
  rangeTag: 'Kapacita a výdrž',
  rangeTitle: 'Dojazd malotraktora',
  rangeCards: [
    {
      title: 'Konfigurácia 2×12V DC',
      badge: 'štandard',
      badgeClass: 'badge-std',
      info: 'Hmotnosť 380 kg • Kapacita 158 Ah • Štandardná konfigurácia pre záhradné a poľnohospodárske práce.',
      imageSrc: '/images/dojazd1.jpg',
    },
    {
      title: 'Konfigurácia 4×12V DC',
      badge: 'opcia',
      badgeClass: 'badge-opt',
      info: 'Hmotnosť 480 kg • Kapacita 316 Ah • Rozšírená kapacita pre náročné priemyselné nasadenie.',
      imageSrc: '/images/dojazd2.jpg',
    },
  ],
  accessoriesTag: 'Rozšírené možnosti',
  accessoriesTitle: 'Príslušenstvo',
  accessories: [
    {
      title: 'Kompletný sortiment',
      description: 'Jarkovače, hrobkovače, vyorávače, oborávacie kolesá, pasívne kypriče, plečky, vlečky, valce.',
      imageSrc: '/images/prislusenstvosumar.jpg',
      imageAlt: 'Kompletný sortiment',
    },
    {
      title: 'Predná radlica na sneh',
      description: 'Robustné prevedenie s výmenným gumovým britom. Nastaviteľný uhol ±15° a ±30°.',
      imageSrc: '/images/prislusenstvo.jpg',
      imageAlt: 'Predná radlica na sneh',
    },
    {
      title: 'Zadný záves',
      description: 'Univerzálny zadný záves pre pluh, vyorávač zemiakov, brány a ďalšie príslušenstvo.',
      imageSrc: '/images/zadnyzaves.png',
      imageAlt: 'Zadný záves',
    },
  ],
  certificatesTag: 'Normy a certifikácia',
  certificatesTitle: 'Certifikované zariadenie',
  certificates: [
    {src: '/images/certifikat1.jpg', alt: 'Certifikát 1', title: 'Certifikát 1'},
    {src: '/images/certifikat2.jpg', alt: 'Certifikát 2', title: 'Certifikát 2'},
  ],
  galleryTag: 'ET 2000 v akcii',
  galleryTitle: 'Fotogaléria',
  galleryDescription: 'Kliknite na fotografiu pre zväčšenie.',
  galleryImages: [
    {src: '/images/elektricky-malotraktor.jpg', alt: 'ET 2000'},
    {src: '/images/dojazd1.jpg', alt: 'Dojazd 2x12V'},
    {src: '/images/dojazd2.jpg', alt: 'Dojazd 4x12V'},
    {src: '/images/prislusenstvosumar.jpg', alt: 'Kompletný sortiment'},
    {src: '/images/prislusenstvo.jpg', alt: 'Predná radlica na sneh'},
    {src: '/images/zadnyzaves.png', alt: 'Zadný záves'},
    {src: '/images/prislusenstvo2.png', alt: 'Príslušenstvo 2'},
    {src: '/images/prislusenstvo3.png', alt: 'Príslušenstvo 3'},
    {src: '/images/prislusenstvo4.png', alt: 'Príslušenstvo 4'},
  ],
  videosTag: 'ET 2000 v akcii',
  videosTitle: 'Videogaléria',
  videos: [
    {youtubeId: 'I7Z70rEkqOM', label: 'Tichý chod traktora'},
    {youtubeId: 'Cfy4jgR9W-o', label: 'Jazda v teréne'},
    {youtubeId: 'fLnGy33aTTY', label: 'Prevoz traktora'},
    {youtubeId: 'cJbF7qgYVOU', label: 'Jazda v teréne'},
    {youtubeId: '7MlTOTEkZIw', label: 'Jazda s vlečkou'},
    {youtubeId: '6EyL3EoOSRc', label: 'Príves 600 kg'},
    {youtubeId: 'Tox78aF9JGE', label: 'Radlica na sneh'},
    {youtubeId: '2fQrQQxhaTo', label: 'Pluh'},
    {youtubeId: 'udw-Vbazfhs', label: 'Kosenie / Zametanie'},
  ],
  ctaTitle: 'Získajte cenovú ponuku',
  ctaText: 'Aktuálny cenník ET 2000 vám poskytneme na vyžiadanie. Cena závisí od konfigurácie akumulátorov a príslušenstva.',
  ctaPrimaryLabel: 'Napísať správu',
  ctaPrimaryHref: '/kontakt',
  ctaSecondaryLabel: '+421 907 933 648',
  ctaSecondaryHref: 'tel:+421907933648',
}

export async function getSiteSettings(): Promise<SiteSettingsContent> {
  const data = await fetchSingle<any>(siteSettingsQuery)

  if (!data) return defaultSiteSettings

  return {
    siteTitle: data.siteTitle || defaultSiteSettings.siteTitle,
    companyName: data.companyName || defaultSiteSettings.companyName,
    domain: data.domain || defaultSiteSettings.domain,
    logoSrc: assetUrl(data.logo, defaultSiteSettings.logoSrc),
    contactLabel: data.contactLabel || defaultSiteSettings.contactLabel,
    referencesTag: data.referencesTag || defaultSiteSettings.referencesTag,
    references:
      data.references?.map((item: any, index: number) => ({
        alt: item?.alt || defaultSiteSettings.references[index]?.alt || `Referencia ${index + 1}`,
        src: assetUrl(item?.image, defaultSiteSettings.references[index]?.src || '/refs/ref4.jpg'),
      })) || defaultSiteSettings.references,
    navItems: data.navItems?.length ? data.navItems : defaultSiteSettings.navItems,
    footerLinks: data.footerLinks?.length ? data.footerLinks : defaultSiteSettings.footerLinks,
    footerAddress: data.footerAddress || defaultSiteSettings.footerAddress,
    footerCredit: data.footerCredit || defaultSiteSettings.footerCredit,
  }
}

export async function getHomePage(): Promise<HomePageContent> {
  const data = await fetchSingle<any>(homePageQuery)

  if (!data) return defaultHomePage

  return {
    ...defaultHomePage,
    ...data,
    heroBackgroundImageSrc: assetUrl(data.heroBackgroundImage, defaultHomePage.heroBackgroundImageSrc),
    heroProductImageSrc: assetUrl(data.heroProductImage, defaultHomePage.heroProductImageSrc),
    aboutImageSrc: assetUrl(data.aboutImage, defaultHomePage.aboutImageSrc),
    heroStats: data.heroStats?.length ? data.heroStats : defaultHomePage.heroStats,
    services:
      data.services?.length
        ? data.services.map((service: any, index: number) => ({
            tag: service.tag || defaultHomePage.services[index]?.tag || '',
            title: service.title || defaultHomePage.services[index]?.title || '',
            description: service.description || defaultHomePage.services[index]?.description || '',
            buttonLabel: service.buttonLabel || defaultHomePage.services[index]?.buttonLabel || '',
            buttonHref: service.buttonHref || defaultHomePage.services[index]?.buttonHref || '/kontakt',
            imageSrc: assetUrl(service.image, defaultHomePage.services[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
            imageAlt: service.title || defaultHomePage.services[index]?.imageAlt || 'Obrázok služby',
            imageAlign: service.imageAlign || defaultHomePage.services[index]?.imageAlign || 'left',
            imageFit: service.imageFit || defaultHomePage.services[index]?.imageFit || 'contain',
          }))
        : defaultHomePage.services,
    extras: data.extras?.length ? data.extras : defaultHomePage.extras,
  }
}

function mapSimplePage(data: any, fallback: SimplePageContent): SimplePageContent {
  if (!data) return fallback

  return {
    ...fallback,
    ...data,
    sections:
      data.sections?.map((section: any, index: number) => ({
        _key: section._key,
        tag: section.tag || fallback.sections[index]?.tag || '',
        title: section.title || fallback.sections[index]?.title || '',
        description: section.description || fallback.sections[index]?.description || '',
        buttonLabel: section.buttonLabel || fallback.sections[index]?.buttonLabel,
        buttonHref: section.buttonHref || fallback.sections[index]?.buttonHref,
        imageSrc: assetUrl(section.image, fallback.sections[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
        imageAlt: section.title || fallback.sections[index]?.imageAlt || 'Sekcia',
        imageAlign: section.imageAlign || fallback.sections[index]?.imageAlign || 'left',
        imageFit: section.imageFit || fallback.sections[index]?.imageFit || 'contain',
        bullets: section.bullets?.length ? section.bullets : fallback.sections[index]?.bullets,
      })) || fallback.sections,
    galleryCards:
      data.galleryCards?.map((card: any, index: number) => ({
        _key: card._key,
        title: card.title || fallback.galleryCards[index]?.title || '',
        description: card.description || fallback.galleryCards[index]?.description || '',
        imageSrc: assetUrl(card.image, fallback.galleryCards[index]?.imageSrc || '/images/elektricky-malotraktor.jpg'),
        imageAlt: card.alt || fallback.galleryCards[index]?.imageAlt || card.title || 'Galéria',
      })) || fallback.galleryCards,
    processSteps:
      data.processSteps?.length
        ? data.processSteps.map((step: any) => ({
            _key: step._key,
            number: step.number,
            title: step.title,
            description: step.description,
          }))
        : fallback.processSteps,
  }
}

function toSimplePageDocument(page: SimplePageContent) {
  return {
    heroTag: page.heroTag,
    heroTitle: page.heroTitle,
    heroDescription: page.heroDescription,
    sections: page.sections.map((section) => ({
      tag: section.tag,
      title: section.title,
      description: section.description,
      buttonLabel: section.buttonLabel,
      buttonHref: section.buttonHref,
      imageAlign: section.imageAlign,
      imageFit: section.imageFit,
      bullets: section.bullets,
    })),
    galleryTag: page.galleryTag,
    galleryTitle: page.galleryTitle,
    galleryDescription: page.galleryDescription,
    galleryCards: page.galleryCards.map((card) => ({
      title: card.title,
      description: card.description,
      alt: card.imageAlt,
    })),
    processTag: page.processTag,
    processTitle: page.processTitle,
    processSteps: page.processSteps.map((step) => ({
      number: step.number,
      title: step.title,
      description: step.description,
    })),
    ctaTitle: page.ctaTitle,
    ctaText: page.ctaText,
    ctaButtonLabel: page.ctaButtonLabel,
    ctaButtonHref: page.ctaButtonHref,
  }
}

function toContactPageDocument(page: ContactPageContent) {
  return {
    heroTag: page.heroTag,
    heroTitle: page.heroTitle,
    heroText: page.heroText,
    detailsTitle: page.detailsTitle,
    contactPersonLabel: page.contactPersonLabel,
    contactPersonValue: page.contactPersonValue,
    addressLabel: page.addressLabel,
    addressValue: page.addressValue,
    phoneLabel: page.phoneLabel,
    phoneValue: page.phoneValue,
    emailLabel: page.emailLabel,
    emailValue: page.emailValue,
    webLabel: page.webLabel,
    webValue: page.webValue,
    companyDataTitle: page.companyDataTitle,
    companyIco: page.companyIco,
    companyDic: page.companyDic,
    companyYear: page.companyYear,
    formTitle: page.formTitle,
    formNameLabel: page.formNameLabel,
    formPhoneLabel: page.formPhoneLabel,
    formEmailLabel: page.formEmailLabel,
    formTopicLabel: page.formTopicLabel,
    formMessageLabel: page.formMessageLabel,
    formSubmitLabel: page.formSubmitLabel,
    inquiryOptions: page.inquiryOptions,
  }
}

function toProductsPageDocument(page: ProductContent) {
  return {
    heroEyebrow: page.heroEyebrow,
    heroTitle: page.heroTitle,
    heroAccent: page.heroAccent,
    heroSubtitle: page.heroSubtitle,
    heroDescription: page.heroDescription,
    heroPrimaryLabel: page.heroPrimaryLabel,
    heroPrimaryHref: page.heroPrimaryHref,
    heroSecondaryLabel: page.heroSecondaryLabel,
    heroSecondaryHref: page.heroSecondaryHref,
    heroStats: page.heroStats,
    introTag: page.introTag,
    introTitle: page.introTitle,
    introParagraphs: page.introParagraphs,
    efficiencyTitleA: page.efficiencyTitleA,
    efficiencyValueA: page.efficiencyValueA,
    efficiencyTitleB: page.efficiencyTitleB,
    efficiencyValueB: page.efficiencyValueB,
    benefitsTag: page.benefitsTag,
    benefitsTitle: page.benefitsTitle,
    benefits: page.benefits,
    useCasesTag: page.useCasesTag,
    useCasesTitle: page.useCasesTitle,
    useCases: page.useCases,
    dimensionsTag: page.dimensionsTag,
    dimensionsTitle: page.dimensionsTitle,
    dimensionImages: page.dimensionImages.map((image) => ({alt: image.alt})),
    basicSpecs: page.basicSpecs,
    batterySpecs: page.batterySpecs,
    chargingSpecs: page.chargingSpecs,
    equipmentGroups: page.equipmentGroups,
    rangeTag: page.rangeTag,
    rangeTitle: page.rangeTitle,
    rangeCards: page.rangeCards.map((card) => ({
      title: card.title,
      badge: card.badge,
      badgeClass: card.badgeClass,
      info: card.info,
    })),
    accessoriesTag: page.accessoriesTag,
    accessoriesTitle: page.accessoriesTitle,
    accessories: page.accessories.map((item) => ({
      title: item.title,
      description: item.description,
      alt: item.imageAlt,
    })),
    certificatesTag: page.certificatesTag,
    certificatesTitle: page.certificatesTitle,
    certificates: page.certificates.map((item) => ({
      title: item.title,
      alt: item.alt,
    })),
    galleryTag: page.galleryTag,
    galleryTitle: page.galleryTitle,
    galleryDescription: page.galleryDescription,
    galleryImages: page.galleryImages.map((image) => ({alt: image.alt})),
    videosTag: page.videosTag,
    videosTitle: page.videosTitle,
    videos: page.videos,
    ctaTitle: page.ctaTitle,
    ctaText: page.ctaText,
    ctaPrimaryLabel: page.ctaPrimaryLabel,
    ctaPrimaryHref: page.ctaPrimaryHref,
    ctaSecondaryLabel: page.ctaSecondaryLabel,
    ctaSecondaryHref: page.ctaSecondaryHref,
  }
}

export async function getPalletsPage() {
  return mapSimplePage(
    await fetchSingletonWithSeed<any>(
      palletsPageQuery,
      'palletsPage',
      'palletsPage',
      toSimplePageDocument(defaultPalletsPage),
    ),
    defaultPalletsPage,
  )
}

export async function getProductionPage() {
  return mapSimplePage(
    await fetchSingletonWithSeed<any>(
      productionPageQuery,
      'productionPage',
      'productionPage',
      toSimplePageDocument(defaultProductionPage),
    ),
    defaultProductionPage,
  )
}

export async function getDevicesPage() {
  return mapSimplePage(
    await fetchSingletonWithSeed<any>(
      devicesPageQuery,
      'devicesPage',
      'devicesPage',
      toSimplePageDocument(defaultDevicesPage),
    ),
    defaultDevicesPage,
  )
}

export async function getContactPage(): Promise<ContactPageContent> {
  const data = await fetchSingletonWithSeed<any>(
    contactPageQuery,
    'contactPage',
    'contactPage',
    toContactPageDocument(defaultContactPage),
  )
  return data ? {...defaultContactPage, ...data} : defaultContactPage
}

export async function getProductsPage(): Promise<ProductContent> {
  const data = await fetchSingletonWithSeed<any>(
    productsPageQuery,
    'productsPage',
    'productsPage',
    toProductsPageDocument(defaultProductsPage),
  )

  if (!data) return defaultProductsPage

  return {
    ...defaultProductsPage,
    ...data,
    heroImageSrc: assetUrl(data.heroImage, defaultProductsPage.heroImageSrc),
    introImageSrc: assetUrl(data.introImage, defaultProductsPage.introImageSrc),
    heroStats: data.heroStats?.length ? data.heroStats : defaultProductsPage.heroStats,
    introParagraphs: data.introParagraphs?.length ? data.introParagraphs : defaultProductsPage.introParagraphs,
    benefits: data.benefits?.length ? data.benefits : defaultProductsPage.benefits,
    useCases: data.useCases?.length ? data.useCases : defaultProductsPage.useCases,
    dimensionImages:
      data.dimensionImages?.map((item: any, index: number) => ({
        src: assetUrl(item.image, defaultProductsPage.dimensionImages[index]?.src || '/images/rozmerythumb1.png'),
        alt: item.alt || defaultProductsPage.dimensionImages[index]?.alt || `Rozmery ${index + 1}`,
      })) || defaultProductsPage.dimensionImages,
    basicSpecs: data.basicSpecs?.length ? data.basicSpecs : defaultProductsPage.basicSpecs,
    batterySpecs: data.batterySpecs?.length ? data.batterySpecs : defaultProductsPage.batterySpecs,
    chargingSpecs: data.chargingSpecs?.length ? data.chargingSpecs : defaultProductsPage.chargingSpecs,
    equipmentGroups: data.equipmentGroups?.length ? data.equipmentGroups : defaultProductsPage.equipmentGroups,
    rangeCards:
      data.rangeCards?.map((card: any, index: number) => ({
        title: card.title || defaultProductsPage.rangeCards[index]?.title || '',
        badge: card.badge || defaultProductsPage.rangeCards[index]?.badge || '',
        badgeClass: card.badgeClass || defaultProductsPage.rangeCards[index]?.badgeClass || 'badge-std',
        info: card.info || defaultProductsPage.rangeCards[index]?.info || '',
        imageSrc: assetUrl(card.image, defaultProductsPage.rangeCards[index]?.imageSrc || '/images/dojazd1.jpg'),
      })) || defaultProductsPage.rangeCards,
    accessories:
      data.accessories?.map((item: any, index: number) => ({
        title: item.title || defaultProductsPage.accessories[index]?.title || '',
        description: item.description || defaultProductsPage.accessories[index]?.description || '',
        imageSrc: assetUrl(item.image, defaultProductsPage.accessories[index]?.imageSrc || '/images/prislusenstvo.jpg'),
        imageAlt: item.alt || defaultProductsPage.accessories[index]?.imageAlt || item.title || 'Príslušenstvo',
      })) || defaultProductsPage.accessories,
    certificates:
      data.certificates?.map((item: any, index: number) => ({
        title: item.title || defaultProductsPage.certificates[index]?.title || `Certifikát ${index + 1}`,
        alt: item.alt || defaultProductsPage.certificates[index]?.alt || `Certifikát ${index + 1}`,
        src: assetUrl(item.image, defaultProductsPage.certificates[index]?.src || '/images/certifikat1.jpg'),
      })) || defaultProductsPage.certificates,
    galleryImages:
      data.galleryImages?.map((item: any, index: number) => ({
        src: assetUrl(item.image, defaultProductsPage.galleryImages[index]?.src || '/images/elektricky-malotraktor.jpg'),
        alt: item.alt || defaultProductsPage.galleryImages[index]?.alt || `Galéria ${index + 1}`,
      })) || defaultProductsPage.galleryImages,
    videos: data.videos?.length ? data.videos : defaultProductsPage.videos,
  }
}
