// components/Hero.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface Slide {
  title: string
  desc: string
  tag: string
  icon: string
}

const SLIDES: Slide[] = [
  { title: 'Вэб болон Гар утасны аппликешн', desc: 'React, Flutter, React Native технологиор дэвшилтэт шийдлүүдийг хөгжүүлнэ.', tag: 'Web & Mobile', icon: '💻' },
  { title: 'ERP Нэвтрүүлэлт', desc: 'Odoo ERP системийг нэвтрүүлж, тохируулж, дэмжлэг үзүүлнэ.', tag: 'ERP / Odoo', icon: '⚙️' },
  { title: 'UI/UX Дизайн', desc: 'Хэрэглэгчдэд ойлгомжтой, сайхан дизайн бүтээнэ.', tag: 'Design', icon: '🎨' },
  { title: 'Номын Сангийн Систем', desc: 'Коха системийн хувилбар ахиулалт, UI/UX шинэчлэл.', tag: 'Koha', icon: '📚' },
]

const STATS_BAR = [
  { num: '10+', label: 'Төсөл' },
  { num: '13+', label: 'Жилийн туршлага' },
  { num: '3+', label: 'Жил' },
]

export function Hero() {
  const [slide, setSlide] = useState(0)
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative overflow-hidden mt-[-4.75rem] pb-32 pt-[1.75rem] bg-slate-50 dark:bg-slate-900 px-12 py-8">
      {/* Background blobs */}
      <div className="absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full bg-sky-500/20 dark:bg-sky-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -right-16 w-[340px] h-[340px] rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
      
      {/* Grid lines */}
      <svg className="absolute inset-0 opacity-10 pointer-events-none w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {[0, 1, 2, 3, 4, 5].map(i => (
          <line key={i} x1={`${i * 20 + 5}%`} y1="0" x2={`${i * 20 + 5}%`} y2="100%" stroke="currentColor" className="text-slate-400" strokeWidth="1" />
        ))}
        {[0, 1, 2, 3].map(i => (
          <line key={`h${i}`} x1="0" y1={`${i * 33 + 10}%`} x2="100%" y2={`${i * 33 + 10}%`} stroke="currentColor" className="text-slate-400" strokeWidth="1" />
        ))}
      </svg>

      <div className="relative top-20 z-10 px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <div className="text-xs font-medium tracking-[0.1em] uppercase text-sky-500 dark:text-sky-400 mb-4 font-['Roboto']">
            Looper Soft LLC · your future is with us
          </div>
          
          <h1 className="text-5xl font-bold text-slate-900 dark:text-slate-100 leading-tight mb-5 font-['Lexend']">
            Програм<br/>Хангамжийн<br/><span className="text-sky-500 dark:text-sky-400">Шийдлүүд</span>
          </h1>
          
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-7 mb-6 max-w-md font-['Roboto']">
            Вэб, мобайл, ERP — таны бизнесэд тохирсон технологийн шийдлийг бид бүтээнэ.
          </p>

          {/* Stats bar */}
          <div className="flex gap-6 mb-7">
            {STATS_BAR.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-none font-['Lexend']">
                  {stat.num}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-['Roboto']">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center px-6 py-3 rounded-lg border-none font-medium text-sm text-slate-50 bg-slate-900 dark:bg-sky-500 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg shadow-sm font-['Roboto']"
            >
              Бидэнтэй холбогдох <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
            </Link>
            
            <Link
              href="/service"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-transparent text-slate-900 dark:text-slate-100 font-medium text-sm transition-colors duration-150 hover:bg-slate-100 dark:hover:bg-slate-800 font-['Roboto']"
            >
              Үйлчилгээ үзэх
            </Link>
          </div>
        </div>

        {/* Right: Animated card */}
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className={`
            bg-white dark:bg-slate-800 rounded-[20px] p-6
            border border-sky-100 dark:border-slate-700
            transition-all duration-300
            ${hover ? 'shadow-xl shadow-sky-500/10 dark:shadow-sky-500/10 -translate-y-1' : 'shadow-sm'}
          `}
        >
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 mb-4 pb-3.5 border-b border-slate-100 dark:border-slate-700">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="flex-1" />
            <span className="font-mono text-xs text-slate-400 dark:text-slate-500">looper.mn</span>
          </div>

          {/* Card content */}
          <div className="flex items-start gap-3.5 mb-3.5">
            <div className="w-12 h-12 rounded-[14px] bg-sky-100 dark:bg-sky-500/15 flex items-center justify-center text-2xl shrink-0">
              {SLIDES[slide].icon}
            </div>
            <div className="min-w-0">
              <div className="text-[10px] font-semibold tracking-[0.08em] uppercase text-sky-500 dark:text-sky-400 mb-1 font-['Roboto']">
                {SLIDES[slide].tag}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 leading-snug font-['Lexend']">
                {SLIDES[slide].title}
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-400 leading-[22px] mb-4.5 font-['Roboto']">
            {SLIDES[slide].desc}
          </p>

          {/* Skeleton lines */}
          <div className="flex flex-col gap-2 mb-4.5">
            <div className="h-1.5 rounded-full bg-sky-50 dark:bg-slate-700 w-[90%]" />
            <div className="h-1.5 rounded-full bg-sky-50 dark:bg-slate-700 w-[75%]" />
            <div className="h-1.5 rounded-full bg-sky-50 dark:bg-slate-700 w-[85%]" />
          </div>

          {/* Dots */}
          <div className="flex gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`
                  h-1.5 rounded-full border-none cursor-pointer transition-all duration-300 p-0
                  ${i === slide ? 'w-6 bg-sky-500' : 'w-1.5 bg-sky-200 dark:bg-slate-600'}
                `}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}