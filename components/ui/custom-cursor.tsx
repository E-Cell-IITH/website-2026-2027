"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject global styles to hide the default cursor
    const style = document.createElement("style");
    style.innerHTML = `* { cursor: none !important; }`;
    document.head.appendChild(style);

    const mouse = { x: typeof window !== 'undefined' ? window.innerWidth / 2 : 0, y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0 };
    const springCursor = { x: mouse.x, y: mouse.y, vx: 0, vy: 0 };
    const scale = { current: 1, target: 1, v: 0 };

    // Physics configuration: Increased for a faster follow
    const stiffness = 300;
    const damping = 24;
    const mass = 1;

    let rafId: number;
    let lastTime = performance.now();

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const onMouseDown = () => {
      scale.target = 0.85; // Shrink slightly on click
    };

    const onMouseUp = () => {
      scale.target = 1;
    };

    const update = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05); // Max 50ms step to avoid huge jumps
      lastTime = time;

      // Spring physics for cursor position
      const fx = -stiffness * (springCursor.x - mouse.x) - damping * springCursor.vx;
      const fy = -stiffness * (springCursor.y - mouse.y) - damping * springCursor.vy;

      springCursor.vx += (fx / mass) * dt;
      springCursor.vy += (fy / mass) * dt;

      springCursor.x += springCursor.vx * dt;
      springCursor.y += springCursor.vy * dt;

      // Spring physics for scale
      const scaleStiffness = 300;
      const scaleDamping = 20;
      const fScale = -scaleStiffness * (scale.current - scale.target) - scaleDamping * scale.v;

      scale.v += (fScale / mass) * dt;
      scale.current += scale.v * dt;

      if (cursorRef.current) {
        // Offset by -3px to align the tip of the SVG arrow exactly with the mouse hit-box
        cursorRef.current.style.transform = `translate3d(${springCursor.x - 3}px, ${springCursor.y - 3}px, 0) scale(${scale.current})`;
      }

      rafId = requestAnimationFrame(update);
    };

    const isInteractive = (target: HTMLElement) => {
      return (
        target.tagName?.toLowerCase() === "a" ||
        target.tagName?.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        window.getComputedStyle(target).cursor === "pointer"
      );
    };

    const onMouseOver = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) {
        scale.target = 1.25; // Scale up slightly on hover
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (isInteractive(e.target as HTMLElement)) {
        scale.target = 1;
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    // Initial positioning
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${springCursor.x - 3}px, ${springCursor.y - 3}px, 0) scale(${scale.current})`;
    }

    rafId = requestAnimationFrame(update);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed left-0 top-0 z-[10000]"
      style={{ transformOrigin: "3px 3px" }} // Origin at the tip of the arrow for accurate scaling
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md"
      >
        <path
          d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
          fill="white"
          stroke="black"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
