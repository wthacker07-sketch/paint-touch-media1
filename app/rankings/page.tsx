import type { Metadata } from "next";
import { RankingTable } from "@/components/RankingTable";
import { prospectRankings, playerRankings, teamRankings } from "@/data/rankings";

export const metadata: Metadata = {
  title: "Rankings",
  description: "Paint Touch Media team, player, and prospect rankings."
};

export default function RankingsPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="play-lines" />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-rim">Rankings Hub</p>
        <h1 className="max-w-5xl text-balance text-6xl font-black leading-[0.88] tracking-tight sm:text-7xl">
          Boards that move when the basketball says they should.
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-zinc-600">
          Teams, players, and prospects with movement, notes, and enough context to argue back.
        </p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 sm:px-6 lg:px-8">
        <RankingTable title="College Team Power Board" items={teamRankings} />
        <RankingTable title="Player Watch List" items={playerRankings} />
        <RankingTable title="Draft Prospect Board" items={prospectRankings} />
      </section>
    </main>
  );
}
