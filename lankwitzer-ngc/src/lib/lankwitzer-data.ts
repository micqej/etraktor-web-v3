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
    pdf: "/client-files/ACE  EN.pdf",
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
    image: "/client-files/Pozadie Beton.jpg",
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
      sk: "Rozpúšťadlové systémy zostávajú v mnohých prevádzkach najistejšou voľbou, keď treba kombinovať vysokú ochranu, spoľahlivé spracovanie a široký rozsah použitia.",
      en: "Solvent-based systems remain the safest choice in many operations when high protection, reliable application and broad usability must go together.",
    },
    image: "/site-assets/Produkty-2.jpg",
    bannerImage: "/site-assets/Produkty-2.jpg",
    bullets: {
      sk: [
        "Jednozložkové syntetické rýchloschnúce nátery na oceľ.",
        "Prezvárateľné shop-primery s atestom na zváranie.",
        "Tepelne odolné nátery až do 600 °C.",
        "Dvojzložkové epoxy a PUR systémy so zinkfosfátom, zinkovým prachom aj železitou sľudou.",
        "Jednošichtovky pre základný aj krycí náter vrátane plastov a ľahkých kovov.",
      ],
      en: [
        "Single-component quick-drying coatings for steel.",
        "Weldable shop primers with certified welding compatibility.",
        "Heat-resistant coatings up to 600 °C.",
        "Two-component epoxy and PUR systems with zinc phosphate, zinc dust and micaceous iron oxide.",
        "Single-coat systems combining primer and top coat, including for plastics and light metals.",
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
      sk: "Vodou riediteľné náterové systémy dnes ponúkajú parametre, ktoré sú porovnateľné so solventnými alternatívami, pričom znižujú environmentálne zaťaženie výroby.",
      en: "Today, waterbased systems deliver performance comparable to solvent alternatives while lowering the environmental burden of production.",
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
      ],
      en: [
        "Excellent protection and fast drying times.",
        "Negligible emission of volatile compounds into the atmosphere.",
        "Long-term protection for metals and plastics.",
        "Good flexibility and weather resistance.",
        "Suitable for operations reducing VOC without compromising quality.",
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
      sk: "UV laky sú ideálne tam, kde je dôležitá rýchlosť toku výroby, mechanická odolnosť a čo najefektívnejšie využitie materiálu.",
      en: "UV coatings are ideal wherever production speed, mechanical resistance and efficient material usage matter most.",
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
      sk: "Farba je často prvá vec, ktorú zákazník na výrobku vníma. Preto je potrebné mať na webe jasnú orientáciu v odtieňoch a možnostiach tónovania.",
      en: "Colour is often the first thing a customer notices on a product. That is why the website should clearly explain shades and tinting options.",
    },
    bannerImage: "/site-assets/PlaSTY-main-900x600.jpg",
    body: {
      sk: [
        "Štandardne vieme pracovať s odtieňmi RAL a podľa potreby aj s ďalšími vzorkovníkmi podľa zadania.",
        "Miešanie a tónovanie farieb prebieha na zariadení FARB-EXPRESS Just in Time.",
        "Vzorkovník má pomôcť rýchlo zorientovať sa ešte pred technickou konzultáciou.",
      ],
      en: [
        "We standardly work with RAL shades and, if required, with additional reference systems based on customer specifications.",
        "Colour mixing and tinting are handled via the FARB-EXPRESS Just in Time system.",
        "The sampler should help visitors orient themselves before the technical consultation.",
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
      sk: "Pri návrhu povrchovej úpravy je dôležité spojiť korózne prostredie, skladbu systému a požadovanú životnosť do jedného zrozumiteľného odporúčania.",
      en: "When designing a coating system, corrosion environment, system build-up and required service life must be connected into a single clear recommendation.",
    },
    bannerImage: "/site-assets/Kontajnery-OK-3.jpg",
    body: {
      sk: [
        "ISO systémy pomáhajú zvoliť správny počet vrstiev, typ základného aj vrchného náteru a vhodnú DFT.",
        "Pri technických projektoch sú rozhodujúce podklady, ktoré sa dajú jednoducho odovzdať investorovi alebo výrobe.",
        "Táto sekcia má posilniť dôveru a ukázať, že Lankwitzer vie riešiť aj odborne náročné zadania.",
      ],
      en: [
        "ISO systems help define the right number of coats, primer and topcoat types, and the required DFT.",
        "For technical projects, the key is documentation that can be clearly handed over to an investor or production team.",
        "This section should strengthen trust and show that Lankwitzer can handle technically demanding assignments.",
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
      "Nový web staviame na tmavej kontrastnej identite značky, reálnych segmentoch klienta a technickom obsahu, ktorý má obchodnú aj odbornú hodnotu.",
    heroBody:
      "Zachovali sme produkty, užitočné podklady, kontakt a posilnili sekciu O nás tak, aby bolo okamžite jasné, v čom je Lankwitzer silný partner.",
    heroPrimary: "Prejsť na produkty",
    heroSecondary: "Otvoriť kalkulačku",
    heroPanelTitle: "Zachované jadro webu",
    heroPanelText: "Segmenty, produkty, užitočné, kontakt a prepracované O nás podľa klientského dokumentu.",
    segmentsTitle: "Segmenty",
    segmentsHeading: "Šesť kľúčových segmentov na hlavnej stránke",
    segmentsText:
      "Podľa zadania ostávajú Železnice, Automotive, ACE, Kontajnery a oceľové konštrukcie, Obaly a plasty a dopĺňa sa nový segment Betón.",
    productsTitle: "Produkty",
    productsHeading: "Produktové podskupiny ako silné predajné podstránky",
    productsText:
      "Namiesto prázdnych placeholderov majú jednotlivé kategórie vlastný obsah, hlavné benefity a jasné technické zameranie.",
    usefulTitle: "Užitočné",
    usefulHeading: "Užitočné podklady pre výber systému, orientáciu aj kalkuláciu",
    usefulText:
      "V tejto sekcii sú praktické nástroje a technické vysvetlenia, ktoré pomáhajú zákazníkovi rýchlejšie sa zorientovať v spotrebe, lesku, odtieňoch aj koróznych systémoch.",
    aboutTitle: "O nás",
    aboutHeading: "Nie len dodávateľ. Partner pri komplexnom riešení povrchových úprav.",
    aboutText:
      "Laboratórium už nefiguruje ako samostatná stránka, preto jeho expertízu a obchodne najsilnejšie argumenty integrujeme priamo do O nás.",
    contactTitle: "Kontakt",
    contactHeading: "Priamy kontakt pre obchod aj technické konzultácie",
    contactText:
      "Kontaktná stránka musí byť jednoduchá, praktická a okamžite čitateľná. Základné údaje sú preto hore a bez zbytočných bariér.",
    detailBack: "Späť na prehľad",
    detailCTA: "Napísať na predaj",
    detailBenefits: "Hlavné benefity",
    detailUseCases: "Čo táto kategória prináša",
    utilityBodyTitle: "Čo je dôležité vedieť",
    contactCtaTitle: "Potrebujete odporučiť správny systém?",
    contactCtaText: "Napíšte nám zadanie alebo sa ozvite priamo. Web má podporiť rýchly prvý kontakt, nie ho komplikovať.",
    contactCtaButton: "Kontaktovať predaj",
    resultsTitle: "Výstupy kalkulácie",
    calculatorHeading: "Kalkulácia spotrieb",
    calculatorText:
      "Interaktívny výpočet vychádza z poslaného Excelu a je postavený na reálnych vstupoch, ktoré si zákazník zadáva sám.",
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
      "The new website is built around the brand's high-contrast dark identity, the client's real market segments and technical content with both business and expert value.",
    heroBody:
      "We retained products, useful technical resources and contact information, while strengthening the About section to clearly show why Lankwitzer is a strong long-term partner.",
    heroPrimary: "Browse products",
    heroSecondary: "Open calculator",
    heroPanelTitle: "Preserved website core",
    heroPanelText: "Segments, products, technical resources, contact and a redesigned About section based on the client brief.",
    segmentsTitle: "Segments",
    segmentsHeading: "Six core market segments on the homepage",
    segmentsText:
      "According to the brief, Railway, Automotive, ACE, Containers and steel structures, Packaging and plastics stay in place, with Concrete added as a new segment.",
    productsTitle: "Products",
    productsHeading: "Product groups as strong sales-focused subpages",
    productsText:
      "Instead of empty placeholders, every category now has its own content, core benefits and clear technical positioning.",
    usefulTitle: "Useful",
    usefulHeading: "Useful resources for calculation, orientation and technical decisions",
    usefulText:
      "This section brings together practical tools and technical guidance that help customers understand consumption, gloss, colour selection and ISO corrosion systems.",
    aboutTitle: "About",
    aboutHeading: "Not just a supplier. A partner for complete surface finishing solutions.",
    aboutText:
      "The laboratory no longer exists as a standalone page, so its expertise and the strongest commercial arguments are integrated directly into About.",
    contactTitle: "Contact",
    contactHeading: "Direct contact for sales and technical consultation",
    contactText:
      "The contact page should be simple, practical and instantly readable. Core company details therefore come first without unnecessary barriers.",
    detailBack: "Back to overview",
    detailCTA: "Write to sales",
    detailBenefits: "Key benefits",
    detailUseCases: "What this category brings",
    utilityBodyTitle: "What matters most",
    contactCtaTitle: "Need help choosing the right system?",
    contactCtaText: "Send us your brief or reach out directly. The website should accelerate first contact, not slow it down.",
    contactCtaButton: "Contact sales",
    resultsTitle: "Calculation output",
    calculatorHeading: "Consumption calculation",
    calculatorText:
      "This interactive calculation is based on the supplied Excel file and uses real-world inputs that the customer defines directly.",
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
