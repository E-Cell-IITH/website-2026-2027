export function ManifestoStats() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-20"
    >
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        {/* Part 1: Manifesto */}
        <div className="mb-16 flex flex-col items-center space-y-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About The Event
          </div>
          <h2 className="font-serif text-4xl italic tracking-tight text-white md:text-6xl">
            Step into the boardroom
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-400 md:text-lg">
            The Startup Senate puts you in the founder&apos;s seat for three
            days. Working with your committee as co-founders, you&apos;ll
            pitch an idea, manage a budget, shape a brand, and steer through
            a crisis, the same calls real founders make, condensed into one
            high-stakes simulation. Open to students of Classes 9 to 12, no
            prior experience required.
          </p>
        </div>

        {/* Part 2: Stats Strip
        <div className="grid grid-cols-3 gap-x-4 border-t border-zinc-800/60 pt-10 md:gap-8">
          <Stat end={12} suffix="+" label="Events" />
          <Stat end={100} suffix="+" label="Members" />
          <Stat end={14} suffix="" label="Years" />
        </div> */}
      </div>
    </section>
  );
}