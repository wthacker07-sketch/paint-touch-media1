import type { Metadata } from "next";
import { ArticlesClient } from "./ArticlesClient";

export const metadata: Metadata = {
  title: "Articles",
  description: "Browse Paint Touch Media articles by category, including college basketball, NBA, rankings, draft, opinion, and news."
};

export default function ArticlesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-rim">Articles</p>
        <h1 className="max-w-4xl text-balance text-6xl font-black leading-[0.88] tracking-tight sm:text-7xl">
          Every take, ranking, report, and film note.
        </h1>
        <p className="mt-5 max-w-2xl text-xl text-zinc-600">
          Filter by category or search the archive. The data lives in one file so publishing new stories stays simple.
        </p>
      </div>
      <ArticlesClient />
    </main>
  );
}
