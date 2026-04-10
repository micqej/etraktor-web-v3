import Link from 'next/link'
import siteSettings from '@/content/site/site-settings.json'
import {assetPath} from '@/lib/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img
            src={assetPath(siteSettings.logoImage)}
            alt={siteSettings.logoAlt}
            style={{ height: 42, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }}
          />
          <span>{siteSettings.logoText}</span>
        </div>
        <div className="footer-links">
          {siteSettings.footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>{link.label}</Link>
          ))}
        </div>
        <div className="footer-copy">
          {siteSettings.footerCopyright} &bull; {siteSettings.footerAddress} &nbsp;|&nbsp; {siteSettings.footerCreditLabel}{' '}
          <a href={siteSettings.footerCreditHref} target="_blank" rel="noopener">{siteSettings.footerCreditText}</a>
        </div>
      </div>
    </footer>
  )
}
