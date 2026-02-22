import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { PhilosophySection } from "@/components/sections/philosophy";
import { ProjectsSection } from "@/components/sections/projects";
import { SkillsSection } from "@/components/sections/skills";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { Navbar } from "@/components/shared/navbar";
import { ScrollProgress } from "@/components/shared/scroll-progress";

export default function HomePage() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <PhilosophySection />
      <ContactSection />
    </main>
  );
}
