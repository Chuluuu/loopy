import type { Metadata } from "next";
import "./globals.css";
import { Onest } from "next/font/google"
import { Providers } from '@/app/providers'

import { cn } from "@/lib/utils"
import Layout from "@/components/Layout";

const onest = Onest({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  display: 'swap',
  variable: "--font-onest",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://looper.mn"),
  title: "Лүпер Софт ХХК | ERP, вэб, мобайл систем хөгжүүлэлт",
  description: "Лүпер Софт нь өөрсдийн Doowy ERP платформ, Odoo ERP нэвтрүүлэлт, вэб болон мобайл аппликешн, Коха номын сангийн системийн хөгжүүлэлт хийдэг Монголын програм хангамжийн компани.",
  keywords: "Looper Soft LLC, Лүпер Софт, Doowy, Doowy ERP, software development, web development, mobile development, software company, ERP, odoo erp, Koha",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/ico",
        url: "/favicon_io/favicon.ico",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon_io/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon_io/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "mn_MN",
    siteName: "Лүпер Софт ХХК",
    title: "Лүпер Софт ХХК | ERP, вэб, мобайл систем хөгжүүлэлт",
    description: "Doowy ERP платформ, Odoo ERP нэвтрүүлэлт, вэб болон мобайл аппликешн, Коха номын сангийн системийн хөгжүүлэлт.",
    images: [{ url: "/favicon_io/android-chrome-512x512.png", width: 512, height: 512 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="mn" suppressHydrationWarning
    className={cn('h-full antialiased', onest.variable)}>
      <body className="flex min-h-full bg-white font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100" suppressHydrationWarning>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
