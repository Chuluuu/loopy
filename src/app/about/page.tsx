'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function AboutUs() {
  const router = useRouter();

  const stats = [
    { num: '2022', label: 'Байгуулагдсан он' },
    { num: '10+', label: 'Амжилттай төсөл' },
    { num: '13+', label: 'Жилийн туршлага' },
    //{ num: '15+', label: 'Мэргэшсэн баг' },
  ];

  const expertise = [
    { icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18', label: 'ERP / Odoo' },
    { icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', label: 'Вэб хөгжүүлэлт' },
    { icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z', label: 'Мобайл апп' },
    { icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'UI/UX Дизайн' },
    { icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'IT Сургалт' },
    { icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', label: 'DevOps' },
  ];

  const advantages = [
    'Монголын орчинд тохирсон олон улсын шийдэл',
    'Шинэлэг технологи (AI, Cloud, аналитик)',
    'Найдвартай, алдаагүй системийн дизайн',
    'Клиент төвтэй хандлага, нягт хамтын ажиллагаа',
  ];

  const projects = [
    { year: '2022', items: ['"Номин Холдинг" ХХК — Odoo ERP хувилбар ахиулалт'] },
    { year: '2023', items: ['"Номин Холдинг" ХХК — Өгөгдлийн баазын сайжруулалт', '"ИСМ Биллинг" ХХК — EDIMIS 3.0 Frontend'] },
    { year: '2024', items: ['МУИС — Коха системийн UI/UX шинэчлэл', '"ИСМ Биллинг" ХХК — ECM-EBARIMT апп', '"ИСМ Биллинг" ХХК — ECM-LICENSE-MANAGER апп', '"ИСМ Биллинг" ХХК — MDM-FRONTEND/BACKEND'] },
    { year: '2025', items: ['"Парламентын судалгаа" — Коха системийн сайжруулалт'] },
  ];

  return (
    <div className="py-5 px-4 md:px-20">
      <div className=" mx-auto space-y-8">

        {/* 1. Intro Card */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-12 border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">
              Бидний тухай
            </h2>
            <p className="text-md leading-relaxed text-slate-600 dark:text-slate-400  mx-auto mb-6">
              Манай Лүпер Софт ХХК нь 2022 онд Програм Хангамжийн чиглэлээр үйл ажиллагаа явуулж, өндөр чанартай бүтээгдэхүүн үйлчилгээг хэрэглэгчид нийлүүлэх зорилгоор байгуулагдсан инновацилаг бүтээлч байгуулга юм. Байгуулагдсан цагаасаа эхлэн вэб систем хөгжүүлэлт, ухаалаг аппликэшн хөгжүүлэлт, дизайн хөгжүүлэлт болон мэдээлэл технологийн сургалт, зөвлөгөө гэсэн үндсэн чиглэлүүдээр дотоодын олон байгууллагатай хамтарч ажилласан арвин туршлагатай
            </p>
            <p className="text-md leading-relaxed text-slate-700 dark:text-slate-300 max-w-4xl mx-auto font-medium">
              Компанийн хүний нөөц нь гадаад болон дотоодын их дээд сургууль төгссөн, 15 жилийн турш систем хөгжүүлэлтийн
              шилдэг технологуудыг ашиглан хөгжүүлэлт хийж буй мэргэшсэн боловсон хүчнээс бүрдэж байна.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center border border-slate-200 dark:border-slate-700">
                <div className="text-3xl font-bold text-sky-500">{stat.num}</div>
                <div className="text-md text-slate-500 dark:text-slate-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Expertise */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-700">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">Мэргэшлийн чиглэлүүд</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {expertise.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-5 rounded-2xl border border-slate-200 dark:border-slate-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 flex-shrink-0 text-sky-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
                <span className="font-medium text-slate-700 dark:text-slate-200">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Advantages + Projects */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Advantages */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">Бидний давуу талууд</h3>
            <div className="space-y-5">
              {advantages.map((adv, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-xl text-blue-500 dark:text-sky-400 mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Timeline */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-6">Хэрэгжүүлсэн төслүүд</h3>
            <div className="space-y-8">
              {projects.map((project, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex flex-col items-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-sky-500" />
                    {i < projects.length - 1 && (
                      <div className="w-px flex-1 bg-slate-300 dark:bg-slate-700 mt-3" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="text-md font-bold text-sky-500 tracking-wider mb-3">{project.year}</div>
                    {project.items.map((item, idx) => (
                      <div key={idx} className="flex gap-3 mb-3">
                        <span className="text-blue-500 dark:text-sky-400">✓</span>
                        <span className="text-md text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. CTA */}
        <div className="bg-white dark:bg-slate-800 rounded-3xl p-10 text-center border border-blue-100 dark:border-slate-700">
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Хэрэв танд програм хангамж болон техник, технологийн шийдэл хэрэгтэй бол Лүпер Софт-тэй хамтран ажиллаарай!
          </p>
          <button
            onClick={() => router.push('/contact')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-full transition-all active:scale-95"
          >
            Бидэнтэй холбогдох →
          </button>
        </div>
      </div>
    </div>
  );
}