import {draftMode} from 'next/headers'
import LiveQuery from 'next-sanity/preview/live-query'

import ProductsPageContent from '@/components/ProductsPageContent'
import {getProductsPage, getSiteSettings, productsPageQuery} from '@/sanity/lib/content'

export const dynamic = 'force-dynamic'

export default async function ProduktyPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getProductsPage()])
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <LiveQuery enabled={isDraftMode} query={productsPageQuery} initialData={page} as={ProductsPageContent}>
      <ProductsPageContent page={page} siteSettings={siteSettings} documentId="productsPage" />
    </LiveQuery>
  )
}
