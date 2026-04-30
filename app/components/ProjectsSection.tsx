import Image from "next/image";
import { SectionShell } from "@/app/components/SectionShell";
import { listProjects } from "@/app/lib/projects";

export async function ProjectsSection() {
  const projects = await listProjects();

  return (
    <SectionShell id="projetos" title="Meu portfolio" subtitle="Projetos com impacto real">
      {projects.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-background-soft p-8 text-center text-muted">
          Nenhum projeto cadastrado ainda. Acesse /admin para publicar o primeiro.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="hover-lift overflow-hidden rounded-2xl border border-border bg-background-soft">
              <div className="relative h-44">
                <Image src={project.imageUrl} alt={project.title} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={`${project.title}-${tech}`} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-1 text-sm font-semibold">
                  <a href={project.linkGithub} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                    GitHub
                  </a>
                  <a href={project.linkDeploy} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                    Deploy
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </SectionShell>
  );
}
