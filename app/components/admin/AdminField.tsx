type AdminFieldProps = {
  label: string;
  description?: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "password" | "url";
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  rows?: number;
};

export function AdminField({
  label,
  description,
  value,
  onChange,
  type = "text",
  placeholder,
  required = false,
  multiline = false,
  rows = 4,
}: AdminFieldProps) {
  const inputClassName =
    "block w-full rounded-xl border-2 border-white/20 bg-[#0b1223] px-4 py-3 text-sm text-white shadow-inner placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/20";

  return (
    <label className="grid gap-2">
      <span className="text-sm font-semibold text-white">{label}</span>
      {description ? <span className="text-xs text-slate-400">{description}</span> : null}
      {multiline ? (
        <textarea
          required={required}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClassName} min-h-[110px] resize-y`}
        />
      ) : (
        <input
          required={required}
          type={type}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={inputClassName}
        />
      )}
    </label>
  );
}

export function AdminPasswordField({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <AdminField
      label="Senha de administrador"
      description="Confirme com ADMIN_PASSWORD para salvar alteracoes."
      type="password"
      value={value}
      onChange={onChange}
      placeholder="Digite sua senha admin"
      required
    />
  );
}
