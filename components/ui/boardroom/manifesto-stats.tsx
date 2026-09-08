export function BoardroomManifestoStats() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-20"
    >
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        {/* About The Event Heading */}
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About The Event
          </span>

          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            What makes it special?
          </h2>
        </div>

        {/* About The Event Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-5 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold text-white">
                  Real-World Challenge:
                </strong>{" "}
                Solve a live business problem sourced directly from a startup.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  Executive Roles:
                </strong>{" "}
                Operate as a CEO, CFO, CMO, or COO and make decisions that
                shape the business.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  Expert Evaluation:
                </strong>{" "}
                Present your strategy to an experienced startup leadership
                panel.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="mb-5 font-sans text-xl font-semibold uppercase tracking-wide text-white md:text-2xl">
              Simulate. Strategize. Solve.
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold italic text-white">
                  Step into the boardroom. Think like a founder.
                </strong>
              </p>

              <p>
                The Boardroom is a high-stakes startup simulation designed to
                test strategic thinking, business judgment, and leadership.
              </p>

              <p>
                Teams take on executive roles, analyse a real business
                challenge, and develop a commercially viable solution under
                pressure.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-1 border-t border-white/10 pt-10 md:grid-cols-3">
          {/* Footfall */}
          <div className="flex flex-col items-center px-6 py-4 text-center md:border-r md:border-white/10">
            <span className="font-serif text-5xl italic tracking-tight text-white md:text-6xl">
              200+
            </span>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Footfall
            </span>
          </div>

          {/* Colleges */}
          <div className="flex flex-col items-center border-t border-white/10 px-6 py-4 text-center md:border-t-0 md:border-r">
            <span className="font-serif text-5xl italic tracking-tight text-white md:text-6xl">
              15+
            </span>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Colleges
            </span>
          </div>

          {/* Prize Pool */}
          <div className="flex flex-col items-center border-t border-white/10 px-6 py-4 text-center md:border-t-0">
            <span className="font-serif text-5xl italic tracking-tight text-white md:text-6xl">
              ₹2L
            </span>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Prize Pool
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}