import Image from "next/image";
import Link from "next/link";

import { aboutBullets, contactDetails, productCategories, removedItems, segments, usefulItems } from "@/lib/lankwitzer-data";

export function HeroBlock() {
  return (
    <section className="hero-dark" id="top">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Komplexné riešenia povrchových úprav</p>
          <h1>Tmavší, ostrejší a technickejší smer pre nový Lankwitzer web</h1>
          <p className="hero-lead">
            Web posúvam bližšie k charakteru značky: hranaté bloky, silný kontrast, farby z loga a technickejší font namiesto jemného korporátneho looku.
          </p>
          <p className="hero-body">
            Zároveň je to už rozbité na samostatné podstránky, nie len jednu prezentáciu. Produkty a užitočné majú dropdown menu a kalkulačka žije na vlastnej route.
          </p>
          <div className="hero-actions">
            <Link href="/produkty" className="button button-primary">
              Produkty
            </Link>
            <Link href="/uzitocne/kalkulacia-spotrieb" className="button button-secondary">
              Kalkulácia spotrieb
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <Image
              src="https://lankwitzer.sk/wp-content/uploads/2019/08/Produkty-2.jpg"
              alt="Lankwitzer products"
              fill
              sizes="(max-width: 1000px) 100vw, 45vw"
            />
          </div>
          <div className="hero-panel">
            <strong>Čo zostáva</strong>
            <span>Segmenty, produkty, užitočné, kontakt a upravené O nás.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SegmentGridBlock() {
  return (
    <section className="page-section" id="segmenty">
      <div className="shell">
        <div className="section-heading">
          <span>Segmenty</span>
          <h2>Šesť nosných segmentov na hlavnej stránke</h2>
          <p>
            Držím sa klientského dokumentu: Železnice, Automotive, ACE, Kontajnery a oceľové konštrukcie, Obaly a plasty a nový Betón.
          </p>
        </div>
        <div className="card-grid">
          {segments.map((segment) => (
            <article key={segment.slug} className="feature-card">
              <div className="media-wrap">
                <Image src={segment.image} alt={segment.title} fill sizes="(max-width: 860px) 100vw, 33vw" />
              </div>
              <div className="card-body">
                <h3>{segment.title}</h3>
                <p>{segment.text}</p>
                <a href={segment.pdf} target="_blank" rel="noreferrer" className="text-link">
                  Otvoriť PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductsBlock() {
  return (
    <section className="page-section section-alt" id="produkty">
      <div className="shell">
        <div className="section-heading">
          <span>Produkty</span>
          <h2>Produktové podskupiny ako vlastné podstránky</h2>
          <p>Na ďalší krok dávajú najväčší zmysel detailné podstránky so silným CTA, technickými PDF a obchodným textom.</p>
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

export function UsefulBlock() {
  return (
    <section className="page-section" id="uzitocne">
      <div className="shell">
        <div className="section-heading">
          <span>Užitočné</span>
          <h2>Technické podklady, ktoré sa majú zachovať</h2>
          <p>Kalkulačka, lesk náterov, vzorkovník RAL a korózne systémy ISO ostávajú. Prevodníky a certifikáty sú pripravené na vyradenie.</p>
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

export function AboutBlock() {
  return (
    <section className="page-section section-alt" id="o-nas">
      <div className="shell about-grid">
        <div className="section-heading left">
          <span>O nás</span>
          <h2>Najsilnejšia obchodná časť má byť vo vnútri webu viac viditeľná</h2>
          <p>Laboratórium už nejde ako samostatná stránka. O to viac treba na webe zvýrazniť, čo ponúkajú a v čom sú dobrí.</p>
        </div>
        <div className="bullet-panel">
          {aboutBullets.map((item) => (
            <div key={item} className="bullet-row">
              <i />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBlock() {
  return (
    <section className="page-section" id="kontakt">
      <div className="shell">
        <div className="section-heading">
          <span>Kontakt</span>
          <h2>Jednoduchá, praktická, obchodná kontaktná stránka</h2>
          <p>Tu sa v ostrej verzii oplatí doplniť formulár, mapu a kontaktné osoby. Základné firemné údaje však majú byť okamžite viditeľné.</p>
        </div>
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
        </div>
      </div>
    </section>
  );
}
