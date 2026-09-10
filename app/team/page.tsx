"use client";

import Leadership from "@/components/ui/team/Leadership";
import DomainHeads from "@/components/ui/team/DomainHeads";
import Departments from "@/components/ui/team/Departments";


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">


      <Leadership />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mx-6" />

      <DomainHeads />

      <div className="h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent mx-6" />

      <Departments />
    </main>
  );
}