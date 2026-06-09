"use client";

import { DOMAIN_HEADS } from "@/lib/team-data";
import MemberPhoto from "./MemberPhoto";

export default function DomainHeads() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 max-w-[1400px] mx-auto">
      {/* Heading */}
      <p className="text-[10px] tracking-[0.25em] uppercase text-white/25 mb-3">
        Domain Heads
      </p>
      <h2
        className="text-white font-bold tracking-tight mb-12"
        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontFamily: "'Playfair Display', serif" }}
      >
        The people
        <br />
        who lead.
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/[0.06] rounded-sm overflow-hidden">
        {DOMAIN_HEADS.map((domain) => (
          <div
            key={domain.label}
            className="p-8 border border-white/[0.06] bg-[#0d0d0d] hover:bg-[#111] transition-colors duration-200"
          >
            {/* Domain label */}
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#e040a0] mb-5 pb-4 border-b border-white/[0.06]">
              {domain.label}
            </p>

            {/* Members */}
            <div className="flex flex-col gap-4">
              {domain.members.map((m) => (
                <div key={m.name} className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="relative w-12 h-12 flex-shrink-0 rounded-[3px] overflow-hidden bg-white/[0.04]">
                    <MemberPhoto src={m.img} name={m.name} fill size={48} />
                  </div>

                  {/* Info */}
                  <div>
                    <p className="text-sm font-medium text-white/85 leading-snug">{m.name}</p>
                    <div className="flex gap-1.5 mt-1.5">
                      {m.email && (
                        <a
                          href={`mailto:${m.email}`}
                          className="w-[22px] h-[22px] rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-[#e040a0] hover:border-[#e040a0] transition-all"
                          title="Email"
                        >
                          <svg width="9" height="9" viewBox="0 0 20 20" fill="white">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </a>
                      )}
                      {m.linkedin && (
                        <a
                          href={m.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-[22px] h-[22px] rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center hover:bg-[#0a66c2] hover:border-[#0a66c2] transition-all"
                          title="LinkedIn"
                        >
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="white">
                            <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}