import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Nastavenia webu',
  type: 'document',
  groups: [
    {name: 'branding', title: 'Branding'},
    {name: 'navigation', title: 'Navigácia'},
    {name: 'references', title: 'Referencie'},
    {name: 'contact', title: 'Kontakt'},
    {name: 'legal', title: 'Firemné údaje'},
  ],
  fields: [
    defineField({name: 'siteTitle', title: 'Názov webu', type: 'string', group: 'branding'}),
    defineField({name: 'companyName', title: 'Názov spoločnosti', type: 'string', group: 'branding'}),
    defineField({name: 'domain', title: 'Doména', type: 'url', group: 'branding'}),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {hotspot: true},
      group: 'branding',
    }),
    defineField({name: 'contactLabel', title: 'Text CTA v navigácii', type: 'string', group: 'navigation'}),
    defineField({
      name: 'navItems',
      title: 'Navigačné odkazy',
      type: 'array',
      group: 'navigation',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Text', type: 'string'}),
            defineField({name: 'href', title: 'Odkaz', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),
    defineField({name: 'referencesTag', title: 'Nadpis referencií', type: 'string', group: 'references'}),
    defineField({
      name: 'references',
      title: 'Logá partnerov',
      type: 'array',
      group: 'references',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Logo',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {
            select: {title: 'alt', media: 'image'},
          },
        },
      ],
    }),
    defineField({name: 'contactPerson', title: 'Kontaktná osoba', type: 'string', group: 'contact'}),
    defineField({name: 'phone', title: 'Telefón', type: 'string', group: 'contact'}),
    defineField({name: 'email', title: 'Email', type: 'string', group: 'contact'}),
    defineField({name: 'website', title: 'Web', type: 'url', group: 'contact'}),
    defineField({name: 'address', title: 'Adresa', type: 'text', rows: 3, group: 'contact'}),
    defineField({name: 'ico', title: 'IČO', type: 'string', group: 'legal'}),
    defineField({name: 'dic', title: 'DIČ', type: 'string', group: 'legal'}),
    defineField({name: 'foundedYear', title: 'Rok založenia', type: 'string', group: 'legal'}),
    defineField({
      name: 'footerLinks',
      title: 'Footer odkazy',
      type: 'array',
      group: 'legal',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'label', title: 'Text', type: 'string'}),
            defineField({name: 'href', title: 'Odkaz', type: 'string'}),
          ],
          preview: {
            select: {title: 'label', subtitle: 'href'},
          },
        },
      ],
    }),
    defineField({name: 'footerAddress', title: 'Adresa vo footeri', type: 'string', group: 'legal'}),
    defineField({
      name: 'footerCredit',
      title: 'Text vo footeri',
      type: 'string',
      group: 'legal',
      description: 'Napr. Web vytvorilo Monetico.sk',
    }),
  ],
})
