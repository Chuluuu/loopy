'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CONTACT } from './site'

type Fields = { name: string; email: string; phone: string; message: string }
type Errors = Partial<Record<keyof Fields, string>>

const EMPTY: Fields = { name: '', email: '', phone: '', message: '' }

function validate(f: Fields): Errors {
  const errors: Errors = {}
  if (!f.name.trim()) errors.name = 'Нэрээ оруулна уу.'
  if (!f.email.trim()) errors.email = 'И-мэйл хаягаа оруулна уу.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) errors.email = 'И-мэйл хаяг буруу байна.'
  if (f.message.trim().length < 10) errors.message = 'Хүсэлтээ дор хаяж 10 тэмдэгтээр бичнэ үү.'
  return errors
}

// No backend yet: a valid submission opens the visitor's mail app with the message pre-filled.
export function ContactForm() {
  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  function update(key: keyof Fields) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFields((f) => ({ ...f, [key]: e.target.value }))
      if (errors[key]) setErrors((err) => ({ ...err, [key]: undefined }))
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length) return

    const body = [
      `Нэр: ${fields.name}`,
      `И-мэйл: ${fields.email}`,
      ...(fields.phone.trim() ? [`Утас: ${fields.phone}`] : []),
      '',
      fields.message,
    ].join('\n')
    const subject = `Вэбсайтаас ирсэн хүсэлт: ${fields.name}`
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const inputClass = (invalid?: string) =>
    cn(
      'mt-2 block w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-zinc-900 placeholder:text-zinc-500 transition focus:outline-none focus:ring-2 dark:bg-zinc-900 dark:text-white dark:placeholder:text-zinc-500',
      invalid
        ? 'border-red-500 focus:ring-red-500/30'
        : 'border-zinc-300 focus:border-brand-600 focus:ring-brand-600/20 dark:border-zinc-700 dark:focus:border-brand-400',
    )

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Нэр</label>
          <input id="name" name="name" autoComplete="name" value={fields.name} onChange={update('name')} aria-invalid={!!errors.name} aria-describedby={errors.name ? 'name-error' : undefined} className={inputClass(errors.name)} />
          {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Утас <span className="font-normal text-zinc-500">(заавал биш)</span>
          </label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" value={fields.phone} onChange={update('phone')} className={inputClass()} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">И-мэйл</label>
        <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={update('email')} aria-invalid={!!errors.email} aria-describedby={errors.email ? 'email-error' : undefined} className={inputClass(errors.email)} />
        {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-zinc-900 dark:text-zinc-100">Хүсэлт</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={fields.message}
          onChange={update('message')}
          placeholder="Ямар систем хэрэгтэй байгаа, хугацаа, одоо ашиглаж буй системийн талаар товч бичнэ үү."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClass(errors.message), 'resize-y')}
        />
        {errors.message && <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 pt-1">
        <button
          type="submit"
          className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-6 text-sm font-semibold text-white transition hover:bg-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2 active:scale-[0.98] dark:bg-brand-400 dark:text-zinc-950 dark:hover:bg-brand-300 dark:focus-visible:ring-offset-zinc-950"
        >
          Илгээх
          <Send className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
        </button>
        <p className="text-sm text-zinc-600 dark:text-zinc-400" role="status">
          {sent
            ? `И-мэйл програм нээгдсэнгүй бол ${CONTACT.email} хаяг руу шууд бичнэ үү.`
            : 'Илгээх дарахад таны и-мэйл програм нээгдэнэ.'}
        </p>
      </div>
    </form>
  )
}
