import Image from "next/image";
import Link from "next/link";

import { contactDetails, getLocalePath, productCategories, siteCopy, usefulItems, type Locale } from "@/lib/lankwitzer-data";

export function SiteFooter({ locale = "sk" }: { locale?: Locale }) {
  const copy = siteCopy[locale];

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-wrap">
            <Image src="/site-assets/Lankwitzer_Logo-2017-RGB.png" alt="Lankwitzer logo" width={184} height={48} />
          </div>
          <p>{copy.footerTagline}</p>
        </div>

        <div className="footer-column">
          <strong>{copy.footerProducts}</strong>
          <div className="footer-link-list">
            {productCategories.map((item) => (
              <Link key={item.slug} href={getLocalePath(locale, `/produkty/${item.slug}`)}>
                {item.title[locale]}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <strong>{copy.footerUseful}</strong>
          <div className="footer-link-list">
            {usefulItems.map((item) => (
              <Link key={item.slug} href={getLocalePath(locale, `/uzitocne/${item.slug}`)}>
                {item.title[locale]}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <strong>{copy.footerContact}</strong>
          <div className="footer-link-list">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            {contactDetails.phones.map((phone) => (
              <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`}>
                {phone}
              </a>
            ))}
            <span>{contactDetails.address}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
