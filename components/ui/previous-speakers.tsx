"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SPEAKERS = [
  {
    name: "Upasana Kamineni",
    role: "VC of the Apollo Foundation, Founder and MD of URLife",
    img: "/speakers/Upasana.jpg",
  },
  {
    name: "Anup Gupta",
    role: "Founder and CEO of MathonGo",
    img: "/speakers/Anup Gupta.webp",
  },
  {
    name: "Ashish Arora",
    role: "Founder and Chief Mentor of Physics Galaxy",
    img: "/speakers/Ashish_Arora.webp",
  },
  {
    name: "Akhil Gupta",
    role: "Founder, No Broker",
    img: "/speakers/Akhil Gupta, Founder, Nobroker.webp",
  },
  {
    name: "Devvrat Arya",
    role: "VP of Technology, Pepperfry",
    img: "/speakers/Devvrat Arya - VP of Technology, Pepperfry.webp",
  },
  {
    name: "TN Hari",
    role: "HR Head, Big Basket",
    img: "/speakers/TN Hari - HR Head, BigBasket.webp",
  },
  {
    name: "Shashank Randev",
    role: "Founder VC, 100X.VC",
    img: "/speakers/Shashank Randev - Founder VC, 100X.VC.jpg",
  },
];

function SpeakersCarousel() {
  const [active, setActive] = useState(0);
  const n = SPEAKERS.length;

  const prev = () => setActive((i) => (i - 1 + n) % n);
  const next = () => setActive((i) => (i + 1) % n);

  const getProps = (idx: number) => {
    let dist = idx - active;
    if (dist > n / 2) dist -= n;
    if (dist < -n / 2) dist += n;
    const abs = Math.abs(dist);
    return {
      visible: abs <= 2,
      scale: dist === 0 ? 1 : abs === 1 ? 0.83 : 0.68,
      opacity: dist === 0 ? 1 : abs === 1 ? 0.65 : 0.35,
      translateX: dist * 215,
      zIndex: 20 - abs * 4,
    };
  };

  return (
    <div>
      <div className="relative overflow-hidden" style={{ height: "340px" }}>
        <div className="absolute inset-0 flex items-center justify-center">
          {SPEAKERS.map((s, i) => {
            const { visible, scale, opacity, translateX, zIndex } = getProps(i);
            if (!visible) return null;
            return (
              <div
                key={s.name + i}
                className="absolute cursor-pointer"
                style={{
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  opacity,
                  zIndex,
                  transition: "all 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onClick={() => setActive(i)}
              >
                <div
                  style={{
                    width: "172px",
                    borderRadius: "14px",
                    overflow: "hidden",
                    background: "#0d0d18",
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow: i === active ? "0 0 40px rgba(20,0,255,0.3)" : "none",
                  }}
                >
                  <img
                    src={s.img}
                    alt={s.name}
                    className="w-full object-cover"
                    style={{ height: "210px" }}
                  />
                  <div className="p-3 text-center">
                    <div className="font-display font-bold text-white leading-tight" style={{ fontSize: "0.95rem" }}>
                      {s.name}
                    </div>
                    <div className="text-[11px] mt-0.5 leading-snug" style={{ color: "#7888cc" }}>
                      {s.role}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{
            background: "rgba(20,0,255,0.25)",
            border: "1px solid rgba(20,0,255,0.5)",
            color: "white",
          }}
          aria-label="Previous speaker"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          style={{
            background: "rgba(20,0,255,0.25)",
            border: "1px solid rgba(20,0,255,0.5)",
            color: "white",
          }}
          aria-label="Next speaker"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {SPEAKERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Speaker ${i + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === active ? "24px" : "8px",
              height: "8px",
              background: i === active ? "#1400ff" : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function PreviousSpeakers() {
  return (
    <section id="speakers" className="py-20" style={{ background: "rgba(5,8,28,0.95)" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-eyebrow uppercase tracking-widest mb-3" style={{ color: "#7888cc" }}>
            Past Edition
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-bold">Previous Speakers</h2>
        </div>
        <SpeakersCarousel />
      </div>
    </section>
  );
}
