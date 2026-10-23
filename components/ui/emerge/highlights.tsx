import Link from "next/link";
import { ArrowRight } from "lucide-react";

const highlights = [
  {
    title: "Startup Senate",
    tag: "Flagship School Event",
    description:
      "The flagship school-level event of E-Merge 2025, engaging more than 100 school students through startup simulations, boardroom-style debates, and business problem-solving activities designed to introduce entrepreneurship at an early stage.",
    image: "/emerge/img3.webp",
    link: "/events/startup-senate",
    linkLabel: "View 2026 Edition",
  },
  {
    title: "Boardroom Simulation",
    tag: "Top 10 Teams",
    description:
      "The top 10 teams from the preliminary round advanced to the Boardroom Simulation, a high-stakes challenge testing business strategy, entrepreneurial thinking, and presentation skills.",
    image: "/emerge/img4.webp",
    link: "/events/boardroom",
    linkLabel: "View 2026 Edition",
  },
  {
    title: "Founders' Forum",
    tag: "Next 10 Teams",
    description:
      "The following 10 teams advanced to the Founders' Forum, where they tackled real-world business scenarios and pitched commercially viable solutions under pressure.",
    image: "/Emerge 2.0.webp",
  },
];

export function EmergeHighlights() {
  return (
    <section className="relative w-full overflow-hidden bg-[#080808] py-16 text-white md:py-24">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Highlights
          </span>
          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            Inside The Conclave
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
              </div>

              <div className="p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-400">
                  {item.tag}
                </span>
                <h3 className="mt-2 mb-3 text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>

                {item.link && (
                  <Link
                    href={item.link}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-orange-400 transition-colors hover:text-orange-300"
                  >
                    {item.linkLabel ?? "Learn more"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}