# etraktor.sk – Next.js + Sanity

Tento projekt je postavený na `Next.js 14` a `Sanity Studio` na ceste `/admin`.

## Lokálny vývoj

```bash
npm install
npm run dev
```

## Potrebné premenné

Skopíruj `.env.example` do `.env.local` a doplň hodnoty:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_PROJECT_ID=
SANITY_DATASET=
```

## Nasadenie na Vercel

1. Importuj repo do Vercelu.
2. Nastav rovnaké environment variables ako v `.env.local`.
3. Deployni projekt.

## Admin

- `/<domena>/admin` otvorí Sanity Studio
- obsah je definovaný v priečinku `sanity/schemaTypes`

## URL štruktúra

- `/` Domov
- `/palety` Transportné palety
- `/zariadenia` Jednoúčelové zariadenia
- `/vyroba` Výroba
- `/produkty` eTRAKTOR
- `/kontakt` Kontakt
- `/admin` Sanity Studio
