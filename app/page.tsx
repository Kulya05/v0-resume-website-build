import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { WhyAntmicro } from "@/components/why-antmicro";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <WhyAntmicro />
      </main>
      <Footer />
    </div>
  );
}
