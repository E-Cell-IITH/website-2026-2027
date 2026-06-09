"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Spotlight Card (used for department cards) ───────────────────────────────
export function SpotlightCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { setIsFocused(true); setOpacity(1); }}
      onMouseLeave={() => { setIsFocused(false); setOpacity(0); }}
      className={cn("relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]", className)}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(139,92,246,0.12), transparent 60%)`,
        }}
      />
      {children}
    </div>
  );
}

// ─── Animated Tooltip (Aceternity-style) ─────────────────────────────────────
export function AnimatedTooltip({
  name,
  role,
  gradient,
  initials,
  size = "medium",
}: {
  name: string;
  role?: string;
  gradient: string;
  initials: string;
  size?: "large" | "medium" | "small";
}) {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-15, 15]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-30, 30]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const halfWidth = rect.width / 2;
    x.set(e.clientX - rect.left - halfWidth);
  };

  const avatarSize =
    size === "large" ? "w-28 h-28 md:w-36 md:h-36"
    : size === "small" ? "w-14 h-14 md:w-16 md:h-16"
    : "w-18 h-18 md:w-20 md:h-20";

  const fontSize =
    size === "large" ? "text-3xl"
    : size === "small" ? "text-base"
    : "text-xl";

  const nameSize =
    size === "large" ? "text-base"
    : size === "small" ? "text-xs"
    : "text-sm";

  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.9 }}
              style={{ translateX, rotate, whiteSpace: "nowrap" }}
              className="absolute -top-14 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
            >
              <div className="rounded-lg bg-zinc-900 border border-white/10 px-3 py-1.5 shadow-xl">
                <p className="text-xs font-semibold text-white">{name}</p>
                {role && <p className="text-[10px] text-zinc-400">{role}</p>}
              </div>
              <div className="w-2 h-2 bg-zinc-900 border-r border-b border-white/10 rotate-45 -mt-1" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          whileHover={{ scale: 1.1, y: -4 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={cn("relative rounded-2xl overflow-hidden cursor-pointer", avatarSize)}
        >
          <div className={cn("absolute inset-0 bg-gradient-to-br", gradient)} />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "140px",
            }}
          />
          <div className={cn("absolute inset-0 flex items-center justify-center font-black text-white/90", fontSize)}>
            {initials}
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.08] to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      </div>

      <p className={cn("font-semibold text-white text-center leading-tight", nameSize)}>
        {name}
      </p>
    </div>
  );
}

// ─── Moving Border Button (for leadership badges) ────────────────────────────
export function MovingBorderCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative p-[1px] rounded-2xl overflow-hidden", className)}>
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "linear-gradient(var(--border-angle, 0deg), #7c3aed, #ec4899, #f97316, #7c3aed)",
          animation: "spin-border 3s linear infinite",
        }}
      />
      <style>{`
        @keyframes spin-border {
          0% { --border-angle: 0deg; }
          100% { --border-angle: 360deg; }
        }
        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
      `}</style>
      <div className="relative bg-zinc-950 rounded-2xl">
        {children}
      </div>
    </div>
  );
}

// ─── Lamp Section Heading ─────────────────────────────────────────────────────
export function LampHeading({
  eyebrow,
  title,
  color = "#7c3aed",
}: {
  eyebrow: string;
  title: string;
  color?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative text-center mb-16"
    >
      {/* Lamp glow */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-8 w-64 h-32 blur-[60px] opacity-30 pointer-events-none"
        style={{ background: color }}
      />
      <span
        className="text-[10px] tracking-[0.35em] uppercase font-semibold"
        style={{ color, fontFamily: "'DM Sans', sans-serif" }}
      >
        {eyebrow}
      </span>
      <h2
        className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight relative"
        style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.025em" }}
      >
        {title}
      </h2>
      <div
        className="mt-4 mx-auto h-0.5 w-16 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
      />
    </motion.div>
  );
}