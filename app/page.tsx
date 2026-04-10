import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type {Metadata} from 'next'
import homePage from '@/content/pages/home.json'
import {assetPath} from '@/lib/content'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
}

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="hero">
        <div className="hero-bg" style={{backgroundImage: `url('${assetPath(homePage.heroBackgroundImage)}')`}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">{homePage.heroEyebrow}</p>
              <h1 className="hero-title">
                <span>{homePage.heroTitleLine1}</span>
                <br />
                <span>{homePage.heroTitleLine2}</span>
                <br />
                <span>{homePage.heroTitleAccent}</span>
              </h1>
              <p className="hero-subtitle">{homePage.heroSubtitle}</p>
              <p className="hero-desc">{homePage.heroDescription}</p>
              <div className="hero-btns">
                <Link href={homePage.heroPrimaryHref} className="btn-primary">
                  {homePage.heroPrimaryLabel}
                </Link>
                <Link href={homePage.heroSecondaryHref} className="btn-outline">
                  {homePage.heroSecondaryLabel}
                </Link>
              </div>
            </div>
            <div>
              <img src={assetPath(homePage.heroProductImage)} alt="ET 2000" className="hero-right-img" />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {homePage.heroStats.map((stat, index) => (
                <div className="hstat" key={`${stat.value}-${index}`}>
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
          <span className="tag">{homePage.servicesTag}</span>
          <h2 className="section-title">{homePage.servicesTitle}</h2>
          <p className="section-desc">{homePage.servicesDescription}</p>

          {homePage.services.map((service, index) => {
            const imageBlock = (
              <div>
                <img
                  src={assetPath(service.image)}
                  alt={service.title || ''}
                  style={{
                    width: '100%',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow)',
                    maxHeight: index === 3 ? 300 : 320,
                    objectFit: (service.imageFit || 'contain') as 'contain' | 'cover',
                    background: service.imageFit === 'contain' ? 'var(--bg)' : undefined,
                    padding: service.imageFit === 'contain' ? '1rem' : undefined,
                  }}
                />
              </div>
            )

            const textBlock = (
              <div>
                <span className="tag">
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
                >
                  {service.title}
                </h3>
                <p>{service.description}</p>
                <br />
                <Link href={service.buttonHref || '#'} className="btn-primary">
                  {service.buttonLabel}
                </Link>
              </div>
            )

            return (
              <div
                className="two-col"
                style={{marginBottom: index < homePage.services.length - 1 ? '6rem' : undefined}}
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
          <span className="tag">{homePage.extrasTag}</span>
          <h2 className="section-title">{homePage.extrasTitle}</h2>
          <div className="extras-grid">
            {homePage.extras.map((item, index) => (
              <div className="extra-item" key={`${item}-${index}`}>
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
              <span className="tag">{homePage.aboutTag}</span>
              <h2 className="section-title">{homePage.aboutTitle}</h2>
              <p>{homePage.aboutText}</p>
              <div className="about-details">
                <div className="detail-row">
                  <span className="detail-label">{homePage.aboutIcoLabel}</span>
                  <span>{homePage.aboutIcoValue}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{homePage.aboutDicLabel}</span>
                  <span>{homePage.aboutDicValue}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">{homePage.aboutAddressLabel}</span>
                  <span>{homePage.aboutAddressValue}</span>
                </div>
              </div>
            </div>
            <div>
              <img src={assetPath(homePage.aboutImage)} alt="Etraktor výroba" className="about-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>{homePage.ctaTitle}</h2>
              <p>{homePage.ctaText}</p>
            </div>
            <Link
              href={homePage.ctaButtonHref}
              className="btn-primary"
              style={{background: 'white', color: 'var(--green-dark)'}}
            >
              {homePage.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
