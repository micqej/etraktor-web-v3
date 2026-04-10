import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {previewSanityClient} from '@/sanity/lib/client'

export const {GET} = defineEnableDraftMode({
  client: previewSanityClient,
})
