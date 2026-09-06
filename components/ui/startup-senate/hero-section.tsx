import { GLSLHills } from "@/components/ui/glsl-hills";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RegisterCTA } from "./register-cta";

export default function StartupSenateHero() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <section
        id="home"
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black"
      >
        <GLSLHills />

        <div className="absolute z-10 flex flex-col items-center space-y-8 px-6 text-center">
          <h1 className="whitespace-pre-wrap font-serif text-5xl italic tracking-tight text-white sm:text-6xl md:text-8xl">
            Startup Senate
          </h1>

          <div className="pointer-events-auto flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-white/20 bg-transparent px-9 text-base text-white hover:bg-white/10 hover:text-white"
              )}
            >
              About the event
            </a>

            <RegisterCTA />
          </div>
        </div>
      </section>
    </main>
  );
}