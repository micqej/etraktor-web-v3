'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import siteSettings from '@/content/site/site-settings.json'
import {assetPath} from '@/lib/content'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const links = siteSettings.navLinks

  return (
    <>
      <nav id="mainNav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img
              className="nav-logo-img"
              alt={siteSettings.logoAlt}
              src={assetPath(siteSettings.logoImage)}
              style={{ height: 46, width: 46, objectFit: 'contain', borderRadius: '50%', border: '2px solid var(--border)' }}
            />
            <span className="nav-logo-sk">{siteSettings.logoText}</span>
          </Link>
          <div className="nav-links">
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
            <Link href={siteSettings.contactLink.href} className={`nav-cta${pathname === siteSettings.contactLink.href ? ' active' : ''}`}>
              {siteSettings.contactLink.label}
            </Link>
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {links.map(l => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href={siteSettings.contactLink.href} onClick={() => setMenuOpen(false)}>{siteSettings.contactLink.label}</Link>
      </div>
    </>
  )
}
