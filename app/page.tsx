import Link from 'next/link'
import {draftMode} from 'next/headers'
import {VisualEditing, createDataAttribute, groq} from 'next-sanity'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type {Metadata} from 'next'

import {previewSanityClient, sanityClient} from '@/sanity/lib/client'
import {urlForImage} from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

const homePageAttr = createDataAttribute({id: 'homePage', type: 'homePage'})

type Stat = {
  value?: string
  label?: string
}

type Service = {
  tag?: string
  title?: string
  description?: string
  buttonLabel?: string
  buttonHref?: string
  image?: unknown
  imageAlign?: 'left' | 'right'
  imageFit?: 'contain' | 'cover'
}

type HomePageData = {
  heroEyebrow?: string
  heroTitleLine1?: string
  heroTitleLine2?: string
  heroTitleAccent?: string
  heroSubtitle?: string
  heroDescription?: string
  heroPrimaryLabel?: string
  heroPrimaryHref?: string
  heroSecondaryLabel?: string
  heroSecondaryHref?: string
  heroBackgroundImage?: unknown
  heroProductImage?: unknown
  heroStats?: Stat[]
  servicesTag?: string
  servicesTitle?: string
  servicesDescription?: string
  services?: Service[]
  extrasTag?: string
  extrasTitle?: string
  extras?: string[]
  aboutTag?: string
  aboutTitle?: string
  aboutText?: string
  aboutImage?: unknown
  aboutIcoLabel?: string
  aboutIcoValue?: string
  aboutDicLabel?: string
  aboutDicValue?: string
  aboutAddressLabel?: string
  aboutAddressValue?: string
  ctaTitle?: string
  ctaText?: string
  ctaButtonLabel?: string
  ctaButtonHref?: string
}

const defaultHomePage: Required<Omit<HomePageData, 'heroBackgroundImage' | 'heroProductImage' | 'aboutImage'>> = {
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
      imageAlign: 'right',
      imageFit: 'contain',
    },
    {
      tag: 'Kompletná výroba',
      title: 'Výroba pod vlastnou strechou',
      description: 'CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.',
      buttonLabel: 'Zistiť viac →',
      buttonHref: '/vyroba',
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

const homePageQuery = groq`*[_type == "homePage" && _id == "homePage"][0]{
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

async function getHomePageData(): Promise<HomePageData> {
  const isDraftMode = draftMode().isEnabled
  const client =
    isDraftMode && process.env.SANITY_API_READ_TOKEN ? previewSanityClient : sanityClient

  try {
    const data = await client.fetch<HomePageData | null>(homePageQuery)
    return data || {}
  } catch {
    return {}
  }
}

function getImageUrl(image: unknown, fallback: string) {
  if (!image) return fallback

  try {
    return urlForImage(image).width(1600).url()
  } catch {
    return fallback
  }
}

export default async function HomePage() {
  const homePage = await getHomePageData()

  const heroBg = getImageUrl(homePage.heroBackgroundImage, '/images/elektricky-malotraktor.jpg')
  const heroProductImage = getImageUrl(homePage.heroProductImage, '/images/elektricky-malotraktor.jpg')
  const aboutImage = getImageUrl(homePage.aboutImage, '/images/elektricky-malotraktor.jpg')
  const heroStats = homePage.heroStats?.length ? homePage.heroStats : defaultHomePage.heroStats
  const services = defaultHomePage.services.map((service, index) => ({
    ...service,
    ...homePage.services?.[index],
  }))
  const extras = homePage.extras?.length ? homePage.extras : defaultHomePage.extras

  const serviceFallbackImages = [
    '/images/palety_f149ab5c.jpeg',
    '/images/zariadenia_8beb0717.jpeg',
    '/images/vyroba_b79432df.jpeg',
    '/images/elektricky-malotraktor.jpg',
  ]

  return (
    <>
      <Nav />

      <section className="hero">
        <div className="hero-bg" style={{backgroundImage: `url('${heroBg}')`}} data-sanity={homePageAttr('heroBackgroundImage')} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow" data-sanity={homePageAttr('heroEyebrow')}>
                {homePage.heroEyebrow || defaultHomePage.heroEyebrow}
              </p>
              <h1 className="hero-title">
                <span data-sanity={homePageAttr('heroTitleLine1')}>{homePage.heroTitleLine1 || defaultHomePage.heroTitleLine1}</span>
                <br />
                <span data-sanity={homePageAttr('heroTitleLine2')}>{homePage.heroTitleLine2 || defaultHomePage.heroTitleLine2}</span>
                <br />
                <span data-sanity={homePageAttr('heroTitleAccent')}>{homePage.heroTitleAccent || defaultHomePage.heroTitleAccent}</span>
              </h1>
              <p className="hero-subtitle" data-sanity={homePageAttr('heroSubtitle')}>
                {homePage.heroSubtitle || defaultHomePage.heroSubtitle}
              </p>
              <p className="hero-desc" data-sanity={homePageAttr('heroDescription')}>
                {homePage.heroDescription || defaultHomePage.heroDescription}
              </p>
              <div className="hero-btns">
                <Link href={homePage.heroPrimaryHref || defaultHomePage.heroPrimaryHref} className="btn-primary" data-sanity={homePageAttr('heroPrimaryLabel')}>
                  {homePage.heroPrimaryLabel || defaultHomePage.heroPrimaryLabel}
                </Link>
                <Link href={homePage.heroSecondaryHref || defaultHomePage.heroSecondaryHref} className="btn-outline" data-sanity={homePageAttr('heroSecondaryLabel')}>
                  {homePage.heroSecondaryLabel || defaultHomePage.heroSecondaryLabel}
                </Link>
              </div>
            </div>
            <div data-sanity={homePageAttr('heroProductImage')}>
              <img src={heroProductImage} alt="ET 2000" className="hero-right-img" />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {heroStats.map((stat, index) => (
                <div className="hstat" data-sanity={homePageAttr(['heroStats', index])} key={`${stat.value}-${index}`}>
                  <div className="hstat-val">{stat.value}</div>
                  <div className="hstat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RefsSection />

      <section className="bg" style={{padding: '5rem 2rem'}}>
        <div className="container">
          <span className="tag" data-sanity={homePageAttr('servicesTag')}>
            {homePage.servicesTag || defaultHomePage.servicesTag}
          </span>
          <h2 className="section-title" data-sanity={homePageAttr('servicesTitle')}>
            {homePage.servicesTitle || defaultHomePage.servicesTitle}
          </h2>
          <p className="section-desc" data-sanity={homePageAttr('servicesDescription')}>
            {homePage.servicesDescription || defaultHomePage.servicesDescription}
          </p>

          {services.map((service, index) => {
            const image = getImageUrl(service.image, serviceFallbackImages[index])
            const imageBlock = (
              <div data-sanity={homePageAttr(['services', index, 'image'])}>
                <img
                  src={image}
                  alt={service.title || ''}
                  style={{
                    width: '100%',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow)',
                    maxHeight: index === 3 ? 300 : 320,
                    objectFit: service.imageFit || 'contain',
                    background: service.imageFit === 'contain' ? 'var(--bg)' : undefined,
                    padding: service.imageFit === 'contain' ? '1rem' : undefined,
                  }}
                />
              </div>
            )

            const textBlock = (
              <div>
                <span className="tag" data-sanity={homePageAttr(['services', index, 'tag'])}>
                  {service.tag}
                </span>
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed',sans-serif",
                    fontSize: '2rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    marginBottom: '0.75rem',
                  }}
                  data-sanity={homePageAttr(['services', index, 'title'])}
                >
                  {service.title}
                </h3>
                <p data-sanity={homePageAttr(['services', index, 'description'])}>{service.description}</p>
                <br />
                <Link href={service.buttonHref || '#'} className="btn-primary" data-sanity={homePageAttr(['services', index, 'buttonLabel'])}>
                  {service.buttonLabel}
                </Link>
              </div>
            )

            return (
              <div
                className="two-col"
                style={{marginBottom: index < services.length - 1 ? '6rem' : undefined}}
                data-sanity={homePageAttr(['services', index])}
                key={service.title || index}
              >
                {service.imageAlign === 'right' ? textBlock : imageBlock}
                {service.imageAlign === 'right' ? imageBlock : textBlock}
              </div>
            )
          })}
        </div>
      </section>

      <section className="green-dark" style={{padding: '4rem 2rem'}}>
        <div className="container">
          <span className="tag" data-sanity={homePageAttr('extrasTag')}>
            {homePage.extrasTag || defaultHomePage.extrasTag}
          </span>
          <h2 className="section-title" data-sanity={homePageAttr('extrasTitle')}>
            {homePage.extrasTitle || defaultHomePage.extrasTitle}
          </h2>
          <div className="extras-grid">
            {extras.map((item, index) => (
              <div className="extra-item" key={`${item}-${index}`} data-sanity={homePageAttr(['extras', index])}>
                <div className="extra-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="white" style={{padding: '5rem 2rem'}}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="tag" data-sanity={homePageAttr('aboutTag')}>
                {homePage.aboutTag || defaultHomePage.aboutTag}
              </span>
              <h2 className="section-title" data-sanity={homePageAttr('aboutTitle')}>
                {homePage.aboutTitle || defaultHomePage.aboutTitle}
              </h2>
              <p data-sanity={homePageAttr('aboutText')}>{homePage.aboutText || defaultHomePage.aboutText}</p>
              <div className="about-details">
                <div className="detail-row">
                  <span className="detail-label" data-sanity={homePageAttr('aboutIcoLabel')}>
                    {homePage.aboutIcoLabel || defaultHomePage.aboutIcoLabel}
                  </span>
                  <span data-sanity={homePageAttr('aboutIcoValue')}>{homePage.aboutIcoValue || defaultHomePage.aboutIcoValue}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label" data-sanity={homePageAttr('aboutDicLabel')}>
                    {homePage.aboutDicLabel || defaultHomePage.aboutDicLabel}
                  </span>
                  <span data-sanity={homePageAttr('aboutDicValue')}>{homePage.aboutDicValue || defaultHomePage.aboutDicValue}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label" data-sanity={homePageAttr('aboutAddressLabel')}>
                    {homePage.aboutAddressLabel || defaultHomePage.aboutAddressLabel}
                  </span>
                  <span data-sanity={homePageAttr('aboutAddressValue')}>{homePage.aboutAddressValue || defaultHomePage.aboutAddressValue}</span>
                </div>
              </div>
            </div>
            <div data-sanity={homePageAttr('aboutImage')}>
              <img src={aboutImage} alt="Etraktor výroba" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 data-sanity={homePageAttr('ctaTitle')}>{homePage.ctaTitle || defaultHomePage.ctaTitle}</h2>
              <p data-sanity={homePageAttr('ctaText')}>{homePage.ctaText || defaultHomePage.ctaText}</p>
            </div>
            <Link
              href={homePage.ctaButtonHref || defaultHomePage.ctaButtonHref}
              className="btn-primary"
              style={{background: 'white', color: 'var(--green-dark)'}}
              data-sanity={homePageAttr('ctaButtonLabel')}
            >
              {homePage.ctaButtonLabel || defaultHomePage.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <VisualEditing />
    </>
  )
}
