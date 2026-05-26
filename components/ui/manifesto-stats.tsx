"use client";

import { useEffect, useState, useRef } from "react";

function useCountUp(end: number, duration: number = 2000, startWhenVisible: boolean = true) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(!startWhenVisible);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startWhenVisible) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Wait until 20% visible
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutQuart for smooth deceleration
      const easeProgress = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeProgress));

      if (percentage < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure we end exactly on the target number
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, isVisible]);

  return { count, elementRef };
}

interface StatProps {
  end: number;
  suffix?: string;
  label: string;
}

function Stat({ end, suffix = "", label }: StatProps) {
  const { count, elementRef } = useCountUp(end, 2500);

  return (
    <div ref={elementRef} className="flex flex-col items-center justify-center p-4">
      <div className="text-4xl md:text-6xl font-medium text-white tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-xs md:text-sm text-zinc-500 mt-3 tracking-[0.2em] uppercase font-semibold">
        {label}
      </div>
    </div>
  );
}

export function ManifestoStats() {
  return (
    <section id="about" className="relative w-full py-16 md:py-20 bg-transparent overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        {/* Part 1: Manifesto */}
        <div className="flex flex-col items-center text-center space-y-6 mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] text-zinc-500 uppercase">About Us</div>
          <h2 className="text-4xl md:text-6xl font-serif italic text-white tracking-tight">
            Where founders begin
          </h2>
          <p className="text-base md:text-lg text-zinc-400 max-w-3xl leading-relaxed">
            We at IIT Hyderabad&apos;s Entrepreneurship Cell believe in passion, hard effort, and an unquenchable drive for achievement. It is a place that is the confluence of a billion sparks of ideas, a place where the fire of passion mingles with the cold calculation of the brain, and a place where dreams come true. We are people who love nothing more than the thrill of coming up with ideas, working them out into businesses and experiencing the pleasure of watching it all come to fruition.
          </p>
        </div>

        {/* Part 2: Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 md:gap-4 border-t border-zinc-800/60 pt-10">
          <Stat end={12} suffix="+" label="Events" />
          <Stat end={200} suffix="+" label="Members" />
          <Stat end={5} suffix="" label="Startups" />
          <Stat end={8} suffix="" label="Years" />
        </div>
      </div>
    </section>
  );
}
