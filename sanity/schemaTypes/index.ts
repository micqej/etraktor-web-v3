import {contactPageType} from '@/sanity/schemaTypes/contactPage'
import {homePageType} from '@/sanity/schemaTypes/homePage'
import {productsPageType} from '@/sanity/schemaTypes/productsPage'
import {siteSettingsType} from '@/sanity/schemaTypes/siteSettings'

export const schemaTypes = [
  siteSettingsType,
  homePageType,
  contactPageType,
  productsPageType,
]
