import StartupSenateHero from "@/components/ui/startup-senate/hero-section";
import { ManifestoStats } from "@/components/ui/startup-senate/manifesto-stats";
import { Skiper30 } from "@/components/ui/startup-senate/gallery";
import { RegistrationSection } from "@/components/ui/startup-senate/registration-section";
import { RegistrationProvider } from "@/contexts/registration-context";

export default function StartupSenate() {
  return (
    <RegistrationProvider>
      <StartupSenateHero />
      <ManifestoStats />
      <Skiper30 />
      <RegistrationSection />
    </RegistrationProvider>
  );
}