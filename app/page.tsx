import { AboutSection } from "@/app/components/AboutSection";
import { ContactSection } from "@/app/components/ContactSection";
import { EducationSection } from "@/app/components/EducationSection";
import { ExperienceSection } from "@/app/components/ExperienceSection";
import { HeaderNav } from "@/app/components/HeaderNav";
import { HeroSection } from "@/app/components/HeroSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";
import { SkillsSection } from "@/app/components/SkillsSection";
import { getGithubProfileData } from "@/app/lib/github";

export default async function Home() {
  const profile = await getGithubProfileData();

  return (
    <main className="layout-shell mx-auto flex w-full max-w-6xl flex-1 flex-col gap-7 px-4 py-6 sm:px-6 lg:px-8">
      <HeaderNav />
      <HeroSection profile={profile} />
      <AboutSection profile={profile} />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection stack={profile.stack} />
      <ProjectsSection />
      <ContactSection />
      <ScrollToTopButton />
    </main>
  );
}
