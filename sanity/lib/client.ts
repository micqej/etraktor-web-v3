import {createClient} from 'next-sanity'

import {apiVersion, dataset, projectId, studioUrlAbsolute} from '@/sanity/env'
import {token} from '@/sanity/lib/token'

export function getSanityClient(preview = false) {
  const useDrafts = preview && Boolean(token)

  return createClient({
    apiVersion,
    dataset,
    projectId,
    // This site is small and content correctness matters more than CDN latency.
    // Disabling the Sanity CDN avoids stale published content after client edits.
    useCdn: false,
    perspective: useDrafts ? 'previewDrafts' : 'published',
    stega: {
      // Use an absolute Studio URL so Visual Editing links stay correct on nested routes and Vercel aliases.
      studioUrl: studioUrlAbsolute,
    },
    token: useDrafts ? token : undefined,
  })
}

export const sanityClient = getSanityClient()
