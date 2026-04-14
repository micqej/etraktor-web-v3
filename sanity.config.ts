import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {dataset, projectId, siteUrl, studioUrl} from '@/sanity/env'
import {schemaTypes} from '@/sanity/schemaTypes'
import {structure} from '@/sanity/structure'

const pageLocations = {
  homePage: {title: 'Domov', href: '/'},
  contactPage: {title: 'Kontakt', href: '/kontakt'},
  productsPage: {title: 'Produkty', href: '/produkty'},
  palletsPage: {title: 'Transportne palety', href: '/palety'},
  devicesPage: {title: 'Jednoucelove zariadenia', href: '/zariadenia'},
  productionPage: {title: 'Vyroba', href: '/vyroba'},
  siteSettings: {title: 'Domov', href: '/'},
} as const

export default defineConfig({
  name: 'default',
  title: 'Etraktor Admin',
  projectId,
  dataset,
  basePath: studioUrl,
  plugins: [
    structureTool({structure}),
    presentationTool({
      previewUrl: {
        initial: siteUrl,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
      resolve: {
        locations: Object.fromEntries(
          Object.entries(pageLocations).map(([type, location]) => [
            type,
            {
              locations: [location],
            },
          ]),
        ),
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
