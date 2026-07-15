"use client";

import { HeroFounderStage } from "@/app/components/HeroFounderStage";
import { LetterReveal, Reveal } from "@/app/components/motion/Reveal";
import { HiCheck } from "react-icons/hi2";
import { motion, useReducedMotion } from "framer-motion";

const indicators = [
  "Desenvolvimento Sob Medida",
  "MCP Servers",
  "Inteligência Artificial",
  "APIs & Integrações",
  "Automações Empresariais",
];

const headline = "Tecnologia sob medida para acelerar sua empresa.";

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section id="banner" className="hero-premium hero-premium--founder">
      <div className="hero-premium-inner grid items-center gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-10 xl:gap-12">
        <Reveal y={24} scale={0.98} className="text-left">
          <h1
            className="hero-title-premium font-display text-3xl font-bold tracking-tight sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
            data-cursor="title"
          >
            {reduce ? <span>{headline}</span> : <LetterReveal text={headline} />}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Desenvolvemos softwares, ERPs, APIs escaláveis e automações inteligentes com Inteligência Artificial para
            reduzir seus custos operacionais e maximizar a produtividade do seu negócio.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <motion.a
              href="https://wa.me/5547996362471?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20com%20a%20AJ%20Software."
              target="_blank"
              rel="noreferrer"
              className="btn-primary-gold"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar Diagnóstico
            </motion.a>
            <motion.a href="#servicos" className="btn-secondary-ghost" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Conhecer Soluções
            </motion.a>
          </div>
          <ul className="hero-check-list">
            {indicators.map((item) => (
              <li key={item} className="hero-check-item">
                <HiCheck className="text-base" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <div>
          <HeroFounderStage />
        </div>
      </div>
    </section>
  );
}
