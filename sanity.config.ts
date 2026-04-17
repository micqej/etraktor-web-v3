import {defineConfig} from 'sanity'
import {defineLocations, presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {dataset, projectId, siteUrl, studioUrl} from '@/sanity/env'
import {PresentationNavigator} from '@/sanity/PresentationNavigator'
import {schemaTypes} from '@/sanity/schemaTypes'
import {structure} from '@/sanity/structure'

const pageLocations = {
  homePage: defineLocations({
    select: {title: 'heroTitleAccent'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Domov', href: '/'}]}),
  }),
  contactPage: defineLocations({
    select: {title: 'heroTitle'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Kontakt', href: '/kontakt'}]}),
  }),
  productsPage: defineLocations({
    select: {title: 'heroTitle'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Produkty', href: '/produkty'}]}),
  }),
  palletsPage: defineLocations({
    select: {title: 'heroTitle'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Transportné palety', href: '/palety'}]}),
  }),
  devicesPage: defineLocations({
    select: {title: 'heroTitle'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Jednoúčelové zariadenia', href: '/zariadenia'}]}),
  }),
  productionPage: defineLocations({
    select: {title: 'heroTitle'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Výroba', href: '/vyroba'}]}),
  }),
  siteSettings: defineLocations({
    select: {title: 'siteTitle'},
    resolve: (doc) => ({locations: [{title: doc?.title || 'Nastavenia webu', href: '/'}]}),
  }),
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
        locations: pageLocations,
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
