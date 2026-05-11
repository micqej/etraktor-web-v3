export type Locale = "sk" | "en";

type LocalizedString = {
  sk: string;
  en: string;
};

type LocalizedStringArray = {
  sk: string[];
  en: string[];
};

export type Segment = {
  slug: string;
  title: LocalizedString;
  text: LocalizedString;
  image: string;
  pdf: string;
};

export type ProductCategory = {
  slug: string;
  title: LocalizedString;
  kicker: LocalizedString;
  summary: LocalizedString;
  intro: LocalizedString;
  image: string;
  bannerImage: string;
  bullets: LocalizedStringArray;
  highlights: LocalizedStringArray;
};

export type UtilityItem = {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  intro: LocalizedString;
  bannerImage: string;
  body: LocalizedStringArray;
};

export const contactDetails = {
  company: "LANKWITZER SLOVENSKO, s.r.o.",
  address: "Hlavná 194/36, 981 01 Hnúšťa",
  ico: "360 48 330",
  icDph: "SK 2020075563",
  phones: ["+421 907 881 499", "+421 907 831 745", "047-5423322"],
  fax: "047-5211133",
  email: "predaj@lankwitz.sk",
};

export const segments: Segment[] = [
  {
    slug: "railway",
    title: { sk: "Železnice", en: "Railway" },
    text: {
      sk: "Odolné náterové systémy pre koľajové vozidlá a projekty, kde rozhoduje ochrana, životnosť a vizuál.",
      en: "Durable coating systems for rail vehicles and projects where protection, service life and finish are critical.",
    },
    image: "/site-assets/Zeleznice-900x599.jpg",
    pdf: "/client-files/Railway EN.pdf",
  },
  {
    slug: "automotive",
    title: { sk: "Automotive", en: "Automotive" },
    text: {
      sk: "Riešenia pre automotive výrobu, priemyselné procesy a náročnú povrchovú kvalitu.",
      en: "Solutions for automotive production, industrial workflows and demanding surface quality standards.",
    },
    image: "/site-assets/Automotive-main-2-900x601.jpg",
    pdf: "/client-files/Mobility EN.pdf",
  },
  {
    slug: "ace",
    title: { sk: "ACE", en: "ACE" },
    text: {
      sk: "Nátery pre poľnohospodársku, stavebnú a úžitkovú techniku s vyššími požiadavkami na odolnosť.",
      en: "Coatings for agricultural, construction and commercial machinery with elevated durability requirements.",
    },
    image: "/site-assets/Automotive-900x599.jpg",
    pdf: "/client-files/ACE EN.pdf",
  },
  {
    slug: "containers",
    title: { sk: "Kontajnery a oceľové konštrukcie", en: "Containers and steel structures" },
    text: {
      sk: "Robustné systémy pre oceľové konštrukcie, kontajnery a korózne exponované prostredia.",
      en: "Robust systems for steel structures, containers and corrosion-exposed environments.",
    },
    image: "/site-assets/Kontajnery-OK-3.jpg",
    pdf: "/client-files/TUBE and Pipe EN.pdf",
  },
  {
    slug: "packaging",
    title: { sk: "Obaly a plasty", en: "Packaging and plastics" },
    text: {
      sk: "Estetické aj funkčné nátery pre plasty, obalové riešenia a vizuálne citlivé aplikácie.",
      en: "Aesthetic and functional coatings for plastics, packaging solutions and appearance-driven applications.",
    },
    image: "/site-assets/PlaSTY-main-900x600.jpg",
    pdf: "/client-files/Packaging EN.pdf",
  },
  {
    slug: "concrete",
    title: { sk: "Betón", en: "Concrete" },
    text: {
      sk: "Naše nátery na betón kombinujú trvanlivosť s moderným vzhľadom a chránia povrch aj pri vysokej prevádzke.",
      en: "Our concrete coatings combine durability with a modern finish and protect surfaces even in high-traffic areas.",
    },
    image: "/site-assets/Pozadie-Beton.jpg",
    pdf: "/client-files/Beton- EN.pdf",
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "rozpustadlove-farby",
    title: { sk: "Rozpúšťadlové farby", en: "Solvent coatings" },
    kicker: { sk: "Osvedčená klasika", en: "Established classic" },
    summary: {
      sk: "Najširšie používané náterové systémy pre oceľ, plasty, zinok aj hliník.",
      en: "The most widely used coating systems for steel, plastics, zinc and aluminium.",
    },
    intro: {
      sk: "Ešte stále pomerovo najširšie používané náterové systémy sú nátery postavené na báze rozpúšťadiel. Dokážu poskytnúť ochranu od tej najzákladnejšej až po najnáročnejšiu na takmer všetky druhy povrchov: plasty, zinok, hliník či oceľ.",
      en: "Solvent-based systems remain the most widely used coating type. They deliver protection ranging from basic to the most demanding across nearly all substrate types: plastics, zinc, aluminium and steel.",
    },
    image: "/site-assets/Produkty-2.jpg",
    bannerImage: "/site-assets/Produkty-2.jpg",
    bullets: {
      sk: [
        "Jednozložkové syntetické rýchloschnúce nátery na oceľ.",
        "Prezvárateľné shop-primery s atestom na zváranie (SHOP-PRIMER).",
        "Tepelné nátery na vysoké teploty až do 600 °C.",
        "Dvojzložkové epoxy aj PUR s obsahom zinkfosfátu, zinkového prachu alebo železitej sľudy.",
        "Vysokosušinové systémy HIGH-SOLID.",
        "Jednovrstvové farby (jednošichtovky) – základný aj krycí náter v jednom, aj na plasty a ľahké kovy.",
        "Alkydové, PVC-alkydové aj 2K epoxy/akryl-polyuretánové s protikoróznou pigmentáciou.",
      ],
      en: [
        "Single-component quick-drying coatings for steel.",
        "Weldable shop primers with certified welding compatibility (SHOP-PRIMER).",
        "Heat-resistant coatings up to 600 °C.",
        "Two-component epoxy and PUR with zinc phosphate, zinc dust or micaceous iron oxide.",
        "High-solids systems (HIGH-SOLID).",
        "Single-coat systems combining primer and topcoat, also for plastics and light metals.",
        "Alkyd, PVC-alkyd and 2K epoxy/acrylic-polyurethane with anticorrosion pigmentation.",
      ],
    },
    highlights: {
      sk: ["Široký záber povrchov", "Overené priemyselné systémy", "Riešenia aj pre náročné korózne prostredie"],
      en: ["Wide substrate range", "Proven industrial systems", "Solutions for demanding corrosion environments"],
    },
  },
  {
    slug: "vodou-rieditelne-farby",
    title: { sk: "Vodou riediteľné farby", en: "Waterbased coating systems" },
    kicker: { sk: "Nižšie VOC", en: "Lower VOC" },
    summary: {
      sk: "Moderné ekologické systémy s výbornou ochranou, rýchlym schnutím a zanedbateľným obsahom VOC.",
      en: "Modern ecological systems with excellent protection, fast drying and negligible VOC content.",
    },
    intro: {
      sk: "Moderné vodou riediteľné náterové systémy búrajú mnoho predsudkov z minulosti. Poskytujú výborné ochranné vlastnosti, rýchle doby zasychania a ceny porovnateľné s rozpúšťadlovými nátermi – pri zanedbateľnom obsahu VOC. Dostupné ako epoxidy, polyuretány aj alkydy.",
      en: "Modern waterbased coating systems challenge many past prejudices. They deliver excellent protection, fast drying times and prices comparable to solvent-based alternatives – with negligible VOC content. Available as epoxies, polyurethanes and alkyds.",
    },
    image: "/site-assets/PlaSTY-main-900x600.jpg",
    bannerImage: "/site-assets/PlaSTY-main-900x600.jpg",
    bullets: {
      sk: [
        "Výborné ochranné vlastnosti a rýchle doby zasychania.",
        "Zanedbateľná emisia prchavých látok do atmosféry.",
        "Dlhodobá ochrana kovov aj plastov.",
        "Dobrá pružnosť a odolnosť voči poveternostným vplyvom.",
        "Vhodné pre prevádzky, ktoré chcú znižovať VOC bez kompromisu v kvalite.",
        "Vlastnosťami často dokážu prekonať ich rozpúšťadlové varianty.",
      ],
      en: [
        "Excellent protection and fast drying times.",
        "Negligible emission of volatile compounds into the atmosphere.",
        "Long-term protection for metals and plastics.",
        "Good flexibility and weather resistance.",
        "Suitable for operations reducing VOC without compromising quality.",
        "Often match or exceed the performance of their solvent-based counterparts.",
      ],
    },
    highlights: {
      sk: ["Ekologickejší proces", "Silný výkon", "Moderný výrobný smer"],
      en: ["Greener process", "Strong performance", "Modern production direction"],
    },
  },
  {
    slug: "uv-laky",
    title: { sk: "UV laky", en: "UV coatings" },
    kicker: { sk: "Maximálna efektivita", en: "Maximum efficiency" },
    summary: {
      sk: "Extrémne rýchle vytvrdzovanie, vysoké výrobné rýchlosti a veľmi nízka stratovosť.",
      en: "Extremely fast curing, high production speeds and very low material loss.",
    },
    intro: {
      sk: "Naše UV laky nadchýnajú stále viac zákazníkov svojimi vlastnosťami. Vytvorenie filmu sa uskutočňuje prostredníctvom vysokoenergetického UV svetla – za niekoľko sekúnd polymerizácia vedie k vytvoreniu vytvrdeného filmu. Na základe tohto rýchleho schnutia sú realizovateľné najvyššie výrobné rýchlosti a možné rýchle ďalšie spracovanie výrobkov.",
      en: "Our UV coatings win over more customers every year. Film formation takes place via high-energy UV light — within seconds, polymerisation results in a fully cured film. This rapid cure enables the highest production speeds and immediate downstream processing.",
    },
    image: "/site-assets/skuska_rury-900x619.jpg",
    bannerImage: "/site-assets/skuska_rury-900x619.jpg",
    bullets: {
      sk: [
        "Polymerizácia prebieha v priebehu niekoľkých sekúnd.",
        "Veľmi dobré mechanické vlastnosti a protikorózna ochrana.",
        "Prakticky bez obsahu rozpúšťadiel.",
        "Veľmi nízka spotreba energie pri schnutí.",
        "Takmer 100 % využiteľnosť laku a nízka spotreba materiálu.",
      ],
      en: [
        "Polymerisation takes place within seconds.",
        "Very good mechanical properties and corrosion protection.",
        "Practically solvent-free.",
        "Very low energy demand during curing.",
        "Nearly 100% coating utilisation and low material consumption.",
      ],
    },
    highlights: {
      sk: ["Rýchly ďalší proces", "Nižšia stratovosť", "Silná ekologická stopa"],
      en: ["Fast downstream processing", "Lower loss", "Strong sustainability profile"],
    },
  },
  {
    slug: "evokure",
    title: { sk: "EVOkure", en: "EVOkure" },
    kicker: { sk: "Inovácia pre budúcnosť", en: "Innovation for the future" },
    summary: {
      sk: "Patentovaná technológia bez izokyanátov s vysokou sušinou, rýchlym schnutím a extrémnou odolnosťou.",
      en: "Patented isocyanate-free technology with high solids, fast drying and extreme resistance.",
    },
    intro: {
      sk: "EvoKure je nový krok v technológii povrchových úprav. Nevyžaduje špeciálnu aplikačnú techniku, no prináša kombináciu parametrov, ktorú bežné konvenčné nátery neponúkajú.",
      en: "EvoKure is the next step in coating technology. It does not require special application equipment, yet delivers a combination of properties unavailable in conventional coatings.",
    },
    image: "/site-assets/EVO-AMG.jpg",
    bannerImage: "/site-assets/EVO-AMG.jpg",
    bullets: {
      sk: [
        "Bez obsahu izokyanátov a so zanedbateľným VOC.",
        "Obsah sušiny na úrovni 80 % a viac.",
        "Extrémna UV, chemická a mechanická odolnosť.",
        "Rýchle zasychanie a rýchla expedícia výrobkov.",
        "Cena za meter štvorcový porovnateľná alebo nižšia než pri konvenčných 2K systémoch.",
      ],
      en: [
        "Free of isocyanates and with negligible VOC.",
        "Solids content of 80% or higher.",
        "Extreme UV, chemical and mechanical resistance.",
        "Fast drying and quick goods dispatch.",
        "Square-metre cost comparable to or lower than conventional 2K systems.",
      ],
    },
    highlights: {
      sk: ["Bez špeciálnych investícií", "Silná produktivita", "User-friendly technológia"],
      en: ["No special capital investment", "Strong productivity", "User-friendly technology"],
    },
  },
  {
    slug: "protipoziarne-natery",
    title: { sk: "Protipožiarne nátery", en: "Fire protection coatings" },
    kicker: { sk: "Dôvera a protokoly", en: "Trust and compliance" },
    summary: {
      sk: "Certifikované intumescentné systémy pre ochranu ocele s protipožiarnou odolnosťou R15 až R60.",
      en: "Certified intumescent systems for steel protection with fire resistance from R15 to R60.",
    },
    intro: {
      sk: "Táto kategória potrebuje jasné vysvetlenie, technické podklady a dôveru. Preto ju na novom webe staviame ako samostatný odborný blok.",
      en: "This category needs clear explanation, technical documentation and trust. That is why we present it as a dedicated expert section on the new website.",
    },
    image: "/site-assets/Kontajnery-OK-3.jpg",
    bannerImage: "/site-assets/Kontajnery-OK-3.jpg",
    bullets: {
      sk: [
        "Vodou riediteľné aj rozpúšťadlové intumescentné systémy.",
        "Požiarna odolnosť od R15 po R60 podľa ETAG 018.",
        "Rýchle dodanie a komplexné poradenstvo.",
        "Kompletný protokol pre investora.",
      ],
      en: [
        "Waterbased and solventborne intumescent systems.",
        "Fire resistance from R15 to R60 according to ETAG 018.",
        "Fast delivery and end-to-end consulting.",
        "Complete investor documentation package.",
      ],
    },
    highlights: {
      sk: ["Certifikované systémy", "Technická podpora", "Investor-ready výstupy"],
      en: ["Certified systems", "Technical support", "Investor-ready outputs"],
    },
  },
  {
    slug: "prislusenstvo",
    title: { sk: "Príslušenstvo", en: "Accessories" },
    kicker: { sk: "Dôležitý doplnok procesu", en: "Critical process support" },
    summary: {
      sk: "Riedidlá, odmasťovacie prostriedky a doplnkové riešenia, ktoré udržia aplikáciu pod kontrolou.",
      en: "Thinners, degreasers and support solutions that keep application under control.",
    },
    intro: {
      sk: "V sortimente nie sú len laky a nátery. Rovnako dôležitý je aj celý doplnkový servis okolo prípravy povrchu, čistenia a aplikačného procesu.",
      en: "The portfolio is not only about paints and coatings. The full support layer around surface preparation, cleaning and application is just as important.",
    },
    image: "/site-assets/Produkty-2.jpg",
    bannerImage: "/site-assets/Produkty-2.jpg",
    bullets: {
      sk: [
        "Riedidlá pre jednotlivé systémy a technologické postupy.",
        "Odmasťovacie prostriedky na prípravu podkladu aj náradia.",
        "Doplnky pre stabilnejší a čistejší aplikačný proces.",
        "Podpora pri výbere správnej kombinácie pre konkrétnu prevádzku.",
      ],
      en: [
        "Thinners for specific systems and technological procedures.",
        "Degreasers for substrate preparation and equipment cleaning.",
        "Support products for cleaner and more stable application.",
        "Guidance on the right combination for each operation.",
      ],
    },
    highlights: {
      sk: ["Čistejší proces", "Lepšia príprava podkladu", "Jedno miesto pre celý systém"],
      en: ["Cleaner process", "Better substrate preparation", "One source for the full system"],
    },
  },
];

export const usefulItems: UtilityItem[] = [
  {
    slug: "kalkulacia-spotrieb",
    title: { sk: "Kalkulácia spotrieb", en: "Consumption calculation" },
    summary: {
      sk: "Interaktívna kalkulačka s vlastnými vstupmi používateľa pre rýchly odhad spotreby a ceny.",
      en: "Interactive calculator with user-defined inputs for fast consumption and cost estimates.",
    },
    intro: {
      sk: "Pri stanovení ceny náteru nie je rozhodujúca len cena za kilogram, ale reálna spotreba na meter štvorcový pri konkrétnej hrúbke, hustote a stratovosti.",
      en: "When evaluating coating cost, the key factor is not price per kilogram alone but the real consumption per square metre at a given thickness, density and loss factor.",
    },
    bannerImage: "/site-assets/Automotive-main-2-900x601.jpg",
    body: {
      sk: [
        "Zadajte plochu, objemový obsah sušiny, DFT, hustotu, cenu farby, cenu riedidla, riedenie a koeficient strát.",
        "Výsledkom je teoretická aj praktická výdatnosť, spotreba farby, spotreba riedidla, cena za meter štvorcový a celková cena.",
      ],
      en: [
        "Enter area, volume solids, DFT, density, paint price, thinner price, thinning rate and loss coefficient.",
        "The output gives theoretical and practical coverage, paint consumption, thinner consumption, cost per square metre and total cost.",
      ],
    },
  },
  {
    slug: "lesk-naterov",
    title: { sk: "Lesk náterov", en: "Coating gloss level" },
    summary: {
      sk: "Praktické vysvetlenie základných pojmov a rozdielov v lesku náterových systémov.",
      en: "A practical explanation of the core terms and differences between coating gloss levels.",
    },
    intro: {
      sk: "V technickej aj obchodnej komunikácii je dôležité rozumieť tomu, čo znamená mat, pololesk alebo vysoký lesk a ako to vplýva na výsledný vzhľad povrchu.",
      en: "In technical and commercial communication, it is important to understand what matt, semi-gloss or high gloss really mean and how they affect the final appearance.",
    },
    bannerImage: "/site-assets/Automotive-main-2-900x601.jpg",
    body: {
      sk: [
        "Lesk povrchu sa vyhodnocuje podľa toho, koľko svetla sa od povrchu odráža pri definovaných podmienkach merania.",
        "Rozdiely v lesku vplývajú nielen na vizuál, ale aj na to, ako povrch odhaľuje nerovnosti, znečistenie a stopy používania.",
        "Pri výbere systému sa oplatí riešiť lesk už v návrhu, nie až na konci realizácie.",
      ],
      en: [
        "Surface gloss is evaluated by the amount of light reflected under defined measurement conditions.",
        "Gloss level affects not only appearance but also how the surface reveals imperfections, dirt and wear traces.",
        "It is best to define gloss during system design rather than at the end of execution.",
      ],
    },
  },
  {
    slug: "vzorkovniky",
    title: { sk: "Vzorkovník RAL", en: "RAL colour sampler" },
    summary: {
      sk: "Rýchla orientácia v odtieňoch pre obchodné aj výrobné použitie.",
      en: "Fast orientation in colour shades for commercial and production use.",
    },
    intro: {
      sk: "Pozor: vzorkovník RAL slúži iba orientačne, nakoľko reálny odtieň môže skresľovať individuálne nastavenie monitora, uhol náhľadu a osvetlenie. Ak chcete skutočný referenčný vzorkovník, kontaktujte nás.",
      en: "Please note: the RAL colour sampler is for orientation purposes only. The actual shade may differ due to individual monitor settings, viewing angle and lighting. For a real reference sampler, please contact us.",
    },
    bannerImage: "/site-assets/PlaSTY-main-900x600.jpg",
    body: {
      sk: [
        "Štandardne vieme pracovať s odtieňmi RAL, prípadne RAL Design, STN, ČSN, British Standard a ďalšími podľa zadania.",
        'Miešanie a tónovanie farieb prebieha na zariadení FARB-EXPRESS "Just in Time".',
        "Dodanie na miesto určenia do 24 hodín.",
        "Ak potrebujete konkrétny odtieň, kontaktujte nás – poradíme a odtieň namiešame presne podľa požiadavky.",
      ],
      en: [
        "We work with RAL, RAL Design, STN, ČSN, British Standard and other reference systems as required.",
        "Colour mixing and tinting via the FARB-EXPRESS Just in Time system.",
        "Delivery to your location within 24 hours.",
        "If you need a specific shade, contact us — we will advise and mix it to your exact specification.",
      ],
    },
  },
  {
    slug: "systemy-iso",
    title: { sk: "Korózne systémy ISO", en: "ISO corrosion systems" },
    summary: {
      sk: "Technicky silná sekcia pre orientáciu v koróznych triedach, skladbe systému a očakávanej životnosti.",
      en: "A technically strong section for understanding corrosion classes, system build-up and expected service life.",
    },
    intro: {
      sk: "Norma ISO 12944 definuje korózne prostredia (C1–C5, Im) a predpisuje skladbu náterového systému na dosiahnutie požadovanej životnosti. Správna voľba systému závisí od kombinácie koróznej triedy, podkladu, spôsobu aplikácie a požiadaviek investora.",
      en: "ISO 12944 defines corrosion categories (C1–C5, Im) and prescribes the coating system build-up needed to achieve the required service life. The right system depends on the combination of corrosion class, substrate, application method and investor requirements.",
    },
    bannerImage: "/site-assets/Kontajnery-OK-3.jpg",
    body: {
      sk: [
        "C1 (veľmi nízka) – interiéry s vykurovaním, napr. kancelárske budovy.",
        "C2 (nízka) – atmosféry s nízkou úrovňou znečistenia, vidiecke oblasti.",
        "C3 (stredná) – mestské a priemyselné prostredia s miernym SO₂, pobrežné oblasti s nízkou salinitou.",
        "C4 (vysoká) – priemyselné oblasti a pobrežné oblasti s miernou salinitou.",
        "C5 (veľmi vysoká) – priemyselné oblasti s vysokou vlhkosťou a agresívnou atmosférou alebo pobrežné oblasti s vysokou salinitou.",
        "Im – ponorné prostredia (sladká voda, morská voda, pôda).",
        "Na základe koróznej triedy a požadovanej životnosti (L: 2–5 r. / M: 5–15 r. / H: 15+ r.) vieme odporučiť optimálny náterový systém s konkrétnou DFT a počtom vrstiev.",
      ],
      en: [
        "C1 (very low) – heated interiors, e.g. office buildings.",
        "C2 (low) – atmospheres with low pollution levels, rural areas.",
        "C3 (medium) – urban and industrial environments with moderate SO₂, low-salinity coastal areas.",
        "C4 (high) – industrial areas and coastal areas with moderate salinity.",
        "C5 (very high) – industrial areas with high humidity and aggressive atmosphere or high-salinity coastal areas.",
        "Im – immersion environments (fresh water, sea water, soil).",
        "Based on corrosion category and required durability (L: 2–5 y. / M: 5–15 y. / H: 15+ y.) we recommend the optimal coating system with specific DFT and number of coats.",
      ],
    },
  },
];

export const removedItems = [
  { slug: "prevodniky", title: { sk: "Prevodníky", en: "Converters" }, summary: { sk: "Podľa zadania sa majú zrušiť.", en: "To be removed according to the brief." } },
  { slug: "certifikaty", title: { sk: "Certifikáty", en: "Certificates" }, summary: { sk: "Podľa zadania sa majú zrušiť.", en: "To be removed according to the brief." } },
];

export const aboutBullets: LocalizedStringArray = {
  sk: [
    "Naši aplikační technici odporučia a vyladia striekaciu techniku aj farby pre vaše podmienky, teda farby na mieru.",
    "Vytipujeme optimálne varianty pre výrobu a potreby a poskytujeme bezplatné poradenstvo pri otázkach v oblasti povrchových úprav.",
    "Miešanie a tónovanie farieb na zariadení FARB-EXPRESS Just in Time.",
    "Prítomnosť aplikačného technika podľa dohody s kvalifikovanou písomnou správou a zaškolením pracovníkov.",
    "Optimalizácia a zefektívnenie lakovacieho procesu vrátane redukcie VOC vo výrobe.",
    "Podpora akreditovaného partnerského laboratória EUCL ako súčasť sekcie O nás.",
  ],
  en: [
    "Our application technicians adjust spraying equipment and coating systems to your specific conditions, creating tailored coating solutions.",
    "We identify the optimal options for your production and provide free consultancy in the field of surface finishing.",
    "Colour mixing and tinting via the FARB-EXPRESS Just in Time system.",
    "Application technician presence by agreement, including written reporting and operator training.",
    "Optimisation of the coating process, including VOC reduction in production.",
    "Support from the accredited partner laboratory EUCL as part of the About section.",
  ],
};

export const siteCopy = {
  sk: {
    siteTitle: "Lankwitzer Slovensko",
    langSwitch: "EN",
    homeHref: "/",
    productsHref: "/produkty",
    usefulHref: "/uzitocne",
    aboutHref: "/o-nas",
    contactHref: "/kontakt",
    calculatorHref: "/uzitocne/kalkulacia-spotrieb",
    heroEyebrow: "Komplexné riešenia povrchových úprav",
    heroTitle: "Nátery, technické poradenstvo a riešenia na mieru pre priemysel.",
    heroLead:
      "Komplexné náterové systémy, technické poradenstvo a riešenia na mieru pre priemyselnú výrobu.",
    heroBody:
      "Segmenty, produkty, technické podklady a kalkulačka spotreby na jednom mieste.",
    heroPrimary: "Prejsť na produkty",
    heroSecondary: "Otvoriť kalkulačku",
    heroPanelTitle: "Komplexné riešenia",
    heroPanelText: "Segmenty, produkty, kalkulačka, poradenstvo a technická podpora na jednom mieste.",
    segmentsTitle: "Segmenty",
    segmentsHeading: "Segmenty, v ktorých pôsobíme",
    segmentsText:
      "Pokrývame kľúčové priemyselné segmenty od železníc a automotive až po betón a oceľové konštrukcie.",
    productsTitle: "Produkty",
    productsHeading: "Naše produktové skupiny",
    productsText:
      "Široké portfólio náterových systémov pre rôzne povrchy, technológie a priemyselné požiadavky.",
    usefulTitle: "Užitočné",
    usefulHeading: "Technické podklady a nástroje",
    usefulText:
      "Praktické nástroje a technické podklady pre kalkuláciu spotreby, výber odtieňov aj koróznych systémov.",
    aboutTitle: "O nás",
    aboutHeading: "Nie len dodávateľ. Partner pri komplexnom riešení povrchových úprav.",
    aboutText:
      "Sme firma s dlhoročnou tradíciou a skúsenosťami v najrôznejších segmentoch a druhoch náterov s pobočkami po celom svete. Nie sme len výrobcom a predajcom, ale hlavne partnerom pri komplexnom riešení vašich povrchových úprav. Neplatíte za to čo vyhodíte, ale za to čo zabezpečuje ochranu vašich produktov.",
    contactTitle: "Kontakt",
    contactHeading: "Priamy kontakt pre obchod aj technické konzultácie",
    contactText:
      "Sme tu pre rýchly prvý kontakt aj hlbšiu technickú konzultáciu. Ozvite sa nám.",
    detailBack: "Späť na prehľad",
    detailCTA: "Napísať na predaj",
    detailBenefits: "Hlavné benefity",
    detailUseCases: "O tejto kategórii",
    utilityBodyTitle: "Čo je dôležité vedieť",
    contactCtaTitle: "Potrebujete odporučiť správny systém?",
    contactCtaText: "Napíšte nám zadanie alebo sa ozvite priamo. Odpovedáme spravidla do 24 hodín.",
    contactCtaButton: "Kontaktovať predaj",
    resultsTitle: "Výstupy kalkulácie",
    calculatorHeading: "Kalkulácia spotrieb",
    calculatorText:
      "Zadajte parametre náteru a kalkulačka vypočíta reálnu spotrebu, cenu na meter štvorcový aj celkovú cenu.",
    footerTagline: "Partner pre priemyselné nátery, technické poradenstvo a riešenia na mieru.",
    footerProducts: "Produktové skupiny",
    footerUseful: "Užitočné odkazy",
    footerContact: "Kontakt",
    formTitle: "Napíšte nám",
    formText: "Jednoduchý dopytový formulár pre rýchly prvý kontakt. Odoslanie momentálne pripraví e-mail na adresu predaja.",
    formName: "Meno a priezvisko",
    formCompany: "Firma",
    formEmail: "E-mail",
    formPhone: "Telefón",
    formMessage: "Správa",
    formSubmit: "Pripraviť dopyt",
  },
  en: {
    siteTitle: "Lankwitzer Slovakia",
    langSwitch: "SK",
    homeHref: "/en",
    productsHref: "/en/produkty",
    usefulHref: "/en/uzitocne",
    aboutHref: "/en/o-nas",
    contactHref: "/en/kontakt",
    calculatorHref: "/en/uzitocne/kalkulacia-spotrieb",
    heroEyebrow: "Complex surface finishing solutions",
    heroTitle: "Premium coating systems for industry.",
    heroLead:
      "Complete coating systems, technical consultancy and tailored solutions for industrial production.",
    heroBody:
      "Segments, products, technical resources and consumption calculator in one place.",
    heroPrimary: "Browse products",
    heroSecondary: "Open calculator",
    heroPanelTitle: "Complete solutions",
    heroPanelText: "Segments, products, calculator, consultancy and technical support in one place.",
    segmentsTitle: "Segments",
    segmentsHeading: "The segments we work in",
    segmentsText:
      "We cover key industrial segments from railway and automotive to concrete and steel structures.",
    productsTitle: "Products",
    productsHeading: "Our product groups",
    productsText:
      "A wide portfolio of coating systems for different substrates, technologies and industrial requirements.",
    usefulTitle: "Useful",
    usefulHeading: "Technical resources and tools",
    usefulText:
      "Practical tools and technical guides for consumption calculation, colour selection and corrosion systems.",
    aboutTitle: "About",
    aboutHeading: "Not just a supplier. A partner for complete surface finishing solutions.",
    aboutText:
      "We are a company with a long tradition and expertise across the widest range of coating segments, with branches worldwide. We are not just a manufacturer and seller, but above all a partner in the complete solution of your surface finishing needs. You pay for what protects your products, not for what you discard.",
    contactTitle: "Contact",
    contactHeading: "Direct contact for sales and technical consultation",
    contactText:
      "We are here for fast first contact and deeper technical consultation. Get in touch.",
    detailBack: "Back to overview",
    detailCTA: "Write to sales",
    detailBenefits: "Key benefits",
    detailUseCases: "About this category",
    utilityBodyTitle: "What matters most",
    contactCtaTitle: "Need help choosing the right system?",
    contactCtaText: "Send us your brief or reach out directly. We typically respond within 24 hours.",
    contactCtaButton: "Contact sales",
    resultsTitle: "Calculation output",
    calculatorHeading: "Consumption calculation",
    calculatorText:
      "Enter your coating parameters and the calculator will estimate real consumption, cost per square metre and total project cost.",
    footerTagline: "Partner for industrial coatings, technical consultancy and tailored solutions.",
    footerProducts: "Product groups",
    footerUseful: "Useful links",
    footerContact: "Contact",
    formTitle: "Write to us",
    formText: "A simple enquiry form for fast first contact. Submission currently prepares an email to the sales address.",
    formName: "Full name",
    formCompany: "Company",
    formEmail: "Email",
    formPhone: "Phone",
    formMessage: "Message",
    formSubmit: "Prepare enquiry",
  },
};

export function getProductBySlug(slug: string) {
  return productCategories.find((item) => item.slug === slug);
}

export function getUtilityBySlug(slug: string) {
  return usefulItems.find((item) => item.slug === slug);
}

export function getLocalePath(locale: Locale, path: string) {
  return locale === "sk" ? path : `/en${path === "/" ? "" : path}`;
}
