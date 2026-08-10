"use client";

import { useState } from "react";

const EVENTS = [
  {
    id: "e-summit",
    title: "E-Summit",
    date: "OCT 18-20, 2025",
    location: "IIT Hyderabad",
    img: "/Ashish_Arora.jpeg",
  },
  {
    id: "e-merge",
    title: "E-Merge",
    date: "SEP 6, 2025",
    location: "IIT Hyderabad",
    img: "/Emerge 2.0.webp",
  },
  {
    id: "founders-hive",
    title: "Founders Hive",
    date: "AUG 22, 2025",
    location: "Innovation Hub, IIT Hyderabad",
    img: "/founders_hive.webp",
  },
  {
    id: "startup-studio",
    title: "Startup Stduio",
    date: "AUG 1 - SEP 14, 2025",
    location: "IIT Hyderabad",
    img: "/StartUpFair.webp",
  },
];

export function EventsSection() {
  const [activePanel, setActivePanel] = useState(0);
  const COLLAPSED_W = 76;
  const GAP = 5;
  const panelWidth = (i: number) =>
    i === activePanel
      ? `calc(100% - ${(EVENTS.length - 1) * (COLLAPSED_W + GAP)}px)`
      : `${COLLAPSED_W}px`;

  return (
    <section id="events" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl font-display font-bold">Events &amp; Programs</h2>
      </div>

      {/* Desktop  */}
      <div className="hidden md:flex rounded-2xl overflow-hidden" style={{ height: "520px", gap: `${GAP}px` }}>
        {EVENTS.map((ev, i) => {
          const isActive = i === activePanel;
          return (
            <div
              key={ev.id}
              onMouseEnter={() => setActivePanel(i)}
              className="relative overflow-hidden cursor-pointer flex-shrink-0"
              style={{ width: panelWidth(i), transition: "width 0.6s cubic-bezier(0.4, 0, 0.2, 1)", borderRadius: "10px" }}
            >
              <img src={ev.img} alt={ev.title} className="absolute inset-0 w-full h-full object-cover" />
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.15) 55%)"
                    : "rgba(0,0,0,0.62)",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: isActive ? 0 : 1 }}>
                <span
                  className="font-display uppercase"
                  style={{ transform: "rotate(-90deg)", whiteSpace: "nowrap", color: "rgba(255,255,255,0.85)", fontWeight: 600, fontSize: "13px", letterSpacing: "0.12em" }}
                >
                  {ev.title}
                </span>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-8 transition-opacity duration-300"
                style={{ opacity: isActive ? 1 : 0, transitionDelay: isActive ? "0.15s" : "0s" }}
              >
                <div className="text-xs uppercase tracking-widest mb-2 font-eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {ev.date} · {ev.location}
                </div>
                <h3 className="text-4xl font-display font-bold text-white mb-5">{ev.title}</h3>
                <a
                  href=""
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105"
                  style={{ background: "rgba(20,0,255,0.85)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  View Event →
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical cards */}
      <div className="md:hidden flex flex-col gap-4">
        {EVENTS.map((ev) => (
          <a key={ev.id} href="#contact" className="relative rounded-2xl overflow-hidden block" style={{ height: "220px" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="text-[10px] uppercase tracking-widest mb-1 font-eyebrow" style={{ color: "rgba(255,255,255,0.45)" }}>
                {ev.date}
              </div>
              <h3 className="text-2xl font-display font-bold text-white">{ev.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
