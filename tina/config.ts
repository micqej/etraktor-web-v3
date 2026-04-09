import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: "TVOJ_TINA_CLIENT_ID",
  token: "TVOJ_TINA_TOKEN",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        format: "json",
        fields: [
          { name: "title", type: "string", label: "Title" },
          { name: "body", type: "rich-text", label: "Content" },
          { name: "seo", type: "object", label: "SEO", fields: [
            { name: "description", type: "string", label: "Description" }
          ]}
        ],
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === "domov") return "/";
            return "/" + document._sys.filename;
          },
        },
      },
    ],
  },
});
