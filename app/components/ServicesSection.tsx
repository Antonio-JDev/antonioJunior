"use client";

import { Reveal, Stagger, StaggerItem } from "@/app/components/motion/Reveal";
import { ServiceMockup } from "@/app/components/ServiceMockup";
import { services } from "@/app/lib/services-data";
import { motion } from "framer-motion";
import Image from "next/image";

export function ServicesSection() {
  return (
    <section id="servicos" className="section-surface py-4 sm:py-6">
      <Reveal>
        <header className="mb-8 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f8e08a]">Servicos</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Solucoes digitais para empresas que querem crescer.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted">
            Do software sob medida a inteligencia artificial - arquitetura moderna com foco no resultado de negocio.
          </p>
        </header>
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.09}>
        {services.map(({ title, description, Icon, mockup, imageSrc, imageAlt }) => (
          <StaggerItem key={title}>
            <motion.article
              className="card-premium service-card group h-full overflow-hidden p-0"
              data-cursor="card"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
            >
              <div className={`service-card-mockup ${imageSrc ? "service-card-mockup--photo" : ""}`}>
                {imageSrc ? (
                  <Image
                    src={imageSrc}
                    alt={imageAlt || title}
                    width={640}
                    height={400}
                    className="service-card-photo"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <ServiceMockup type={mockup} />
                )}
              </div>
              <div className="p-5">
                <motion.div
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(212,175,55,0.25)] bg-[rgba(212,175,55,0.08)] text-[#d4af37]"
                  whileHover={{ rotate: 8 }}
                >
                  <Icon className="text-xl" />
                </motion.div>
                <h3 className="mt-4 text-lg font-semibold text-white" data-cursor="title">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
              </div>
            </motion.article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
