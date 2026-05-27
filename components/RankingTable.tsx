import type { RankingItem } from "@/data/rankings";

const movementLabel: Record<RankingItem["movement"], string> = {
  up: "+",
  down: "-",
  same: "-",
  new: "NEW"
};

const movementClass: Record<RankingItem["movement"], string> = {
  up: "bg-volt text-ink",
  down: "bg-press text-white",
  same: "bg-paper text-zinc-500",
  new: "bg-electric text-white"
};

export function RankingTable({ title, items }: { title: string; items: RankingItem[] }) {
  return (
    <section className="rounded-[2rem] border border-line bg-white p-4 shadow-card sm:p-6">
      <h2 className="mb-5 text-3xl font-black tracking-tight">{title}</h2>
      <div className="grid gap-3">
        {items.map((item) => (
          <article key={`${title}-${item.rank}`} className="grid grid-cols-[52px_1fr] gap-4 rounded-3xl bg-paper p-4 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-card sm:grid-cols-[52px_80px_1fr]">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-xl font-black text-white">{item.rank}</div>
            <div className={`hidden h-12 place-items-center rounded-2xl text-sm font-black sm:grid ${movementClass[item.movement]}`}>
              {movementLabel[item.movement]}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-black leading-tight">{item.name}</h3>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-black uppercase text-zinc-500">{item.meta}</span>
              </div>
              <p className="mt-2 text-zinc-600">{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
