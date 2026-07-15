"use client";

import { Reveal, Stagger, StaggerItem } from "@/app/components/motion/Reveal";

const stats = [
  { value: "+3", label: "Projetos reais" },
  { value: "100%", label: "Código próprio" },
  { value: "Node.js", label: "Especialista" },
  { value: "Full Stack", label: "Moderno" },
];

export function StatsSection() {
  return (
    <section id="numeros" className="stats-section" aria-label="Números da AJ Software">
      <Stagger className="stats-grid" stagger={0.1}>
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="stats-card" data-cursor="card">
              <p className="stats-value" data-cursor="title">
                {stat.value}
              </p>
              <p className="stats-label">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
