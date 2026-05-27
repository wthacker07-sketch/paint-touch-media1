import type { Metadata } from "next";
import { Newsletter } from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Paint Touch Media, an independent basketball platform."
};

export default function AboutPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_0.75fr] lg:px-8">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-rim">About</p>
          <h1 className="text-balance text-6xl font-black leading-[0.88] tracking-tight sm:text-7xl">
            Independent hoops coverage with a paint-first worldview.
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-zinc-600">
            Paint Touch Media is built around college basketball analysis, rankings, draft opinions, and basketball culture.
            The platform is college basketball first, NBA second, and allergic to lazy takes.
          </p>
        </div>
        <div className="relative rounded-[2rem] bg-white p-6 shadow-card">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full bg-volt" />
          <div className="absolute -bottom-6 left-8 h-24 w-24 rounded-full border-[14px] border-electric/20" />
          <h2 className="relative text-3xl font-black">What we care about</h2>
          <ul className="relative mt-5 grid gap-3 text-lg font-bold text-zinc-700">
            <li>Paint touches, spacing, and advantage creation</li>
            <li>College roster construction and player development</li>
            <li>Rankings with actual notes, not just numbers</li>
            <li>Draft context that starts with role and translation</li>
            <li>Basketball culture without losing the basketball</li>
          </ul>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Newsletter />
      </section>
    </main>
  );
}
