import {createImageUrlBuilder} from '@sanity/image-url'

import {sanityClient} from '@/sanity/lib/client'

const builder = createImageUrlBuilder(sanityClient)

export function urlForImage(source: unknown) {
  if (!source) return null

  try {
    return builder.image(source)
  } catch {
    return null
  }
}
