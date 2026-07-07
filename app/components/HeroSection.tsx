import { TypewriterText } from "@/app/components/TypewriterText";import type { GithubProfileData } from "@/app/lib/github";
import {
  parseTypewriterWords,
  pickText,
  resolveImageUrl,
  type SiteSettingsData,
} from "@/app/lib/site-content-fields";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type HeroSectionProps = {
  profile: GithubProfileData;
  settings: SiteSettingsData;
};

export function HeroSection({ profile, settings }: HeroSectionProps) {
  const heroImage = resolveImageUrl(settings.heroImageUrl, profile.avatarUrl);
  const fullName = pickText(settings.heroFullName, profile.fullName);
  const typewriterWords = parseTypewriterWords(settings.heroTypewriterWords);

  return (
    <section id="banner" className="hero-premium">
      <div className="hero-premium-inner grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="order-2 text-left lg:order-1">
            <p className="text-sm font-medium tracking-wide text-slate-400">{settings.heroGreeting}</p>
            <h1 className="hero-title-premium mt-2 font-display text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              <span>{fullName}</span>
            </h1>
            <p className="mt-4 text-lg font-semibold text-slate-100 sm:text-xl">
              {settings.heroRolePrefix}{" "}
              <span className="text-sky-300">
                <TypewriterText words={typewriterWords.length ? typewriterWords : ["Full-Stack"]} />
              </span>
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-slate-400 sm:text-base">{settings.heroBio}</p>
            <div className="mt-5 flex flex-wrap gap-2 text-xs sm:text-sm">
              <span className="hero-chip-premium">@{profile.username}</span>
              <span className="hero-chip-premium">{profile.location}</span>
              <span className="hero-chip-premium">{profile.publicRepos} repos</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projetos" className="hero-cta-primary">
                {settings.heroCtaPrimary}
              </a>
              <a href="#contato" className="hero-cta-secondary">
                {settings.heroCtaSecondary}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a href="https://github.com/Antonio-JDev" target="_blank" rel="noreferrer" aria-label="GitHub" className="hero-social-btn-premium">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/antonio-jdev/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hero-social-btn-premium">
                <FaLinkedinIn />
              </a>
              <a href="mailto:antoniojrtech@gmail.com" aria-label="Email" className="hero-social-btn-premium">
                <HiOutlineMail />
              </a>
              <a href="https://www.instagram.com/dev_antoniojr/" target="_blank" rel="noreferrer" aria-label="Instagram" className="hero-social-btn-premium">
                <FaInstagram />
              </a>
              <a href="https://wa.me/5547996362471" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="hero-social-btn-premium">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
            <div className="hero-photo-stack relative aspect-square w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              <div className="hero-photo-frame-premium relative aspect-square w-full overflow-hidden">
                <div className="hero-photo-glow-premium" aria-hidden="true" />
                <Image
                  src={heroImage}
                  alt={`Foto de perfil de ${fullName}`}
                  fill
                  priority
                  className="hero-photo-image-premium object-cover"
                  sizes="(max-width: 768px) 280px, 360px"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
