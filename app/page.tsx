import type {Metadata} from 'next'

import HomePageContent from '@/components/HomePageContent'
import {getHomePage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getHomePage()])

  return <HomePageContent page={page} siteSettings={siteSettings} />
}
