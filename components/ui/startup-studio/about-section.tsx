export function StartupStudioAbout() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-20"
    >
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About The Event
          </span>

          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            Event Details
          </h2>
        </div>

        <div className="space-y-5 text-sm leading-relaxed text-zinc-300 md:text-base">
          <p>
            Startup Studio was conducted as a{" "}
            <strong className="font-semibold text-white">
              startup incubation and mentorship cohort
            </strong>{" "}
            aimed at supporting early-stage startups and student-led
            ventures.
          </p>

          <p>
            The program brought together{" "}
            <strong className="font-semibold text-white">
              25 emerging startups
            </strong>{" "}
            and connected them with{" "}
            <strong className="font-semibold text-white">10+ mentors</strong>{" "}
            from diverse domains including technology, business, marketing,
            finance, operations, and product development.
          </p>

          <p>
            E-Cell IIT Hyderabad facilitated mentorship by connecting
            participating startups with relevant startup founders,
            entrepreneurs, and industry experts for guidance and strategic
            support.
          </p>

          <p>
            The cohort focused on areas including business validation,
            product development, go-to-market strategy, fundraising
            preparation, and investor readiness.
          </p>

          <p>
            At the conclusion of the cohort, startups were provided an
            opportunity to present their ventures at Fetching Fortunes before
            investors and industry professionals for feedback, networking,
            and potential funding opportunities.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 border-t border-white/10 pt-10 md:grid-cols-2">
          <div className="flex flex-col items-center px-6 py-4 text-center md:border-r md:border-white/10">
            <span className="font-serif text-5xl italic tracking-tight text-white md:text-6xl">
              25
            </span>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Emerging Startups
            </span>
          </div>

          <div className="flex flex-col items-center border-t border-white/10 px-6 py-4 text-center md:border-t-0">
            <span className="font-serif text-5xl italic tracking-tight text-white md:text-6xl">
              10+
            </span>

            <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Mentors
            </span>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <h3 className="mb-5 font-sans text-xl font-semibold uppercase tracking-wide text-white md:text-2xl">
            Outcome
          </h3>

          <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
            Startup Studio provided participating startups with structured
            mentorship, entrepreneurial guidance, investor exposure, and
            practical startup-building support, enabling ventures to
            strengthen their ideas and prepare for future growth
            opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}