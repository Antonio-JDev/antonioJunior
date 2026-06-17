"use client";

import { AdminCertificationsPanel } from "@/app/components/AdminCertificationsPanel";
import { AdminContentForm } from "@/app/components/AdminContentForm";
import { AdminProjectsPanel } from "@/app/components/AdminProjectsPanel";
import { useRouter } from "next/navigation";
import { useState } from "react";

type AdminTab = "content" | "projects" | "certifications";

const tabs: { id: AdminTab; label: string; description: string }[] = [
  { id: "content", label: "Conteudo", description: "Hero, Sobre e imagens editaveis sem deploy." },
  { id: "projects", label: "Projetos", description: "Cadastrar, listar, editar e excluir projetos." },
  { id: "certifications", label: "Certificados", description: "Gerenciar certificacoes exibidas na secao Formacao." },
];

export function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("content");
  const [loggingOut, setLoggingOut] = useState(false);

  async function handleLogout() {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", { method: "POST" });
      router.push("/");
      router.refresh();
    } finally {
      setLoggingOut(false);
    }
  }

  return (
    <div className="admin-dashboard grid gap-6">
      <header className="admin-panel-card">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Painel administrativo</p>
            <h1 className="mt-1 text-2xl font-bold text-white">Dashboard Antonio.dev</h1>
            <p className="mt-2 text-sm text-slate-300">Gerencie textos, imagens e projetos do portfolio em tempo real.</p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="admin-logout-btn"
          >
            {loggingOut ? "Saindo..." : "Sair"}
          </button>
        </div>
      </header>
      <nav className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`admin-tab-btn ${activeTab === tab.id ? "admin-tab-btn--active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <section className="admin-panel-card">
        <p className="mb-5 text-sm text-slate-300">{tabs.find((tab) => tab.id === activeTab)?.description}</p>
        {activeTab === "content" ? (
          <AdminContentForm />
        ) : activeTab === "projects" ? (
          <AdminProjectsPanel />
        ) : (
          <AdminCertificationsPanel />
        )}
      </section>
    </div>
  );
}
