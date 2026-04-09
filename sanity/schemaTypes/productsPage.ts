import {defineArrayMember, defineField, defineType} from 'sanity'

export const productsPageType = defineType({
  name: 'productsPage',
  title: 'Produkty',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'gallery', title: 'Galéria'},
    {name: 'video', title: 'Videá'},
    {name: 'specs', title: 'Parametre'},
  ],
  fields: [
    defineField({name: 'heroEyebrow', title: 'Hero horný text', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitle', title: 'Hero nadpis', type: 'string', group: 'hero'}),
    defineField({name: 'heroAccent', title: 'Hero zvýraznený text', type: 'string', group: 'hero'}),
    defineField({name: 'heroSubtitle', title: 'Hero podnadpis', type: 'string', group: 'hero'}),
    defineField({name: 'heroDescription', title: 'Hero popis', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'heroPrimaryLabel', title: 'Primárne tlačidlo', type: 'string', group: 'hero'}),
    defineField({name: 'heroPrimaryHref', title: 'Primárny odkaz', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryLabel', title: 'Sekundárne tlačidlo', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryHref', title: 'Sekundárny odkaz', type: 'string', group: 'hero'}),
    defineField({
      name: 'heroImage',
      title: 'Hero obrázok',
      type: 'image',
      options: {hotspot: true},
      group: 'hero',
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero štatistiky',
      type: 'array',
      group: 'hero',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Hodnota', type: 'string'}),
            defineField({name: 'label', title: 'Popis', type: 'string'}),
          ],
          preview: {select: {title: 'value', subtitle: 'label'}},
        }),
      ],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galéria obrázkov',
      type: 'array',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
          fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
        }),
      ],
    }),
    defineField({
      name: 'videos',
      title: 'Videá',
      type: 'array',
      group: 'video',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'youtubeId', title: 'YouTube ID', type: 'string'}),
            defineField({name: 'label', title: 'Názov videa', type: 'string'}),
          ],
          preview: {select: {title: 'label', subtitle: 'youtubeId'}},
        }),
      ],
    }),
    defineField({
      name: 'basicSpecs',
      title: 'Základné parametre',
      type: 'array',
      group: 'specs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'parameter', title: 'Parameter', type: 'string'}),
            defineField({name: 'valueA', title: '2×12V DC', type: 'string'}),
            defineField({name: 'valueB', title: '4×12V DC', type: 'string'}),
          ],
          preview: {select: {title: 'parameter', subtitle: 'valueA'}},
        }),
      ],
    }),
  ],
})
