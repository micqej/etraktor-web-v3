import Image from "next/image";
import Link from "next/link";

import { productCategories, usefulItems } from "@/lib/lankwitzer-data";

function Dropdown({
  label,
  items,
  basePath,
}: {
  label: string;
  items: { title: string; slug: string }[];
  basePath: string;
}) {
  return (
    <details className="nav-dropdown">
      <summary>{label}</summary>
      <div className="nav-dropdown-menu">
        {items.map((item) => (
          <Link key={item.slug} href={`${basePath}/${item.slug}`}>
            {item.title}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand-link" aria-label="Lankwitzer Slovensko">
          <Image
            src="https://lankwitzer.sk/wp-content/uploads/2019/10/Lankwitzer_Logo-2017-RGB.png"
            alt="Lankwitzer logo"
            width={182}
            height={48}
            priority
          />
        </Link>

        <nav className="main-nav">
          <Link href="/">Domov</Link>
          <Link href="/o-nas">O nás</Link>
          <Dropdown label="Produkty" items={productCategories} basePath="/produkty" />
          <Dropdown label="Užitočné" items={usefulItems} basePath="/uzitocne" />
          <Link href="/kontakt">Kontakt</Link>
        </nav>

        <div className="lang-badge">SK / EN</div>
      </div>
    </header>
  );
}
