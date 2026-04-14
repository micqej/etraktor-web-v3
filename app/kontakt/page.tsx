import ContactPageContent from '@/components/ContactPageContent'
import {getContactPage, getSiteSettings} from '@/sanity/lib/content'

export const dynamic = 'force-dynamic'

export default async function KontaktPage() {
  const [siteSettings, page] = await Promise.all([getSiteSettings(), getContactPage()])

  return <ContactPageContent page={page} siteSettings={siteSettings} documentId="contactPage" />
}
