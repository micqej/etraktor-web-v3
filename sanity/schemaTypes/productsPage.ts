import {defineArrayMember, defineField, defineType} from 'sanity'

const productDownloadFields = [
  defineField({name: 'label', title: 'Názov dokumentu', type: 'string'}),
  defineField({
    name: 'file',
    title: 'Súbor',
    type: 'file',
    options: {accept: '.pdf,.doc,.docx,.xls,.xlsx,.zip'},
  }),
]

const productMediaFields = [
  defineField({name: 'title', title: 'Nadpis sekcie', type: 'string'}),
  defineField({
    name: 'images',
    title: 'Obrázky',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'image',
        options: {hotspot: true},
        fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
      }),
    ],
  }),
]

const productCatalogFields = [
  defineField({name: 'badge', title: 'Badge / tag', type: 'string'}),
  defineField({name: 'title', title: 'Názov produktu', type: 'string'}),
  defineField({name: 'subtitle', title: 'Podnadpis', type: 'string'}),
  defineField({name: 'description', title: 'Popis', type: 'text', rows: 5}),
  defineField({
    name: 'image',
    title: 'Hlavný obrázok',
    type: 'image',
    options: {hotspot: true},
  }),
  defineField({name: 'imageAlt', title: 'Alt text obrázka', type: 'string'}),
  defineField({
    name: 'highlights',
    title: 'Zvýraznené body',
    type: 'array',
    of: [defineArrayMember({type: 'string'})],
  }),
  defineField({name: 'documentsTitle', title: 'Nadpis dokumentov', type: 'string'}),
  defineField({
    name: 'documents',
    title: 'Dokumenty na stiahnutie',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'object',
        fields: productDownloadFields,
        preview: {select: {title: 'label', subtitle: 'file.asset.originalFilename'}},
      }),
    ],
  }),
  defineField({name: 'videosTitle', title: 'Nadpis videí', type: 'string'}),
  defineField({
    name: 'videos',
    title: 'Videá',
    type: 'array',
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
  defineField({name: 'galleryTitle', title: 'Nadpis galérie', type: 'string'}),
  defineField({
    name: 'galleryImages',
    title: 'Galéria obrázkov',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'image',
        options: {hotspot: true},
        fields: [defineField({name: 'alt', title: 'Alt text', type: 'string'})],
      }),
    ],
  }),
  defineField({name: 'specsTitle', title: 'Nadpis parametrov', type: 'string'}),
  defineField({
    name: 'specs',
    title: 'Parametre',
    type: 'array',
    of: [
      defineArrayMember({
        type: 'object',
        fields: [
          defineField({name: 'parameter', title: 'Parameter', type: 'string'}),
          defineField({name: 'value', title: 'Hodnota', type: 'string'}),
        ],
        preview: {select: {title: 'parameter', subtitle: 'value'}},
      }),
    ],
  }),
]

export const productsPageType = defineType({
  name: 'productsPage',
  title: 'Produkty',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'intro', title: 'Úvod'},
    {name: 'catalog', title: 'Produktové sekcie'},
    {name: 'benefits', title: 'Výhody'},
    {name: 'dimensions', title: 'Rozmery'},
    {name: 'gallery', title: 'Galéria'},
    {name: 'video', title: 'Videá'},
    {name: 'specs', title: 'Parametre'},
    {name: 'cta', title: 'CTA'},
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
    defineField({name: 'introTag', title: 'Tag úvodu', type: 'string', group: 'intro'}),
    defineField({name: 'introTitle', title: 'Nadpis úvodu', type: 'string', group: 'intro'}),
    defineField({
      name: 'introParagraphs',
      title: 'Odseky úvodu',
      type: 'array',
      group: 'intro',
      of: [defineArrayMember({type: 'text'})],
    }),
    defineField({
      name: 'introImage',
      title: 'Úvodný obrázok',
      type: 'image',
      options: {hotspot: true},
      group: 'intro',
    }),
    defineField({name: 'catalogTag', title: 'Tag produktovej sekcie', type: 'string', group: 'catalog'}),
    defineField({name: 'catalogTitle', title: 'Nadpis produktovej sekcie', type: 'string', group: 'catalog'}),
    defineField({name: 'catalogDescription', title: 'Popis produktovej sekcie', type: 'text', rows: 3, group: 'catalog'}),
    defineField({
      name: 'productCatalog',
      title: 'Produkty a príslušenstvo',
      type: 'array',
      group: 'catalog',
      of: [
        defineArrayMember({
          type: 'object',
          fields: productCatalogFields,
          preview: {select: {title: 'title', subtitle: 'badge', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'efficiencyTitleA', title: 'Názov účinnosti A', type: 'string', group: 'intro'}),
    defineField({name: 'efficiencyValueA', title: 'Hodnota účinnosti A', type: 'string', group: 'intro'}),
    defineField({name: 'efficiencyTitleB', title: 'Názov účinnosti B', type: 'string', group: 'intro'}),
    defineField({name: 'efficiencyValueB', title: 'Hodnota účinnosti B', type: 'string', group: 'intro'}),
    defineField({name: 'benefitsTag', title: 'Tag výhod', type: 'string', group: 'benefits'}),
    defineField({name: 'benefitsTitle', title: 'Nadpis výhod', type: 'string', group: 'benefits'}),
    defineField({
      name: 'benefits',
      title: 'Výhody',
      type: 'array',
      group: 'benefits',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'useCasesTag', title: 'Tag použitia', type: 'string', group: 'benefits'}),
    defineField({name: 'useCasesTitle', title: 'Nadpis použitia', type: 'string', group: 'benefits'}),
    defineField({
      name: 'useCases',
      title: 'Možnosti použitia',
      type: 'array',
      group: 'benefits',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Nadpis', type: 'string'}),
            defineField({name: 'description', title: 'Popis', type: 'string'}),
          ],
          preview: {select: {title: 'title', subtitle: 'description'}},
        }),
      ],
    }),
    defineField({name: 'dimensionsTag', title: 'Tag rozmerov', type: 'string', group: 'dimensions'}),
    defineField({name: 'dimensionsTitle', title: 'Nadpis rozmerov', type: 'string', group: 'dimensions'}),
    defineField({
      name: 'dimensionImages',
      title: 'Obrázky rozmerov',
      type: 'array',
      group: 'dimensions',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Obrázok',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {select: {title: 'alt', media: 'image'}},
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
      name: 'batterySpecs',
      title: 'Batérie',
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
    defineField({
      name: 'chargingSpecs',
      title: 'Nabíjanie',
      type: 'array',
      group: 'specs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'parameter', title: 'Parameter', type: 'string'}),
            defineField({name: 'value', title: 'Hodnota', type: 'string'}),
          ],
          preview: {select: {title: 'parameter', subtitle: 'value'}},
        }),
      ],
    }),
    defineField({
      name: 'equipmentGroups',
      title: 'Skupiny výbavy',
      type: 'array',
      group: 'specs',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Nadpis skupiny', type: 'string'}),
            defineField({
              name: 'items',
              title: 'Položky',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  fields: [
                    defineField({name: 'label', title: 'Položka', type: 'string'}),
                    defineField({name: 'type', title: 'Typ', type: 'string'}),
                  ],
                  preview: {select: {title: 'label', subtitle: 'type'}},
                }),
              ],
            }),
          ],
          preview: {select: {title: 'title'}},
        }),
      ],
    }),
    defineField({name: 'rangeTag', title: 'Tag dojazdu', type: 'string', group: 'gallery'}),
    defineField({name: 'rangeTitle', title: 'Nadpis dojazdu', type: 'string', group: 'gallery'}),
    defineField({
      name: 'rangeCards',
      title: 'Karty dojazdu',
      type: 'array',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Nadpis', type: 'string'}),
            defineField({name: 'badge', title: 'Badge text', type: 'string'}),
            defineField({
              name: 'badgeClass',
              title: 'Badge štýl',
              type: 'string',
              options: {
                list: [
                  {title: 'Štandard', value: 'badge-std'},
                  {title: 'Opcia', value: 'badge-opt'},
                ],
              },
            }),
            defineField({name: 'info', title: 'Popis', type: 'text', rows: 3}),
            defineField({
              name: 'image',
              title: 'Obrázok',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'badge', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'accessoriesTag', title: 'Tag príslušenstva', type: 'string', group: 'gallery'}),
    defineField({name: 'accessoriesTitle', title: 'Nadpis príslušenstva', type: 'string', group: 'gallery'}),
    defineField({
      name: 'accessories',
      title: 'Príslušenstvo',
      type: 'array',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Nadpis', type: 'string'}),
            defineField({name: 'description', title: 'Popis', type: 'text', rows: 3}),
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Obrázok',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {select: {title: 'title', subtitle: 'description', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'certificatesTag', title: 'Tag certifikátov', type: 'string', group: 'gallery'}),
    defineField({name: 'certificatesTitle', title: 'Nadpis certifikátov', type: 'string', group: 'gallery'}),
    defineField({
      name: 'certificates',
      title: 'Certifikáty',
      type: 'array',
      group: 'gallery',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Nadpis', type: 'string'}),
            defineField({name: 'alt', title: 'Alt text', type: 'string'}),
            defineField({
              name: 'image',
              title: 'Obrázok',
              type: 'image',
              options: {hotspot: true},
            }),
          ],
          preview: {select: {title: 'title', media: 'image'}},
        }),
      ],
    }),
    defineField({name: 'galleryTag', title: 'Tag fotogalérie', type: 'string', group: 'gallery'}),
    defineField({name: 'galleryTitle', title: 'Nadpis fotogalérie', type: 'string', group: 'gallery'}),
    defineField({name: 'galleryDescription', title: 'Popis fotogalérie', type: 'text', rows: 3, group: 'gallery'}),
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
    defineField({name: 'videosTag', title: 'Tag videí', type: 'string', group: 'video'}),
    defineField({name: 'videosTitle', title: 'Nadpis videí', type: 'string', group: 'video'}),
    defineField({name: 'ctaTitle', title: 'CTA nadpis', type: 'string', group: 'cta'}),
    defineField({name: 'ctaText', title: 'CTA text', type: 'text', rows: 3, group: 'cta'}),
    defineField({name: 'ctaPrimaryLabel', title: 'Primárne CTA text', type: 'string', group: 'cta'}),
    defineField({name: 'ctaPrimaryHref', title: 'Primárne CTA odkaz', type: 'string', group: 'cta'}),
    defineField({name: 'ctaSecondaryLabel', title: 'Sekundárne CTA text', type: 'string', group: 'cta'}),
    defineField({name: 'ctaSecondaryHref', title: 'Sekundárne CTA odkaz', type: 'string', group: 'cta'}),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'heroSubtitle',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Produkty',
        subtitle: subtitle || 'Produktová stránka',
      }
    },
  },
})
