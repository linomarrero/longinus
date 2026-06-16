import { Hero } from "@/components/sections/Hero";
import { AboutLonginus } from "@/components/sections/AboutLonginus";
import { Thesis } from "@/components/sections/Thesis";
import { WhyNow } from "@/components/sections/WhyNow";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <AboutLonginus />
      <Thesis />
      <WhyNow />
      <Team />
      <Contact />
    </main>
  );
}
