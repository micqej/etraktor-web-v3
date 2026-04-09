import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Transportné palety – Etraktor, s.r.o.',
}

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth={2.5} strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function PaletyPage() {
  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">Logistika &amp; Automobilový priemysel</span>
          <h1>Transportné palety</h1>
          <p>Transportné palety sú základným kameňom modernej logistiky a skladovania nie len v automotíve. Pevná a unifikovaná základňa pre efektívny presun tovaru vo veľkom množstve.</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="tag">Nerobotické palety</span>
              <h2 className="section-title">Nerobotické palety</h2>
              <p>Transportné palety sú základným kameňom modernej logistiky a skladovania nie len v automotíve. Ich hlavným účelom je vytvoriť pevnú a unifikovanú základňu, ktorá umožňuje efektívny presun tovaru vo veľkom množstve bez ohľadu na to či je materiál zakladaný ručne alebo robotom.</p>
              <br />
              <Link href="/kontakt" className="btn-primary">Mám záujem</Link>
            </div>
            <div className="img-card">
              <img
                src="/images/palety_f149ab5c.jpeg"
                alt="Nerobotické palety"
                style={{ width: '100%', height: 260, objectFit: 'contain', padding: '1rem', background: 'var(--bg)' }}
              />
              <div className="img-card-body">
                <div className="img-card-title">Nerobotické transportné palety</div>
                <div className="img-card-desc">Kliknite pre zväčšenie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg">
        <div className="container">
          <div className="two-col">
            <div className="img-card">
              <img
                src="/images/palety_1c58982b.jpeg"
                alt="Robotické palety"
                style={{ width: '100%', height: 260, objectFit: 'contain', padding: '1rem', background: 'var(--bg)' }}
              />
              <div className="img-card-body">
                <div className="img-card-title">Robotické palety a zásobníky</div>
                <div className="img-card-desc">Kliknite pre zväčšenie</div>
              </div>
            </div>
            <div>
              <span className="tag">Robotické riešenia</span>
              <h2 className="section-title">Robotické palety &amp; zásobníky</h2>
              <p>Robotické palety a zásobníky sú navrhnuté pre plne automatizované výrobné linky. Zaručujú presnú polohu dielov pre robotické uchopovanie a presun.</p>
              <br />
              <div className="check-list">
                {[
                  'Robotické palety pre automobilový priemysel',
                  'Robotické zásobníky s presnou polohou dielov',
                  'Vlastná výroba pod jednou strechou',
                  'Konštrukčný vývoj, výroba, montáž, dokumentácia',
                ].map((item, i) => (
                  <div className="check-item" key={i}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <br />
              <Link href="/kontakt" className="btn-primary">Dopytovať riešenie</Link>
            </div>
          </div>
        </div>
      </section>

      <RefsSection />

      <section className="cta-banner">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2>Potrebujete transportné palety?</h2>
              <p>Navrhneme riešenie presne podľa Vašich požiadaviek.</p>
            </div>
            <Link href="/kontakt" className="btn-primary" style={{ background: 'white', color: 'var(--green-dark)' }}>
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
