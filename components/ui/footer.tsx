import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#080808] w-full pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Part 1: Logo & Name */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-neutral-800 rounded-xl flex items-center justify-center text-neutral-400 font-bold select-none">
            E
          </div>
          <span className="text-white font-semibold text-xl tracking-tight">
            E-Cell IITH
          </span>
        </div>

        {/* Part 2: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {["About", "Events", "Sponsors", "Team", "Contact"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Part 3: Divider and Bottom Row */}
        <div className="w-full">
          <div className="w-full border-t border-dashed border-neutral-800 mb-8"></div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-neutral-500 text-sm">
              © 2026 E-Cell IIT Hyderabad
            </p>

            <div className="flex items-center gap-5">
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
