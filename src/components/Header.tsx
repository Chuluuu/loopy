'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SvgIcon } from '@/components/SvgIcon'
import { cn } from '@/lib/utils'
import ThemeToggle from './ThemeToggle'
import { MobileNavigation } from './MobileNavigation'
import { NAV_LINKS } from './site'

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Нүүр хуудас" className="shrink-0">
          <SvgIcon name="logoblue" width={112} height={27} className="text-brand-600 dark:text-[#FCE28B]" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : link.href !== '/#work' && pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'text-[15px] transition-colors',
                  isActive
                    ? 'font-medium text-zinc-900 dark:text-white'
                    : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-brand-600 px-5 text-sm font-medium text-white transition hover:bg-brand-700 active:scale-[0.98] sm:inline-flex dark:bg-brand-400 dark:text-zinc-950 dark:hover:bg-brand-300"
          >
            Холбогдох
          </Link>
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  )
}
