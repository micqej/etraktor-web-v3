'use client'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import { useState, useEffect, useRef } from 'react'

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const galleryImages = [
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-01.JPG', alt: 'ET 2000' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-02.JPG', alt: 'Tichý chod' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-03.JPG', alt: 'Jazda v teréne' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-04.JPG', alt: 'Prevoz' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-05.JPG', alt: 'Vlečka' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-06.JPG', alt: 'Príves 600kg' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-07.JPG', alt: 'Radlica na sneh' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-08.JPG', alt: 'Pluh' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-09.JPG', alt: 'Kosenie' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-10.JPG', alt: 'Zametanie' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-11.JPG', alt: 'Akcia 11' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-12.JPG', alt: 'Akcia 12' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-13.JPG', alt: 'Akcia 13' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-14.JPG', alt: 'Akcia 14' },
  { src: 'https://www.etraktor.sk/images/galeria/elektricky-malotraktor-15.JPG', alt: 'Akcia 15' },
]

const videos = [
  { id: 'I7Z70rEkqOM', label: 'Tichý chod traktora' },
  { id: 'Cfy4jgR9W-o', label: 'Jazda v teréne' },
  { id: 'fLnGy33aTTY', label: 'Prevoz traktora' },
  { id: 'cJbF7qgYVOU', label: 'Jazda v teréne' },
  { id: '7MlTOTEkZIw', label: 'Jazda s vlečkou' },
  { id: '6EyL3EoOSRc', label: 'Príves 600 kg' },
  { id: 'Tox78aF9JGE', label: 'Radlica na sneh' },
  { id: '2fQrQQxhaTo', label: 'Pluh' },
  { id: 'udw-Vbazfhs', label: 'Kosenie / Zametanie' },
]

function VideoSlider() {
  const [cur, setCur] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)

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
    { id: 'tab-z', label: 'Základné' },
    { id: 'tab-b', label: 'Batérie' },
    { id: 'tab-n', label: 'Nabíjanie' },
    { id: 'tab-v', label: 'Výbava' },
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
        <table className="spec-table">
          <thead><tr><th>Parameter</th><th>2×12V DC</th><th>4×12V DC</th></tr></thead>
          <tbody>
            <tr><td>Typ zariadenia</td><td colSpan={2}>ET 2000</td></tr>
            <tr><td>Typ pohonu</td><td colSpan={2}>Samonosná tuhá náprava s diferenciálom</td></tr>
            <tr><td>Rýchlosť vpred / vzad</td><td colSpan={2}>0–15 km/h / 0–7 km/h</td></tr>
            <tr><td>Najmenší priemer otáčania</td><td colSpan={2}>6,5 m</td></tr>
            <tr><td>Hmotnosť traktora</td><td>380 kg</td><td>480 kg</td></tr>
            <tr><td>Max. ťahaný náklad</td><td>300 kg / 1 300 kg*</td><td>400 kg / 1 300 kg*</td></tr>
            <tr><td>Max. celková hmotnosť</td><td>680 kg / 1 680 kg*</td><td>880 kg</td></tr>
            <tr><td>Max. ťažná sila (asfalt)</td><td>2 800 N</td><td>3 650 N</td></tr>
            <tr><td>Brodenie</td><td colSpan={2}>150 mm pri 5 km/h</td></tr>
            <tr><td>Max. sklon povrchu</td><td colSpan={2}>10° (17%)</td></tr>
            <tr><td>Max. veľkosť prekážky</td><td colSpan={2}>120 mm</td></tr>
            <tr><td>Prevádzková teplota</td><td colSpan={2}>−5°C až +40°C</td></tr>
            <tr><td>Prevádzková vlhkosť</td><td colSpan={2}>30–80% (bez kondenzácie)</td></tr>
            <tr><td>Hladina akustického tlaku</td><td colSpan={2}>66 dBA</td></tr>
          </tbody>
        </table>
      )}
      {active === 'tab-b' && (
        <table className="spec-table">
          <thead><tr><th>Parameter</th><th>2×12V DC</th><th>4×12V DC</th></tr></thead>
          <tbody>
            <tr><td>Typ batérií</td><td colSpan={2}>Hawker XFC – trakčné (bez údržby)</td></tr>
            <tr><td>Kapacita</td><td>158 Ah</td><td>316 Ah</td></tr>
            <tr><td>Hmotnosť konfigurácie</td><td>380 kg</td><td>480 kg</td></tr>
            <tr><td>Životnosť (60% vybitie)</td><td colSpan={2}>1 200 ZVEI cyklov</td></tr>
            <tr><td>Životnosť (80% vybitie)</td><td colSpan={2}>800 cyklov</td></tr>
            <tr><td>Menovitá prevádzková teplota</td><td colSpan={2}>30°C</td></tr>
            <tr><td>Doplňovanie destilovanej vody</td><td colSpan={2}>Nie je potrebné</td></tr>
          </tbody>
        </table>
      )}
      {active === 'tab-n' && (
        <table className="spec-table">
          <thead><tr><th>Parameter</th><th>Hodnota</th></tr></thead>
          <tbody>
            <tr><td>Typ nabíjačky</td><td>Hawker XFC schválená nabíjačka</td></tr>
            <tr><td>Vstupné napätie</td><td>240V AC (sieť)</td></tr>
            <tr><td>Výstupné napätie</td><td>24V DC</td></tr>
            <tr><td>Prúd nabíjačky (opcia)</td><td>40A</td></tr>
            <tr><td>Nabíjanie počas prevádzky</td><td>Kdekoľvek – bez poškodenia batérií</td></tr>
            <tr><td>Odporúčané skladovanie</td><td>Plne nabité, 20°C, sucho</td></tr>
          </tbody>
        </table>
      )}
      {active === 'tab-v' && (
        <table className="spec-table">
          <thead><tr><th>Vybavenie</th><th>Typ</th></tr></thead>
          <tbody>
            <tr className="group-row"><td colSpan={2}>Výkon akumulátorov</td></tr>
            <tr><td>2×12V DC – 158 Ah</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>4×12V DC – 316 Ah</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr><td>Nabíjačka HAWKER 24V / 40A</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr className="group-row"><td colSpan={2}>Bezpečnosť</td></tr>
            <tr><td>Kotúčové brzdy na prednej náprave</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Elektrická parkovacia brzda</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Svetlá + smerovky</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Výstražná trúba</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Maják</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr className="group-row"><td colSpan={2}>Komfort</td></tr>
            <tr><td>Odprúžené sedadlo s opierkami</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Spätné zrkadlá</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Informačný display</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Rádio FM/MP3 + 2 reproduktory</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr><td>Kabína so stieračom a ostrekovačom</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr className="group-row"><td colSpan={2}>Iná výbava</td></tr>
            <tr><td>Elektrická zásuvka prívesného vozíka</td><td><span className="badge-std">štandard</span></td></tr>
            <tr><td>Ťažná guľa 50 mm</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr><td>Hydraulické čerpadlo 380 bar / 12 cm³</td><td><span className="badge-opt">opcia</span></td></tr>
            <tr><td>Napäťový konektor pre príslušenstvo 50A</td><td><span className="badge-opt">opcia</span></td></tr>
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
        <div className="hero-bg" style={{ backgroundImage: "url('https://www.etraktor.sk/images/elektricky-malotraktor.jpg')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">Vlastný produkt Etraktor, s.r.o.</p>
              <h1 className="hero-title">Elektrický<br />malotraktor<br /><span>ET 2000</span></h1>
              <p className="hero-subtitle">Traktor, ktorý šetrí Vašu peňaženku i životné prostredie!</p>
              <p className="hero-desc">Nulové emisie, tichá prevádzka a minimálne prevádzkové náklady. Moderná alternatíva k spaľovacím motorom pre záhradu, poľnohospodárstvo aj priemysel.</p>
              <div className="hero-btns">
                <Link href="/kontakt" className="btn-primary">Dopytovať cenu</Link>
                <a href="#parametre" className="btn-outline">Technické parametre</a>
              </div>
            </div>
            <div>
              <img src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg" alt="ET 2000" className="hero-right-img" />
            </div>
          </div>
        </div>
        <div className="hero-stats-bar">
          <div className="container">
            <div className="hero-stats">
              <div className="hstat"><div className="hstat-val">90%</div><div className="hstat-label">Účinnosť motora</div></div>
              <div className="hstat"><div className="hstat-val">0</div><div className="hstat-label">Lokálnych emisií</div></div>
              <div className="hstat"><div className="hstat-val">66 dBA</div><div className="hstat-label">Hladina hluku</div></div>
              <div className="hstat"><div className="hstat-val">15 km/h</div><div className="hstat-label">Max. rýchlosť</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* PREČO ELEKTRICKÝ */}
      <section className="white">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">Inteligentnejší pohon</span>
              <h2 className="section-title">Prečo elektrický malotraktor?</h2>
              <p>Elektrický malotraktor sa vyznačuje vyššou účinnosťou využitia energie ako klasické benzínové (resp. naftové) motory. Účinnosť spaľovacích motorov je cca 15–20%. U elektrických motoroch sa to pohybuje okolo 90%.</p>
              <br /><p>Elektromotor má niekoľko súčastí, pri činnosti nedochádza k treniu, takže jeho životnosť je bez ohľadu na ložiská takmer neobmedzená.</p>
              <br /><p>Samotná jazda na elektrickom traktore je veľmi jednoduchá. Maximálny záberový moment od nulových otáčkach je pôžitkom pri jazde.</p>
              <br />
              <div className="eff-item">
                <div className="eff-row"><span className="eff-name">Elektrický motor ET 2000</span><span className="eff-pct">90%</span></div>
                <div className="eff-bar-bg"><div className="eff-bar green" style={{ width: '90%' }} /></div>
              </div>
              <div className="eff-item" style={{ marginTop: '1rem' }}>
                <div className="eff-row"><span className="eff-name">Spaľovací motor (benzín/nafta)</span><span className="eff-pct" style={{ color: '#78909c' }}>15–20%</span></div>
                <div className="eff-bar-bg"><div className="eff-bar gray" style={{ width: '18%' }} /></div>
              </div>
            </div>
            <div>
              <div className="stats-row" style={{ marginBottom: '1.5rem' }}>
                <div className="stat-card"><div className="stat-card-val">90%</div><div className="stat-card-label">Účinnosť</div></div>
                <div className="stat-card"><div className="stat-card-val">0</div><div className="stat-card-label">Emisie</div></div>
                <div className="stat-card"><div className="stat-card-val">66 dBA</div><div className="stat-card-label">Hluk</div></div>
                <div className="stat-card"><div className="stat-card-val">~∞</div><div className="stat-card-label">Životnosť</div></div>
              </div>
              <img src="https://www.etraktor.sk/images/elektricky-malotraktor.jpg" alt="ET 2000" style={{ width: '100%', borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', objectFit: 'cover', maxHeight: 260 }} />
            </div>
          </div>
        </div>
      </section>

      {/* VÝHODY */}
      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">Výhody zariadenia</span>
              <h2 className="section-title">Výhody ET 2000</h2>
              <div className="check-list">
                {[
                  ['Vysoký výkon', 'maximálny záberový moment od nulových otáčok, plynulá regulácia 0–15 km/h'],
                  ['Tichá prevádzka', 'len 66 dBA, vhodný do obytných zón a uzavretých priestorov'],
                  ['Nulové emisie', 'žiadne miestne emisie z výfuku, ideálny pre sklady a skleníky'],
                  ['Jednoduchá obsluha', 'komfortná jazda, automatická regulácia rýchlosti'],
                  ['Nízke prevádzkové náklady', 'minimum pohyblivých dielov, bez oleja a filtrov'],
                  ['Rekuperácia energie', '90% brzdenia dobíja akumulátory späť'],
                ].map(([bold, rest], i) => (
                  <div className="check-item" key={i}>
                    <CheckIcon />
                    <span><strong>{bold}</strong> – {rest}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <span className="tag">Možnosti použitia</span>
              <h2 className="section-title">Kde ho využijete</h2>
              <div className="features-grid" style={{ gridTemplateColumns: '1fr 1fr', marginTop: 0 }}>
                {[
                  { title: 'V domácnosti', desc: 'Úpravy záhrady a pozemku' },
                  { title: 'Lesohospodárstvo', desc: 'Práce v lese' },
                  { title: 'Poľnohospodárstvo', desc: 'Orba, kosenie, zber' },
                  { title: 'Priemysel', desc: 'Sklady, skleníky' },
                  { title: 'Samospráva', desc: 'Obce a parky' },
                  { title: 'Certifikované', desc: 'Spĺňa normy' },
                ].map((f, i) => (
                  <div className="feature-item" key={i}>
                    <div className="feature-icon">
                      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
                    </div>
                    <div>
                      <div className="feature-title">{f.title}</div>
                      <div className="feature-desc">{f.desc}</div>
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
          <span className="tag">ET 2000 – Špecifikácie</span>
          <h2 className="section-title">Technické parametre</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {['rozmerythumb1', 'rozmerythumb2', 'rozmerythumb3'].map((img, i) => (
              <img
                key={i}
                src={`https://www.etraktor.sk/images/${img}.png`}
                alt={`Rozmery ${i + 1}`}
                style={{ borderRadius: 'var(--radius)', boxShadow: 'var(--shadow)', width: '100%', cursor: 'pointer' }}
                onClick={() => setLb({
                  images: ['rozmerythumb1', 'rozmerythumb2', 'rozmerythumb3'].map(x => `https://www.etraktor.sk/images/${x}.png`),
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
          <span className="tag">Kapacita a výdrž</span>
          <h2 className="section-title">Dojazd malotraktora</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {[
              { src: 'dojazd1', label: 'Konfigurácia 2×12V DC', badge: 'štandard', badgeClass: 'badge-std', info: 'Hmotnosť 380 kg • Kapacita 158 Ah • Štandardná konfigurácia pre záhradné a poľnohospodárske práce.' },
              { src: 'dojazd2', label: 'Konfigurácia 4×12V DC', badge: 'opcia', badgeClass: 'badge-opt', info: 'Hmotnosť 480 kg • Kapacita 316 Ah • Rozšírená kapacita pre náročné priemyselné nasadenie.' },
            ].map((d, i) => (
              <div className="img-card" key={i} onClick={() => setLb({ images: ['dojazd1', 'dojazd2'].map(x => `https://www.etraktor.sk/images/${x}.jpg`), idx: i })}>
                <img src={`https://www.etraktor.sk/images/${d.src}.jpg`} alt={d.label} style={{ width: '100%', height: 'auto', minHeight: 160, objectFit: 'contain', background: '#f5f7f5' }} />
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
          <span className="tag">Rozšírené možnosti</span>
          <h2 className="section-title">Príslušenstvo</h2>
          <div className="three-col">
            {[
              { src: 'prislusenstvosumar', alt: 'Kompletný sortiment', title: 'Kompletný sortiment', desc: 'Jarkovače, hrobkovače, vyorávače, oborávacie kolesá, pasívne kypriče, plečky, vlečky, valce.' },
              { src: 'prislusenstvo', alt: 'Predná radlica na sneh', title: 'Predná radlica na sneh', desc: 'Robustné prevedenie s výmenným gumovým britom. Nastaviteľný uhol ±15° a ±30°.' },
              { src: 'zadnyzaves', alt: 'Zadný záves', title: 'Zadný záves', desc: 'Univerzálny zadný záves pre pluh, vyorávač zemiakov, brány a ďalšie príslušenstvo.' },
            ].map((item, i) => (
              <div className="img-card" key={i}>
                <img src={`https://www.etraktor.sk/images/${item.src}.${item.src === 'zadnyzaves' ? 'png' : 'jpg'}`} alt={item.alt} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div className="img-card-body">
                  <div className="img-card-title">{item.title}</div>
                  <div className="img-card-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFIKÁTY */}
      <section className="white">
        <div className="container">
          <span className="tag">Normy a certifikácia</span>
          <h2 className="section-title">Certifikované zariadenie</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', maxWidth: 600 }}>
            {[1, 2].map(n => (
              <div className="img-card" key={n} onClick={() => setLb({ images: [1, 2].map(x => `https://www.etraktor.sk/images/certifikat${x}.jpg`), idx: n - 1 })}>
                <img src={`https://www.etraktor.sk/images/certifikat${n}.jpg`} alt={`Certifikát ${n}`} style={{ width: '100%', height: 220, objectFit: 'contain', padding: '1rem', background: 'white' }} />
                <div className="img-card-body"><div className="img-card-title">Certifikát {n}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section className="green-dark" id="galeria">
        <div className="container">
          <span className="tag">ET 2000 v akcii</span>
          <h2 className="section-title">Fotogaléria</h2>
          <p className="section-desc" style={{ color: 'rgba(255,255,255,0.7)' }}>Kliknite na fotografiu pre zväčšenie.</p>
          <div className="gallery-grid-new">
            {galleryImages.map((img, i) => (
              <div className="gi-new" key={i} onClick={() => setLb({ images: galleryImages.map(x => x.src), idx: i })}>
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gi-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOGALÉRIA */}
      <section style={{ padding: '5rem 0', background: '#111111', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 2rem 2rem' }}>
          <span className="tag" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white', background: 'rgba(255,255,255,0.15)' }}>ET 2000 v akcii</span>
          <h2 className="section-title" style={{ color: 'white' }}>Videogaléria</h2>
        </div>
        <VideoSlider />
      </section>

      {/* CENNÍK CTA */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Získajte cenovú ponuku</h2>
              <p>Aktuálny cenník ET 2000 vám poskytneme na vyžiadanie. Cena závisí od konfigurácie akumulátorov a príslušenstva.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/kontakt" className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>Napísať správu</Link>
              <a href="tel:+421907933648" className="btn-outline">+421 907 933 648</a>
            </div>
          </div>
        </div>
      </section>

      <RefsSection />
      <Footer />
    </>
  )
}
