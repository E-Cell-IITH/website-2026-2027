"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function EventsSection() {
  const [hoveredPanelIdx, setHoveredPanelIdx] =
    useState<number>(0);

  const pastEvents = [
    {
      title: "Boardroom",
      date: "11th October 2026",
      image: "/startup-senate/img6.jpeg",
      link: "/events/boardroom",
    },
    {
      title: "Startup Senate",
      date: "10th–12th October 2026",
      image: "/startup-senate/img9.jpeg",
      link: "/events/startup-senate",
    },
    {
      title: "Founders’ Hive",
      date: "5th July 2025",
      image: "/founders_hive.webp",
      link: "#",
    },
    {
      title: "Emerge",
      date: "11th–12th October 2025",
      image: "/Emerge 2.0.webp",
      link: "#",
    },
    {
      title: "E-Summit",
      date: "13th–15th March 2026",
      image: "/Ashish_Arora.jpeg",
      link: "#",
    },
    {
      title: "Fetching Fortunes",
      date: "15th March 2026",
      image: "/FetchingFortunes.webp",
      link: "#",
    },
  ];

  return (
    <section
      id="events"
      className="relative w-full overflow-hidden bg-[#080808] py-24"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% {
                transform: translateX(0%);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
          `,
        }}
      />

      <div className="mb-24 flex w-full overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="px-4 font-mono text-sm uppercase tracking-[0.2em] text-zinc-600"
            >
              IDEATE · PITCH · BUILD · LAUNCH · NETWORK ·
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="font-sans text-5xl font-bold tracking-tight text-white md:text-7xl">
            Events & Programs
          </h2>
        </div>

        <div className="mb-24">
          <div className="flex h-[600px] w-full flex-col gap-2 md:flex-row">
            {pastEvents.map((event, idx) => (
              <motion.div
                key={`past-${idx}`}
                onMouseEnter={() =>
                  setHoveredPanelIdx(idx)
                }
                animate={{
                  flex:
                    hoveredPanelIdx === idx
                      ? 4
                      : 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 18,
                }}
                className="relative h-full cursor-pointer overflow-hidden bg-[#111111]"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

                {/* Collapsed title */}
                <motion.div
                  animate={{
                    opacity:
                      hoveredPanelIdx === idx
                        ? 0
                        : 1,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="pointer-events-none absolute inset-0 flex items-center justify-center"
                >
                  <span className="whitespace-nowrap text-xl font-bold uppercase tracking-widest text-white md:-rotate-90 md:text-2xl">
                    {event.title}
                  </span>
                </motion.div>

                {/* Expanded content */}
                <motion.div
                  animate={{
                    opacity:
                      hoveredPanelIdx === idx
                        ? 1
                        : 0,
                    y:
                      hoveredPanelIdx === idx
                        ? 0
                        : 20,
                  }}
                  transition={{
                    duration: 0.4,
                    delay:
                      hoveredPanelIdx === idx
                        ? 0.1
                        : 0,
                  }}
                  className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col justify-end p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span className="font-mono text-sm text-zinc-300">
                      {event.date}
                    </span>
                  </div>

                  <h3 className="whitespace-nowrap text-4xl font-bold tracking-tight text-white drop-shadow-md md:text-5xl">
                    {event.title}
                  </h3>

                  {/* View Event Info */}
                  <a
                    href={event.link}
                    className="pointer-events-auto mt-5 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:bg-white hover:text-black"
                  >
                    View Event Info
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}