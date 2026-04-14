import {contactPageType} from '@/sanity/schemaTypes/contactPage'
import {devicesPageType} from '@/sanity/schemaTypes/devicesPage'
import {homePageType} from '@/sanity/schemaTypes/homePage'
import {palletsPageType} from '@/sanity/schemaTypes/palletsPage'
import {productionPageType} from '@/sanity/schemaTypes/productionPage'
import {productsPageType} from '@/sanity/schemaTypes/productsPage'
import {siteSettingsType} from '@/sanity/schemaTypes/siteSettings'

export const schemaTypes = [
  siteSettingsType,
  homePageType,
  contactPageType,
  productsPageType,
  palletsPageType,
  devicesPageType,
  productionPageType,
]
