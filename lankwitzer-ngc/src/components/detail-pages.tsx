import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Calculator } from "@/components/calculator";
import {
  contactDetails,
  getLocalePath,
  productCategories,
  siteCopy,
  usefulItems,
  type Locale,
  type ProductCategory,
  type UtilityItem,
  type ProductSection,
  type ContentTable,
} from "@/lib/lankwitzer-data";

function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-media">
        <Image src={image} alt={title} fill priority sizes="100vw" />
      </div>
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function ProductListingPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <>
      <PageHero
        eyebrow={copy.productsTitle}
        title={copy.productsHeading}
        text={copy.productsText}
        image="/site-assets/Produkty-2.jpg"
      />
      <section className="page-section">
        <div className="shell">
          <div className="card-grid compact">
            {productCategories.map((item) => (
              <Link key={item.slug} href={getLocalePath(locale, `/produkty/${item.slug}`)} className="info-tile colorful-tile">
                <strong>{item.title[locale]}</strong>
                <p>{item.summary[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function ProductDetailPage({
  item,
  locale = "sk",
}: {
  item: ProductCategory;
  locale?: Locale;
}) {
  const copy = siteCopy[locale];

  return (
    <>
      <PageHero
        eyebrow={item.kicker[locale]}
        title={item.title[locale]}
        text={item.summary[locale]}
        image={item.bannerImage}
      />
      <section className="page-section">
        <div className="shell detail-grid">
          <div className="detail-main">
            <div className="two-column-grid">
              <div className="content-panel">
                <strong>{copy.detailUseCases}</strong>
                <p>{item.intro[locale]}</p>
                {item.sections && item.sections.length > 0 ? (
                  item.sections.map((section: ProductSection) => (
                    <div key={section.title[locale]} className="detail-section">
                      <strong className="detail-section-title">{section.title[locale]}</strong>
                      <ul className="detail-list">
                        {section.bullets[locale].map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </div>
                  ))
                ) : (
                  <ul className="detail-list">
                    {item.bullets[locale].map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="content-panel">
                <strong>{copy.detailBenefits}</strong>
                <div className="chip-grid">
                  {item.highlights[locale].map((highlight) => (
                    <span key={highlight} className="chip">
                      {highlight}
                    </span>
                  ))}
                </div>
                <a href={`mailto:${contactDetails.email}`} className="button button-primary">
                  {copy.detailCTA}
                </a>
              </div>
            </div>
          </div>

          <aside className="detail-sidebar">
            <div className="content-panel">
              <strong>{locale === "sk" ? "Ďalšie produktové kategórie" : "Other product categories"}</strong>
              <div className="stack-list">
                {productCategories
                  .filter((entry) => entry.slug !== item.slug)
                  .map((entry) => (
                    <Link key={entry.slug} href={getLocalePath(locale, `/produkty/${entry.slug}`)} className="line-card">
                      <strong>{entry.title[locale]}</strong>
                      <p>{entry.summary[locale]}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function UsefulListingPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <>
      <PageHero
        eyebrow={copy.usefulTitle}
        title={copy.usefulHeading}
        text={copy.usefulText}
        image="/site-assets/Automotive-main-2-900x601.jpg"
      />
      <section className="page-section">
        <div className="shell">
          <div className="card-grid compact">
            {usefulItems.map((item) => (
              <Link key={item.slug} href={getLocalePath(locale, `/uzitocne/${item.slug}`)} className="info-tile colorful-tile">
                <strong>{item.title[locale]}</strong>
                <p>{item.summary[locale]}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function UsefulDetailPage({
  item,
  locale = "sk",
}: {
  item: UtilityItem;
  locale?: Locale;
}) {
  const copy = siteCopy[locale];

  return (
    <>
      <PageHero
        eyebrow={copy.usefulTitle}
        title={item.title[locale]}
        text={item.summary[locale]}
        image={item.bannerImage}
      />
      <section className="page-section">
        <div className="shell detail-grid">
          <div className="detail-main">
            {item.contentImage ? (
              <div className="content-panel image-panel">
                <a href={item.contentImage} target="_blank" rel="noreferrer" className="detail-image-zoom-link" title={locale === "sk" ? "Zobraziť vo väčšom rozlíšení" : "View in full resolution"}>
                  <div className={`detail-image${item.contentImageContain ? " detail-image--contain" : ""}`}>
                    <Image src={item.contentImage} alt={item.title[locale]} fill sizes="(max-width: 1000px) 100vw, 60vw" />
                  </div>
                  <span className="detail-image-zoom-hint">{locale === "sk" ? "🔍 Klikni pre zväčšenie" : "🔍 Click to enlarge"}</span>
                </a>
              </div>
            ) : null}
            <div className="content-panel">
              <strong>{copy.utilityBodyTitle}</strong>
              <p>{item.intro[locale]}</p>
              {item.body[locale].length > 0 ? (
                <ul className="detail-list">
                  {item.body[locale].map((paragraph) => (
                    <li key={paragraph}>{paragraph}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            {item.highlights ? (
              <div className="content-panel">
                <strong>{locale === "sk" ? "Stupne lesku pri 60° ISO 2813" : "Gloss levels at 60° ISO 2813"}</strong>
                <div className="chip-grid" style={{ marginTop: "1rem" }}>
                  {item.highlights[locale].map((h) => (
                    <span key={h} className="chip">{h}</span>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="detail-sidebar">
            <div className="content-panel">
              <strong>{locale === "sk" ? "Ďalšie užitočné sekcie" : "Other useful sections"}</strong>
              <div className="stack-list">
                {usefulItems
                  .filter((entry) => entry.slug !== item.slug)
                  .map((entry) => (
                    <Link key={entry.slug} href={getLocalePath(locale, `/uzitocne/${entry.slug}`)} className="line-card">
                      <strong>{entry.title[locale]}</strong>
                      <p>{entry.summary[locale]}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </aside>
        </div>

        {item.tables && item.tables.length > 0 ? (
          <div className="shell iso-tables-section">
            {item.tables.map((table: ContentTable) => (
              <div key={table.title[locale]} className="content-panel iso-table-block">
                <strong>{table.title[locale]}</strong>
                <div className="iso-table-wrap">
                  <table className="iso-table">
                    <thead>
                      <tr>
                        {table.headers.map((h) => <th key={h}>{h}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {table.rows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci} style={{ whiteSpace: ci === 0 ? "pre-line" : "normal" }}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </>
  );
}

export function CalculatorPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];
  const calculatorItem = usefulItems.find((item) => item.slug === "kalkulacia-spotrieb");

  return (
    <>
      <PageHero
        eyebrow={copy.usefulTitle}
        title={copy.calculatorHeading}
        text={copy.calculatorText}
        image="/site-assets/Automotive-main-2-900x601.jpg"
      />
      <section className="page-section">
        <div className="shell">
          {calculatorItem ? (
            <div className="content-panel section-intro">
              {calculatorItem.body[locale].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
          <Calculator locale={locale} />
        </div>
      </section>
    </>
  );
}

export function ContactSectionPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <>
      <PageHero
        eyebrow={copy.contactTitle}
        title={copy.contactHeading}
        text={copy.contactText}
        image="/site-assets/o-nas-2.jpg"
      />
      <section className="page-section">
        <div className="shell contact-page-grid">
          <div className="detail-main">
            <div className="content-panel contact-info-table-wrap">
              <table className="contact-info-table">
                <tbody>
                  <tr>
                    <th>{locale === "sk" ? "Firma" : "Company"}</th>
                    <td>{contactDetails.company}</td>
                  </tr>
                  <tr>
                    <th>{locale === "sk" ? "Adresa" : "Address"}</th>
                    <td>{contactDetails.address}</td>
                  </tr>
                  <tr>
                    <th>IČO / IČ DPH</th>
                    <td>{contactDetails.ico} / {contactDetails.icDph}</td>
                  </tr>
                  <tr>
                    <th>E-mail</th>
                    <td><a href={`mailto:${contactDetails.email}`} className="contact-link">{contactDetails.email}</a></td>
                  </tr>
                  <tr>
                    <th>{locale === "sk" ? "Telefón" : "Phone"}</th>
                    <td>
                      <a href={`tel:${contactDetails.phones[0].replace(/\s/g, "")}`} className="contact-link">{contactDetails.phones[0]}</a>
                      {", "}
                      <a href={`tel:${contactDetails.phones[1].replace(/\s/g, "")}`} className="contact-link">{contactDetails.phones[1]}</a>
                      {", "}
                      <a href={`tel:${contactDetails.phones[2].replace(/-/g, "")}`} className="contact-link">{contactDetails.phones[2]}</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ContactForm locale={locale} />
        </div>
      </section>
    </>
  );
}
