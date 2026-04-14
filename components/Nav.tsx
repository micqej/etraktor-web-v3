'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import type {SiteSettingsContent} from '@/sanity/lib/content'

type NavProps = {
  siteSettings: SiteSettingsContent
}

export default function Nav({siteSettings}: NavProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav id="mainNav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img
              className="nav-logo-img"
              alt={siteSettings.siteTitle}
              src={siteSettings.logoSrc}
              style={{ height: 46, width: 46, objectFit: 'contain', borderRadius: '50%', border: '2px solid var(--border)' }}
            />
            <span className="nav-logo-sk">{siteSettings.siteTitle}</span>
          </Link>
          <div className="nav-links">
            {siteSettings.navItems.map((l, index) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/kontakt" className={`nav-cta${pathname === '/kontakt' ? ' active' : ''}`}>
              {siteSettings.contactLabel}
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
        {siteSettings.navItems.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/kontakt" onClick={() => setMenuOpen(false)}>{siteSettings.contactLabel}</Link>
      </div>
    </>
  )
}
