import type {StructureResolver} from 'sanity/structure'

const singletonTypes = ['siteSettings', 'homePage', 'contactPage', 'productsPage']

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Obsah')
    .items([
      S.listItem()
        .title('Nastavenia webu')
        .id('siteSettings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Domovská stránka')
        .id('homePage')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Kontakt')
        .id('contactPage')
        .child(S.document().schemaType('contactPage').documentId('contactPage')),
      S.listItem()
        .title('Produkty')
        .id('productsPage')
        .child(S.document().schemaType('productsPage').documentId('productsPage')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return id ? !singletonTypes.includes(id) : true
      }),
    ])
