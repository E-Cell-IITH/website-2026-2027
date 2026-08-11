'use-client'

export default function HeroSection(){
    return (
        <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16 overflow-hidden"
        >
        
        {/* Backgrond */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
            className="absolute inset-0 opacity-20"
            style={{
            backgroundImage:
                "linear-gradient(rgba(20,0,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(20,0,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            }}
        />
        <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-25"
            style={{ background: "radial-gradient(circle, #1400ff 0%, transparent 70%)" }}
        />
        <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #1400ff, transparent)" }}
        />
        </div>
        
        {/* content */}

        <div className="relative z-10 max-w-4xl mx-auto">

          <h1 className="text-6xl md:text-8xl font-display font-bold leading-none tracking-tight mb-6">
            <span className="text-white">BUILD.</span>{" "}
            <span style={{ color: "#1400ff" }}>LAUNCH.</span>{" "}
            <span className="text-white">DISRUPT.</span>
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "#7888cc" }}>
            E-Cell IIT Hyderabad is the nexus of startup culture on campus fostering innovation,
            connecting founders with mentors, and building the entrepreneurs of tomorrow.
          </p>

          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#events"
              className="group px-8 py-3.5 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #1400ff 0%, #2d3bff 100%)", boxShadow: "0 0 32px rgba(20,0,255,0.5)" }}
            >
              Explore Events
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#about"
              className="px-8 py-3.5 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
              style={{ border: "1px solid rgba(20,0,255,0.5)", color: "#c0caff", background: "rgba(20,0,255,0.08)" }}
            >
              About Us
            </a>
          </div> */}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-px h-10 animate-pulse" style={{ background: "linear-gradient(to bottom, #1400ff, transparent)" }} />
        </div>
      </section>
    )
}