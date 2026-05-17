import { GLSLHills } from "@/components/ui/glsl-hills";

export default function Home() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black">
      <GLSLHills />
      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap text-white">
          <span className="italic text-6xl font-thin">Ideas That Ignite<br/></span>
          E-Cell IIT Hyderabad
        </h1>
        <p className="text-lg text-white/80 max-w-xl mx-auto">
          From dorm rooms to startups. We fuel the ideas that shape tomorrow.
        </p>
      </div> 
    </div>
  );
}
