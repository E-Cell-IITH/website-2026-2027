"use client";

import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const images = [
  "/startup-senate/img1.webp",
  "/startup-senate/img2.webp",
  "/startup-senate/img3.webp",
  "/startup-senate/img4.webp",
  "/startup-senate/img5.webp",
  "/startup-senate/img6.webp",
];

const Skiper30 = () => {
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

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className="w-full bg-[#0a0a0a] text-white">
      <div className="flex flex-col items-center justify-center gap-3 py-16 text-center md:py-20">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Gallery
        </span>
        <h2 className="font-serif text-4xl italic tracking-tight text-white md:text-6xl">
          Moments From The Senate
        </h2>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[175vh] gap-[4vw] overflow-hidden bg-[#0a0a0a] p-[4vw] sm:gap-[3vw] sm:p-[3vw] md:gap-[2vw] md:p-[2vw]"
      >
        <Column
          images={[images[0], images[1], images[2], images[0], images[1], images[2]]}
          y={y}
          className="flex w-1/2 md:w-1/3 lg:w-1/4"
        />
        <Column
          images={[images[3], images[4], images[5], images[3], images[4], images[5]]}
          y={y2}
          className="flex w-1/2 md:w-1/3 lg:w-1/4"
        />
        <Column
          images={[images[0], images[1], images[2], images[0], images[1], images[2]]}
          y={y3}
          className="hidden md:flex md:w-1/3 lg:w-1/4"
        />
        <Column
          images={[images[3], images[4], images[5], images[3], images[4], images[5]]}
          y={y4}
          className="hidden lg:flex lg:w-1/4"
        />
      </div>

      <div className="h-16 md:h-24" />
    </main>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
  className?: string;
};

const Column = ({ images, y, className = "" }: ColumnProps) => {
  return (
    <motion.div
      className={cn(
        "relative -top-[45%] h-full flex-col gap-[4vw] first:top-[-45%] sm:gap-[3vw] md:gap-[2vw] [&:nth-child(2)]:top-[-95%] [&:nth-child(3)]:top-[-45%] [&:nth-child(4)]:top-[-75%]",
        className
      )}
      style={{ y }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-[4/3] w-full overflow-hidden"
        >
          <img
            src={src}
            alt="Startup Senate"
            className="pointer-events-none h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

/**
 * Skiper 30 Parallax_002 — React + framer motion + lenis
 * Inspired by and adapted from https://www.siena.film/films/my-project-x
 * We respect the original creators. This is an inspired rebuild with our own taste and does not claim any ownership.
 * These animations aren't associated with the siena.film . They're independent recreations meant to study interaction design
 *
 * License & Usage:
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * - No attribution required with Skiper UI Pro.
 *
 * Feedback and contributions are welcome.
 *
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me
 * Twitter: https://x.com/Gur__vi
 */