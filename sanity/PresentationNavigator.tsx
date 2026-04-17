'use client'

import {useMemo} from 'react'
import {usePresentationNavigate, usePresentationParams} from 'sanity/presentation'

import {siteUrl} from '@/sanity/env'

const pages = [
  {title: 'Domov', route: '/', id: 'homePage', type: 'homePage'},
  {title: 'Transportné palety', route: '/palety', id: 'palletsPage', type: 'palletsPage'},
  {title: 'Jednoúčelové zariadenia', route: '/zariadenia', id: 'devicesPage', type: 'devicesPage'},
  {title: 'Výroba', route: '/vyroba', id: 'productionPage', type: 'productionPage'},
  {title: 'eTRAKTOR', route: '/produkty', id: 'productsPage', type: 'productsPage'},
  {title: 'Kontakt', route: '/kontakt', id: 'contactPage', type: 'contactPage'},
] as const

export function PresentationNavigator() {
  const navigate = usePresentationNavigate()
  const params = usePresentationParams(false)

  const currentPath = useMemo(() => {
    const preview = params?.preview
    if (!preview) return '/'

    try {
      return new URL(preview, siteUrl).pathname
    } catch {
      return '/'
    }
  }, [params?.preview])

  return (
    <div style={{padding: 12, borderRight: '1px solid #e7e7e7', height: '100%', background: '#fafafa'}}>
      <div style={{fontSize: 12, fontWeight: 600, marginBottom: 10, letterSpacing: 0.3, textTransform: 'uppercase', color: '#6b7280'}}>
        Stranky
      </div>
      <div style={{display: 'grid', gap: 8}}>
        {pages.map((page) => {
          const active = currentPath === page.route

          return (
            <button
              key={page.id}
              onClick={() =>
                navigate(new URL(page.route, siteUrl).toString(), {
                  id: page.id,
                  type: page.type,
                })
              }
              style={{
                appearance: 'none',
                border: active ? '1px solid #111827' : '1px solid #d1d5db',
                borderRadius: 10,
                padding: '10px 12px',
                textAlign: 'left',
                background: active ? '#111827' : '#ffffff',
                color: active ? '#ffffff' : '#111827',
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 600,
              }}
              type="button"
            >
              {page.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
