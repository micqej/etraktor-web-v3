import {NextResponse} from 'next/server'
import {defineEnableDraftMode} from 'next-sanity/draft-mode'

import {siteUrl} from '@/sanity/env'
import {getSanityClient} from '@/sanity/lib/client'
import {token} from '@/sanity/lib/token'

const handler = token
  ? defineEnableDraftMode({
      client: getSanityClient().withConfig({token}),
    }).GET
  : async () =>
      NextResponse.redirect(siteUrl)

export const GET = handler
