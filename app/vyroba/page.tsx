import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import LiveQuery from 'next-sanity/preview/live-query'

import SimplePageContent from '@/components/SimplePageContent'
import {getProductionPage, getSiteSettings, productionPageQuery} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Výroba – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function VyrobaPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getProductionPage()])
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <LiveQuery enabled={isDraftMode} query={productionPageQuery} initialData={page} as={SimplePageContent}>
      <SimplePageContent page={page} siteSettings={siteSettings} documentId="productionPage" processAsCards />
    </LiveQuery>
  )
}
