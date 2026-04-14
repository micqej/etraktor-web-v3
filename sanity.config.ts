import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
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
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
