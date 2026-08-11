"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
        active || isHovered ? "text-white" : "text-[#7888cc]"
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
      title: "E-Summit",
      date: "OCT 18-20, 2025",
      image: "/Ashish_Arora.jpeg",
    },
    {
      title: "Emerge",
      date: "SEP 6, 2025",
      image: "/Emerge 2.0.webp",
    },
    {
      title: "Founders' Hive",
      date: "AUG 22, 2025",
      image: "/founders_hive.webp",
    },
    {
      title: "Startup Studio",
      date: "AUG 1 - SEP 14, 2025",
      image: "/StartUpFair.webp",
    },
  ];

  const router = useRouter();

  const programs = [
    { name: "E-Summit", action: () => router.push("/coming"), active: false },
    { name: "Emerge", action: () => router.push("/coming"), active: false },
    { name: "Founders' Hive", action: () => router.push("/foundersHive"), active: false,},
    { name: "Startup Studio",action: () => router.push("/coming"),active: false,},
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
        <div className="mb-4 md:mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold text-white tracking-tight">
            Events & Programs
          </h2>

          <div className="w-full lg:w-auto">
            <h3 className="font-eyebrow text-left lg:text-center font-bold text-[#7888cc] text-xs tracking-wider uppercase mb-2">
              Click to get more info:
            </h3>

            {/* Optimized grid container for smooth stacking */}
            {/* Updated switcher wrapper with custom dynamic slider cursor */}
            <div
              onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
              className="relative grid grid-cols-2 sm:flex sm:flex-wrap gap-2 p-1.5 rounded-2xl backdrop-blur-md w-full sm:w-fit max-w-full"
              style={{ background: "rgba(7,13,46,0.6)", border: "1px solid rgba(20,0,255,0.2)" }}
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
                className="absolute bottom-1.5 top-1.5 z-0 rounded-xl brand-gradient brand-glow"
                style={{
                  left: position.left,
                  width: position.width,
                  opacity: position.opacity,
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
                className="relative h-full overflow-hidden cursor-pointer bg-[#0a0e2e]"
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
                  className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end pointer-events-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-eyebrow text-sm text-[#c0caff]">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight drop-shadow-md whitespace-nowrap">
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
