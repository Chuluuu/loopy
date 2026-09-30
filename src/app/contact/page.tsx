import type { Metadata } from 'next'
import { ExternalLink, LifeBuoy, Mail, MapPin, Phone } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { ContactForm } from '@/components/ContactForm'
import { CONTACT } from '@/components/site'

export const metadata: Metadata = {
  title: 'Холбогдох | Лүпер Софт ХХК',
  description: 'Лүпер Софт ХХК-тай холбогдох: утас, и-мэйл, хаяг.',
}

const MAP_QUERY = encodeURIComponent('Seoul Street 12, Ulaanbaatar')

const CHANNELS = [
  { Icon: Phone, label: 'Утас', value: CONTACT.phone, href: CONTACT.phoneHref },
  { Icon: Mail, label: 'И-мэйл', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { Icon: LifeBuoy, label: 'Техникийн тусламж', value: 'support@looper.mn', href: 'mailto:support@looper.mn' },
]

export default function ContactUs() {
  return (
    <main>
      <PageHeader
        title="Холбогдох"
        lead="Шинэ систем, одоо байгаа системийн сайжруулалт эсвэл зөвлөгөө хэрэгтэй бол бидэнд бичээрэй."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8 lg:pb-24">
        <div className="reveal" style={{ '--i': 2 } as React.CSSProperties}>
          <ul className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {CHANNELS.map(({ Icon, label, value, href }) => (
              <li key={label}>
                <a href={href} className="group flex items-center gap-4 py-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                    <Icon className="h-[18px] w-[18px] text-brand-600 dark:text-brand-300" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-sm text-zinc-600 dark:text-zinc-400">{label}</span>
                    <span className="block font-medium text-zinc-950 transition-colors group-hover:text-brand-600 dark:text-white dark:group-hover:text-brand-300">{value}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-start gap-4 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                <MapPin className="h-[18px] w-[18px] text-brand-600 dark:text-brand-300" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm text-zinc-600 dark:text-zinc-400">Хаяг</span>
                <span className="block font-medium leading-7 text-zinc-950 dark:text-white">{CONTACT.address}</span>
                <span className="block text-sm text-zinc-600 dark:text-zinc-400">Sükhbaatar District, 1st khoroo, Seoul Street 12, Ulaanbaatar</span>
              </span>
            </li>
          </ul>
        </div>

        <div
          className="reveal rounded-3xl bg-zinc-50 p-6 ring-1 ring-inset ring-zinc-200 sm:p-8 dark:bg-zinc-900/60 dark:ring-zinc-800"
          style={{ '--i': 3 } as React.CSSProperties}
        >
          <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">Бидэнд бичих</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Хүсэлтээ илгээвэл бид тантай эргэн холбогдоно.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-white">Байршил</h2>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
          >
            Google Maps-д нээх
            <ExternalLink className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          </a>
        </div>
        <div className="mt-6 overflow-hidden rounded-3xl ring-1 ring-zinc-200 dark:ring-zinc-800">
          <iframe
            title="Лүпер Софт ХХК-ийн байршил"
            src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
            className="block h-[380px] w-full border-0 lg:h-[440px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  )
}
