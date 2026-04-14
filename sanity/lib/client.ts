import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, studioUrl} from '@/sanity/env'
import {token} from '@/sanity/lib/token'

export function getSanityClient(preview = false) {
  const useDrafts = preview && Boolean(token)

  return createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: !useDrafts,
    perspective: useDrafts ? 'drafts' : 'published',
    stega: {
      studioUrl,
    },
    token: useDrafts ? token : undefined,
  })
}

export const sanityClient = getSanityClient()
