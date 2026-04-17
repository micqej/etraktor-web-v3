import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import LiveQuery from 'next-sanity/preview/live-query'

import SimplePageContent from '@/components/SimplePageContent'
import {devicesPageQuery, getDevicesPage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Jednoúčelové zariadenia – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function ZariadeniaPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getDevicesPage()])
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <LiveQuery enabled={isDraftMode} query={devicesPageQuery} initialData={page} as={SimplePageContent}>
      <SimplePageContent page={page} siteSettings={siteSettings} documentId="devicesPage" darkProcess />
    </LiveQuery>
  )
}
