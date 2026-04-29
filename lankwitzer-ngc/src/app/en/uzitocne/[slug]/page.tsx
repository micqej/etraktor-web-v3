import { notFound } from "next/navigation";

import { UsefulDetailPage as UsefulDetailContent } from "@/components/detail-pages";
import { getUtilityBySlug, usefulItems } from "@/lib/lankwitzer-data";

export function generateStaticParams() {
  return usefulItems
    .filter((item) => item.slug !== "kalkulacia-spotrieb")
    .map((item) => ({ slug: item.slug }));
}

export default async function UsefulEnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getUtilityBySlug(slug);

  if (!item || item.slug === "kalkulacia-spotrieb") notFound();

  return <UsefulDetailContent item={item} locale="en" />;
}
