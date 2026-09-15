import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const galleryImages = [

  { src: "/emerge/img1.webp", alt: "Fireside Chat with Mrs. Upasana Kamineni" },
  { src: "/emerge/img5.webp", alt: "Keynote by Mr. Deepak Gupta" },
  { src: "/Emerge 2.0.webp", alt: "E-Merge 2025 conclave" },
];

export function EmergeClosingSection() {
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
              Moments From E-Merge
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
            Fostering Entrepreneurial Thinking
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
            Through competitions, simulations, networking opportunities, and
            speaker sessions, E-Merge 2025 created an engaging platform for
            experiential learning, strengthening E-Cell IIT Hyderabad&rsquo;s
            outreach and engagement with the student entrepreneurial
            ecosystem.
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
