// components/ServiceTeaser.tsx
'use client'

import React from 'react'
import Link from 'next/link'

interface ServiceItem {
  icon: string
  title: string
  desc: string
}

const SERVICE_ITEMS: ServiceItem[] = [
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>',
    title: 'ERP Систем',
    desc: 'Odoo ERP нэвтрүүлэлт, тохиргоо, дэмжлэг',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
    title: 'Вэб хөгжүүлэлт',
    desc: 'React, Next.js ашиглан вэб систем бүтээнэ',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/>',
    title: 'Мобайл апп',
    desc: 'Flutter, React Native ашиглан мобайл апп хөгжүүлнэ',
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>',
    title: 'UI/UX Дизайн',
    desc: 'Figma дизайнаас эхлэн код хүртэл хүргэнэ',
  },
]

export default function ServiceTeaser() {
  return (
    <section className="bg-transparent px-12 py-8">
      <div className="max-w-[960px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-md font-semibold tracking-[0.1em] uppercase text-sky-500 dark:text-sky-400 mb-2.5 font-['Roboto']">
            Бидний үйлчилгээ
          </div>
          <h2 className="text-[28px] font-bold leading-snug text-slate-900 dark:text-slate-100 font-['Lexend']">
            Таны бизнест хэрэгтэй бүх шийдэл
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICE_ITEMS.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-[20px] p-5 px-[18px] border border-sky-100 dark:border-slate-700 shadow-sm transition-transform duration-150 hover:-translate-y-0.5"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-[10px] bg-sky-100 dark:bg-sky-500/15 flex items-center justify-center mb-3.5">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  stroke="currentColor"
                  className="text-sky-600 dark:text-sky-400"
                  viewBox="0 0 24 24"
                  dangerouslySetInnerHTML={{ __html: service.icon }}
                />
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2 font-['Lexend']">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-5 font-['Roboto']">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-7">
          <Link
            href="/service"
            className="inline-block text-sm font-medium px-5 py-2 rounded-full border border-sky-100 dark:border-slate-700 bg-transparent text-sky-500 dark:text-sky-400 transition-colors duration-150 hover:bg-sky-50 dark:hover:bg-slate-800 font-['Roboto']"
          >
            Дэлгэрэнгүй үзэх →
          </Link>
        </div>
      </div>
    </section>
  )
}