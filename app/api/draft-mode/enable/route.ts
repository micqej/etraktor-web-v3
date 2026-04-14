import {NextResponse} from 'next/server'
import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {getSanityClient} from '@/sanity/lib/client'
import {token} from '@/sanity/lib/token'

const handler = token
  ? defineEnableDraftMode({
      client: getSanityClient().withConfig({token}),
    }).GET
  : async () =>
      NextResponse.json(
        {
          message: 'Missing SANITY_API_READ_TOKEN. Presentation preview will work in published mode only.',
        },
        {status: 500},
      )

export const GET = handler
