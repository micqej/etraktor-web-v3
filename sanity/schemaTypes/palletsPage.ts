import {defineArrayMember, defineField, defineType} from 'sanity'

const pageSectionFields = [
  defineField({name: 'tag', title: 'Tag', type: 'string'}),
  defineField({name: 'title', title: 'Nadpis', type: 'string'}),
  defineField({name: 'description', title: 'Popis', type: 'text', rows: 4}),
  defineField({name: 'buttonLabel', title: 'Tlačidlo - text', type: 'string'}),
  defineField({name: 'buttonHref', title: 'Tlačidlo - odkaz', type: 'string'}),
  defineField({
    name: 'image',
    title: 'Obrázok',
    type: 'image',
    options: {hotspot: true},
  }),
  defineField({
    name: 'imageAlign',
    title: 'Pozícia obrázka',
    type: 'string',
    options: {
      list: [
        {title: 'Vľavo', value: 'left'},
        {title: 'Vpravo', value: 'right'},
      ],
      layout: 'radio',
    },
    initialValue: 'left',
  }),
  defineField({
    name: 'imageFit',
    title: 'Spôsob zobrazenia obrázka',
    type: 'string',
    options: {
      list: [
        {title: 'Contain', value: 'contain'},
        {title: 'Cover', value: 'cover'},
      ],
      layout: 'radio',
    },
    initialValue: 'contain',
  }),
  defineField({
    name: 'bullets',
    title: 'Zoznam bodov',
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
  }),
]

const galleryCardFields = [
  defineField({name: 'title', title: 'Nadpis', type: 'string'}),
  defineField({name: 'description', title: 'Popis', type: 'text', rows: 3}),
  defineField({name: 'alt', title: 'Alt text', type: 'string'}),
  defineField({
    name: 'image',
    title: 'Obrázok',
    type: 'image',
    options: {hotspot: true},
  }),
]

const processStepFields = [
  defineField({name: 'number', title: 'Číslo kroku', type: 'string'}),
  defineField({name: 'title', title: 'Nadpis', type: 'string'}),
  defineField({name: 'description', title: 'Popis', type: 'text', rows: 3}),
]

export const palletsPageType = defineType({
  name: 'palletsPage',
  title: 'Transportné palety',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'sections', title: 'Sekcie'},
    {name: 'gallery', title: 'Galéria'},
    {name: 'process', title: 'Proces'},
    {name: 'cta', title: 'CTA'},
  ],
  fields: [
    defineField({name: 'heroTag', title: 'Hero tag', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitle', title: 'Hero nadpis', type: 'string', group: 'hero'}),
    defineField({name: 'heroDescription', title: 'Hero popis', type: 'text', rows: 4, group: 'hero'}),
    defineField({
      name: 'sections',
      title: 'Obsahové sekcie',
      type: 'array',
      group: 'sections',
      of: [
        defineArrayMember({
          type: 'object',
          fields: pageSectionFields,
          preview: {select: {title: 'title', subtitle: 'tag', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'galleryTag', title: 'Galéria tag', type: 'string', group: 'gallery'}),
    defineField({name: 'galleryTitle', title: 'Galéria nadpis', type: 'string', group: 'gallery'}),
    defineField({name: 'galleryDescription', title: 'Galéria popis', type: 'text', rows: 3, group: 'gallery'}),
    defineField({
      name: 'galleryCards',
      title: 'Galéria kariet',
      type: 'array',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'object',
          fields: galleryCardFields,
          preview: {select: {title: 'title', subtitle: 'description', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'processTag', title: 'Proces tag', type: 'string', group: 'process'}),
    defineField({name: 'processTitle', title: 'Proces nadpis', type: 'string', group: 'process'}),
    defineField({
      name: 'processSteps',
      title: 'Kroky procesu',
      type: 'array',
      group: 'process',
      of: [
        defineArrayMember({
          type: 'object',
          fields: processStepFields,
          preview: {select: {title: 'title', subtitle: 'number'}},
        }),
      ],
    }),
    defineField({name: 'ctaTitle', title: 'CTA nadpis', type: 'string', group: 'cta'}),
    defineField({name: 'ctaText', title: 'CTA text', type: 'text', rows: 3, group: 'cta'}),
    defineField({name: 'ctaButtonLabel', title: 'CTA tlačidlo text', type: 'string', group: 'cta'}),
    defineField({name: 'ctaButtonHref', title: 'CTA tlačidlo odkaz', type: 'string', group: 'cta'}),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroTag',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Obsahová stránka',
        subtitle: subtitle || 'Singleton page',
      }
    },
  },
})
