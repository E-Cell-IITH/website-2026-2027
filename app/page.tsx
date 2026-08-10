import HeroSection from "@/components/ui/hero-section";
import { ManifestoStats } from "@/components/ui/manifesto-stats";
import { EventsSection } from "@/components/ui/events-section";
import { PreviousSpeakers } from "@/components/ui/previous-speakers";
import { SponsorsSection } from "@/components/ui/contact-footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection/>

      {/* Stats + About */}
      <ManifestoStats />

      {/* Events Section */}
      <EventsSection />

      {/* Previous Speakers Section */}
      <PreviousSpeakers />

      {/* CTA + Contact + Footer */}
      <SponsorsSection />
    </main>
  );
}
