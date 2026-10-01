"use client";

import { useCountUp } from "@/hooks/use-count-up";

interface StatProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

function Stat({ end, prefix = "", suffix = "", label }: StatProps) {
  const { count, elementRef } = useCountUp(end, 2000);

  return (
    <div
      ref={elementRef}
      className="flex flex-col items-center px-6 py-4 text-center"
    >
      <span className="font-serif text-5xl italic tracking-tight text-white md:text-6xl">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
        {label}
      </span>
    </div>
  );
}

export function ESummitManifestoStats() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-20"
    >
      <div className="container mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            About The Summit
          </span>

          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            What was E-Summit 2026?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-6">
            <div className="space-y-5 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold text-white">
                  The Flagship Summit:
                </strong>{" "}
                E-Summit 2026 was the flagship entrepreneurship summit
                organized by E-Cell, IIT Hyderabad, bringing together
                startups, students, investors, entrepreneurs, mentors, and
                industry leaders.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  A Series of Initiatives:
                </strong>{" "}
                Competitions, startup showcases, workshops, networking
                events, and keynote sessions ran across three days at IIT
                Hyderabad.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  Investor Access:
                </strong>{" "}
                Startups pitched directly to VC representatives from
                Unicorn India Ventures, Draper, and Melbourne Startup
                Accelerator.
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold italic text-white">
                  Connecting students, founders, and investors.
                </strong>
              </p>

              <p>
                E-Summit 2026 fostered innovation, networking, collaboration,
                startup learning, and entrepreneurial exposure within and
                beyond the IIT Hyderabad ecosystem.
              </p>

              <p>
                Through competitions, showcases, mentorship sessions, and
                speaker interactions, the summit strengthened E-Cell IIT
                Hyderabad&rsquo;s role in promoting entrepreneurship among
                students and young innovators.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-white/10 pt-10 md:grid-cols-4">
          <div className="md:border-r md:border-white/10">
            <Stat end={7} suffix="+" label="Startups Showcased" />
          </div>
          <div className="md:border-r md:border-white/10">
            <Stat end={25} label="Studio Startups" />
          </div>
          <div className="border-t border-white/10 md:border-r md:border-t-0">
            <Stat end={10} suffix="+" label="Mentors" />
          </div>
          <div className="border-t border-white/10 md:border-t-0">
            <Stat end={3} label="Days" />
          </div>
        </div>
      </div>
    </section>
  );
}