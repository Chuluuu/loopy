'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {SvgIcon} from '@/components/SvgIcon'
import ThemeToggle from './ThemeToggle'
import { Hero } from './HeroSection'
import { Footer } from './Footer'
import AppLogo from "@/components/icons/logo.png"
import AppLogoBlue from "@/components/icons/logoblue.svg"

function Header() {
    let [isScrolled, setIsScrolled] = useState(false)
  
    useEffect(() => {
      function onScroll() {
        setIsScrolled(window.scrollY > 0)
      }
      onScroll()
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }, [])
  
    return (
      <header
        className={cn(
          'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-transparent px-4 py-5  transition duration-500 sm:px-6 lg:px-8 shadow-none',
          isScrolled
            ? 'bg-white/70 backdrop-blur-sm [@supports(backdrop-filter:blur(0))]:bg-white/70 dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
            : 'bg-transparent',
        )}
      >
        <div className="mr-6 flex lg:hidden">
          {/* <MobileNavigation /> */}
        </div>
        <div className="relative flex flex-grow basis-0 items-center">
          <Link href="/" aria-label="Home page">
            {/* <Logomark className="h-9 w-9 lg:hidden" /> */}
            {/* <Logo className="hidden h-9 w-auto fill-slate-700 lg:block dark:fill-sky-100" /> */}
            <SvgIcon name="logoblue" width={100} height={24} className="transition-all duration-1500 text-[#1b5a7a] dark:text-[#FCE28B]"  />
            {/* <Image src={AppLogo} height={32} alt="app logo"/> */}
          </Link>
        </div>
        <div className="relative flex basis-0 items-center justify-end gap-5 sm:gap-7 md:flex-grow">
          <ThemeToggle/>
          <Link
            href="https://my.inkdrop.app/"
            className="inline-flex flex-nowrap items-center gap-1 whitespace-nowrap rounded-full  px-3 py-1 text-sm text-sky-500 ring-1 ring-sky-300 hover:bg-sky-100 hover:text-sky-600 hover:ring-sky-500 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300 ">
            <SvgIcon name="login" width={14} height={14} />
            Log in
          </Link>
        </div>
      </header>
    )
  }
function Layout({children}:{children:React.ReactNode}) {
  return (
    <div className="flex w-full flex-col">
        <Header/>
        <Hero/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout