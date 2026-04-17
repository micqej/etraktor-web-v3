import type { Metadata } from 'next'
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity'

import PreviewProvider from '@/components/PreviewProvider'
import {token} from '@/sanity/lib/token'

import './globals.css'

export const metadata: Metadata = {
  title: 'Etraktor, s.r.o.',
  description: 'Inovatívna spoločnosť v strojárstve. Vývoj, výroba, certifikácia. Elektrický malotraktor ET 2000.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isDraftMode = (await draftMode()).isEnabled
  const content = isDraftMode && token ? <PreviewProvider token={token}>{children}</PreviewProvider> : children

  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {content}
        {isDraftMode ? <VisualEditing /> : null}
      </body>
    </html>
  )
}
