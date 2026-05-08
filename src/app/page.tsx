'use client'
import Image from "next/image";
import ServiceTeaser from "@/components/ServiceTeaser";
import {Hero} from "@/components/HeroSection";
import { usePathname } from 'next/navigation'
export default function Home() {
  let pathname = usePathname()
  let isHomePage = pathname === '/'
  return (
    <main className="flex  w-full flex-col min-h-screen ">
      {isHomePage &&(<><Hero/> <ServiceTeaser/></>)}
    </main>
  );
}
