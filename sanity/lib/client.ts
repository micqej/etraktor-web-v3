import {createClient} from 'next-sanity'
import type {ClientConfig} from 'next-sanity'

import {apiVersion, dataset, projectId, token} from '@/sanity/env'

const baseConfig: ClientConfig = {
  apiVersion,
  dataset,
  projectId,
  useCdn: true,
}

export const sanityClient = createClient(baseConfig)

export const previewSanityClient = createClient({
  ...baseConfig,
  token,
  useCdn: false,
  perspective: 'drafts',
})
