import { ProjectCard } from "@/app/components/ProjectCard";
import { ProjectsGridClient } from "@/app/components/ProjectsGridClient";
import { SectionShell } from "@/app/components/SectionShell";
import { getProjectBentoSize } from "@/app/lib/project-bento";
import { listProjects } from "@/app/lib/projects";

function formatProjectDate(project: { displayDate?: string; createdAt?: string }) {
  if (project.displayDate?.trim()) return project.displayDate;
  if (!project.createdAt) return "";
  return new Date(project.createdAt).toLocaleDateString("pt-BR");
}

export async function ProjectsSection() {
  const projects = await listProjects();

  return (
    <SectionShell
      id="projetos"
      title="Projetos com impacto real."
      subtitle="Cada projeto desenvolvido resolve um problema específico de negócio, unindo tecnologia, performance e experiência do usuário."
    >
      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[rgba(212,175,55,0.25)] bg-[#121722]/50 p-8 text-center text-muted">
          Nenhum projeto publicado ainda.
        </div>
      ) : (
        <ProjectsGridClient>
          {projects.map((project, index) => (
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
              problem={project.problem}
              solution={project.solution}
              result={project.result}
              bentoSize={getProjectBentoSize(index, projects.length)}
            />
          ))}
        </ProjectsGridClient>
      )}
    </SectionShell>
  );
}
