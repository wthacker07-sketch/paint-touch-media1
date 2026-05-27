import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Paint Touch Media or submit basketball tips, story ideas, and coverage leads."
};

export default function ContactPage() {
  return (
    <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
      <section>
        <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-rim">Contact / Submit Tips</p>
        <h1 className="text-balance text-6xl font-black leading-[0.88] tracking-tight sm:text-7xl">Send the tip. Start the argument.</h1>
        <p className="mt-6 max-w-2xl text-xl text-zinc-600">
          Have a roster note, event invite, player recommendation, correction, or partnership idea? Send it through.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 font-black">
          <a href="https://www.instagram.com/" className="rounded-full bg-white px-4 py-2 shadow-card hover:bg-ink hover:text-white">Instagram</a>
          <a href="https://www.tiktok.com/" className="rounded-full bg-white px-4 py-2 shadow-card hover:bg-ink hover:text-white">TikTok</a>
          <a href="mailto:tips@painttouchmedia.com" className="rounded-full bg-white px-4 py-2 shadow-card hover:bg-ink hover:text-white">Email</a>
        </div>
      </section>

      <form className="grid gap-4 rounded-[2rem] border border-line bg-white p-5 shadow-card sm:p-7" action="mailto:tips@painttouchmedia.com" method="post" encType="text/plain">
        <label className="grid gap-2 font-black">
          Name
          <input className="min-h-14 rounded-2xl border border-line bg-paper px-4 font-bold outline-none ring-electric/20 focus:ring-4" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 font-black">
          Email
          <input className="min-h-14 rounded-2xl border border-line bg-paper px-4 font-bold outline-none ring-electric/20 focus:ring-4" name="email" type="email" placeholder="you@email.com" />
        </label>
        <label className="grid gap-2 font-black">
          Topic
          <select className="min-h-14 rounded-2xl border border-line bg-paper px-4 font-bold outline-none ring-electric/20 focus:ring-4" name="topic">
            <option>Story tip</option>
            <option>College basketball lead</option>
            <option>NBA idea</option>
            <option>Draft prospect</option>
            <option>Partnership</option>
          </select>
        </label>
        <label className="grid gap-2 font-black">
          Message
          <textarea className="min-h-36 rounded-2xl border border-line bg-paper px-4 py-3 font-bold outline-none ring-electric/20 focus:ring-4" name="message" placeholder="Tell us what we should know" />
        </label>
        <button className="min-h-14 rounded-2xl bg-electric px-6 font-black text-white shadow-glow transition hover:-translate-y-0.5" type="submit">
          Send Message
        </button>
      </form>
    </main>
  );
}
