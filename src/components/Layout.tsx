'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {SvgIcon} from '@/components/SvgIcon'
import ThemeToggle from './ThemeToggle'
import { Hero } from './HeroSection'
import { Footer } from './Footer'
import { usePathname } from 'next/navigation'
import TechStackGrid from './static/techstack'

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
          'sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-transparent px-4 py-5  transition duration-500 sm:px-6 lg:px-20 shadow-none',
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
            <SvgIcon name="logoblue" width={100} height={24} className="transition-all duration-1500 text-[#1b5a7a] dark:text-[#FCE28B]"  />
          </Link>
        </div>
        <div className="relative flex-grow hidden items-center justify-end gap-5 md:flex">
          <Link
            href="/"
            //className="inline-flex flex-nowrap items-center gap-1 whitespace-nowrap px-3 py-1 text-sm text-sky-500  hover:bg-sky-100 hover:text-sky-600 hover:ring-sky-500 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300 "
            className='text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
            >
            Нүүр Хуудас
          </Link> 
          <Link
            href="/about"
            //className="inline-flex flex-nowrap items-center gap-1 whitespace-nowrap px-3 py-1 text-sm text-sky-500  hover:bg-sky-100 hover:text-sky-600 hover:ring-sky-500 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300 "
            className='text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
            >
            Бидний тухай
          </Link> 
          <Link
            href="/"
            //className="inline-flex flex-nowrap items-center gap-1 whitespace-nowrap px-3 py-1 text-sm text-sky-500  hover:bg-sky-100 hover:text-sky-600 hover:ring-sky-500 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300 "
            className='text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
            >
            Үйлчилгээ
          </Link> 
          <Link
            href="/contact"
            //className="inline-flex flex-nowrap items-center gap-1 whitespace-nowrap px-3 py-1 text-sm text-sky-500  hover:bg-sky-100 hover:text-sky-600 hover:ring-sky-500 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300 "
            className='text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
            >
            Бидэнтэй холбогдох
          </Link> 
        </div>
        <div className="relative flex basis-0 items-center justify-end gap-5 sm:gap-7 pl-5">
          
          <ThemeToggle/>
          {/* <Link
            href="/"
            className="inline-flex flex-nowrap items-center gap-1 whitespace-nowrap rounded-full  px-3 py-1 text-sm text-sky-500 ring-1 ring-sky-300 hover:bg-sky-100 hover:text-sky-600 hover:ring-sky-500 dark:bg-sky-400/10 dark:text-sky-400 dark:ring-inset dark:ring-sky-400/20 dark:hover:bg-sky-400/10 dark:hover:text-sky-300 dark:hover:ring-sky-300 ">
            <SvgIcon name="login" width={14} height={14} />
            Log in
          </Link> */}
        </div>
      </header>
    )
  }
function Layout({children}:{children:React.ReactNode}) {
  let pathname = usePathname()
  let isHomePage = pathname === '/'
  return (
    <div className="flex w-full flex-col">
        <Header/>
        {isHomePage &&<Hero/>}
        {children}
        <TechStackGrid />
        <Footer/>
    </div>
  )
}

export default Layout