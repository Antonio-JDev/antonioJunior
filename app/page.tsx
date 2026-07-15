import { AboutSection } from "@/app/components/AboutSection";
import { ContactSection } from "@/app/components/ContactSection";
import { CtaSection } from "@/app/components/CtaSection";
import { FaqSection } from "@/app/components/FaqSection";
import { HeaderNav } from "@/app/components/HeaderNav";
import { HeroSection } from "@/app/components/HeroSection";
import { PageBackdrop } from "@/app/components/PageBackdrop";
import { PremiumCursor } from "@/app/components/PremiumCursor";
import { ProcessSection } from "@/app/components/ProcessSection";
import { ProjectsSection } from "@/app/components/ProjectsSection";
import { ScrollToTopButton } from "@/app/components/ScrollToTopButton";
import { ServicesSection } from "@/app/components/ServicesSection";
import { SiteFooter } from "@/app/components/SiteFooter";
import { SkillsSection } from "@/app/components/SkillsSection";
import { StatsSection } from "@/app/components/StatsSection";
import { WhyAjSection } from "@/app/components/WhyAjSection";

export const dynamic = "force-dynamic";

export default async function Home() {
  return (
    <div className="site-shell relative flex min-h-full flex-1 flex-col">
      <PageBackdrop />
      <PremiumCursor />
      <main className="layout-shell relative z-1 mx-auto flex w-full max-w-6xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 sm:gap-10 sm:px-6 lg:px-8">
        <HeaderNav />
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <WhyAjSection />
        <StatsSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
        <SiteFooter />
        <ScrollToTopButton />
      </main>
    </div>
  );
}
