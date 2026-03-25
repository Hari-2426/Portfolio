import { Hero } from "@/components/main/hero";
import { TechStrip } from "@/components/main/tech-strip";
import { About } from "@/components/main/about";
import { Background } from "@/components/main/background";
import { Skills } from "@/components/main/skills";
import { Projects } from "@/components/main/projects";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <TechStrip />
        <About />
        <Background />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
