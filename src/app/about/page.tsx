import type { Metadata } from 'next'
import { Boxes, Code2, GraduationCap, PenTool, Server, Smartphone } from 'lucide-react'
import { PageHeader } from '@/components/PageHeader'
import { Reveal } from '@/components/Reveal'
import { ContactCta } from '@/components/home/ContactCta'
import { PROJECT_HISTORY } from '@/components/home/data'

export const metadata: Metadata = {
  title: 'Бидний тухай | Лүпер Софт ХХК',
  description: 'Лүпер Софт ХХК нь 2022 онд байгуулагдсан, байгууллагын систем хөгжүүлэлтэд мэргэшсэн програм хангамжийн компани.',
}

const FACTS = [
  { value: '2022', label: 'Байгуулагдсан он' },
  { value: '10+', label: 'Хэрэгжүүлсэн төсөл' },
  { value: '6', label: 'Мэргэшлийн чиглэл' },
]

const EXPERTISE = [
  { label: 'ERP / Odoo', Icon: Boxes },
  { label: 'Вэб хөгжүүлэлт', Icon: Code2 },
  { label: 'Мобайл апп', Icon: Smartphone },
  { label: 'UI/UX дизайн', Icon: PenTool },
  { label: 'IT сургалт', Icon: GraduationCap },
  { label: 'DevOps', Icon: Server },
]

export default function AboutUs() {
  return (
    <main>
      <PageHeader
        title="Бидний тухай"
        lead="Лүпер Софт ХХК нь 2022 онд байгуулагдсан, байгууллагын систем хөгжүүлэлтэд мэргэшсэн Монголын програм хангамжийн компани."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:px-8 lg:pb-24">
        <Reveal className="space-y-5 text-pretty leading-8 text-zinc-700 dark:text-zinc-300">
          <p>
            Бид өндөр чанартай програм хангамж, үйлчилгээг хэрэглэгчдэдээ хүргэх зорилгоор байгуулагдсан. Байгуулагдсан цагаасаа эхлэн вэб систем, ухаалаг аппликешн, дизайн хөгжүүлэлт болон мэдээллийн технологийн сургалт, зөвлөгөөний чиглэлээр дотоодын олон байгууллагатай хамтран ажилласан. Мөн хүний нөөц, цалин, агуулахын үйл ажиллагааг нэгтгэсэн өөрсдийн <a href="https://doowy.mn" target="_blank" rel="noopener noreferrer" className="font-medium text-brand-600 underline decoration-brand-200 underline-offset-4 hover:decoration-brand-600 dark:text-brand-300 dark:decoration-brand-800">Doowy ERP</a> платформыг хөгжүүлдэг.
          </p>
          <p>
            Манай баг гадаад болон дотоодын их, дээд сургууль төгссөн, 15 жилийн турш систем хөгжүүлэлтийн шилдэг технологиудыг ашиглан ажиллаж буй мэргэшсэн инженерүүдээс бүрддэг.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <dl className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
            {FACTS.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 py-5">
                <dt className="text-zinc-600 dark:text-zinc-400">{f.label}</dt>
                <dd className="text-2xl font-semibold tabular-nums tracking-tight text-zinc-950 dark:text-white">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="bg-zinc-50 dark:bg-zinc-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <Reveal>
            <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
              Мэргэшлийн чиглэлүүд
            </h2>
          </Reveal>
          <Reveal className="mt-10">
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {EXPERTISE.map(({ label, Icon }) => (
                <li key={label} className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-950">
                    <Icon className="h-5 w-5 text-brand-600 dark:text-brand-300" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <span className="font-medium text-zinc-900 dark:text-zinc-100">{label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
            Хэрэгжүүлсэн төслүүд
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-zinc-200 dark:border-zinc-800">
          {PROJECT_HISTORY.map((group) => (
            <Reveal key={group.year} className="grid gap-4 border-b border-zinc-200 py-8 sm:grid-cols-[8rem_1fr] dark:border-zinc-800">
              <p className="text-2xl font-semibold tabular-nums tracking-tight text-brand-600 dark:text-brand-300">{group.year}</p>
              <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                {group.items.map((item) => (
                  <li key={item.work}>
                    <p className="font-semibold text-zinc-950 dark:text-white">{item.work}</p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{item.client}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCta />
    </main>
  )
}
