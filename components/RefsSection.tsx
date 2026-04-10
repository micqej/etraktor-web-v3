import references from '@/content/site/references.json'
import {assetPath} from '@/lib/content'

export default function RefsSection() {
  return (
    <section className="refs-section">
      <div className="container">
        <span className="tag">{references.tag}</span>
        <div className="refs-logos">
          {references.items.map((r, i) => (
            <div className="ref-logo" key={i}>
              <img src={assetPath(r.src)} alt={r.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
