import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '../Reveal'
import { LogoMark } from '../LogoMark'
import { CASES } from './data'

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-4 pb-16 pt-14 sm:px-6 lg:px-8 lg:pb-24 lg:pt-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
          Сонгосон төслүүд
        </h2>
        <Link
          href="/about#projects"
          className="group inline-flex items-center gap-2 font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
        >
          Бүх төсөл
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
        </Link>
      </Reveal>

      <div className="mt-10 space-y-4">
        {CASES.map((c) => (
          <Reveal key={c.title}>
            <article className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:grid-cols-[0.7fr_1.3fr] dark:border-zinc-800 dark:bg-zinc-950">
              <div className={cn('relative isolate flex min-h-[10rem] flex-col justify-between overflow-hidden p-6 sm:p-8 lg:min-h-[15rem]', c.cover)}>
                <LogoMark className="absolute -bottom-[35%] -right-[12%] -z-10 w-[48%] opacity-[0.08] dark:opacity-[0.12]" />
                <p className="text-sm font-medium opacity-70">{c.years}</p>
                <p className="max-w-[14ch] text-2xl font-semibold leading-tight tracking-tight sm:text-[1.75rem]">
                  {c.client}
                </p>
              </div>

              <div className="flex flex-col p-6 sm:p-8">
                <h3 className="text-xl font-semibold leading-snug text-zinc-950 dark:text-white">{c.title}</h3>
                <p className="mt-3 max-w-[56ch] leading-7 text-zinc-600 dark:text-zinc-400">{c.body}</p>
                <dl className="mt-auto grid gap-5 pt-8 sm:grid-cols-3">
                  {c.facts.map((f) => (
                    <div key={f.label} className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
                      <dt className="text-sm text-zinc-500">{f.label}</dt>
                      <dd className="mt-1 text-[15px] font-medium text-zinc-900 dark:text-zinc-100">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
