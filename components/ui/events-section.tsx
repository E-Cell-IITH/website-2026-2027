"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

export function EventsSection() {
  const [hoveredPanelIdx, setHoveredPanelIdx] = useState<number>(0);
  const router = useRouter();

  const pastEvents = [
    {
      title: "E-Summit",
      date: "OCT 18-20, 2025",
      image: "/Ashish_Arora.jpeg",
      action: () => router.push("/coming"),
    },
    {
      title: "Emerge",
      date: "SEP 6, 2025",
      image: "/Emerge 2.0.webp",
      action: () => router.push("/coming"),
    },
    {
      title: "Founders' Hive",
      date: "AUG 22, 2025",
      image: "/founders_hive.webp",
      action: () => router.push("/foundersHive"),
    },
    {
      title: "Startup Studio",
      date: "AUG 1 - SEP 14, 2025",
      image: "/StartUpFair.webp",
      action: () => router.push("/startup-studio"),
    },
  ];

  return (
    <section
      id="events"
      className="relative w-full overflow-hidden py-24"
      style={{ background: "rgba(5,8,28,0.95)" }}
    >
      {/* Required CSS for marquee */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `,
        }}
      />

      {/* Looping Marquee */}
      <div
        className="w-full flex overflow-hidden border-y py-4 mb-24"
        style={{ borderColor: "rgba(20,0,255,0.15)", background: "rgba(3,6,26,0.6)" }}
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-eyebrow text-sm tracking-[0.2em] text-[#5a6aa8] px-4 uppercase"
            >
              IDEATE · PITCH · BUILD · LAUNCH · NETWORK ·
            </span>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        {/* RESTRUCTURED HEADER BLOCK */}
        <div className="mb-4 md:mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
            Events & Programs
          </h2>
        </div>
        {/* Hover Expand Panels */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row w-full h-150 gap-2">
            {pastEvents.map((event, idx) => (
              <motion.div
                key={`past-${idx}`}
                onMouseEnter={() => setHoveredPanelIdx(idx)}
                animate={{ flex: hoveredPanelIdx === idx ? 4 : 1 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="relative h-full overflow-hidden cursor-pointer bg-[#0a0e2e] rounded-2xl"
              >
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#03061a] via-[#03061a]/50 to-transparent" />

                {/* Collapsed State Title */}
                <motion.div
                  animate={{ opacity: hoveredPanelIdx === idx ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="font-display text-white font-bold text-xl md:text-2xl tracking-widest uppercase rotate-0 md:-rotate-90 whitespace-nowrap">
                    {event.title}
                  </span>
                </motion.div>

                {/* Expanded State Content */}
                <motion.div
                  animate={{
                    opacity: hoveredPanelIdx === idx ? 1 : 0,
                    y: hoveredPanelIdx === idx ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: hoveredPanelIdx === idx ? 0.1 : 0,
                  }}
                  className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end"
                >
                  <div className="flex items-center gap-3 mb-4 pointer-events-none">
                    <span className="font-eyebrow text-sm text-[#c0caff]">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md whitespace-nowrap mb-4 pointer-events-none">
                    {event.title}
                  </h3>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      event.action();
                    }}
                    className="w-fit flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-xl brand-gradient brand-glow hover:opacity-90 transition-opacity duration-200 pointer-events-auto"
                  >
                    View Event
                    <ArrowRightIcon className="h-4 w-4" />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
