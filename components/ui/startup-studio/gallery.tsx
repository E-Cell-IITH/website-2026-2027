"use client";

import {
  motion,
  MotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { cn } from "@/lib/utils";

const images = [
  "/startup-senate/img1.jpeg",
  "/startup-senate/img2.jpeg",
  "/startup-senate/img3.jpeg",
  "/startup-senate/img4.jpeg",
  "/startup-senate/img5.jpeg",
  "/startup-senate/img6.jpeg",
  "/startup-studio/studio-1.webp",
  "/startup-studio/gallery-1.webp",
  "/startup-studio/gallery-2.webp",
  "/startup-studio/gallery-3.webp",
];

const StartupStudioGallery = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setIsMobile(mediaQuery.matches);
    };
    update();
    mediaQuery.addEventListener("change", update);
    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  if (isMobile === null) {
    return (
      <section className="w-full bg-[#0a0a0a] text-white">
        <div className="flex flex-col items-center justify-center gap-3 py-16 text-center md:py-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Gallery
          </span>
          <h2 className="font-serif text-4xl italic tracking-tight text-white md:text-6xl">
            Moments From Startup Studio
          </h2>
        </div>
        <div className="h-[120vh] bg-[#0a0a0a]" />
      </section>
    );
  }

  return isMobile ? <MobileGallery /> : <DesktopGallery />;
};

const DesktopGallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();
    let animationFrameId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    resize();
    window.addEventListener("resize", resize);
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <GalleryHeading>
      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[4vw] overflow-hidden bg-[#0a0a0a] p-[4vw] sm:gap-[3vw] sm:p-[3vw] md:gap-[2vw] md:p-[2vw]"
      >
        <Column
          images={[images[0], images[6], images[1], images[7], images[2], images[8]]}
          y={y}
          offset="desktop-first"
          className="flex w-1/2 md:w-1/3 lg:w-1/4"
        />
        <Column
          images={[images[3], images[9], images[4], images[6], images[5], images[7]]}
          y={y2}
          offset="desktop-second"
          className="flex w-1/2 md:w-1/3 lg:w-1/4"
        />
        <Column
          images={[images[8], images[0], images[9], images[1], images[6], images[2]]}
          y={y3}
          offset="desktop-third"
          className="hidden md:flex md:w-1/3 lg:w-1/4"
        />
        <Column
          images={[images[3], images[7], images[4], images[8], images[5], images[9]]}
          y={y4}
          offset="desktop-fourth"
          className="hidden lg:flex lg:w-1/4"
        />
      </div>
      <div className="h-16 md:h-24" />
    </GalleryHeading>
  );
};

const MobileGallery = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [galleryHeight, setGalleryHeight] = useState(0);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, galleryHeight * 0.35]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, galleryHeight * 0.55]);

  useEffect(() => {
    if (!gallery.current) return;
    const updateSize = () => {
      if (!gallery.current) return;
      setGalleryHeight(gallery.current.getBoundingClientRect().height);
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(gallery.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <GalleryHeading>
      <div
        ref={gallery}
        className="relative box-border flex h-[150vh] w-full gap-[3vw] overflow-hidden bg-[#0a0a0a] px-[3vw] py-[2vw]"
      >
        <MobileColumn images={[images[0], images[6], images[1], images[7]]} y={y} position="left" />
        <MobileColumn images={[images[8], images[2], images[9], images[3]]} y={y2} position="right" />
      </div>
      <div className="h-16" />
    </GalleryHeading>
  );
};

type MobileColumnProps = {
  images: string[];
  y: MotionValue<number>;
  position: "left" | "right";
};

const MobileColumn = ({ images, y, position }: MobileColumnProps) => {
  return (
    <motion.div
      className={cn(
        "flex h-max w-1/2 flex-col gap-[3vw] will-change-transform",
        position === "left" ? "translate-y-[8%]" : "translate-y-[-8%]"
      )}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={`${src}-${i}`} className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={src}
            alt="Startup Studio"
            loading="lazy"
            decoding="async"
            className="pointer-events-none block h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  offset: "desktop-first" | "desktop-second" | "desktop-third" | "desktop-fourth";
  className?: string;
};

const Column = ({ images, y, offset, className = "" }: ColumnProps) => {
  const offsetClass = {
    "desktop-first": "top-[-45%]",
    "desktop-second": "top-[-95%]",
    "desktop-third": "top-[-45%]",
    "desktop-fourth": "top-[-75%]",
  }[offset];

  return (
    <motion.div
      className={cn(
        "relative h-full flex-col gap-[4vw] will-change-transform sm:gap-[3vw] md:gap-[2vw]",
        offsetClass,
        className
      )}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div key={`${src}-${i}`} className="relative aspect-[4/3] w-full overflow-hidden">
          <img
            src={src}
            alt="Startup Studio"
            loading="lazy"
            decoding="async"
            className="pointer-events-none block h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

const GalleryHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full bg-[#0a0a0a] text-white">
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center md:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Gallery
        </span>
        <h2 className="font-serif text-4xl italic tracking-tight text-white md:text-6xl">
          Moments From Startup Studio
        </h2>
      </div>
      {children}
    </section>
  );
};

export { StartupStudioGallery };