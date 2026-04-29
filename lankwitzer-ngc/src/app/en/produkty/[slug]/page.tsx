import { notFound } from "next/navigation";

import { ProductDetailPage } from "@/components/detail-pages";
import { getProductBySlug, productCategories } from "@/lib/lankwitzer-data";

export function generateStaticParams() {
  return productCategories.map((item) => ({ slug: item.slug }));
}

export default async function ProductEnDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getProductBySlug(slug);

  if (!item) notFound();

  return <ProductDetailPage item={item} locale="en" />;
}
