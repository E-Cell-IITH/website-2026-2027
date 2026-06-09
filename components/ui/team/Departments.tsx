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
  const [showSocials, setShowSocials] = useState(false);

  return (
    <div
      className="flex flex-col items-center gap-2 group cursor-default relative"
      onMouseEnter={() => setShowSocials(true)}
      onMouseLeave={() => setShowSocials(false)}
    >
      {/* Photo */}
      <div className="relative w-[72px] h-[72px] rounded-[3px] overflow-hidden bg-white/[0.04] border border-white/[0.06] group-hover:border-white/20 transition-colors duration-200">
        <MemberPhoto src={img} name={name} fill size={72} />

        {/* Socials overlay on hover */}
        {showSocials && (email || linkedin) && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-2">
            {email && (
              <a
                href={`mailto:${email}`}
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#e040a0] hover:border-[#e040a0] transition-all"
                title="Email"
              >
                <svg width="10" height="10" viewBox="0 0 20 20" fill="white">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all"
                title="LinkedIn"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Name */}
      <span className="text-[11px] font-medium text-white/55 text-center leading-snug max-w-[80px] group-hover:text-white/80 transition-colors duration-200">
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
          {/* Left — sticky label */}
          <div className="lg:w-[300px] xl:w-[340px] flex-shrink-0 px-6 md:px-12 lg:px-16 py-14 lg:border-r border-white/[0.06] lg:sticky lg:top-20 self-start">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-2">
              Department {String(i + 1).padStart(2, "0")}
            </p>
            <h3
              className="text-white font-bold tracking-tight leading-[1.1] mb-4"
              style={{
                fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {dept.name}
            </h3>
            <div className="w-10 h-px bg-white/20 mb-5" />
            <p className="text-[13px] font-light text-white/35 leading-[1.8]">
              {dept.desc}
            </p>
          </div>

          {/* Right — members */}
          <div className="flex-1 px-6 md:px-12 lg:px-14 py-14">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-8">
              Managers
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
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