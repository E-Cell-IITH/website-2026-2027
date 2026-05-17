"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

function ScrambleTitle({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsScrambling(true);
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
      let iterations = 0;
      const interval = setInterval(() => {
        setDisplayText((oldText) =>
          oldText.split("").map((char, index) => {
            if (index < iterations) return text[index];
            if (char === " ") return " ";
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        iterations += 1 / 3;
        if (iterations >= text.length) {
          clearInterval(interval);
          setIsScrambling(false);
          setDisplayText(text);
        }
      }, 40);
    }
  }, [isInView, text]);

  return (
    <h2
      ref={ref}
      className={`text-5xl md:text-7xl tracking-tight transition-all duration-300 ${
        isScrambling ? "font-mono font-medium text-white/80" : "font-sans font-bold text-white"
      }`}
    >
      {displayText}
    </h2>
  );
}

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

export function EventsSection() {
  const [hoveredPanelIdx, setHoveredPanelIdx] = useState<number>(0);

  const pastEvents = [
    { title: "Web3 Sandbox", date: "Jan 10, 2026", type: "Hackathon", imageId: "42" },
    { title: "Design for Devs", date: "Feb 05, 2026", type: "Workshop", imageId: "65" },
    { title: "Angel Mixer", date: "Mar 20, 2026", type: "Talk", imageId: "123" },
    { title: "Founder's Retreat", date: "Apr 15, 2026", type: "Workshop", imageId: "24" },
    { title: "Demo Day", date: "May 25, 2026", type: "Pitch", imageId: "78" }
  ];

  return (
    <section className="relative w-full bg-[#080808] overflow-hidden py-24">
      {/* Required CSS for marquee */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}} />

      {/* Looping Marquee */}
      <div className="w-full flex overflow-hidden border-y border-white/5 bg-[#0a0a0a] py-4 mb-24">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="text-sm font-mono tracking-[0.2em] text-zinc-600 px-4 uppercase">
              IDEATE · PITCH · BUILD · LAUNCH · NETWORK ·
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="mb-16">
          <ScrambleTitle text="Events & Programs" />
        </div>

        {/* Hover Expand Panels */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row w-full h-[600px] gap-2">
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
                  src={`https://picsum.photos/seed/${event.imageId}/1200/800`} 
                  alt={event.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
                
                {/* Collapsed State Title */}
                <motion.div 
                  animate={{ opacity: hoveredPanelIdx === idx ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  <span className="text-white font-bold text-xl md:text-2xl tracking-widest uppercase -rotate-90 whitespace-nowrap">
                    {event.title}
                  </span>
                </motion.div>

                {/* Expanded State Content */}
                <motion.div 
                  animate={{ 
                    opacity: hoveredPanelIdx === idx ? 1 : 0, 
                    y: hoveredPanelIdx === idx ? 0 : 20 
                  }}
                  transition={{ duration: 0.4, delay: hoveredPanelIdx === idx ? 0.1 : 0 }}
                  className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end pointer-events-none"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-zinc-300">{event.date}</span>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${getTagColor(event.type)} uppercase tracking-wider`}>
                      {event.type}
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
