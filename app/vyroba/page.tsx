import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Výroba – Etraktor, s.r.o.',
}

export default function VyrobaPage() {
  const images = [
    { src: 'https://www.etraktor.sk/images/vyroba1.jpg', alt: 'Výrobný priestor 1', title: 'Výrobný priestor 1' },
    { src: 'https://www.etraktor.sk/images/vyroba2.jpg', alt: 'Výrobný priestor 2', title: 'Výrobný priestor 2' },
    { src: 'https://www.etraktor.sk/images/vyroba3.jpg', alt: 'Výrobný priestor 3', title: 'Výrobný priestor 3' },
    { src: 'https://www.etraktor.sk/images/vyroba4.jpg', alt: 'Výrobný priestor 4', title: 'Výrobný priestor 4' },
    { src: 'https://www.etraktor.sk/images/vyroba5.jpg', alt: 'Výrobný priestor 5', title: 'Výrobný priestor 5' },
  ]

  const services = [
    {
      title: 'CNC pálenie',
      desc: 'Presné CNC pálenie kovových dielov pre potreby výroby aj zákazníkov.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: 'CNC ohýbanie',
      desc: 'Ohýbanie plechov a profilov s presnou toleranciou.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      title: 'Elektrické rozvádzače',
      desc: 'Návrh, výroba a montáž elektrických rozvádzačov.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">Kompletná výroba</span>
          <h1>Výroba pod vlastnou strechou</h1>
          <p>CNC pálenie, CNC ohýbanie, elektrické rozvádzače. Kompletná výroba v jednom mieste.</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <span className="tag">Naša dielňa</span>
          <h2 className="section-title">Výrobné priestory</h2>
          <p className="section-desc">Pozrite si zázemie kde vznikajú naše produkty. Kliknite na foto pre zväčšenie.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {images.map((img, i) => (
              <div
                className="img-card"
                key={i}
                style={i === 4 ? { gridColumn: 'span 2' } : {}}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div className="img-card-body">
                  <div className="img-card-title">{img.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <span className="tag">Kapacity</span>
          <h2 className="section-title">Čo vyrábame</h2>
          <div className="three-col" style={{ marginTop: '1.5rem' }}>
            {services.map((s, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 12, padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                <div style={{ width: 48, height: 48, background: 'var(--green-pale)', border: '1px solid #b7d9b8', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{s.desc}</p>
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
              <h2>Potrebujete výrobné kapacity?</h2>
              <p>Realizujeme projekty od návrhu po hotový produkt.</p>
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
