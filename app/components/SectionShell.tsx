type SectionShellProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export function SectionShell({ id, title, subtitle, children }: SectionShellProps) {
  return (
    <section
      id={id}
      className="section-surface rounded-2xl border border-white/[0.05] bg-white/[0.015] p-6 backdrop-blur-sm sm:p-8"
    >
      <header className="mb-6">
        <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 text-base text-muted">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  );
}
