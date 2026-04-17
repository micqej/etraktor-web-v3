'use client'

import Link from 'next/link'
import {createDataAttribute} from 'next-sanity'
import {useLiveQuery} from 'next-sanity/preview'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RefsSection from '@/components/RefsSection'
import type {HomePageContent as HomePageContentType, SiteSettingsContent} from '@/sanity/lib/content'
import {mapLiveHomePage} from '@/sanity/lib/liveMappers'
import {homePageQuery} from '@/sanity/lib/queries'

type HomePageContentProps = {
  page: HomePageContentType
  siteSettings: SiteSettingsContent
}

export default function HomePageContent({page, siteSettings}: HomePageContentProps) {
  const [liveData] = useLiveQuery<any>(page, homePageQuery)
  const resolvedPage = mapLiveHomePage(page, liveData)
  const homeAttr = createDataAttribute({id: 'homePage', type: 'homePage', path: []})

  const heroStatPath = (index: number) => {
    const key = resolvedPage.heroStats[index]?._key
    return key ? `heroStats[_key=="${key}"]` : `heroStats[${index}]`
  }

  const servicePath = (index: number) => {
    const key = resolvedPage.services[index]?._key
    return key ? `services[_key=="${key}"]` : `services[${index}]`
  }

  return (
    <>
      <Nav siteSettings={siteSettings} />

      <section className="hero">
        <div className="hero-bg" data-sanity={homeAttr('heroBackgroundImage')} style={{backgroundImage: `url('${resolvedPage.heroBackgroundImageSrc}')`}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow" data-sanity={homeAttr('heroEyebrow')}>{resolvedPage.heroEyebrow}</p>
              <h1 className="hero-title">
                <span data-sanity={homeAttr('heroTitleLine1')}>{resolvedPage.heroTitleLine1}</span><br />
                <span data-sanity={homeAttr('heroTitleLine2')}>{resolvedPage.heroTitleLine2}</span><br />
                <span data-sanity={homeAttr('heroTitleAccent')}>{resolvedPage.heroTitleAccent}</span>
              </h1>
              <p className="hero-subtitle" data-sanity={homeAttr('heroSubtitle')}>{resolvedPage.heroSubtitle}</p>
              <p className="hero-desc" data-sanity={homeAttr('heroDescription')}>{resolvedPage.heroDescription}</p>
              <div className="hero-btns">
                <Link href={resolvedPage.heroPrimaryHref} className="btn-primary" data-sanity={homeAttr('heroPrimaryLabel')}>{resolvedPage.heroPrimaryLabel}</Link>
                <Link href={resolvedPage.heroSecondaryHref} className="btn-outline" data-sanity={homeAttr('heroSecondaryLabel')}>{resolvedPage.heroSecondaryLabel}</Link>
              </div>
            </div>
            <div>
              <img src={resolvedPage.heroProductImageSrc} alt={resolvedPage.heroTitleAccent} className="hero-right-img" data-sanity={homeAttr('heroProductImage')} />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {resolvedPage.heroStats.map((stat, index) => (
                <div className="hstat" key={`${stat.value}-${stat.label}`} data-sanity={homeAttr(heroStatPath(index))}>
                  <div className="hstat-val" data-sanity={homeAttr(`${heroStatPath(index)}.value`)}>{stat.value}</div>
                  <div className="hstat-label" data-sanity={homeAttr(`${heroStatPath(index)}.label`)}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />

      <section className="bg" style={{padding: '5rem 2rem'}} data-sanity={homeAttr('services')}>
        <div className="container">
          <span className="tag" data-sanity={homeAttr('servicesTag')}>{resolvedPage.servicesTag}</span>
          <h2 className="section-title" data-sanity={homeAttr('servicesTitle')}>{resolvedPage.servicesTitle}</h2>
          <p className="section-desc" data-sanity={homeAttr('servicesDescription')}>{resolvedPage.servicesDescription}</p>

          {resolvedPage.services.map((service, index) => {
            const imageFirst = service.imageAlign === 'left'
            return (
              <div className="two-col" style={{marginBottom: index === resolvedPage.services.length - 1 ? undefined : '6rem'}} key={service.title} data-sanity={homeAttr(servicePath(index))}>
                {imageFirst ? (
                  <div>
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      data-sanity={homeAttr(`${servicePath(index)}.image`)}
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
                    <span className="tag" data-sanity={homeAttr(`${servicePath(index)}.tag`)}>{service.tag}</span>
                    <h3 data-sanity={homeAttr(`${servicePath(index)}.title`)} style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}}>{service.title}</h3>
                    <p data-sanity={homeAttr(`${servicePath(index)}.description`)}>{service.description}</p>
                    <br />
                    <Link href={service.buttonHref} className="btn-primary" data-sanity={homeAttr(`${servicePath(index)}.buttonLabel`)}>{service.buttonLabel}</Link>
                  </div>
                )}
                {imageFirst ? (
                  <div>
                    <span className="tag" data-sanity={homeAttr(`${servicePath(index)}.tag`)}>{service.tag}</span>
                    <h3 data-sanity={homeAttr(`${servicePath(index)}.title`)} style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}}>{service.title}</h3>
                    <p data-sanity={homeAttr(`${servicePath(index)}.description`)}>{service.description}</p>
                    <br />
                    <Link href={service.buttonHref} className="btn-primary" data-sanity={homeAttr(`${servicePath(index)}.buttonLabel`)}>{service.buttonLabel}</Link>
                  </div>
                ) : (
                  <div>
                    <img
                      src={service.imageSrc}
                      alt={service.imageAlt}
                      data-sanity={homeAttr(`${servicePath(index)}.image`)}
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
          <span className="tag" data-sanity={homeAttr('extrasTag')}>{resolvedPage.extrasTag}</span>
          <h2 className="section-title" data-sanity={homeAttr('extrasTitle')}>{resolvedPage.extrasTitle}</h2>
          <div className="extras-grid">
            {resolvedPage.extras.map((item, index) => (
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
              <span className="tag" data-sanity={homeAttr('aboutTag')}>{resolvedPage.aboutTag}</span>
              <h2 className="section-title" data-sanity={homeAttr('aboutTitle')}>{resolvedPage.aboutTitle}</h2>
              <p data-sanity={homeAttr('aboutText')}>{resolvedPage.aboutText}</p>
              <div className="about-details">
                <div className="detail-row" data-sanity={homeAttr('aboutIcoValue')}><span className="detail-label">{resolvedPage.aboutIcoLabel}</span><span>{resolvedPage.aboutIcoValue}</span></div>
                <div className="detail-row" data-sanity={homeAttr('aboutDicValue')}><span className="detail-label">{resolvedPage.aboutDicLabel}</span><span>{resolvedPage.aboutDicValue}</span></div>
                <div className="detail-row" data-sanity={homeAttr('aboutAddressValue')}><span className="detail-label">{resolvedPage.aboutAddressLabel}</span><span>{resolvedPage.aboutAddressValue}</span></div>
              </div>
            </div>
            <div>
              <img src={resolvedPage.aboutImageSrc} alt={resolvedPage.aboutTitle} className="about-img" data-sanity={homeAttr('aboutImage')} />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner" data-sanity={homeAttr('ctaTitle')}>
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 data-sanity={homeAttr('ctaTitle')}>{resolvedPage.ctaTitle}</h2>
              <p data-sanity={homeAttr('ctaText')}>{resolvedPage.ctaText}</p>
            </div>
            <Link href={resolvedPage.ctaButtonHref} className="btn-primary" style={{background: 'white', color: 'var(--green-dark)'}} data-sanity={homeAttr('ctaButtonLabel')}>
              {resolvedPage.ctaButtonLabel}
            </Link>
          </div>
        </div>
      </section>

      <Footer siteSettings={siteSettings} />
    </>
  )
}
