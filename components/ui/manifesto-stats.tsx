"use client";

import { useEffect, useRef, useState } from "react";

function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    let raf: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const pct = Math.min(progress / duration, 1);
      const eased = 1 - Math.pow(1 - pct, 3);
      setCount(Math.round(end * eased));
      if (pct < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, end, duration]);

  return { count, elementRef };
}

function StatCounter({ value, label }: { value: string; label: string }) {
  const m = value.match(/^([^0-9]*)(\d+(?:\.\d+)?)(.*)$/);
  const prefix = m?.[1] ?? "";
  const num = parseFloat(m?.[2] ?? "0");
  const suffix = m?.[3] ?? "";
  const { count, elementRef } = useCountUp(num);

  return (
    <div ref={elementRef} className="flex flex-col items-center gap-1">
      <span className="text-5xl font-display font-bold tracking-tight tabular-nums" style={{ color: "#4d6eff" }}>
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm uppercase tracking-widest font-eyebrow" style={{ color: "#7888cc" }}>
        {label}
      </span>
    </div>
  );
}

const STATS = [
  // { value: "12+", label: "Events Hosted" },
  // { value: "100+", label: "Active Members" },
  // { value: "14", label: "Years of Innovation" },
  { value: "500+", label: "Startups Supported" },
  { value: "₹12Cr+", label: "Funding Raised" },
  { value: "80+", label: "Mentors" },
  { value: "15", label: "Years of Innovation" },
];

const GALLERY = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=560&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&h=400&fit=crop&auto=format",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop&auto=format",
];

export function ManifestoStats() {
  return (
    <>
      {/* Stats  */}
      <section className="py-16 border-y" style={{ borderColor: "rgba(20,0,255,0.15)", background: "rgba(7,13,46,0.6)" }}>
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-4 gap-10">
          {STATS.map((s) => (
            <StatCounter key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      {/* About US */}
      <section id="about" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 relative rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(20,0,255,0.25)" }}>
              <img src={GALLERY[0]} alt="Students collaborating" className="w-full h-64 object-cover" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,6,26,0.7) 0%, transparent 60%)" }} />
              <div className="absolute bottom-4 left-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-eyebrow" style={{ background: "rgba(20,0,255,0.7)", color: "#c0caff" }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
                  Est. 2009 · IIT Hyderabad
                </div>
              </div>
            </div>
            {GALLERY.slice(1).map((src) => (
              <img
                key={src}
                src={src}
                alt="E-Cell activity"
                className="w-full h-40 object-cover rounded-2xl"
                style={{ border: "1px solid rgba(20,0,255,0.25)" }}
              />
            ))}
          </div>

          <div>
            <p className="text-xs font-eyebrow uppercase tracking-widest mb-4" style={{ color: "#1400ff" }}>// About Us</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Turning Campus Ideas into <span style={{ color: "#4d6eff" }}>Funded Ventures</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#7888cc" }}>
              Founded in 2009, E-Cell IIT Hyderabad has been at the forefront of the Indian startup ecosystem. 
              We connect ambitious students with a network of 80+ mentor-founders, organize South India's largest entrepreneurship summit, 
              and have helped over 500 startups raise capital and scale.
              </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#7888cc" }}>
              Whether you are building your first side project or leading a funded startup, 
              E-Cell provides the mentorship, community, and resources to push you further.
            </p>
            <a
              href="#events"
              className="group inline-flex items-center gap-2 text-sm font-semibold transition-colors"
              style={{ color: "#4d6eff" }}
            >
              See our events
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
