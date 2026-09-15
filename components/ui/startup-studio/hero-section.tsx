import { GLSLHills } from "@/components/ui/glsl-hills";

export default function StartupStudioHero() {
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
              INCUBATE. MENTOR. LAUNCH.
              <br />
            </span>
            Startup Studio
          </h1>

          <p className="-mt-4 font-serif text-lg font-bold italic tracking-wide text-white/80 sm:text-xl">
            90-Day Cohort Program
          </p>
        </div>
      </section>
    </main>
  );
}