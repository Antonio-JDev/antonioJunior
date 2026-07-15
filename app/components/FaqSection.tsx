"use client";

import { Reveal } from "@/app/components/motion/Reveal";
import { faqItems } from "@/app/lib/faq-data";
import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi2";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section id="faq" className="section-surface py-4 sm:py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal>
        <header className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e08a]">FAQ</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Respostas diretas sobre custo, prazo, escopo e suporte — para você decidir com clareza.
          </p>
        </header>
      </Reveal>

      <div className="faq-list">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className={`faq-item ${isOpen ? "is-open" : ""}`} data-cursor="card">
              <button
                type="button"
                className="faq-trigger"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
                id={`faq-trigger-${index}`}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="faq-question" data-cursor="title">
                  {item.question}
                </span>
                <HiOutlineChevronDown className={`faq-chevron ${isOpen ? "is-open" : ""}`} aria-hidden="true" />
              </button>
              {isOpen ? (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className="faq-panel"
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
