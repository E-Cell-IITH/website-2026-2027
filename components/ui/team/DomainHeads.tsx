"use client";

import { useState } from "react";
import { DOMAIN_HEADS } from "@/lib/team-data";
import MemberPhoto from "./MemberPhoto";

function DomainMemberRow({ member }: { member: { name: string; img: string; email?: string; linkedin?: string } }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex items-center gap-4 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Avatar with icons popping out top-right */}
      <div className="relative flex-shrink-0">
        <div className="relative w-33 h-33 rounded-[3px] overflow-hidden bg-white/[0.04]">
          <MemberPhoto src={member.img} name={member.name} fill size={96} />
        </div>

        {/* Icons appear top-right of avatar */}
        <div className="absolute -top-2 -right-2 flex flex-col gap-1">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="w-6 h-6 rounded-full bg-[#111] border border-white/20 flex items-center justify-center hover:bg-[#e040a0] hover:border-[#e040a0] transition-all duration-200 shadow-lg"
              title="Email"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "scale(1) translateY(0)" : "scale(0.5) translateY(6px)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                transitionDelay: hovered ? "0ms" : "0ms",
                pointerEvents: hovered ? "auto" : "none",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 20 20" fill="white">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 rounded-full bg-[#111] border border-white/20 flex items-center justify-center hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all duration-200 shadow-lg"
              title="LinkedIn"
              style={{
                opacity: hovered ? 1 : 0,
                transform: hovered ? "scale(1) translateY(0)" : "scale(0.5) translateY(6px)",
                transition: "opacity 0.2s ease, transform 0.2s ease",
                transitionDelay: hovered ? "60ms" : "0ms",
                pointerEvents: hovered ? "auto" : "none",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Name */}
      <div className="flex-1 min-w-0">
        <p
          className="text-[16px] font-medium leading-snug transition-colors duration-200"
          style={{ color: hovered ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.85)" }}
        >
          {member.name}
        </p>
      </div>
    </div>
  );
}

export default function DomainHeads() {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-20 max-w-[1400px] mx-auto">
      <p className="text-[13px] tracking-[0.25em] uppercase text-white/25 mb-4">
        Domain Heads
      </p>
      <h2
        className="text-white font-bold tracking-tight mb-14"
        style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontFamily: "'Playfair Display', serif" }}
      >
        The people
        <br />
        who lead.
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.06] rounded-sm overflow-visible">
        {DOMAIN_HEADS.map((domain) => (
          <div
            key={domain.label}
            className="p-8 border border-white/[0.06] bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-200"
          >
            <p className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#e040a0] mb-6 pb-4 border-b border-white/[0.06]">
              {domain.label}
            </p>
            <div className="flex flex-col gap-6">
              {domain.members.map((m) => (
                <DomainMemberRow key={m.name} member={m} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}