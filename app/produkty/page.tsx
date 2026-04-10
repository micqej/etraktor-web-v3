'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import { useState, useEffect, useRef } from 'react'
import produktyPage from '@/content/pages/produkty.json'
import {assetPath} from '@/lib/content'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

function VideoSlider() {
  const [cur, setCur] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const videos = produktyPage.videoSection.videos

  const getPerView = () => {
    if (typeof window === 'undefined') return 3
    return window.innerWidth <= 600 ? 1 : window.innerWidth <= 900 ? 2 : 3
  }

  const nav = (d: number) => {
    const pv = getPerView()
    const max = videos.length - pv
    setCur(c => Math.max(0, Math.min(c + d, max)))
  }

  useEffect(() => {
    if (!trackRef.current) return
    const item = trackRef.current.querySelector('.vs-item') as HTMLElement
    if (!item) return
    const gap = 24
    const w = item.offsetWidth + gap
    trackRef.current.style.transform = `translateX(-${cur * w}px)`
  }, [cur])

  return (
    <div className="vs-outer">
      <button className="vs-arrow vs-prev" onClick={() => nav(-1)}>&#8249;</button>
      <div className="vs-track-wrap">
        <div className="vs-track" ref={trackRef}>
          {videos.map((v, i) => (
            <div className="vs-item" key={i}>
              <div className="vs-ratio">
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}?rel=0&modestbranding=1`}
                  title={v.label}
                  allowFullScreen
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <div className="vs-label">{v.label}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="vs-arrow vs-next" onClick={() => nav(1)}>&#8250;</button>
    </div>
  )
}

function Tabs() {
  const [active, setActive] = useState('tab-z')
  const tabs = [
    { id: 'tab-z', label: produktyPage.parametersSection.tabs.basic.label },
    { id: 'tab-b', label: produktyPage.parametersSection.tabs.battery.label },
    { id: 'tab-n', label: produktyPage.parametersSection.tabs.charging.label },
    { id: 'tab-v', label: produktyPage.parametersSection.tabs.equipment.label },
  ]
  return (
    <div>
      <div className="tabs">
        {tabs.map(t => (
          <button key={t.id} className={`tab-btn${active === t.id ? ' active' : ''}`} onClick={() => setActive(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
      {active === 'tab-z' && (
        <>
          <table className="spec-table">
            <thead><tr><th>Parameter</th><th>{produktyPage.parametersSection.tabs.basic.columns[0]}</th><th>{produktyPage.parametersSection.tabs.basic.columns[1]}</th></tr></thead>
            <tbody>
              {produktyPage.parametersSection.tabs.basic.rows.map((row) => (
                <tr key={row.label}><td>{row.label}</td><td>{row.values[0]}</td><td>{row.values[1]}</td></tr>
              ))}
            </tbody>
          </table>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{produktyPage.parametersSection.tabs.basic.footnote}</p>
        </>
      )}
      {active === 'tab-b' && (
        <>
          <table className="spec-table">
            <thead><tr><th>Parameter</th><th>{produktyPage.parametersSection.tabs.battery.columns[0]}</th><th>{produktyPage.parametersSection.tabs.battery.columns[1]}</th></tr></thead>
            <tbody>
              {produktyPage.parametersSection.tabs.battery.rows.map((row) => (
                <tr key={row.label}><td>{row.label}</td><td>{row.values[0]}</td><td>{row.values[1]}</td></tr>
              ))}
            </tbody>
          </table>
          <img src={assetPath(produktyPage.parametersSection.tabs.battery.image)} alt={produktyPage.parametersSection.tabs.battery.imageAlt} style={{ maxWidth: 300, borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', marginTop: '1.5rem' }} />
        </>
      )}
      {active === 'tab-n' && (
        <>
          <table className="spec-table">
            <thead><tr><th>Parameter</th><th>Hodnota</th></tr></thead>
            <tbody>
              {produktyPage.parametersSection.tabs.charging.rows.map((row) => (
                <tr key={row.label}><td>{row.label}</td><td>{row.value}</td></tr>
              ))}
            </tbody>
          </table>
          <img src={assetPath(produktyPage.parametersSection.tabs.charging.image)} alt={produktyPage.parametersSection.tabs.charging.imageAlt} style={{ maxWidth: 380, borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', marginTop: '1.5rem' }} />
        </>
      )}
      {active === 'tab-v' && (
        <table className="spec-table">
          <thead><tr><th>Vybavenie</th><th>Typ</th></tr></thead>
          <tbody>
            {produktyPage.parametersSection.tabs.equipment.groups.flatMap((group) => [
              <tr className="group-row" key={`${group.title}-group`}><td colSpan={2}>{group.title}</td></tr>,
              ...group.items.map((item) => (
                <tr key={`${group.title}-${item.label}`}><td>{item.label}</td><td><span className={item.type === 'štandard' ? 'badge-std' : 'badge-opt'}>{item.type}</span></td></tr>
              )),
            ])}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default function ProduktyPage() {
  const [lb, setLb] = useState<{ images: string[]; idx: number } | null>(null)

  return (
    <>
      <Nav />

      {/* LIGHTBOX */}
      {lb && (
        <div className="lightbox open" onClick={() => setLb(null)}>
          <button className="lb-close" onClick={() => setLb(null)}>&#215;</button>
          <button className="lb-arrow lb-prev" onClick={e => { e.stopPropagation(); setLb(s => s ? { ...s, idx: (s.idx - 1 + s.images.length) % s.images.length } : null) }}>&#8249;</button>
          <img src={lb.images[lb.idx]} alt="" onClick={e => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '86vh', objectFit: 'contain', borderRadius: 8 }} />
          <button className="lb-arrow lb-next" onClick={e => { e.stopPropagation(); setLb(s => s ? { ...s, idx: (s.idx + 1) % s.images.length } : null) }}>&#8250;</button>
          <div className="lb-counter">{lb.idx + 1} / {lb.images.length}</div>
        </div>
      )}

      {/* HERO */}
      <section className="hero" style={{ minHeight: '75vh' }}>
        <div className="hero-bg" style={{ backgroundImage: `url('${assetPath(produktyPage.hero.backgroundImage)}')` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">{produktyPage.hero.eyebrow}</p>
              <h1 className="hero-title">{produktyPage.hero.titleLines[0]}<br />{produktyPage.hero.titleLines[1]}<br /><span>{produktyPage.hero.titleAccent}</span></h1>
              <p className="hero-subtitle">{produktyPage.hero.subtitle}</p>
              <p className="hero-desc">{produktyPage.hero.description}</p>
              <div className="hero-btns">
                <Link href={produktyPage.hero.primaryButtonHref} className="btn-primary">{produktyPage.hero.primaryButtonLabel}</Link>
                <a href={produktyPage.hero.secondaryButtonHref} className="btn-outline">{produktyPage.hero.secondaryButtonLabel}</a>
              </div>
            </div>
            <div>
              <img src={assetPath(produktyPage.hero.productImage)} alt="ET 2000" className="hero-right-img" />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              {produktyPage.hero.stats.map((stat) => (
                <div className="hstat" key={stat.label}><div className="hstat-val">{stat.value}</div><div className="hstat-label">{stat.label}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PREČO ELEKTRICKÝ */}
      <section className="white">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">{produktyPage.electricSection.tag}</span>
              <h2 className="section-title">{produktyPage.electricSection.title}</h2>
              {produktyPage.electricSection.paragraphs.map((paragraph, index) => (
                <p key={index} style={index > 0 ? { marginTop: '1rem' } : undefined}>{paragraph}</p>
              ))}
              <br />
              {produktyPage.electricSection.efficiency.map((item, index) => (
                <div className="eff-item" style={index > 0 ? { marginTop: '1rem' } : undefined} key={item.name}>
                  <div className="eff-row"><span className="eff-name">{item.name}</span><span className="eff-pct" style={item.variant === 'gray' ? { color: '#78909c' } : undefined}>{item.value}</span></div>
                  <div className="eff-bar-bg"><div className={`eff-bar ${item.variant}`} style={{ width: item.barWidth }} /></div>
                </div>
              ))}
            </div>
            <div>
              <div className="stats-row" style={{ marginBottom: '1.5rem' }}>
                {produktyPage.electricSection.statCards.map((item) => (
                  <div className="stat-card" key={item.label}><div className="stat-card-val">{item.value}</div><div className="stat-card-label">{item.label}</div></div>
                ))}
              </div>
              <img src={assetPath(produktyPage.electricSection.image)} alt="ET 2000" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', objectFit: 'cover', maxHeight: 260 }} />
            </div>
          </div>
        </div>
      </section>

      {/* VÝHODY */}
      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">{produktyPage.advantagesSection.tag}</span>
              <h2 className="section-title">{produktyPage.advantagesSection.title}</h2>
              <div className="check-list">
                {produktyPage.advantagesSection.items.map((item, i) => (
                  <div className="check-item" key={i}>
                    <CheckIcon />
                    <span><strong>{item.title}</strong> – {item.description}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="tag">{produktyPage.usageSection.tag}</span>
              <h2 className="section-title">{produktyPage.usageSection.title}</h2>
              <div className="features-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 0 }}>
                {produktyPage.usageSection.items.map((f, i) => (
                  <div className="feature-item" key={i}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PARAMETRE */}
      <section className="white" id="parametre">
        <div className="container">
          <span className="tag">{produktyPage.parametersSection.tag}</span>
          <h2 className="section-title">{produktyPage.parametersSection.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {produktyPage.parametersSection.dimensionImages.map((img, i) => (
              <img
                key={i}
                src={assetPath(img)}
                alt={`Rozmery ${i + 1}`}
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', width: '100%', cursor: 'pointer' }}
                onClick={() => setLb({
                  images: produktyPage.parametersSection.dimensionImages.map(assetPath),
                  idx: i,
                })}
              />
            ))}
          </div>
          <Tabs />
        </div>
      </section>

      {/* DOJAZD */}
      <section className="bg">
        <div className="container">
          <span className="tag">{produktyPage.rangeSection.tag}</span>
          <h2 className="section-title">{produktyPage.rangeSection.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {produktyPage.rangeSection.cards.map((d, i) => (
              <div className="img-card" key={i} onClick={() => setLb({ images: produktyPage.rangeSection.cards.map((item) => assetPath(item.src)), idx: i })}>
                <img src={assetPath(d.src)} alt={d.label} style={{ width: '100%', height: 'auto', minHeight: 160, objectFit: 'contain', background: '#f5f7f5' }} />
                <div className="img-card-body">
                  <div className="img-card-title">{d.label} <span className={d.badgeClass} style={{ marginLeft: 6 }}>{d.badge}</span></div>
                  <div className="img-card-desc">{d.info}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRÍSLUŠENSTVO */}
      <section className="white">
        <div className="container">
          <span className="tag">{produktyPage.accessoriesSection.tag}</span>
          <h2 className="section-title">{produktyPage.accessoriesSection.title}</h2>
          <div className="three-col">
            {produktyPage.accessoriesSection.items.map((item, i) => (
              <div className="img-card" key={i}>
                <img src={assetPath(item.src)} alt={item.alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div className="img-card-body">
                  <div className="img-card-title">{item.title}</div>
                  <div className="img-card-desc">{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFIKÁTY */}
      <section className="white">
        <div className="container">
          <span className="tag">{produktyPage.certificationsSection.tag}</span>
          <h2 className="section-title">{produktyPage.certificationsSection.title}</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 600 }}>
            {produktyPage.certificationsSection.images.map((image, index) => (
              <div className="img-card" key={image} onClick={() => setLb({ images: produktyPage.certificationsSection.images.map(assetPath), idx: index })}>
                <img src={assetPath(image)} alt={`Certifikát ${index + 1}`} style={{ width: '100%', height: 220, objectFit: 'contain', padding: '1rem', background: 'white' }} />
                <div className="img-card-body"><div className="img-card-title">Certifikát {index + 1}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section className="green-dark" id="galeria">
        <div className="container">
          <span className="tag">{produktyPage.gallerySection.tag}</span>
          <h2 className="section-title">{produktyPage.gallerySection.title}</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>{produktyPage.gallerySection.description}</p>
          <div className="gallery-grid-new">
            {produktyPage.gallerySection.images.map((img, i) => (
              <div className="gi-new" key={i} onClick={() => setLb({ images: produktyPage.gallerySection.images.map((item) => assetPath(item.src)), idx: i })}>
                <img src={assetPath(img.src)} alt={img.alt} loading="lazy" />
                <div className="gi-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOGALÉRIA */}
      <section style={{ padding: '5rem 0', background: '#111111', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 2rem 2rem' }}>
          <span className="tag" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.15)' }}>{produktyPage.videoSection.tag}</span>
          <h2 className="section-title" style={{ color: 'white' }}>{produktyPage.videoSection.title}</h2>
        </div>
        <VideoSlider />
      </section>

      {/* CENNÍK CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>{produktyPage.pricingSection.title}</h2>
              <p>{produktyPage.pricingSection.description}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={produktyPage.pricingSection.primaryButtonHref} className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>{produktyPage.pricingSection.primaryButtonLabel}</Link>
              <a href={produktyPage.pricingSection.secondaryButtonHref} className="btn-outline">{produktyPage.pricingSection.secondaryButtonLabel}</a>
            </div>
          </div>
        </div>
      </section>

      <RefsSection />
      <Footer />
    </>
  )
}
