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
import type {
  ProductCatalogItem,
  ProductContent,
  ProductEquipmentGroup,
  ProductSpec,
  SiteSettingsContent,
} from '@/sanity/lib/content'
import {productsPageQuery} from '@/sanity/lib/queries'

const DEFAULT_PRODUCT_GALLERY = [
  '/images/elektricky-malotraktor.jpg',
  '/images/dojazd1.jpg',
  '/images/dojazd2.jpg',
]

function isAccessoryCatalogItem(item: ProductCatalogItem) {
  const value = `${item.title} ${item.badge}`.toLowerCase()
  return value.includes('príslušen') || value.includes('prislusen')
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function TypeBadge({type}: {type: string}) {
  return <span className={type.toLowerCase() === 'opcia' ? 'badge-opt' : 'badge-std'}>{type}</span>
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
    const perView =
      typeof window !== 'undefined' && window.innerWidth <= 600
        ? 1
        : typeof window !== 'undefined' && window.innerWidth <= 900
          ? 2
          : 3
    const max = Math.max(0, videos.length - perView)
    setCur((value) => Math.max(0, Math.min(value + delta, max)))
  }

  return (
    <div className="vs-outer">
      <button className="vs-arrow vs-prev" onClick={() => nav(-1)} type="button">
        &#8249;
      </button>
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
      <button className="vs-arrow vs-next" onClick={() => nav(1)} type="button">
        &#8250;
      </button>
    </div>
  )
}

function SpecsTable({rows, dual = true}: {rows: ProductSpec[]; dual?: boolean}) {
  return (
    <div className="spec-table-wrap">
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
    </div>
  )
}

function EquipmentTable({groups}: {groups: ProductEquipmentGroup[]}) {
  return (
    <div className="spec-table-wrap">
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
                <td>
                  <TypeBadge type={item.type} />
                </td>
              </tr>
            )),
          ])}
        </tbody>
      </table>
    </div>
  )
}

function Tabs({page}: {page: ProductContent}) {
  const [active, setActive] = useState<'basic' | 'battery' | 'charging' | 'equipment'>('basic')

  return (
    <div>
      <div className="tabs">
        <button className={`tab-btn${active === 'basic' ? ' active' : ''}`} onClick={() => setActive('basic')} type="button">
          Základné
        </button>
        <button className={`tab-btn${active === 'battery' ? ' active' : ''}`} onClick={() => setActive('battery')} type="button">
          Batérie
        </button>
        <button className={`tab-btn${active === 'charging' ? ' active' : ''}`} onClick={() => setActive('charging')} type="button">
          Nabíjanie
        </button>
        <button className={`tab-btn${active === 'equipment' ? ' active' : ''}`} onClick={() => setActive('equipment')} type="button">
          Výbava
        </button>
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
  catalogIndex,
  displayIndex,
  pageAttr,
  onOpenLightbox,
  fallbackImages,
}: {
  item: ProductCatalogItem
  catalogIndex: number
  displayIndex: number
  pageAttr: (path: string) => string
  onOpenLightbox: (images: string[], startIndex: number) => void
  fallbackImages: string[]
}) {
  const basePath = item._key ? `productCatalog[_key=="${item._key}"]` : `productCatalog[${catalogIndex}]`
  const availableDocuments = item.documents.filter((document) => document.url && document.url !== '#')
  const gallerySources = [...item.galleryImages.map((image) => image.src), ...fallbackImages].filter(Boolean)
  const lightboxImages = Array.from(
    new Set([item.imageSrc, ...gallerySources].filter(Boolean)),
  ).filter(Boolean)
  const additionalImages = lightboxImages.slice(1)
  const documentsTitle = item.documentsTitle?.trim()
  const normalizedDocumentsTitle = documentsTitle?.toLowerCase()
  const documentsHeading =
    normalizedDocumentsTitle && normalizedDocumentsTitle !== 'dokumenty' && normalizedDocumentsTitle !== 'dokumenty na stiahnutie'
      ? documentsTitle
      : `Dokumenty ${item.title}`

  const documentPath = (docIndex: number) => {
    const key = item.documents[docIndex]?._key
    return key ? `${basePath}.documents[_key=="${key}"]` : `${basePath}.documents[${docIndex}]`
  }

  const imagePath = (imageSrc: string) => {
    if (imageSrc === item.imageSrc) return `${basePath}.image`
    const galleryIndex = item.galleryImages.findIndex((image) => image.src === imageSrc)
    if (galleryIndex === -1) return undefined
    const key = item.galleryImages[galleryIndex]?._key
    return key ? `${basePath}.galleryImages[_key=="${key}"]` : `${basePath}.galleryImages[${galleryIndex}]`
  }

  return (
    <section className={displayIndex % 2 === 0 ? 'white' : 'bg'} data-sanity={pageAttr(basePath)}>
      <div className="container">
        <div className="product-doc-shell">
          <div className="product-doc-copy">
            <h2 className="section-title product-doc-title" data-sanity={pageAttr(`${basePath}.title`)}>
              {item.title}
            </h2>
            {availableDocuments.length ? (
              <>
                <h3 className="subsection-title" data-sanity={pageAttr(`${basePath}.documentsTitle`)}>
                  {documentsHeading}
                </h3>
                <div className="product-doc-grid">
                  {item.documents.map((document, docIndex) =>
                    document.url && document.url !== '#' ? (
                      <a
                        key={`${document.label}-${docIndex}`}
                        href={document.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="doc-button"
                        data-sanity={pageAttr(`${documentPath(docIndex)}.label`)}
                      >
                        {document.label}
                      </a>
                    ) : null,
                  )}
                </div>
              </>
            ) : null}
          </div>

          <div className="product-media-stack">
            <img
              src={lightboxImages[0] || item.imageSrc}
              alt={item.imageAlt}
              data-sanity={pageAttr(`${basePath}.image`)}
              className="product-main-image zoomable-image"
              onClick={() => onOpenLightbox(lightboxImages, 0)}
            />

            {additionalImages.length ? (
              <div className="product-gallery-grid">
                {additionalImages.map((imageSrc, imageIndex) => {
                  const imageAlt =
                    item.galleryImages.find((image) => image.src === imageSrc)?.alt || `${item.title} ${imageIndex + 2}`
                  const imageSanityPath = imagePath(imageSrc)

                  return (
                    <div
                      key={`${imageSrc}-${imageIndex}`}
                      className="gi-new"
                      onClick={() => onOpenLightbox(lightboxImages, imageIndex + 1)}
                      data-sanity={imageSanityPath ? pageAttr(imageSanityPath) : undefined}
                    >
                      <img
                        src={imageSrc}
                        alt={imageAlt}
                        loading="lazy"
                        data-sanity={imageSanityPath ? pageAttr(imageSanityPath) : undefined}
                      />
                      <div className="gi-overlay" />
                    </div>
                  )
                })}
              </div>
            ) : null}
          </div>
        </div>
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
  const visibleProductCatalog = resolvedPage.productCatalog
    .map((item, catalogIndex) => ({item, catalogIndex}))
    .filter(({item}) => !isAccessoryCatalogItem(item))
  const hasCatalog = visibleProductCatalog.length > 0
  const dimensionsTag =
    resolvedPage.dimensionsTag.toLowerCase().includes('et 2000') ? 'Technické parametre' : resolvedPage.dimensionsTag
  const accessoriesTag =
    resolvedPage.accessoriesTag.toLowerCase().includes('rozšírené') ? 'Príslušenstvo' : resolvedPage.accessoriesTag
  const [lightbox, setLightbox] = useState<{images: string[]; index: number} | null>(null)
  const pageAttr = createDataAttribute({id: documentId, type: documentId, path: []})
  const catalogItemPath = (index: number) => {
    const key = resolvedPage.productCatalog[index]?._key
    return key ? `productCatalog[_key=="${key}"]` : `productCatalog[${index}]`
  }
  const et3000Index = resolvedPage.productCatalog.findIndex((item) => item.title.toLowerCase().includes('et 3000'))
  const et3000Item = et3000Index >= 0 ? resolvedPage.productCatalog[et3000Index] : null
  const et3000Specs =
    et3000Item?.specs.filter((spec) => spec.parameter.trim().toLowerCase() !== 'stav' && spec.value.trim()).length
      ? et3000Item.specs.filter((spec) => spec.parameter.trim().toLowerCase() !== 'stav' && spec.value.trim())
      : [{parameter: 'Typ zariadenia', value: 'ET 3000'}]

  const heroStatPath = (index: number) => {
    const key = resolvedPage.heroStats[index]?._key
    return key ? `heroStats[_key=="${key}"]` : `heroStats[${index}]`
  }

  const introStatPath = (index: number) => {
    const key = resolvedPage.introStats[index]?._key
    return key ? `introStats[_key=="${key}"]` : `introStats[${index}]`
  }

  const comfortItemPath = (index: number) => {
    const key = resolvedPage.comfortItems[index]?._key
    return key ? `comfortItems[_key=="${key}"]` : `comfortItems[${index}]`
  }

  const comfortImagePath = (index: number) => {
    const key = resolvedPage.comfortImages[index]?._key
    return key ? `comfortImages[_key=="${key}"]` : `comfortImages[${index}]`
  }

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
              <p className="hero-eyebrow" data-sanity={pageAttr('heroEyebrow')}>
                {resolvedPage.heroEyebrow}
              </p>
              <h1 className="hero-title">
                <span data-sanity={pageAttr('heroTitle')}>{resolvedPage.heroTitle}</span>
                <br />
                <span data-sanity={pageAttr('heroAccent')}>{resolvedPage.heroAccent}</span>
              </h1>
              <p className="hero-subtitle" data-sanity={pageAttr('heroSubtitle')}>
                {resolvedPage.heroSubtitle}
              </p>
              <p className="hero-desc" data-sanity={pageAttr('heroDescription')}>
                {resolvedPage.heroDescription}
              </p>
              <div className="hero-btns">
                <Link href={resolvedPage.heroPrimaryHref} className="btn-primary" data-sanity={pageAttr('heroPrimaryLabel')}>
                  {resolvedPage.heroPrimaryLabel}
                </Link>
                <a href={resolvedPage.heroSecondaryHref} className="btn-outline" data-sanity={pageAttr('heroSecondaryLabel')}>
                  {resolvedPage.heroSecondaryLabel}
                </a>
              </div>
            </div>
            <div>
              <img
                src={resolvedPage.heroImageSrc}
                alt={resolvedPage.heroAccent}
                className="hero-right-img zoomable-image"
                data-sanity={pageAttr('heroImage')}
                onClick={() => setLightbox({images: [resolvedPage.heroImageSrc], index: 0})}
              />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {resolvedPage.heroStats.map((stat, index) => (
                <div className="hstat" key={`${stat.value}-${stat.label}`} data-sanity={pageAttr(heroStatPath(index))}>
                  <div className="hstat-val" data-sanity={pageAttr(`${heroStatPath(index)}.value`)}>
                    {stat.value}
                  </div>
                  <div className="hstat-label" data-sanity={pageAttr(`${heroStatPath(index)}.label`)}>
                    {stat.label}
                  </div>
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
              <span className="tag" data-sanity={pageAttr('introTag')}>
                {resolvedPage.introTag}
              </span>
              <h2 className="section-title" data-sanity={pageAttr('introTitle')}>
                {resolvedPage.introTitle}
              </h2>
              {resolvedPage.introParagraphs.map((paragraph, index) => (
                <p key={paragraph} style={{marginBottom: '1rem'}} data-sanity={pageAttr(`introParagraphs[${index}]`)}>
                  {paragraph}
                </p>
              ))}
              <div className="eff-item">
                <div className="eff-row">
                  <span className="eff-name" data-sanity={pageAttr('efficiencyTitleA')}>
                    {resolvedPage.efficiencyTitleA}
                  </span>
                  <span className="eff-pct" data-sanity={pageAttr('efficiencyValueA')}>
                    {resolvedPage.efficiencyValueA}
                  </span>
                </div>
                <div className="eff-bar-bg">
                  <div className="eff-bar green" style={{width: resolvedPage.efficiencyValueA}} />
                </div>
              </div>
              <div className="eff-item" style={{marginTop: '1rem'}}>
                <div className="eff-row">
                  <span className="eff-name" data-sanity={pageAttr('efficiencyTitleB')}>
                    {resolvedPage.efficiencyTitleB}
                  </span>
                  <span className="eff-pct" style={{color: '#78909c'}} data-sanity={pageAttr('efficiencyValueB')}>
                    {resolvedPage.efficiencyValueB}
                  </span>
                </div>
                <div className="eff-bar-bg">
                  <div className="eff-bar gray" style={{width: '18%'}} />
                </div>
              </div>
            </div>
            <div>
              {resolvedPage.introStats.length ? (
                <div className="stats-row" style={{marginBottom: '1.5rem'}}>
                  {resolvedPage.introStats.map((stat, index) => (
                    <div className="stat-card" key={`${stat.value}-${stat.label}`} data-sanity={pageAttr(introStatPath(index))}>
                      <div className="stat-card-val" data-sanity={pageAttr(`${introStatPath(index)}.value`)}>
                        {stat.value}
                      </div>
                      <div className="stat-card-label" data-sanity={pageAttr(`${introStatPath(index)}.label`)}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
              <img
                src={resolvedPage.introImageSrc}
                alt={resolvedPage.heroAccent}
                style={{width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', objectFit: 'cover', maxHeight: 360}}
                className="zoomable-image"
                data-sanity={pageAttr('introImage')}
                onClick={() => setLightbox({images: [resolvedPage.introImageSrc], index: 0})}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag" data-sanity={pageAttr('benefitsTag')}>
                {resolvedPage.benefitsTag}
              </span>
              <h2 className="section-title" data-sanity={pageAttr('benefitsTitle')}>
                {resolvedPage.benefitsTitle}
              </h2>
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
              <span className="tag" data-sanity={pageAttr('useCasesTag')}>
                {resolvedPage.useCasesTag}
              </span>
              <h2 className="section-title" data-sanity={pageAttr('useCasesTitle')}>
                {resolvedPage.useCasesTitle}
              </h2>
              <div className="features-grid features-grid-two">
                {resolvedPage.useCases.map((item, index) => (
                  <div className="feature-item" key={item.title} data-sanity={pageAttr(`useCases[${index}]`)}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                      </svg>
                    </div>
                    <div>
                      <div className="feature-title" data-sanity={pageAttr(`useCases[${index}].title`)}>
                        {item.title}
                      </div>
                      <div className="feature-desc" data-sanity={pageAttr(`useCases[${index}].description`)}>
                        {item.description}
                      </div>
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
          <span className="tag" data-sanity={pageAttr('dimensionsTag')}>
            {dimensionsTag}
          </span>
          <h2 className="section-title" data-sanity={pageAttr('dimensionsTitle')}>
            {resolvedPage.dimensionsTitle}
          </h2>
          <div className="dimension-grid">
            {resolvedPage.dimensionImages.map((image, index) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                className="dimension-image zoomable-image"
                data-sanity={pageAttr(`dimensionImages[${index}].image`)}
                onClick={() => setLightbox({images: resolvedPage.dimensionImages.map((item) => item.src), index})}
              />
            ))}
          </div>
          <div className="tech-panels">
            <div className="tech-panel">
              <h3 className="subsection-title">ET 2000 špecifikácie</h3>
              <Tabs page={resolvedPage} />
            </div>
            <div className="tech-panel">
              <h3 className="subsection-title">ET 3000 špecifikácie</h3>
              <div className="spec-table-wrap">
                <table className="spec-table">
                  <tbody>
                    {et3000Specs.map((spec, specIndex) => {
                      const basePath = et3000Index >= 0 ? catalogItemPath(et3000Index) : 'productCatalog[1]'
                      const key = et3000Item?.specs[specIndex]?._key
                      const specPath = key ? `${basePath}.specs[_key=="${key}"]` : `${basePath}.specs[${specIndex}]`

                      return (
                        <tr key={`${spec.parameter}-${specIndex}`} data-sanity={pageAttr(specPath)}>
                          <td data-sanity={pageAttr(`${specPath}.parameter`)}>{spec.parameter}</td>
                          <td data-sanity={pageAttr(`${specPath}.value`)}>{spec.value}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('rangeTag')}>
            {resolvedPage.rangeTag}
          </span>
          <h2 className="section-title" data-sanity={pageAttr('rangeTitle')}>
            {resolvedPage.rangeTitle}
          </h2>
          <div className="range-grid">
            {resolvedPage.rangeCards.map((card, index) => (
              <div
                className="img-card"
                key={card.title}
                onClick={() => setLightbox({images: resolvedPage.rangeCards.map((item) => item.imageSrc), index})}
                data-sanity={pageAttr(`rangeCards[${index}]`)}
              >
                <img
                  src={card.imageSrc}
                  alt={card.title}
                  className="range-card-image"
                  data-sanity={pageAttr(`rangeCards[${index}].image`)}
                />
                <div className="img-card-body">
                  <div className="img-card-title">
                    <span data-sanity={pageAttr(`rangeCards[${index}].title`)}>{card.title}</span>{' '}
                    <span className={card.badgeClass} style={{marginLeft: 6}} data-sanity={pageAttr(`rangeCards[${index}].badge`)}>
                      {card.badge}
                    </span>
                  </div>
                  <div className="img-card-desc" data-sanity={pageAttr(`rangeCards[${index}].info`)}>
                    {card.info}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {hasCatalog
        ? visibleProductCatalog.map(({item, catalogIndex}, displayIndex) => (
            <ProductCatalogSection
              key={`${item.title}-${catalogIndex}`}
              item={item}
              catalogIndex={catalogIndex}
              displayIndex={displayIndex}
              pageAttr={pageAttr}
              fallbackImages={DEFAULT_PRODUCT_GALLERY}
              onOpenLightbox={(images, startIndex) => setLightbox({images, index: startIndex})}
            />
          ))
        : null}

      <section className="white">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('accessoriesTag')}>
            {accessoriesTag}
          </span>
          <h2 className="section-title" data-sanity={pageAttr('accessoriesTitle')}>
            {resolvedPage.accessoriesTitle}
          </h2>
          <div className="accessories-grid">
            {resolvedPage.accessories.map((item, index) => (
              <div
                className="img-card accessory-card"
                key={item.title}
                data-sanity={pageAttr(`accessories[${index}]`)}
                onClick={() => setLightbox({images: resolvedPage.accessories.map((card) => card.imageSrc || ''), index})}
              >
                <img
                  src={item.imageSrc}
                  alt={item.imageAlt || item.title}
                  className="accessory-card-image zoomable-image"
                  data-sanity={pageAttr(`accessories[${index}].image`)}
                />
                <div className="img-card-body">
                  <div className="img-card-title" data-sanity={pageAttr(`accessories[${index}].title`)}>
                    {item.title}
                  </div>
                  <div className="img-card-desc" data-sanity={pageAttr(`accessories[${index}].description`)}>
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('comfortTag')}>
            {resolvedPage.comfortTag}
          </span>
          <h2 className="section-title" data-sanity={pageAttr('comfortTitle')}>
            {resolvedPage.comfortTitle}
          </h2>
          <div className="comfort-layout">
            <div>
              <div className="check-list">
                {resolvedPage.comfortItems.map((item, index) => (
                  <div className="check-item" key={`${item.label}-${index}`} data-sanity={pageAttr(comfortItemPath(index))}>
                    <CheckIcon />
                    <span>
                      <span data-sanity={pageAttr(`${comfortItemPath(index)}.label`)}>{item.label}</span>{' '}
                      <span style={{marginLeft: 8}} data-sanity={pageAttr(`${comfortItemPath(index)}.type`)}>
                        <TypeBadge type={item.type} />
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="comfort-media-grid">
              {resolvedPage.comfortImages.map((image, index) => (
                <div
                  key={image.src}
                  className="comfort-media-card"
                  onClick={() => setLightbox({images: resolvedPage.comfortImages.map((item) => item.src), index})}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="zoomable-image"
                    data-sanity={pageAttr(comfortImagePath(index))}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="white">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('certificatesTag')}>
            {resolvedPage.certificatesTag}
          </span>
          <h2 className="section-title" data-sanity={pageAttr('certificatesTitle')}>
            {resolvedPage.certificatesTitle}
          </h2>
          <div className="certificates-grid">
            {resolvedPage.certificates.map((item, index) => (
              <div
                className="img-card"
                key={item.title}
                onClick={() => setLightbox({images: resolvedPage.certificates.map((cert) => cert.src), index})}
                data-sanity={pageAttr(`certificates[${index}]`)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="certificate-image"
                  data-sanity={pageAttr(`certificates[${index}].image`)}
                />
                <div className="img-card-body">
                  <div className="img-card-title" data-sanity={pageAttr(`certificates[${index}].title`)}>
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="green-dark" id="galeria">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('galleryTag')}>
            {resolvedPage.galleryTag}
          </span>
          <h2 className="section-title" data-sanity={pageAttr('galleryTitle')}>
            {resolvedPage.galleryTitle}
          </h2>
          <p className="section-desc" style={{color: 'rgba(255,255,255,0.7)'}} data-sanity={pageAttr('galleryDescription')}>
            {resolvedPage.galleryDescription}
          </p>
          <div className="gallery-grid-new">
            {resolvedPage.galleryImages.map((image, index) => (
              <div
                className="gi-new"
                key={image.src}
                onClick={() => setLightbox({images: resolvedPage.galleryImages.map((item) => item.src), index})}
                data-sanity={pageAttr(`galleryImages[${index}]`)}
              >
                <img src={image.src} alt={image.alt} loading="lazy" data-sanity={pageAttr(`galleryImages[${index}]`)} />
                <div className="gi-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{padding: '5rem 0', background: '#111111', overflow: 'hidden'}}>
        <div style={{maxWidth: 1180, margin: '0 auto', padding: '0 2rem 2rem'}}>
          <span
            className="tag"
            style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.15)'}}
            data-sanity={pageAttr('videosTag')}
          >
            {resolvedPage.videosTag}
          </span>
          <h2 className="section-title" style={{color: 'white'}} data-sanity={pageAttr('videosTitle')}>
            {resolvedPage.videosTitle}
          </h2>
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
              <Link
                href={resolvedPage.ctaPrimaryHref}
                className="btn-primary"
                style={{background: 'white', color: 'var(--green-dark)'}}
                data-sanity={pageAttr('ctaPrimaryLabel')}
              >
                {resolvedPage.ctaPrimaryLabel}
              </Link>
              <a href={resolvedPage.ctaSecondaryHref} className="btn-outline" data-sanity={pageAttr('ctaSecondaryLabel')}>
                {resolvedPage.ctaSecondaryLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </>
  )
}
