import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryImages = [
  { src: "/esummit/startup_fair1.webp", alt: "Startup Fair at IIT Hyderabad" },
  { src: "/esummit/startup_fair2.webp", alt: "Startup Fair at IIT Hyderabad" },
  { src: "/esummit/Fetching_Fortunes1.webp", alt: "Fetching Fortunes x Ideabaaz" },
  { src: "/esummit/Fetching_Fortunes2.webp", alt: "Fetching Fortunes x Ideabaaz" },
  { src: "/esummit/Ashish_Arora_talk.webp", alt: "Keynote by Ashish Arora" },
];

export function ESummitClosingSection() {
  return (
    <>
      <section
        id="gallery"
        className="relative w-full overflow-hidden bg-[#080808] py-16 text-white md:py-24"
      >
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Gallery
            </span>
            <h2 className="mt-2 font-serif text-4xl italic tracking-tight text-white md:text-5xl">
              Moments From E-Summit
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {galleryImages.map((img) => (
              <div
                key={img.src}
                className="h-72 overflow-hidden rounded-2xl border border-white/10"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#0a0a0a] px-6 py-16 text-white md:py-24">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Outcome
          </span>
          <h2 className="font-serif text-3xl italic tracking-tight text-white md:text-5xl">
            Connecting The Ecosystem
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            E-Summit 2026 successfully connected students, founders,
            startups, investors, and industry leaders through a wide range of
            entrepreneurial initiatives, strengthening E-Cell IIT
            Hyderabad&rsquo;s role in promoting entrepreneurship and startup
            culture among students and young innovators.
          </p>

          <div className="pt-2">
            <Link
              href="/#events"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 rounded-full border-white/20 bg-transparent px-9 text-base text-white hover:bg-white hover:text-black"
              )}
            >
              Explore More Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
