// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "siteSettings",
        label: "Nastavenia webu",
        path: "content/site",
        format: "json",
        match: {
          include: "site-settings"
        },
        fields: [
          { type: "image", name: "logoImage", label: "Logo" },
          { type: "string", name: "logoAlt", label: "Alt loga" },
          { type: "string", name: "logoText", label: "Text pri logu" },
          {
            type: "object",
            name: "navLinks",
            label: "Menu",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Text" },
              { type: "string", name: "href", label: "Odkaz" }
            ]
          },
          {
            type: "object",
            name: "contactLink",
            label: "Kontakt v menu",
            fields: [
              { type: "string", name: "label", label: "Text" },
              { type: "string", name: "href", label: "Odkaz" }
            ]
          },
          {
            type: "object",
            name: "footerLinks",
            label: "Footer odkazy",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Text" },
              { type: "string", name: "href", label: "Odkaz" }
            ]
          },
          { type: "string", name: "footerCopyright", label: "Footer copyright" },
          { type: "string", name: "footerAddress", label: "Footer adresa" },
          { type: "string", name: "footerCreditLabel", label: "Footer kredit label" },
          { type: "string", name: "footerCreditText", label: "Footer kredit text" },
          { type: "string", name: "footerCreditHref", label: "Footer kredit odkaz" }
        ],
        ui: {
          allowedActions: { create: false, delete: false }
        }
      },
      {
        name: "references",
        label: "Referencie",
        path: "content/site",
        format: "json",
        match: {
          include: "references"
        },
        fields: [
          { type: "string", name: "tag", label: "Nadpis sekcie" },
          {
            type: "object",
            name: "items",
            label: "Log\xE1",
            list: true,
            fields: [
              { type: "string", name: "alt", label: "Alt text" },
              { type: "image", name: "src", label: "Obr\xE1zok" }
            ]
          }
        ],
        ui: {
          allowedActions: { create: false, delete: false }
        }
      },
      {
        name: "homePage",
        label: "Domovsk\xE1 str\xE1nka",
        path: "content/pages",
        format: "json",
        match: {
          include: "home"
        },
        fields: [
          { type: "string", name: "heroEyebrow", label: "Hero horn\xFD text" },
          { type: "string", name: "heroTitleLine1", label: "Hero riadok 1" },
          { type: "string", name: "heroTitleLine2", label: "Hero riadok 2" },
          { type: "string", name: "heroTitleAccent", label: "Hero zv\xFDraznenie" },
          { type: "string", name: "heroSubtitle", label: "Hero podnadpis" },
          { type: "string", name: "heroDescription", label: "Hero popis", ui: { component: "textarea" } },
          { type: "string", name: "heroPrimaryLabel", label: "Prim\xE1rne tla\u010Didlo text" },
          { type: "string", name: "heroPrimaryHref", label: "Prim\xE1rne tla\u010Didlo odkaz" },
          { type: "string", name: "heroSecondaryLabel", label: "Sekund\xE1rne tla\u010Didlo text" },
          { type: "string", name: "heroSecondaryHref", label: "Sekund\xE1rne tla\u010Didlo odkaz" },
          { type: "image", name: "heroBackgroundImage", label: "Hero pozadie" },
          { type: "image", name: "heroProductImage", label: "Hero produktov\xFD obr\xE1zok" },
          {
            type: "object",
            name: "heroStats",
            label: "Hero \u0161tatistiky",
            list: true,
            fields: [
              { type: "string", name: "value", label: "Hodnota" },
              { type: "string", name: "label", label: "Popis" }
            ]
          },
          { type: "string", name: "servicesTag", label: "Slu\u017Eby tag" },
          { type: "string", name: "servicesTitle", label: "Slu\u017Eby nadpis" },
          { type: "string", name: "servicesDescription", label: "Slu\u017Eby popis", ui: { component: "textarea" } },
          {
            type: "object",
            name: "services",
            label: "Slu\u017Eby",
            list: true,
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } },
              { type: "string", name: "buttonLabel", label: "Text tla\u010Didla" },
              { type: "string", name: "buttonHref", label: "Odkaz tla\u010Didla" },
              { type: "image", name: "image", label: "Obr\xE1zok" },
              { type: "string", name: "imageAlign", label: "Obr\xE1zok v\u013Eavo/vpravo" },
              { type: "string", name: "imageFit", label: "Contain alebo cover" }
            ]
          },
          { type: "string", name: "extrasTag", label: "Extras tag" },
          { type: "string", name: "extrasTitle", label: "Extras nadpis" },
          { type: "string", name: "extras", label: "Extras polo\u017Eky", list: true },
          { type: "string", name: "aboutTag", label: "O firme tag" },
          { type: "string", name: "aboutTitle", label: "O firme nadpis" },
          { type: "string", name: "aboutText", label: "O firme text", ui: { component: "textarea" } },
          { type: "image", name: "aboutImage", label: "O firme obr\xE1zok" },
          { type: "string", name: "aboutIcoLabel", label: "I\u010CO label" },
          { type: "string", name: "aboutIcoValue", label: "I\u010CO hodnota" },
          { type: "string", name: "aboutDicLabel", label: "DI\u010C label" },
          { type: "string", name: "aboutDicValue", label: "DI\u010C hodnota" },
          { type: "string", name: "aboutAddressLabel", label: "Adresa label" },
          { type: "string", name: "aboutAddressValue", label: "Adresa hodnota" },
          { type: "string", name: "ctaTitle", label: "CTA nadpis" },
          { type: "string", name: "ctaText", label: "CTA text", ui: { component: "textarea" } },
          { type: "string", name: "ctaButtonLabel", label: "CTA tla\u010Didlo text" },
          { type: "string", name: "ctaButtonHref", label: "CTA tla\u010Didlo odkaz" }
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/"
        }
      },
      {
        name: "kontaktPage",
        label: "Kontakt",
        path: "content/pages",
        format: "json",
        match: {
          include: "kontakt"
        },
        fields: [
          { type: "string", name: "heroTag", label: "Hero tag" },
          { type: "string", name: "heroTitle", label: "Hero nadpis" },
          { type: "string", name: "heroDescription", label: "Hero popis", ui: { component: "textarea" } },
          { type: "string", name: "personLabel", label: "Kontaktn\xE1 osoba label" },
          { type: "string", name: "personValue", label: "Kontaktn\xE1 osoba hodnota" },
          { type: "string", name: "addressLabel", label: "Adresa label" },
          { type: "string", name: "addressLines", label: "Riadky adresy", list: true },
          { type: "string", name: "phoneLabel", label: "Telef\xF3n label" },
          { type: "string", name: "phoneValue", label: "Telef\xF3n hodnota" },
          { type: "string", name: "phoneHref", label: "Telef\xF3n odkaz" },
          { type: "string", name: "emailLabel", label: "Email label" },
          { type: "string", name: "emailValue", label: "Email hodnota" },
          { type: "string", name: "emailHref", label: "Email odkaz" },
          { type: "string", name: "webLabel", label: "Web label" },
          { type: "string", name: "webValue", label: "Web hodnota" },
          { type: "string", name: "webHref", label: "Web odkaz" },
          { type: "string", name: "companyTag", label: "Firemn\xE9 \xFAdaje nadpis" },
          {
            type: "object",
            name: "companyFacts",
            label: "Firemn\xE9 \xFAdaje",
            list: true,
            fields: [
              { type: "string", name: "label", label: "Label" },
              { type: "string", name: "value", label: "Hodnota" }
            ]
          },
          { type: "string", name: "formTitle", label: "Nadpis formul\xE1ra" },
          { type: "string", name: "firstNameLabel", label: "Meno label" },
          { type: "string", name: "firstNamePlaceholder", label: "Meno placeholder" },
          { type: "string", name: "phoneFieldLabel", label: "Telef\xF3n label vo formul\xE1ri" },
          { type: "string", name: "phoneFieldPlaceholder", label: "Telef\xF3n placeholder" },
          { type: "string", name: "emailFieldLabel", label: "Email label vo formul\xE1ri" },
          { type: "string", name: "emailFieldPlaceholder", label: "Email placeholder" },
          { type: "string", name: "interestLabel", label: "Oblas\u0165 z\xE1ujmu label" },
          { type: "string", name: "interestPlaceholder", label: "Oblas\u0165 z\xE1ujmu placeholder" },
          { type: "string", name: "interestOptions", label: "Mo\u017Enosti", list: true },
          { type: "string", name: "messageLabel", label: "Spr\xE1va label" },
          { type: "string", name: "messagePlaceholder", label: "Spr\xE1va placeholder" },
          { type: "string", name: "submitLabel", label: "Tla\u010Didlo" }
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/kontakt"
        }
      },
      {
        name: "paletyPage",
        label: "Palety",
        path: "content/pages",
        format: "json",
        match: {
          include: "palety"
        },
        fields: [
          { type: "string", name: "heroTag", label: "Hero tag" },
          { type: "string", name: "heroTitle", label: "Hero nadpis" },
          { type: "string", name: "heroDescription", label: "Hero popis", ui: { component: "textarea" } },
          { type: "string", name: "nonRobotTag", label: "Nerobotick\xE9 tag" },
          { type: "string", name: "nonRobotTitle", label: "Nerobotick\xE9 nadpis" },
          { type: "string", name: "nonRobotDescription", label: "Nerobotick\xE9 popis", ui: { component: "textarea" } },
          { type: "string", name: "nonRobotButtonLabel", label: "Nerobotick\xE9 tla\u010Didlo text" },
          { type: "string", name: "nonRobotButtonHref", label: "Nerobotick\xE9 tla\u010Didlo odkaz" },
          { type: "image", name: "nonRobotImage", label: "Nerobotick\xE9 obr\xE1zok" },
          { type: "string", name: "nonRobotImageAlt", label: "Nerobotick\xE9 alt" },
          { type: "string", name: "nonRobotCardTitle", label: "Nerobotick\xE9 card title" },
          { type: "string", name: "nonRobotCardDescription", label: "Nerobotick\xE9 card popis" },
          { type: "string", name: "robotTag", label: "Robotick\xE9 tag" },
          { type: "string", name: "robotTitle", label: "Robotick\xE9 nadpis" },
          { type: "string", name: "robotDescription", label: "Robotick\xE9 popis", ui: { component: "textarea" } },
          { type: "string", name: "robotItems", label: "Robotick\xE9 polo\u017Eky", list: true },
          { type: "string", name: "robotButtonLabel", label: "Robotick\xE9 tla\u010Didlo text" },
          { type: "string", name: "robotButtonHref", label: "Robotick\xE9 tla\u010Didlo odkaz" },
          { type: "image", name: "robotImage", label: "Robotick\xE9 obr\xE1zok" },
          { type: "string", name: "robotImageAlt", label: "Robotick\xE9 alt" },
          { type: "string", name: "robotCardTitle", label: "Robotick\xE9 card title" },
          { type: "string", name: "robotCardDescription", label: "Robotick\xE9 card popis" },
          { type: "string", name: "ctaTitle", label: "CTA nadpis" },
          { type: "string", name: "ctaText", label: "CTA text", ui: { component: "textarea" } },
          { type: "string", name: "ctaButtonLabel", label: "CTA tla\u010Didlo text" },
          { type: "string", name: "ctaButtonHref", label: "CTA tla\u010Didlo odkaz" }
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/palety"
        }
      },
      {
        name: "zariadeniaPage",
        label: "Zariadenia",
        path: "content/pages",
        format: "json",
        match: {
          include: "zariadenia"
        },
        fields: [
          { type: "string", name: "heroTag", label: "Hero tag" },
          { type: "string", name: "heroTitle", label: "Hero nadpis" },
          { type: "string", name: "heroDescription", label: "Hero popis", ui: { component: "textarea" } },
          { type: "string", name: "casesTag", label: "Referencie tag" },
          { type: "string", name: "casesTitle", label: "Referencie nadpis" },
          {
            type: "object",
            name: "cases",
            label: "Realiz\xE1cie",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } },
              { type: "image", name: "src", label: "Obr\xE1zok" },
              { type: "string", name: "alt", label: "Alt" }
            ]
          },
          { type: "string", name: "processTag", label: "Proces tag" },
          { type: "string", name: "processTitle", label: "Proces nadpis" },
          {
            type: "object",
            name: "processSteps",
            label: "Kroky",
            list: true,
            fields: [
              { type: "string", name: "num", label: "\u010C\xEDslo" },
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } }
            ]
          },
          { type: "string", name: "ctaTitle", label: "CTA nadpis" },
          { type: "string", name: "ctaText", label: "CTA text", ui: { component: "textarea" } },
          { type: "string", name: "ctaButtonLabel", label: "CTA tla\u010Didlo text" },
          { type: "string", name: "ctaButtonHref", label: "CTA tla\u010Didlo odkaz" }
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/zariadenia"
        }
      },
      {
        name: "vyrobaPage",
        label: "V\xFDroba",
        path: "content/pages",
        format: "json",
        match: {
          include: "vyroba"
        },
        fields: [
          { type: "string", name: "heroTag", label: "Hero tag" },
          { type: "string", name: "heroTitle", label: "Hero nadpis" },
          { type: "string", name: "heroDescription", label: "Hero popis", ui: { component: "textarea" } },
          { type: "string", name: "galleryTag", label: "Gal\xE9ria tag" },
          { type: "string", name: "galleryTitle", label: "Gal\xE9ria nadpis" },
          { type: "string", name: "galleryDescription", label: "Gal\xE9ria popis", ui: { component: "textarea" } },
          {
            type: "object",
            name: "images",
            label: "V\xFDrobn\xE9 priestory",
            list: true,
            fields: [
              { type: "image", name: "src", label: "Obr\xE1zok" },
              { type: "string", name: "alt", label: "Alt" },
              { type: "string", name: "title", label: "Nadpis" }
            ]
          },
          { type: "string", name: "servicesTag", label: "Slu\u017Eby tag" },
          { type: "string", name: "servicesTitle", label: "Slu\u017Eby nadpis" },
          {
            type: "object",
            name: "services",
            label: "Slu\u017Eby",
            list: true,
            fields: [
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } }
            ]
          },
          { type: "string", name: "ctaTitle", label: "CTA nadpis" },
          { type: "string", name: "ctaText", label: "CTA text", ui: { component: "textarea" } },
          { type: "string", name: "ctaButtonLabel", label: "CTA tla\u010Didlo text" },
          { type: "string", name: "ctaButtonHref", label: "CTA tla\u010Didlo odkaz" }
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/vyroba"
        }
      },
      {
        name: "produktyPage",
        label: "Produkty",
        path: "content/pages",
        format: "json",
        match: {
          include: "produkty"
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Hero",
            fields: [
              { type: "string", name: "eyebrow", label: "Horn\xFD text" },
              { type: "string", name: "titleLines", label: "Riadky nadpisu", list: true },
              { type: "string", name: "titleAccent", label: "Zv\xFDraznenie" },
              { type: "string", name: "subtitle", label: "Podnadpis" },
              { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } },
              { type: "image", name: "backgroundImage", label: "Pozadie" },
              { type: "image", name: "productImage", label: "Produktov\xFD obr\xE1zok" },
              { type: "string", name: "primaryButtonLabel", label: "Prim\xE1rne tla\u010Didlo text" },
              { type: "string", name: "primaryButtonHref", label: "Prim\xE1rne tla\u010Didlo odkaz" },
              { type: "string", name: "secondaryButtonLabel", label: "Sekund\xE1rne tla\u010Didlo text" },
              { type: "string", name: "secondaryButtonHref", label: "Sekund\xE1rne tla\u010Didlo odkaz" },
              {
                type: "object",
                name: "stats",
                label: "\u0160tatistiky",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Hodnota" },
                  { type: "string", name: "label", label: "Popis" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "electricSection",
            label: "Pre\u010Do elektrick\xFD",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "paragraphs", label: "Odseky", list: true, ui: { component: "textarea" } },
              {
                type: "object",
                name: "efficiency",
                label: "Porovnanie \xFA\u010Dinnosti",
                list: true,
                fields: [
                  { type: "string", name: "name", label: "N\xE1zov" },
                  { type: "string", name: "value", label: "Hodnota" },
                  { type: "string", name: "barWidth", label: "\u0160\xEDrka baru" },
                  { type: "string", name: "variant", label: "Variant" }
                ]
              },
              {
                type: "object",
                name: "statCards",
                label: "Karty \u0161tatist\xEDk",
                list: true,
                fields: [
                  { type: "string", name: "value", label: "Hodnota" },
                  { type: "string", name: "label", label: "Popis" }
                ]
              },
              { type: "image", name: "image", label: "Obr\xE1zok" }
            ]
          },
          {
            type: "object",
            name: "advantagesSection",
            label: "V\xFDhody",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              {
                type: "object",
                name: "items",
                label: "Polo\u017Eky",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Nadpis" },
                  { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "usageSection",
            label: "Pou\u017Eitie",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              {
                type: "object",
                name: "items",
                label: "Polo\u017Eky",
                list: true,
                fields: [
                  { type: "string", name: "title", label: "Nadpis" },
                  { type: "string", name: "description", label: "Popis" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "parametersSection",
            label: "Parametre",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              { type: "image", name: "dimensionImages", label: "Rozmerov\xE9 obr\xE1zky", list: true },
              {
                type: "object",
                name: "tabs",
                label: "Z\xE1lo\u017Eky",
                fields: [
                  {
                    type: "object",
                    name: "basic",
                    label: "Z\xE1kladn\xE9",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "columns", label: "St\u013Apce", list: true },
                      {
                        type: "object",
                        name: "rows",
                        label: "Riadky",
                        list: true,
                        fields: [
                          { type: "string", name: "label", label: "Parameter" },
                          { type: "string", name: "values", label: "Hodnoty", list: true }
                        ]
                      },
                      { type: "string", name: "footnote", label: "Pozn\xE1mka" }
                    ]
                  },
                  {
                    type: "object",
                    name: "battery",
                    label: "Bat\xE9rie",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      { type: "string", name: "columns", label: "St\u013Apce", list: true },
                      {
                        type: "object",
                        name: "rows",
                        label: "Riadky",
                        list: true,
                        fields: [
                          { type: "string", name: "label", label: "Parameter" },
                          { type: "string", name: "values", label: "Hodnoty", list: true }
                        ]
                      },
                      { type: "image", name: "image", label: "Obr\xE1zok" },
                      { type: "string", name: "imageAlt", label: "Alt obr\xE1zka" }
                    ]
                  },
                  {
                    type: "object",
                    name: "charging",
                    label: "Nab\xEDjanie",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      {
                        type: "object",
                        name: "rows",
                        label: "Riadky",
                        list: true,
                        fields: [
                          { type: "string", name: "label", label: "Parameter" },
                          { type: "string", name: "value", label: "Hodnota" }
                        ]
                      },
                      { type: "image", name: "image", label: "Obr\xE1zok" },
                      { type: "string", name: "imageAlt", label: "Alt obr\xE1zka" }
                    ]
                  },
                  {
                    type: "object",
                    name: "equipment",
                    label: "V\xFDbava",
                    fields: [
                      { type: "string", name: "label", label: "Label" },
                      {
                        type: "object",
                        name: "groups",
                        label: "Skupiny",
                        list: true,
                        fields: [
                          { type: "string", name: "title", label: "N\xE1zov skupiny" },
                          {
                            type: "object",
                            name: "items",
                            label: "Polo\u017Eky",
                            list: true,
                            fields: [
                              { type: "string", name: "label", label: "N\xE1zov" },
                              { type: "string", name: "type", label: "Typ" }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "rangeSection",
            label: "Dojazd",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              {
                type: "object",
                name: "cards",
                label: "Karty",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Obr\xE1zok" },
                  { type: "string", name: "label", label: "Nadpis" },
                  { type: "string", name: "badge", label: "Badge" },
                  { type: "string", name: "badgeClass", label: "CSS trieda" },
                  { type: "string", name: "info", label: "Info", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "accessoriesSection",
            label: "Pr\xEDslu\u0161enstvo",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              {
                type: "object",
                name: "items",
                label: "Polo\u017Eky",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Obr\xE1zok" },
                  { type: "string", name: "alt", label: "Alt" },
                  { type: "string", name: "title", label: "Nadpis" },
                  { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "certificationsSection",
            label: "Certifik\xE1ty",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              { type: "image", name: "images", label: "Obr\xE1zky", list: true }
            ]
          },
          {
            type: "object",
            name: "gallerySection",
            label: "Fotogal\xE9ria",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "description", label: "Popis" },
              {
                type: "object",
                name: "images",
                label: "Obr\xE1zky",
                list: true,
                fields: [
                  { type: "image", name: "src", label: "Obr\xE1zok" },
                  { type: "string", name: "alt", label: "Alt" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "videoSection",
            label: "Videogal\xE9ria",
            fields: [
              { type: "string", name: "tag", label: "Tag" },
              { type: "string", name: "title", label: "Nadpis" },
              {
                type: "object",
                name: "videos",
                label: "Vide\xE1",
                list: true,
                fields: [
                  { type: "string", name: "id", label: "YouTube ID" },
                  { type: "string", name: "label", label: "Label" }
                ]
              }
            ]
          },
          {
            type: "object",
            name: "pricingSection",
            label: "Cenn\xEDk CTA",
            fields: [
              { type: "string", name: "title", label: "Nadpis" },
              { type: "string", name: "description", label: "Popis", ui: { component: "textarea" } },
              { type: "string", name: "primaryButtonLabel", label: "Prim\xE1rne tla\u010Didlo text" },
              { type: "string", name: "primaryButtonHref", label: "Prim\xE1rne tla\u010Didlo odkaz" },
              { type: "string", name: "secondaryButtonLabel", label: "Sekund\xE1rne tla\u010Didlo text" },
              { type: "string", name: "secondaryButtonHref", label: "Sekund\xE1rne tla\u010Didlo odkaz" }
            ]
          }
        ],
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/produkty"
        }
      }
    ]
  }
});
export {
  config_default as default
};
