import Link from 'next/link'
import { SvgIcon } from '@/components/SvgIcon'
import { CONTACT, NAV_LINKS } from './site'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1.4fr] lg:px-8">
        <div>
          <SvgIcon name="logoblue" width={112} height={27} className="text-brand-600 dark:text-[#FCE28B]" />
          <p className="mt-4 max-w-xs text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            ERP, вэб болон мобайл систем хөгжүүлэлт, нэвтрүүлэлт, дэмжлэг.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">Цэс</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {[...NAV_LINKS, { label: 'Холбогдох', href: '/contact' }].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-white">Холбоо барих</h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-zinc-900 dark:hover:text-white">{CONTACT.phone}</a>
            </li>
            <li>
              <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-zinc-900 dark:hover:text-white">{CONTACT.email}</a>
            </li>
            <li className="leading-6">{CONTACT.address}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        <p className="mx-auto max-w-7xl px-4 py-6 text-sm text-zinc-500 sm:px-6 lg:px-8">
          &copy; {year} Лүпер Софт ХХК
        </p>
      </div>
    </footer>
  )
}
