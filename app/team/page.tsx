"use client";

import Hero from "@/components/ui/team/Hero";
import Leadership from "@/components/ui/team/Leadership";
import DomainHeads from "@/components/ui/team/DomainHeads";
import Departments from "@/components/ui/team/Departments";
import AllMembersMarquee from "@/components/ui/team/AllMembersMarquee";
import CursorGlow from "@/components/ui/team/CursorGlow";

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,900&family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
      `}</style>

      <CursorGlow />
      <Hero />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mx-6" />
      <Leadership />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mx-6" />
      <DomainHeads />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mx-6" />
      <Departments />

      <AllMembersMarquee />
    </main>
  );
}