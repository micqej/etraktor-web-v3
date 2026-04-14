import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {dataset, projectId, siteUrl, studioUrl} from '@/sanity/env'
import {PresentationNavigator} from '@/sanity/PresentationNavigator'
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

const mainDocuments = [
  {route: '/', type: 'homePage'},
  {route: '/kontakt', type: 'contactPage'},
  {route: '/produkty', type: 'productsPage'},
  {route: '/palety', type: 'palletsPage'},
  {route: '/zariadenia', type: 'devicesPage'},
  {route: '/vyroba', type: 'productionPage'},
] as const

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
        mainDocuments: [...mainDocuments],
        locations: Object.fromEntries(
          Object.entries(pageLocations).map(([type, location]) => [
            type,
            {
              locations: [location],
            },
          ]),
        ),
      },
      components: {
        unstable_navigator: {
          component: PresentationNavigator,
          minWidth: 220,
          maxWidth: 260,
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
