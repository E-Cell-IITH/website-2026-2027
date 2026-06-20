"use client";

import Image from "next/image";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  src: string;
  name: string;
  className?: string;
  fill?: boolean;
  size?: number;
  priority?: boolean;
}

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0] ?? "")
    .join("")
    .toUpperCase();
}

export default function MemberPhoto({ src, name, className = "", fill = false, size = 80, priority = false }: Props) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const initials = getInitials(name);

  if (errored || !src || src === "#") {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-center bg-white/[0.04] text-white/20 font-bold select-none ${className}`}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: size * 0.35,
          width: fill ? "100%" : size,
          height: fill ? "100%" : size,
        }}
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  if (!inView && !priority) {
    return (
      <div
        ref={ref}
        className={`bg-white/[0.04] animate-pulse rounded-[3px] ${className}`}
        style={!fill ? { width: size, height: size } : { width: "100%", height: "100%" }}
      />
    );
  }

  if (fill) {
    return (
      <div ref={ref} className="relative w-full h-full">
        {!loaded && (
          <div className={`absolute inset-0 bg-white/[0.04] animate-pulse rounded-[3px] z-10 ${className}`} />
        )}
        <Image
          src={src}
          alt={name}
          fill
          className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          sizes="(max-width: 640px) 144px, 176px"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="relative inline-block" style={{ width: size, height: size }}>
      {!loaded && (
        <div
          className={`absolute inset-0 bg-white/[0.04] animate-pulse rounded-[3px] z-10 ${className}`}
          style={{ width: size, height: size }}
        />
      )}
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        priority={priority}
      />
    </div>
  );
}