"use client";

import { Reveal } from "@/app/components/motion/Reveal";

type SectionShellProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section id={id} className="section-surface py-4 sm:py-6">
      <Reveal>
        <header className="mb-6 sm:mb-8">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
          {subtitle ? <p className="mt-2 max-w-3xl text-base leading-relaxed text-muted">{subtitle}</p> : null}
        </header>
      </Reveal>
      {children}
    </section>
  );
}
