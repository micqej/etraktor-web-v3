import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Lankwitzer Slovensko",
  description: "Komplexné náterové systémy, technické poradenstvo a riešenia na mieru pre priemyselnú výrobu.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sk"
      className={`${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="page-shell">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
