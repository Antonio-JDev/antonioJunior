"use client";

import { Reveal } from "@/app/components/motion/Reveal";
import Image from "next/image";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const solutionsLinks = [
  { href: "#servicos", label: "Software" },
  { href: "#servicos", label: "Apps" },
  { href: "#servicos", label: "MCP" },
  { href: "#servicos", label: "IA" },
];

const companyLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const techLinks = [
  { href: "#skills", label: "Next.js" },
  { href: "#skills", label: "Node.js" },
  { href: "#skills", label: "Docker" },
  { href: "#skills", label: "OpenAI" },
];

const contactLinks = [
  { href: "https://wa.me/5547996362471", label: "WhatsApp", external: true },
  { href: "mailto:antoniojrtech@gmail.com", label: "Email", external: false },
  { href: "https://linkedin.com/in/antonio-jdev/", label: "LinkedIn", external: true },
];

export function SiteFooter() {
  return (
    <Reveal>
      <footer className="site-footer">
        <div className="site-footer-grid">
          <div className="site-footer-brand">
            <div className="flex items-center gap-3">
              <Image src="/assets/images/Logo.webp" alt="" width={44} height={44} className="h-11 w-11 object-contain" />
              <p className="text-base font-semibold text-white">AJ Software &amp; Consultoria</p>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Soluções Digitais que entregam impacto real no seu negócio.
            </p>
          </div>

          <div>
            <p className="site-footer-heading">Soluções</p>
            <ul className="site-footer-links">
              {solutionsLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer-heading">Empresa</p>
            <ul className="site-footer-links">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer-heading">Tecnologias</p>
            <ul className="site-footer-links">
              {techLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="site-footer-heading">Contato</p>
            <ul className="site-footer-links">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-2">
              <a
                href="https://wa.me/5547996362471"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="site-footer-social"
              >
                <FaWhatsapp />
              </a>
              <a href="mailto:antoniojrtech@gmail.com" aria-label="Email" className="site-footer-social">
                <HiOutlineMail />
              </a>
              <a
                href="https://linkedin.com/in/antonio-jdev/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="site-footer-social"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <p className="site-footer-copy">
          © {new Date().getFullYear()} AJ Software &amp; Consultoria
        </p>
      </footer>
    </Reveal>
  );
}
