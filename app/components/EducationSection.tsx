import { CertificationsGrid } from "@/app/components/CertificationsGrid";
import { SectionShell } from "@/app/components/SectionShell";
import { listCertifications } from "@/app/lib/certifications";

const education = [
  {
    title: "CST em Analise e Desenvolvimento de Sistemas",
    org: "UNIVALI",
    period: "Jun/2024 - Dez/2026 (previsao)",
  },
  {
    title: "Engenharia de Requisitos e arquitetura de software",
    org: "Pratica em projetos reais (ERP e APIs)",
    period: "Experiencia aplicada",
  },
  {
    title: "Clean Code, DDD e microsservicos",
    org: "Estudos e implementacao continua",
    period: "Atualizacao constante",
  },
];

export async function EducationSection() {
  const certifications = await listCertifications();

  return (
    <SectionShell id="formacao" title="Formacao academica" subtitle="Base tecnica e aprendizado continuo">
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item) => (
          <article key={item.title} className="soft-skill-card">
            <p className="text-xs uppercase tracking-wide text-accent">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.org}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
        <h3 className="text-lg font-semibold text-foreground">Certificacoes</h3>
        <CertificationsGrid certifications={certifications} />
        <p className="mt-4 text-sm text-muted">Idiomas: Portugues (nativo) e Ingles tecnico para documentacao, APIs e codigo.</p>
      </div>
    </SectionShell>
  );
}
