"use client";

import { Reveal, Stagger, StaggerItem } from "@/app/components/motion/Reveal";

const paragraphs = [
  "A AJ Software & Consultoria nasceu com o propósito de desenvolver tecnologia que gera resultados reais para empresas.",
  "Atuamos na criação de softwares personalizados, servidores MCP, APIs, plataformas web, automações inteligentes e soluções baseadas em Inteligência Artificial.",
  "Nossa metodologia combina arquitetura moderna, boas práticas de engenharia de software e foco total no problema de negócio do cliente.",
  "Mais do que escrever código, desenvolvemos soluções escaláveis, seguras e preparadas para acompanhar o crescimento da empresa.",
];

const pillars = [
  "Entrega sob medida",
  "Arquitetura escalável",
  "IA aplicada ao negócio",
  "Segurança & conformidade",
  "Integração de sistemas",
  "Evolução contínua",
];

export function AboutSection() {
  return (
    <section id="sobre" className="section-surface py-4 sm:py-6">
      <Reveal x={-36} y={0}>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e08a]">Sobre</p>
        <h2 className="mt-2 max-w-3xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Transformamos desafios em soluções digitais.
        </h2>
        <div className="mt-6 max-w-[65ch] space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </Reveal>

      <Stagger className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
        {pillars.map((skill) => (
          <StaggerItem key={skill}>
            <div className="soft-skill-card text-muted" data-cursor="card">
              {skill}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
