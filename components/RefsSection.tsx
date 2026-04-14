import {createDataAttribute} from 'next-sanity'

import type {SiteSettingsContent} from '@/sanity/lib/content'

type RefsSectionProps = {
  siteSettings: SiteSettingsContent
}

export default function RefsSection({siteSettings}: RefsSectionProps) {
  const settingsAttr = createDataAttribute({id: 'siteSettings', type: 'siteSettings', path: []})

  return (
    <section className="refs-section" data-sanity={settingsAttr('references')}>
      <div className="container">
        <span className="tag" data-sanity={settingsAttr('referencesTag')}>{siteSettings.referencesTag}</span>
        <div className="refs-logos">
          {siteSettings.references.map((reference, index) => (
            <div className="ref-logo" key={reference.src} data-sanity={settingsAttr(`references[${index}]`)}>
              <img src={reference.src} alt={reference.alt} data-sanity={settingsAttr(`references[${index}].image`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
