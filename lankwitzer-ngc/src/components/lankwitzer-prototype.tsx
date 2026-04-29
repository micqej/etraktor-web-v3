"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type Language = "sk" | "en";

type ProductRow = {
  code: string;
  shade: string;
  density: number;
  dft: number;
  solids: number;
  loss: number;
  area: number;
  paintPrice: number;
  thinnerCode: string;
  thinnerPrice: number;
};

type Copy = {
  nav: { label: string; href: string }[];
  heroTitle: string;
  heroLead: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  heroStats: { value: string; label: string }[];
  segmentTitle: string;
  segmentLead: string;
  productsTitle: string;
  productsLead: string;
  products: string[];
  aboutTitle: string;
  aboutLead: string;
  aboutBullets: string[];
  toolsTitle: string;
  toolsLead: string;
  calculatorHeading: string;
  calculatorNote: string;
  contactTitle: string;
  contactLead: string;
  contactCta: string;
  footer: string;
};

const copy: Record<Language, Copy> = {
  sk: {
    nav: [
      { label: "Segmenty", href: "#segmenty" },
      { label: "Produkty", href: "#produkty" },
      { label: "O nás", href: "#o-nas" },
      { label: "Kalkulačka", href: "#kalkulacka" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    heroTitle: "Priemyselné nátery a riešenia povrchových úprav na mieru",
    heroLead:
      "Moderný návrh novej prezentácie pre Lankwitzer Slovensko s dôrazom na výkon, technické poradenstvo a dôveryhodný industriálny vzhľad.",
    heroBody:
      "Staviame na tmavej firemnej estetike, prehľadnej štruktúre a silnej prezentácii segmentov, produktov aj užitočných výpočtov. Tento prototyp je pripravený ako základ pre finálny Next.js web a nasadenie na Vercel.",
    heroPrimary: "Prejsť na segmenty",
    heroSecondary: "Otvoriť kalkulačku",
    heroStats: [
      { value: "6", label: "hlavných segmentov" },
      { value: "24h", label: "cieľ dodania na miesto" },
      { value: "SK / EN", label: "jazykové verzie" },
    ],
    segmentTitle: "Segmenty, ktoré majú na webe dostať väčšiu váhu",
    segmentLead:
      "Vychádzam z podkladov od klienta: zachované segmenty, nový betón, PDF podklady a dôraz na reálne použitie v praxi.",
    productsTitle: "Produktové sekcie bez zbytočnej vaty",
    productsLead:
      "Sekciu produktov navrhujem viac obchodne a menej katalógovo. Nadpis ostáva čistý a hlavný dôraz sa presúva na podskupiny a použitie.",
    products: [
      "Základné, medzivrstvové a vrchné nátery",
      "Riešenia pre kov, plasty aj betón",
      "Tónovanie a miešanie cez FARB-EXPRESS",
      "Konzultácia podľa koróznej triedy a technológie aplikácie",
    ],
    aboutTitle: "Nie len výrobca, ale partner pri riešení povrchových úprav",
    aboutLead:
      "Textová časť je už upravená podľa zaslaného dokumentu: dôraz na poradenstvo, optimalizáciu lakovacieho procesu, znižovanie VOC a prepojenie laboratória do sekcie O nás.",
    aboutBullets: [
      "Farby na mieru a ladenie striekacej techniky pre konkrétne podmienky výroby",
      "Dodanie odtieňov RAL, STN, ČSN a ďalších štandardov",
      "Bezplatné poradenstvo, školenia a aplikačný technik podľa dohody",
      "Merania lesku, hrúbok, adhézie a podpora partnerského laboratória EUCL",
    ],
    toolsTitle: "Užitočné nástroje a podklady pre obchod",
    toolsLead:
      "Kalkulačka spotrieb je zapracovaná ako interaktívna sekcia. Vo finále ju môžeme rozšíriť o viacvrstvové scenáre, export do PDF a odoslanie dopytu.",
    calculatorHeading: "Kalkulačka spotreby náterového systému",
    calculatorNote:
      "Vzorce sú prepísané z Excelu, ktorý si poslal. Aktuálne počítame teoretickú a praktickú výdatnosť, spotrebu farby, spotrebu riedidla, cenu za m2 a celkovú cenu systému.",
    contactTitle: "Kontakt pripravený na nasadenie formulárov",
    contactLead:
      "Na ostrej verzii nastavíme formulár tak, aby dopyty chodili na predaj@lankwitz.sk, pričom maily môžu zostať bežať na pôvodnom hostingu.",
    contactCta: "Napísať na predaj@lankwitz.sk",
    footer: "Prototyp pre nový web Lankwitzer Slovensko. Ďalší krok: doplniť finálne texty, SK fotky a všetky podstránky.",
  },
  en: {
    nav: [
      { label: "Segments", href: "#segmenty" },
      { label: "Products", href: "#produkty" },
      { label: "About", href: "#o-nas" },
      { label: "Calculator", href: "#kalkulacka" },
      { label: "Contact", href: "#kontakt" },
    ],
    heroTitle: "Industrial coatings and tailored surface treatment solutions",
    heroLead:
      "A modern homepage direction for Lankwitzer Slovensko focused on performance, technical consultancy, and a credible industrial visual language.",
    heroBody:
      "The concept keeps the dark brand mood, introduces a cleaner information hierarchy, and turns segments, products, and practical tools into stronger decision-making content. This prototype is ready to become the final Next.js website on Vercel.",
    heroPrimary: "Explore segments",
    heroSecondary: "Open calculator",
    heroStats: [
      { value: "6", label: "core segments" },
      { value: "24h", label: "delivery goal" },
      { value: "SK / EN", label: "language support" },
    ],
    segmentTitle: "Segments positioned as the commercial backbone of the site",
    segmentLead:
      "The structure reflects the client document: preserved industries, a new concrete segment, supporting PDFs, and content built around real industrial use cases.",
    productsTitle: "Product structure with stronger commercial clarity",
    productsLead:
      "Instead of a generic catalogue feel, products are framed around sub-groups, advisory value, and practical specification support.",
    products: [
      "Primer, intermediate, and topcoat systems",
      "Solutions for metal, plastics, and concrete",
      "FARB-EXPRESS tinting and mixing workflow",
      "Consultation by corrosion class and application method",
    ],
    aboutTitle: "Not only a manufacturer, but a partner in surface treatment",
    aboutLead:
      "This section already reflects the supplied document: consultancy, process optimisation, VOC reduction, and laboratory support merged into a stronger About section.",
    aboutBullets: [
      "Tailor-made coatings and spray technology tuning for the customer’s exact production conditions",
      "Delivery in RAL, STN, CSN, British Standard, and other requested colour systems",
      "Free consulting, team training, and application technician support",
      "Gloss, thickness, adhesion, and laboratory-backed quality verification with EUCL",
    ],
    toolsTitle: "Practical tools and sales support content",
    toolsLead:
      "The consumption calculator is already interactive. In the final version we can add multi-layer presets, PDF export, and request submission tied to the website CRM flow.",
    calculatorHeading: "Coating system consumption calculator",
    calculatorNote:
      "The formulas were transcribed from the Excel workbook you shared. The prototype already calculates theoretical and practical coverage, paint use, thinner use, cost per m2, and total system cost.",
    contactTitle: "Contact flow prepared for live form integration",
    contactLead:
      "In production, inquiry forms will route to predaj@lankwitz.sk while email hosting can remain on the current Websupport setup.",
    contactCta: "Email predaj@lankwitz.sk",
    footer: "Prototype for the new Lankwitzer Slovensko website. Next step: final content, original SK photography, and full subpage build-out.",
  },
};

const segments = [
  {
    key: "rail",
    title: "Železnice",
    pdf: "/client-files/Railway EN.pdf",
    image: "/lankwitzer-pl-assets/33e886_13dcdaa3e0bc4bb093507c109c56e1d8f000.jpg",
    blurbSk:
      "Trvácne nátery pre koľajové vozidlá a technológie, kde rozhoduje dlhodobá ochrana aj vzhľad.",
    blurbEn:
      "Durable coating systems for rail vehicles and railway applications where long-term protection and visual quality matter.",
  },
  {
    key: "auto",
    title: "Automotive",
    pdf: "/client-files/ACE  EN.pdf",
    image: "/lankwitzer-pl-assets/33e886_dd6d0e69871b4628a0557b405457387c~mv2.jpg",
    blurbSk:
      "Riešenia pre OEM aj priemyselné prevádzky s dôrazom na proces, farebnú stálosť a efektivitu.",
    blurbEn:
      "Solutions for OEM and industrial environments with emphasis on process stability, colour consistency, and efficiency.",
  },
  {
    key: "ace",
    title: "ACE",
    pdf: "/client-files/ACE  EN.pdf",
    image: "/lankwitzer-pl-assets/33e886_305d3107bc2c47ba94d450874d61e69af000.jpg",
    blurbSk:
      "Nátery pre poľnohospodársku, stavebnú a úžitkovú techniku s vyššími nárokmi na odolnosť.",
    blurbEn:
      "Coatings for agricultural, construction, and commercial equipment with elevated durability requirements.",
  },
  {
    key: "containers",
    title: "Kontajnery a oceľové konštrukcie",
    pdf: "/client-files/TUBE and Pipe EN.pdf",
    image: "/lankwitzer-pl-assets/33e886_d6cdf0c54ef34ce89b1fbc806d6dfb85f000.jpg",
    blurbSk:
      "Robustné systémy pre veľké oceľové plochy, korózne zaťaženie a náročné prevádzkové podmienky.",
    blurbEn:
      "Robust systems for large steel surfaces, corrosion classes, and demanding service conditions.",
  },
  {
    key: "packaging",
    title: "Obaly a plasty",
    pdf: "/client-files/Packaging EN.pdf",
    image: "/lankwitzer-pl-assets/33e886_17a695888ca8466ea338f8d7b0611cc2f000.jpg",
    blurbSk:
      "Estetické a funkčné nátery pre obalové riešenia a plasty s dôrazom na vzhľad aj proces aplikácie.",
    blurbEn:
      "Aesthetic and functional coatings for packaging and plastics with focus on finish quality and application process.",
  },
  {
    key: "concrete",
    title: "Betón",
    pdf: "/client-files/Beton- EN.pdf",
    image: "/client-files/Pozadie Beton.jpg",
    blurbSk:
      "Naše nátery na betón kombinujú trvanlivosť s moderným vzhľadom, vysokou odolnosťou a ochranou pred nečistotami aj lišajníkmi.",
    blurbEn:
      "Our concrete coatings combine long-term durability with a modern look, high resistance, and protection against dirt and lichen growth.",
  },
];

const initialRows: ProductRow[] = [
  {
    code: "KG 81-7132",
    shade: "sivá / grey",
    density: 1.25,
    dft: 60,
    solids: 48,
    loss: 0.4,
    area: 225,
    paintPrice: 4.56,
    thinnerCode: "S 6001",
    thinnerPrice: 2.5,
  },
  {
    code: "EP Primer",
    shade: "RAL 7040",
    density: 1.32,
    dft: 80,
    solids: 52,
    loss: 0.35,
    area: 225,
    paintPrice: 5.4,
    thinnerCode: "S 6001",
    thinnerPrice: 2.5,
  },
];

const marginOptions = [0.2, 0.45, 0.5, 0.6];

function formatNumber(value: number, digits = 2) {
  return new Intl.NumberFormat("sk-SK", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number.isFinite(value) ? value : 0);
}

export function LankwitzerPrototype() {
  const [language, setLanguage] = useState<Language>("sk");
  const [thinningPercent, setThinningPercent] = useState(10);
  const [rows] = useState<ProductRow[]>(initialRows);

  const t = copy[language];

  const totals = useMemo(() => {
    const evaluatedRows = rows.map((row) => {
      const theoreticalCoverage = (10 * row.solids) / (row.dft * row.density);
      const practicalCoverage = theoreticalCoverage * (1 - row.loss);
      const paintUse = row.area / practicalCoverage;
      const thinnerUse = paintUse * (thinningPercent / 100);
      const costPerSquareMeter =
        (1 / practicalCoverage) * row.paintPrice +
        (1 / practicalCoverage) * row.thinnerPrice * (thinningPercent / 100);
      const totalCost = paintUse * row.paintPrice + thinnerUse * row.thinnerPrice;

      return {
        ...row,
        theoreticalCoverage,
        practicalCoverage,
        paintUse,
        thinnerUse,
        costPerSquareMeter,
        totalCost,
      };
    });

    const summary = evaluatedRows.reduce(
      (acc, row) => {
        acc.paintUse += row.paintUse;
        acc.thinnerUse += row.thinnerUse;
        acc.totalCost += row.totalCost;
        return acc;
      },
      { paintUse: 0, thinnerUse: 0, totalCost: 0 },
    );

    const marginTotals = marginOptions.map((margin) =>
      evaluatedRows.reduce((sum, row) => {
        const sqm =
          (1 / (row.theoreticalCoverage * (1 - margin))) * row.paintPrice +
          (1 / (row.theoreticalCoverage * (1 - margin))) *
            row.thinnerPrice *
            (thinningPercent / 100);
        return sum + sqm;
      }, 0),
    );

    return { evaluatedRows, summary, marginTotals };
  }, [rows, thinningPercent]);

  return (
    <main className="prototype-shell">
      <header className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-noise" />
        <nav className="topbar">
          <Link href="#top" className="brandmark" aria-label="Lankwitzer Slovensko">
            <Image
              src="/lankwitzer-pl-assets/33e886_3a1a5e0da1904339a41f79b660d4d910~mv2.png"
              alt="Lankwitzer"
              width={180}
              height={42}
            />
          </Link>
          <div className="nav-links">
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="language-switch">
            {(["sk", "en"] as Language[]).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={item === language ? "active" : ""}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <h1>{t.heroTitle}</h1>
            <p className="hero-lead">{t.heroLead}</p>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions">
              <Link href="#segmenty" className="button button-primary">
                {t.heroPrimary}
              </Link>
              <Link href="#kalkulacka" className="button button-secondary">
                {t.heroSecondary}
              </Link>
            </div>
            <div className="hero-stats">
              {t.heroStats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card visual-card-main">
              <Image
                src="/lankwitzer-pl-assets/33e886_9fa50d69e6294fa290d540f2983aeabf~mv2.jpg"
                alt="Industrial coating application"
                fill
                className="cover-image"
              />
            </div>
            <div className="visual-card visual-card-side">
              <span>FARB-EXPRESS</span>
              <p>RAL, STN, CSN, British Standard and tailored coatings for production reality.</p>
            </div>
            <div className="visual-card visual-card-side bottom">
              <span>predaj@lankwitz.sk</span>
              <p>Forms and inquiries will route here in the production version.</p>
            </div>
          </div>
        </section>
      </header>

      <section className="section section-dark" id="segmenty">
        <div className="section-heading">
          <span>01</span>
          <div>
            <h2>{t.segmentTitle}</h2>
            <p>{t.segmentLead}</p>
          </div>
        </div>
        <div className="segment-grid">
          {segments.map((segment) => (
            <article className="segment-card" key={segment.key}>
              <div className="segment-image">
                <Image src={segment.image} alt={segment.title} fill className="cover-image" />
              </div>
              <div className="segment-content">
                <h3>{segment.title}</h3>
                <p>{language === "sk" ? segment.blurbSk : segment.blurbEn}</p>
                <a href={segment.pdf} target="_blank" rel="noreferrer" className="segment-link">
                  PDF podklad
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split" id="produkty">
        <div className="section-heading">
          <span>02</span>
          <div>
            <h2>{t.productsTitle}</h2>
            <p>{t.productsLead}</p>
          </div>
        </div>
        <div className="split-layout">
          <div className="product-panel">
            <div className="product-stack">
              {t.products.map((item) => (
                <div key={item} className="product-item">
                  <div className="product-bullet" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="product-image-wrap">
            <Image
              src="/lankwitzer-pl-assets/images_00000.png"
              alt="Lankwitzer identity"
              width={280}
              height={70}
              className="product-logo"
            />
            <div className="product-image">
              <Image
                src="/lankwitzer-pl-assets/33e886_d6cdf0c54ef34ce89b1fbc806d6dfb85f000.jpg"
                alt="Coating segment reference"
                fill
                className="cover-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="o-nas">
        <div className="section-heading">
          <span>03</span>
          <div>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutLead}</p>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            {t.aboutBullets.map((item) => (
              <div key={item} className="about-bullet">
                <div className="about-line" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="about-highlight">
            <div className="highlight-card">
              <strong>EUCL</strong>
              <p>
                Partnerské laboratórium ako súčasť sekcie O nás namiesto samostatnej podstránky.
              </p>
            </div>
            <div className="highlight-card">
              <strong>VOC optimisation</strong>
              <p>Procesné poradenstvo a zefektívnenie lakovania ako obchodná výhoda webu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-split" id="kalkulacka">
        <div className="section-heading">
          <span>04</span>
          <div>
            <h2>{t.toolsTitle}</h2>
            <p>{t.toolsLead}</p>
          </div>
        </div>
        <div className="calculator-shell">
          <div className="calculator-intro">
            <h3>{t.calculatorHeading}</h3>
            <p>{t.calculatorNote}</p>

            <label className="field">
              <span>Riedenie (%)</span>
              <input
                type="range"
                min="0"
                max="30"
                value={thinningPercent}
                onChange={(event) => setThinningPercent(Number(event.target.value))}
              />
              <strong>{thinningPercent} %</strong>
            </label>

            <div className="summary-cards">
              <div className="summary-card">
                <span>Spotreba farby</span>
                <strong>{formatNumber(totals.summary.paintUse)} kg</strong>
              </div>
              <div className="summary-card">
                <span>Spotreba riedidla</span>
                <strong>{formatNumber(totals.summary.thinnerUse)} l</strong>
              </div>
              <div className="summary-card">
                <span>Celková cena</span>
                <strong>{formatNumber(totals.summary.totalCost)} EUR</strong>
              </div>
            </div>
          </div>

          <div className="calculator-table-wrap">
            <table className="calculator-table">
              <thead>
                <tr>
                  <th>Produkt</th>
                  <th>DFT</th>
                  <th>Sušina</th>
                  <th>Teor. výdatnosť</th>
                  <th>Prakt. výdatnosť</th>
                  <th>Farba</th>
                  <th>Riedidlo</th>
                  <th>Cena / m2</th>
                </tr>
              </thead>
              <tbody>
                {totals.evaluatedRows.map((row) => (
                  <tr key={`${row.code}-${row.shade}`}>
                    <td>
                      <strong>{row.code}</strong>
                      <span>{row.shade}</span>
                    </td>
                    <td>{row.dft} μm</td>
                    <td>{row.solids} %</td>
                    <td>{formatNumber(row.theoreticalCoverage)} m2/kg</td>
                    <td>{formatNumber(row.practicalCoverage)} m2/kg</td>
                    <td>{formatNumber(row.paintUse)} kg</td>
                    <td>{formatNumber(row.thinnerUse)} l</td>
                    <td>{formatNumber(row.costPerSquareMeter)} EUR</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="margin-grid">
              {marginOptions.map((margin, index) => (
                <div key={margin} className="margin-card">
                  <span>Cena za 1 m2 pri stratách {Math.round(margin * 100)} %</span>
                  <strong>{formatNumber(totals.marginTotals[index])} EUR</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-contact" id="kontakt">
        <div className="section-heading">
          <span>05</span>
          <div>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactLead}</p>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <span>Email</span>
            <strong>predaj@lankwitz.sk</strong>
          </div>
          <div className="contact-card">
            <span>Phone</span>
            <strong>+421 907 881 499</strong>
          </div>
          <div className="contact-card">
            <span>Web</span>
            <strong>www.lankwitzer.sk</strong>
          </div>
          <a className="contact-cta" href="mailto:predaj@lankwitz.sk">
            {t.contactCta}
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>{t.footer}</p>
      </footer>
    </main>
  );
}
