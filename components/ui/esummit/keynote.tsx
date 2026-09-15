export function ESummitKeynote() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Keynote Session
          </span>
          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            The Laws & Equations of Entrepreneurship
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/speakers/Ashish_Arora.webp"
              alt="Ashish Arora"
              className="h-80 w-full object-cover md:h-96"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              Ashish Arora
            </h3>
            <p className="text-sm font-mono text-zinc-500">
              Founder, Physics Galaxy &middot; 13th March 2026
            </p>
            <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
              Mr. Ashish Arora delivered a keynote titled &ldquo;The Laws and
              Equations of Entrepreneurship,&rdquo; focusing on innovation,
              perseverance, startup growth, problem-solving, and continuous
              learning  motivating participants through examples from
              his own journey to pursue innovation-driven, long-term
              entrepreneurial goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
