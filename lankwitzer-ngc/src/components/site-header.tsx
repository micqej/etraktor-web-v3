"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { getLocalePath, productCategories, siteCopy, usefulItems, type Locale } from "@/lib/lankwitzer-data";

function Dropdown({
  label,
  items,
  basePath,
  locale,
  isOpen,
  onOpen,
  onClose,
}: {
  label: string;
  items: { title: { sk: string; en: string }; slug: string }[];
  basePath: string;
  locale: Locale;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  return (
    <div className="nav-dropdown" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`nav-dropdown-trigger${isOpen ? " active" : ""}`}
        aria-expanded={isOpen}
        onClick={() => (isOpen ? onClose() : onOpen())}
      >
        {label}
      </button>
      {isOpen ? (
        <div className="nav-dropdown-menu">
          {items.map((item) => (
            <Link key={item.slug} href={getLocalePath(locale, `${basePath}/${item.slug}`)} onClick={onClose}>
              {item.title[locale]}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/en") ? "en" : "sk";
  const copy = siteCopy[locale];
  const switchHref = locale === "sk" ? "/en" : "/";
  const [activeMenu, setActiveMenu] = useState<"products" | "useful" | null>(null);

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
            isOpen={activeMenu === "products"}
            onOpen={() => setActiveMenu("products")}
            onClose={() => setActiveMenu((current) => (current === "products" ? null : current))}
          />
          <Dropdown
            label={locale === "sk" ? "Užitočné" : "Useful"}
            items={usefulItems}
            basePath="/uzitocne"
            locale={locale}
            isOpen={activeMenu === "useful"}
            onOpen={() => setActiveMenu("useful")}
            onClose={() => setActiveMenu((current) => (current === "useful" ? null : current))}
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
