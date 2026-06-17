"use client";

import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { useEffect, useState } from "react";

const navItems = [
  { href: "#banner", label: "Inicio" },
  { href: "#sobre", label: "Sobre" },
  { href: "#formacao", label: "Formacao" },
  { href: "#skills", label: "Stack" },
  { href: "#projetos", label: "Projetos" },
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
    <header className="sticky top-3 z-30 rounded-2xl border border-white/[0.06] bg-background/55 px-3 py-2 backdrop-blur-xl">
      <nav className="flex items-center justify-between gap-3">
        <a
          href="#banner"
          className="w-max rounded-xl bg-background-soft px-3 py-2 text-xs font-bold tracking-[0.12em] text-accent sm:px-4 sm:text-sm"
        >
          Antonio.dev
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background-soft text-accent min-[765px]:hidden"
        >
          {menuOpen ? <HiOutlineX className="text-xl" /> : <HiOutlineMenuAlt3 className="text-xl" />}
        </button>
        <div className="hidden items-center gap-1 min-[765px]:flex min-[765px]:justify-end">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs transition sm:text-sm ${activeSection === item.href ? "bg-white/[0.06] text-foreground" : "text-muted hover:bg-white/[0.04] hover:text-foreground"}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <aside
        className={`fixed inset-y-0 right-0 z-40 w-[82vw] max-w-xs border-l border-border bg-background/95 p-5 shadow-2xl backdrop-blur-xl transition-transform duration-300 min-[765px]:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-bold tracking-[0.12em] text-accent">NAVEGACAO</p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background-soft text-accent"
            aria-label="Fechar menu"
          >
            <HiOutlineX className="text-lg" />
          </button>
        </div>
        <div className="grid gap-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`rounded-xl border bg-background-soft px-4 py-2.5 text-sm transition ${activeSection === item.href ? "border-border text-foreground" : "border-transparent text-muted hover:border-border hover:text-foreground"}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </aside>
      {menuOpen ? (
        <button
          aria-label="Fechar menu"
          type="button"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/50 min-[765px]:hidden"
        />
      ) : null}
    </header>
  );
}
