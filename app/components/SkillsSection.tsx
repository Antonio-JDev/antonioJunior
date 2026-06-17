import { SectionShell } from "@/app/components/SectionShell";
import { SkillsHub } from "@/app/components/SkillsHub";

const softSkills = [
  "Comunicacao tecnica e didatica",
  "Pensamento analitico voltado a resolucao de problemas",
  "Trabalho colaborativo em equipes ageis (Scrum/Kanban)",
  "Adaptabilidade a novas tecnologias e ferramentas de IA",
  "Senso de propriedade e foco em entrega de valor ao cliente",
];

export function SkillsSection() {
  return (
    <SectionShell id="skills" title="O que eu domino" subtitle="Stack tecnologica conectada ao meu fluxo de entrega">
      <div className="space-y-8">
        <SkillsHub />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill) => (
            <div key={skill} className="soft-skill-card text-muted">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
