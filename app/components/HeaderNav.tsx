"use client";

import Image from "next/image";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#banner", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#processo", label: "Processo" },
  { href: "#porque-aj", label: "Diferenciais" },
  { href: "#sobre", label: "Sobre" },
  { href: "#projetos", label: "Projetos" },
  { href: "#skills", label: "Tecnologias" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export function HeaderNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#banner");

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 765) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.querySelector(item.href))
      .filter((element): element is HTMLElement => Boolean(element));

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.55, 0.75],
      }
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-3 z-30">
      <nav className="relative z-40 flex items-center justify-between gap-3 rounded-2xl border border-[rgba(212,175,55,0.15)] bg-[#0b0d14]/85 px-3 py-2 backdrop-blur-xl">
        <a
          href="#banner"
          className="inline-flex items-center rounded-xl px-1.5 py-1 sm:px-2 sm:py-1.5"
          aria-label="AJ Software & Consultoria — início"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/images/Logo.webp"
            alt="AJ Software & Consultoria"
            width={40}
            height={40}
            className="h-9 w-9 shrink-0 object-contain sm:h-10 sm:w-10"
            priority
          />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(212,175,55,0.2)] bg-[#121722] text-[#f8e08a] min-[765px]:hidden"
        >
          {menuOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenuAlt3 className="text-xl" />}
        </button>

        <div className="hidden items-center gap-1 min-[765px]:flex min-[765px]:justify-end">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition sm:text-sm ${
                activeSection === item.href
                  ? "bg-[rgba(212,175,55,0.14)] text-[#f8e08a]"
                  : "text-muted hover:bg-[rgba(212,175,55,0.08)] hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        className={`absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 origin-top overflow-hidden rounded-2xl border border-[rgba(212,175,55,0.15)] bg-[#0b0d14]/96 shadow-2xl backdrop-blur-xl transition-all duration-300 min-[765px]:hidden ${
          menuOpen ? "pointer-events-auto scale-y-100 opacity-100" : "pointer-events-none scale-y-95 opacity-0"
        }`}
      >
        <div className="max-h-[min(70vh,520px)] overflow-y-auto p-3">
          <p className="mb-2 px-2 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[#f8e08a]/80">
            Menu
          </p>
          <div className="grid gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                  activeSection === item.href
                    ? "bg-[rgba(212,175,55,0.14)] text-[#f8e08a]"
                    : "text-muted hover:bg-[rgba(212,175,55,0.08)] hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {menuOpen ? (
        <button
          aria-label="Fechar menu"
          type="button"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-20 bg-black/55 min-[765px]:hidden"
        />
      ) : null}
    </header>
  );
}
