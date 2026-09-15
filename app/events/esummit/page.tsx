import ESummitHero from "@/components/ui/esummit/hero-section";
import { ESummitManifestoStats } from "@/components/ui/esummit/manifesto-stats";
import { ESummitSubEvents } from "@/components/ui/esummit/sub-events";
import { ESummitKeynote } from "@/components/ui/esummit/keynote";
import { ESummitClosingSection } from "@/components/ui/esummit/closing-section";

export const metadata = {
  title: "E-Summit 2026 | E-Cell IIT Hyderabad",
  description:
    "E-Summit 2026 — the flagship entrepreneurship summit by E-Cell, IIT Hyderabad, featuring the Startup Fair, Startup School, Fetching Fortunes x Ideabaaz, Startup Studio, and a keynote by Ashish Arora.",
};

export default function ESummitPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <ESummitHero />
      <ESummitManifestoStats />
      <ESummitSubEvents />
      <ESummitKeynote />
      <ESummitClosingSection />
    </main>
  );
}
