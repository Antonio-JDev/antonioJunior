"use client";

import { AdminField, AdminPasswordField } from "@/app/components/admin/AdminField";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectItem = {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkGithub: string;
  linkDeploy: string;
  technologies: string[];
  displayDate: string;
  problem?: string;
  solution?: string;
  result?: string;
  createdAt?: string;
};

type ProjectFormState = {
  title: string;
  description: string;
  imageUrl: string;
  linkGithub: string;
  linkDeploy: string;
  technologies: string;
  displayDate: string;
  problem: string;
  solution: string;
  result: string;
};

const emptyForm: ProjectFormState = {
  title: "",
  description: "",
  imageUrl: "",
  linkGithub: "",
  linkDeploy: "",
  technologies: "",
  displayDate: "",
  problem: "",
  solution: "",
  result: "",
};

function formatProjectDate(project: ProjectItem) {
  if (project.displayDate?.trim()) return project.displayDate;
  if (!project.createdAt) return "Sem data";
  return new Date(project.createdAt).toLocaleDateString("pt-BR");
}

export function AdminProjectsPanel() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [form, setForm] = useState<ProjectFormState>(emptyForm);
  const [adminPassword, setAdminPassword] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const loadProjects = useCallback(async () => {
    const response = await fetch("/api/projects");
    if (!response.ok) return;
    const data = (await response.json()) as ProjectItem[];
    setProjects(data);
  }, []);

  useEffect(() => {
    loadProjects().finally(() => setLoading(false));
  }, [loadProjects]);

  function updateField(key: keyof ProjectFormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function resetCreateForm() {
    setForm(emptyForm);
    setEditingId(null);
    setAdminPassword("");
  }

  function startEdit(project: ProjectItem) {
    setEditingId(project._id);
    setForm({
      title: project.title,
      description: project.description,
      imageUrl: project.imageUrl,
      linkGithub: project.linkGithub,
      linkDeploy: project.linkDeploy,
      technologies: project.technologies.join(", "),
      displayDate: project.displayDate || "",
      problem: project.problem || "",
      solution: project.solution || "",
      result: project.result || "",
    });
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(editingId ? "Atualizando projeto..." : "Salvando projeto...");

    const payload = {
      ...form,
      technologies: form.technologies
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean),
      adminPassword,
    };

    const response = await fetch(editingId ? `/api/projects/${editingId}` : "/api/projects", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("Erro ao salvar projeto. Verifique os campos e a senha.");
      return;
    }

    await loadProjects();
    resetCreateForm();
    setStatus(editingId ? "Projeto atualizado com sucesso." : "Projeto cadastrado com sucesso.");
  }

  async function removeProject(id: string) {
    if (!adminPassword) {
      setStatus("Informe a senha de admin antes de excluir.");
      return;
    }

    const confirmed = window.confirm("Deseja remover este projeto?");
    if (!confirmed) return;

    const response = await fetch(`/api/projects/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminPassword }),
    });

    if (!response.ok) {
      setStatus("Erro ao remover projeto.");
      return;
    }

    await loadProjects();
    if (editingId === id) resetCreateForm();
    setStatus("Projeto removido com sucesso.");
  }

  return (
    <div className="grid gap-8">
      <section className="admin-section">
        <h2 className="admin-section-title">{editingId ? "Editar projeto" : "Novo projeto"}</h2>
        <p className="admin-section-desc">
          Preencha os campos abaixo para publicar ou atualizar um projeto no portfolio.
        </p>

        <form onSubmit={onSubmit} className="mt-4 grid gap-4">
          <AdminField label="Titulo" value={form.title} onChange={(v) => updateField("title", v)} required placeholder="Nome do projeto" />
          <AdminField
            label="Descricao"
            value={form.description}
            onChange={(v) => updateField("description", v)}
            required
            multiline
            rows={5}
            placeholder="Descreva o projeto"
          />
          <AdminField
            label="Data de exibicao"
            description="Ex: Mar/2025 ou 2024. Se vazio, usa a data de cadastro."
            value={form.displayDate}
            onChange={(v) => updateField("displayDate", v)}
            placeholder="Mar/2025"
          />
          <AdminField
            label="URL da imagem"
            type="url"
            value={form.imageUrl}
            onChange={(v) => updateField("imageUrl", v)}
            required
            placeholder="https://..."
          />
          {form.imageUrl ? (
            <div className="relative h-40 overflow-hidden rounded-xl border-2 border-white/15">
              <Image src={form.imageUrl} alt="Preview do projeto" fill className="object-cover" unoptimized />
            </div>
          ) : null}
          <AdminField label="Link GitHub" type="url" value={form.linkGithub} onChange={(v) => updateField("linkGithub", v)} required />
          <AdminField label="Link Deploy" type="url" value={form.linkDeploy} onChange={(v) => updateField("linkDeploy", v)} required />
          <AdminField
            label="Tecnologias"
            description="Separe por virgula"
            value={form.technologies}
            onChange={(v) => updateField("technologies", v)}
            required
            placeholder="React, Node.js, MongoDB"
          />
          <AdminField
            label="Problema"
            description="Desafio de negocio que o projeto resolve."
            value={form.problem}
            onChange={(v) => updateField("problem", v)}
            multiline
            rows={2}
            placeholder="Controle manual de obras..."
          />
          <AdminField
            label="Solucao"
            description="O que foi desenvolvido."
            value={form.solution}
            onChange={(v) => updateField("solution", v)}
            multiline
            rows={2}
            placeholder="ERP completo..."
          />
          <AdminField
            label="Resultado"
            description="Impacto gerado para o cliente."
            value={form.result}
            onChange={(v) => updateField("result", v)}
            multiline
            rows={2}
            placeholder="Centralizacao dos processos..."
          />
          <AdminPasswordField value={adminPassword} onChange={setAdminPassword} />

          <div className="flex flex-wrap gap-3">
            <button type="submit" className="admin-primary-btn">
              {editingId ? "Atualizar projeto" : "Salvar projeto"}
            </button>
            {editingId ? (
              <button type="button" onClick={resetCreateForm} className="admin-secondary-btn">
                Cancelar edicao
              </button>
            ) : null}
          </div>
          {status ? <p className="text-sm text-slate-300">{status}</p> : null}
        </form>
      </section>

      <section className="admin-section">
        <h2 className="admin-section-title">Projetos salvos</h2>
        <p className="admin-section-desc">{projects.length} projeto(s) publicado(s) no portfolio.</p>

        {loading ? (
          <p className="mt-4 text-sm text-slate-300">Carregando projetos...</p>
        ) : projects.length === 0 ? (
          <p className="mt-4 rounded-xl border border-dashed border-white/20 px-4 py-8 text-center text-sm text-slate-400">
            Nenhum projeto cadastrado ainda.
          </p>
        ) : (
          <div className="mt-4 grid gap-4">
            {projects.map((project) => (
              <article key={project._id} className="admin-project-card">
                <div className="relative h-32 w-full overflow-hidden rounded-lg border border-white/10 sm:w-44 sm:shrink-0">
                  <Image src={project.imageUrl} alt={project.title} fill className="object-cover" unoptimized />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">{formatProjectDate(project)}</span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-300">{project.description}</p>
                  <p className="mt-2 text-xs text-slate-400">{project.technologies.join(" · ")}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={() => startEdit(project)} className="admin-secondary-btn">
                      Editar
                    </button>
                    <button type="button" onClick={() => removeProject(project._id)} className="admin-danger-btn">
                      Excluir
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
