export default function RefsSection() {
  const refs = [
    { alt: 'Strojnícka fakulta TU Košice', src: '/refs/tuke.jpg' },
    { alt: 'PIAFA Vyškov', src: '/refs/piafa.jpg' },
    { alt: 'Žilinská Univerzita', src: '/refs/uniza.jpg' },
    { alt: 'Referencia 4', src: '/refs/ref4.jpg' },
    { alt: 'Referencia 5', src: '/refs/ref5.jpg' },
    { alt: 'Referencia 6', src: '/refs/ref6.jpg' },
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
