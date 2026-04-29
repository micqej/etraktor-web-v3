import Link from "next/link";

import { productCategories } from "@/lib/lankwitzer-data";

export default function ProductsPage() {
  return (
    <section className="page-section">
      <div className="shell">
        <div className="section-heading">
          <span>Produkty</span>
          <h1>Produktové podskupiny</h1>
          <p>
            Na aktuálnom webe je toto jedna z najdôležitejších častí. Preto som ju rozdelil na samostatnú stránku a pripravil aj detailné routy pre jednotlivé skupiny.
          </p>
        </div>
        <div className="card-grid compact">
          {productCategories.map((item) => (
            <Link key={item.slug} href={`/produkty/${item.slug}`} className="info-tile">
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
