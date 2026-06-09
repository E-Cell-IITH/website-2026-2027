"use client";

import Image from "next/image";
import { useState } from "react";

interface Props {
  src: string;
  name: string;
  className?: string;
  fill?: boolean;
  size?: number;
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

export default function MemberPhoto({ src, name, className = "", fill = false, size = 80 }: Props) {
  const [errored, setErrored] = useState(false);
  const initials = getInitials(name);

  if (errored) {
    return (
      <div
        className={`flex items-center justify-center bg-white/[0.04] text-white/20 font-bold select-none ${className}`}
        style={{ fontFamily: "'Playfair Display', serif", fontSize: size * 0.35 }}
        aria-label={name}
      >
        {initials}
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={name}
        fill
        className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-300 ${className}`}
        onError={() => setErrored(true)}
        sizes="(max-width:768px) 50vw, 25vw"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      width={size}
      height={size}
      className={`object-cover object-top grayscale-[20%] hover:grayscale-0 transition-all duration-300 ${className}`}
      onError={() => setErrored(true)}
    />
  );
}