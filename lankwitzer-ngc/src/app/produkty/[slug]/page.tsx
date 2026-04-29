import { notFound } from "next/navigation";

import { productCategories } from "@/lib/lankwitzer-data";

export function generateStaticParams() {
  return productCategories.map((item) => ({ slug: item.slug }));
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = productCategories.find((entry) => entry.slug === slug);

  if (!item) notFound();

  return (
    <section className="page-section">
      <div className="shell narrow-shell">
        <div className="section-heading">
          <span>Produkty</span>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
        <div className="content-panel">
          <p>
            Táto route je pripravená ako základ pre reálnu podstránku. V ďalšom kroku sem dáme technický obsah, fotografie, segmentové využitie, PDF a formulár na dopyt.
          </p>
        </div>
      </div>
    </section>
  );
}
