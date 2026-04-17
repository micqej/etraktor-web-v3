'use client'

import {LiveQueryProvider} from 'next-sanity/preview'

import {getSanityClient} from '@/sanity/lib/client'

type PreviewProviderProps = {
  children: React.ReactNode
  token: string
}

export default function PreviewProvider({children, token}: PreviewProviderProps) {
  return (
    <LiveQueryProvider client={getSanityClient(true)} token={token}>
      {children}
    </LiveQueryProvider>
  )
}
