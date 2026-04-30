import { SectionShell } from "@/app/components/SectionShell";

const experiences = [
  {
    role: "Desenvolvedor Front-End",
    company: "Lila Navegacao Oncologica",
    period: "Out 2025 - Atual",
    description:
      "Desenvolvimento de sistema de telemonitoramento para profissionais de saude, com interfaces acessiveis, responsivas e orientadas a performance.",
    stack: ["Vue.js", "Vuetify", "REST API"],
  },
  {
    role: "Desenvolvedor Full-Stack",
    company: "RotNet",
    period: "Mar 2025 - Set 2025",
    description:
      "Construcao de aplicacoes web com front-end em Vue.js e backend em Node.js/MySQL, seguindo GitFlow e boas praticas de versionamento.",
    stack: ["Vue.js", "Node.js", "MySQL"],
  },
];

export function ExperienceSection() {
  return (
    <SectionShell id="experiencias" title="Onde eu trabalhei" subtitle="Historico profissional">
      <div className="timeline-wrapper relative space-y-6 pl-8">
        <span className="timeline-line absolute bottom-0 left-2 top-0 w-px bg-border" />
        {experiences.map((item, index) => (
          <article
            key={item.role}
            className="timeline-card relative rounded-2xl border border-border bg-background-soft p-5"
          >
            <span className="timeline-dot absolute -left-[30px] top-7 h-4 w-4 rounded-full border border-border bg-background">
              <span className="timeline-dot-inner absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl font-semibold text-foreground">{item.role}</h3>
              <p className="text-sm text-muted">{item.period}</p>
            </div>
            <p className="mt-1 text-sm font-semibold text-primary">{item.company}</p>
            <p className="mt-3 text-muted">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted transition hover:border-accent/60 hover:text-foreground">
                  {tech}
                </span>
              ))}
            </div>
            {index === 0 ? (
              <span className="mt-4 inline-flex rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
                Atual
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
