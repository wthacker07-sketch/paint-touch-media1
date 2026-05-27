export function Newsletter() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-ink p-6 text-white shadow-card sm:p-10 lg:p-12">
      <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-electric/35 blur-2xl" />
      <div className="absolute bottom-0 left-8 h-28 w-72 rounded-t-full border-2 border-white/20" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-volt">Paint Touch Dispatch</p>
          <h2 className="text-balance text-4xl font-black leading-[0.92] tracking-tight sm:text-5xl">
            One smart basketball email. No empty calories.
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-white/72">
            Weekly college hoops notes, rankings movement, draft opinions, and the NBA ideas worth stealing.
          </p>
        </div>
        <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
          <label className="sr-only" htmlFor="newsletter-email">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="you@email.com"
            className="min-h-14 rounded-2xl border border-white/20 bg-white px-4 font-bold text-ink outline-none ring-electric/30 transition focus:ring-4"
          />
          <button className="min-h-14 rounded-2xl bg-volt px-6 font-black text-ink transition hover:-translate-y-0.5" type="submit">
            Join Free
          </button>
        </form>
      </div>
    </section>
  );
}
