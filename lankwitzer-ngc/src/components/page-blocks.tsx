import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import {
  aboutBullets,
  contactDetails,
  getLocalePath,
  productCategories,
  segments,
  siteCopy,
  usefulItems,
  type Locale,
} from "@/lib/lankwitzer-data";

export function HomePageBlocks({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <>
      <section className="page-section" id="segmenty">
        <div className="shell">
          <div className="section-heading">
            <span>{copy.segmentsTitle}</span>
            <h2>{copy.segmentsHeading}</h2>
            <p>{copy.segmentsText}</p>
          </div>

          <div className="segment-grid">
            {segments.map((segment) => (
              <article key={segment.slug} className="segment-card">
                <div className="segment-card-media">
                  <Image src={segment.image} alt={segment.title[locale]} fill sizes="(max-width: 860px) 100vw, 33vw" />
                </div>
                <div className="segment-card-overlay" />
                <div className="segment-card-body">
                  <h3>{segment.title[locale]}</h3>
                  <p>{segment.text[locale]}</p>
                  <a href={segment.pdf} target="_blank" rel="noreferrer" className="segment-link">
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

          <div className="product-strip">
            {productCategories.map((item) => (
              <Link key={item.slug} href={getLocalePath(locale, `/produkty/${item.slug}`)} className="product-strip-card">
                <div className="product-strip-bg" />
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
          </div>

          <div className="useful-showcase">
            {usefulItems.map((item, index) => (
              <Link
                key={item.slug}
                href={getLocalePath(locale, `/uzitocne/${item.slug}`)}
                className={`useful-card useful-card-${(index % 4) + 1}`}
              >
                <div className="useful-card-pattern" />
                <strong>{item.title[locale]}</strong>
                <p>{item.summary[locale]}</p>
              </Link>
            ))}
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
      <div className="shell about-slab">
        <div className="about-copy">
          <span>{copy.aboutTitle}</span>
          <h2>{copy.aboutHeading}</h2>
          <p>{copy.aboutText}</p>
        </div>

        <div className="about-list">
          {aboutBullets[locale].map((item) => (
            <div key={item} className="about-list-item">
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
      <div className="shell contact-home-wrap">
        <div className="contact-home-info">
          <div className="section-heading">
            <span>{copy.contactTitle}</span>
            <h2>{copy.contactHeading}</h2>
            <p>{copy.contactText}</p>
          </div>

          <div className="contact-rail">
            <div className="contact-panel">
              <strong>{contactDetails.company}</strong>
              <p>{contactDetails.address}</p>
            </div>
            <div className="contact-panel">
              <strong><a href={`mailto:${contactDetails.email}`} className="contact-link">{contactDetails.email}</a></strong>
              <p>
                <a href={`tel:${contactDetails.phones[0].replace(/\s/g, "")}`} className="contact-link">{contactDetails.phones[0]}</a>
                {", "}
                <a href={`tel:${contactDetails.phones[1].replace(/\s/g, "")}`} className="contact-link">{contactDetails.phones[1]}</a>
              </p>
            </div>
            <div className="contact-panel">
              <strong>IČO {contactDetails.ico}</strong>
              <p>IČ DPH: {contactDetails.icDph}</p>
            </div>
          </div>
        </div>

        <div className="contact-home-form">
          <ContactForm locale={locale} />
        </div>
      </div>
    </section>
  );
}
