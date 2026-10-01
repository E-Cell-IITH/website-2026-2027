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

export function EmergeManifestoStats() {
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
            What was E-Merge 2025?
          </h2>
        </div>

        {/* About The Event Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="space-y-5 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold text-white">
                  Two-Day Conclave:
                </strong>{" "}
                E-Merge 2025 brought together school students, college
                students, entrepreneurs, and industry professionals through
                competitions, simulations, keynote sessions, and networking.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  Flagship Competitions:
                </strong>{" "}
                31 teams competed in the preliminary round, with the top 10
                advancing to the Boardroom Simulation and the next 10 to the
                Founders&rsquo; Forum.
              </p>

              <p>
                <strong className="font-semibold text-white">
                  Keynote Sessions:
                </strong>{" "}
                Industry leaders shared insights on innovation, scaling
                businesses, technology, and leadership.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="space-y-4 text-sm leading-relaxed text-zinc-300 md:text-base">
              <p>
                <strong className="font-semibold italic text-white">
                  A platform for the next generation of builders.
                </strong>
              </p>

              <p>
                Startup Senate served as the flagship school-level event,
                engaging more than 100 school students through startup
                simulations, boardroom-style debates, and business
                problem-solving activities.
              </p>

              <p>
                Through competitions, simulations, networking, and speaker
                sessions, E-Merge 2025 created an engaging platform for
                experiential learning and entrepreneurial exploration.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 border-t border-white/10 pt-10 md:grid-cols-4">
          <div className="md:border-r md:border-white/10">
            <Stat end={300} suffix="+" label="Footfall" />
          </div>
          <div className="md:border-r md:border-white/10">
            <Stat end={15} suffix="+" label="Colleges" />
          </div>
          <div className="border-t border-white/10 md:border-r md:border-t-0">
            <Stat end={31} label="Teams" />
          </div>
          <div className="border-t border-white/10 md:border-t-0">
            <Stat end={75} prefix="₹" suffix="K" label="Prize Pool" />
          </div>
        </div>
      </div>
    </section>
  );
}