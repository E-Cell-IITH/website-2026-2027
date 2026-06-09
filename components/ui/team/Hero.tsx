"use client";

import { useEffect, useRef } from "react";
import TeamWave from "@/components/ui/team/TeamWave";

const STATS = [
  { num: "50+", label: "Members" },
  { num: "7", label: "Departments" },
  { num: "12+", label: "Events" },
  { num: "14", label: "Years" },
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  // Subtle parallax on the ghost year text
  useEffect(() => {
    const ghost = document.getElementById("hero-ghost");
    const onScroll = () => {
      if (ghost) ghost.style.transform = `translateX(-50%) translateY(${window.scrollY * 0.12}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">

      {/* Wave background */}
      <TeamWave />

      {/* Announcement ticker */}
      <div className="absolute top-0 left-0 right-0 h-9 bg-black/80 border-b border-[#e0506020] flex items-center overflow-hidden z-50">
        <div
          className="flex gap-20 whitespace-nowrap text-[11px] text-white/30 tracking-widest"
          style={{ animation: "ticker 40s linear infinite" }}
        >
          {[0, 1].map((i) => (
            <span key={i}>
              ⚠ E-Cell IIT Hyderabad does not engage with any external companies
              or individuals for internships or placements. All official
              partnerships are listed on our website. For verification, please
              contact an official team member directly.
            </span>
          ))}
        </div>
      </div>

      {/* Ghost year */}
      <span
        id="hero-ghost"
        className="absolute bottom-[-0.05em] left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-black text-white/[0.025] z-0"
        style={{ fontSize: "clamp(120px, 22vw, 280px)", fontFamily: "'Playfair Display', serif" }}
        aria-hidden
      >
        2026
      </span>

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <p className="text-[10px] font-medium tracking-[0.25em] uppercase text-white/30 mb-6">
          IIT Hyderabad · 2026–27
        </p>

        <h1
          ref={titleRef}
          className="leading-[0.9] tracking-tight mb-3"
          style={{ fontSize: "clamp(3rem, 9vw, 8rem)", fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          <span className="text-white">Where </span>
          <span
            className="italic"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #e040a0",
            }}
          >
            founders
          </span>
        </h1>

        <p
          className="tracking-tight text-white/15 mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
        >
          come together.
        </p>

        <p className="text-[11px] tracking-[0.3em] uppercase text-white/25 mb-14">
          Think &nbsp;·&nbsp; Build &nbsp;·&nbsp; Inspire
        </p>

        {/* Stats */}
        <div className="flex gap-12 sm:gap-16 flex-wrap justify-center">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-white font-bold leading-none mb-1"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </div>
              <div className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/30">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}