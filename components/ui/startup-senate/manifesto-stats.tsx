export function ManifestoStats() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-20"
    >
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About The Event
          </span>

          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            Debate. Decide. Lead.
          </h2>
        </div>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="space-y-6">
            <div className="space-y-5 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold text-white">
                  How it works:
                </strong>{" "}
                Participants are split into committees, with every
                committee becoming an early-stage startup. Everyone
                in the room is a co-founder, responsible for building
                and defending the business.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  The rounds:
                </strong>{" "}
                Pitch your startup, manage a limited budget, build
                your brand, respond to crises, rethink your strategy,
                and finally decide how you will scale. Every round
                tests a different part of the founder&apos;s journey.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  Who should participate:
                </strong>{" "}
                Creative, curious, and leadership-driven students
                from Classes 9-12. No prior experience is required,
                just the willingness to make the call.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <div>
            <h3 className="mb-5 font-sans text-xl font-semibold uppercase tracking-wide text-white md:text-2xl">
              You&apos;ve got the idea. Now survive the boardroom.
            </h3>

            <div className="space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold italic text-white">
                  Startup Senate is E-Merge&apos;s flagship school
                  event.
                </strong>
              </p>

              <p>
                You won&apos;t sit through lectures about
                entrepreneurship. You&apos;ll live it, pitching an
                idea, managing a budget, shaping a brand, navigating
                unexpected crises, and making decisions under
                pressure with incomplete information.
              </p>

              <p>
                And just when you think you&apos;ve figured it out,
                the Chair can introduce surprise challenges:
                ethical dilemmas, team conflicts, investment offers,
                or sudden market threats. Think on your feet or get
                left behind.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                The Experience
              </span>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Build real founder instincts by debating the calls
                that make or break companies, MVP vs. full launch,
                bootstrap vs. VC, and when to pivot.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                The Finale
              </span>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Combine your sharpest strategies into one final
                startup blueprint, ready to pitch, launch, and
                scale.
              </p>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                What You Build
              </span>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                Teamwork, strategy, decision-making, and the
                confidence to communicate with conviction when the
                room is watching.
              </p>
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING LINE
        ===================================================== */}

        <div className="mt-14 text-center">
          <p className="font-serif text-xl italic text-white/80 md:text-2xl">
            The Senate is in session. Are you ready to lead?
          </p>
        </div>
      </div>
    </section>
  );
}