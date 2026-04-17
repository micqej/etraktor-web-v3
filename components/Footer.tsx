'use client'

import Link from 'next/link'
import {createDataAttribute} from 'next-sanity'
import {useLiveQuery} from 'next-sanity/preview'

import type {SiteSettingsContent} from '@/sanity/lib/content'
import {mapLiveSiteSettings} from '@/sanity/lib/liveMappers'
import {siteSettingsQuery} from '@/sanity/lib/queries'

type FooterProps = {
  siteSettings: SiteSettingsContent
}

export default function Footer({siteSettings}: FooterProps) {
  const year = new Date().getFullYear()
  const [liveData] = useLiveQuery<any>(siteSettings, siteSettingsQuery)
  const resolvedSettings = mapLiveSiteSettings(siteSettings, liveData)
  const settingsAttr = createDataAttribute({id: 'siteSettings', type: 'siteSettings', path: []})
  const footerLinkPath = (index: number) => {
    const key = resolvedSettings.footerLinks[index]?._key
    return key ? `footerLinks[_key=="${key}"]` : `footerLinks[${index}]`
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link href="/" className="footer-logo" aria-label="Prejsť na domovskú stránku" data-sanity={settingsAttr('logo')}>
          <img
            src={resolvedSettings.logoSrc}
            alt="logo"
            style={{ height: 42, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }}
          />
          <span data-sanity={settingsAttr('siteTitle')}>{resolvedSettings.siteTitle}</span>
        </Link>
        <div className="footer-links">
          {resolvedSettings.footerLinks.map((link, index) => (
            <Link href={link.href} key={link.href} data-sanity={settingsAttr(`${footerLinkPath(index)}.label`)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-copy" data-sanity={settingsAttr('footerAddress')}>
          © {year} {resolvedSettings.siteTitle} &bull; {resolvedSettings.footerAddress} &nbsp;|&nbsp; {resolvedSettings.footerCredit}
        </div>
      </div>
    </footer>
  )
}
