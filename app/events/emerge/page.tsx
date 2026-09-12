import EmergeHero from "@/components/ui/emerge/hero-section";
import { EmergeManifestoStats } from "@/components/ui/emerge/manifesto-stats";
import { EmergeHighlights } from "@/components/ui/emerge/highlights";
import { EmergeSpeakers } from "@/components/ui/emerge/speakers";
import { EmergeClosingSection } from "@/components/ui/emerge/closing-section";

export const metadata = {
  title: "E-Merge 2025 | E-Cell IIT Hyderabad",
  description:
    "E-Merge 2025 — a two-day entrepreneurial conclave by E-Cell, IIT Hyderabad featuring the Boardroom Simulation, Founders' Forum, Startup Senate, and keynote sessions with industry leaders.",
};

export default function EmergePage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <EmergeHero />
      <EmergeManifestoStats />
      <EmergeHighlights />
      <EmergeSpeakers />
      <EmergeClosingSection />
    </main>
  );
}
