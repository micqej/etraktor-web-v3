import ProductsPageContent from '@/components/ProductsPageContent'
import {getProductsPage, getSiteSettings} from '@/sanity/lib/content'

export const dynamic = 'force-dynamic'

export default async function ProduktyPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getProductsPage()])

  return <ProductsPageContent page={page} siteSettings={siteSettings} documentId="productsPage" />
}
