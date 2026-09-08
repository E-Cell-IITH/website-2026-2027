import React from "react";

const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/ecell_iith/",
  youtube: "https://www.youtube.com/c/ecelliith/videos",
  linkedin: "https://in.linkedin.com/company/ecell-iith",
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080808] text-white">
      <div className="h-px w-full bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-6">
            <h2 className="max-w-xl font-serif text-3xl italic tracking-tight text-white md:text-4xl">
              Ideas. Innovation.
              <br />
              Impact.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              Entrepreneurship Cell, IIT Hyderabad — fostering
              innovation, building entrepreneurs, and creating
              opportunities for the next generation of founders.
            </p>

            {/* Socials */}
            <div className="mt-9 flex items-center gap-3">
              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Cell IIT Hyderabad on Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-white/50 hover:bg-white hover:text-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Cell IIT Hyderabad on YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-white/50 hover:bg-white hover:text-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Cell IIT Hyderabad on LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-zinc-400 transition-all duration-200 hover:border-white/50 hover:bg-white hover:text-black"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                >
                  <path d="M6.5 8.2H3V21h3.5V8.2ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.65c0-3.84-2.05-5.63-4.78-5.63-2.2 0-3.18 1.21-3.73 2.06V8.2H9V21h3.49v-6.34c0-1.67.32-3.29 2.39-3.29 2.04 0 2.06 1.91 2.06 3.4V21H21v-7.35Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Contact
            </p>

            <div className="mt-8 space-y-7">
              <div>
                <p className="text-sm font-medium text-white">
                  General Queries
                </p>

                <a
                  href="mailto:ecell@campus.iith.ac.in"
                  className="mt-2 block whitespace-nowrap text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  ecell@campus.iith.ac.in
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Web Related Queries
                </p>

                <a
                  href="mailto:web.ecell@campus.iith.ac.in"
                  className="mt-2 block whitespace-nowrap text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  web.ecell@campus.iith.ac.in
                </a>
              </div>
            </div>
          </div>

          {/* Sponsorship */}
          <div className="lg:col-span-3">
            <div className="border-l border-white/20 pl-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                Sponsorship
              </p>

              <h3 className="mt-7 text-xl font-semibold tracking-tight text-white">
                Partner with us.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-400">
                For sponsorship opportunities and partnership
                related queries, reach out to our team.
              </p>

              <a
                href="mailto:sponsorship.ecell@campus.iith.ac.in"
                className="mt-6 block whitespace-nowrap text-sm font-medium text-white transition-colors hover:text-zinc-400"
              >
                sponsorship.ecell@campus.iith.ac.in
              </a>

              {/* Sponsorship contacts */}
              <div className="mt-7 space-y-3">
                <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                    Sponsorship Contact
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    +91 9548841160
                  </p>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                    Sponsorship Contact
                  </p>

                  <p className="mt-1 text-sm text-zinc-300">
                    +91 9321164349
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}