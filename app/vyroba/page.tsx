import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'
import vyrobaPage from '@/content/pages/vyroba.json'
import {assetPath} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Výroba – Etraktor, s.r.o.',
}

export default function VyrobaPage() {
  const icons = [
    (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    ),
    (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
        </svg>
    ),
    (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--green-dark)" strokeWidth="2" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
    ),
  ]

  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">{vyrobaPage.heroTag}</span>
          <h1>{vyrobaPage.heroTitle}</h1>
          <p>{vyrobaPage.heroDescription}</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <span className="tag">{vyrobaPage.galleryTag}</span>
          <h2 className="section-title">{vyrobaPage.galleryTitle}</h2>
          <p className="section-desc">{vyrobaPage.galleryDescription}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {vyrobaPage.images.map((img, i) => (
              <div
                className="img-card"
                key={i}
                style={i === 4 ? { gridColumn: 'span 2' } : {}}
              >
                <img src={assetPath(img.src)} alt={img.alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
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
          <span className="tag">{vyrobaPage.servicesTag}</span>
          <h2 className="section-title">{vyrobaPage.servicesTitle}</h2>
          <div className="three-col" style={{ marginTop: '1.5rem' }}>
            {vyrobaPage.services.map((s, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 12, padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                <div style={{ width: 48, height: 48, background: 'var(--green-pale)', border: '1px solid #b7d9b8', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  {icons[i] ?? icons[0]}
                </div>
                <h3 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>{s.description}</p>
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
              <h2>{vyrobaPage.ctaTitle}</h2>
              <p>{vyrobaPage.ctaText}</p>
            </div>
            <Link href={vyrobaPage.ctaButtonHref} className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>
              {vyrobaPage.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
