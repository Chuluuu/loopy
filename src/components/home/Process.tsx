import { Reveal } from '../Reveal'
import { PROCESS } from './data'

export function Process() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal>
        <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
          Эхнээс нь дуустал нэг баг
        </h2>
      </Reveal>

      <div className="relative mt-10 lg:mt-12">
        <div aria-hidden="true" className="absolute left-0 right-0 top-[7px] hidden h-px bg-zinc-200 lg:block dark:bg-zinc-800" />
        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROCESS.map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 90}>
                <span aria-hidden="true" className="block h-[15px] w-[15px] rounded-full border-2 border-brand-600 bg-white dark:border-brand-300 dark:bg-zinc-950" />
                <h3 className="mt-6 text-lg font-semibold text-zinc-950 dark:text-white">{step.title}</h3>
                <p className="mt-2 max-w-[32ch] text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
