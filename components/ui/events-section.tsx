"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
/*
function getTagColor(type: string) {
  switch (type.toLowerCase()) {
    case "hackathon":
      return "text-orange-400 bg-orange-400/10 border-orange-400/20";
    case "talk":
      return "text-blue-400 bg-blue-400/10 border-blue-400/20";
    case "workshop":
      return "text-purple-400 bg-purple-400/10 border-purple-400/20";
    default:
      return "text-zinc-400 bg-zinc-400/10 border-zinc-400/20";
  }
}
*/
const Tab = ({
  children,
  setPosition,
  onClick,
  active,
}: {
  children: React.ReactNode;
  setPosition: any;
  onClick: () => void;
  active: boolean;
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        setIsHovered(true);
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative z-10 px-4 py-2.5 rounded-xl text-xs md:text-sm font-medium tracking-wide transition-colors duration-200 text-center whitespace-nowrap select-none flex flex-col items-center justify-center ${
        active || isHovered ? "text-black" : "text-zinc-400"
      }`}
    >
      <span className={active || isHovered ? "font-semibold" : "font-medium"}>
        {children}
      </span>

      <span
        className="invisible block h-0 select-none overflow-hidden font-semibold"
        aria-hidden="true"
      >
        {children}
      </span>
    </button>
  );
};
export function EventsSection() {
  const [hoveredPanelIdx, setHoveredPanelIdx] = useState<number>(0);
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const pastEvents = [
    {
      title: "Founders’ Hive",
      date: "5th July 2025",
      image: "/founders_hive.webp",
    },
    {
      title: "Emerge",
      date: "11th-12th October 2025",
      image: "/Emerge 2.0.webp",
    },
    {
      title: "E-Summit",
      date: "13th–15th March 2026",
      image: "/Ashish_Arora.jpeg",
    },
    {
      title: "Fetching Fortunes",
      date: "15th March 2026",
      image: "/FetchingFortunes.webp",
    },
  ];
  const router = useRouter();

  const programs = [
    {
      name: "Founders' Hive",
      action: () => router.push("/foundersHive"),
      active: false,
    },
    { name: "E-Summit", action: () => router.push("/coming"), active: false },
    { name: "Emerge", action: () => router.push("/coming"), active: false },
    {
      name: "Startup Studio",
      action: () => router.push("/coming"),
      active: false,
    },
  ];
  return (
    <section
      id="events"
      className="relative w-full bg-[#080808] overflow-hidden py-24"
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
      <div className="w-full flex overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-4 mb-24">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-sm font-mono tracking-[0.2em] text-zinc-600 px-4 uppercase"
            >
              IDEATE · PITCH · BUILD · LAUNCH · NETWORK ·
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        {/* RESTRUCTURED HEADER BLOCK */}
        <div className="mb-4 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tight">
            Events & Programs
          </h2>

          <div className="w-full lg:w-auto">
            <h3 className="text-left lg:text-center font-sans font-bold text-zinc-500 text-xs tracking-wider uppercase mb-2">
              Click to get more info:
            </h3>

            {/* Optimized grid container for smooth stacking */}
            {/* Updated switcher wrapper with custom dynamic slider cursor */}
            <div
              onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
              className="relative grid grid-cols-2 sm:flex sm:flex-wrap gap-2 bg-zinc-900/60 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md w-full sm:w-fit max-w-full"
            >
              {programs.map((prog) => (
                <Tab
                  key={prog.name}
                  onClick={prog.action}
                  setPosition={setPosition}
                  active={prog.active}
                >
                  {prog.name}
                </Tab>
              ))}

              {/* Smooth slider cursor backdrop engine */}
              <motion.div
                animate={position}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                className="absolute bottom-1.5 top-1.5 z-0 rounded-xl bg-white shadow-lg shadow-white/5"
                style={{
                  left: position.left,
                  width: position.width,
                  opacity: position.opacity, // Added here to make sure it hides cleanly
                }}
              />
            </div>
          </div>
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
                className="relative h-full overflow-hidden cursor-pointer bg-[#111111]"
              >
                {/* Background Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#080808] via-[#080808]/40 to-transparent" />

                {/* Collapsed State Title */}
                <motion.div
                  animate={{ opacity: hoveredPanelIdx === idx ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="text-white font-bold text-xl md:text-2xl tracking-widest uppercase rotate-0 md:-rotate-90 whitespace-nowrap">
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
                  className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end pointer-events-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-zinc-300">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md whitespace-nowrap">
                    {event.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
