import type { Article } from "@/data/articles";

const toneClasses: Record<Article["imageTone"], string> = {
  blue: "from-electric via-sky-400 to-white",
  orange: "from-rim via-amber-300 to-white",
  red: "from-press via-rose-300 to-white",
  green: "from-volt via-emerald-300 to-white",
  black: "from-ink via-zinc-500 to-white",
  purple: "from-violet-600 via-fuchsia-300 to-white"
};

export function VisualCard({ tone, label }: { tone: Article["imageTone"]; label?: string }) {
  return (
    <div className={`court-lines relative min-h-64 overflow-hidden rounded-[2rem] bg-gradient-to-br ${toneClasses[tone]} p-5 shadow-card`}>
      <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full border-[18px] border-white/55" />
      <div className="absolute bottom-6 left-6 h-28 w-28 rounded-full border-[12px] border-ink/12" />
      <div className="absolute right-8 top-1/2 h-24 w-44 -translate-y-1/2 rounded-full border-2 border-white/70" />
      <div className="halftone absolute bottom-4 right-6 h-24 w-28 opacity-60" />
      <div className="relative z-10 flex h-full min-h-56 flex-col justify-between">
        <span className="w-fit rounded-full bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-wide text-ink">
          {label ?? "Paint Touch"}
        </span>
        <div className="flex items-end justify-between gap-4">
          <span className="text-6xl font-black leading-none tracking-tight text-white drop-shadow">PTM</span>
          <span className="rounded-full bg-ink px-4 py-2 text-xs font-black uppercase text-white">Media</span>
        </div>
      </div>
    </div>
  );
}
