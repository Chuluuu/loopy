'use client'

import { Suspense, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { Dialog, DialogPanel } from '@headlessui/react'
import { SvgIcon } from './SvgIcon'

// import { Logomark } from '@/components/Logo'
// import { Navigation } from '@/components/Navigation'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      {...props}
    >
      <path d="M5 5l14 14M19 5l-14 14" />
    </svg>
  )
}

function CloseOnNavigation({ close }: { close: () => void }) {
  let pathname = usePathname()
  let searchParams = useSearchParams()

  useEffect(() => {
    close()
  }, [pathname, searchParams, close])

  return null
}

export function MobileNavigation() {
  let [isOpen, setIsOpen] = useState(false)
  let close = useCallback(() => setIsOpen(false), [setIsOpen])

  function onLinkClick(event: React.MouseEvent<HTMLAnchorElement>) {
    let link = event.currentTarget
    if (
      link.pathname + link.search + link.hash ===
      window.location.pathname + window.location.search + window.location.hash
    ) {
      close()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative"
        aria-label="Open navigation"
      >
        <MenuIcon className="h-6 w-6 stroke-slate-500" />
      </button>
      <Suspense fallback={null}>
        <CloseOnNavigation close={close} />
      </Suspense>
      <Dialog
        open={isOpen}
        onClose={() => close()}
        className="fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur lg:hidden"
        aria-label="Navigation"
      >
        <DialogPanel className="min-h-full w-full max-w-xs bg-white px-4 pb-12 pt-5 sm:px-6 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => close()}
              aria-label="Close navigation"
            >
              <CloseIcon className="h-6 w-6 stroke-slate-500" />
            </button>
            <Link href="/" className="mr-8" aria-label="Home page">
              {/* <Logomark className="h-9 w-9" /> */}
              <SvgIcon name="logoblue" width={100} height={24} className="transition-all duration-1500 text-[#1b5a7a] dark:text-[#FCE28B]"  />
            </Link>
          </div>
          {/* <Navigation className="mt-5 px-1" onLinkClick={onLinkClick} /> */}
          <div className="mt-8 px-1 relative flex flex-col items-start justify-start gap-5">
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
            href="/service"
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
        </DialogPanel>
      </Dialog>
    </>
  )
}