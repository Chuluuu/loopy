import { Globe, Handshake, Layers, ShieldCheck } from 'lucide-react'
import { Reveal } from '../Reveal'

// Differentiators from the "Бидний давуу талууд" list on /about.
const REASONS = [
  {
    Icon: Globe,
    title: 'Монголын орчинд тохирсон',
    body: 'Олон улсад туршигдсан платформуудыг Монголын байгууллагын ажлын онцлогт тааруулж нэвтрүүлнэ.',
  },
  {
    Icon: ShieldCheck,
    title: 'Найдвартай системийн дизайн',
    body: 'Системийг тогтвортой ажиллахаар, цаашид өргөтгөхөд хялбараар төлөвлөж бүтээнэ.',
  },
  {
    Icon: Layers,
    title: 'Орчин үеийн технологи',
    body: 'Cloud, аналитик, AI зэрэг технологийг бодит хэрэгцээ байгаа газар нь ашиглана.',
  },
  {
    Icon: Handshake,
    title: 'Нягт хамтын ажиллагаа',
    body: 'Танай багтай нэг баг шиг ажиллаж, явцыг тогтмол танилцуулна.',
  },
]

export function Statement() {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-900/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal>
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
            Яагаад Лүпер Софт гэж?
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:mt-12">
          {REASONS.map(({ Icon, title, body }, i) => (
            <Reveal key={title} delay={(i % 2) * 90} className="flex gap-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white ring-1 ring-inset ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                <Icon className="h-5 w-5 text-brand-600 dark:text-brand-300" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold leading-snug text-zinc-950 dark:text-white">{title}</h3>
                <p className="mt-2 max-w-[46ch] leading-7 text-zinc-600 dark:text-zinc-400">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
