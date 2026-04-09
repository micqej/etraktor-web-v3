import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jednoúčelové zariadenia – Etraktor, s.r.o.',
}

export default function ZariadeniaPage() {
  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">Priemyselná automatizácia</span>
          <h1>Jednoúčelové zariadenia</h1>
          <p>Vytvoríme Vám zariadenie na kľúč podľa požiadaviek. Testovacie zariadenia, montážne prípravky, kontrolné prípravky a ďalšie.</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <span className="tag">Ukážky realizácií</span>
          <h2 className="section-title">Naše realizácie</h2>
          <div className="three-col">
            {[
              { title: 'Linka dverí pre školiace stredisko', desc: 'Kompletné riešenie na kľúč vrátane konštrukčného vývoja a montáže.', src: 'https://www.etraktor.sk/images/zariadenie1.jpg', alt: 'Linka dverí' },
              { title: 'Kontrolné prípravky', desc: 'Presné kontrolné prípravky pre výrobné linky a QA procesy.', src: 'https://www.etraktor.sk/images/zariadenie2.jpg', alt: 'Kontrolné prípravky' },
              { title: 'Násypný vážiaci modul', desc: 'Špeciálne zariadenie pre presné váženie a dávkovanie materiálu.', src: 'https://www.etraktor.sk/images/zariadenie3.jpg', alt: 'Násypný vážiaci modul' },
            ].map((item, i) => (
              <div className="img-card" key={i}>
                <img src={item.src} alt={item.alt} style={{ width: '100%', height: 220, objectFit: 'contain', padding: '0.5rem', background: 'var(--bg)' }} />
                <div className="img-card-body">
                  <div className="img-card-title">{item.title}</div>
                  <div className="img-card-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="green-dark">
        <div className="container">
          <span className="tag">Náš postup</span>
          <h2 className="section-title">Vývoj produktu A – Z</h2>
          <div className="four-col" style={{ marginTop: '2rem' }}>
            {[
              { num: '01', title: 'Rešerš & Koncept', desc: 'Rešerš aktuálnych riešení vo svete, koncepty a plány nákladov.' },
              { num: '02', title: 'Konštrukcia', desc: 'Dodávateľ konštrukčnej dokumentácie, konštrukčný vývoj.' },
              { num: '03', title: 'Výroba & Montáž', desc: 'Realizačná činnosť výroby produktu, montáž a oživenie.' },
              { num: '04', title: 'Certifikácia', desc: 'Dokumentácia a certifikácia v spolupráci s TISR.' },
            ].map((step, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.75rem' }}>{step.num}</div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>{step.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.5 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RefsSection />

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Máte špecifické požiadavky?</h2>
              <p>Vytvoríme zariadenie na kľúč – od konceptu po certifikáciu.</p>
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
