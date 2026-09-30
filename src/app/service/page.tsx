import type { Metadata } from 'next'
import { ArrowUpRight, Check } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { Process } from '@/components/home/Process'
import { ContactCta } from '@/components/home/ContactCta'
import { SERVICES } from '@/components/home/data'

export const metadata: Metadata = {
  title: 'Үйлчилгээ | Лүпер Софт ХХК',
  description: 'Doowy ERP платформ, Odoo ERP нэвтрүүлэлт, вэб болон мобайл аппликешн, Коха номын сангийн систем, UI/UX дизайн.',
}

// Grouped from the stack we have delivered with (components/static/techstacks.ts).
const STACK_GROUPS = [
  { title: 'Doowy ERP', items: ['Spring Boot', 'Next.js', 'React Native', 'PostgreSQL'] },
  { title: 'Odoo ERP', items: ['Odoo', 'Python', 'PostgreSQL', 'XML'] },
  { title: 'Frontend, мобайл', items: ['React', 'Next.js', 'Flutter', 'React Native', 'HTML, CSS'] },
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Python', 'Node.js'] },
  { title: 'Өгөгдлийн сан', items: ['PostgreSQL', 'MySQL', 'MSSQL', 'SQLite', 'MongoDB'] },
  { title: 'DevOps', items: ['Docker', 'Kubernetes'] },
]

export default function Service() {
  return (
    <main>
      <PageHeader
        title="Үйлчилгээ"
        lead="Шаардлага тодорхойлохоос эхлээд хөгжүүлэлт, нэвтрүүлэлт, дэмжлэг хүртэл нэг багаар хүргэнэ."
      />

      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        {SERVICES.map((s) => (
          <Reveal
            key={s.id}
            className="grid gap-8 border-t border-zinc-200 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-16 dark:border-zinc-800"
          >
            <div id={s.id} className="scroll-mt-24">
              <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-white">{s.title}</h2>
              <p className="mt-4 max-w-[52ch] text-pretty leading-7 text-zinc-600 dark:text-zinc-400">{s.body}</p>
              <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="text-zinc-500">Технологи:</span> {s.stack}
              </p>
              {s.link && (
                <a
                  href={s.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
                >
                  {s.link.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
              )}
            </div>

            <div className="space-y-8">
              {s.modules && (
                <div>
                  <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Модулиуд</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {s.modules.map((m) => (
                      <li key={m} className="rounded-lg bg-brand-50 px-3 py-1.5 text-sm text-brand-800 dark:bg-brand-950 dark:text-brand-200">
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div>
                <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">Юу багтах вэ</h3>
                <ul className="mt-3 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-zinc-800 dark:text-zinc-200">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-300" strokeWidth={2.5} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </section>

      <div className="bg-zinc-50 dark:bg-zinc-900/40">
        <Process />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
            Технологи
          </h2>
          <p className="mt-4 max-w-[56ch] leading-7 text-zinc-600 dark:text-zinc-400">
            Бодит төслүүд дээр ашиглаж, туршигдсан хэрэгслүүд.
          </p>
        </Reveal>
        <Reveal className="mt-10">
          <dl className="grid gap-px overflow-hidden rounded-3xl bg-zinc-200 ring-1 ring-zinc-200 sm:grid-cols-2 lg:grid-cols-3 dark:bg-zinc-800 dark:ring-zinc-800">
            {STACK_GROUPS.map((g) => (
              <div key={g.title} className="bg-white p-6 dark:bg-zinc-950">
                <dt className="text-sm font-semibold text-zinc-950 dark:text-white">{g.title}</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <ContactCta />
    </main>
  )
}
