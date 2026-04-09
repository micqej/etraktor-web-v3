'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/', label: 'Domov' },
    { href: '/palety', label: 'Transportné palety' },
    { href: '/zariadenia', label: 'Jednoúčelové zariadenia' },
    { href: '/vyroba', label: 'Výroba' },
    { href: '/produkty', label: 'eTRAKTOR' },
  ]

  return (
    <>
      <nav id="mainNav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img
              className="nav-logo-img"
              alt="etraktor.sk"
              src="/logo.png"
              style={{ height: 46, width: 46, objectFit: 'contain', borderRadius: '50%', border: '2px solid var(--border)' }}
            />
            <span className="nav-logo-sk">etraktor.sk</span>
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
            <Link href="/kontakt" className={`nav-cta${pathname === '/kontakt' ? ' active' : ''}`}>
              Kontakt
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
        <Link href="/kontakt" onClick={() => setMenuOpen(false)}>Kontakt</Link>
      </div>
    </>
  )
}
