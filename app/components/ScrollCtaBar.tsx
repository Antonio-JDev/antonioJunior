"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const quickLinks = [
  { href: "#servicos", label: "Software" },
  { href: "#servicos", label: "IA" },
  { href: "#servicos", label: "MCP" },
  { href: "#servicos", label: "Consultoria" },
];

export function ScrollCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hero = document.getElementById("banner");
      if (!hero) {
        setVisible(window.scrollY > 480);
        return;
      }
      const heroBottom = hero.offsetTop + hero.offsetHeight;
      setVisible(window.scrollY > heroBottom * 0.55);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`scroll-cta-bar ${visible ? "is-visible" : ""}`} role="region" aria-label="Acesso rápido">
      <div className="scroll-cta-bar-inner">
        <a href="#banner" className="scroll-cta-brand">
          <Image src="/assets/images/Logo.webp" alt="" width={28} height={28} className="h-7 w-7 object-contain" />
          <span>AJ Software</span>
        </a>
        <nav className="scroll-cta-links" aria-label="Soluções">
          {quickLinks.map((link) => (
            <a key={link.label} href={link.href} className="scroll-cta-link">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://wa.me/5547996362471?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20com%20a%20AJ%20Software."
          target="_blank"
          rel="noreferrer"
          className="scroll-cta-btn btn-primary-gold"
          data-cursor="button"
        >
          Solicitar Diagnóstico
        </a>
      </div>
    </div>
  );
}
