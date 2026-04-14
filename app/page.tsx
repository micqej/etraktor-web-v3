import Link from 'next/link'
import type {Metadata} from 'next'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RefsSection from '@/components/RefsSection'
import {getHomePage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getHomePage()])

  return (
    <>
      <Nav siteSettings={siteSettings} />

      <section className="hero">
        <div className="hero-bg" style={{backgroundImage: `url('${page.heroBackgroundImageSrc}')`}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">{page.heroEyebrow}</p>
              <h1 className="hero-title">
                {page.heroTitleLine1}<br />{page.heroTitleLine2}<br /><span>{page.heroTitleAccent}</span>
              </h1>
              <p className="hero-subtitle">{page.heroSubtitle}</p>
              <p className="hero-desc">{page.heroDescription}</p>
              <div className="hero-btns">
                <Link href={page.heroPrimaryHref} className="btn-primary">{page.heroPrimaryLabel}</Link>
                <Link href={page.heroSecondaryHref} className="btn-outline">{page.heroSecondaryLabel}</Link>
              </div>
            </div>
            <div>
              <img src={page.heroProductImageSrc} alt={page.heroTitleAccent} className="hero-right-img" />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {page.heroStats.map((stat) => (
                <div className="hstat" key={`${stat.value}-${stat.label}`}>
                  <div className="hstat-val">{stat.value}</div>
                  <div className="hstat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />

      <section className="bg" style={{padding: '5rem 2rem'}}>
        <div className="container">
          <span className="tag">{page.servicesTag}</span>
          <h2 className="section-title">{page.servicesTitle}</h2>
          <p className="section-desc">{page.servicesDescription}</p>

          {page.services.map((service, index) => {
            const imageFirst = service.imageAlign === 'left'
            return (
              <div className="two-col" style={{marginBottom: index === page.services.length - 1 ? undefined : '6rem'}} key={service.title}>
                {imageFirst ? (
                  <div>
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      style={{
                        width: '100%',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow)',
                        maxHeight: 320,
                        objectFit: service.imageFit,
                        background: service.imageFit === 'contain' ? 'var(--bg)' : undefined,
                        padding: service.imageFit === 'contain' ? '1rem' : undefined,
                      }}
                    />
                  </div>
                ) : (
                  <div>
                    <span className="tag">{service.tag}</span>
                    <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}}>{service.title}</h3>
                    <p>{service.description}</p>
                    <br />
                    <Link href={service.buttonHref} className="btn-primary">{service.buttonLabel}</Link>
                  </div>
                )}
                {imageFirst ? (
                  <div>
                    <span className="tag">{service.tag}</span>
                    <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}}>{service.title}</h3>
                    <p>{service.description}</p>
                    <br />
                    <Link href={service.buttonHref} className="btn-primary">{service.buttonLabel}</Link>
                  </div>
                ) : (
                  <div>
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      style={{
                        width: '100%',
                        borderRadius: 'var(--radius)',
                        boxShadow: 'var(--shadow)',
                        maxHeight: 320,
                        objectFit: service.imageFit,
                        background: service.imageFit === 'contain' ? 'var(--bg)' : undefined,
                        padding: service.imageFit === 'contain' ? '1rem' : undefined,
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="green-dark" style={{padding: '4rem 2rem'}}>
        <div className="container">
          <span className="tag">{page.extrasTag}</span>
          <h2 className="section-title">{page.extrasTitle}</h2>
          <div className="extras-grid">
            {page.extras.map((item) => (
              <div className="extra-item" key={item}>
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
              <span className="tag">{page.aboutTag}</span>
              <h2 className="section-title">{page.aboutTitle}</h2>
              <p>{page.aboutText}</p>
              <div className="about-details">
                <div className="detail-row"><span className="detail-label">{page.aboutIcoLabel}</span><span>{page.aboutIcoValue}</span></div>
                <div className="detail-row"><span className="detail-label">{page.aboutDicLabel}</span><span>{page.aboutDicValue}</span></div>
                <div className="detail-row"><span className="detail-label">{page.aboutAddressLabel}</span><span>{page.aboutAddressValue}</span></div>
              </div>
            </div>
            <div>
              <img src={page.aboutImageSrc} alt={page.aboutTitle} className="about-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaText}</p>
            </div>
            <Link href={page.ctaButtonHref} className="btn-primary" style={{background: 'white', color: 'var(--green-dark)'}}>
              {page.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </>
  )
}
