import { Hero } from "@/components/home/Hero";
import { Clients } from "@/components/home/Clients";
import { Doowy } from "@/components/home/Doowy";
import { Work } from "@/components/home/Work";
import { Statement } from "@/components/home/Statement";
import { Services } from "@/components/home/Services";
import { Process } from "@/components/home/Process";
import { Stack } from "@/components/home/Stack";
import { ContactCta } from "@/components/home/ContactCta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Doowy />
      <Work />
      <Services />
      <Statement />
      <Process />
      <Stack />
      <ContactCta />
    </main>
  );
}
