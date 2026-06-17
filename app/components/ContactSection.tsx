import type { CSSProperties } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

type ContactItem = {
  href: string;
  label: string;
  detail: string;
  Icon: IconType;
  glow: string;
};

const contacts: ContactItem[] = [
  {
    href: "https://github.com/Antonio-JDev",
    label: "GitHub",
    detail: "@Antonio-JDev",
    Icon: FaGithub,
    glow: "rgba(226, 232, 240, 0.55)",
  },
  {
    href: "https://www.linkedin.com/in/antonio-junior/",
    label: "LinkedIn",
    detail: "antonio-junior",
    Icon: FaLinkedinIn,
    glow: "rgba(10, 102, 194, 0.65)",
  },
  {
    href: "mailto:antoniojrtech@gmail.com",
    label: "Email",
    detail: "antoniojrtech@gmail.com",
    Icon: HiOutlineMail,
    glow: "rgba(56, 189, 248, 0.65)",
  },
  {
    href: "https://www.instagram.com/dev_antoniojr/",
    label: "Instagram",
    detail: "@dev_antoniojr",
    Icon: FaInstagram,
    glow: "rgba(228, 64, 95, 0.6)",
  },
  {
    href: "https://wa.me/5547996362471",
    label: "WhatsApp",
    detail: "+55 47 99636-2471",
    Icon: FaWhatsapp,
    glow: "rgba(37, 211, 102, 0.6)",
  },
];

export function ContactSection() {
  return (
    <section
      id="contato"
      className="contact-premium section-surface relative overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 backdrop-blur-sm sm:p-8"
    >
      <div className="contact-premium-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10">
        <header className="mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contato</h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Vamos conversar sobre{" "}
            <span className="font-medium text-sky-300/90">diagnóstico, escopo, prazo e proposta</span> para tirar seu
            projeto do papel com <span className="font-medium text-sky-300/90">segurança técnica</span>.
          </p>
        </header>

        <div className="contact-premium-grid mx-auto w-full max-w-4xl">
          {contacts.map(({ href, label, detail, Icon, glow }, index) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
              className="contact-glass-card group"
              style={
                {
                  ["--stagger" as string]: `${index * 70}ms`,
                  ["--card-glow" as string]: glow,
                } as CSSProperties
              }
            >
              <span className="contact-glass-card-inner">
                <span className="contact-glass-card-icon">
                  <Icon />
                </span>
                <span className="contact-glass-card-text">
                  <span className="contact-glass-card-label">{label}</span>
                  <span className="contact-glass-card-detail">{detail}</span>
                </span>
              </span>
            </a>
          ))}
        </div>

        <div className="contact-premium-footer mt-10 border-t border-white/[0.06] pt-5 text-center text-xs text-neutral-500 opacity-40">
          © {new Date().getFullYear()} Antonio Junior dos Santos
        </div>
      </div>
    </section>
  );
}
