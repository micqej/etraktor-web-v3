'use client'
import Link from 'next/link'
import {createDataAttribute} from 'next-sanity'
import {useLiveQuery} from 'next-sanity/preview'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import type {SiteSettingsContent} from '@/sanity/lib/content'
import {mapLiveSiteSettings} from '@/sanity/lib/liveMappers'
import {siteSettingsQuery} from '@/sanity/lib/queries'

type NavProps = {
  siteSettings: SiteSettingsContent
}

export default function Nav({siteSettings}: NavProps) {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [liveData] = useLiveQuery<any>(siteSettings, siteSettingsQuery)
  const resolvedSettings = mapLiveSiteSettings(siteSettings, liveData)
  const settingsAttr = createDataAttribute({id: 'siteSettings', type: 'siteSettings', path: []})
  const navItemPath = (index: number) => {
    const key = resolvedSettings.navItems[index]?._key
    return key ? `navItems[_key=="${key}"]` : `navItems[${index}]`
  }

  return (
    <>
      <nav id="mainNav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo" data-sanity={settingsAttr('logo')}>
            <img
              className="nav-logo-img"
              alt={resolvedSettings.siteTitle}
              src={resolvedSettings.logoSrc}
              style={{ height: 46, width: 46, objectFit: 'contain', borderRadius: '50%', border: '2px solid var(--border)' }}
            />
            <span className="nav-logo-sk" data-sanity={settingsAttr('siteTitle')}>{resolvedSettings.siteTitle}</span>
          </Link>
          <div className="nav-links">
            {resolvedSettings.navItems.map((l, index) => (
              <Link
                key={l.href}
                href={l.href}
                className={pathname === l.href ? 'active' : ''}
                data-sanity={settingsAttr(`${navItemPath(index)}.label`)}
              >
                {l.label}
              </Link>
            ))}
            <Link href="/kontakt" className={`nav-cta${pathname === '/kontakt' ? ' active' : ''}`} data-sanity={settingsAttr('contactLabel')}>
              {resolvedSettings.contactLabel}
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
        {resolvedSettings.navItems.map((l, index) => (
          <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} data-sanity={settingsAttr(`${navItemPath(index)}.label`)}>
            {l.label}
          </Link>
        ))}
        <Link href="/kontakt" onClick={() => setMenuOpen(false)} data-sanity={settingsAttr('contactLabel')}>{resolvedSettings.contactLabel}</Link>
      </div>
    </>
  )
}
