// components/Header.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import {SvgIcon} from '@/components/SvgIcon'
import ThemeToggle from './ThemeToggle'
import { MobileNavigation } from './MobileNavigation'
interface NavLink {
  key: string
  label: string
  href: string
}

const navLinks: NavLink[] = [
  { key: 'home',    label: 'Нүүр Хуудас',          href: '/' },
  { key: 'about',   label: 'Бидний тухай',         href: '/about' },
  { key: 'service', label: 'Үйлчилгээ',            href: '/service' },
  { key: 'contact', label: 'Бидэнтэй холбогдох',   href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 0)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent hydration mismatch for theme toggle
  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 flex items-center justify-between px-12 py-4 bg-transparent">
        <div className="text-xl font-semibold tracking-tight font-['Lexend']">
        <Link href="/" aria-label="Home page">
             <SvgIcon name="logoblue" width={100} height={24} className="transition-all duration-1500 text-[#1b5a7a] dark:text-[#FCE28B]"  />
        </Link>
        </div>
        <div className="w-10 h-5.5 rounded-full bg-gray-200" />
      </header>
    )
  }

  const isDark = theme === 'dark'

  return (
    <header
      className={`
        sticky top-0 z-50 flex items-center justify-between px-12 py-4
        transition-all duration-500
        ${scrolled 
          ? isDark 
            ? 'bg-slate-900/92 backdrop-blur-sm border-b border-slate-800' 
            : 'bg-white/75 backdrop-blur-sm border-b border-slate-100'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
         <div className="mr-6 flex md:hidden">
           <MobileNavigation />
         </div>
      {/* Logo */}
      <Link 
        href="/"
        className={`
          text-xl font-semibold tracking-tight font-['Lexend']
          ${isDark ? 'text-[#FCE28B]' : 'text-[#1b5a7a]'}
        `}
      >
        <SvgIcon name="logoblue" width={100} height={24} className="transition-all duration-1500 text-[#1b5a7a] dark:text-[#FCE28B]"  />
      </Link>

      {/* Nav */}
      <nav className="hidden md:flex md:gap-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
          
          return (
            <Link
              key={link.key}
              href={link.href}
              className={`
                text-md font-['Roboto'] transition-colors duration-150
                ${isActive
                  ? isDark ? 'text-slate-100 font-medium' : 'text-slate-800 font-medium'
                  : isDark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-700'
                }
              `}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      {/* Theme Toggle */}
      {/* <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className={`
          relative w-10 h-5.5 rounded-full transition-colors duration-300
          ${isDark ? 'bg-slate-700' : 'bg-slate-200'}
        `}
        aria-label="Toggle dark mode"
      >
        <span
          className={`
            absolute top-[3px] w-4 h-4 rounded-full bg-white shadow-sm
            transition-all duration-300
            ${isDark ? 'left-[21px]' : 'left-[3px]'}
          `}
        />
      </button> */}
      <ThemeToggle/>
    </header>
  )
}