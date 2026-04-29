"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { getLocalePath, productCategories, siteCopy, usefulItems, type Locale } from "@/lib/lankwitzer-data";

function Dropdown({
  label,
  items,
  basePath,
  locale,
}: {
  label: string;
  items: { title: { sk: string; en: string }; slug: string }[];
  basePath: string;
  locale: Locale;
}) {
  return (
    <details className="nav-dropdown">
      <summary>{label}</summary>
      <div className="nav-dropdown-menu">
        {items.map((item) => (
          <Link key={item.slug} href={getLocalePath(locale, `${basePath}/${item.slug}`)}>
            {item.title[locale]}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "sk";
  const copy = siteCopy[locale];
  const switchHref = locale === "sk" ? "/en" : "/";

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href={copy.homeHref} className="brand-link" aria-label={copy.siteTitle}>
          <Image
            src="/site-assets/Lankwitzer_Logo-2017-RGB.png"
            alt="Lankwitzer logo"
            width={182}
            height={48}
            priority
          />
        </Link>

        <nav className="main-nav">
          <Link href={copy.homeHref}>{locale === "sk" ? "Domov" : "Home"}</Link>
          <Link href={copy.aboutHref}>{locale === "sk" ? "O nás" : "About"}</Link>
          <Dropdown
            label={locale === "sk" ? "Produkty" : "Products"}
            items={productCategories}
            basePath="/produkty"
            locale={locale}
          />
          <Dropdown
            label={locale === "sk" ? "Užitočné" : "Useful"}
            items={usefulItems}
            basePath="/uzitocne"
            locale={locale}
          />
          <Link href={copy.contactHref}>{locale === "sk" ? "Kontakt" : "Contact"}</Link>
        </nav>

        <Link href={switchHref} className="lang-badge">
          {copy.langSwitch}
        </Link>
      </div>
    </header>
  );
}
