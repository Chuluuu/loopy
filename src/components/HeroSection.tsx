import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { SvgIcon } from '@/components/SvgIcon'

// import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'
import heroImage from '@/images/slides/tech-home-slide-2-img-1.png'
import { Link } from 'lucide-react'
import DialogUi from './DialogUi'
import Slider from './slider'
import { CarouselDemo } from './CarouselDemo'
import { CarouselWithDots } from './CarouselWithDots'

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="overflow-hidden -mb-32 mt-[-4.75rem] pb-32 pt-[1.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 lg:max-w-10xl  xl:gap-x-16 ">
        
          <div className="relative z-10 md:text-center lg:text-left">
            <Image
              className="absolute bottom-full right-full -mb-56 -mr-72 opacity-50"
              src={blurCyanImage}
              alt=""
              width={530}
              height={530}
              unoptimized
              priority
            />
            
          </div>
          <div className="relative lg:static">
            <div className="absolute inset-x-[-50vw] -bottom-48 -top-32  lg:-bottom-32 lg:-top-32 lg:left-[calc(50%+14rem)] lg:right-0  [mask-image:linear-gradient(transparent,white,transparent)] lg:[mask-image:linear-gradient(white,white,transparent)]">
              <HeroBackground className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
            </div>
            <div className="relative">
              <Image
                className="absolute -right-64 -top-64"
                src={blurCyanImage}
                alt=""
                width={530}
                height={530}
                unoptimized
                priority
              />
              <Image
                className="absolute -bottom-40 -right-44"
                src={blurIndigoImage}
                alt=""
                width={567}
                height={567}
                unoptimized
                priority
              />
              {/* <Image
                src={heroImage}
                alt="A dog hacking Inkdrop"
                priority
                width={350}
                height={350}
                className="scale-80"
              /> */}
              <CarouselWithDots/>
              {/* <DialogUi/> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
