"use client";

import { useState } from "react";
import { DEPARTMENTS } from "@/lib/team-data";
import MemberPhoto from "./MemberPhoto";

function MemberCard({
  name,
  img,
  email,
  linkedin,
}: {
  name: string;
  img: string;
  email?: string;
  linkedin?: string;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-2.5 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar with LinkedIn popping out top-right */}
      <div className="relative">
        <div
          className="relative w-[88px] h-[88px] rounded-[3px] overflow-hidden bg-white/[0.04] border transition-colors duration-200"
          style={{ borderColor: hovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.06)" }}
        >
          <MemberPhoto src={img} name={name} fill size={88} />
        </div>

        {/* LinkedIn icon pops out top-right */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#111] border border-white/20 flex items-center justify-center hover:bg-[#0a66c2] hover:border-[#0a66c2] shadow-lg"
            title="LinkedIn"
            style={{
              opacity: hovered ? 1 : 0,
              transform: hovered ? "scale(1) translateY(0)" : "scale(0.5) translateY(6px)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
              pointerEvents: hovered ? "auto" : "none",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        )}
      </div>

      {/* Name */}
      <span
        className="text-[13px] font-medium text-center leading-snug max-w-[96px] transition-colors duration-200"
        style={{ color: hovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.55)" }}
      >
        {name}
      </span>
    </div>
  );
}

export default function Departments() {
  return (
    <div className="border-t border-white/[0.06]">
      {DEPARTMENTS.map((dept, i) => (
        <section
          key={dept.name}
          className="flex flex-col lg:flex-row border-b border-white/[0.06]"
        >
          <div className="lg:w-[320px] xl:w-[380px] flex-shrink-0 px-6 md:px-12 lg:px-16 py-16 lg:border-r border-white/[0.06] lg:sticky lg:top-20 self-start">
            <p className="text-[12px] tracking-[0.2em] uppercase text-white/20 mb-3">
              Department {String(i + 1).padStart(2, "0")}
            </p>
            <h3
              className="text-white font-bold tracking-tight leading-[1.1] mb-5"
              style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", fontFamily: "'Playfair Display', serif" }}
            >
              {dept.name}
            </h3>
            <div className="w-10 h-px bg-white/20 mb-5" />
            <p className="text-[15px] font-light text-white/35 leading-[1.8]">
              {dept.desc}
            </p>
          </div>

          <div className="flex-1 px-6 md:px-12 lg:px-14 py-16">
            <p className="text-[12px] tracking-[0.2em] uppercase text-white/20 mb-10">
              Managers
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {dept.members.map((m) => (
                <MemberCard
                  key={m.name}
                  name={m.name}
                  img={m.img}
                  email={m.email}
                  linkedin={m.linkedin}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}