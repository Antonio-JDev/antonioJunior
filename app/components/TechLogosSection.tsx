"use client";

import { Reveal, Stagger, StaggerItem } from "@/app/components/motion/Reveal";
import { techLogos } from "@/app/lib/tech-logos-data";

export function TechLogosSection() {
  return (
    <section id="tecnologias-parceiras" className="tech-logos-section section-surface py-4 sm:py-6">
      <Reveal>
        <header className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e08a]">Stack &amp; Cloud</p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Confiamos em tecnologias líderes de mercado
          </h2>
        </header>
      </Reveal>

      <Stagger className="tech-logos-grid" stagger={0.06}>
        {techLogos.map(({ name, Icon }) => (
          <StaggerItem key={name}>
            <div className="tech-logo-item" data-cursor="card" title={name}>
              <Icon className="tech-logo-icon" aria-hidden="true" />
              <span className="tech-logo-name">{name}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
