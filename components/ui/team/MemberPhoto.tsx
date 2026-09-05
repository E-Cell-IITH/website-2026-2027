"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  name: string;
  className?: string;
  fill?: boolean;
  size?: number;
  priority?: boolean;
  sizes?: string;
  quality?: number;
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

export default function MemberPhoto({
  src,
  name,
  className = "",
  fill = false,
  size = 80,
  priority = false,
  sizes = "96px",
  quality = 60,
}: Props) {
  const [errored, setErrored] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const initials = getInitials(name);

  if (errored || !src || src === "#") {
    return (
      <div
        className={`flex items-center justify-center bg-white/[0.04] text-white/20 font-bold select-none ${className}`}
        style={{
          fontFamily: "var(--font-playfair), serif",
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

  if (fill) {
    return (
      <div className="relative w-full h-full">
        {!loaded && (
          <div className={`absolute inset-0 bg-white/[0.04] animate-pulse rounded-[3px] z-10 ${className}`} />
        )}
        <Image
          src={src}
          alt={name}
          fill
          quality={quality}
          className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          sizes={sizes}
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </div>
    );
  }

  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
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
        quality={quality}
        className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${className}`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
      />
    </div>
  );
}