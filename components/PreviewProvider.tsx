'use client'

import {LiveQueryProvider} from 'next-sanity/preview'

import {sanityClient} from '@/sanity/lib/client'

type PreviewProviderProps = {
  children: React.ReactNode
  token: string
}

export default function PreviewProvider({children, token}: PreviewProviderProps) {
  return (
    <LiveQueryProvider client={sanityClient} token={token}>
      {children}
    </LiveQueryProvider>
  )
}
