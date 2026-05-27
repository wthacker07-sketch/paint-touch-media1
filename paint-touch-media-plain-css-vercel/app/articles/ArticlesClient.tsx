"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, categories, type ArticleCategory } from "@/data/articles";

const all = "All";

export function ArticlesClient() {
  const [active, setActive] = useState<ArticleCategory | typeof all>(all);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryMatch = active === all || article.category === active;
      const searchMatch =
        !term ||
        article.title.toLowerCase().includes(term) ||
        article.excerpt.toLowerCase().includes(term) ||
        article.author.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [active, query]);

  return (
    <div className="grid gap-8">
      <div className="grid gap-4 rounded-[2rem] border border-line bg-white p-4 shadow-card lg:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="article-search">Search articles</label>
        <input
          id="article-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search stories, authors, topics..."
          className="min-h-14 rounded-2xl border border-line bg-paper px-4 text-base font-bold outline-none ring-electric/20 focus:ring-4"
        />
        <div className="flex flex-wrap gap-2">
          {[all, ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category as ArticleCategory | typeof all)}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                active === category ? "bg-ink text-white" : "bg-paper text-ink hover:bg-volt"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((article) => <ArticleCard key={article.slug} article={article} />)}
      </div>
    </div>
  );
}
