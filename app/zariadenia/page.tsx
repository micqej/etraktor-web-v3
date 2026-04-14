import type {Metadata} from 'next'

import SimplePageContent from '@/components/SimplePageContent'
import {getDevicesPage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Jednoúčelové zariadenia – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function ZariadeniaPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getDevicesPage()])

  return <SimplePageContent page={page} siteSettings={siteSettings} darkProcess />
}
