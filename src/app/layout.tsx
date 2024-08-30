import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
export const metadata: Metadata = {
  title: "Doowy",
  description: "Doowy your future",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  
    className={cn(
      "h-full antialiased",
      fontSans.variable,
      lexend.variable
    )}>
      <body className="flex min-h-full bg-white dark:bg-slate-900"> 
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
