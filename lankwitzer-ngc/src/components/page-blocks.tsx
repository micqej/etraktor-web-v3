import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import {
  aboutBullets,
  contactDetails,
  getLocalePath,
  productCategories,
  removedItems,
  segments,
  siteCopy,
  usefulItems,
  type Locale,
} from "@/lib/lankwitzer-data";

export function HomePageBlocks({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <>
      <section className="hero-dark" id="top">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{copy.heroEyebrow}</p>
            <h1>{copy.heroTitle}</h1>
            <p className="hero-lead">{copy.heroLead}</p>
            <p className="hero-body">{copy.heroBody}</p>
            <div className="hero-actions">
              <Link href={copy.productsHref} className="button button-primary">
                {copy.heroPrimary}
              </Link>
              <Link href={copy.calculatorHref} className="button button-secondary">
                {copy.heroSecondary}
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-frame">
              <Image
                src="/site-assets/Produkty-2.jpg"
                alt="Lankwitzer products"
                fill
                sizes="(max-width: 1000px) 100vw, 45vw"
              />
            </div>
            <div className="hero-panel">
              <strong>{copy.heroPanelTitle}</strong>
              <span>{copy.heroPanelText}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section" id="segmenty">
        <div className="shell">
          <div className="section-heading">
            <span>{copy.segmentsTitle}</span>
            <h2>{copy.segmentsHeading}</h2>
            <p>{copy.segmentsText}</p>
          </div>
          <div className="card-grid">
            {segments.map((segment) => (
              <article key={segment.slug} className="feature-card">
                <div className="media-wrap">
                  <Image src={segment.image} alt={segment.title[locale]} fill sizes="(max-width: 860px) 100vw, 33vw" />
                </div>
                <div className="card-body">
                  <h3>{segment.title[locale]}</h3>
                  <p>{segment.text[locale]}</p>
                  <a href={segment.pdf} target="_blank" rel="noreferrer" className="text-link">
                    PDF
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section section-alt" id="produkty">
        <div className="shell">
          <div className="section-heading">
            <span>{copy.productsTitle}</span>
            <h2>{copy.productsHeading}</h2>
            <p>{copy.productsText}</p>
          </div>
          <div className="card-grid compact">
            {productCategories.map((item) => (
              <Link key={item.slug} href={getLocalePath(locale, `/produkty/${item.slug}`)} className="info-tile">
                <strong>{item.title[locale]}</strong>
                <p>{item.summary[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="uzitocne">
        <div className="shell">
          <div className="section-heading">
            <span>{copy.usefulTitle}</span>
            <h2>{copy.usefulHeading}</h2>
            <p>{copy.usefulText}</p>
          </div>
          <div className="two-column-grid">
            <div className="stack-list">
              {usefulItems.map((item) => (
                <Link key={item.slug} href={getLocalePath(locale, `/uzitocne/${item.slug}`)} className="line-card">
                  <strong>{item.title[locale]}</strong>
                  <p>{item.summary[locale]}</p>
                </Link>
              ))}
            </div>
            <div className="stack-list muted">
              {removedItems.map((item) => (
                <div key={item.slug} className="line-card line-card-off">
                  <strong>{item.title[locale]}</strong>
                  <p>{item.summary[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AboutBlock locale={locale} />
      <ContactBlock locale={locale} />
    </>
  );
}

export function AboutBlock({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <section className="page-section section-alt" id="o-nas">
      <div className="shell about-grid">
        <div className="section-heading left">
          <span>{copy.aboutTitle}</span>
          <h1>{copy.aboutHeading}</h1>
          <p>{copy.aboutText}</p>
        </div>
        <div className="bullet-panel">
          {aboutBullets[locale].map((item) => (
            <div key={item} className="bullet-row">
              <i />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBlock({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <section className="page-section" id="kontakt">
      <div className="shell">
        <div className="section-heading">
          <span>{copy.contactTitle}</span>
          <h1>{copy.contactHeading}</h1>
          <p>{copy.contactText}</p>
        </div>
        <div className="contact-page-grid">
          <div className="detail-main">
            <div className="contact-grid">
              <div className="contact-panel">
                <strong>{contactDetails.company}</strong>
                <p>{contactDetails.address}</p>
              </div>
              <div className="contact-panel">
                <strong>{contactDetails.email}</strong>
                <p>{contactDetails.phones.join(", ")}</p>
              </div>
              <div className="contact-panel">
                <strong>IČO {contactDetails.ico}</strong>
                <p>IČ DPH: {contactDetails.icDph}</p>
              </div>
              <div className="contact-panel">
                <strong>{locale === "sk" ? "Telefón a fax" : "Phone and fax"}</strong>
                <p>{contactDetails.phones[2]} | fax: {contactDetails.fax}</p>
              </div>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
        <div className="contact-cta">
          <div>
            <strong>{copy.contactCtaTitle}</strong>
            <p>{copy.contactCtaText}</p>
          </div>
          <a href={`mailto:${contactDetails.email}`} className="button button-primary">
            {copy.contactCtaButton}
          </a>
        </div>
      </div>
    </section>
  );
}
