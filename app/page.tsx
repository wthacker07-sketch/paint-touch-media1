import Link from "next/link";
import { ArticleCard } from "@/components/ArticleCard";
import { Newsletter } from "@/components/Newsletter";
import { RankingTable } from "@/components/RankingTable";
import { SectionHeader } from "@/components/SectionHeader";
import { VisualCard } from "@/components/VisualCard";
import { articles, featuredArticle, trendingArticles } from "@/data/articles";
import { teamRankings } from "@/data/rankings";

export default function HomePage() {
  const latest = articles.filter((article) => article.slug !== featuredArticle.slug).slice(0, 4);
  const college = articles.filter((article) => article.category === "College Basketball" || article.category === "Draft");
  const nba = articles.filter((article) => article.category === "NBA");

  return (
    <main className="relative overflow-hidden">
      <div className="play-lines" />
      <section className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-16">
        <span className="accent-blob left-[7%] top-16 h-16 w-16 bg-volt" />
        <span className="accent-blob right-[10%] top-28 h-24 w-24 bg-rim/20" />
        <div>
          <p className="mb-4 w-fit rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-electric shadow-card">
            College hoops first / NBA second
          </p>
          <h1 className="text-balance text-6xl font-black leading-[0.86] tracking-tight sm:text-7xl lg:text-8xl">
            Smarter basketball media from the paint out.
          </h1>
          <p className="mt-6 max-w-2xl text-xl font-medium text-zinc-600">
            Paint Touch Media covers college basketball analysis, rankings, draft boards, opinion, news, and the NBA ideas that shape the sport.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/articles" className="rounded-full bg-ink px-6 py-3 font-black text-white shadow-card transition hover:-translate-y-0.5">
              Read Latest
            </Link>
            <Link href="/rankings" className="rounded-full border border-ink bg-white px-6 py-3 font-black transition hover:bg-volt">
              View Rankings
            </Link>
          </div>
        </div>
        <ArticleCard article={featuredArticle} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Latest" title="Fresh reads from the floor." intro="Analysis, arguments, and early signals worth caring about." />
        <div className="grid gap-5 md:grid-cols-2">
          {latest.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="rounded-[2rem] bg-ink p-6 text-white shadow-card">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-volt">Trending</p>
          <div className="grid gap-4">
            {trendingArticles.map((article, index) => (
              <Link key={article.slug} href={`/articles/${article.slug}`} className="group grid grid-cols-[40px_1fr] gap-4 rounded-3xl border border-white/10 p-4 transition hover:bg-white/10">
                <span className="text-3xl font-black text-white/28">{index + 1}</span>
                <span>
                  <span className="block text-xs font-black uppercase tracking-wide text-rim">{article.category}</span>
                  <span className="mt-1 block text-xl font-black leading-tight group-hover:text-volt">{article.title}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
        <RankingTable title="Top 5 Teams Right Now" items={teamRankings} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="College Basketball" title="The main obsession." intro="Recruiting context, roster construction, film notes, and March-ready arguments." />
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr_1fr]">
          {college.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <VisualCard tone="red" label="NBA Lens" />
        <div>
          <SectionHeader eyebrow="NBA" title="Pro ideas, college lessons." />
          <div className="grid gap-5">
            {nba.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </main>
  );
}
