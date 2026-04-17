'use client'

import {createDataAttribute} from 'next-sanity'
import {useLiveQuery} from 'next-sanity/preview'

import type {SiteSettingsContent} from '@/sanity/lib/content'
import {siteSettingsQuery} from '@/sanity/lib/queries'

type RefsSectionProps = {
  siteSettings: SiteSettingsContent
}

export default function RefsSection({siteSettings}: RefsSectionProps) {
  const [resolvedSettings] = useLiveQuery<SiteSettingsContent>(siteSettings, siteSettingsQuery)
  const settingsAttr = createDataAttribute({id: 'siteSettings', type: 'siteSettings', path: []})
  const referencePath = (index: number) => {
    const key = resolvedSettings.references[index]?._key
    return key ? `references[_key=="${key}"]` : `references[${index}]`
  }

  return (
    <section className="refs-section" data-sanity={settingsAttr('references')}>
      <div className="container">
        <span className="tag" data-sanity={settingsAttr('referencesTag')}>{resolvedSettings.referencesTag}</span>
        <div className="refs-logos">
          {resolvedSettings.references.map((reference, index) => (
            <div className="ref-logo" key={reference.src} data-sanity={settingsAttr(referencePath(index))}>
              <img src={reference.src} alt={reference.alt} data-sanity={settingsAttr(`${referencePath(index)}.image`)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
