import { SectionShell } from "@/app/components/SectionShell";
import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

type ContactItem = {
  href: string;
  label: string;
  detail: string;
  Icon: IconType;
};

const contacts: ContactItem[] = [
  {
    href: "https://github.com/Antonio-JDev",
    label: "GitHub",
    detail: "@Antonio-JDev",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/antonio-junior/",
    label: "LinkedIn",
    detail: "antonio-junior",
    Icon: FaLinkedinIn,
  },
  {
    href: "mailto:antoniojrtech@gmail.com",
    label: "Email",
    detail: "antoniojrtech@gmail.com",
    Icon: HiOutlineMail,
  },
  {
    href: "https://www.instagram.com/dev_antoniojr/",
    label: "Instagram",
    detail: "@dev_antoniojr",
    Icon: FaInstagram,
  },
  {
    href: "https://wa.me/5547996362471",
    label: "WhatsApp",
    detail: "+55 47 99636-2471",
    Icon: FaWhatsapp,
  },
];

export function ContactSection() {
  return (
    <SectionShell
      id="contato"
      title="Contato"
      subtitle="Vamos conversar sobre diagnostico, escopo, prazo e proposta para tirar seu projeto do papel com seguranca tecnica"
    >
      <div className="contact-minimal-wrap mx-auto w-full max-w-4xl">
        {contacts.map(({ href, label, detail, Icon }, index) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
            className="contact-pill group"
            style={{ ["--stagger" as string]: `${index * 60}ms` }}
          >
            <span className="contact-pill-icon">
              <Icon />
            </span>
            <span className="contact-pill-label">{label}</span>
            <span className="contact-pill-detail">{detail}</span>
          </a>
        ))}
      </div>
      <div className="mt-6 border-t border-border/70 pt-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Antonio Junior dos Santos
      </div>
    </SectionShell>
  );
}
