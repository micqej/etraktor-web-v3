'use client'

import Link from 'next/link'
import {createDataAttribute} from 'next-sanity'
import {useLiveQuery} from 'next-sanity/preview'
import {useEffect, useRef, useState} from 'react'

import Footer from '@/components/Footer'
import {LightboxModal} from '@/components/Lightbox'
import Nav from '@/components/Nav'
import RefsSection from '@/components/RefsSection'
import {mapLiveProductsPage} from '@/sanity/lib/liveMappers'
import type {ProductCatalogItem, ProductContent, ProductEquipmentGroup, ProductSpec, SiteSettingsContent} from '@/sanity/lib/content'
import {productsPageQuery} from '@/sanity/lib/queries'

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

function ProductCatalogSection({
  item,
  index,
  pageAttr,
  onOpenLightbox,
}: {
  item: ProductCatalogItem
  index: number
  pageAttr: (path: string) => string
  onOpenLightbox: (images: string[], startIndex: number) => void
}) {
  const basePath = item._key ? `productCatalog[_key=="${item._key}"]` : `productCatalog[${index}]`
  const galleryImages = item.galleryImages.map((image) => image.src)
  const documentPath = (docIndex: number) => {
    const key = item.documents[docIndex]?._key
    return key ? `${basePath}.documents[_key=="${key}"]` : `${basePath}.documents[${docIndex}]`
  }
  const galleryPath = (imageIndex: number) => {
    const key = item.galleryImages[imageIndex]?._key
    return key ? `${basePath}.galleryImages[_key=="${key}"]` : `${basePath}.galleryImages[${imageIndex}]`
  }
  const videoPath = (videoIndex: number) => {
    const key = item.videos[videoIndex]?._key
    return key ? `${basePath}.videos[_key=="${key}"]` : `${basePath}.videos[${videoIndex}]`
  }
  const specPath = (specIndex: number) => {
    const key = item.specs[specIndex]?._key
    return key ? `${basePath}.specs[_key=="${key}"]` : `${basePath}.specs[${specIndex}]`
  }

  return (
    <section className={index % 2 === 0 ? 'white' : 'bg'} data-sanity={pageAttr(basePath)}>
      <div className="container">
        <div className="two-col" style={{alignItems: 'start'}}>
          <div>
            <span className="tag" data-sanity={pageAttr(`${basePath}.badge`)}>{item.badge}</span>
            <h2 className="section-title" data-sanity={pageAttr(`${basePath}.title`)}>{item.title}</h2>
            <p style={{fontWeight: 700, marginBottom: '1rem', color: 'var(--green-dark)'}} data-sanity={pageAttr(`${basePath}.subtitle`)}>
              {item.subtitle}
            </p>
            <p data-sanity={pageAttr(`${basePath}.description`)}>{item.description}</p>
            {item.highlights.length ? (
              <div className="check-list" style={{marginTop: '1.25rem'}}>
                {item.highlights.map((highlight, highlightIndex) => (
                  <div key={`${item.title}-${highlightIndex}`} className="check-item" data-sanity={pageAttr(`${basePath}.highlights[${highlightIndex}]`)}>
                    <CheckIcon />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            ) : null}
            {item.documents.length ? (
              <div style={{marginTop: '1.75rem'}}>
                <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}} data-sanity={pageAttr(`${basePath}.documentsTitle`)}>
                  {item.documentsTitle}
                </h3>
                <div style={{display: 'flex', gap: '0.75rem', flexWrap: 'wrap'}}>
                  {item.documents.map((document, docIndex) => (
                    <a
                      key={`${document.label}-${docIndex}`}
                      href={document.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline"
                      data-sanity={pageAttr(`${documentPath(docIndex)}.label`)}
                    >
                      {document.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
          <div>
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              data-sanity={pageAttr(`${basePath}.image`)}
              style={{width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', maxHeight: 400, objectFit: 'cover'}}
            />
            {item.specs.length ? (
              <div style={{marginTop: '1.5rem'}}>
                <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.75rem'}} data-sanity={pageAttr(`${basePath}.specsTitle`)}>
                  {item.specsTitle}
                </h3>
                <table className="spec-table">
                  <tbody>
                    {item.specs.map((spec, specIndex) => (
                      <tr key={`${spec.parameter}-${specIndex}`} data-sanity={pageAttr(specPath(specIndex))}>
                        <td data-sanity={pageAttr(`${specPath(specIndex)}.parameter`)}>{spec.parameter}</td>
                        <td data-sanity={pageAttr(`${specPath(specIndex)}.value`)}>{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </div>
        </div>

        {item.galleryImages.length ? (
          <div style={{marginTop: '3rem'}}>
            <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem'}} data-sanity={pageAttr(`${basePath}.galleryTitle`)}>
              {item.galleryTitle}
            </h3>
            <div className="gallery-grid-new">
              {item.galleryImages.map((image, imageIndex) => (
                <div
                  key={`${image.src}-${imageIndex}`}
                  className="gi-new"
                  onClick={() => onOpenLightbox(galleryImages, imageIndex)}
                  data-sanity={pageAttr(galleryPath(imageIndex))}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" data-sanity={pageAttr(galleryPath(imageIndex))} />
                  <div className="gi-overlay" />
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {item.videos.length ? (
          <div style={{marginTop: '3rem'}}>
            <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.6rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1rem'}} data-sanity={pageAttr(`${basePath}.videosTitle`)}>
              {item.videosTitle}
            </h3>
            <VideoSlider videos={item.videos} />
            <div style={{display: 'none'}}>
              {item.videos.map((video, videoIndex) => (
                <span key={`${video.youtubeId}-${videoIndex}`} data-sanity={pageAttr(videoPath(videoIndex))}>
                  {video.label}
                </span>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  )
}

type ProductsPageProps = {
  page: ProductContent
  data?: ProductContent
  siteSettings: SiteSettingsContent
  documentId: 'productsPage'
}

export default function ProductsPageContent({page, data, siteSettings, documentId}: ProductsPageProps) {
  const [liveData] = useLiveQuery<any>(page, productsPageQuery)
  const resolvedPage = mapLiveProductsPage(page, data || liveData)
  const hasCatalog = resolvedPage.productCatalog.length > 0
  const [lightbox, setLightbox] = useState<{images: string[]; index: number} | null>(null)
  const pageAttr = createDataAttribute({id: documentId, type: documentId, path: []})

  return (
    <>
      <Nav siteSettings={siteSettings} />

      {lightbox ? (
        <LightboxModal images={lightbox.images} startIndex={lightbox.index} onClose={() => setLightbox(null)} />
      ) : null}

      <section className="hero" style={{minHeight: '75vh'}}>
        <div className="hero-bg" style={{backgroundImage: `url('${resolvedPage.heroImageSrc}')`}} data-sanity={pageAttr('heroImage')} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow" data-sanity={pageAttr('heroEyebrow')}>{resolvedPage.heroEyebrow}</p>
              <h1 className="hero-title"><span data-sanity={pageAttr('heroTitle')}>{resolvedPage.heroTitle}</span><br /><span data-sanity={pageAttr('heroAccent')}>{resolvedPage.heroAccent}</span></h1>
              <p className="hero-subtitle" data-sanity={pageAttr('heroSubtitle')}>{resolvedPage.heroSubtitle}</p>
              <p className="hero-desc" data-sanity={pageAttr('heroDescription')}>{resolvedPage.heroDescription}</p>
              <div className="hero-btns">
                <Link href={resolvedPage.heroPrimaryHref} className="btn-primary" data-sanity={pageAttr('heroPrimaryLabel')}>{resolvedPage.heroPrimaryLabel}</Link>
                <a href={resolvedPage.heroSecondaryHref} className="btn-outline" data-sanity={pageAttr('heroSecondaryLabel')}>{resolvedPage.heroSecondaryLabel}</a>
              </div>
            </div>
            <div>
              <img src={resolvedPage.heroImageSrc} alt={resolvedPage.heroAccent} className="hero-right-img" data-sanity={pageAttr('heroImage')} />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {resolvedPage.heroStats.map((stat, index) => (
                <div className="hstat" key={`${stat.value}-${stat.label}`} data-sanity={pageAttr(`heroStats[${index}]`)}>
                  <div className="hstat-val" data-sanity={pageAttr(`heroStats[${index}].value`)}>{stat.value}</div>
                  <div className="hstat-label" data-sanity={pageAttr(`heroStats[${index}].label`)}>{stat.label}</div>
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
              <span className="tag" data-sanity={pageAttr('introTag')}>{resolvedPage.introTag}</span>
              <h2 className="section-title" data-sanity={pageAttr('introTitle')}>{resolvedPage.introTitle}</h2>
              {resolvedPage.introParagraphs.map((paragraph, index) => (
                <p key={paragraph} style={{marginBottom: '1rem'}} data-sanity={pageAttr(`introParagraphs[${index}]`)}>{paragraph}</p>
              ))}
              <div className="eff-item">
                <div className="eff-row"><span className="eff-name" data-sanity={pageAttr('efficiencyTitleA')}>{resolvedPage.efficiencyTitleA}</span><span className="eff-pct" data-sanity={pageAttr('efficiencyValueA')}>{resolvedPage.efficiencyValueA}</span></div>
                <div className="eff-bar-bg"><div className="eff-bar green" style={{width: resolvedPage.efficiencyValueA}} /></div>
              </div>
              <div className="eff-item" style={{marginTop: '1rem'}}>
                <div className="eff-row"><span className="eff-name" data-sanity={pageAttr('efficiencyTitleB')}>{resolvedPage.efficiencyTitleB}</span><span className="eff-pct" style={{color: '#78909c'}} data-sanity={pageAttr('efficiencyValueB')}>{resolvedPage.efficiencyValueB}</span></div>
                <div className="eff-bar-bg"><div className="eff-bar gray" style={{width: '18%'}} /></div>
              </div>
            </div>
            <div>
              <img src={resolvedPage.introImageSrc} alt={resolvedPage.heroAccent} style={{width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', objectFit: 'cover', maxHeight: 320}} data-sanity={pageAttr('introImage')} />
            </div>
          </div>
        </div>
      </section>

      {hasCatalog ? (
        <section className="bg">
          <div className="container">
            <span className="tag" data-sanity={pageAttr('catalogTag')}>{resolvedPage.catalogTag}</span>
            <h2 className="section-title" data-sanity={pageAttr('catalogTitle')}>{resolvedPage.catalogTitle}</h2>
            <p className="section-desc" data-sanity={pageAttr('catalogDescription')}>{resolvedPage.catalogDescription}</p>
          </div>
        </section>
      ) : null}

      {hasCatalog ? resolvedPage.productCatalog.map((item, index) => (
        <ProductCatalogSection
          key={`${item.title}-${index}`}
          item={item}
          index={index}
          pageAttr={pageAttr}
          onOpenLightbox={(images, startIndex) => setLightbox({images, index: startIndex})}
        />
      )) : null}

      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag" data-sanity={pageAttr('benefitsTag')}>{resolvedPage.benefitsTag}</span>
              <h2 className="section-title" data-sanity={pageAttr('benefitsTitle')}>{resolvedPage.benefitsTitle}</h2>
              <div className="check-list">
                {resolvedPage.benefits.map((item, index) => (
                  <div className="check-item" key={item} data-sanity={pageAttr(`benefits[${index}]`)}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="tag" data-sanity={pageAttr('useCasesTag')}>{resolvedPage.useCasesTag}</span>
              <h2 className="section-title" data-sanity={pageAttr('useCasesTitle')}>{resolvedPage.useCasesTitle}</h2>
              <div className="features-grid" style={{gridTemplateColumns: '1fr 1fr', marginTop: 0}}>
                {resolvedPage.useCases.map((item, index) => (
                  <div className="feature-item" key={item.title} data-sanity={pageAttr(`useCases[${index}]`)}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <div>
                      <div className="feature-title" data-sanity={pageAttr(`useCases[${index}].title`)}>{item.title}</div>
                      <div className="feature-desc" data-sanity={pageAttr(`useCases[${index}].description`)}>{item.description}</div>
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
          <span className="tag" data-sanity={pageAttr('dimensionsTag')}>{resolvedPage.dimensionsTag}</span>
          <h2 className="section-title" data-sanity={pageAttr('dimensionsTitle')}>{resolvedPage.dimensionsTitle}</h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '2.5rem'}}>
            {resolvedPage.dimensionImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                data-sanity={pageAttr(`dimensionImages[${index}].image`)}
                style={{borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', width: '100%', cursor: 'pointer'}}
                onClick={() => setLightbox({images: resolvedPage.dimensionImages.map((item) => item.src), index})}
              />
            ))}
          </div>
          <Tabs page={resolvedPage} />
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('rangeTag')}>{resolvedPage.rangeTag}</span>
          <h2 className="section-title" data-sanity={pageAttr('rangeTitle')}>{resolvedPage.rangeTitle}</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            {resolvedPage.rangeCards.map((card, index) => (
              <div className="img-card" key={card.title} onClick={() => setLightbox({images: resolvedPage.rangeCards.map((item) => item.imageSrc), index})} data-sanity={pageAttr(`rangeCards[${index}]`)}>
                <img src={card.imageSrc} alt={card.title} style={{width: '100%', height: 'auto', minHeight: 160, objectFit: 'contain', background: '#f5f7f5'}} data-sanity={pageAttr(`rangeCards[${index}].image`)} />
                <div className="img-card-body">
                  <div className="img-card-title">
                    <span data-sanity={pageAttr(`rangeCards[${index}].title`)}>{card.title}</span> <span className={card.badgeClass} style={{marginLeft: 6}} data-sanity={pageAttr(`rangeCards[${index}].badge`)}>{card.badge}</span>
                  </div>
                  <div className="img-card-desc" data-sanity={pageAttr(`rangeCards[${index}].info`)}>{card.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('accessoriesTag')}>{resolvedPage.accessoriesTag}</span>
          <h2 className="section-title" data-sanity={pageAttr('accessoriesTitle')}>{resolvedPage.accessoriesTitle}</h2>
          <div className="three-col">
            {resolvedPage.accessories.map((item, index) => (
              <div className="img-card" key={item.title} data-sanity={pageAttr(`accessories[${index}]`)}>
                <img src={item.imageSrc} alt={item.imageAlt || item.title} style={{width: '100%', height: 200, objectFit: 'cover'}} data-sanity={pageAttr(`accessories[${index}].image`)} />
                <div className="img-card-body">
                  <div className="img-card-title" data-sanity={pageAttr(`accessories[${index}].title`)}>{item.title}</div>
                  <div className="img-card-desc" data-sanity={pageAttr(`accessories[${index}].description`)}>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('certificatesTag')}>{resolvedPage.certificatesTag}</span>
          <h2 className="section-title" data-sanity={pageAttr('certificatesTitle')}>{resolvedPage.certificatesTitle}</h2>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 600}}>
            {resolvedPage.certificates.map((item, index) => (
              <div className="img-card" key={item.title} onClick={() => setLightbox({images: resolvedPage.certificates.map((cert) => cert.src), index})} data-sanity={pageAttr(`certificates[${index}]`)}>
                <img src={item.src} alt={item.alt} style={{width: '100%', height: 220, objectFit: 'contain', padding: '1rem', background: 'white'}} data-sanity={pageAttr(`certificates[${index}].image`)} />
                <div className="img-card-body"><div className="img-card-title" data-sanity={pageAttr(`certificates[${index}].title`)}>{item.title}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="green-dark" id="galeria">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('galleryTag')}>{resolvedPage.galleryTag}</span>
          <h2 className="section-title" data-sanity={pageAttr('galleryTitle')}>{resolvedPage.galleryTitle}</h2>
          <p className="section-desc" style={{color: 'rgba(255,255,255,0.7)'}} data-sanity={pageAttr('galleryDescription')}>{resolvedPage.galleryDescription}</p>
          <div className="gallery-grid-new">
            {resolvedPage.galleryImages.map((image, index) => (
              <div className="gi-new" key={image.src} onClick={() => setLightbox({images: resolvedPage.galleryImages.map((item) => item.src), index})} data-sanity={pageAttr(`galleryImages[${index}]`)}>
                <img src={image.src} alt={image.alt} loading="lazy" data-sanity={pageAttr(`galleryImages[${index}]`)} />
                <div className="gi-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding: '5rem 0', background: '#111111', overflow: 'hidden'}}>
        <div style={{maxWidth: 1180, margin: '0 auto', padding: '0 2rem 2rem'}}>
          <span className="tag" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.15)'}} data-sanity={pageAttr('videosTag')}>{resolvedPage.videosTag}</span>
          <h2 className="section-title" style={{color: 'white'}} data-sanity={pageAttr('videosTitle')}>{resolvedPage.videosTitle}</h2>
        </div>
        <VideoSlider videos={resolvedPage.videos} />
      </section>

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 data-sanity={pageAttr('ctaTitle')}>{resolvedPage.ctaTitle}</h2>
              <p data-sanity={pageAttr('ctaText')}>{resolvedPage.ctaText}</p>
            </div>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
              <Link href={resolvedPage.ctaPrimaryHref} className="btn-primary" style={{background: 'white', color: 'var(--green-dark)'}} data-sanity={pageAttr('ctaPrimaryLabel')}>
                {resolvedPage.ctaPrimaryLabel}
              </Link>
              <a href={resolvedPage.ctaSecondaryHref} className="btn-outline" data-sanity={pageAttr('ctaSecondaryLabel')}>{resolvedPage.ctaSecondaryLabel}</a>
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </>
  )
}
