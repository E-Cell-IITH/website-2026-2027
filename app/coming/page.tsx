"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function ComingSoonPage() {
  const router = useRouter();

  return (
    <main className="relative min-h-screen w-full bg-[#080808] flex flex-col items-center justify-center px-6 overflow-hidden select-none">
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-white/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-zinc-900/40 rounded-full blur-[100px] pointer-events-none" />


      <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
        

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-500 text-xs font-mono uppercase tracking-[0.15em] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          Under Construction
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tight mb-4"
        >
          Coming Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-zinc-400 font-sans text-sm md:text-base max-w-md leading-relaxed mb-12"
        >
          We are currently crafting a fully immersive workspace layout for this flagship edition. Stay tuned for dates, speakers, and registrations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => router.push("/")}
            className="group flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-zinc-200 transition-all duration-200 text-sm shadow-xl shadow-white/5 cursor-pointer"
          >
            <span>Return Home</span>
            <span className="inline-block transform group-hover:-translate-x-1 transition-transform duration-200">←</span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 text-center text-[10px] font-mono tracking-[0.3em] text-zinc-600 uppercase">
        E-Cell IITH · 2026
      </div>
    </main>
  );
}