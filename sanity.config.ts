import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'next-sanity'

import {dataset, projectId, siteUrl, studioUrl} from '@/sanity/env'
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
        initial: siteUrl,
        previewMode: {
          enable: '/api/draft-mode/enable',
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
