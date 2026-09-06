import StartupSenateHero from "@/components/ui/startup-senate/hero-section";
import { ManifestoStats } from "@/components/ui/startup-senate/manifesto-stats";
import { Skiper30 } from "@/components/ui/startup-senate/gallery";

export default function StartupSenate() {
    return (
        <>
            <StartupSenateHero />
            <ManifestoStats />
            <Skiper30 />
        </>
    )
}