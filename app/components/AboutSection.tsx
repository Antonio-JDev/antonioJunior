import Image from "next/image";
import { SectionShell } from "@/app/components/SectionShell";
import type { GithubProfileData } from "@/app/lib/github";
import { resolveImageUrl, type SiteSettingsData } from "@/app/lib/site-content-fields";

type AboutSectionProps = {
  profile: GithubProfileData;
  settings: SiteSettingsData;
};

export function AboutSection({ profile, settings }: AboutSectionProps) {
  const aboutImage = resolveImageUrl(settings.aboutImageUrl, profile.avatarUrl);
  const fullName = settings.heroFullName.trim() || profile.fullName;

  return (
    <SectionShell id="sobre" title={settings.aboutSectionTitle} subtitle={settings.aboutSectionSubtitle}>
      <div className="grid gap-5 md:grid-cols-[240px_1fr] md:gap-6">
        <div className="relative h-56 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:h-60">
          <Image src={aboutImage} alt={`Foto de perfil de ${fullName}`} fill className="object-cover" />
        </div>
        <div className="space-y-4 text-sm text-muted sm:text-base lg:text-lg">
          {settings.aboutParagraph1 ? <p>{settings.aboutParagraph1}</p> : null}
          {settings.aboutParagraph2 ? <p>{settings.aboutParagraph2}</p> : null}
          {settings.aboutParagraph3 ? <p>{settings.aboutParagraph3}</p> : null}
        </div>
      </div>
    </SectionShell>
  );
}
