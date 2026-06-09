"use client";

import { useEffect, useRef } from "react";

export default function TeamWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const cx = cv.getContext("2d");
    if (!cx) return;

    let W = 0, H = 0, animId: number;

    function resize() {
      if (!cv) return;
      W = cv.offsetWidth;
      H = cv.offsetHeight;
      cv.width = W * devicePixelRatio;
      cv.height = H * devicePixelRatio;
      cx!.scale(devicePixelRatio, devicePixelRatio);
    }

    // ✅ resize FIRST so W and H are set before particles are created
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 2200;
    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * (W + 400) - 200,
      baseY: Math.random(),
      offset: Math.random() * Math.PI * 2,
      amp: 16 + Math.random() * 60,
      freq: 0.003 + Math.random() * 0.006,
      speed: 0.15 + Math.random() * 0.45,
      size: 0.35 + Math.random() * 0.85,
      lane: Math.random(),
      flicker: Math.random(),
    }));

    let t = 0;

    function frame() {
      cx!.clearRect(0, 0, W, H);
      t += 0.007;

      for (const p of pts) {
        p.x += p.speed * 0.38;
        if (p.x > W + 200) p.x = -200;

        const waveY =
          p.baseY * H +
          Math.sin(p.x * p.freq + t + p.offset) * p.amp +
          Math.sin(p.x * p.freq * 0.4 + t * 0.6 + p.offset) * p.amp * 0.4;

        const distFromCenter = Math.abs(waveY - H * 0.52) / (H * 0.46);
        const bandAlpha = Math.max(0, 1 - distFromCenter * 1.55);
        if (bandAlpha < 0.01) continue;

        const flicker = 0.6 + p.flicker * 0.4;
        const alpha = bandAlpha * flicker * (0.18 + Math.random() * 0.32);

        const pinkAmount = Math.max(0, (p.lane - 0.45) * 2);
        const r = Math.round(175 + 65 * pinkAmount);
        const g = Math.round(172 - 85 * pinkAmount);
        const b = Math.round(188 - 15 * pinkAmount);

        cx!.beginPath();
        cx!.arc(p.x, waveY, p.size, 0, Math.PI * 2);
        cx!.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        cx!.fill();
      }

      animId = requestAnimationFrame(frame);
    }

    frame();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
      aria-hidden
    />
  );
}