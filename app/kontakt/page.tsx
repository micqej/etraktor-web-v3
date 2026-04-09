'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import RefsSection from '@/components/RefsSection'
import { useState } from 'react'

export default function KontaktPage() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <Nav />

      <div className="page-hero">
        <div className="container">
          <span className="tag">Spojme sa</span>
          <h1>Kontaktujte nás</h1>
          <p>Ozvite sa nám – radi preberieme Vaše požiadavky a navrhneme riešenie.</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title">Kontaktné údaje</h2>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <div className="ci-label">Kontaktná osoba</div>
                  <div className="ci-value">Ing. Rastislav Tribula, PhD</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div>
                  <div className="ci-label">Sídlo</div>
                  <div className="ci-value">Duklianska 1376/17<br />08501 Bardejov<br />Slovenská republika</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="ci-label">Telefón</div>
                  <div className="ci-value"><a href="tel:+421907933648">+421 907 933 648</a></div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="ci-label">Email</div>
                  <div className="ci-value"><a href="mailto:info@etraktor.sk">info@etraktor.sk</a></div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <div className="ci-label">Web</div>
                  <div className="ci-value"><a href="https://www.etraktor.sk" target="_blank">www.etraktor.sk</a></div>
                </div>
              </div>

              <div style={{ background: 'var(--bg)', borderRadius: 12, padding: '1.5rem', border: '1px solid var(--border)', marginTop: '0.5rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-muted)', marginBottom: '0.75rem' }}>Firemné údaje</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>IČO</span><strong>52134539</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>DIČ</span><strong>2120911815</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'var(--text-muted)' }}>Zápis</span><strong>2019</strong></div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <h3 style={{ fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--green-dark)' }}>
                Odoslať správu
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Meno a priezvisko</label>
                  <input type="text" placeholder="Vaše meno" />
                </div>
                <div className="form-group">
                  <label>Telefón</label>
                  <input type="tel" placeholder="+421 ..." />
                </div>
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="vas@email.sk" />
              </div>
              <div className="form-group">
                <label>Oblasť záujmu</label>
                <select>
                  <option value="">Vyberte oblasť...</option>
                  <option>eTRAKTOR – ET 2000</option>
                  <option>eTRAKTOR – ET 3000</option>
                  <option>Príslušenstvo</option>
                  <option>Transportné palety</option>
                  <option>Jednoúčelové zariadenia</option>
                  <option>Výroba / CNC</option>
                  <option>Iné</option>
                </select>
              </div>
              <div className="form-group">
                <label>Správa</label>
                <textarea placeholder="Popíšte Vašu požiadavku..." />
              </div>
              <button
                className="form-submit"
                onClick={() => setSent(true)}
                disabled={sent}
                style={sent ? { background: '#1b5e20' } : {}}
              >
                {sent ? 'Odoslané – ozveme sa Vám!' : 'Odoslať dopyt'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <RefsSection />
      <Footer />
    </>
  )
}
