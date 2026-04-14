'use client'

import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'

import Footer from '@/components/Footer'
import {LightboxModal} from '@/components/Lightbox'
import Nav from '@/components/Nav'
import RefsSection from '@/components/RefsSection'
import type {ProductContent, ProductEquipmentGroup, ProductSpec, SiteSettingsContent} from '@/sanity/lib/content'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function VideoSlider({videos}: Pick<ProductContent, 'videos'>) {
  const [cur, setCur] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!trackRef.current) return
    const item = trackRef.current.querySelector('.vs-item') as HTMLElement | null
    if (!item) return
    const gap = 24
    const width = item.offsetWidth + gap
    trackRef.current.style.transform = `translateX(-${cur * width}px)`
  }, [cur])

  const nav = (delta: number) => {
    const perView = typeof window !== 'undefined' && window.innerWidth <= 600 ? 1 : typeof window !== 'undefined' && window.innerWidth <= 900 ? 2 : 3
    const max = Math.max(0, videos.length - perView)
    setCur((value) => Math.max(0, Math.min(value + delta, max)))
  }

  return (
    <div className="vs-outer">
      <button className="vs-arrow vs-prev" onClick={() => nav(-1)}>&#8249;</button>
      <div className="vs-track-wrap">
        <div className="vs-track" ref={trackRef}>
          {videos.map((video) => (
            <div className="vs-item" key={`${video.youtubeId}-${video.label}`}>
              <div className="vs-ratio">
                <iframe
                  src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                  title={video.label}
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="vs-label">{video.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="vs-arrow vs-next" onClick={() => nav(1)}>&#8250;</button>
    </div>
  )
}

function SpecsTable({rows, dual = true}: {rows: ProductSpec[]; dual?: boolean}) {
  return (
    <table className="spec-table">
      <thead>
        <tr>
          <th>Parameter</th>
          {dual ? (
            <>
              <th>2×12V DC</th>
              <th>4×12V DC</th>
            </>
          ) : (
            <th>Hodnota</th>
          )}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={`${row.parameter}-${row.value || row.valueA}`}>
            <td>{row.parameter}</td>
            {dual ? (
              <>
                <td>{row.valueA}</td>
                <td>{row.valueB}</td>
              </>
            ) : (
              <td>{row.value}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function EquipmentTable({groups}: {groups: ProductEquipmentGroup[]}) {
  return (
    <table className="spec-table">
      <thead>
        <tr>
          <th>Vybavenie</th>
          <th>Typ</th>
        </tr>
      </thead>
      <tbody>
        {groups.flatMap((group) => [
          <tr className="group-row" key={group.title}>
            <td colSpan={2}>{group.title}</td>
          </tr>,
          ...group.items.map((item) => (
            <tr key={`${group.title}-${item.label}`}>
              <td>{item.label}</td>
              <td><span className={item.type.toLowerCase() === 'opcia' ? 'badge-opt' : 'badge-std'}>{item.type}</span></td>
            </tr>
          )),
        ])}
      </tbody>
    </table>
  )
}

function Tabs({page}: {page: ProductContent}) {
  const [active, setActive] = useState<'basic' | 'battery' | 'charging' | 'equipment'>('basic')

  return (
    <div>
      <div className="tabs">
        <button className={`tab-btn${active === 'basic' ? ' active' : ''}`} onClick={() => setActive('basic')}>Základné</button>
        <button className={`tab-btn${active === 'battery' ? ' active' : ''}`} onClick={() => setActive('battery')}>Batérie</button>
        <button className={`tab-btn${active === 'charging' ? ' active' : ''}`} onClick={() => setActive('charging')}>Nabíjanie</button>
        <button className={`tab-btn${active === 'equipment' ? ' active' : ''}`} onClick={() => setActive('equipment')}>Výbava</button>
      </div>

      {active === 'basic' ? <SpecsTable rows={page.basicSpecs} /> : null}
      {active === 'battery' ? <SpecsTable rows={page.batterySpecs} /> : null}
      {active === 'charging' ? <SpecsTable rows={page.chargingSpecs} dual={false} /> : null}
      {active === 'equipment' ? <EquipmentTable groups={page.equipmentGroups} /> : null}
    </div>
  )
}

type ProductsPageProps = {
  page: ProductContent
  siteSettings: SiteSettingsContent
}

export default function ProductsPageContent({page, siteSettings}: ProductsPageProps) {
  const [lightbox, setLightbox] = useState<{images: string[]; index: number} | null>(null)

  return (
    <>
      <Nav siteSettings={siteSettings} />

      {lightbox ? (
        <LightboxModal images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      ) : null}

      <section className="hero" style={{minHeight: '75vh'}}>
        <div className="hero-bg" style={{backgroundImage: `url('${page.heroImageSrc}')`}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">{page.heroEyebrow}</p>
              <h1 className="hero-title">{page.heroTitle}<br /><span>{page.heroAccent}</span></h1>
              <p className="hero-subtitle">{page.heroSubtitle}</p>
              <p className="hero-desc">{page.heroDescription}</p>
              <div className="hero-btns">
                <Link href={page.heroPrimaryHref} className="btn-primary">{page.heroPrimaryLabel}</Link>
                <a href={page.heroSecondaryHref} className="btn-outline">{page.heroSecondaryLabel}</a>
              </div>
            </div>
            <div>
              <img src={page.heroImageSrc} alt={page.heroAccent} className="hero-right-img" />
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

      <section className="white">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">{page.introTag}</span>
              <h2 className="section-title">{page.introTitle}</h2>
              {page.introParagraphs.map((paragraph) => (
                <p key={paragraph} style={{marginBottom: '1rem'}}>{paragraph}</p>
              ))}
              <div className="eff-item">
                <div className="eff-row"><span className="eff-name">{page.efficiencyTitleA}</span><span className="eff-pct">{page.efficiencyValueA}</span></div>
                <div className="eff-bar-bg"><div className="eff-bar green" style={{width: page.efficiencyValueA}} /></div>
              </div>
              <div className="eff-item" style={{marginTop: '1rem'}}>
                <div className="eff-row"><span className="eff-name">{page.efficiencyTitleB}</span><span className="eff-pct" style={{color: '#78909c'}}>{page.efficiencyValueB}</span></div>
                <div className="eff-bar-bg"><div className="eff-bar gray" style={{width: '18%'}} /></div>
              </div>
            </div>
            <div>
              <img src={page.introImageSrc} alt={page.heroAccent} style={{width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', objectFit: 'cover', maxHeight: 320}} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">{page.benefitsTag}</span>
              <h2 className="section-title">{page.benefitsTitle}</h2>
              <div className="check-list">
                {page.benefits.map((item) => (
                  <div className="check-item" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="tag">{page.useCasesTag}</span>
              <h2 className="section-title">{page.useCasesTitle}</h2>
              <div className="features-grid" style={{gridTemplateColumns: '1fr 1fr', marginTop: 0}}>
                {page.useCases.map((item) => (
                  <div className="feature-item" key={item.title}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <div>
                      <div className="feature-title">{item.title}</div>
                      <div className="feature-desc">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="white" id="parametre">
        <div className="container">
          <span className="tag">{page.dimensionsTag}</span>
          <h2 className="section-title">{page.dimensionsTitle}</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '2.5rem'}}>
            {page.dimensionImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                style={{borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', width: '100%', cursor: 'pointer'}}
                onClick={() => setLightbox({images: page.dimensionImages.map((item) => item.src), index})}
              />
            ))}
          </div>
          <Tabs page={page} />
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <span className="tag">{page.rangeTag}</span>
          <h2 className="section-title">{page.rangeTitle}</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            {page.rangeCards.map((card, index) => (
              <div className="img-card" key={card.title} onClick={() => setLightbox({images: page.rangeCards.map((item) => item.imageSrc), index})}>
                <img src={card.imageSrc} alt={card.title} style={{width: '100%', height: 'auto', minHeight: 160, objectFit: 'contain', background: '#f5f7f5'}} />
                <div className="img-card-body">
                  <div className="img-card-title">
                    {card.title} <span className={card.badgeClass} style={{marginLeft: 6}}>{card.badge}</span>
                  </div>
                  <div className="img-card-desc">{card.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <span className="tag">{page.accessoriesTag}</span>
          <h2 className="section-title">{page.accessoriesTitle}</h2>
          <div className="three-col">
            {page.accessories.map((item) => (
              <div className="img-card" key={item.title}>
                <img src={item.imageSrc} alt={item.imageAlt || item.title} style={{width: '100%', height: 200, objectFit: 'cover'}} />
                <div className="img-card-body">
                  <div className="img-card-title">{item.title}</div>
                  <div className="img-card-desc">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <span className="tag">{page.certificatesTag}</span>
          <h2 className="section-title">{page.certificatesTitle}</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 600}}>
            {page.certificates.map((item, index) => (
              <div className="img-card" key={item.title} onClick={() => setLightbox({images: page.certificates.map((cert) => cert.src), index})}>
                <img src={item.src} alt={item.alt} style={{width: '100%', height: 220, objectFit: 'contain', padding: '1rem', background: 'white'}} />
                <div className="img-card-body"><div className="img-card-title">{item.title}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="green-dark" id="galeria">
        <div className="container">
          <span className="tag">{page.galleryTag}</span>
          <h2 className="section-title">{page.galleryTitle}</h2>
          <p className="section-desc" style={{color: 'rgba(255,255,255,0.7)'}}>{page.galleryDescription}</p>
          <div className="gallery-grid-new">
            {page.galleryImages.map((image, index) => (
              <div className="gi-new" key={image.src} onClick={() => setLightbox({images: page.galleryImages.map((item) => item.src), index})}>
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gi-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding: '5rem 0', background: '#111111', overflow: 'hidden'}}>
        <div style={{maxWidth: 1180, margin: '0 auto', padding: '0 2rem 2rem'}}>
          <span className="tag" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.15)'}}>{page.videosTag}</span>
          <h2 className="section-title" style={{color: 'white'}}>{page.videosTitle}</h2>
        </div>
        <VideoSlider videos={page.videos} />
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaText}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link href={page.ctaPrimaryHref} className="btn-primary" style={{background: 'white', color: 'var(--green-dark)'}}>
                {page.ctaPrimaryLabel}
              </Link>
              <a href={page.ctaSecondaryHref} className="btn-outline">{page.ctaSecondaryLabel}</a>
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </>
  )
}
