import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/ArticleCard";
import { VisualCard } from "@/components/VisualCard";
import { articles } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Article" };
  }

  return {
    title: article.title,
    description: article.excerpt
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const related = articles.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const fallbackRelated = related.length ? related : articles.filter((item) => item.slug !== article.slug).slice(0, 3);

  return (
    <main>
      <article className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{article.category}</span>
          <span className="rounded-full bg-white px-3 py-1 text-xs font-black text-zinc-500 shadow-card">{article.readTime}</span>
        </div>
        <h1 className="text-balance text-5xl font-black leading-[0.9] tracking-tight sm:text-7xl">{article.title}</h1>
        <p className="mt-5 max-w-3xl text-2xl font-bold text-zinc-600">{article.dek}</p>
        <p className="mt-5 text-sm font-black uppercase tracking-wide text-zinc-500">
          {article.author} / {article.date}
        </p>
        <div className="mt-8">
          <VisualCard tone={article.imageTone} label={article.category} />
        </div>
        <div className="prose-article mx-auto mt-10 max-w-3xl">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-4xl font-black tracking-tight">Related reads</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {fallbackRelated.map((item) => <ArticleCard key={item.slug} article={item} />)}
        </div>
      </section>
    </main>
  );
}
