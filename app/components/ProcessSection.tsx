"use client";

import { Reveal } from "@/app/components/motion/Reveal";
import { processSteps } from "@/app/lib/process-data";
import { motion, useReducedMotion } from "framer-motion";

export function ProcessSection() {
  const reduce = useReducedMotion();

  return (
    <section id="processo" className="section-surface py-4 sm:py-6">
      <Reveal>
        <header className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e08a]">Nosso processo</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Metodologia clara para entregar software de alta qualidade.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Do diagnóstico ao suporte em produção — cada etapa com escopo, prazo e acompanhamento.
          </p>
        </header>
      </Reveal>

      <div className="process-timeline">
        <motion.div
          className="process-line"
          aria-hidden="true"
          initial={reduce ? false : { scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {processSteps.map((step, index) => {
          const side = index % 2 === 0 ? "left" : "right";
          return (
            <div key={step.number} className={`process-step process-step--${side}`}>
              <span className="process-node" aria-hidden="true">
                {step.number}
              </span>
              {side === "right" ? <div className="process-spacer hidden md:block" /> : null}
              <motion.div
                className="process-card-wrap"
                initial={reduce ? false : { opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <motion.article
                  className="process-card card-premium"
                  whileHover={reduce ? undefined : { y: -6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="process-card-number">{step.number}</p>
                      <h3 className="process-card-title">{step.title}</h3>
                    </div>
                    <step.Icon className="process-icon" aria-hidden="true" />
                  </div>
                  <p className="process-card-desc">{step.description}</p>
                  <span className="process-card-time">{step.duration}</span>
                </motion.article>
              </motion.div>
              {side === "left" ? <div className="process-spacer hidden md:block" /> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
