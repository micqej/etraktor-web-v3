import Link from "next/link";

import { contactDetails, getLocalePath, productCategories, siteCopy, usefulItems, type Locale } from "@/lib/lankwitzer-data";

export function SiteFooter({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <strong>{contactDetails.company}</strong>
          <p>{copy.footerTagline}</p>
        </div>

        <div className="footer-column">
          <strong>{copy.footerProducts}</strong>
          {productCategories.map((item) => (
            <Link key={item.slug} href={getLocalePath(locale, `/produkty/${item.slug}`)}>
              {item.title[locale]}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <strong>{copy.footerUseful}</strong>
          {usefulItems.map((item) => (
            <Link key={item.slug} href={getLocalePath(locale, `/uzitocne/${item.slug}`)}>
              {item.title[locale]}
            </Link>
          ))}
        </div>

        <div className="footer-column">
          <strong>{copy.footerContact}</strong>
          <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
          {contactDetails.phones.map((phone) => (
            <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`}>
              {phone}
            </a>
          ))}
          <span>{contactDetails.address}</span>
        </div>
      </div>
    </footer>
  );
}
