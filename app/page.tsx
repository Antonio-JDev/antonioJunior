import { AboutSection } from "@/app/components/AboutSection";
import { ContactSection } from "@/app/components/ContactSection";
import { EducationSection } from "@/app/components/EducationSection";
import { HeaderNav } from "@/app/components/HeaderNav";
import { HeroSection } from "@/app/components/HeroSection";
import { PageBackdrop } from "@/app/components/PageBackdrop";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";
import { SkillsSection } from "@/app/components/SkillsSection";
import { getGithubProfileData } from "@/app/lib/github";
import { getSiteSettings } from "@/app/lib/site-settings";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [profile, settings] = await Promise.all([getGithubProfileData(), getSiteSettings()]);

  return (
    <div className="site-shell relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <main className="layout-shell relative z-[1] mx-auto flex w-full max-w-6xl flex-1 flex-col gap-7 px-4 py-6 sm:px-6 lg:px-8">
        <HeaderNav />
        <HeroSection profile={profile} settings={settings} />
        <ProjectsSection />
        <AboutSection profile={profile} settings={settings} />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
        <ScrollToTopButton />
      </main>
    </div>
  );
}

