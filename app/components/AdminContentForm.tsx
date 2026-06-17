"use client";

import { AdminField, AdminPasswordField } from "@/app/components/admin/AdminField";
import {
  ABOUT_CONTENT_FIELDS,
  DEFAULT_SITE_CONTENT,
  HERO_CONTENT_FIELDS,
  type SiteSettingsData,
} from "@/app/lib/site-content-fields";
import Image from "next/image";
import { useEffect, useState } from "react";

export function AdminContentForm() {
  const [form, setForm] = useState<SiteSettingsData>(DEFAULT_SITE_CONTENT);
  const [adminPassword, setAdminPassword] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSettings() {
      try {
        const response = await fetch("/api/settings");
        if (!response.ok) return;
        const data = (await response.json()) as SiteSettingsData;
        setForm(data);
      } finally {
        setLoading(false);
      }
    }

    loadSettings();
  }, []);

  function updateField(key: keyof SiteSettingsData, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Salvando conteudo...");

    const response = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, adminPassword }),
    });

    if (!response.ok) {
      setStatus("Erro ao salvar. Verifique a senha de admin.");
      return;
    }

    const data = (await response.json()) as SiteSettingsData;
    setForm(data);
    setAdminPassword("");
    setStatus("Conteudo do Hero e Sobre atualizado com sucesso.");
  }

  if (loading) {
    return <p className="text-sm text-slate-300">Carregando conteudo do portfolio...</p>;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-8">
      <section className="admin-section">
        <h2 className="admin-section-title">Secao Hero</h2>
        <p className="admin-section-desc">Edite os textos e a imagem exibidos no topo do site.</p>
        <div className="mt-4 grid gap-4">
          {HERO_CONTENT_FIELDS.map((field) => (
            <div key={field.key}>
              <AdminField
                label={field.label}
                description={field.description}
                value={form[field.key]}
                onChange={(value) => updateField(field.key, value)}
                type={field.type === "url" ? "url" : "text"}
                multiline={field.type === "textarea"}
                rows={field.rows}
                placeholder={`Digite ${field.label.toLowerCase()}`}
              />
              {field.type === "url" && form[field.key] ? (
                <div className="relative mt-3 h-36 overflow-hidden rounded-xl border-2 border-white/15">
                  <Image src={form[field.key]} alt={`Preview ${field.label}`} fill className="object-cover" unoptimized />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="admin-section">
        <h2 className="admin-section-title">Secao Sobre</h2>
        <p className="admin-section-desc">Atualize titulo, paragrafos e foto da secao Sobre mim.</p>
        <div className="mt-4 grid gap-4">
          {ABOUT_CONTENT_FIELDS.map((field) => (
            <div key={field.key}>
              <AdminField
                label={field.label}
                description={field.description}
                value={form[field.key]}
                onChange={(value) => updateField(field.key, value)}
                type={field.type === "url" ? "url" : "text"}
                multiline={field.type === "textarea"}
                rows={field.rows}
                placeholder={`Digite ${field.label.toLowerCase()}`}
              />
              {field.type === "url" && form[field.key] ? (
                <div className="relative mt-3 h-36 overflow-hidden rounded-xl border-2 border-white/15">
                  <Image src={form[field.key]} alt={`Preview ${field.label}`} fill className="object-cover" unoptimized />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <AdminPasswordField value={adminPassword} onChange={setAdminPassword} />

      <button type="submit" className="admin-primary-btn w-fit">
        Salvar conteudo do site
      </button>
      {status ? <p className="text-sm text-slate-300">{status}</p> : null}
    </form>
  );
}
