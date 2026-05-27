export function SectionHeader({
  eyebrow,
  title,
  intro
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-8 flex flex-col gap-3 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-rim">{eyebrow}</p>
        <h2 className="max-w-3xl text-balance text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl lg:text-6xl">{title}</h2>
      </div>
      {intro ? <p className="max-w-md text-lg font-medium text-zinc-600">{intro}</p> : null}
    </div>
  );
}
