import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { CONTACT } from '../site'
import { LogoMark } from '../LogoMark'
import { Reveal } from '../Reveal'

export function ContactCta() {
  return (
    <section className="px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="relative isolate overflow-hidden rounded-[28px] bg-brand-50 text-zinc-950 ring-1 ring-inset ring-brand-100 dark:bg-brand-950 dark:text-white dark:ring-white/5">
        <LogoMark className="pointer-events-none absolute -bottom-[40%] -left-[12%] -z-10 w-[55%] max-w-[480px] text-brand-100 lg:-bottom-[60%] dark:text-brand-900" />

        <Reveal className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:px-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:py-20">
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Төслөө <span className="text-brand-600 dark:text-gold-300">ярилцъя</span>
            </h2>
            <p className="mt-4 max-w-[48ch] leading-7 text-zinc-700 dark:text-brand-100/80">
              Шинэ систем эсвэл одоо байгаа системийн сайжруулалт. Шаардлагаа хуваалцвал бид тантай холбогдоно.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white transition hover:bg-brand-700 dark:bg-gold-300 dark:text-brand-950 dark:hover:bg-gold-200 active:scale-[0.98]"
            >
              Холбогдох
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
          </div>

          <dl className="grid gap-6 border-t border-brand-200/70 pt-8 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div>
              <dt className="text-sm text-zinc-600 dark:text-brand-200/70">Утас</dt>
              <dd className="mt-1 text-lg font-medium">
                <a href={CONTACT.phoneHref} className="hover:text-brand-600 dark:hover:text-gold-300">{CONTACT.phone}</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm text-zinc-600 dark:text-brand-200/70">И-мэйл</dt>
              <dd className="mt-1 text-lg font-medium">
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-600 dark:hover:text-gold-300">{CONTACT.email}</a>
              </dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <dt className="text-sm text-zinc-600 dark:text-brand-200/70">Хаяг</dt>
              <dd className="mt-1 text-[15px] leading-7 text-zinc-800 dark:text-brand-50/90">{CONTACT.address}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
