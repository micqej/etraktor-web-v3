import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import LiveQuery from 'next-sanity/preview/live-query'

import SimplePageContent from '@/components/SimplePageContent'
import {getPalletsPage, getSiteSettings, palletsPageQuery} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Transportné palety – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function PaletyPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getPalletsPage()])
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <LiveQuery enabled={isDraftMode} query={palletsPageQuery} initialData={page} as={SimplePageContent}>
      <SimplePageContent page={page} siteSettings={siteSettings} documentId="palletsPage" />
    </LiveQuery>
  )
}
