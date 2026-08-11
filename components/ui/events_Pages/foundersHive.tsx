"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  Clock,
  ExternalLink,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


const EVENT = {
  date: "AUG 22, 2025",
  title: "Founders' Hive",
  location: "Innovation Hub, IIT Hyderabad",
  spots: "120 spots",
  description:
    "A premier entrepreneurship conclave by E-Cell IIT Hyderabad convening accomplished entrepreneurs, investors, and startup enablers to inspire the next wave of founders.",
  highlights: [
    "15+ Startups from diverse sectors including FinTech, HealthTech, AI, EdTech, and EV Infrastructure participated in the event.",
    "Participants from premier institutions such as IIM Bangalore, IIT Kharagpur, IIIT Bangalore, and PES University came together to collaborate and exchange ideas.",
    "Mentorship by Industry Leaders including Gaurav Dahake (Founder, Onramp Money & Co-founder, Bitbns) and Dharmgya Sharma (Co-founder, Frinks AI & IIT Hyderabad Alumnus).",
    "Interactive Discussions on startup execution, product development, fundraising, scaling strategies, team building, and navigating entrepreneurial challenges.",
    "Hands-on Learning through one-on-one and group interactions, enabling participants to gain practical insights directly from experienced founders and mentors.",
  ],
  schedule: [
    { time: "18:00", activity: "Doors Open — informal mingling" },
    { time: "18:30", activity: "Welcome & Conclave Overview" },
    { time: "19:00", activity: "Interactive Discussion — Gaurav Dahake on Startup Execution & Fundraising" },
    { time: "19:45", activity: "Interactive Discussion — Dharmgya Sharma on Product Development & Scaling" },
    { time: "20:30", activity: "Open Q&A + Peer Networking" },
    { time: "21:00", activity: "Informal Close" },
  ],
  speakers: [
    { name: "Gaurav Dahake", role: "Founder, Onramp Money & Co-founder, Bitbns", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format" },
    { name: "Dharmgya Sharma", role: "Co-founder, Frinks AI | IIT Hyderabad Alumnus", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&auto=format" },
  ],
  overview: [
    "Founders Hive is a premier entrepreneurship conclave that celebrates innovation, leadership, and the spirit of venture creation. Curated by E-Cell IIT Hyderabad, the event convenes accomplished entrepreneurs, investors, policymakers, and startup enablers to share insights, exchange ideas, and inspire the next wave of founders.",
    "Participants left the event with stronger professional networks, fresh entrepreneurial perspectives, and valuable practical insights from experienced founders and peers.",
  ],
  overviewHighlight: "Guest Mentors and Discussions",
  overviewClose: [
    "The session featured engaging interactions with Gaurav Dahake, Founder of Onramp Money and co-founder of Bitbns, and Dharmgya Sharma, Co-founder of Frinks AI — which recently raised $5.4 million in seed funding — and also an IIT Hyderabad alum. Instead of delivering conventional keynote addresses, both mentors actively participated in interactive discussions, fostering an open and collaborative learning environment.",
    " The conversations centred on critical aspects of entrepreneurship, including startup execution, product development, fundraising strategies, business scaling, team building, founder experiences, and navigating the uncertainties inherent in entrepreneurial ventures.",
  ],
  slideshow: [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=500&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop&auto=format",
    "https://images.unsplash.com/photo-1631350397792-8e0c2de5b637?w=800&h=500&fit=crop&auto=format",
  ],
  gallery: [
    "founderHive/foundersHive1.jpeg",
    "founderHive/foundersHive2.jpeg",
  ],
};
const formUrl = "https://forms.gle/hLuCfDP2hgbX7tsh6";


export default function FoundersHivePage() {
  const [imgIdx, setImgIdx] = useState(0);
  const prevImg = () => setImgIdx((p) => (p - 1 + EVENT.slideshow.length) % EVENT.slideshow.length);
  const nextImg = () => setImgIdx((p) => (p + 1) % EVENT.slideshow.length);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(20,0,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,0,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, #1400ff 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-eyebrow uppercase tracking-widest mb-6"
              style={{ border: "1px solid rgba(20,0,255,0.5)", background: "rgba(20,0,255,0.12)", color: "#7888cc" }}
            >
              <Calendar size={12} style={{ color: "#4d6eff" }} />
              {EVENT.date}
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {EVENT.title}
            </h1>

            <p className="text-xl mb-8 max-w-3xl" style={{ color: "#7888cc" }}>
              {EVENT.description}
            </p>

            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2" style={{ color: "#c0caff" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(20,0,255,0.15)", border: "1px solid rgba(20,0,255,0.3)" }}>
                  <MapPin size={16} style={{ color: "#4d6eff" }} />
                </div>
                <span className="text-sm">{EVENT.location}</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "#c0caff" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(20,0,255,0.15)", border: "1px solid rgba(20,0,255,0.3)" }}>
                  <Users size={16} style={{ color: "#4d6eff" }} />
                </div>
                <span className="text-sm">{EVENT.spots}</span>
              </div>
            </div>

            <button
              onClick={() => window.open(formUrl, '_blank')}
              className="px-8 py-4 rounded-lg font-bold text-white transition-all hover:scale-105 active:scale-95 text-lg flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #1400ff, #2d3bff)", boxShadow: "0 0 32px rgba(20,0,255,0.5)" }}
            >
              Register Now
              <ExternalLink size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* SLIDESHOW */}
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden group"
          style={{ border: "1px solid rgba(20,0,255,0.3)", height: "500px" }}
        >
          {EVENT.slideshow.map((src, i) => (
            <div key={src} className="absolute inset-0 transition-opacity duration-700" style={{ opacity: i === imgIdx ? 1 : 0, zIndex: i === imgIdx ? 1 : 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt={`${EVENT.title} - ${i + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, rgba(3,6,26,0.6) 0%, transparent 50%)" }} />
          <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110" style={{ background: "rgba(3,6,26,0.7)", border: "1px solid rgba(20,0,255,0.4)", color: "#fff" }}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110" style={{ background: "rgba(3,6,26,0.7)", border: "1px solid rgba(20,0,255,0.4)", color: "#fff" }}>
            <ChevronRight size={20} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {EVENT.slideshow.map((_, i) => (
              <button key={i} onClick={() => setImgIdx(i)} className="rounded-full transition-all" style={{ width: i === imgIdx ? 24 : 8, height: 8, background: i === imgIdx ? "#1400ff" : "rgba(255,255,255,0.4)" }} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            {/* Overview */}
            <div>
              <p className="text-xs font-eyebrow uppercase tracking-widest mb-4" style={{ color: "#1400ff" }}>// About Event</p>
              <h2 className="font-display text-3xl font-bold mb-6">Event Overview</h2>
              <div className="text-base leading-relaxed space-y-4" style={{ color: "#7888cc" }}>
                {EVENT.overview.map((p, i) => <p key={i}>{p}</p>)}
                <p className="font-bold text-lg" style={{ color: "#c0caff" }}>{EVENT.overviewHighlight}</p>
                {EVENT.overviewClose.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            {/* Gallery */}
            <div>
              <p className="text-xs font-eyebrow uppercase tracking-widest mb-4" style={{ color: "#1400ff" }}>// Gallery</p>
              <h2 className="font-display text-3xl font-bold mb-6">Event Gallery</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {EVENT.gallery.map((src, i) => (
                  <div key={i} className="relative rounded-xl overflow-hidden aspect-[4/3]" style={{ border: "1px solid rgba(20,0,255,0.2)" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={src} alt={`${EVENT.title} gallery photo ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <p className="text-xs font-eyebrow uppercase tracking-widest mb-4" style={{ color: "#1400ff" }}>// Highlights</p>
              <h2 className="font-display text-3xl font-bold mb-6">Event Highlights</h2>
              <div className="grid gap-4">
                {EVENT.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl" style={{ background: "rgba(7,13,46,0.6)", border: "1px solid rgba(20,0,255,0.15)" }}>
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(20,0,255,0.3)" }}>
                      <ArrowRight size={12} style={{ color: "#4d6eff" }} />
                    </div>
                    <p className="text-sm" style={{ color: "#c0caff" }}>{h}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Speakers */}
            <div>
              <p className="text-xs font-eyebrow uppercase tracking-widest mb-4" style={{ color: "#1400ff" }}>// Speakers</p>
              <h2 className="font-display text-3xl font-bold mb-6">Featured Speakers</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {EVENT.speakers.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 rounded-xl hover:scale-105 transition-all" style={{ background: "rgba(7,13,46,0.6)", border: "1px solid rgba(20,0,255,0.15)" }}>
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid rgba(20,0,255,0.4)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold mb-1" style={{ fontSize: "1.1rem" }}>{s.name}</h4>
                      <p className="text-xs" style={{ color: "#7888cc" }}>{s.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="sticky top-24">
              <div className="p-6 rounded-2xl" style={{ background: "rgba(7,13,46,0.8)", border: "1px solid rgba(20,0,255,0.2)" }}>
                <div className="flex items-center gap-2 mb-6">
                  <Clock size={20} style={{ color: "#4d6eff" }} />
                  <h3 className="font-display text-xl font-bold">Schedule</h3>
                </div>
                <div className="space-y-4">
                  {EVENT.schedule.map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="text-xs font-eyebrow font-bold px-2 py-1 rounded h-fit" style={{ background: "rgba(20,0,255,0.2)", color: "#4d6eff", whiteSpace: "nowrap" }}>
                        {item.time}
                      </div>
                      <p className="text-sm flex-1" style={{ color: "#c0caff" }}>{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 rounded-2xl text-center" style={{ background: "linear-gradient(135deg, #1400ff 0%, #2d3bff 100%)", boxShadow: "0 0 40px rgba(20,0,255,0.3)" }}>
                <h4 className="font-display text-xl font-bold text-white mb-2">Don&apos;t Miss Out!</h4>
                <p className="text-blue-100 text-sm mb-4">Limited spots available. Register now to secure your seat.</p>
                <button onClick={() => window.open(formUrl, '_blank')} className="w-full px-6 py-3 rounded-lg font-bold bg-white transition-all hover:scale-105 active:scale-95" style={{ color: "#1400ff" }}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t" style={{ borderColor: "rgba(20,0,255,0.15)", background: "rgba(7,13,46,0.8)" }}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-white text-sm"
              style={{ background: "linear-gradient(135deg, #1400ff, #2d3bff)" }}
            >
              E
            </div>
            <div className="font-display">
              <span className="text-base font-bold text-white leading-none">E-CELL</span>
              <span className="block text-[9px] tracking-[0.2em] uppercase" style={{ color: "#4d6eff" }}>
                IIT HYDERABAD
              </span>
            </div>
          </div>
          <p className="text-xs" style={{ color: "#7888cc" }}>
            © 2026 E-Cell IIT Hyderabad. Building the future, one startup at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}