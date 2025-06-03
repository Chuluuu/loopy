import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"
import localFont from 'next/font/local'
import { Providers } from '@/app/providers'

import { cn } from "@/lib/utils"
import Layout from "@/components/Layout";
const fontSans = FontSans({
  subsets: ["latin"],
  display: 'swap',
  variable: "--font-inter",
})

const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})
const robotoRegular = localFont({
  src: '../fonts/Roboto-Regular.woff2',
  display: 'swap',
  variable: '--font-roboto',
})
export const metadata: Metadata = {
  title: "Лүпер Софт ХХК",
  description: "your future is with us",
  keywords: "Looper Soft LLC, software development, web development, mobile development, software company, ERP, odoo erp ",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning
    className={cn('h-full antialiased',
      robotoRegular.variable,
      fontSans.variable,
     lexend.variable
    )}>
       
      <body className="flex min-h-full bg-white dark:bg-slate-900 " suppressHydrationWarning> 
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
