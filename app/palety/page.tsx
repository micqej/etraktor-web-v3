import type {Metadata} from 'next'

import SimplePageContent from '@/components/SimplePageContent'
import {getPalletsPage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Transportné palety – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function PaletyPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getPalletsPage()])

  return <SimplePageContent page={page} siteSettings={siteSettings} documentId="palletsPage" />
}
