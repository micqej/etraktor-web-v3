import {redirect} from 'next/navigation'

export const dynamic = 'force-dynamic'

export default function StudioRedirect({
  params,
}: {
  params: {tool?: string[]}
}) {
  const suffix = params.tool?.length ? `/${params.tool.join('/')}` : ''
  redirect(`/admin${suffix}`)
}
