import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {defineDocuments, presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'

import {dataset, projectId, studioUrl} from '@/sanity/env'
import {schemaTypes} from '@/sanity/schemaTypes'
import {structure} from '@/sanity/structure'

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
        initial: async ({origin}) => `${origin}/`,
      },
      resolve: {
        mainDocuments: defineDocuments([
          {
            route: '/',
            type: 'homePage',
          },
        ]),
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
