import type { GithubProfileData } from "@/app/lib/github";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

type HeroSectionProps = {
  profile: GithubProfileData;
};

export function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section
      id="banner"
      className="hero-surface rounded-3xl border border-border bg-gradient-to-br from-card via-background-soft to-card px-4 py-10 text-center shadow-[0_0_70px_rgba(29,78,216,0.2)] sm:px-8 sm:py-14"
    >
      <p className="text-sm font-medium tracking-wide text-muted sm:text-base">Ola, eu sou</p>
      <h1 className="hero-title mt-3 font-display text-4xl font-black tracking-tight text-foreground sm:mt-4 sm:text-7xl lg:text-8xl">
        <span>{profile.fullName}</span>
      </h1>
      <p className="mx-auto mt-4 max-w-3xl text-base text-muted sm:mt-5 sm:text-xl">
        Desenvolvedor Full-Stack que transforma requisitos de negocio em plataformas digitais escalaveis, com UX moderna, APIs robustas e entrega orientada a resultado.
      </p>
      <p className="mx-auto mt-3 max-w-3xl text-sm text-muted sm:text-base">{profile.bio}</p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs sm:mt-8 sm:gap-3 sm:text-sm">
        <span className="rounded-full border border-border bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2">
          {profile.publicRepos} repositorios publicos
        </span>
        <span className="rounded-full border border-border bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2">
          {profile.followers} seguidores no GitHub
        </span>
        <span className="rounded-full border border-border bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2">@{profile.username}</span>
        <span className="rounded-full border border-border bg-blue-500/10 px-3 py-1.5 sm:px-4 sm:py-2">{profile.location}</span>
      </div>
      <div className="mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:mt-9 sm:grid-cols-2 sm:gap-3">
        <a
          href="#projetos"
          className="rounded-2xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:scale-[1.03] sm:px-7 sm:text-base"
        >
          Solicitar diagnostico
        </a>
        <a
          href="#contato"
          className="rounded-2xl border border-border bg-background-soft px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:bg-card sm:px-7 sm:text-base"
        >
          Definir escopo e prazo
        </a>
      </div>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-8">
        <a
          href="https://github.com/Antonio-JDev"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="hero-social-btn"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/antonio-junior/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="hero-social-btn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="mailto:antoniojrtech@gmail.com"
          aria-label="Email"
          className="hero-social-btn"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://www.instagram.com/dev_antoniojr/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="hero-social-btn"
        >
          <FaInstagram />
        </a>
        <a
          href="https://wa.me/5547996362471"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="hero-social-btn"
        >
          <FaWhatsapp />
        </a>
      </div>
    </section>
  );
}
