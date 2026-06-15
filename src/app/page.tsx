import { Hero } from "@/components/sections/Hero";
import { Thesis } from "@/components/sections/Thesis";
import { WhyNow } from "@/components/sections/WhyNow";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Thesis />
      <WhyNow />
      <Team />
      <Contact />
    </main>
  );
}
