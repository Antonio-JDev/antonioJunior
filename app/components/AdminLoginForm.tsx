"use client";

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
    <form onSubmit={onSubmit} className="space-y-3 rounded-2xl border border-border bg-card p-6">
      <h1 className="text-2xl font-bold">Acesso Admin</h1>
      <p className="text-sm text-muted">Informe a senha para liberar o painel.</p>
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
        className="w-full rounded-xl border border-border bg-background-soft px-3 py-2 outline-none"
        placeholder="ADMIN_PASSWORD"
      />
      {error ? <p className="text-sm text-red-300">{error}</p> : null}
      <button
        disabled={loading}
        className="rounded-full bg-gradient-to-r from-primary to-accent px-5 py-2 font-semibold text-white disabled:opacity-60"
      >
        {loading ? "Validando..." : "Entrar"}
      </button>
    </form>
  );
}
