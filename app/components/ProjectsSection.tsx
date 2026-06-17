import { ProjectCard } from "@/app/components/ProjectCard";
import { SectionShell } from "@/app/components/SectionShell";
import { listProjects } from "@/app/lib/projects";

function formatProjectDate(project: { displayDate?: string; createdAt?: string }) {
  if (project.displayDate?.trim()) return project.displayDate;
  if (!project.createdAt) return "";
  return new Date(project.createdAt).toLocaleDateString("pt-BR");
}

export async function ProjectsSection() {
  const projects = await listProjects();

  return (
    <SectionShell id="projetos" title="Meu portfolio" subtitle="Projetos com impacto real">
      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-background-soft p-8 text-center text-muted">
          Nenhum projeto cadastrado ainda. Acesse /admin para publicar o primeiro.
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={String(project._id)}
              id={String(project._id)}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              linkGithub={project.linkGithub}
              linkDeploy={project.linkDeploy}
              technologies={project.technologies}
              dateLabel={formatProjectDate(project)}
            />
          ))}
        </div>
      )}
    </SectionShell>
  );
}
