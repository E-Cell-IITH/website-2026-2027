"use client";

import { motion } from "framer-motion";

interface TeamMemberCardProps {
  name: string;
  role?: string;
  size?: "large" | "medium" | "small";
  index?: number;
}

const GRADIENT_PALETTES = [
  "from-violet-600 to-indigo-600",
  "from-fuchsia-600 to-purple-600",
  "from-rose-600 to-pink-600",
  "from-cyan-600 to-blue-600",
  "from-emerald-600 to-teal-600",
  "from-orange-600 to-amber-600",
  "from-indigo-600 to-violet-600",
  "from-pink-600 to-rose-600",
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

function getGradient(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return GRADIENT_PALETTES[Math.abs(hash) % GRADIENT_PALETTES.length];
}

export function TeamMemberCard({
  name,
  role,
  size = "medium",
  index = 0,
}: TeamMemberCardProps) {
  const initials = getInitials(name);
  const gradient = getGradient(name);

  const avatarSize =
    size === "large"
      ? "w-28 h-28 md:w-36 md:h-36"
      : size === "small"
      ? "w-16 h-16 md:w-20 md:h-20"
      : "w-20 h-20 md:w-24 md:h-24";

  const textSize =
    size === "large"
      ? "text-3xl md:text-4xl"
      : size === "small"
      ? "text-lg"
      : "text-2xl";

  const nameSize =
    size === "large"
      ? "text-base md:text-lg"
      : size === "small"
      ? "text-xs md:text-sm"
      : "text-sm md:text-base";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="flex flex-col items-center gap-3 group"
    >
      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.07, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`relative ${avatarSize} rounded-2xl overflow-hidden`}
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90`}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: "150px",
          }}
        />
        {/* Initials */}
        <div
          className={`absolute inset-0 flex items-center justify-center font-bold text-white/90 tracking-tight ${textSize}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {initials}
        </div>
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>

      {/* Name & Role */}
      <div className="text-center">
        <p
          className={`font-semibold text-white leading-tight ${nameSize}`}
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {name}
        </p>
        {role && (
          <p
            className="text-xs text-zinc-400 mt-0.5 tracking-wide uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "10px" }}
          >
            {role}
          </p>
        )}
      </div>
    </motion.div>
  );
}