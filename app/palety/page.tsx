import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'
import paletyPage from '@/content/pages/palety.json'
import {assetPath} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Transportné palety – Etraktor, s.r.o.',
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function PaletyPage() {
  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">{paletyPage.heroTag}</span>
          <h1>{paletyPage.heroTitle}</h1>
          <p>{paletyPage.heroDescription}</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">{paletyPage.nonRobotTag}</span>
              <h2 className="section-title">{paletyPage.nonRobotTitle}</h2>
              <p>{paletyPage.nonRobotDescription}</p>
              <br />
              <Link href={paletyPage.nonRobotButtonHref} className="btn-primary">{paletyPage.nonRobotButtonLabel}</Link>
            </div>
            <div className="img-card">
              <img
                src={assetPath(paletyPage.nonRobotImage)}
                alt={paletyPage.nonRobotImageAlt}
                style={{ width: '100%', height: 260, objectFit: 'contain', padding: '1rem', background: 'var(--bg)' }}
              />
              <div className="img-card-body">
                <div className="img-card-title">{paletyPage.nonRobotCardTitle}</div>
                <div className="img-card-desc">{paletyPage.nonRobotCardDescription}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div className="img-card">
              <img
                src={assetPath(paletyPage.robotImage)}
                alt={paletyPage.robotImageAlt}
                style={{ width: '100%', height: 260, objectFit: 'contain', padding: '1rem', background: 'var(--bg)' }}
              />
              <div className="img-card-body">
                <div className="img-card-title">{paletyPage.robotCardTitle}</div>
                <div className="img-card-desc">{paletyPage.robotCardDescription}</div>
              </div>
            </div>
            <div>
              <span className="tag">{paletyPage.robotTag}</span>
              <h2 className="section-title">{paletyPage.robotTitle}</h2>
              <p>{paletyPage.robotDescription}</p>
              <br />
              <div className="check-list">
                {paletyPage.robotItems.map((item, i) => (
                  <div className="check-item" key={i}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <br />
              <Link href={paletyPage.robotButtonHref} className="btn-primary">{paletyPage.robotButtonLabel}</Link>
            </div>
          </div>
        </div>
      </section>

      <RefsSection />

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>{paletyPage.ctaTitle}</h2>
              <p>{paletyPage.ctaText}</p>
            </div>
            <Link href={paletyPage.ctaButtonHref} className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>
              {paletyPage.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
