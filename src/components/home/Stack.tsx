import {
  SiDocker,
  SiFigma,
  SiFlutter,
  SiNextdotjs,
  SiNodedotjs,
  SiOdoo,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpring,
  SiTypescript,
} from 'react-icons/si'
import { Reveal } from '../Reveal'

// Only tools used in delivered projects. The full list lives on /service.
const STACK = [
  { name: 'Odoo', Icon: SiOdoo },
  { name: 'Python', Icon: SiPython },
  { name: 'PostgreSQL', Icon: SiPostgresql },
  { name: 'React', Icon: SiReact },
  { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript },
  { name: 'Flutter', Icon: SiFlutter },
  { name: 'React Native', Icon: SiReact },
  { name: 'Spring Boot', Icon: SiSpring },
  { name: 'Node.js', Icon: SiNodedotjs },
  { name: 'Docker', Icon: SiDocker },
  { name: 'Figma', Icon: SiFigma },
]

export function Stack() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
            Ашигладаг технологи
          </h2>
          <p className="mt-4 max-w-[40ch] leading-7 text-zinc-600 dark:text-zinc-400">
            Бодит төслүүд дээр ашиглаж, туршигдсан хэрэгслүүд.
          </p>
        </div>

        <ul className="grid grid-cols-2 overflow-hidden rounded-3xl border border-zinc-200 sm:grid-cols-3 lg:grid-cols-4 dark:border-zinc-800">
          {STACK.map(({ name, Icon }) => (
            <li
              key={name}
              className="group -mb-px -mr-px flex items-center gap-3 border-b border-r border-zinc-200 px-4 py-4 transition-colors hover:bg-brand-50 sm:px-5 dark:border-zinc-800 dark:hover:bg-brand-950"
            >
              <Icon className="h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover:text-brand-600 dark:text-zinc-500 dark:group-hover:text-brand-300" aria-hidden="true" />
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
