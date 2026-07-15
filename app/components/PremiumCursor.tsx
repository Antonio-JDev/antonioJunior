"use client";

import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "button" | "card" | "title";

export function PremiumCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [mode, setMode] = useState<CursorMode>("default");
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const update = () => {
      const on = mq.matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setEnabled(on);
      document.documentElement.classList.toggle("premium-cursor-active", on);
    };
    update();
    mq.addEventListener("change", update);
    return () => {
      mq.removeEventListener("change", update);
      document.documentElement.classList.remove("premium-cursor-active");
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        'a, button, [role="button"], .btn-primary-gold, .btn-secondary-ghost, .project-card-check-btn'
      );
      const card = el?.closest('[data-cursor="card"], .card-premium, .project-card, .contact-glass-card, .tech-logo-item, .faq-item');
      const title = el?.closest('[data-cursor="title"], h1, h2, h3, .hero-title-premium, .project-card-title');

      if (interactive) setMode("button");
      else if (title) setMode("title");
      else if (card) setMode("card");
      else setMode("default");
    };

    const onLeave = () => setVisible(false);

    const tick = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.22;
      pos.current.y += (target.current.y - pos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={ringRef}
        className={`premium-cursor-ring premium-cursor-ring--${mode} ${visible ? "is-visible" : ""}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`premium-cursor-dot premium-cursor-dot--${mode} ${visible ? "is-visible" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
