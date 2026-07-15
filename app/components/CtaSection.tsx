"use client";

import { Reveal } from "@/app/components/motion/Reveal";
import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <Reveal y={40}>
      <section className="cta-premium">
        <div className="cta-premium-glow" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Sua empresa merece tecnologia que gera resultados.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
            Se você procura uma equipe capaz de desenvolver soluções modernas, escaláveis e preparadas para o futuro,
            vamos conversar.
          </p>
          <motion.a
            href="https://wa.me/5547996362471"
            target="_blank"
            rel="noreferrer"
            className="btn-primary-gold mt-8"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicitar orçamento
          </motion.a>
        </div>
      </section>
    </Reveal>
  );
}
