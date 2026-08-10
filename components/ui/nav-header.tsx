"use client";

import React, { useRef, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { label: "About", target: "about", isPage: false },
    { label: "Events", target: "events", isPage: false },
    { label: "Speakers", target: "speakers", isPage: false },
    // { label: "Team", target: "team", isPage: true },
    { label: "Contact", target: "contact", isPage: false },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  
  const handleNavClick = (target: string, isPage: boolean) => {
    if (isPage) {
      if (pathname === `/${target}`) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(`/${target}`);
      }
    } else {
      if (pathname === "/") {
        const element = document.getElementById(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${target}`);
      }
    }
  };

  const goHome = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(3,6,26,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(20,0,255,0.18)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={goHome} className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center font-display font-bold text-white"
            style={{ background: "linear-gradient(135deg, #1400ff, #2d3bff)" }}
          >
            <img 
              src={"/ECELL_Logo.webp"}
              alt="E-Cell IIT Hyderabad Logo"
              className="w-9 h-9 rounded-lg object-cover"
            />
          </div>
          <div className="font-display">
            <span className="text-lg font-bold text-white leading-none tracking-wide">
              E-CELL
            </span>
            <span
              className="block text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5"
              style={{ color: "#4d6eff" }}
            >
              IIT HYDERABAD
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.target, l.isPage)}
              className="text-sm tracking-wide transition-colors hover:text-white"
              style={{ color: "#7888cc" }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact", false)}
            className="px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all hover:scale-105 active:scale-95 brand-gradient brand-glow"
          >
            Join Us
          </button>
        </nav>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(3,6,26,0.97)" }}
        >
          {navItems.map((l) => (
            <button
              key={l.label}
              onClick={() => handleNavClick(l.target, l.isPage)}
              className="text-left text-base py-2 border-b"
              style={{ color: "#c0caff", borderColor: "rgba(20,0,255,0.15)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default NavHeader;
