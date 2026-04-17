import {defineArrayMember, defineField, defineType} from 'sanity'

const serviceItemFields = [
  defineField({name: 'tag', title: 'Tag', type: 'string'}),
  defineField({name: 'title', title: 'Nadpis', type: 'string'}),
  defineField({name: 'description', title: 'Popis', type: 'text', rows: 3}),
  defineField({name: 'buttonLabel', title: 'Text tlačidla', type: 'string'}),
  defineField({name: 'buttonHref', title: 'Odkaz tlačidla', type: 'string'}),
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
]

export const homePageType = defineType({
  name: 'homePage',
  title: 'Domovská stránka',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'services', title: 'Služby'},
    {name: 'extras', title: 'Doplnkové služby'},
    {name: 'about', title: 'O spoločnosti'},
    {name: 'cta', title: 'CTA'},
  ],
  fields: [
    defineField({name: 'heroEyebrow', title: 'Hero horný text', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitleLine1', title: 'Hero riadok 1', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitleLine2', title: 'Hero riadok 2', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitleAccent', title: 'Hero zvýraznený text', type: 'string', group: 'hero'}),
    defineField({name: 'heroSubtitle', title: 'Hero podnadpis', type: 'string', group: 'hero'}),
    defineField({name: 'heroDescription', title: 'Hero popis', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'heroPrimaryLabel', title: 'Primárne tlačidlo text', type: 'string', group: 'hero'}),
    defineField({name: 'heroPrimaryHref', title: 'Primárne tlačidlo odkaz', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryLabel', title: 'Sekundárne tlačidlo text', type: 'string', group: 'hero'}),
    defineField({name: 'heroSecondaryHref', title: 'Sekundárne tlačidlo odkaz', type: 'string', group: 'hero'}),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero pozadie',
      type: 'image',
      options: {hotspot: true},
      group: 'hero',
    }),
    defineField({
      name: 'heroProductImage',
      title: 'Hero produktový obrázok',
      type: 'image',
      options: {hotspot: true},
      group: 'hero',
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero štatistiky',
      type: 'array',
      group: 'hero',
      description: 'Štatistiky v spodnej lište hero sekcie.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'value', title: 'Hodnota', type: 'string'}),
            defineField({name: 'label', title: 'Popis', type: 'string'}),
          ],
          preview: {
            select: {title: 'value', subtitle: 'label'},
          },
        }),
      ],
    }),
    defineField({name: 'servicesTag', title: 'Tag sekcie služby', type: 'string', group: 'services'}),
    defineField({name: 'servicesTitle', title: 'Nadpis sekcie služby', type: 'string', group: 'services'}),
    defineField({name: 'servicesDescription', title: 'Popis sekcie služby', type: 'text', rows: 3, group: 'services'}),
    defineField({
      name: 'services',
      title: 'Služby',
      type: 'array',
      group: 'services',
      description: 'Jednotlivé karty na domovskej stránke. Môžete meniť poradie, texty aj obrázky.',
      of: [
        defineArrayMember({
          type: 'object',
          fields: serviceItemFields,
          preview: {
            select: {title: 'title', subtitle: 'tag', media: 'image'},
          },
        }),
      ],
    }),
    defineField({name: 'extrasTag', title: 'Tag sekcie doplnkové služby', type: 'string', group: 'extras'}),
    defineField({name: 'extrasTitle', title: 'Nadpis sekcie doplnkové služby', type: 'string', group: 'extras'}),
    defineField({
      name: 'extras',
      title: 'Položky doplnkových služieb',
      type: 'array',
      group: 'extras',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'aboutTag', title: 'Tag sekcie o spoločnosti', type: 'string', group: 'about'}),
    defineField({name: 'aboutTitle', title: 'Nadpis sekcie o spoločnosti', type: 'string', group: 'about'}),
    defineField({name: 'aboutText', title: 'Text o spoločnosti', type: 'text', rows: 5, group: 'about'}),
    defineField({
      name: 'aboutImage',
      title: 'Obrázok o spoločnosti',
      type: 'image',
      options: {hotspot: true},
      group: 'about',
    }),
    defineField({name: 'aboutIcoLabel', title: 'Popis IČO', type: 'string', group: 'about'}),
    defineField({name: 'aboutIcoValue', title: 'Hodnota IČO', type: 'string', group: 'about'}),
    defineField({name: 'aboutDicLabel', title: 'Popis DIČ', type: 'string', group: 'about'}),
    defineField({name: 'aboutDicValue', title: 'Hodnota DIČ', type: 'string', group: 'about'}),
    defineField({name: 'aboutAddressLabel', title: 'Popis sídla', type: 'string', group: 'about'}),
    defineField({name: 'aboutAddressValue', title: 'Hodnota sídla', type: 'string', group: 'about'}),
    defineField({name: 'ctaTitle', title: 'CTA nadpis', type: 'string', group: 'cta'}),
    defineField({name: 'ctaText', title: 'CTA text', type: 'text', rows: 3, group: 'cta'}),
    defineField({name: 'ctaButtonLabel', title: 'CTA tlačidlo text', type: 'string', group: 'cta'}),
    defineField({name: 'ctaButtonHref', title: 'CTA tlačidlo odkaz', type: 'string', group: 'cta'}),
  ],
  preview: {
    select: {
      title: 'heroTitleAccent',
      subtitle: 'heroSubtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Domovská stránka',
        subtitle: subtitle || 'Homepage singleton',
      }
    },
  },
})
