import { Hero } from "@/components/sections/Hero";
import { Divergence } from "@/components/sections/Divergence";
import { Thesis } from "@/components/sections/Thesis";
import { WhyNow } from "@/components/sections/WhyNow";
import { TheEdge } from "@/components/sections/TheEdge";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Divergence />
      <Thesis />
      <WhyNow />
      <TheEdge />
      <Team />
      <Contact />
    </main>
  );
}
