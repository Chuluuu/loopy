import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import doowyDashboard from '../../../public/images/doowy-dashboard.png'

export function Hero() {
  return (
    <section className="hero-bg relative isolate overflow-hidden border-b border-zinc-200/80 dark:border-zinc-800">
      <div aria-hidden="true" className="hero-dots absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 lg:px-8 lg:pb-24 lg:pt-20">
        <div>
          <h1
            className="reveal text-[2rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-[2.5rem] lg:text-5xl lg:leading-[1.1] dark:text-white"
            style={{ '--i': 0 } as React.CSSProperties}
          >
            Танай байгууллагад{' '}
            <br className="hidden lg:block" />
            <span className="text-brand-600 dark:text-gold-300">тохирсон</span> програм хангамж
          </h1>
          <p
            className="reveal mt-5 max-w-[46ch] text-pretty text-[17px] leading-7 text-zinc-600 dark:text-zinc-400"
            style={{ '--i': 1 } as React.CSSProperties}
          >
            Вэб, мобайл аппликешн, ERP системийг бид танай ажлын онцлогт тааруулж хөгжүүлнэ.
          </p>
          <div className="reveal mt-8 flex flex-wrap items-center gap-x-7 gap-y-4" style={{ '--i': 2 } as React.CSSProperties}>
            <Link
              href="/contact"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white shadow-[0_6px_20px_-6px_rgba(27,90,122,0.6)] transition hover:bg-brand-700 active:scale-[0.98] dark:bg-gold-300 dark:text-brand-950 dark:shadow-none dark:hover:bg-gold-200"
            >
              Холбогдох
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2.25} />
            </Link>
            <Link
              href="#doowy"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-800 transition-colors hover:text-brand-600 dark:text-zinc-200 dark:hover:text-gold-300"
            >
              Doowy ERP-тэй танилцах
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </div>

        <figure className="reveal relative" style={{ '--i': 3 } as React.CSSProperties}>
          {/* Soft brand glow that seats the dark screenshot on the light surface */}
          <div aria-hidden="true" className="absolute -inset-x-6 -bottom-8 top-10 -z-10 rounded-[40px] bg-brand-400/25 blur-3xl dark:bg-brand-500/20" />
          <div className="overflow-hidden rounded-xl bg-zinc-950 shadow-[0_30px_70px_-25px_rgba(16,47,64,0.55)] ring-1 ring-brand-950/10 dark:shadow-[0_30px_70px_-25px_rgba(0,0,0,0.8)] dark:ring-white/10">
            <div className="flex items-center border-b border-white/10 px-4 py-2.5">
              <span className="rounded-md bg-white/10 px-2.5 py-0.5 text-xs text-zinc-300">doowy.mn</span>
            </div>
            <Image
              src={doowyDashboard}
              alt="Doowy ERP-ийн хянах самбар: ажилтны тоо, ирц, чөлөөний хандлага, хэлтсийн цагийн харьцуулалт"
              priority
              sizes="(min-width: 1024px) 680px, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">
            Doowy ERP, хянах самбар
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
