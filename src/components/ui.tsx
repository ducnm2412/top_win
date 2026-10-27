export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] ${light ? "text-accent" : "text-accent"}`}>
      {children}
    </p>
  );
}

export function H2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className={`mt-3 font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl ${light ? "text-white" : "text-navy-950"}`}
    >
      {children}
    </h2>
  );
}

