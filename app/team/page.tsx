"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { TeamMemberCard } from "@/components/ui/team-card";

// ─── Placeholder Team Data ──────────────────────────────────────────────────
// Replace names/roles with real data when available.

const OVERALL_HEAD = {
  name: "Alex Mercer",
  role: "Overall Head",
};

const VICE_OC = {
  name: "Priya Sharma",
  role: "Vice Overall Coordinator",
};

const DOMAIN_HEADS = [
  { domain: "Ideation", members: [{ name: "Rahul Verma" }, { name: "Sneha Nair" }] },
  { domain: "Corporate Relations & Finance", members: [{ name: "Kiran Patel" }] },
  { domain: "Operations", members: [{ name: "Arjun Das" }, { name: "Meera Iyer" }] },
  { domain: "PR & Networking", members: [{ name: "Vikram Reddy" }, { name: "Ananya Joshi" }] },
  { domain: "Events", members: [{ name: "Rohan Mehta" }] },
  { domain: "Web", members: [{ name: "Divya Krishnan" }] },
];

const DEPARTMENTS = [
  {
    id: "ops",
    label: "Operations",
    color: "from-violet-500 to-indigo-500",
    accent: "#7c3aed",
    description:
      "The backbone of E-Cell, ensuring smooth execution of all events and activities. From logistics coordination to resource management, we keep everything running seamlessly.",
    managers: [
      "Bhavik Shah",
      "Krish Malhotra",
      "Anushka Singh",
      "Aditya Tomar",
      "Srijith Kumar",
      "Mohit Yadav",
      "Ashani Desai",
      "Aashay Jain",
      "Sagar Mishra",
    ],
  },
  {
    id: "crf",
    label: "Corporate Relations & Finance",
    color: "from-fuchsia-500 to-rose-500",
    accent: "#c026d3",
    description:
      "Managing partnerships and financial strategies that fuel E-Cell's mission. We secure corporate collaborations and ensure sustainable growth for all initiatives.",
    managers: [
      "Shinju Thomas",
      "Vivaswan Roy",
      "Aadarsh Gupta",
      "Yashwant Sharma",
      "Pratyush Singh",
    ],
  },
  {
    id: "ideation",
    label: "Ideation",
    color: "from-cyan-500 to-blue-500",
    accent: "#0891b2",
    description:
      "The creative powerhouse that generates innovative concepts and solutions. We brainstorm new initiatives and transform vision into actionable plans.",
    managers: [
      "Sreekari Pendem",
      "Abhinav Raj",
      "Navya Popuri",
      "Ayesha Khan",
      "Bhavana Kasula",
      "Prabhat Anand",
      "Shivram S",
      "Manognya Kumar",
    ],
  },
  {
    id: "web",
    label: "Web",
    color: "from-emerald-500 to-teal-500",
    accent: "#059669",
    description:
      "Building and maintaining E-Cell's digital presence. We create innovative platforms, manage the online ecosystem, and develop cutting-edge solutions.",
    managers: ["Kashyap Nukala", "Jagadeesh M", "Sreeteja Guddeti"],
  },
  {
    id: "prn",
    label: "PR & Networking",
    color: "from-orange-500 to-amber-500",
    accent: "#d97706",
    description:
      "Building bridges within the entrepreneurial ecosystem. We establish valuable connections, manage external relations, and create opportunities for meaningful collaborations.",
    managers: [
      "Abhinav Girish",
      "Abhinaba Das",
      "Gayathri GL",
      "Abhijeet Kumar",
      "Subhadeep Mondal",
      "Ishaan Tushir",
      "Jeffin Steve",
      "Spoorthi Y",
      "Adhyayan Chowdhary",
      "Ankit Jyani",
    ],
  },
  {
    id: "events",
    label: "Events & Competitions",
    color: "from-rose-500 to-pink-500",
    accent: "#e11d48",
    description:
      "Ideating, planning, and executing flagship events that foster entrepreneurial spirit. We design engaging experiences and cultivate a vibrant ecosystem of innovation.",
    managers: [
      "Syed Imam Ali",
      "Kishore C",
      "Bhanu Prakash",
      "Purna Nanda Reddy",
      "Deepali Mondal",
      "Tejas Kamale",
      "Varad Gadekar",
      "Katta Sravya",
    ],
  },
  {
    id: "design",
    label: "Design & Multimedia",
    color: "from-indigo-500 to-violet-500",
    accent: "#4f46e5",
    description:
      "Amplifying E-Cell's voice across all platforms. We manage social media presence, create engaging content, and ensure our message reaches aspiring entrepreneurs everywhere.",
    managers: ["Neel Patel"],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow blobs */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-700/20 blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-fuchsia-700/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-indigo-800/10 blur-[80px]" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 text-center px-6 pt-20">
        {/* Eyebrow label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-violet-400" />
          <span
            className="text-xs tracking-[0.3em] uppercase text-violet-400 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            IIT Hyderabad · 2026–27
          </span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-violet-400" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-black leading-none tracking-tight text-white mb-6"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(3.5rem, 12vw, 9rem)",
            letterSpacing: "-0.03em",
          }}
        >
          TEAM
          <br />
          <span
            style={{
              background:
                "linear-gradient(135deg, #a78bfa 0%, #f472b6 40%, #fb923c 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            E-CELL
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-zinc-400 max-w-lg mx-auto leading-relaxed"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.05rem" }}
        >
          The passionate individuals driving entrepreneurship at IIT Hyderabad.
          <br />
          <span className="text-zinc-500">Think · Build · Inspire</span>
        </motion.p>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.25em] text-zinc-600 uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="relative py-24 px-6">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="text-xs tracking-[0.35em] uppercase text-violet-400 font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Leadership
        </span>
        <h2
          className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight"
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
        >
          At The Helm
        </h2>
        <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-violet-500 to-fuchsia-500" />
      </motion.div>

      {/* Cards */}
      <div className="max-w-sm mx-auto flex flex-col items-center gap-10">
        {/* Overall Head */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 blur-sm" />
          <div className="relative flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <TeamMemberCard
              name={OVERALL_HEAD.name}
              role={OVERALL_HEAD.role}
              size="large"
              index={0}
            />
            <span className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold bg-violet-500/15 text-violet-300 border border-violet-500/20">
              Overall Head
            </span>
          </div>
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-px h-10 bg-gradient-to-b from-violet-500/40 to-fuchsia-500/40 origin-top"
        />

        {/* Vice OC */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-rose-500/10 blur-sm" />
          <div className="relative flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/5 bg-white/[0.02]">
            <TeamMemberCard
              name={VICE_OC.name}
              role={VICE_OC.role}
              size="large"
              index={1}
            />
            <span className="px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-semibold bg-fuchsia-500/15 text-fuchsia-300 border border-fuchsia-500/20">
              Vice OC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainHeadsSection() {
  return (
    <section className="relative py-24 px-6">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.015] to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span
          className="text-xs tracking-[0.35em] uppercase text-fuchsia-400 font-medium"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Domain
        </span>
        <h2
          className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight"
          style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
        >
          Domain Heads
        </h2>
        <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-fuchsia-500 to-rose-500" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14">
        {DOMAIN_HEADS.map((domain, di) => (
          <motion.div
            key={domain.domain}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: di * 0.08 }}
            className="flex flex-col items-center gap-6"
          >
            <span
              className="text-[10px] tracking-[0.25em] uppercase font-semibold text-zinc-500"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {domain.domain}
            </span>
            <div className="flex flex-wrap justify-center gap-6">
              {domain.members.map((m, mi) => (
                <TeamMemberCard
                  key={m.name}
                  name={m.name}
                  size="medium"
                  index={mi}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function DepartmentSection({
  dept,
  isActive,
}: {
  dept: (typeof DEPARTMENTS)[0];
  isActive: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="relative py-20 px-6 md:px-12"
    >
      {/* Left accent border */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b ${dept.color} origin-top`}
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 lg:gap-20 items-start">
        {/* Left — dept info */}
        <div className="lg:sticky lg:top-28">
          <span
            className="text-[10px] tracking-[0.3em] uppercase font-medium"
            style={{ color: dept.accent, fontFamily: "'DM Sans', sans-serif" }}
          >
            Department
          </span>
          <h3
            className="text-4xl md:text-5xl font-black text-white mt-3 leading-none tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            {dept.label}
          </h3>
          <div
            className={`mt-4 w-10 h-0.5 bg-gradient-to-r ${dept.color}`}
          />
          <p
            className="mt-6 text-zinc-400 leading-relaxed text-sm md:text-base"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {dept.description}
          </p>

          {/* Manager count pill */}
          <div className="mt-8 inline-flex items-center gap-2">
            <span
              className="text-xs font-semibold px-3 py-1.5 rounded-full border"
              style={{
                color: dept.accent,
                borderColor: dept.accent + "40",
                backgroundColor: dept.accent + "15",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              {dept.managers.length}{" "}
              {dept.managers.length === 1 ? "Manager" : "Managers"}
            </span>
          </div>
        </div>

        {/* Right — managers grid */}
        <div>
          <p
            className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-10 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Managers
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {dept.managers.map((name, i) => (
              <TeamMemberCard
                key={name}
                name={name}
                size="small"
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Departments Nav ─────────────────────────────────────────────────────────

function DepartmentsNav({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <div className="sticky top-0 z-30 bg-black/80 backdrop-blur-xl border-b border-white/[0.06] py-3">
      <div className="max-w-6xl mx-auto px-6 flex gap-1 overflow-x-auto scrollbar-hide">
        {DEPARTMENTS.map((dept) => (
          <button
            key={dept.id}
            onClick={() => onSelect(dept.id)}
            className={`relative flex-shrink-0 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
              active === dept.id
                ? "text-white"
                : "text-zinc-500 hover:text-zinc-300"
            }`}
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {active === dept.id && (
              <motion.div
                layoutId="dept-pill"
                className="absolute inset-0 rounded-lg bg-white/10 border border-white/10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{dept.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TeamPage() {
  const [activeDept, setActiveDept] = useState(DEPARTMENTS[0].id);

  const scrollToDept = (id: string) => {
    setActiveDept(id);
    const el = document.getElementById(`dept-${id}`);
    if (el) {
      const offset = 72;
      const top =
        el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Google Font import via style tag */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900;1,9..40,300&display=swap');
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <HeroSection />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <LeadershipSection />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <DomainHeadsSection />

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Departments heading */}
      <div className="pt-24 pb-6 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="text-xs tracking-[0.35em] uppercase text-rose-400 font-medium"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Our Teams
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mt-3 tracking-tight"
            style={{ fontFamily: "'DM Sans', sans-serif", letterSpacing: "-0.02em" }}
          >
            Departments
          </h2>
          <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-rose-500 to-orange-500" />
        </motion.div>
      </div>

      {/* Sticky department nav */}
      <DepartmentsNav active={activeDept} onSelect={scrollToDept} />

      {/* Department sections */}
      <div className="divide-y divide-white/[0.04]">
        {DEPARTMENTS.map((dept) => (
          <div key={dept.id} id={`dept-${dept.id}`}>
            <DepartmentSection dept={dept} isActive={activeDept === dept.id} />
          </div>
        ))}
      </div>

      {/* Footer spacer */}
      <div className="h-24" />
    </main>
  );
}