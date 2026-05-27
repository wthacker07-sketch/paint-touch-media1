import Link from "next/link";
import type { Article } from "@/data/articles";
import { VisualCard } from "./VisualCard";

export function ArticleCard({ article, large = false }: { article: Article; large?: boolean }) {
  return (
    <article className={`group grid overflow-hidden rounded-[2rem] border border-line bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-glow ${large ? "lg:grid-cols-[1.08fr_0.92fr]" : ""}`}>
      <Link href={`/articles/${article.slug}`} className="block">
        <VisualCard tone={article.imageTone} label={article.category} />
      </Link>
      <div className="flex flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{article.category}</span>
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-bold text-zinc-600">{article.readTime}</span>
        </div>
        <Link href={`/articles/${article.slug}`}>
          <h3 className={`${large ? "text-3xl sm:text-5xl" : "text-2xl"} text-balance font-black leading-[0.94] tracking-tight transition group-hover:text-electric`}>
            {article.title}
          </h3>
        </Link>
        <p className="mt-4 text-sm font-bold text-zinc-500">
          {article.author} / {article.date}
        </p>
        <p className={`${large ? "text-lg" : "text-base"} mt-4 text-zinc-600`}>{article.excerpt}</p>
        <Link href={`/articles/${article.slug}`} className="mt-6 w-fit rounded-full bg-paper px-4 py-2 text-sm font-black transition hover:bg-ink hover:text-white">
          Read story
        </Link>
      </div>
    </article>
  );
}
