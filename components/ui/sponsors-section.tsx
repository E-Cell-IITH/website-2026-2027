"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function SponsorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const sponsors = [
    {
      name: "Amazon",
      logo: "/sponsors/amazon.svg",
    },
    {
      name: "UnStop",
      logo: "/sponsors/unstop.svg",
    },
    {
      name: "Uber",
      logo: "/sponsors/uber.svg",
    },
    {
      name: "Henry Harvin",
      logo: "/sponsors/henry-harvin.svg",
    },
    {
      name: "ExFinity",
      logo: "/sponsors/exfinity.svg",
    },
    {
      name: "Bleep",
      logo: "/sponsors/bleep.png",
    },
  ];

  /*
   * Track how far the sponsor section has entered
   * the viewport.
   *
   * When the section enters:
   * blur = 12px
   * opacity = 0.25
   *
   * When the section is fully revealed:
   * blur = 0px
   * opacity = 1
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "start 30%"],
  });

  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    [12, 0]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.25, 1]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.4, 1]
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
        bg-[#111111]
        py-32
        md:py-40
      "
    >
      {/* Subtle ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-white/[0.015]
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-5xl px-6">

        {/* Header */}
        <motion.div
          style={{ opacity: headingOpacity }}
          className="text-center"
        >
          <h2
            className="
              text-2xl
              font-medium
              tracking-tight
              text-white/70
              md:text-[29px]
            "
          >
            Trusted by modern operators across industries.
          </h2>

          <p
            className="
              mt-2
              text-xl
              tracking-tight
              text-white/25
              md:text-[27px]
            "
          >
            From pilot to scale without chaos.
          </p>
        </motion.div>

        {/* Sponsor Grid */}
        <motion.div
          style={{
            filter: useTransform(
              blur,
              (value) => `blur(${value}px)`
            ),
            opacity,
          }}
          className="
            mx-auto
            mt-24
            grid
            max-w-[700px]
            grid-cols-3
            items-center
            justify-items-center
            gap-x-12
            gap-y-16
            md:gap-x-20
            md:gap-y-20
          "
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.name}
              whileHover={{
                scale: 1.05,
                opacity: 1,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
                flex
                h-16
                w-full
                items-center
                justify-center
              "
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="
                  max-h-12
                  max-w-[150px]
                  object-contain
                  brightness-0
                  invert
                  opacity-70
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