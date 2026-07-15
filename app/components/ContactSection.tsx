"use client";

import { Reveal, Stagger, StaggerItem } from "@/app/components/motion/Reveal";
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
    glow: "rgba(212, 175, 55, 0.55)",
  },
  {
    href: "https://linkedin.com/in/antonio-jdev/",
    label: "LinkedIn",
    detail: "AJ Software",
    Icon: FaLinkedinIn,
    glow: "rgba(46, 168, 255, 0.55)",
  },
  {
    href: "mailto:antoniojrtech@gmail.com",
    label: "Email",
    detail: "antoniojrtech@gmail.com",
    Icon: HiOutlineMail,
    glow: "rgba(248, 224, 138, 0.45)",
  },
  {
    href: "https://www.instagram.com/dev_antoniojr/",
    label: "Instagram",
    detail: "@dev_antoniojr",
    Icon: FaInstagram,
    glow: "rgba(212, 175, 55, 0.45)",
  },
  {
    href: "https://wa.me/5547996362471",
    label: "WhatsApp",
    detail: "+55 47 99636-2471",
    Icon: FaWhatsapp,
    glow: "rgba(37, 211, 102, 0.5)",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="contact-premium section-surface relative overflow-hidden py-4 sm:py-6">
      <div className="contact-premium-glow pointer-events-none absolute inset-0" aria-hidden="true" />

      <div className="relative z-10">
        <Reveal>
          <header className="mb-8">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Contato</h2>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
              Fale com a AJ Software &amp; Consultoria. Vamos estruturar diagnóstico, escopo, prazo e proposta com
              segurança técnica.
            </p>
          </header>
        </Reveal>

        <Stagger className="contact-premium-grid w-full" stagger={0.07}>
          {contacts.map(({ href, label, detail, Icon, glow }) => (
            <StaggerItem key={label} className="contact-premium-item">
              <a
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="contact-glass-card group"
                style={{ ["--card-glow" as string]: glow } as CSSProperties}
                data-cursor="card"
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
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
