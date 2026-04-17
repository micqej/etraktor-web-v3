'use client'

import {useState} from 'react'
import {createDataAttribute} from 'next-sanity'

import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import RefsSection from '@/components/RefsSection'
import type {ContactPageContent, SiteSettingsContent} from '@/sanity/lib/content'

type ContactPageProps = {
  page: ContactPageContent
  data?: ContactPageContent
  siteSettings: SiteSettingsContent
  documentId: 'contactPage'
}

const blankForm = {
  name: '',
  phone: '',
  email: '',
  topic: '',
  message: '',
}

export default function ContactPageContent({page, data, siteSettings, documentId}: ContactPageProps) {
  const resolvedPage = data ?? page
  const [form, setForm] = useState(blankForm)
  const pageAttr = createDataAttribute({id: documentId, type: documentId, path: []})

  const onChange = (field: keyof typeof blankForm, value: string) => {
    setForm((current) => ({...current, [field]: value}))
  }

  const handleSubmit = () => {
    const subject = form.topic ? `Dopyt: ${form.topic}` : 'Dopyt z webu etraktor.sk'
    const body = [
      `Meno: ${form.name || '-'}`,
      `Telefon: ${form.phone || '-'}`,
      `Email: ${form.email || '-'}`,
      `Oblast zaujmu: ${form.topic || '-'}`,
      '',
      form.message || '',
    ].join('\n')

    window.location.href = `mailto:${resolvedPage.emailValue}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <>
      <Nav siteSettings={siteSettings} />

      <div className="page-hero">
        <div className="container">
          <span className="tag" data-sanity={pageAttr('heroTag')}>{resolvedPage.heroTag}</span>
          <h1 data-sanity={pageAttr('heroTitle')}>{resolvedPage.heroTitle}</h1>
          <p data-sanity={pageAttr('heroText')}>{resolvedPage.heroText}</p>
        </div>
      </div>

      <section className="white">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="section-title" data-sanity={pageAttr('detailsTitle')}>{resolvedPage.detailsTitle}</h2>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </div>
                <div>
                  <div className="ci-label" data-sanity={pageAttr('contactPersonLabel')}>{resolvedPage.contactPersonLabel}</div>
                  <div className="ci-value" data-sanity={pageAttr('contactPersonValue')}>{resolvedPage.contactPersonValue}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                </div>
                <div>
                  <div className="ci-label" data-sanity={pageAttr('addressLabel')}>{resolvedPage.addressLabel}</div>
                  <div className="ci-value" style={{whiteSpace: 'pre-line'}} data-sanity={pageAttr('addressValue')}>{resolvedPage.addressValue}</div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div>
                  <div className="ci-label" data-sanity={pageAttr('phoneLabel')}>{resolvedPage.phoneLabel}</div>
                  <div className="ci-value"><a href={`tel:${resolvedPage.phoneValue.replace(/\s+/g, '')}`} data-sanity={pageAttr('phoneValue')}>{resolvedPage.phoneValue}</a></div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <div className="ci-label" data-sanity={pageAttr('emailLabel')}>{resolvedPage.emailLabel}</div>
                  <div className="ci-value"><a href={`mailto:${resolvedPage.emailValue}`} data-sanity={pageAttr('emailValue')}>{resolvedPage.emailValue}</a></div>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="ci-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </div>
                <div>
                  <div className="ci-label" data-sanity={pageAttr('webLabel')}>{resolvedPage.webLabel}</div>
                  <div className="ci-value"><a href={resolvedPage.webValue} target="_blank" rel="noopener noreferrer" data-sanity={pageAttr('webValue')}>{resolvedPage.webValue}</a></div>
                </div>
              </div>

              <div style={{background: 'var(--bg)', borderRadius: 12, padding: '1.5rem', border: '1px solid var(--border)', marginTop: '0.5rem'}}>
                <div style={{fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-muted)', marginBottom: '0.75rem'}}>
                  <span data-sanity={pageAttr('companyDataTitle')}>{resolvedPage.companyDataTitle}</span>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}><span style={{color: 'var(--text-muted)'}}>IČO</span><strong data-sanity={pageAttr('companyIco')}>{resolvedPage.companyIco}</strong></div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}><span style={{color: 'var(--text-muted)'}}>DIČ</span><strong data-sanity={pageAttr('companyDic')}>{resolvedPage.companyDic}</strong></div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}><span style={{color: 'var(--text-muted)'}}>Zápis</span><strong data-sanity={pageAttr('companyYear')}>{resolvedPage.companyYear}</strong></div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <h3 style={{fontFamily: "'Barlow Condensed',sans-serif", fontSize: '1.5rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '1.5rem', color: 'var(--green-dark)'}}>
                <span data-sanity={pageAttr('formTitle')}>{resolvedPage.formTitle}</span>
              </h3>
              <div className="form-row">
                <div className="form-group">
                  <label data-sanity={pageAttr('formNameLabel')}>{resolvedPage.formNameLabel}</label>
                  <input type="text" placeholder="Vaše meno" value={form.name} onChange={(e) => onChange('name', e.target.value)} />
                </div>
                <div className="form-group">
                  <label data-sanity={pageAttr('formPhoneLabel')}>{resolvedPage.formPhoneLabel}</label>
                  <input type="tel" placeholder="+421 ..." value={form.phone} onChange={(e) => onChange('phone', e.target.value)} />
                </div>
              </div>
              <div className="form-group">
                <label data-sanity={pageAttr('formEmailLabel')}>{resolvedPage.formEmailLabel}</label>
                <input type="email" placeholder="vas@email.sk" value={form.email} onChange={(e) => onChange('email', e.target.value)} />
              </div>
              <div className="form-group">
                <label data-sanity={pageAttr('formTopicLabel')}>{resolvedPage.formTopicLabel}</label>
                <select value={form.topic} onChange={(e) => onChange('topic', e.target.value)}>
                  <option value="">Vyberte oblasť...</option>
                  {resolvedPage.inquiryOptions.map((option, index) => (
                    <option key={option} data-sanity={pageAttr(`inquiryOptions[${index}]`)}>{option}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label data-sanity={pageAttr('formMessageLabel')}>{resolvedPage.formMessageLabel}</label>
                <textarea placeholder="Popíšte Vašu požiadavku..." value={form.message} onChange={(e) => onChange('message', e.target.value)} />
              </div>
              <button className="form-submit" type="button" onClick={handleSubmit}>
                <span data-sanity={pageAttr('formSubmitLabel')}>{resolvedPage.formSubmitLabel}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <RefsSection siteSettings={siteSettings} />
      <Footer siteSettings={siteSettings} />
    </>
  )
}
