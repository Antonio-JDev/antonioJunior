import { SectionShell } from "@/app/components/SectionShell";
import {
  SiCss,
  SiGithub,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";

type SkillsSectionProps = {
  stack: string[];
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  HTML5: SiHtml5,
  CSS3: SiCss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Vue.js": SiVuedotjs,
  "Node.js": SiNodedotjs,
  MySQL: SiMysql,
  Tailwind: SiTailwindcss,
  Git: SiGit,
  GitHub: SiGithub,
};

const softSkills = [
  "Trabalho em equipe",
  "Comunicacao",
  "Resolucao de problemas",
  "Aprendizado continuo",
  "Organizacao",
  "Adaptabilidade",
];

export function SkillsSection({ stack }: SkillsSectionProps) {
  const baseStack = stack.length ? stack : ["HTML5", "CSS3", "JavaScript", "TypeScript", "Vue.js", "Node.js", "MySQL", "Tailwind", "Git", "GitHub"];
  const marqueeItems = [...baseStack, ...baseStack];

  return (
    <SectionShell id="skills" title="O que eu domino" subtitle="Ferramentas e competencias para entregar valor">
      <div className="space-y-6">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-background-soft py-5">
          <div className="skills-fade-left pointer-events-none absolute inset-y-0 left-0 z-10 w-20" />
          <div className="skills-fade-right pointer-events-none absolute inset-y-0 right-0 z-10 w-20" />
          <div className="skills-marquee-track flex min-w-max gap-3 px-4">
            {marqueeItems.map((skill, index) => {
              const Icon = iconMap[skill] || SiGithub;
              return (
                <div key={`${skill}-${index}`} className="skills-tech-card hover-lift">
                  <span className="skills-tech-icon">
                    <Icon className="text-lg text-accent" />
                  </span>
                  <span className="skills-tech-label">{skill}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((skill) => (
            <div key={skill} className="hover-lift rounded-xl border border-border bg-background-soft p-4 text-muted">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
