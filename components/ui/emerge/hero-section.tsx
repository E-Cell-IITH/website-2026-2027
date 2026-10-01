import { GLSLHills } from "@/components/ui/glsl-hills";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function EmergeHero() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <section
        id="home"
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black"
      >
        <GLSLHills />

        <div className="absolute z-10 flex flex-col items-center space-y-8 px-6 text-center">
          <h1 className="whitespace-pre-wrap font-serif text-5xl italic tracking-tight text-white sm:text-6xl md:text-8xl">
            <span className="italic text-4xl sm:text-5xl md:text-7xl font-thin">
              Innovation. Collaboration. Thinking.
              <br />
            </span>
            E-Merge 2025
          </h1>

          {/* Event Date */}
          <p className="-mt-4 font-serif text-xl font-bold italic tracking-wide text-white/80 sm:text-xl">
            11th &ndash; 12th October 2025
          </p>

          <div className="pointer-events-auto flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#about"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-white/20 bg-transparent px-9 text-base text-white hover:bg-black/10 hover:text-white"
              )}
            >
              About the event
            </a>

            <a
              href="#gallery"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 rounded-full bg-orange-500 px-9 text-base text-black hover:bg-orange-400"
              )}
            >
              View gallery
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
