'use client'

import {createDataAttribute} from 'next-sanity'
import {useLiveQuery} from 'next-sanity/preview'

import type {SiteSettingsContent} from '@/sanity/lib/content'
import {mapLiveSiteSettings} from '@/sanity/lib/liveMappers'
import {siteSettingsQuery} from '@/sanity/lib/queries'

type RefsSectionProps = {
  siteSettings: SiteSettingsContent
}

export default function RefsSection({siteSettings}: RefsSectionProps) {
  const [liveData] = useLiveQuery<any>(siteSettings, siteSettingsQuery)
  const resolvedSettings = mapLiveSiteSettings(siteSettings, liveData)
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
