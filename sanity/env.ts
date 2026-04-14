export const apiVersion = '2026-04-09'

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || 'eypnbw53'

export const studioUrl = '/admin'

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SANITY_STUDIO_PREVIEW_URL ||
  'https://etraktor-web-v3.vercel.app'
