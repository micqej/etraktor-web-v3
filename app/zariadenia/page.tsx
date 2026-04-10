import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'
import zariadeniaPage from '@/content/pages/zariadenia.json'
import {assetPath} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Jednoúčelové zariadenia – Etraktor, s.r.o.',
}

export default function ZariadeniaPage() {
  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">{zariadeniaPage.heroTag}</span>
          <h1>{zariadeniaPage.heroTitle}</h1>
          <p>{zariadeniaPage.heroDescription}</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <span className="tag">{zariadeniaPage.casesTag}</span>
          <h2 className="section-title">{zariadeniaPage.casesTitle}</h2>
          <div className="three-col">
            {zariadeniaPage.cases.map((item, i) => (
              <div className="img-card" key={i}>
                <img src={assetPath(item.src)} alt={item.alt} style={{ width: '100%', height: 220, objectFit: 'contain', padding: '0.5rem', background: 'var(--bg)' }} />
                <div className="img-card-body">
                  <div className="img-card-title">{item.title}</div>
                  <div className="img-card-desc">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="green-dark">
        <div className="container">
          <span className="tag">{zariadeniaPage.processTag}</span>
          <h2 className="section-title">{zariadeniaPage.processTitle}</h2>
          <div className="four-col" style={{ marginTop: '2rem' }}>
            {zariadeniaPage.processSteps.map((step, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.75rem' }}>{step.num}</div>
                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'white' }}>{step.title}</h4>
                <p style={{ fontSize: '0.85rem', opacity: 0.7, lineHeight: 1.5 }}>{step.description}</p>
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
              <h2>{zariadeniaPage.ctaTitle}</h2>
              <p>{zariadeniaPage.ctaText}</p>
            </div>
            <Link href={zariadeniaPage.ctaButtonHref} className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>
              {zariadeniaPage.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
