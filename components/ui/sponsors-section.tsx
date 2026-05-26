"use client";

import { motion } from "framer-motion";

export function SponsorsSection() {
  const sponsors = [
    { name: "Amazon", size: "text-2xl md:text-5xl", top: "15%", left: "20%" },
    { name: "UnStop", size: "text-3xl md:text-6xl", top: "20%", left: "80%" },
    { name: "Uber", size: "text-xl md:text-4xl", top: "35%", left: "50%" },
    { name: "Henry Harvin", size: "text-lg md:text-3xl", top: "50%", left: "15%" },
    { name: "ExFinity", size: "text-2xl md:text-4xl", top: "55%", left: "85%" },
    { name: "YHills", size: "text-3xl md:text-5xl", top: "70%", left: "45%" },
    // { name: "KLEINER PERKINS", size: "text-lg md:text-2xl", top: "75%", left: "80%" },
    { name: "Stumagz", size: "text-xl md:text-4xl", top: "85%", left: "15%" },
    { name: "AglaSen", size: "text-xl md:text-4xl", top: "90%", left: "65%" },
  ];

  return (
    <section className="relative w-full bg-transparent overflow-hidden py-24 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">

        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm md:text-base font-semibold tracking-[0.4em] text-zinc-500 uppercase">
            Backed By
          </h2>
        </div>

        {/* Scattered Logos Canvas */}
        <div className="relative w-full min-h-[600px] md:min-h-[700px]">
          {sponsors.map((sponsor, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-max"
              style={{ top: sponsor.top, left: sponsor.left }}
            >
              <div
                className={`font-black tracking-tighter uppercase text-white opacity-30 hover:opacity-100 transition-opacity duration-300 cursor-default select-none ${sponsor.size}`}
              >
                {sponsor.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
