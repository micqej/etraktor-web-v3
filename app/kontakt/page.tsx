import type {Metadata} from 'next'
import {draftMode} from 'next/headers'
import LiveQuery from 'next-sanity/preview/live-query'

import ContactPageContent from '@/components/ContactPageContent'
import {contactPageQuery, getContactPage, getSiteSettings} from '@/sanity/lib/content'

export const metadata: Metadata = {
  title: 'Kontakt – Etraktor, s.r.o.',
}

export const dynamic = 'force-dynamic'

export default async function KontaktPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getContactPage()])
  const isDraftMode = (await draftMode()).isEnabled

  return (
    <LiveQuery enabled={isDraftMode} query={contactPageQuery} initialData={page} as={ContactPageContent}>
      <ContactPageContent page={page} siteSettings={siteSettings} documentId="contactPage" />
    </LiveQuery>
  )
}
