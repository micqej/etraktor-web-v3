export default function RefsSection() {
  const refs = [
    { alt: 'Strojnícka fakulta TU Košice', src: 'https://www.etraktor.sk/images/ref1.png' },
    { alt: 'PIAFA Vyškov', src: 'https://www.etraktor.sk/images/ref2.png' },
    { alt: 'Žilinská Univerzita', src: 'https://www.etraktor.sk/images/ref3.png' },
    { alt: 'Referencia 4', src: 'https://www.etraktor.sk/images/ref4.png' },
    { alt: 'Referencia 5', src: 'https://www.etraktor.sk/images/ref5.png' },
    { alt: 'Referencia 6', src: 'https://www.etraktor.sk/images/ref6.png' },
  ]
  return (
    <section className="refs-section">
      <div className="container">
        <span className="tag">Naši partneri a referencie</span>
        <div className="refs-logos">
          {refs.map((r, i) => (
            <div className="ref-logo" key={i}>
              <img src={r.src} alt={r.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
