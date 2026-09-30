'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '../Reveal'
import { SERVICES as ALL_SERVICES } from './data'

// Doowy has its own section on the homepage, so the tabs cover the other services.
const SERVICES = ALL_SERVICES.filter((s) => s.id !== 'doowy')

export function Services() {
  const [active, setActive] = useState(0)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const service = SERVICES[active]

  function onKeyDown(e: React.KeyboardEvent) {
    const step = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0
    if (!step) return
    e.preventDefault()
    const next = (active + step + SERVICES.length) % SERVICES.length
    setActive(next)
    tabs.current[next]?.focus()
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
          Бидний үйлчилгээ
        </h2>
      </Reveal>

      <Reveal className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div role="tablist" aria-orientation="vertical" onKeyDown={onKeyDown} className="flex flex-col">
          {SERVICES.map((s, i) => {
            const selected = i === active
            return (
              <button
                key={s.id}
                ref={(el) => { tabs.current[i] = el }}
                role="tab"
                id={`tab-${s.id}`}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(i)}
                className={cn(
                  'group flex items-center justify-between gap-4 border-b border-zinc-200 py-5 text-left text-lg font-semibold leading-snug transition-colors first:border-t dark:border-zinc-800',
                  selected ? 'text-zinc-950 dark:text-white' : 'text-zinc-400 hover:text-zinc-700 dark:text-zinc-600 dark:hover:text-zinc-300',
                )}
              >
                {s.title}
                <ArrowRight
                  className={cn('h-5 w-5 shrink-0 transition', selected ? 'text-brand-600 dark:text-brand-300' : 'opacity-0 group-hover:opacity-100')}
                  strokeWidth={2}
                />
              </button>
            )
          })}
        </div>

        <div
          key={service.id}
          role="tabpanel"
          id={`panel-${service.id}`}
          aria-labelledby={`tab-${service.id}`}
          className="reveal flex flex-col rounded-3xl bg-brand-50 p-6 sm:p-8 dark:bg-brand-950"
        >
          <p className="leading-7 text-zinc-700 dark:text-zinc-300">{service.body}</p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {service.items.map((item) => (
              <li key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 text-[15px] text-zinc-900 dark:bg-white/5 dark:text-zinc-100">
                <Check className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300" strokeWidth={2.5} />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              <span className="text-zinc-500">Технологи:</span> {service.stack}
            </p>
            <Link
              href="/service"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
            >
              Дэлгэрэнгүй
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
