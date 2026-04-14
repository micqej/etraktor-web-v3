import {defineArrayMember, defineField, defineType} from 'sanity'

export const contactPageType = defineType({
  name: 'contactPage',
  title: 'Kontakt',
  type: 'document',
  groups: [
    {name: 'hero', title: 'Hero'},
    {name: 'details', title: 'Kontaktné údaje'},
    {name: 'form', title: 'Formulár'},
  ],
  fields: [
    defineField({name: 'heroTag', title: 'Hero tag', type: 'string', group: 'hero'}),
    defineField({name: 'heroTitle', title: 'Hero nadpis', type: 'string', group: 'hero'}),
    defineField({name: 'heroText', title: 'Hero text', type: 'text', rows: 3, group: 'hero'}),
    defineField({name: 'detailsTitle', title: 'Nadpis kontaktných údajov', type: 'string', group: 'details'}),
    defineField({name: 'contactPersonLabel', title: 'Label kontaktná osoba', type: 'string', group: 'details'}),
    defineField({name: 'contactPersonValue', title: 'Kontaktná osoba', type: 'string', group: 'details'}),
    defineField({name: 'addressLabel', title: 'Label adresa', type: 'string', group: 'details'}),
    defineField({name: 'addressValue', title: 'Adresa', type: 'text', rows: 3, group: 'details'}),
    defineField({name: 'phoneLabel', title: 'Label telefón', type: 'string', group: 'details'}),
    defineField({name: 'phoneValue', title: 'Telefón', type: 'string', group: 'details'}),
    defineField({name: 'emailLabel', title: 'Label email', type: 'string', group: 'details'}),
    defineField({name: 'emailValue', title: 'Email', type: 'string', group: 'details'}),
    defineField({name: 'webLabel', title: 'Label web', type: 'string', group: 'details'}),
    defineField({name: 'webValue', title: 'Web', type: 'url', group: 'details'}),
    defineField({name: 'companyDataTitle', title: 'Nadpis firemných údajov', type: 'string', group: 'details'}),
    defineField({name: 'companyIco', title: 'IČO', type: 'string', group: 'details'}),
    defineField({name: 'companyDic', title: 'DIČ', type: 'string', group: 'details'}),
    defineField({name: 'companyYear', title: 'Rok zápisu', type: 'string', group: 'details'}),
    defineField({name: 'formTitle', title: 'Nadpis formulára', type: 'string', group: 'form'}),
    defineField({name: 'formNameLabel', title: 'Label meno', type: 'string', group: 'form'}),
    defineField({name: 'formPhoneLabel', title: 'Label telefón', type: 'string', group: 'form'}),
    defineField({name: 'formEmailLabel', title: 'Label email', type: 'string', group: 'form'}),
    defineField({name: 'formTopicLabel', title: 'Label oblasť záujmu', type: 'string', group: 'form'}),
    defineField({name: 'formMessageLabel', title: 'Label správa', type: 'string', group: 'form'}),
    defineField({name: 'formSubmitLabel', title: 'Text tlačidla', type: 'string', group: 'form'}),
    defineField({
      name: 'inquiryOptions',
      title: 'Možnosti oblasti záujmu',
      type: 'array',
      group: 'form',
      of: [defineArrayMember({type: 'string'})],
    }),
  ],
  preview: {
    select: {
      title: 'heroTitle',
      subtitle: 'detailsTitle',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Kontakt',
        subtitle: subtitle || 'Kontaktná stránka',
      }
    },
  },
})
