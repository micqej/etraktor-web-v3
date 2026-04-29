"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";

type Language = "sk" | "en";

type Segment = {
  title: string;
  slug: string;
  image: string;
  pdf: string;
  textSk: string;
  textEn: string;
};

type ProductCategory = {
  title: string;
  href: string;
  textSk: string;
  textEn: string;
};

type UtilityItem = {
  title: string;
  href: string;
  keep: boolean;
  textSk: string;
  textEn: string;
};

type CalculatorInput = {
  area: number;
  solids: number;
  dft: number;
  density: number;
  paintPrice: number;
  thinnerPrice: number;
  thinningPercent: number;
  lossPercent: number;
};

type Copy = {
  nav: { label: string; href: string }[];
  heroTitle: string;
  heroLead: string;
  heroBody: string;
  heroPrimary: string;
  heroSecondary: string;
  stats: { value: string; label: string }[];
  sectionSegments: string;
  sectionSegmentsLead: string;
  sectionProducts: string;
  sectionProductsLead: string;
  sectionUseful: string;
  sectionUsefulLead: string;
  sectionAbout: string;
  sectionAboutLead: string;
  sectionContact: string;
  sectionContactLead: string;
  sectionPages: string;
  sectionPagesLead: string;
  calcTitle: string;
  calcLead: string;
  labels: {
    area: string;
    solids: string;
    dft: string;
    density: string;
    paintPrice: string;
    thinnerPrice: string;
    thinningPercent: string;
    lossPercent: string;
    theoretical: string;
    practical: string;
    paintUse: string;
    thinnerUse: string;
    sqmCost: string;
    totalCost: string;
  };
  aboutBullets: string[];
  pagesIncluded: string[];
};

const copy: Record<Language, Copy> = {
  sk: {
    nav: [
      { label: "Domov", href: "#top" },
      { label: "Segmenty", href: "#segmenty" },
      { label: "Produkty", href: "#produkty" },
      { label: "Užitočné", href: "#uzitocne" },
      { label: "O nás", href: "#o-nas" },
      { label: "Kontakt", href: "#kontakt" },
    ],
    heroTitle: "Komplexné riešenia povrchových úprav v modernejšom, svetlejšom šate",
    heroLead:
      "Prepracoval som smer do svetlejšej bielo-modrej estetiky s oranžovo-červenými akcentmi, aby bol bližšie k tomu, čo sa ti páči na zahraničných verziách a zároveň stále sedel na značku Lankwitzer.",
    heroBody:
      "Tento prototyp už počíta s reálnou štruktúrou webu: segmenty, produkty, užitočné podstránky, kontakt, upravené O nás a kalkulačka, kde si používateľ zadáva všetky hodnoty ručne ako na pôvodnej stránke.",
    heroPrimary: "Pozrieť štruktúru webu",
    heroSecondary: "Prejsť na kalkulačku",
    stats: [
      { value: "6", label: "segmentov na homepage" },
      { value: "6", label: "produktových podskupín" },
      { value: "4", label: "užitočné sekcie po úprave" },
    ],
    sectionSegments: "Segmenty na hlavnej stránke",
    sectionSegmentsLead:
      "Vychádzam z klientského dokumentu: Železnice, Automotive, ACE, Kontajnery a oceľové konštrukcie, Obaly a plasty a nový Betón. Certifikáty a prevodníky sa do finálnej štruktúry nezapočítavajú.",
    sectionProducts: "Produkty, ktoré musia zostať zachované",
    sectionProductsLead:
      "Na webe majú zostať produktové podskupiny z aktuálnej stránky. V ďalšej fáze ich rozbijeme na samostatné plnohodnotné podstránky s fotkami, PDF a CTA formulármi.",
    sectionUseful: "Užitočné podstránky po vyčistení",
    sectionUsefulLead:
      "Podľa podkladov vyhadzujeme prevodníky a certifikáty. Zachovať sa má kalkulačka, lesk náterov, vzorkovník RAL a korózne systémy ISO.",
    sectionAbout: "O nás s dôrazom na to, v čom sú dobrí",
    sectionAboutLead:
      "Sem som preniesol ťažisko textu, ktoré klient poslal. Laboratórium sa ruší ako samostatná stránka a jeho obsah má žiť tu.",
    sectionContact: "Kontakt ako samostatná povinná stránka",
    sectionContactLead:
      "Kontaktná stránka má zostať jednoduchá, vecná a obchodná. Na ostrej verzii sem pridáme formulár, mapu a kontaktné osoby podľa potreby.",
    sectionPages: "Čo má mať web zachované",
    sectionPagesLead:
      "Nie je to len jedna homepage. Nižšie je navrhnuté minimum stránok a sekcií, ktoré podľa pôvodného webu a poslaných podkladov treba držať.",
    calcTitle: "Kalkulácia spotrieb s vlastným zadaním hodnôt",
    calcLead:
      "Kalkulačka je teraz postavená tak, ako si pýtal: používateľ zadáva plochu, sušinu, DFT, hustotu, cenu farby, cenu riedidla, riedenie aj straty. Vzorce vychádzajú z pôvodného webu a z Excelu.",
    labels: {
      area: "Plocha (m2)",
      solids: "Objemový obsah sušiny (%)",
      dft: "DFT - hrúbka suchého náteru (μm)",
      density: "Hustota (g/ml)",
      paintPrice: "Cena 1 kg farby vrátane tužidla (EUR)",
      thinnerPrice: "Cena 1 l riedidla (EUR)",
      thinningPercent: "Riedenie (%)",
      lossPercent: "Koeficient strát (%)",
      theoretical: "Teoretická výdatnosť",
      practical: "Praktická výdatnosť",
      paintUse: "Spotreba farby",
      thinnerUse: "Spotreba riedidla",
      sqmCost: "Cena za 1 m2",
      totalCost: "Celková cena",
    },
    aboutBullets: [
      "Naši aplikační technici odporučia a vyladia techniku aj farby pre vaše podmienky, teda farby na mieru.",
      "Vytipujeme optimálne varianty pre výrobu a poskytujeme bezplatné poradenstvo v oblasti povrchových úprav.",
      "Miešanie a tónovanie farieb na zariadení FARB-EXPRESS Just in Time.",
      "Optimalizácia a zefektívnenie lakovacieho procesu vrátane redukcie VOC vo výrobe.",
      "Podpora akreditovaného partnerského laboratória EUCL ako súčasť sekcie O nás.",
    ],
    pagesIncluded: [
      "Domov",
      "O nás",
      "Produkty",
      "Rozpúšťadlové farby",
      "Vodou riediteľné farby",
      "UV laky",
      "EVOkure",
      "Protipožiarne nátery",
      "Príslušenstvo",
      "Užitočné",
      "Kalkulácia spotrieb",
      "Lesk náterov",
      "Vzorkovník RAL",
      "Korózne systémy ISO",
      "Kontakt",
    ],
  },
  en: {
    nav: [
      { label: "Home", href: "#top" },
      { label: "Segments", href: "#segmenty" },
      { label: "Products", href: "#produkty" },
      { label: "Useful", href: "#uzitocne" },
      { label: "About", href: "#o-nas" },
      { label: "Contact", href: "#kontakt" },
    ],
    heroTitle: "Complete surface treatment solutions in a brighter, more modern visual system",
    heroLead:
      "I shifted the direction toward a lighter white-blue palette with orange-red accents so it feels closer to the international references while still fitting the Lankwitzer brand.",
    heroBody:
      "This prototype now reflects the real website structure: segments, products, useful pages, contact, the revised About content, and a calculator where users manually enter their own values just like on the current website.",
    heroPrimary: "View site structure",
    heroSecondary: "Open calculator",
    stats: [
      { value: "6", label: "homepage segments" },
      { value: "6", label: "product groups" },
      { value: "4", label: "useful pages after cleanup" },
    ],
    sectionSegments: "Homepage segments",
    sectionSegmentsLead:
      "This follows the client document: Railways, Automotive, ACE, Containers and steel structures, Packaging and plastics, and the new Concrete segment.",
    sectionProducts: "Product groups that should remain",
    sectionProductsLead:
      "The website should keep the product subgroups from the current structure. In the next phase we can turn each into a full dedicated page with images, PDFs, and inquiries.",
    sectionUseful: "Useful pages after cleanup",
    sectionUsefulLead:
      "Based on the supplied notes, converters and certificates are removed. The kept useful content should focus on the calculator, coating gloss, RAL sampler, and ISO corrosion systems.",
    sectionAbout: "About section focused on what they do best",
    sectionAboutLead:
      "This is where the client’s strongest business points belong. The laboratory page is removed and its value is integrated here.",
    sectionContact: "Contact as a mandatory standalone page",
    sectionContactLead:
      "The contact page should stay practical, clear, and conversion-oriented. Production can later add the form, map, and team details.",
    sectionPages: "What the website should keep",
    sectionPagesLead:
      "This is more than a landing page. Below is the minimum page architecture that should stay based on the current website and the supplied update document.",
    calcTitle: "Consumption calculator with fully editable inputs",
    calcLead:
      "The calculator is now aligned with your feedback: users should enter area, solids, DFT, density, paint price, thinner price, thinning percentage, and loss percentage themselves. The formulas follow the current site and workbook logic.",
    labels: {
      area: "Area (m2)",
      solids: "Volume solids (%)",
      dft: "DFT - dry film thickness (μm)",
      density: "Density (g/ml)",
      paintPrice: "Paint price per 1 kg incl. hardener (EUR)",
      thinnerPrice: "Thinner price per 1 l (EUR)",
      thinningPercent: "Thinning (%)",
      lossPercent: "Loss coefficient (%)",
      theoretical: "Theoretical coverage",
      practical: "Practical coverage",
      paintUse: "Paint consumption",
      thinnerUse: "Thinner consumption",
      sqmCost: "Cost per 1 m2",
      totalCost: "Total cost",
    },
    aboutBullets: [
      "Application technicians tune both coating materials and application technology to the real production environment.",
      "Optimised variants for the customer’s manufacturing needs with free technical consulting.",
      "FARB-EXPRESS Just in Time tinting and mixing workflow.",
      "Coating process optimisation and VOC reduction support.",
      "Accredited partner laboratory support under the About section instead of a standalone laboratory page.",
    ],
    pagesIncluded: [
      "Home",
      "About",
      "Products",
      "Solvent coatings",
      "Waterbased coating systems",
      "UV coatings",
      "EVOkure",
      "Fire protection coatings",
      "Accessories",
      "Useful",
      "Consumption calculator",
      "Coating gloss level",
      "RAL sampler",
      "ISO corrosion systems",
      "Contact",
    ],
  },
};

const segments: Segment[] = [
  {
    title: "Železnice",
    slug: "railway",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/07/Zeleznice-900x599.jpg",
    pdf: "/client-files/Railway EN.pdf",
    textSk: "Odolné náterové systémy pre koľajové vozidlá a projekty, kde rozhoduje ochrana, životnosť a vizuál.",
    textEn: "Durable coating systems for rail vehicles and applications where service life, protection, and appearance matter.",
  },
  {
    title: "Automotive",
    slug: "automotive",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/08/Automotive-main-2-900x601.jpg",
    pdf: "/client-files/ACE  EN.pdf",
    textSk: "Riešenia pre automotive výrobu, priemyselné procesy a náročnú povrchovú kvalitu.",
    textEn: "Solutions for automotive manufacturing, industrial process stability, and demanding surface quality.",
  },
  {
    title: "ACE",
    slug: "ace",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/07/Automotive-900x599.jpg",
    pdf: "/client-files/ACE  EN.pdf",
    textSk: "Nátery pre poľnohospodársku, stavebnú a úžitkovú techniku s vyššími požiadavkami na odolnosť.",
    textEn: "Coatings for agricultural, construction, and commercial equipment with stronger durability demands.",
  },
  {
    title: "Kontajnery a oceľové konštrukcie",
    slug: "containers",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/06/Kontajnery-OK-3.jpg",
    pdf: "/client-files/TUBE and Pipe EN.pdf",
    textSk: "Robustné systémy pre oceľové konštrukcie, kontajnery a korózne exponované prostredia.",
    textEn: "Robust systems for steel structures, containers, and corrosion-exposed environments.",
  },
  {
    title: "Obaly a plasty",
    slug: "packaging",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/07/PlaSTY-main-900x600.jpg",
    pdf: "/client-files/Packaging EN.pdf",
    textSk: "Estetické aj funkčné nátery pre plasty, obalové riešenia a vizuálne citlivé aplikácie.",
    textEn: "Aesthetic and functional coatings for plastics, packaging, and visually sensitive applications.",
  },
  {
    title: "Betón",
    slug: "concrete",
    image: "/client-files/Pozadie Beton.jpg",
    pdf: "/client-files/Beton- EN.pdf",
    textSk: "Nátery na betón s dôrazom na trvanlivosť, odolnosť voči nečistotám a moderný vzhľad.",
    textEn: "Concrete coatings focused on durability, dirt resistance, and a contemporary finish.",
  },
];

const productCategories: ProductCategory[] = [
  {
    title: "Rozpúšťadlové farby",
    href: "/produkty/rozpustadlove-farby",
    textSk: "Široké spektrum rozpúšťadlových systémov pre priemyselné použitie.",
    textEn: "A broad range of solvent-based coating systems for industrial use.",
  },
  {
    title: "Vodou riediteľné farby",
    href: "/produkty/vodou-rieditelne-farby",
    textSk: "Ekologickejší smer pre prevádzky, kde dáva zmysel zníženie VOC.",
    textEn: "A lower-VOC direction for production setups where it makes sense technically and operationally.",
  },
  {
    title: "UV - laky",
    href: "/produkty/uv-laky",
    textSk: "Rýchle vytvrdzovanie a presná kontrola výslednej vrstvy.",
    textEn: "Fast curing and precise control of the final coating layer.",
  },
  {
    title: "EVOkure",
    href: "/produkty/evokure",
    textSk: "Produktová línia, ktorú treba na novom webe zreteľne oddeliť a vysvetliť.",
    textEn: "A product line that should be clearly separated and explained on the new website.",
  },
  {
    title: "Protipožiarne nátery",
    href: "/produkty/protipoziarne-natery",
    textSk: "Špecializovaná kategória s dôrazom na technické podklady a dôveru.",
    textEn: "A specialised category that should lean on technical credibility and supporting documents.",
  },
  {
    title: "Príslušenstvo",
    href: "/produkty/prislusenstvo",
    textSk: "Riedidlá, odmasťovacie prostriedky a doplnkové riešenia.",
    textEn: "Thinners, degreasers, and complementary coating accessories.",
  },
];

const usefulItems: UtilityItem[] = [
  {
    title: "Kalkulácia spotrieb",
    href: "#kalkulacka",
    keep: true,
    textSk: "Plne interaktívny formulár s vlastnými vstupmi používateľa.",
    textEn: "A fully interactive form with manual user inputs.",
  },
  {
    title: "Lesk náterov",
    href: "/uzitocne/lesk-naterov",
    keep: true,
    textSk: "Zachovať ako praktické vysvetlenie pre zákazníkov.",
    textEn: "Keep as a practical explanatory page for customers.",
  },
  {
    title: "Vzorkovník RAL",
    href: "/uzitocne/vzorkovniky",
    keep: true,
    textSk: "Dôležité kvôli orientácii v odtieňoch a obchodnému použitiu.",
    textEn: "Important for colour orientation and sales support.",
  },
  {
    title: "Korózne systémy ISO",
    href: "/uzitocne/systemy-iso",
    keep: true,
    textSk: "Technicky silná sekcia, ktorú sa oplatí ponechať.",
    textEn: "A technically strong section that is worth keeping.",
  },
  {
    title: "Prevodníky",
    href: "/uzitocne/prevodniky",
    keep: false,
    textSk: "Podľa zadania sa majú zrušiť.",
    textEn: "Should be removed based on the supplied update note.",
  },
  {
    title: "Certifikáty",
    href: "/uzitocne/certifikaty",
    keep: false,
    textSk: "Podľa zadania sa majú zrušiť.",
    textEn: "Should be removed based on the supplied update note.",
  },
];

const initialCalculator: CalculatorInput = {
  area: 225,
  solids: 48,
  dft: 60,
  density: 1.25,
  paintPrice: 4.56,
  thinnerPrice: 2.5,
  thinningPercent: 10,
  lossPercent: 40,
};

function formatNumber(value: number, decimals = 2) {
  if (!Number.isFinite(value)) return "0.00";

  return new Intl.NumberFormat("sk-SK", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

function CalculatorField({
  label,
  value,
  onChange,
  step = 0.01,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
  step?: number;
}) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      <input
        type="number"
        value={Number.isFinite(value) ? value : 0}
        step={step}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}

export function LankwitzerPrototype() {
  const [language, setLanguage] = useState<Language>("sk");
  const [calc, setCalc] = useState<CalculatorInput>(initialCalculator);
  const t = copy[language];

  const results = useMemo(() => {
    const theoreticalCoverage = (10 * calc.solids) / (calc.dft * calc.density);
    const practicalCoverage = theoreticalCoverage * (1 - calc.lossPercent / 100);
    const paintUse = calc.area / practicalCoverage;
    const thinnerUse = paintUse * (calc.thinningPercent / 100);
    const sqmCost =
      (1 / practicalCoverage) * calc.paintPrice +
      (1 / practicalCoverage) * calc.thinnerPrice * (calc.thinningPercent / 100);
    const totalCost = paintUse * calc.paintPrice + thinnerUse * calc.thinnerPrice;

    return {
      theoreticalCoverage,
      practicalCoverage,
      paintUse,
      thinnerUse,
      sqmCost,
      totalCost,
    };
  }, [calc]);

  const keptUsefulItems = usefulItems.filter((item) => item.keep);

  return (
    <main className="prototype-shell">
      <header className="hero-light" id="top">
        <div className="hero-sky" />
        <nav className="topbar topbar-light">
          <a className="brandmark" href="#top">
            <Image
              src="https://lankwitzer.sk/wp-content/uploads/2019/10/Lankwitzer_Logo-2017-RGB.png"
              alt="Lankwitzer logo"
              width={182}
              height={48}
            />
          </a>
          <div className="nav-links nav-links-light">
            {t.nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="language-switch language-switch-light">
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

        <section className="hero-grid hero-grid-light">
          <div className="hero-copy hero-copy-light">
            <h1>{t.heroTitle}</h1>
            <p className="hero-lead hero-lead-light">{t.heroLead}</p>
            <p className="hero-body hero-body-light">{t.heroBody}</p>
            <div className="hero-actions">
              <Link href="#struktura" className="button button-primary">
                {t.heroPrimary}
              </Link>
              <Link href="#kalkulacka" className="button button-soft">
                {t.heroSecondary}
              </Link>
            </div>
            <div className="hero-stats">
              {t.stats.map((item) => (
                <div key={item.label} className="stat-card stat-card-light">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual-light">
            <div className="hero-panel hero-panel-main">
              <Image
                src="https://lankwitzer.sk/wp-content/uploads/2019/08/Produkty-2.jpg"
                alt="Lankwitzer products"
                fill
                sizes="(max-width: 1100px) 100vw, 50vw"
              />
            </div>
            <div className="hero-panel hero-panel-card">
              <span>Produkty</span>
              <p>Rozpúšťadlové, vodou riediteľné, UV laky, EVOkure, protipožiarne nátery a príslušenstvo.</p>
            </div>
          </div>
        </section>
      </header>

      <section className="section-light" id="struktura">
        <div className="section-heading-light">
          <span>01</span>
          <div>
            <h2>{t.sectionPages}</h2>
            <p>{t.sectionPagesLead}</p>
          </div>
        </div>
        <div className="pages-grid">
          {t.pagesIncluded.map((item) => (
            <div key={item} className="page-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-light" id="segmenty">
        <div className="section-heading-light">
          <span>02</span>
          <div>
            <h2>{t.sectionSegments}</h2>
            <p>{t.sectionSegmentsLead}</p>
          </div>
        </div>
        <div className="segment-grid-light">
          {segments.map((segment) => (
            <article key={segment.slug} className="segment-card-light">
              <Image
                src={segment.image}
                alt={segment.title}
                width={900}
                height={600}
                sizes="(max-width: 860px) 100vw, 33vw"
              />
              <div className="segment-card-body">
                <h3>{segment.title}</h3>
                <p>{language === "sk" ? segment.textSk : segment.textEn}</p>
                <a href={segment.pdf} target="_blank" rel="noreferrer" className="segment-link-light">
                  PDF podklad
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-light section-band" id="produkty">
        <div className="section-heading-light">
          <span>03</span>
          <div>
            <h2>{t.sectionProducts}</h2>
            <p>{t.sectionProductsLead}</p>
          </div>
        </div>
        <div className="product-grid-light">
          {productCategories.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{language === "sk" ? item.textSk : item.textEn}</p>
              <span>{item.href}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-light" id="uzitocne">
        <div className="section-heading-light">
          <span>04</span>
          <div>
            <h2>{t.sectionUseful}</h2>
            <p>{t.sectionUsefulLead}</p>
          </div>
        </div>
        <div className="utility-grid">
          {keptUsefulItems.map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{language === "sk" ? item.textSk : item.textEn}</p>
              <span>{item.href}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section-light section-band" id="kalkulacka">
        <div className="section-heading-light">
          <span>05</span>
          <div>
            <h2>{t.calcTitle}</h2>
            <p>{t.calcLead}</p>
          </div>
        </div>
        <div className="calculator-layout">
          <div className="calculator-form-card">
            <div className="calc-grid">
              <CalculatorField
                label={t.labels.area}
                value={calc.area}
                onChange={(value) => setCalc((prev) => ({ ...prev, area: value }))}
              />
              <CalculatorField
                label={t.labels.solids}
                value={calc.solids}
                onChange={(value) => setCalc((prev) => ({ ...prev, solids: value }))}
              />
              <CalculatorField
                label={t.labels.dft}
                value={calc.dft}
                onChange={(value) => setCalc((prev) => ({ ...prev, dft: value }))}
              />
              <CalculatorField
                label={t.labels.density}
                value={calc.density}
                onChange={(value) => setCalc((prev) => ({ ...prev, density: value }))}
              />
              <CalculatorField
                label={t.labels.paintPrice}
                value={calc.paintPrice}
                onChange={(value) => setCalc((prev) => ({ ...prev, paintPrice: value }))}
              />
              <CalculatorField
                label={t.labels.thinnerPrice}
                value={calc.thinnerPrice}
                onChange={(value) => setCalc((prev) => ({ ...prev, thinnerPrice: value }))}
              />
              <CalculatorField
                label={t.labels.thinningPercent}
                value={calc.thinningPercent}
                onChange={(value) => setCalc((prev) => ({ ...prev, thinningPercent: value }))}
              />
              <CalculatorField
                label={t.labels.lossPercent}
                value={calc.lossPercent}
                onChange={(value) => setCalc((prev) => ({ ...prev, lossPercent: value }))}
              />
            </div>
          </div>

          <div className="calculator-results-card">
            <div className="result-card">
              <span>{t.labels.theoretical}</span>
              <strong>{formatNumber(results.theoreticalCoverage)} m2/kg</strong>
            </div>
            <div className="result-card">
              <span>{t.labels.practical}</span>
              <strong>{formatNumber(results.practicalCoverage)} m2/kg</strong>
            </div>
            <div className="result-card">
              <span>{t.labels.paintUse}</span>
              <strong>{formatNumber(results.paintUse)} kg</strong>
            </div>
            <div className="result-card">
              <span>{t.labels.thinnerUse}</span>
              <strong>{formatNumber(results.thinnerUse)} l</strong>
            </div>
            <div className="result-card">
              <span>{t.labels.sqmCost}</span>
              <strong>{formatNumber(results.sqmCost)} EUR</strong>
            </div>
            <div className="result-card result-card-strong">
              <span>{t.labels.totalCost}</span>
              <strong>{formatNumber(results.totalCost)} EUR</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light" id="o-nas">
        <div className="section-heading-light">
          <span>06</span>
          <div>
            <h2>{t.sectionAbout}</h2>
            <p>{t.sectionAboutLead}</p>
          </div>
        </div>
        <div className="about-layout-light">
          <div className="about-copy-light">
            {t.aboutBullets.map((item) => (
              <div key={item} className="about-row-light">
                <div className="about-dot-light" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="about-image-card">
            <Image
              src="https://lankwitzer.sk/wp-content/uploads/2019/08/o-nas-2.jpg"
              alt="O nas"
              width={900}
              height={600}
              sizes="(max-width: 1100px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-light section-band" id="kontakt">
        <div className="section-heading-light">
          <span>07</span>
          <div>
            <h2>{t.sectionContact}</h2>
            <p>{t.sectionContactLead}</p>
          </div>
        </div>
        <div className="contact-grid-light">
          <div className="contact-card-light">
            <span>Firma</span>
            <strong>LANKWITZER SLOVENSKO, s.r.o.</strong>
            <p>Hlavná 194/36, 981 01 Hnúšťa</p>
          </div>
          <div className="contact-card-light">
            <span>Kontakt</span>
            <strong>predaj@lankwitz.sk</strong>
            <p>+421 907 881 499, +421 907 831 745, 047-5423322</p>
          </div>
          <div className="contact-card-light">
            <span>Identifikácia</span>
            <strong>IČO 360 48 330</strong>
            <p>IČ DPH: SK 2020075563</p>
          </div>
        </div>
      </section>
    </main>
  );
}
