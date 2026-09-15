const speakers = [
  {
    name: "Upasana Kamineni",
    role: "Vice-Chairperson, CSR, Apollo Hospitals",
    image: "/speakers/Upasana.webp",
  },
  {
    name: "Deepak Gupta",
    role: "Former CTO, Cars24",
    image: "/speakers/Deepak_gupta .webp"
  },
  {
    name: "Nitesh Patwari",
    role: "CFO, Bombay Shaving Company",
    // image:"/speakers/Nitesh_Patwari.webp"
  },
  {
    name: "Vinay Chilakapati",
    role: "CEO, Innomet Advanced Materials",
    image:"/speakers/Vinay_Chilakapati.webp"
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function EmergeSpeakers() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Keynote Sessions
          </span>
          <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
            Voices That Inspired
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-[#111111] md:h-32 md:w-32">
                {speaker.image ? (
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="font-serif text-3xl italic text-zinc-500">
                    {initials(speaker.name)}
                  </span>
                )}
              </div>

              <h3 className="text-base font-semibold text-white md:text-lg">
                {speaker.name}
              </h3>
              <p className="mt-1 text-xs text-zinc-400 md:text-sm">
                {speaker.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
