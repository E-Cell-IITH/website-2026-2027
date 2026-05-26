import { GLSLHills } from "@/components/ui/glsl-hills";
import { ManifestoStats } from "@/components/ui/manifesto-stats";
import { EventsSection } from "@/components/ui/events-section";
import { PreviousSpeakers } from "@/components/ui/previous-speakers";
import { SponsorsSection } from "@/components/ui/sponsors-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808]">
      {/* Hero Section */}
      <section id="home" className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
        <GLSLHills />
        <div className="space-y-6 pointer-events-none z-10 text-center absolute">
          <h1 className="font-semibold text-7xl whitespace-pre-wrap text-white">
            <span className="italic text-6xl font-thin">Ideas That Ignite<br/></span>
            E-Cell IIT Hyderabad
          </h1>
          <p className="text-lg text-white/80 max-w-xl mx-auto">
            From dorm rooms to startups. We fuel the ideas that shape tomorrow.
          </p>
        </div> 
      </section>

      {/* Manifesto & Stats Section */}
      <ManifestoStats />

      {/* Events Section */}
      <EventsSection />

      {/* Previous Speakers Section */}
      <PreviousSpeakers />

      {/* Sponsors Section */}
      <SponsorsSection />
      
    </main>
  );
}
