"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const sponsors = [
    {
      name: "Bleep",
      logo: "/sponsors/bleep.svg",
      scale: 2,
    },
    {
      name: "Amazon",
      logo: "/sponsors/amazon.svg",
      scale: 0.8,
    },
    {
      name: "Uber",
      logo: "/sponsors/uber.svg",
      scale: 1,
    },
    {
      name: "UnStop",
      logo: "/sponsors/unstop.svg",
      scale: 1,
    },
    {
      name: "Henry Harvin",
      logo: "/sponsors/henry-harvin.svg",
      scale: 1,
    },
    {
      name: "ExFinity",
      logo: "/sponsors/exfinity.svg",
      scale: 1,
    },
  ];

  /*
   * Track the section's position while scrolling.
   *
   * When the section first enters the viewport:
   *   blur = 14px
   *   opacity = 0.2
   *
   * As the user scrolls:
   *   blur → 0px
   *   opacity → 1
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "start 25%"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    [14, 0]
  );

  const logoOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.2, 1]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.35, 1]
  );

  const blurFilter = useTransform(
    blur,
    (value) => `blur(${value}px)`
  );

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        border-t
        border-white/5
        bg-[#080808]
        py-32
        md:py-44
      "
    >
      <div className="relative mx-auto max-w-6xl px-6">

        {/* Heading */}
        <motion.div
          style={{ opacity: headingOpacity }}
          className="text-center"
        >
          <h2
            className="
              text-4xl
              font-semibold
              uppercase
              tracking-[-0.04em]
              text-white/75
              md:text-6xl
              lg:text-7xl
            "
          >
            Backed By
          </h2>
        </motion.div>

        {/* Sponsor Grid */}
        <motion.div
          style={{
            filter: blurFilter,
            opacity: logoOpacity,
          }}
          className="
            mx-auto
            mt-28
            grid
            max-w-9xl
            grid-cols-2
            items-center
            justify-items-center
            gap-x-10
            gap-y-16
            md:grid-cols-3
            md:gap-x-16
            md:gap-y-20
          "
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              whileHover={{
                scale: 1.06,
                opacity: 1,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                flex
                h-32
                w-full
                max-w-[260px]
                items-center
                justify-center
              "
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                style={{ transform: `scale(${sponsor.scale})` }}
                className="
                  h-full
                  w-full
                  object-contain
                  brightness-0
                  invert
                  opacity-75
                  transition-opacity
                  duration-300
                  hover:opacity-100
                "
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}