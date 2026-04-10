import {createImageUrlBuilder} from '@sanity/image-url'

import {sanityClient} from '@/sanity/lib/client'

const builder = createImageUrlBuilder(sanityClient)

export function urlForImage(source: unknown) {
  return builder.image(source as any)
}
