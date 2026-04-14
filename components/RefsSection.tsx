import type {SiteSettingsContent} from '@/sanity/lib/content'

type RefsSectionProps = {
  siteSettings: SiteSettingsContent
}

export default function RefsSection({siteSettings}: RefsSectionProps) {
  return (
    <section className="refs-section">
      <div className="container">
        <span className="tag">{siteSettings.referencesTag}</span>
        <div className="refs-logos">
          {siteSettings.references.map((reference) => (
            <div className="ref-logo" key={reference.src}>
              <img src={reference.src} alt={reference.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
