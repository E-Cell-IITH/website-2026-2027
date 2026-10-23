"use client";

import { useState } from "react";
import { X } from "lucide-react";

const subEvents = [
  {
    title: "Startup Fair",
    date: "14th March 2026 · Old Mess Grounds",
    description:
      "Startups showcased their ideas, products, and innovations to the IIT Hyderabad community, investors, and VC representatives through live pitches and product showcases.",
    detail:
      "Featuring Techno Hub Laboratories, Pavakah Energy, LogiXair, LightspeakAI, Kalories, Green PMU Semi & Footryx Healthcare.",
    image: "/esummit/startup_fair1.webp",
    fullDescription:
      "The Startup Fair was conducted to provide startups and entrepreneurs with a platform to showcase their ideas, products, and innovations to the IIT Hyderabad community as well as investors and venture capital representatives. The event featured live startup pitches, networking opportunities, product showcases, and investor interactions designed to facilitate visibility, collaboration, and entrepreneurial engagement.",
    participants: [
      "Techno Hub Laboratories",
      "Pavakah Energy",
      "LogiXair",
      "LightspeakAI",
      "Kalories",
      "Green PMU Semi",
      "Footryx Healthcare",
    ],
    investors: [
      "Unicorn India Ventures",
      "Draper",
      "Melbourne Startup Accelerator",
    ],
    outcome:
      "The Startup Fair enabled startups to interact directly with investors, students, and industry professionals while creating networking and visibility opportunities for emerging ventures.",
  },
  {
    title: "Startup School",
    date: "14th–15th March 2026 · CHE Auditorium",
    description:
      "An educational and mentorship-oriented initiative covering ideation, MVP development, startup legalities, funding, customer discovery, and AI in entrepreneurship.",
    detail:
      "Led by Prakash Balasubramanian, Vikram Prabhakar, Kashyap Kompella, Sridhar Subramanian, Gurrapu Naveen & Kaushal Ottem.",
    image: "/esummit/startup_school.webp",
    fullDescription:
      "Startup School was conducted as an educational and mentorship-oriented initiative aimed at introducing participants to the fundamentals of building and scaling startups. The sessions covered key entrepreneurial topics including ideation, MVP development, startup legalities, funding, customer discovery, artificial intelligence, and entrepreneurship.",
    participants: [
      "Prakash Balasubramanian",
      "Vikram Prabhakar",
      "Kashyap Kompella",
      "Sridhar Subramanian",
      "Gurrapu Naveen",
      "Kaushal Ottem",
    ],
    outcome:
      "Startup School provided participants with practical exposure to entrepreneurial concepts and startup-building processes through expert-led sessions and interactive discussions.",
  },
  {
    title: "Fetching Fortunes x Ideabaaz",
    date: "15th March 2026",
    description:
      "A live startup pitching competition where ventures presented before an investor panel for expert evaluation, feedback, and funding opportunities with winners featured on Zee TV's Ideabaaz.",
    detail: "Investor feedback · Funding opportunities · TV visibility",
    image: "/esummit/Fetching_Fortunes1.webp",
    fullDescription:
      "Fetching Fortunes x Ideabaaz was conducted as a live startup pitching competition where startups presented their ideas before an investor panel. The competition allowed participating ventures to receive expert evaluation, investor feedback, and potential funding opportunities. Winning startups were also provided with an opportunity to feature on Zee TV's Ideabaaz platform, increasing visibility and outreach for their ventures.",
    outcome:
      "The event encouraged entrepreneurial pitching, business validation, and investor interaction while providing startups with valuable feedback and exposure opportunities.",
  },
  {
    title: "Startup Studio",
    date: "90-Day Cohort Program",
    description:
      "A startup incubation and mentorship cohort supporting 25 early stage startups, connecting them with 10+ mentors across technology, business, marketing, finance, and product.",
    detail:
      "Culminated in pitches at Fetching Fortunes before investors and industry professionals.",
    // image: "/founders_hive.webp",
    fullDescription:
      "Startup Studio was conducted as a startup incubation and mentorship cohort aimed at supporting early-stage startups and student-led ventures. The program brought together 25 emerging startups and connected them with 10+ mentors from diverse domains including technology, business, marketing, finance, operations, and product development. E-Cell IIT Hyderabad facilitated mentorship by connecting participating startups with relevant startup founders, entrepreneurs, and industry experts for guidance and strategic support. The cohort focused on areas including business validation, product development, go-to-market strategy, fundraising preparation, and investor readiness. At the conclusion of the cohort, startups were provided an opportunity to present their ventures at Fetching Fortunes before investors and industry professionals for feedback, networking, and potential funding opportunities.",
    outcome:
      "Startup Studio provided participating startups with structured mentorship, entrepreneurial guidance, investor exposure, and practical startup-building support, enabling ventures to strengthen their ideas and prepare for future growth opportunities.",
  },
];

export function ESummitSubEvents() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeEvent = activeIndex !== null ? subEvents[activeIndex] : null;

  return (
    <section className="relative w-full overflow-hidden bg-[#080808] py-16 text-white md:py-24">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Inside The Summit
          </span>
          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            Three Days, Four Flagships
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {subEvents.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/10 to-transparent" />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400">
                  {item.date}
                </span>
                <h3 className="mt-2 mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
                <p className="mt-3 text-xs italic leading-relaxed text-zinc-500">
                  {item.detail}
                </p>

                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 transition-colors hover:text-orange-300"
                >
                  View more
                  <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {activeEvent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-10 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-[#0d0d0d]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white/80 backdrop-blur-sm transition-colors hover:bg-white hover:text-black"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
            </div>

            <div className="space-y-5 p-6 md:p-8">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400">
                  {activeEvent.date}
                </span>
                <h3 className="mt-2 font-serif text-3xl italic tracking-tight text-white">
                  {activeEvent.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-zinc-300 md:text-base">
                {activeEvent.fullDescription}
              </p>

              {activeEvent.participants && (
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    {activeEvent.title === "Startup Fair"
                      ? "Participating Startups"
                      : "Speakers & Mentors"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeEvent.participants.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeEvent.investors && (
                <div>
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Investor & VC Participation
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeEvent.investors.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {activeEvent.outcome && (
                <div className="border-t border-white/10 pt-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Outcome
                  </p>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {activeEvent.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}