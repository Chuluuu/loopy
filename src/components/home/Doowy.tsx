import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Calculator, FileText, GitBranch, MapPin, Smartphone, Warehouse } from 'lucide-react'
import { Reveal } from '../Reveal'

// Feature copy follows the public doowy.mn landing page.
const FEATURES = [
  { Icon: MapPin, title: 'Ирцийн бүртгэл', body: 'GPS, WiFi эсвэл QR кодоор ирц бүртгэнэ. Аль аргыг зөвшөөрөхийг та тохируулна.' },
  { Icon: Smartphone, title: 'iOS, Android апп', body: 'Чөлөө хүсэх, илүү цаг бүртгэх, зөвшөөрөл өгөх, мэдэгдэл авах. Хаанаас ч.' },
  { Icon: Calculator, title: 'Автомат цалин', body: 'Ирц, илүү цаг, хасалтаас цалинг системд орсон мэдээллээр автоматаар тооцоолно.' },
  { Icon: GitBranch, title: 'Зөвшөөрлийн урсгал', body: 'Хэлтсийн дарга, HR, захирал гэх мэт шатлалыг өөрийн дүрмээр тохируулна.' },
  { Icon: FileText, title: 'Тушаал', body: 'Томилгоо, шилжилт, цалингийн өөрчлөлтийн тушаалыг загвараас үүсгэж .docx болгон татна.' },
  { Icon: Warehouse, title: 'Агуулах, түнш', body: 'Агуулах, түгээлт, түнш, бүтээгдэхүүнийг ч мөн нэг системд хянана.' },
]

export function Doowy() {
  return (
    <section id="doowy" className="scroll-mt-20 border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <Reveal className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-brand-600 dark:text-brand-300">Бидний бүтээгдэхүүн</p>
            <h2 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight text-zinc-950 sm:text-[2rem] dark:text-white">
              Doowy ERP
            </h2>
            <p className="mt-4 max-w-[60ch] text-pretty leading-7 text-zinc-600 dark:text-zinc-400">
              Хүний нөөц, ирцийн бүртгэл, цалин бодолт, тушаал, агуулах, түншийн удирдлагыг нэг системд нэгтгэсэн, Монгол байгууллагад зориулсан ERP платформ. Вэб болон мобайл апп дээр ажиллана.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="https://doowy.mn"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white transition hover:bg-brand-700 active:scale-[0.98] dark:bg-brand-400 dark:text-zinc-950 dark:hover:bg-brand-300"
            >
              doowy.mn үзэх
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={2.25} />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-zinc-800 transition-colors hover:text-brand-600 dark:text-zinc-200 dark:hover:text-brand-300"
            >
              Демо үзэх хүсэлт
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ Icon, title, body }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 80} className="border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <Icon className="h-[18px] w-[18px] text-brand-600 dark:text-brand-300" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="font-semibold text-zinc-950 dark:text-white">{title}</h3>
                </div>
                <p className="mt-2 max-w-[40ch] text-[15px] leading-7 text-zinc-600 dark:text-zinc-400">{body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
