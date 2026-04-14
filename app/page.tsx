import Link from 'next/link'
import type {Metadata} from 'next'
import {createDataAttribute} from 'next-sanity'

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
  const homeAttr = createDataAttribute({id: 'homePage', type: 'homePage', path: []})

  return (
    <>
      <Nav siteSettings={siteSettings} />

      <section className="hero" data-sanity={homeAttr()}>
        <div className="hero-bg" data-sanity={homeAttr('heroBackgroundImage')} style={{backgroundImage: `url('${page.heroBackgroundImageSrc}')`}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow" data-sanity={homeAttr('heroEyebrow')}>{page.heroEyebrow}</p>
              <h1 className="hero-title">
                <span data-sanity={homeAttr('heroTitleLine1')}>{page.heroTitleLine1}</span><br />
                <span data-sanity={homeAttr('heroTitleLine2')}>{page.heroTitleLine2}</span><br />
                <span data-sanity={homeAttr('heroTitleAccent')}>{page.heroTitleAccent}</span>
              </h1>
              <p className="hero-subtitle" data-sanity={homeAttr('heroSubtitle')}>{page.heroSubtitle}</p>
              <p className="hero-desc" data-sanity={homeAttr('heroDescription')}>{page.heroDescription}</p>
              <div className="hero-btns">
                <Link href={page.heroPrimaryHref} className="btn-primary" data-sanity={homeAttr('heroPrimaryLabel')}>{page.heroPrimaryLabel}</Link>
                <Link href={page.heroSecondaryHref} className="btn-outline" data-sanity={homeAttr('heroSecondaryLabel')}>{page.heroSecondaryLabel}</Link>
              </div>
            </div>
            <div>
              <img src={page.heroProductImageSrc} alt={page.heroTitleAccent} className="hero-right-img" data-sanity={homeAttr('heroProductImage')} />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {page.heroStats.map((stat, index) => (
                <div className="hstat" key={`${stat.value}-${stat.label}`} data-sanity={homeAttr(`heroStats[${index}]`)}>
                  <div className="hstat-val" data-sanity={homeAttr(`heroStats[${index}].value`)}>{stat.value}</div>
                  <div className="hstat-label" data-sanity={homeAttr(`heroStats[${index}].label`)}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />

      <section className="bg" style={{padding: '5rem 2rem'}} data-sanity={homeAttr('services')}>
        <div className="container">
          <span className="tag" data-sanity={homeAttr('servicesTag')}>{page.servicesTag}</span>
          <h2 className="section-title" data-sanity={homeAttr('servicesTitle')}>{page.servicesTitle}</h2>
          <p className="section-desc" data-sanity={homeAttr('servicesDescription')}>{page.servicesDescription}</p>

          {page.services.map((service, index) => {
            const imageFirst = service.imageAlign === 'left'
            return (
              <div className="two-col" style={{marginBottom: index === page.services.length - 1 ? undefined : '6rem'}} key={service.title} data-sanity={homeAttr(`services[${index}]`)}>
                {imageFirst ? (
                  <div>
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      data-sanity={homeAttr(`services[${index}].image`)}
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
                    <span className="tag" data-sanity={homeAttr(`services[${index}].tag`)}>{service.tag}</span>
                    <h3 data-sanity={homeAttr(`services[${index}].title`)} style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}}>{service.title}</h3>
                    <p data-sanity={homeAttr(`services[${index}].description`)}>{service.description}</p>
                    <br />
                    <Link href={service.buttonHref} className="btn-primary" data-sanity={homeAttr(`services[${index}].buttonLabel`)}>{service.buttonLabel}</Link>
                  </div>
                )}
                {imageFirst ? (
                  <div>
                    <span className="tag" data-sanity={homeAttr(`services[${index}].tag`)}>{service.tag}</span>
                    <h3 data-sanity={homeAttr(`services[${index}].title`)} style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}}>{service.title}</h3>
                    <p data-sanity={homeAttr(`services[${index}].description`)}>{service.description}</p>
                    <br />
                    <Link href={service.buttonHref} className="btn-primary" data-sanity={homeAttr(`services[${index}].buttonLabel`)}>{service.buttonLabel}</Link>
                  </div>
                ) : (
                  <div>
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      data-sanity={homeAttr(`services[${index}].image`)}
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

      <section className="green-dark" style={{padding: '4rem 2rem'}} data-sanity={homeAttr('extras')}>
        <div className="container">
          <span className="tag" data-sanity={homeAttr('extrasTag')}>{page.extrasTag}</span>
          <h2 className="section-title" data-sanity={homeAttr('extrasTitle')}>{page.extrasTitle}</h2>
          <div className="extras-grid">
            {page.extras.map((item, index) => (
              <div className="extra-item" key={item} data-sanity={homeAttr(`extras[${index}]`)}>
                <div className="extra-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="white" style={{padding: '5rem 2rem'}} data-sanity={homeAttr('aboutTitle')}>
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="tag" data-sanity={homeAttr('aboutTag')}>{page.aboutTag}</span>
              <h2 className="section-title" data-sanity={homeAttr('aboutTitle')}>{page.aboutTitle}</h2>
              <p data-sanity={homeAttr('aboutText')}>{page.aboutText}</p>
              <div className="about-details">
                <div className="detail-row" data-sanity={homeAttr('aboutIcoValue')}><span className="detail-label">{page.aboutIcoLabel}</span><span>{page.aboutIcoValue}</span></div>
                <div className="detail-row" data-sanity={homeAttr('aboutDicValue')}><span className="detail-label">{page.aboutDicLabel}</span><span>{page.aboutDicValue}</span></div>
                <div className="detail-row" data-sanity={homeAttr('aboutAddressValue')}><span className="detail-label">{page.aboutAddressLabel}</span><span>{page.aboutAddressValue}</span></div>
              </div>
            </div>
            <div>
              <img src={page.aboutImageSrc} alt={page.aboutTitle} className="about-img" data-sanity={homeAttr('aboutImage')} />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner" data-sanity={homeAttr('ctaTitle')}>
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 data-sanity={homeAttr('ctaTitle')}>{page.ctaTitle}</h2>
              <p data-sanity={homeAttr('ctaText')}>{page.ctaText}</p>
            </div>
            <Link href={page.ctaButtonHref} className="btn-primary" style={{background: 'white', color: 'var(--green-dark)'}} data-sanity={homeAttr('ctaButtonLabel')}>
              {page.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </>
  )
}
