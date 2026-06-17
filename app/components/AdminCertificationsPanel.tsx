"use client";

import { AdminField, AdminPasswordField } from "@/app/components/admin/AdminField";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type CertificationItem = {
  _id: string;
  courseName: string;
  description: string;
  workload: string;
  displayDate: string;
  imageUrl: string;
  createdAt?: string;
};

type CertificationFormState = {
  courseName: string;
  description: string;
  workload: string;
  displayDate: string;
  imageUrl: string;
};

const emptyForm: CertificationFormState = {
  courseName: "",
  description: "",
  workload: "",
  displayDate: "",
  imageUrl: "",
};

export function AdminCertificationsPanel() {
  const [certifications, setCertifications] = useState<CertificationItem[]>([]);
  const [form, setForm] = useState<CertificationFormState>(emptyForm);
  const [adminPassword, setAdminPassword] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const loadCertifications = useCallback(async () => {
    const response = await fetch("/api/certifications");
    if (!response.ok) return;
    const data = (await response.json()) as CertificationItem[];
    setCertifications(data);
  }, []);

  useEffect(() => {
    loadCertifications().finally(() => setLoading(false));
  }, [loadCertifications]);

  function updateField(key: keyof CertificationFormState, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function resetCreateForm() {
    setForm(emptyForm);
    setEditingId(null);
    setAdminPassword("");
  }

  function startEdit(certification: CertificationItem) {
    setEditingId(certification._id);
    setForm({
      courseName: certification.courseName,
      description: certification.description,
      workload: certification.workload || "",
      displayDate: certification.displayDate || "",
      imageUrl: certification.imageUrl,
    });
    setStatus("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(editingId ? "Atualizando certificado..." : "Salvando certificado...");

    const payload = {
      ...form,
      adminPassword,
    };

    const response = await fetch(editingId ? `/api/certifications/${editingId}` : "/api/certifications", {
      method: editingId ? "PUT" : "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      setStatus("Erro ao salvar certificado. Verifique os campos obrigatorios e a senha.");
      return;
    }

    await loadCertifications();
    resetCreateForm();
    setStatus(editingId ? "Certificado atualizado com sucesso." : "Certificado cadastrado com sucesso.");
  }

  async function removeCertification(id: string) {
    if (!adminPassword) {
      setStatus("Informe a senha de admin antes de excluir.");
      return;
    }

    const confirmed = window.confirm("Deseja remover este certificado?");
    if (!confirmed) return;

    const response = await fetch(`/api/certifications/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ adminPassword }),
    });

    if (!response.ok) {
      setStatus("Erro ao remover certificado.");
      return;
    }

    await loadCertifications();
    if (editingId === id) resetCreateForm();
    setStatus("Certificado removido com sucesso.");
  }

  return (
    <div className="grid gap-8">
      <section className="admin-section">
        <h2 className="admin-section-title">{editingId ? "Editar certificado" : "Novo certificado"}</h2>
        <p className="admin-section-desc">
          Nome do curso, descricao, carga horaria e imagem sao exibidos na secao Formacao. A data e opcional.
        </p>

        <form onSubmit={onSubmit} className="mt-4 grid gap-4">
          <AdminField
            label="Nome do curso"
            value={form.courseName}
            onChange={(v) => updateField("courseName", v)}
            required
            placeholder="Ex: DevQuest Fullstack"
          />
          <AdminField
            label="Descricao"
            value={form.description}
            onChange={(v) => updateField("description", v)}
            required
            multiline
            rows={4}
            placeholder="Descreva o conteudo do curso"
          />
          <AdminField
            label="Carga horaria"
            description="Ex: 120h ou 40 horas"
            value={form.workload}
            onChange={(v) => updateField("workload", v)}
            placeholder="120h"
          />
          <AdminField
            label="Data"
            description="Opcional. Ex: Mar/2025 ou 2024. Deixe vazio se nao quiser exibir."
            value={form.displayDate}
            onChange={(v) => updateField("displayDate", v)}
            placeholder="Mar/2025"
          />
          <AdminField
            label="URL da imagem do certificado"
            type="url"
            value={form.imageUrl}
            onChange={(v) => updateField("imageUrl", v)}
            required
            placeholder="https://..."
          />
          {form.imageUrl ? (
            <div className="relative h-48 overflow-hidden rounded-xl border-2 border-white/15">
              <Image src={form.imageUrl} alt="Preview do certificado" fill className="object-contain bg-black/40" unoptimized />
            </div>
          ) : null}
          <AdminPasswordField value={adminPassword} onChange={setAdminPassword} />

          <div className="flex flex-wrap gap-3">
            <button type="submit" className="admin-primary-btn">
              {editingId ? "Atualizar certificado" : "Salvar certificado"}
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
        <h2 className="admin-section-title">Certificados salvos</h2>
        <p className="admin-section-desc">{certifications.length} certificado(s) publicado(s) no portfolio.</p>

        {loading ? (
          <p className="mt-4 text-sm text-slate-300">Carregando certificados...</p>
        ) : certifications.length === 0 ? (
          <p className="mt-4 rounded-xl border border-dashed border-white/20 px-4 py-8 text-center text-sm text-slate-400">
            Nenhum certificado cadastrado ainda.
          </p>
        ) : (
          <div className="mt-4 grid gap-4">
            {certifications.map((certification) => (
              <article key={certification._id} className="admin-project-card">
                <div className="relative h-32 w-full overflow-hidden rounded-lg border border-white/10 sm:w-44 sm:shrink-0">
                  <Image
                    src={certification.imageUrl}
                    alt={certification.courseName}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-white">{certification.courseName}</h3>
                    {certification.displayDate ? (
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">
                        {certification.displayDate}
                      </span>
                    ) : null}
                    {certification.workload ? (
                      <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-300">
                        {certification.workload}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm text-slate-300">{certification.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={() => startEdit(certification)} className="admin-secondary-btn">
                      Editar
                    </button>
                    <button type="button" onClick={() => removeCertification(certification._id)} className="admin-danger-btn">
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
