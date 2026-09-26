import StartupStudioHero from "@/components/ui/startup-studio/hero-section";
import { StartupStudioAbout } from "@/components/ui/startup-studio/about-section";
import { StartupStudioGallery } from "@/components/ui/startup-studio/gallery";

export default function StartupStudioPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <StartupStudioHero />
      <StartupStudioAbout />
      <StartupStudioGallery />
    </main>
  );
}