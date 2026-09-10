import BoardroomHero from "@/components/ui/boardroom/hero-section";
import { BoardroomManifestoStats } from "@/components/ui/boardroom/manifesto-stats";
import { Skiper30 } from "@/components/ui/boardroom/gallery"
import { BoardroomRegistrationSection } from "@/components/ui/boardroom/registration-section";

export default function BoardroomPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <BoardroomHero />
      <BoardroomManifestoStats />
      <Skiper30 />
      <BoardroomRegistrationSection />
    </main>
  );
}