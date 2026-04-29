export type Segment = {
  title: string;
  slug: string;
  image: string;
  pdf: string;
  text: string;
};

export type ProductCategory = {
  title: string;
  slug: string;
  text: string;
};

export type UtilityItem = {
  title: string;
  slug: string;
  text: string;
  keep: boolean;
};

export const segments: Segment[] = [
  {
    title: "Železnice",
    slug: "railway",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/07/Zeleznice-900x599.jpg",
    pdf: "/client-files/Railway EN.pdf",
    text: "Odolné náterové systémy pre koľajové vozidlá a projekty, kde rozhoduje ochrana, životnosť a vizuál.",
  },
  {
    title: "Automotive",
    slug: "automotive",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/08/Automotive-main-2-900x601.jpg",
    pdf: "/client-files/ACE  EN.pdf",
    text: "Riešenia pre automotive výrobu, priemyselné procesy a náročnú povrchovú kvalitu.",
  },
  {
    title: "ACE",
    slug: "ace",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/07/Automotive-900x599.jpg",
    pdf: "/client-files/ACE  EN.pdf",
    text: "Nátery pre poľnohospodársku, stavebnú a úžitkovú techniku s vyššími požiadavkami na odolnosť.",
  },
  {
    title: "Kontajnery a oceľové konštrukcie",
    slug: "containers",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/06/Kontajnery-OK-3.jpg",
    pdf: "/client-files/TUBE and Pipe EN.pdf",
    text: "Robustné systémy pre oceľové konštrukcie, kontajnery a korózne exponované prostredia.",
  },
  {
    title: "Obaly a plasty",
    slug: "packaging",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/07/PlaSTY-main-900x600.jpg",
    pdf: "/client-files/Packaging EN.pdf",
    text: "Estetické aj funkčné nátery pre plasty, obalové riešenia a vizuálne citlivé aplikácie.",
  },
  {
    title: "Betón",
    slug: "concrete",
    image: "https://lankwitzer.sk/wp-content/uploads/2019/08/Produkty-2.jpg",
    pdf: "/client-files/Beton- EN.pdf",
    text: "Nátery na betón s dôrazom na trvanlivosť, odolnosť voči nečistotám a moderný vzhľad.",
  },
];

export const productCategories: ProductCategory[] = [
  {
    title: "Rozpúšťadlové farby",
    slug: "rozpustadlove-farby",
    text: "Široké spektrum rozpúšťadlových systémov pre priemyselné použitie a náročné prevádzky.",
  },
  {
    title: "Vodou riediteľné farby",
    slug: "vodou-rieditelne-farby",
    text: "Nižšie VOC, čistý technologický smer a vhodné riešenia tam, kde to proces dovoľuje.",
  },
  {
    title: "UV - laky",
    slug: "uv-laky",
    text: "Rýchle vytvrdzovanie a presná kontrola výslednej vrstvy pre efektívnejšie procesy.",
  },
  {
    title: "EVOkure",
    slug: "evokure",
    text: "Produktová línia, ktorú treba na novom webe zreteľne oddeliť a vysvetliť.",
  },
  {
    title: "Protipožiarne nátery",
    slug: "protipoziarne-natery",
    text: "Špecializovaná kategória s dôrazom na technické podklady, dôveru a konzultáciu.",
  },
  {
    title: "Príslušenstvo",
    slug: "prislusenstvo",
    text: "Riedidlá, odmasťovacie prostriedky a doplnkové riešenia pre aplikačný proces.",
  },
];

export const usefulItems: UtilityItem[] = [
  {
    title: "Kalkulácia spotrieb",
    slug: "kalkulacia-spotrieb",
    text: "Interaktívna kalkulačka s vlastnými vstupmi používateľa.",
    keep: true,
  },
  {
    title: "Lesk náterov",
    slug: "lesk-naterov",
    text: "Praktické vysvetlenie základných pojmov a rozdielov v lesku náterových systémov.",
    keep: true,
  },
  {
    title: "Vzorkovník RAL",
    slug: "vzorkovniky",
    text: "Dôležité kvôli orientácii v odtieňoch a obchodnému použitiu.",
    keep: true,
  },
  {
    title: "Korózne systémy ISO",
    slug: "systemy-iso",
    text: "Technicky silná sekcia, ktorú sa oplatí ponechať.",
    keep: true,
  },
];

export const removedItems: UtilityItem[] = [
  {
    title: "Prevodníky",
    slug: "prevodniky",
    text: "Podľa zadania sa majú zrušiť.",
    keep: false,
  },
  {
    title: "Certifikáty",
    slug: "certifikaty",
    text: "Podľa zadania sa majú zrušiť.",
    keep: false,
  },
];

export const aboutBullets = [
  "Naši aplikační technici odporučia a vyladia techniku aj farby pre vaše podmienky, teda farby na mieru.",
  "Vytipujeme optimálne varianty pre výrobu a poskytujeme bezplatné poradenstvo v oblasti povrchových úprav.",
  "Miešanie a tónovanie farieb na zariadení FARB-EXPRESS Just in Time.",
  "Optimalizácia a zefektívnenie lakovacieho procesu vrátane redukcie VOC vo výrobe.",
  "Podpora akreditovaného partnerského laboratória EUCL ako súčasť sekcie O nás.",
];

export const contactDetails = {
  company: "LANKWITZER SLOVENSKO, s.r.o.",
  address: "Hlavná 194/36, 981 01 Hnúšťa",
  ico: "360 48 330",
  icDph: "SK 2020075563",
  phones: ["+421 907 881 499", "+421 907 831 745", "047-5423322"],
  email: "predaj@lankwitz.sk",
};
