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
      <div className="page-hero-accent accent-blue" />
      <div className="page-hero-accent accent-orange" />
      <div className="page-hero-accent accent-red" />
      <div className="page-hero-accent accent-yellow" />
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
            <div className="content-panel image-panel">
              <div className="detail-image">
                <Image src={item.image} alt={item.title[locale]} fill sizes="(max-width: 1000px) 100vw, 60vw" />
              </div>
            </div>

            <div className="two-column-grid">
              <div className="content-panel">
                <strong>{copy.detailUseCases}</strong>
                <p>{item.intro[locale]}</p>
                <ul className="detail-list">
                  {item.bullets[locale].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
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
            <div className="content-panel">
              <strong>{copy.utilityBodyTitle}</strong>
              <p>{item.intro[locale]}</p>
              <ul className="detail-list">
                {item.body[locale].map((paragraph) => (
                  <li key={paragraph}>{paragraph}</li>
                ))}
              </ul>
            </div>
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
      </section>
    </>
  );
}
