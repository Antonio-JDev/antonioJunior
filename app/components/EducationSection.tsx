import { SectionShell } from "@/app/components/SectionShell";

const education = [
  {
    title: "Analise e Desenvolvimento de Sistemas",
    org: "UNIVALI",
    period: "Cursando - conclusao prevista 12/2026",
  },
  { title: "Engenharia de Requisitos aplicada a ERP", org: "Experiencia profissional", period: "Pratica em projetos reais" },
  { title: "Full-Stack com foco em produto", org: "Estudos continuos", period: "Atualizacao constante" },
];

export function EducationSection() {
  return (
    <SectionShell id="formacao" title="Formacoes academicas" subtitle="Base tecnica e aprendizado continuo">
      <div className="grid gap-4 md:grid-cols-3">
        {education.map((item) => (
          <article key={item.title} className="hover-lift rounded-2xl border border-border bg-background-soft p-4">
            <p className="text-xs uppercase tracking-wide text-accent">{item.period}</p>
            <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.org}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-background-soft p-5">
        <h3 className="text-lg font-semibold text-foreground">Certificacoes e extensoes universitarias</h3>
        <p className="mt-2 text-sm text-muted">
          Espaco dedicado para adicionar cursos de extensao, certificacoes tecnicas e trilhas de especializacao.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <article className="rounded-xl border border-dashed border-border p-4">
            <p className="text-sm font-semibold text-foreground">Em breve: nova certificacao</p>
            <p className="mt-1 text-xs text-muted">Adicione aqui o nome do curso, instituicao e ano.</p>
          </article>
          <article className="rounded-xl border border-dashed border-border p-4">
            <p className="text-sm font-semibold text-foreground">Em breve: extensao universitaria</p>
            <p className="mt-1 text-xs text-muted">Ideal para destacar conteudos de curta duracao e foco pratico.</p>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
