"use client";

import { Mail, MapPin, Phone } from "lucide-react";


const CONTACT_INFO = [
  { icon: Mail, label: "ecell@iith.ac.in" },
  { icon: MapPin, label: "IIT Hyderabad, Sangareddy, Telangana 502284" },
  { icon: Phone, label: "+91 40 2301 6000" },
];

export function SponsorsSection() {
  return (
    <>
      {/* Ready to Build? */}
      <section
        className="py-24 px-6 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0d3d 0%, #1400ff 50%, #0a0d3d 100%)" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Ready to Build?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Join 2,000+ students who are building, pitching, and shipping with E-Cell IIT Hyderabad.
          </p>
          
          <a  href="#contact"
            className="inline-block px-10 py-4 rounded-xl font-display font-bold text-blue-700 text-lg bg-white hover:scale-105 active:scale-95 transition-transform"
          >
            Get Involved
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-eyebrow uppercase tracking-widest mb-4" style={{ color: "#1400ff" }}>// Contact</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Let&apos;s Talk</h2>
            <p className="mb-10 leading-relaxed" style={{ color: "#7888cc" }}>
              Whether you want to collaborate, sponsor our events, or just want to learn more about
              what we do — we&apos;re always open to a conversation.
            </p>
            <div className="flex flex-col gap-5">
              {CONTACT_INFO.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "rgba(20,0,255,0.15)", border: "1px solid rgba(20,0,255,0.3)" }}>
                      <Icon size={16} style={{ color: "#4d6eff" }} />
                    </div>
                    <span className="text-sm pt-2" style={{ color: "#7888cc" }}>{c.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="p-8 rounded-2xl flex flex-col gap-5"
            style={{ background: "rgba(7,13,46,0.8)", border: "1px solid rgba(20,0,255,0.2)" }}
          >
            {["Your Name", "Email Address"].map((ph) => (
              <input
                key={ph}
                type={ph.includes("Email") ? "email" : "text"}
                placeholder={ph}
                className="px-4 py-3 rounded-lg text-sm transition-all focus:outline-none"
                style={{ background: "rgba(3,6,26,0.7)", border: "1px solid rgba(20,0,255,0.25)", color: "#c0caff" }}
              />
            ))}
            <textarea
              placeholder="Your Message"
              rows={5}
              className="px-4 py-3 rounded-lg text-sm transition-all focus:outline-none resize-none"
              style={{ background: "rgba(3,6,26,0.7)", border: "1px solid rgba(20,0,255,0.25)", color: "#c0caff" }}
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 active:scale-95 brand-gradient brand-glow"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: "rgba(20,0,255,0.15)", background: "rgba(7,13,46,0.8)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-white text-sm" style={{ background: "linear-gradient(135deg, #1400ff, #2d3bff)" }}>
              E
            </div>
            <div className="font-display">
              <span className="text-base font-bold text-white leading-none">E-CELL</span>
              <span className="block text-[9px] tracking-[0.2em] uppercase" style={{ color: "#4d6eff" }}>IIT HYDERABAD</span>
            </div>
          </div>
          <p className="text-xs" style={{ color: "#7888cc" }}>
            © 2026 E-Cell IIT Hyderabad. Building the future, one startup at a time.
          </p>
        </div>
      </footer>
    </>
  );
}