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
      className="rounded-3xl border border-border/90 bg-card/95 p-6 shadow-[0_0_40px_rgba(29,78,216,0.15)] sm:p-8"
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
