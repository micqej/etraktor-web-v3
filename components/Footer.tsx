import Link from 'next/link'
import {createDataAttribute} from 'next-sanity'

import type {SiteSettingsContent} from '@/sanity/lib/content'

type FooterProps = {
  siteSettings: SiteSettingsContent
}

export default function Footer({siteSettings}: FooterProps) {
  const year = new Date().getFullYear()
  const settingsAttr = createDataAttribute({id: 'siteSettings', type: 'siteSettings', path: []})

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Link href="/" className="footer-logo" aria-label="Prejsť na domovskú stránku" data-sanity={settingsAttr('logo')}>
          <img
            src={siteSettings.logoSrc}
            alt="logo"
            style={{ height: 42, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }}
          />
          <span data-sanity={settingsAttr('siteTitle')}>{siteSettings.siteTitle}</span>
        </Link>
        <div className="footer-links">
          {siteSettings.footerLinks.map((link, index) => (
            <Link href={link.href} key={link.href} data-sanity={settingsAttr(`footerLinks[${index}].label`)}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-copy" data-sanity={settingsAttr('footerAddress')}>
          © {year} {siteSettings.siteTitle} &bull; {siteSettings.footerAddress} &nbsp;|&nbsp; {siteSettings.footerCredit}
        </div>
      </div>
    </footer>
  )
}
