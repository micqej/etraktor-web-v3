import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Domov – Etraktor, s.r.o.',
  description: 'Inovatívna spoločnosť v strojárstve.',
}

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Vitajte na etraktor.sk</h1>
    </div>
  )
}
