export function PageHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <section data-noreveal className="relative isolate overflow-hidden pb-16 pt-36 text-white">
      <div className="navy-texture absolute inset-0 -z-10" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold uppercase leading-[1.1] sm:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
