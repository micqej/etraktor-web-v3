import type {StructureResolver} from 'sanity/structure'

const singletonTypes = ['siteSettings', 'homePage', 'contactPage', 'productsPage', 'palletsPage', 'devicesPage', 'productionPage']

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
      S.listItem()
        .title('Transportné palety')
        .id('palletsPage')
        .child(S.document().schemaType('palletsPage').documentId('palletsPage')),
      S.listItem()
        .title('Jednoúčelové zariadenia')
        .id('devicesPage')
        .child(S.document().schemaType('devicesPage').documentId('devicesPage')),
      S.listItem()
        .title('Výroba')
        .id('productionPage')
        .child(S.document().schemaType('productionPage').documentId('productionPage')),
      S.divider(),
      ...S.documentTypeListItems().filter((item) => {
        const id = item.getId()
        return id ? !singletonTypes.includes(id) : true
      }),
    ])
