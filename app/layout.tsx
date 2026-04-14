import type { Metadata } from 'next'
import {draftMode} from 'next/headers'
import {VisualEditing} from 'next-sanity'

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

  return (
    <html lang="sk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
        {isDraftMode ? <VisualEditing /> : null}
      </body>
    </html>
  )
}
