import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
}

export default function HomePage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('https://www.etraktor.sk/images/elektricky-malotraktor.jpg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">Etraktor, s.r.o. &mdash; Bardejov, Slovenská republika</p>
              <h1 className="hero-title">
                Inovatívna<br />spoločnosť<br /><span>v strojárstve</span>
              </h1>
              <p className="hero-subtitle">Vývoj &bull; Výroba &bull; Certifikácia</p>
              <p className="hero-desc">Od myšlienky po realizáciu. Vyvíjame nové produkty, transportné palety, jednoúčelové zariadenia a vlastný elektrický malotraktor ET 2000.</p>
              <div className="hero-btns">
                <Link href="/produkty" className="btn-primary">eTRAKTOR ET 2000</Link>
                <Link href="/kontakt" className="btn-outline">Kontaktujte nás</Link>
              </div>
            </div>
            <div>
              <img
                src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg"
                alt="ET 2000"
                className="hero-right-img"
              />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              <div className="hstat"><div className="hstat-val">2019</div><div className="hstat-label">Rok založenia</div></div>
              <div className="hstat"><div className="hstat-val">A&ndash;Z</div><div className="hstat-label">Vývoj produktov</div></div>
              <div className="hstat"><div className="hstat-val">ET 2000</div><div className="hstat-label">Vlastný produkt</div></div>
              <div className="hstat"><div className="hstat-val">TISR</div><div className="hstat-label">Certifikácia</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* REFERENCIE */}
      <RefsSection />

      {/* SLUŽBY */}
      <section className="bg" style={{ padding: '5rem 2rem' }}>
        <div className="container">
          <span className="tag">Čo robíme</span>
          <h2 className="section-title">Naše služby</h2>
          <p className="section-desc">Komplexné riešenia od vývoja po realizáciu pre automobilový priemysel a ďalšie odvetvia.</p>

          <div className="two-col" style={{ marginBottom: '6rem' }}>
            <div>
              <img
                src="https://www.etraktor.sk/images/paleta1.jpg"
                alt="Transportné palety"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 320, objectFit: 'contain', background: 'var(--bg)', padding: '1rem' }}
              />
            </div>
            <div>
              <span className="tag">Logistika &amp; Automotív</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Transportné palety</h3>
              <p>Základný kameň modernej logistiky. Nerobotické aj robotické palety pre automobilový priemysel, robotické zásobníky.</p>
              <br />
              <Link href="/palety" className="btn-primary">Zistiť viac &rarr;</Link>
            </div>
          </div>

          <div className="two-col" style={{ marginBottom: '6rem' }}>
            <div>
              <span className="tag">Priemyselná automatizácia</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Jednoúčelové zariadenia</h3>
              <p>Zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky.</p>
              <br />
              <Link href="/zariadenia" className="btn-primary">Zistiť viac &rarr;</Link>
            </div>
            <div>
              <img
                src="https://www.etraktor.sk/images/zariadenie1.jpg"
                alt="Jednoúčelové zariadenia"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 320, objectFit: 'contain', background: 'var(--bg)', padding: '1rem' }}
              />
            </div>
          </div>

          <div className="two-col" style={{ marginBottom: '6rem' }}>
            <div>
              <img
                src="https://www.etraktor.sk/images/vyroba1.jpg"
                alt="Výroba"
                style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 320, objectFit: 'cover' }}
              />
            </div>
            <div>
              <span className="tag">Kompletná výroba</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>Výroba pod vlastnou strechou</h3>
              <p>CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.</p>
              <br />
              <Link href="/vyroba" className="btn-primary">Zistiť viac &rarr;</Link>
            </div>
          </div>

          <div className="two-col">
            <div>
              <span className="tag">Vlastný produkt</span>
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem' }}>eTRAKTOR</h3>
              <p>Elektrický malotraktor ET 2000 a ET 3000. Nulové emisie, tichá prevádzka, 90% účinnosť motora.</p>
              <br />
              <Link href="/produkty" className="btn-primary">Zistiť viac &rarr;</Link>
            </div>
            <div>
              <img
                src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg"
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
          <span className="tag">Doplnkové služby</span>
          <h2 className="section-title">Ďalšie čo ponúkame</h2>
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
              <div className="extra-item" key={i}>
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
              <span className="tag">O spoločnosti</span>
              <h2 className="section-title">Etraktor, s.r.o.</h2>
              <p>Inovatívna spoločnosť z Bardejova, hlavne zameraná na vývoj nových produktov od myšlienky po realizáciu. Zaoberáme sa vývojom transportných paliet pre prepravu dielov v automobilovom priemysle. Oblasť strojárstva, založená v roku 2019.</p>
              <div className="about-details">
                <div className="detail-row"><span className="detail-label">IČO</span><span>52134539</span></div>
                <div className="detail-row"><span className="detail-label">DIČ</span><span>2120911815</span></div>
                <div className="detail-row"><span className="detail-label">Sídlo</span><span>Duklianska 1376/17, 08501 Bardejov</span></div>
              </div>
            </div>
            <div>
              <img
                src="https://www.etraktor.sk/images/vyroba1.jpg"
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
              <h2>Máte projekt na mysli?</h2>
              <p>Ozvite sa nám &ndash; radi preberieme Vaše požiadavky a navrhneme riešenie.</p>
            </div>
            <Link href="/kontakt" className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
