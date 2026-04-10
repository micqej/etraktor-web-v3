import Link from 'next/link'
import {VisualEditing, createDataAttribute} from 'next-sanity'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
}

const homePageAttr = createDataAttribute({id: 'homePage', type: 'homePage'})

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('/images/elektricky-malotraktor.jpg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow" data-sanity={homePageAttr('heroEyebrow')}>
                Etraktor, s.r.o. &mdash; Bardejov, Slovenská republika
              </p>
              <h1 className="hero-title">
                <span data-sanity={homePageAttr('heroTitleLine1')}>Inovatívna</span>
                <br />
                <span data-sanity={homePageAttr('heroTitleLine2')}>spoločnosť</span>
                <br />
                <span data-sanity={homePageAttr('heroTitleAccent')}>v strojárstve</span>
              </h1>
              <p className="hero-subtitle" data-sanity={homePageAttr('heroSubtitle')}>
                Vývoj &bull; Výroba &bull; Certifikácia
              </p>
              <p className="hero-desc" data-sanity={homePageAttr('heroDescription')}>
                Od myšlienky po realizáciu. Vyvíjame nové produkty, transportné palety, jednoúčelové zariadenia a vlastný elektrický malotraktor ET 2000.
              </p>
              <div className="hero-btns">
                <Link href="/produkty" className="btn-primary" data-sanity={homePageAttr('heroPrimaryLabel')}>
                  eTRAKTOR ET 2000
                </Link>
                <Link href="/kontakt" className="btn-outline" data-sanity={homePageAttr('heroSecondaryLabel')}>
                  Kontaktujte nás
                </Link>
              </div>
            </div>
            <div data-sanity={homePageAttr('heroProductImage')}>
              <img
                src="/images/elektricky-malotraktor.jpg"
                alt="ET 2000"
                className="hero-right-img"
              />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              <div className="hstat" data-sanity={homePageAttr(['heroStats', 0])}><div className="hstat-val">2019</div><div className="hstat-label">Rok založenia</div></div>
              <div className="hstat" data-sanity={homePageAttr(['heroStats', 1])}><div className="hstat-val">A&ndash;Z</div><div className="hstat-label">Vývoj produktov</div></div>
              <div className="hstat" data-sanity={homePageAttr(['heroStats', 2])}><div className="hstat-val">ET 2000</div><div className="hstat-label">Vlastný produkt</div></div>
              <div className="hstat" data-sanity={homePageAttr(['heroStats', 3])}><div className="hstat-val">TISR</div><div className="hstat-label">Certifikácia</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCIE */}
      <RefsSection />

      {/* SLUŽBY */}
      <section className="bg" style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <span className="tag" data-sanity={homePageAttr('servicesTag')}>Čo robíme</span>
          <h2 className="section-title" data-sanity={homePageAttr('servicesTitle')}>Naše služby</h2>
          <p className="section-desc" data-sanity={homePageAttr('servicesDescription')}>Komplexné riešenia od vývoja po realizáciu pre automobilový priemysel a ďalšie odvetvia.</p>

          <div className="two-col" style={{ marginBottom: '6rem' }} data-sanity={homePageAttr(['services', 0])}>
            <div data-sanity={homePageAttr(['services', 0, 'image'])}>
              <img
                src="/images/palety_f149ab5c.jpeg"
                alt="Transportné palety"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 320, objectFit: 'contain', background: 'var(--bg)', padding: '1rem' }}
              />
            </div>
            <div>
              <span className="tag" data-sanity={homePageAttr(['services', 0, 'tag'])}>Logistika &amp; Automotív</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }} data-sanity={homePageAttr(['services', 0, 'title'])}>Transportné palety</h3>
              <p data-sanity={homePageAttr(['services', 0, 'description'])}>Základný kameň modernej logistiky. Nerobotické aj robotické palety pre automobilový priemysel, robotické zásobníky.</p>
              <br />
              <Link href="/palety" className="btn-primary" data-sanity={homePageAttr(['services', 0, 'buttonLabel'])}>Zistiť viac &rarr;</Link>
            </div>
          </div>

          <div className="two-col" style={{ marginBottom: '6rem' }} data-sanity={homePageAttr(['services', 1])}>
            <div>
              <span className="tag" data-sanity={homePageAttr(['services', 1, 'tag'])}>Priemyselná automatizácia</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }} data-sanity={homePageAttr(['services', 1, 'title'])}>Jednoúčelové zariadenia</h3>
              <p data-sanity={homePageAttr(['services', 1, 'description'])}>Zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky.</p>
              <br />
              <Link href="/zariadenia" className="btn-primary" data-sanity={homePageAttr(['services', 1, 'buttonLabel'])}>Zistiť viac &rarr;</Link>
            </div>
            <div data-sanity={homePageAttr(['services', 1, 'image'])}>
              <img
                src="/images/zariadenia_8beb0717.jpeg"
                alt="Jednoúčelové zariadenia"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 320, objectFit: 'contain', background: 'var(--bg)', padding: '1rem' }}
              />
            </div>
          </div>

          <div className="two-col" style={{ marginBottom: '6rem' }} data-sanity={homePageAttr(['services', 2])}>
            <div data-sanity={homePageAttr(['services', 2, 'image'])}>
              <img
                src="/images/vyroba_b79432df.jpeg"
                alt="Výroba"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 320, objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="tag" data-sanity={homePageAttr(['services', 2, 'tag'])}>Kompletná výroba</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }} data-sanity={homePageAttr(['services', 2, 'title'])}>Výroba pod vlastnou strechou</h3>
              <p data-sanity={homePageAttr(['services', 2, 'description'])}>CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.</p>
              <br />
              <Link href="/vyroba" className="btn-primary" data-sanity={homePageAttr(['services', 2, 'buttonLabel'])}>Zistiť viac &rarr;</Link>
            </div>
          </div>

          <div className="two-col" data-sanity={homePageAttr(['services', 3])}>
            <div>
              <span className="tag" data-sanity={homePageAttr(['services', 3, 'tag'])}>Vlastný produkt</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }} data-sanity={homePageAttr(['services', 3, 'title'])}>eTRAKTOR</h3>
              <p data-sanity={homePageAttr(['services', 3, 'description'])}>Elektrický malotraktor ET 2000 a ET 3000. Nulové emisie, tichá prevádzka, 90% účinnosť motora.</p>
              <br />
              <Link href="/produkty" className="btn-primary" data-sanity={homePageAttr(['services', 3, 'buttonLabel'])}>Zistiť viac &rarr;</Link>
            </div>
            <div data-sanity={homePageAttr(['services', 3, 'image'])}>
              <img
                src="/images/elektricky-malotraktor.jpg"
                alt="eTRAKTOR"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 300, objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOPLNKOVÉ SLUŽBY */}
      <section className="green-dark" style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <span className="tag" data-sanity={homePageAttr('extrasTag')}>Doplnkové služby</span>
          <h2 className="section-title" data-sanity={homePageAttr('extrasTitle')}>Ďalšie čo ponúkame</h2>
          <div className="extras-grid">
            {[
              'Renovácia starých strojov – zvýšenie bezpečnosti',
              'Analýza rizík (STN EN ISO 12100:2011, STN EN 1175)',
              'Pevnostné výpočty',
              'Digitalizácia strojov – reverzné inžinierstvo',
              'Poradenská činnosť',
              'Rešerš aktuálnych riešení vo svete',
              'Koncepty a plány nákladov',
              'Certifikácia v spolupráci s TISR',
            ].map((item, i) => (
              <div className="extra-item" key={i} data-sanity={homePageAttr(['extras', i])}>
                <div className="extra-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O SPOLOČNOSTI */}
      <section className="white" style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="tag" data-sanity={homePageAttr('aboutTag')}>O spoločnosti</span>
              <h2 className="section-title" data-sanity={homePageAttr('aboutTitle')}>Etraktor, s.r.o.</h2>
              <p data-sanity={homePageAttr('aboutText')}>Inovatívna spoločnosť z Bardejova, hlavne zameraná na vývoj nových produktov od myšlienky po realizáciu. Zaoberáme sa vývojom transportných paliet pre prepravu dielov v automobilovom priemysle. Oblasť strojárstva, založená v roku 2019.</p>
              <div className="about-details">
                <div className="detail-row" data-sanity={homePageAttr(['aboutIcoLabel'])}><span className="detail-label">IČO</span><span data-sanity={homePageAttr(['aboutIcoValue'])}>52134539</span></div>
                <div className="detail-row" data-sanity={homePageAttr(['aboutDicLabel'])}><span className="detail-label">DIČ</span><span data-sanity={homePageAttr(['aboutDicValue'])}>2120911815</span></div>
                <div className="detail-row" data-sanity={homePageAttr(['aboutAddressLabel'])}><span className="detail-label">Sídlo</span><span data-sanity={homePageAttr(['aboutAddressValue'])}>Duklianska 1376/17, 08501 Bardejov</span></div>
              </div>
            </div>
            <div data-sanity={homePageAttr('aboutImage')}>
              <img
                src="/images/elektricky-malotraktor.jpg"
                alt="Etraktor výroba"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 data-sanity={homePageAttr('ctaTitle')}>Máte projekt na mysli?</h2>
              <p data-sanity={homePageAttr('ctaText')}>Ozvite sa nám &ndash; radi preberieme Vaše požiadavky a navrhneme riešenie.</p>
            </div>
            <Link href="/kontakt" className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }} data-sanity={homePageAttr('ctaButtonLabel')}>
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <VisualEditing />
    </>
  )
}
