import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-lg text-zinc-600">
            Independent basketball coverage for people who care about the possession before the highlight.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 font-black">
          <Link href="/articles" className="rounded-full bg-paper px-4 py-2 hover:bg-ink hover:text-white">Articles</Link>
          <Link href="/rankings" className="rounded-full bg-paper px-4 py-2 hover:bg-ink hover:text-white">Rankings</Link>
          <a href="https://www.instagram.com/" className="rounded-full bg-paper px-4 py-2 hover:bg-ink hover:text-white">Instagram</a>
          <a href="https://www.tiktok.com/" className="rounded-full bg-paper px-4 py-2 hover:bg-ink hover:text-white">TikTok</a>
        </div>
      </div>
    </footer>
  );
}
