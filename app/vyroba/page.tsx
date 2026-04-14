import type {Metadata} from 'next'

import SimplePageContent from '@/components/SimplePageContent'
import {getProductionPage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Výroba – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function VyrobaPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getProductionPage()])

  return <SimplePageContent page={page} siteSettings={siteSettings} processAsCards />
}
