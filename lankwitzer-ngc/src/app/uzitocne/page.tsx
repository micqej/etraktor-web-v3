import Link from "next/link";

import { removedItems, usefulItems } from "@/lib/lankwitzer-data";

export default function UsefulPage() {
  return (
    <section className="page-section">
      <div className="shell">
        <div className="section-heading">
          <span>Užitočné</span>
          <h1>Technické a praktické podklady</h1>
          <p>
            Tu majú ostať tie časti, ktoré dávajú klientovi aj návštevníkovi praktickú hodnotu. Prevodníky a certifikáty sú pripravené na vyradenie podľa zadania.
          </p>
        </div>
        <div className="two-column-grid">
          <div className="stack-list">
            {usefulItems.map((item) => (
              <Link key={item.slug} href={`/uzitocne/${item.slug}`} className="line-card">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </Link>
            ))}
          </div>
          <div className="stack-list muted">
            {removedItems.map((item) => (
              <div key={item.slug} className="line-card line-card-off">
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
