'use client'

import Link from 'next/link'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RefsSection from '@/components/RefsSection'
import type {SimplePageContent, SiteSettingsContent} from '@/sanity/lib/content'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

type SimplePageContentProps = {
  page: SimplePageContent
  siteSettings: SiteSettingsContent
  darkProcess?: boolean
  processAsCards?: boolean
}

export default function SimplePageContent({
  page,
  siteSettings,
  darkProcess = false,
  processAsCards = false,
}: SimplePageContentProps) {
  const processSectionClass = darkProcess ? 'green-dark' : 'bg'

  return (
    <>
      <Nav siteSettings={siteSettings} />

      <div className="page-hero">
        <div className="container">
          <span className="tag">{page.heroTag}</span>
          <h1>{page.heroTitle}</h1>
          <p>{page.heroDescription}</p>
        </div>
      </div>

      {page.sections.map((section, index) => {
        const imageFirst = section.imageAlign === 'left'
        const sectionClass = index % 2 === 0 ? 'white' : 'bg'
        const imageNode = section.imageSrc ? (
          <div className="img-card">
            <img
              src={section.imageSrc}
              alt={section.imageAlt || section.title}
              style={{
                width: '100%',
                height: 260,
                objectFit: section.imageFit || 'contain',
                padding: section.imageFit === 'contain' ? '1rem' : undefined,
                background: section.imageFit === 'contain' ? 'var(--bg)' : undefined,
              }}
            />
            <div className="img-card-body">
              <div className="img-card-title">{section.title}</div>
              <div className="img-card-desc">{section.description}</div>
            </div>
          </div>
        ) : null

        const textNode = (
          <div>
            <span className="tag">{section.tag}</span>
            <h2 className="section-title">{section.title}</h2>
            <p>{section.description}</p>
            {section.bullets?.length ? (
              <div className="check-list">
                {section.bullets.map((item) => (
                  <div className="check-item" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            ) : null}
            {section.buttonLabel && section.buttonHref ? (
              <>
                <br />
                <Link href={section.buttonHref} className="btn-primary">
                  {section.buttonLabel}
                </Link>
              </>
            ) : null}
          </div>
        )

        return (
          <section className={sectionClass} key={`${section.title}-${index}`}>
            <div className="container">
              <div className="two-col">
                {imageFirst ? imageNode : textNode}
                {imageFirst ? textNode : imageNode}
              </div>
            </div>
          </section>
        )
      })}

      {page.galleryCards.length ? (
        <section className="white">
          <div className="container">
            {page.galleryTag ? <span className="tag">{page.galleryTag}</span> : null}
            {page.galleryTitle ? <h2 className="section-title">{page.galleryTitle}</h2> : null}
            {page.galleryDescription ? <p className="section-desc">{page.galleryDescription}</p> : null}
            <div className="three-col">
              {page.galleryCards.map((card) => (
                <div className="img-card" key={card.title}>
                  {card.imageSrc ? (
                    <img
                      src={card.imageSrc}
                      alt={card.imageAlt || card.title}
                      style={{width: '100%', height: 220, objectFit: 'contain', padding: '0.75rem', background: 'var(--bg)'}}
                    />
                  ) : null}
                  <div className="img-card-body">
                    <div className="img-card-title">{card.title}</div>
                    {card.description ? <div className="img-card-desc">{card.description}</div> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {page.processSteps.length ? (
        <section className={processSectionClass}>
          <div className="container">
            {page.processTag ? <span className="tag">{page.processTag}</span> : null}
            {page.processTitle ? <h2 className="section-title">{page.processTitle}</h2> : null}
            {processAsCards ? (
              <div className="three-col" style={{marginTop: '1.5rem'}}>
                {page.processSteps.map((step) => (
                  <div
                    key={step.title}
                    style={{
                      background: 'white',
                      borderRadius: 12,
                      padding: '2rem',
                      border: '1px solid var(--border)',
                      boxShadow: 'var(--shadow)',
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: 'var(--green-pale)',
                        border: '1px solid #b7d9b8',
                        borderRadius: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '1rem',
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: '1.6rem',
                        fontWeight: 800,
                        color: 'var(--green-dark)',
                      }}
                    >
                      {step.number}
                    </div>
                    <h3 style={{fontWeight: 700, marginBottom: '0.5rem'}}>{step.title}</h3>
                    <p style={{fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55}}>{step.description}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="four-col" style={{marginTop: '2rem'}}>
                {page.processSteps.map((step) => (
                  <div key={step.title} style={{textAlign: 'center', padding: '1.5rem 1rem'}}>
                    <div
                      style={{
                        fontFamily: "'Barlow Condensed',sans-serif",
                        fontSize: '3rem',
                        fontWeight: 900,
                        color: 'var(--accent)',
                        lineHeight: 1,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {step.number}
                    </div>
                    <h4 style={{fontWeight: 700, marginBottom: '0.5rem', color: darkProcess ? 'white' : 'var(--green-dark)'}}>
                      {step.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        opacity: darkProcess ? 0.7 : 1,
                        color: darkProcess ? undefined : 'var(--text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : null}

      <RefsSection siteSettings={siteSettings} />

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
