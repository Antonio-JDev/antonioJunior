import Image from "next/image";
import { SectionShell } from "@/app/components/SectionShell";
import type { GithubProfileData } from "@/app/lib/github";

type AboutSectionProps = {
  profile: GithubProfileData;
};

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <SectionShell id="sobre" title="Sobre mim" subtitle="Tecnologia orientada a resultado de negocio">
      <div className="grid gap-5 md:grid-cols-[240px_1fr] md:gap-6">
        <div className="relative h-56 overflow-hidden rounded-2xl border border-border bg-background-soft sm:h-60">
          <Image src={profile.avatarUrl} alt={`Foto de perfil de ${profile.fullName}`} fill className="object-cover" />
        </div>
        <div className="space-y-4 text-sm text-muted sm:text-base lg:text-lg">
          <p>
            Sou {profile.fullName}, Desenvolvedor Full-Stack especializado em React.js, Node.js e TypeScript. Atuo na traducao de requisitos de negocio em produtos digitais com impacto real, combinando experiencia do usuario e arquitetura escalavel.
          </p>
          <p>
            Entrego frontend moderno com React 18, TypeScript e TailwindCSS, e backend robusto com Node.js/Express, PostgreSQL (Prisma), MongoDB e Docker, sempre com foco em performance, manutencao e evolucao continua.
          </p>
          <p>
            Tambem aplico IA e automacao com n8n e LLMs para otimizar fluxos operacionais e acelerar produtividade sem comprometer qualidade tecnica.
          </p>
          <div className="grid gap-3 pt-1 sm:grid-cols-2">
            <div className="hover-lift rounded-xl border border-border bg-background-soft p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">O que eu trago para o time</h4>
              <p className="mt-2 text-sm text-muted">
                Proatividade, comunicacao clara, resolucao de problemas e visao de produto para entregar software com impacto mensuravel.
              </p>
            </div>
            <div className="hover-lift rounded-xl border border-border bg-background-soft p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-accent">Formacao atual</h4>
              <p className="mt-2 text-sm text-muted">
                Atualmente cursando Analise e Desenvolvimento de Sistemas (Univali), com foco em evolucao continua e aplicacao pratica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
