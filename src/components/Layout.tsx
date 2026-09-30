import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-zinc-900 focus:shadow-lg"
      >
        Үндсэн агуулга руу шилжих
      </a>
      <Header />
      <div id="content" className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
