import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold tabular-nums text-brand-600 dark:text-brand-300">404</p>
      <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2.5rem] dark:text-white">
        Хуудас олдсонгүй
      </h1>
      <p className="mt-4 max-w-[48ch] leading-7 text-zinc-600 dark:text-zinc-400">
        Таны хайсан хуудас устсан эсвэл хаяг нь өөрчлөгдсөн байж болзошгүй.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-300 dark:hover:text-brand-200"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2} />
        Нүүр хуудас руу буцах
      </Link>
    </main>
  )
}
