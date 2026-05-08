// components/Services.tsx
'use client'

import React from 'react'

import {
  SiReact, SiFlutter, SiSpring, SiDocker, SiPostgresql, SiTypescript,
  SiPython, SiOpenjdk, SiMysql, SiSqlite, SiMongodb, SiNodedotjs,
  SiNextdotjs, SiVuedotjs, SiAngular, SiSvelte, SiExpress,
  SiDjango, SiFastapi, SiFlask, SiLaravel, SiRubyonrails,
  SiJavascript,
  SiGraphql, SiApollographql, SiTrpc, SiPrisma, SiSequelize,
  SiRedis,  SiRabbitmq, SiNginx,
  SiApache,  SiGithubactions, SiGitlab,
  SiCircleci, SiJenkins, SiTerraform, SiAnsible, SiPulumi,
  SiKubernetes, SiHelm, SiPrometheus, SiGrafana, SiDatadog,
  SiSentry, SiLogstash, SiKibana, SiElasticsearch,
  SiFigma,  SiTailwindcss, SiBootstrap,
  SiSass, SiLess, SiWebpack, SiVite, SiRollupdotjs,
  SiBabel, SiEslint, SiPrettier, SiJest, SiVitest,
  SiCypress, SiTestinglibrary, SiStorybook,
  SiGit, SiGithub, SiBitbucket, SiJira,
  SiConfluence, SiNotion, SiSlack, SiDiscord
  , SiIntellijidea, SiWebstorm,
  SiPostman, SiInsomnia, SiSwagger, 
  SiNpm, SiYarn, SiPnpm, SiBun,
  SiLinux, SiUbuntu, SiDebian, SiCentos, SiFedora,
  SiArchlinux, SiAlpinelinux,
  SiGooglecloud, SiVercel,
  SiNetlify, SiCloudflare, SiHeroku, SiDigitalocean,
  SiFirebase, SiSupabase, SiAppwrite,
  SiElectron, SiTauri, SiCapacitor, SiIonic,
  SiExpo, SiReactquery,  SiRedux,
  SiMobx, SiRecoil, 
  SiFramer, SiThreedotjs, SiD3Dotjs,
  SiGatsby, SiAstro, SiRemix, SiNuxtdotjs,
  SiHtmx, SiAlpinedotjs, SiHotwire,
  SiRust, SiGo, SiCplusplus, SiC,
  SiPhp, SiRuby, SiPerl, SiElixir, SiErlang,
  SiHaskell, SiScala, SiKotlin, SiSwift,
  SiDart, SiLua, SiJulia, SiR,
  SiGnubash,  SiZsh,
  SiNeovim, SiVim,
  SiMarkdown, SiLatex,
  SiJupyter, SiAnaconda,
  SiOpencv, SiTensorflow, SiPytorch,
  SiKeras, SiScikitlearn, SiPandas, SiNumpy,
  SiHuggingface, SiLangchain,
  SiStripe, SiPaypal, SiSquare,
  SiAuth0,  SiPassport,
  SiJsonwebtokens, 
  SiWebrtc, SiSocketdotio, SiPusher,
  SiAlgolia, SiMeilisearch,
   SiBugsnag,
  SiSonarqube, SiCodecov,
  SiDependabot, SiSnyk,
} from 'react-icons/si'
import { FaDatabase,FaAws} from 'react-icons/fa'
interface Service {
  icon: string
  title: string
  desc: string
  items: string[]
  cols: number
}

const SERVICES: Service[] = [
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>',
    title: 'Байгууллагын ERP Систем',
    desc: 'Odoo ERP систем нэвтрүүлж, тохируулж, дэмжлэг үзүүлнэ.',
    items: ['Хүний нөөц','Санхүү бүртгэл','Төслийн менежмент','Гэрээ','Тушаал болон архив','Дуудлагын бүртгэл','Борлуулалт','Худалдан авалт'],
    cols: 4,
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>',
    title: 'Коха Номын сангийн систем',
    desc: 'Номын сангийн удирдлагын системийг хөгжүүлж, шинэчлэнэ.',
    items: ['UI/UX дизайн', 'Коха системийн хувилбар ахиулалт', 'Коха системийн хөгжүүлэлт'],
    cols: 3,
  },
  {
    icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>',
    title: 'Веб болон Гар утасны аппликешн',
    desc: 'Брэнд вэб систем болон мобайл аппликешн хөгжүүлэлт.',
    items: ['Хувь хүний брэнд вэб систем', 'Компаний брэнд вэб систем', 'Мобайл аппликешн'],
    cols: 3,
  },
]

interface TechTag {
  name: string
  icon: React.ReactNode
}

const TECH_TAGS: TechTag[] = [
    // Frontend
  { name: 'React', icon: <SiReact className="w-3.5 h-3.5" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="w-3.5 h-3.5" /> },
  { name: 'Vue', icon: <SiVuedotjs className="w-3.5 h-3.5" /> },
  { name: 'Nuxt', icon: <SiNuxtdotjs className="w-3.5 h-3.5" /> },
  { name: 'Angular', icon: <SiAngular className="w-3.5 h-3.5" /> },
  // { name: 'Svelte', icon: <SiSvelte className="w-3.5 h-3.5" /> },
  // { name: 'Astro', icon: <SiAstro className="w-3.5 h-3.5" /> },
  // { name: 'Remix', icon: <SiRemix className="w-3.5 h-3.5" /> },
  // { name: 'Gatsby', icon: <SiGatsby className="w-3.5 h-3.5" /> },
  { name: 'Flutter', icon: <SiFlutter className="w-3.5 h-3.5" /> },
  { name: 'React Native', icon: <SiReact className="w-3.5 h-3.5" /> },
  // { name: 'Electron', icon: <SiElectron className="w-3.5 h-3.5" /> },
  // { name: 'Tauri', icon: <SiTauri className="w-3.5 h-3.5" /> },

  // Styling
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-3.5 h-3.5" /> },
  { name: 'Bootstrap', icon: <SiBootstrap className="w-3.5 h-3.5" /> },
  { name: 'Sass', icon: <SiSass className="w-3.5 h-3.5" /> },
  // { name: 'Framer Motion', icon: <SiFramer className="w-3.5 h-3.5" /> },

  // Backend
  { name: 'Node.js', icon: <SiNodedotjs className="w-3.5 h-3.5" /> },
  { name: 'Express', icon: <SiExpress className="w-3.5 h-3.5" /> },
  { name: 'Django', icon: <SiDjango className="w-3.5 h-3.5" /> },
  { name: 'FastAPI', icon: <SiFastapi className="w-3.5 h-3.5" /> },
  { name: 'Flask', icon: <SiFlask className="w-3.5 h-3.5" /> },
  { name: 'Spring Boot', icon: <SiSpring className="w-3.5 h-3.5" /> },
  // { name: 'Laravel', icon: <SiLaravel className="w-3.5 h-3.5" /> },
  // { name: 'Ruby on Rails', icon: <SiRubyonrails className="w-3.5 h-3.5" /> },
  { name: 'Odoo', icon: <FaDatabase className="w-3.5 h-3.5" /> },

  // Languages
  { name: 'TypeScript', icon: <SiTypescript className="w-3.5 h-3.5" /> },
  { name: 'JavaScript', icon: <SiJavascript className="w-3.5 h-3.5" /> },
  { name: 'Python', icon: <SiPython className="w-3.5 h-3.5" /> },
  { name: 'Java', icon: <SiOpenjdk className="w-3.5 h-3.5" /> },
  { name: 'Go', icon: <SiGo className="w-3.5 h-3.5" /> },
  { name: 'Rust', icon: <SiRust className="w-3.5 h-3.5" /> },
  { name: 'C++', icon: <SiCplusplus className="w-3.5 h-3.5" /> },
  { name: 'PHP', icon: <SiPhp className="w-3.5 h-3.5" /> },
  { name: 'Ruby', icon: <SiRuby className="w-3.5 h-3.5" /> },
  { name: 'Kotlin', icon: <SiKotlin className="w-3.5 h-3.5" /> },
  { name: 'Swift', icon: <SiSwift className="w-3.5 h-3.5" /> },
  { name: 'Dart', icon: <SiDart className="w-3.5 h-3.5" /> },

  // Databases
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-3.5 h-3.5" /> },
  { name: 'MySQL', icon: <SiMysql className="w-3.5 h-3.5" /> },
  { name: 'SQLite', icon: <SiSqlite className="w-3.5 h-3.5" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-3.5 h-3.5" /> },
  { name: 'Redis', icon: <SiRedis className="w-3.5 h-3.5" /> },
  { name: 'Elasticsearch', icon: <SiElasticsearch className="w-3.5 h-3.5" /> },
  { name: 'MSSQL', icon: <FaDatabase className="w-3.5 h-3.5" /> },

  // ORM / Query
  // { name: 'Prisma', icon: <SiPrisma className="w-3.5 h-3.5" /> },
  // { name: 'Sequelize', icon: <SiSequelize className="w-3.5 h-3.5" /> },
  // { name: 'GraphQL', icon: <SiGraphql className="w-3.5 h-3.5" /> },
  // { name: 'Apollo', icon: <SiApollographql className="w-3.5 h-3.5" /> },
  // { name: 'tRPC', icon: <SiTrpc className="w-3.5 h-3.5" /> },

  // DevOps / Infrastructure
  { name: 'Docker', icon: <SiDocker className="w-3.5 h-3.5" /> },
  { name: 'Kubernetes', icon: <SiKubernetes className="w-3.5 h-3.5" /> },
  // { name: 'Helm', icon: <SiHelm className="w-3.5 h-3.5" /> },
  // { name: 'Terraform', icon: <SiTerraform className="w-3.5 h-3.5" /> },
  // { name: 'Ansible', icon: <SiAnsible className="w-3.5 h-3.5" /> },
  { name: 'Nginx', icon: <SiNginx className="w-3.5 h-3.5" /> },
  { name: 'Apache', icon: <SiApache className="w-3.5 h-3.5" /> },

  // CI/CD
  { name: 'GitHub Actions', icon: <SiGithubactions className="w-3.5 h-3.5" /> },
  { name: 'GitLab CI', icon: <SiGitlab className="w-3.5 h-3.5" /> },
  { name: 'Jenkins', icon: <SiJenkins className="w-3.5 h-3.5" /> },
  // { name: 'CircleCI', icon: <SiCircleci className="w-3.5 h-3.5" /> },

  // Monitoring
  // { name: 'Prometheus', icon: <SiPrometheus className="w-3.5 h-3.5" /> },
  { name: 'Grafana', icon: <SiGrafana className="w-3.5 h-3.5" /> },
  { name: 'Sentry', icon: <SiSentry className="w-3.5 h-3.5" /> },
  { name: 'Datadog', icon: <SiDatadog className="w-3.5 h-3.5" /> },

  // Cloud
  { name: 'AWS', icon: <FaAws className="w-3.5 h-3.5" /> },
  { name: 'Google Cloud', icon: <SiGooglecloud className="w-3.5 h-3.5" /> },
  { name: 'Vercel', icon: <SiVercel className="w-3.5 h-3.5" /> },
  // { name: 'Netlify', icon: <SiNetlify className="w-3.5 h-3.5" /> },
  { name: 'Cloudflare', icon: <SiCloudflare className="w-3.5 h-3.5" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-3.5 h-3.5" /> },
  { name: 'Supabase', icon: <SiSupabase className="w-3.5 h-3.5" /> },

  // State Management
  // { name: 'Redux', icon: <SiRedux className="w-3.5 h-3.5" /> },
  // { name: 'React Query', icon: <SiReactquery className="w-3.5 h-3.5" /> },
  // { name: 'MobX', icon: <SiMobx className="w-3.5 h-3.5" /> },

  // Testing
  // { name: 'Jest', icon: <SiJest className="w-3.5 h-3.5" /> },
  // { name: 'Vitest', icon: <SiVitest className="w-3.5 h-3.5" /> },
  // { name: 'Cypress', icon: <SiCypress className="w-3.5 h-3.5" /> },

  // Tools
  { name: 'Git', icon: <SiGit className="w-3.5 h-3.5" /> },
  { name: 'GitHub', icon: <SiGithub className="w-3.5 h-3.5" /> },
  { name: 'Figma', icon: <SiFigma className="w-3.5 h-3.5" /> },
  { name: 'Postman', icon: <SiPostman className="w-3.5 h-3.5" /> },
  // { name: 'Storybook', icon: <SiStorybook className="w-3.5 h-3.5" /> },

  // Build Tools
  { name: 'Vite', icon: <SiVite className="w-3.5 h-3.5" /> },
  { name: 'Webpack', icon: <SiWebpack className="w-3.5 h-3.5" /> },
  { name: 'Babel', icon: <SiBabel className="w-3.5 h-3.5" /> },
  { name: 'ESLint', icon: <SiEslint className="w-3.5 h-3.5" /> },
  { name: 'Prettier', icon: <SiPrettier className="w-3.5 h-3.5" /> },

  // Package Managers
  { name: 'npm', icon: <SiNpm className="w-3.5 h-3.5" /> },
  { name: 'Yarn', icon: <SiYarn className="w-3.5 h-3.5" /> },
  { name: 'pnpm', icon: <SiPnpm className="w-3.5 h-3.5" /> },
  { name: 'Bun', icon: <SiBun className="w-3.5 h-3.5" /> },

  // OS
  { name: 'Linux', icon: <SiLinux className="w-3.5 h-3.5" /> },
  { name: 'Ubuntu', icon: <SiUbuntu className="w-3.5 h-3.5" /> },

  // 3D / Animation
  { name: 'Three.js', icon: <SiThreedotjs className="w-3.5 h-3.5" /> },

  // Real-time
  { name: 'WebSocket', icon: <SiSocketdotio className="w-3.5 h-3.5" /> },
  { name: 'WebRTC', icon: <SiWebrtc className="w-3.5 h-3.5" /> },

  // Auth
  { name: 'Auth0', icon: <SiAuth0 className="w-3.5 h-3.5" /> },
  { name: 'JWT', icon: <SiJsonwebtokens className="w-3.5 h-3.5" /> },

  // Search
  { name: 'Algolia', icon: <SiAlgolia className="w-3.5 h-3.5" /> },

  // Payment
  // { name: 'Stripe', icon: <SiStripe className="w-3.5 h-3.5" /> },

  // AI / ML
  { name: 'TensorFlow', icon: <SiTensorflow className="w-3.5 h-3.5" /> },
  { name: 'PyTorch', icon: <SiPytorch className="w-3.5 h-3.5" /> },
  { name: 'OpenCV', icon: <SiOpencv className="w-3.5 h-3.5" /> },
  { name: 'Hugging Face', icon: <SiHuggingface className="w-3.5 h-3.5" /> },
  { name: 'LangChain', icon: <SiLangchain className="w-3.5 h-3.5" /> },

  // Collaboration
  { name: 'Jira', icon: <SiJira className="w-3.5 h-3.5" /> },
  { name: 'Notion', icon: <SiNotion className="w-3.5 h-3.5" /> },
  { name: 'Slack', icon: <SiSlack className="w-3.5 h-3.5" /> },

  // Message Queue
  { name: 'Kafka', icon: <SiRabbitmq className="w-3.5 h-3.5" /> },
  { name: 'RabbitMQ', icon: <SiRabbitmq className="w-3.5 h-3.5" /> },

]

export default function Service() {
  return (
    <section className=" py-5 px-4 md:px-20 flex flex-col gap-4">
      {/* Page heading */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl px-7 py-5 text-center border border-sky-100 dark:border-slate-700 shadow-sm">
        <h1 className="text-[26px] font-bold text-blue-800 dark:text-blue-300 mb-1.5 font-['Lexend']">
          Үйлчилгээ
        </h1>
        <p className="text-md text-slate-600 dark:text-slate-400 font-['Roboto']">
          Таны бизнест тохирсон программ хангамжийн бүх шийдэл
        </p>
      </div>

      {/* Service cards */}
      {SERVICES.map((service, serviceIndex) => (
        <div
          key={serviceIndex}
          className="bg-white dark:bg-slate-800 rounded-3xl px-7 py-5 border border-sky-100 dark:border-slate-700 shadow-sm"
        >
          {/* Header row */}
          <div className="flex items-center gap-3.5 mb-3.5">
            <div className="w-[42px] h-[42px] rounded-xl bg-sky-100 dark:bg-sky-500/15 shrink-0 flex items-center justify-center">
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                className="text-sky-500 dark:text-sky-400"
                viewBox="0 0 24 24"
                dangerouslySetInnerHTML={{ __html: service.icon }}
              />
            </div>
            <div>
              <h3 className="text-base font-semibold text-blue-800 dark:text-blue-300 font-['Lexend']">
                {service.title}
              </h3>
              <p className="text-[13px] text-slate-600 dark:text-slate-400 mt-0.5 font-['Roboto']">
                {service.desc}
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-sky-100 dark:bg-slate-700 mb-3.5" />

          {/* Items grid - dynamic columns */}
          <div
            className="grid gap-x-6 gap-y-2.5"
            style={{ gridTemplateColumns: `repeat(${service.cols}, minmax(0, 1fr))` }}
          >
            {service.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex gap-2 items-start min-w-0">
                <svg
                  className="w-4 h-4 text-sky-500 dark:text-sky-400 shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-md text-slate-900 dark:text-slate-100 leading-[22px] break-keep font-['Roboto']">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Tech stack card */}
      <div className="bg-white dark:bg-slate-800 rounded-3xl px-6 py-4 border border-sky-100 dark:border-slate-700 shadow-sm">
        <p className="text-xs font-semibold text-sky-500 dark:text-sky-400 tracking-[0.07em] uppercase mb-2.5 font-['Lexend']">
          Бидний ашигладаг технологиуд
        </p>
        <div className="flex flex-wrap gap-2">
          {TECH_TAGS.map((tag) => (
            <span
              key={tag.name}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-[5px] rounded-full whitespace-nowrap bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-300 border border-sky-100 dark:border-slate-700 font-['Roboto']"
            >
              {tag.icon}
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}