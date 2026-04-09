import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img
            src="/logo.png"
            alt="logo"
            style={{ height: 42, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)' }}
          />
          <span>etraktor.sk</span>
        </div>
        <div className="footer-links">
          <Link href="/">Domov</Link>
          <Link href="/palety">Palety</Link>
          <Link href="/zariadenia">Zariadenia</Link>
          <Link href="/vyroba">Výroba</Link>
          <Link href="/produkty">eTRAKTOR</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div className="footer-copy">
          © 2025 etraktor.sk &bull; Duklianska 1376/17, 08501 Bardejov &nbsp;|&nbsp; Web vytvorilo{' '}
          <a href="https://monetico.sk" target="_blank" rel="noopener">Monetico.sk</a>
        </div>
      </div>
    </footer>
  )
}
