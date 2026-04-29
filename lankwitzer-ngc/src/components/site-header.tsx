"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { productCategories, siteCopy, usefulItems, type Locale } from "@/lib/lankwitzer-data";

function MenuColumn({
  title,
  items,
  basePath,
  locale,
  onNavigate,
}: {
  title: string;
  items: { title: { sk: string; en: string }; slug: string }[];
  basePath: string;
  locale: Locale;
  onNavigate: () => void;
}) {
  return (
    <div className="mega-column">
      <strong>{title}</strong>
      {items.map((item) => (
        <Link key={item.slug} href={`${basePath}/${item.slug}`} onClick={onNavigate}>
          {item.title[locale]}
        </Link>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "sk";
  const copy = siteCopy[locale];
  const [activeMenu, setActiveMenu] = useState<"products" | "useful" | null>(null);

  const nav = locale === "sk"
    ? {
        home: "/",
        about: "/o-nas",
        products: "/produkty",
        useful: "/uzitocne",
        contact: "/kontakt",
        switchHref: "/en",
        labels: {
          home: "Domov",
          about: "O nás",
          products: "Produkty",
          useful: "Užitočné",
          contact: "Kontakt",
        },
      }
    : {
        home: "/en",
        about: "/en/o-nas",
        products: "/en/produkty",
        useful: "/en/uzitocne",
        contact: "/en/kontakt",
        switchHref: "/",
        labels: {
          home: "Home",
          about: "About",
          products: "Products",
          useful: "Useful",
          contact: "Contact",
        },
      };

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href={nav.home} className="brand-link" aria-label={copy.siteTitle}>
          <Image
            src="/site-assets/Lankwitzer_Logo-2017-RGB.png"
            alt="Lankwitzer logo"
            width={194}
            height={52}
            priority
          />
        </Link>

        <nav className="main-nav">
          <Link href={nav.home}>{nav.labels.home}</Link>
          <Link href={nav.about}>{nav.labels.about}</Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveMenu("products")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link href={nav.products} className="nav-parent-link">
              {nav.labels.products}
            </Link>
            <button
              type="button"
              className={`nav-dropdown-trigger${activeMenu === "products" ? " active" : ""}`}
              aria-label={nav.labels.products}
              onClick={() => setActiveMenu(activeMenu === "products" ? null : "products")}
            >
              +
            </button>
            {activeMenu === "products" ? (
              <div className="mega-menu">
                <MenuColumn
                  title={locale === "sk" ? "Produktové skupiny" : "Product groups"}
                  items={productCategories}
                  basePath={nav.products}
                  locale={locale}
                  onNavigate={() => setActiveMenu(null)}
                />
              </div>
            ) : null}
          </div>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setActiveMenu("useful")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <Link href={nav.useful} className="nav-parent-link">
              {nav.labels.useful}
            </Link>
            <button
              type="button"
              className={`nav-dropdown-trigger${activeMenu === "useful" ? " active" : ""}`}
              aria-label={nav.labels.useful}
              onClick={() => setActiveMenu(activeMenu === "useful" ? null : "useful")}
            >
              +
            </button>
            {activeMenu === "useful" ? (
              <div className="mega-menu">
                <MenuColumn
                  title={locale === "sk" ? "Technické podklady" : "Technical resources"}
                  items={usefulItems}
                  basePath={nav.useful}
                  locale={locale}
                  onNavigate={() => setActiveMenu(null)}
                />
              </div>
            ) : null}
          </div>

          <Link href={nav.contact}>{nav.labels.contact}</Link>
        </nav>

        <Link href={nav.switchHref} className="lang-badge">
          {copy.langSwitch}
        </Link>
      </div>
    </header>
  );
}
