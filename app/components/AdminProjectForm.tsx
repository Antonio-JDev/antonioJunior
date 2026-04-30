"use client";

import { useState } from "react";

const initialForm = {
  title: "",
  description: "",
  imageUrl: "",
  linkGithub: "",
  linkDeploy: "",
  technologies: "",
  adminPassword: "",
};

export function AdminProjectForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Salvando...");
    const response = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...form,
        technologies: form.technologies
          .split(",")
          .map((value) => value.trim())
          .filter(Boolean),
      }),
    });

    if (!response.ok) {
      setStatus("Erro ao salvar projeto.");
      return;
    }

    setForm(initialForm);
    setStatus("Projeto cadastrado com sucesso.");
  }

  function updateField(key: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-border bg-card p-6">
      <h1 className="text-2xl font-bold">Cadastro de Projetos</h1>
      <p className="text-sm text-muted">Campo de imagem aceita URL e esta pronto para evolucao com Cloudinary.</p>
      <input required value={form.title} onChange={(e) => updateField("title", e.target.value)} placeholder="Titulo" className="rounded-xl border border-border bg-background-soft px-3 py-2" />
      <textarea required value={form.description} onChange={(e) => updateField("description", e.target.value)} placeholder="Descricao" className="min-h-28 rounded-xl border border-border bg-background-soft px-3 py-2" />
      <input required value={form.imageUrl} onChange={(e) => updateField("imageUrl", e.target.value)} placeholder="URL da imagem" className="rounded-xl border border-border bg-background-soft px-3 py-2" />
      <input required value={form.linkGithub} onChange={(e) => updateField("linkGithub", e.target.value)} placeholder="Link GitHub" className="rounded-xl border border-border bg-background-soft px-3 py-2" />
      <input required value={form.linkDeploy} onChange={(e) => updateField("linkDeploy", e.target.value)} placeholder="Link Deploy" className="rounded-xl border border-border bg-background-soft px-3 py-2" />
      <input required value={form.technologies} onChange={(e) => updateField("technologies", e.target.value)} placeholder="Tecnologias (React, Node.js, MongoDB)" className="rounded-xl border border-border bg-background-soft px-3 py-2" />
      <input required type="password" value={form.adminPassword} onChange={(e) => updateField("adminPassword", e.target.value)} placeholder="ADMIN_PASSWORD (confirmacao)" className="rounded-xl border border-border bg-background-soft px-3 py-2" />
      <button className="w-max rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 font-semibold text-white">Salvar projeto</button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}
