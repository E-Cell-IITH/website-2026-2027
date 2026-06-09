"use client";
import { OC_HEAD, OC_VICE, Member } from "@/lib/team-data";
import MemberPhoto from "./MemberPhoto";

const MailIcon = () => (
  <svg width="11" height="11" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

const LIIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function OCCard({ person, label }: { person: Member; label: string }) {
  return (
    <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
      {/* Photo */}
      <div className="relative w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] flex-shrink-0 rounded-sm overflow-hidden bg-white/[0.04]">
        <MemberPhoto src={person.img} name={person.name} fill />
      </div>

      {/* Vertical divider */}
      <div className="hidden sm:block w-px self-stretch bg-white/[0.06]" />

      {/* Info */}
      <div className="min-w-0">
        <p className="text-[10px] tracking-[0.22em] uppercase text-white/30 mb-2">{label}</p>
        <h2
          className="text-white font-bold tracking-tight mb-1"
          style={{ fontSize: "clamp(1.6rem,3.5vw,2.6rem)", fontFamily: "'Playfair Display',serif" }}
        >
          {person.name}
        </h2>
        <p className="text-white/40 text-sm font-light mb-6">{person.role}</p>

        {/* ── Buttons always side by side ── */}
        <div className="flex flex-row gap-3">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-xs tracking-wide hover:text-white hover:border-white/25 transition-all whitespace-nowrap"
            >
              <MailIcon /> Email
            </a>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-white/50 text-xs tracking-wide hover:text-white hover:border-white/25 transition-all whitespace-nowrap"
            >
              <LIIcon /> LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-20 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <OCCard person={OC_HEAD} label="Overall Head" />
        {/* reduced pl so right column isn't too narrow */}
        <div className="lg:border-l lg:border-white/[0.06] lg:pl-16 min-w-0">
          <OCCard person={OC_VICE} label="Vice OC" />
        </div>
      </div>
    </section>
  );
}