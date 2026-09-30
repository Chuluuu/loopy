// Figures come from /about: founded 2022, 10+ projects, 6 areas of expertise.
const FACTS = [
  { value: '2022', label: 'Байгуулагдсан он' },
  { value: '10+', label: 'Хэрэгжүүлсэн төсөл' },
  { value: '6', label: 'Мэргэшлийн чиглэл' },
]

const CLIENTS = ['Номин Холдинг', 'ИСМ Биллинг', 'МУИС', 'Парламентын судалгаа']

export function Clients() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
      <div className="grid grid-cols-3 gap-y-8 border-b border-zinc-200 pb-10 lg:grid-cols-[1fr_1fr_1fr_1.6fr] lg:pb-14 dark:border-zinc-800">
        {FACTS.map((f) => (
          <div key={f.label} className="border-l border-zinc-200 px-4 first:border-l-0 first:pl-0 sm:px-6 dark:border-zinc-800">
            <p className="text-2xl font-semibold tabular-nums tracking-tight text-zinc-950 sm:text-3xl dark:text-white">{f.value}</p>
            <p className="mt-1 text-sm leading-snug text-zinc-600 dark:text-zinc-400">{f.label}</p>
          </div>
        ))}
        <div className="col-span-3 lg:col-span-1 lg:border-l lg:border-zinc-200 lg:pl-8 dark:border-zinc-800">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">Хамтран ажилласан байгууллагууд</p>
          <p className="mt-2 text-pretty font-medium leading-7 text-zinc-900 dark:text-zinc-100">
            {CLIENTS.join(', ')}
          </p>
        </div>
      </div>
    </section>
  )
}
