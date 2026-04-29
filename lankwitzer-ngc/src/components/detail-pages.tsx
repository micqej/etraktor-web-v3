import Image from "next/image";
import Link from "next/link";

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
import { Calculator } from "@/components/calculator";

export function ProductListingPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <section className="page-section">
      <div className="shell">
        <div className="section-heading">
          <span>{copy.productsTitle}</span>
          <h1>{copy.productsHeading}</h1>
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
    <section className="page-section">
      <div className="shell detail-grid">
        <div className="detail-main">
          <div className="section-heading">
            <span>{item.kicker[locale]}</span>
            <h1>{item.title[locale]}</h1>
            <p>{item.intro[locale]}</p>
          </div>

          <div className="content-panel">
            <div className="detail-image">
              <Image src={item.image} alt={item.title[locale]} fill sizes="(max-width: 1000px) 100vw, 60vw" />
            </div>
          </div>

          <div className="two-column-grid">
            <div className="content-panel">
              <strong>{copy.detailUseCases}</strong>
              <p>{item.summary[locale]}</p>
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
  );
}

export function UsefulListingPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <section className="page-section">
      <div className="shell">
        <div className="section-heading">
          <span>{copy.usefulTitle}</span>
          <h1>{copy.usefulHeading}</h1>
          <p>{copy.usefulText}</p>
        </div>
        <div className="card-grid compact">
          {usefulItems.map((item) => (
            <Link key={item.slug} href={getLocalePath(locale, `/uzitocne/${item.slug}`)} className="info-tile">
              <strong>{item.title[locale]}</strong>
              <p>{item.summary[locale]}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
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
    <section className="page-section">
      <div className="shell detail-grid">
        <div className="detail-main">
          <div className="section-heading">
            <span>{copy.usefulTitle}</span>
            <h1>{item.title[locale]}</h1>
            <p>{item.intro[locale]}</p>
          </div>
          <div className="content-panel">
            <strong>{copy.utilityBodyTitle}</strong>
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
  );
}

export function CalculatorPage({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];
  const calculatorItem = usefulItems.find((item) => item.slug === "kalkulacia-spotrieb");

  return (
    <section className="page-section">
      <div className="shell">
        <div className="section-heading">
          <span>{copy.usefulTitle}</span>
          <h1>{copy.calculatorHeading}</h1>
          <p>{copy.calculatorText}</p>
        </div>
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
  );
}
