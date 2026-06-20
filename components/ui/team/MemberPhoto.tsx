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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const initials = getInitials(name);

  if (errored || !src || src === "#") {
    return (
      <div
        ref={ref}
        className={`w-full h-full flex items-center justify-center bg-white/[0.04] text-white/20 font-bold select-none ${className}`}
        style={{ fontFamily: "'Playfair Display', serif", fontSize: size * 0.35 }}
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  if (!inView && !priority) {
    return (
      <div ref={ref} className="w-full h-full" />
    );
  }

  if (fill) {
    return (
      <div ref={ref} className="w-full h-full">
        <Image
          src={src}
          alt={name}
          fill
          className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-300 ${className}`}
          onError={() => setErrored(true)}
          sizes="(max-width:768px) 50vw, 25vw"
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    );
  }

  return (
    <div ref={ref}>
      <Image
        src={src}
        alt={name}
        width={size}
        height={size}
        className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-300 ${className}`}
        onError={() => setErrored(true)}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}