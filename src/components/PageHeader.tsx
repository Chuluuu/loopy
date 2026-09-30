// Compact header for inner pages; pairs with the homepage hero's type scale.
export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <header className="mx-auto max-w-7xl px-4 pb-12 pt-14 sm:px-6 lg:px-8 lg:pb-16 lg:pt-20">
      <h1 className="reveal text-balance text-[2rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:text-[2.5rem] dark:text-white">
        {title}
      </h1>
      <p
        className="reveal mt-4 max-w-[60ch] text-pretty text-lg leading-8 text-zinc-600 dark:text-zinc-400"
        style={{ '--i': 1 } as React.CSSProperties}
      >
        {lead}
      </p>
    </header>
  )
}
