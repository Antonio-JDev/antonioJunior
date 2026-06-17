"use client";

import { AdminField } from "@/app/components/admin/AdminField";
import { useState } from "react";

export function AdminLoginForm() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);

    if (!response.ok) {
      setError("Senha invalida.");
      return;
    }

    window.location.reload();
  }

  return (
    <form onSubmit={onSubmit} className="admin-panel-card grid max-w-md gap-4">
      <div>
        <h1 className="text-2xl font-bold text-white">Acesso Admin</h1>
        <p className="mt-1 text-sm text-slate-300">Informe a senha para liberar o painel.</p>
      </div>
      <AdminField
        label="Senha"
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Digite ADMIN_PASSWORD"
        required
      />
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <button type="submit" disabled={loading} className="admin-primary-btn w-fit disabled:opacity-60">
        {loading ? "Validando..." : "Entrar"}
      </button>
    </form>
  );
}
