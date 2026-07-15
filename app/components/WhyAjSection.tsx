"use client";

import { Reveal, Stagger, StaggerItem } from "@/app/components/motion/Reveal";
import { whyAjCards } from "@/app/lib/why-aj-data";
import { motion } from "framer-motion";

export function WhyAjSection() {
  return (
    <section id="porque-aj" className="section-surface py-4 sm:py-6">
      <Reveal>
        <header className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e08a]">Diferenciais</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Por que empresas escolhem a AJ
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Tecnologia com propósito: código próprio, arquitetura sólida e parceria direta com quem entrega.
          </p>
        </header>
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
        {whyAjCards.map(({ title, description, Icon, tags }) => (
          <StaggerItem key={title}>
            <motion.article
              className="card-premium why-aj-card group h-full p-5"
              data-cursor="card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.08)] text-[#d4af37]">
                <Icon className="text-xl" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white" data-cursor="title">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              {tags ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span key={tag} className="why-aj-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              ) : null}
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
