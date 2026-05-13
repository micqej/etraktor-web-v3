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

export type ProductSection = {
  title: LocalizedString;
  bullets: LocalizedStringArray;
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
  sections?: ProductSection[];
  highlights: LocalizedStringArray;
};

export type ContentTable = {
  title: LocalizedString;
  headers: string[];
  rows: string[][];
};

export type UtilityItem = {
  slug: string;
  title: LocalizedString;
  summary: LocalizedString;
  intro: LocalizedString;
  bannerImage: string;
  contentImage?: string;
  contentImageContain?: boolean;
  body: LocalizedStringArray;
  highlights?: LocalizedStringArray;
  tables?: ContentTable[];
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
    title: { sk: "Automotive a E-mobilita", en: "Automotive & E-mobility" },
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
    bullets: { sk: [], en: [] },
    sections: [
      {
        title: { sk: "Jednozložkové nátery", en: "Single-component coatings" },
        bullets: {
          sk: [
            "Syntetické rýchlo schnúce na oceľ.",
            "Prezvárateľné s atestom na zváranie tzv. SHOP-PRIMER.",
            "Tepelné na vysoké teploty do 600 °C.",
          ],
          en: [
            "Synthetic quick-drying for steel.",
            "Weldable with welding certification, so-called SHOP-PRIMER.",
            "Heat-resistant for high temperatures up to 600 °C.",
          ],
        },
      },
      {
        title: { sk: "Dvojzložkové nátery", en: "Two-component coatings" },
        bullets: {
          sk: [
            "Epoxy aj PUR s obsahom zinkfosfátu na oceľ.",
            "Epoxidové s obsahom zinkového prachu.",
            "Epoxidové so železitou sľudou.",
            "Vysokosušinové HIGH-SOLID.",
          ],
          en: [
            "Epoxy and PUR with zinc phosphate for steel.",
            "Epoxy with zinc dust content.",
            "Epoxy with micaceous iron oxide.",
            "High-solids HIGH-SOLID systems.",
          ],
        },
      },
      {
        title: { sk: "Jednovrstvové farby – tzv. Jednošichtovky (základný aj krycí náter v jednom) aj na plasty a ľahké kovy", en: "Single-coat systems (primer and topcoat in one) – also for plastics and light metals" },
        bullets: {
          sk: [
            "Alkydové s protikoróznou pigmentáciou.",
            "PVC-alkydové s protikoróznou pigmentáciou.",
            "Epoxy aj akryl-polyuretánové 2-zložkové.",
          ],
          en: [
            "Alkyd with anticorrosion pigmentation.",
            "PVC-alkyd with anticorrosion pigmentation.",
            "Epoxy and acrylic-polyurethane 2-component.",
          ],
        },
      },
    ],
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
    bullets: { sk: [], en: [] },
    sections: [
      {
        title: { sk: "Výkon náteru", en: "Coating performance" },
        bullets: {
          sk: ["Extrémna UV, chemická a mechanická odolnosť s konvenčnými dvojzložkovými systémami."],
          en: ["Extreme UV, chemical and mechanical resistance comparable to conventional two-component systems."],
        },
      },
      {
        title: { sk: "Produktivita", en: "Productivity" },
        bullets: {
          sk: ["Nízka procesná hustota.", "Obsah sušiny ≥ 80 %.", "Vysoká výdatnosť."],
          en: ["Low process density.", "Solids content ≥ 80%.", "High yield."],
        },
      },
      {
        title: { sk: "Voliteľná spracovateľnosť", en: "Flexible processability" },
        bullets: {
          sk: ["Použiteľný medzi smenami.", "Vytvrdzovanie bez nutnosti prisušovania."],
          en: ["Usable between shifts.", "Curing without forced drying required."],
        },
      },
      {
        title: { sk: "Priaznivý k životnému prostrediu", en: "Environmentally friendly" },
        bullets: {
          sk: ["Bez izokyanátov.", "Nízky obsah VOC."],
          en: ["Free of isocyanates.", "Low VOC content."],
        },
      },
      {
        title: { sk: "Ekonomika", en: "Economics" },
        bullets: {
          sk: ["Cena náteru na 1 m² je porovnateľná až nižšia v porovnaní s konvenčnými dvojzložkovými systémami."],
          en: ["Cost per 1 m² is comparable to or lower than conventional two-component systems."],
        },
      },
      {
        title: { sk: "User friendly", en: "User friendly" },
        bullets: {
          sk: ["Nízka škodlivosť pre používateľov aj životné prostredie.", "Nevyžaduje špeciálnu aplikačnú techniku ani investície."],
          en: ["Low hazard for users and the environment.", "No special application equipment or investment required."],
        },
      },
    ],
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
      sk: "Intumescentné nátery sú špeciálne systémy, ktoré pri požiari napenia a vytvoria izolačnú vrstvu chrániacu konštrukciu. Používajú sa na oceľové nosné konštrukcie podľa požiadaviek projektovej dokumentácie.",
      en: "Intumescent coatings are special systems that foam up under fire, forming an insulating layer that protects the structure. They are applied to load-bearing steel structures in accordance with project documentation requirements.",
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
      sk: "V rámci nášho sortimentu dokážeme zabezpečiť a dodať aj striekaciu techniku a ďalšie príslušenstvo potrebné pri aplikácii od renomovaných a overených výrobcov. Ak to náhodou predsa len nemáme, ozvite sa a odporučíme niekoho, kto Vám vyhovie.",
      en: "As part of our product range, we can supply spraying equipment and other accessories required for application from reputable and proven manufacturers. If we do not have it in stock, contact us and we will recommend a supplier that suits your needs.",
    },
    image: "/site-assets/Produkty-2.jpg",
    bannerImage: "/site-assets/Produkty-2.jpg",
    bullets: {
      sk: [
        "Striekacie zariadenia Airmix a Airless.",
        "Striekacie pištole.",
        "Trysky.",
        "Filtre a filtračné sitá.",
        "Filtre striekacích kabín.",
        "Pravítka na meranie tuženia.",
        "Viskozimetre.",
        "Hrúbkomery mokrej aj suchej hrúbky náteru.",
      ],
      en: [
        "Airmix and Airless spray equipment.",
        "Spray guns.",
        "Nozzles.",
        "Filters and filter screens.",
        "Spray booth filters.",
        "Pot life measuring rulers.",
        "Viscometers.",
        "Wet and dry film thickness gauges.",
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
      sk: "Niekedy samotná voľba lesku náteru dokáže úplne zmeniť to, ako bude výrobok nakoniec vyzerať. Lesk sa meria v % a stupňoch pri konkrétnom uhle merania. Spravidla platí, že čím je lesk vyšší, tým viac svetla reflektuje od podkladu.",
      en: "Sometimes the gloss level alone can completely change how a finished product looks. Gloss is measured in % at a specific measurement angle. As a rule, the higher the gloss, the more light is reflected from the surface.",
    },
    bannerImage: "/site-assets/Produkty-2.jpg",
    body: {
      sk: [
        "Lesklé nátery sa tiež lepšie leštia a čistia od potenciálneho znečistenia. Na druhej strane však zvýrazňujú nedostatky podkladu a predprípravy.",
        "Matné nátery dokážu do istej miery zakryť nedostatky podkladu a nie sú také náročné na kvalitu aplikácie. Pri znečistení je však náročnejšie očistiť takto lakovaný podklad v porovnaní s lesklými.",
        "Správna voľba stupňa lesku závisí od účelu použitia výrobku, požiadaviek zákazníka a podmienok prostredia, v ktorom bude výrobok nasadený.",
      ],
      en: [
        "Glossy coatings are easier to polish and clean from contamination. However, they tend to highlight surface imperfections and inadequate substrate preparation.",
        "Matt coatings can conceal substrate defects to some extent and are less demanding on application quality. On the other hand, cleaning a matt-coated surface is more difficult compared to glossy finishes.",
        "The right gloss level depends on the product's end use, customer requirements and the environment in which it will be deployed.",
      ],
    },
    tables: [
      {
        title: {
          sk: "Stupne lesku pri 60° – ISO 2813",
          en: "Gloss levels at 60° – ISO 2813",
        },
        headers: ["Stupeň lesku", "Hodnota lesku (%)"],
        rows: [
          ["Hlboký mat", "< 5 %"],
          ["Mat", "6 – 10 %"],
          ["Polomat", "11 – 40 %"],
          ["Pololesk", "41 – 70 %"],
          ["Lesk", "71 – 90 %"],
          ["Vysoký lesk", "91 – 97 %"],
        ],
      },
    ],
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
    contentImage: "/site-assets/RAL-vzorkovnik.jpg",
    contentImageContain: true,
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
        "Jednotlivé korózne triedy sa následne delia na 4 stupne podľa očakávanej životnosti náteru: L (nízka) – menej ako 7 rokov, M (stredná) – 7–15 rokov, H (vysoká) – 15–25 rokov, VH (veľmi vysoká) – 25+ rokov.",
        "Pre návrh konkrétneho náterového systému kontaktujte našich obchodných zástupcov, ktorí nastavia návrh presne podľa vašich potrieb.",
      ],
      en: [
        "Each corrosion category is further divided into 4 durability classes based on expected service life: L (low) – less than 7 years, M (medium) – 7–15 years, H (high) – 15–25 years, VH (very high) – 25+ years.",
        "For a specific coating system proposal, contact our sales representatives who will tailor the system to your exact requirements.",
      ],
    },
    tables: [
      {
        title: {
          sk: "Rozdelenie koróznych tried podľa normy EN ISO 12944",
          en: "Corrosion category classification according to EN ISO 12944",
        },
        headers: ["Stupeň koróznej agresivity", "Príklad typického exteriérového prostredia", "Príklad typického interiérového prostredia"],
        rows: [
          ["C1\nveľmi nízka", "—", "Vykurované budovy ako školy, hotely, kancelárie."],
          ["C2\nnízka", "Atmosféra s veľmi nízkou úrovňou znečistenia, prevažne prostredie vidieka, prepravné nátery.", "Nevykurované budovy, kde môže dochádzať ku kondenzácii ako sú sklady a športové haly."],
          ["C3\nstredná", "Mestské priemyselné atmosféry s miernym znečistením SO₂, prímorské prostredie s nízkou salinitou.", "Výrobné priestory s vysokou vlhkosťou a malým znečistením ovzdušia ako sú výroby poživatín."],
          ["C4\nvysoká", "Priemyselné prostredie a prímorské prostredie s nižšou salinitou.", "Chemické závody, plavecké bazény, lodenice a prímorské doky."],
          ["C5\nveľmi vysoká", "Priemyselné prostredie s vysokou vlhkosťou a agresívnou atmosférou, prímorské prostredie.", "Budovy alebo prostredia s prevažne trvalou kondenzáciou a s vysokým znečistením ovzdušia."],
          ["CX\nextrémne vysoká", "Morské prostredie s extrémnou vysokou salinitou, silne znečistené priemyselné prostredia s vysokou teplotou.", "Budovy alebo prostredia s prevažne trvalou kondenzáciou, vysokou salinitou a veľmi agresívnou atmosférou."],
        ],
      },
      {
        title: {
          sk: "Hrúbky a príklady 1K alkydových náterových systémov na oceľ pre jednotlivé korózne prostredia",
          en: "Thicknesses and examples of 1K alkyd coating systems for steel for individual corrosion environments",
        },
        headers: ["Stupeň koróznej agresivity", "Návrh náterového systému", "Celková hrúbka systému (μ)", "Životnosť"],
        rows: [
          ["C1\nveľmi nízka", "EvoCor380/EvoProtect 384", "80", "L"],
          ["C2\nnízka", "EvoCor380/EvoProtect 384", "80", "L"],
          ["C2\nnízka", "EvoCor380/EvoProtect 384", "100", "M"],
          ["C2\nnízka", "EvoCor380/EvoProtect 384", "160", "H"],
          ["C2\nnízka", "EvoCor380/EvoProtect 384", "200", "VH"],
          ["C3\nstredná", "EvoCor380/EvoProtect 384", "100", "L"],
          ["C3\nstredná", "EvoCor380/EvoProtect 384", "160", "M"],
          ["C3\nstredná", "EvoCor380/EvoProtect 384", "200", "H"],
          ["C3\nstredná", "EvoCor380/EvoProtect 384", "260", "VH"],
          ["C4\nvysoká", "EvoCor380/EvoProtect 384", "160", "L"],
          ["C4\nvysoká", "EvoCor380/EvoProtect 384", "200", "M"],
          ["C4\nvysoká", "EvoCor380/EvoProtect 384", "260", "H"],
          ["C4\nvysoká", "—", "nerealizovateľné", "VH"],
        ],
      },
      {
        title: {
          sk: "Hrúbky a príklady 2K dvojzložkových náterových systémov na oceľ pre jednotlivé korózne prostredia",
          en: "Thicknesses and examples of 2K two-component coating systems for steel for individual corrosion environments",
        },
        headers: ["Stupeň koróznej agresivity", "Návrh náterového systému", "Celková hrúbka systému (μ)", "Zinkový náter (μ)", "Životnosť"],
        rows: [
          ["C1 veľmi nízka", "EvoCor 130/EvoProtect 281", "60", "60", "L"],
          ["C2 nízka", "EvoCor 130/EvoProtect 281", "60", "60", "L"],
          ["C2 nízka", "EvoCor 130/EvoProtect 281", "80", "60", "M"],
          ["C2 nízka", "EvoCor 130/EvoProtect 281", "100", "60", "H"],
          ["C2 nízka", "EvoCor 130/EvoProtect 281", "180", "60", "VH"],
          ["C3 stredná", "EvoCor 130/EvoProtect 281", "100", "60", "L"],
          ["C3 stredná", "EvoCor 130/EvoProtect 281", "120", "60", "M"],
          ["C3 stredná", "EvoCor 130/EvoProtect 281", "180", "160", "H"],
          ["C3 stredná", "EvoCor 130/EvoProtect 281", "240", "200", "VH"],
          ["C4 vysoká", "EvoCor 130/EvoProtect 281", "120", "60", "L"],
          ["C4 vysoká", "EvoCor 130/EvoProtect 281", "180", "160", "M"],
          ["C4 vysoká", "EvoCor 130/EvoProtect 281", "240", "200", "H"],
          ["C4 vysoká", "EvoCor 130/EvoProtect 281", "300", "260", "VH"],
          ["C5 veľmi vysoká", "EvoCor 130/EvoProtect 281", "180", "160", "L"],
          ["C5 veľmi vysoká", "EvoCor 130/EvoProtect 281", "240", "200", "M"],
          ["C5 veľmi vysoká", "EvoCor 130/EvoProtect 281", "300", "260", "H"],
          ["C5 veľmi vysoká", "EvoCor 130/EvoProtect 281", "360", "320", "VH"],
        ],
      },
    ],
  },
];

export const removedItems = [
  { slug: "prevodniky", title: { sk: "Prevodníky", en: "Converters" }, summary: { sk: "Podľa zadania sa majú zrušiť.", en: "To be removed according to the brief." } },
  { slug: "certifikaty", title: { sk: "Certifikáty", en: "Certificates" }, summary: { sk: "Podľa zadania sa majú zrušiť.", en: "To be removed according to the brief." } },
];

export const aboutBullets: LocalizedStringArray = {
  sk: [
    "Naši aplikační technici odporučia a vyladia striekaciu techniku a naše farby pre vaše podmienky – robíme FARBY NA MIERU.",
    "Vytipujeme optimálne varianty pre vašu výrobu a potreby.",
    "Miešanie a tónovanie farieb na zariadení FARB-EXPRESS „Just in Time“.",
    "Štandardne v odtieňoch RAL, prípadne RAL Design, STN, ČSN, British Standard a ďalších podľa zadania.",
    "Dodanie na miesto určenia do 24 hodín.",
    "Optimalizácia a zefektívnenie lakovacieho procesu.",
    "Minimalizácia a redukcia VOC vo vašej výrobe.",
    "Poskytujeme bezplatné poradenstvo pri otázkach v oblasti povrchových úprav.",
    "Prítomnosť aplikačného technika podľa dohody s kvalifikovanou písomnou správou.",
    "Zaškolenie pracovníkov pre aplikáciu.",
    "Kontrola lesku, farebných vlastností, hrúbok náteru, mriežková skúška a adhézne kontroly povrchovej úpravy priamo na mieste.",
    "Naše partnerské akreditované laboratórium EUCL dokáže vykonať široké spektrum testov a pomôcť vám overiť kvalitu povrchovej úpravy vašich výrobkov.",
  ],
  en: [
    "Our application technicians recommend and fine-tune spraying equipment and coatings for your conditions – we create COATINGS TAILORED TO YOU.",
    "We identify optimal options for your production and requirements.",
    "Colour mixing and tinting via the FARB-EXPRESS Just in Time system.",
    "Standardly in RAL shades, or RAL Design, STN, ČSN, British Standard and others as specified.",
    "Delivery to the specified location within 24 hours.",
    "Optimisation and streamlining of the coating process.",
    "Minimisation and reduction of VOC in your production.",
    "We provide FREE CONSULTANCY on surface finishing questions.",
    "Application technician attendance by agreement with a qualified written report.",
    "Training of staff for application.",
    "On-site inspection of gloss, colour properties, coating thickness, cross-cut test and adhesion checks.",
    "Our accredited partner laboratory EUCL can perform a wide range of tests to help you verify the quality of the surface finish on your products.",
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
    heroTitle: "Nátery, technické poradenstvo a riešenia na mieru pre priemysel",
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
      "Sme firma s dlhoročnou tradíciou a skúsenosťami v najrôznejších segmentoch a druhoch náterov s pobočkami po celom svete. Nie sme len výrobcom a predajcom, ale hlavne partnerom pri komplexnom riešení vašich povrchových úprav.",
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
    heroTitle: "Premium coating systems for industry",
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
