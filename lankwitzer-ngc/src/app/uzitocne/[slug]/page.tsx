import { notFound } from "next/navigation";

import { usefulItems } from "@/lib/lankwitzer-data";

export function generateStaticParams() {
  return usefulItems
    .filter((item) => item.slug !== "kalkulacia-spotrieb")
    .map((item) => ({ slug: item.slug }));
}

export default async function UsefulDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = usefulItems.find((entry) => entry.slug === slug && entry.slug !== "kalkulacia-spotrieb");

  if (!item) notFound();

  return (
    <section className="page-section">
      <div className="shell narrow-shell">
        <div className="section-heading">
          <span>Užitočné</span>
          <h1>{item.title}</h1>
          <p>{item.text}</p>
        </div>
        <div className="content-panel">
          <p>
            Táto podstránka je pripravená ako miesto pre finálny odborný obsah. Sem vieme v ďalšom kroku natiahnuť texty zo starého webu a upratať ich do modernejšej prezentácie.
          </p>
        </div>
      </div>
    </section>
  );
}
