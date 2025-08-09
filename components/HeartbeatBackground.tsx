"use client";
import { useEffect, useRef } from "react";

export default function SpiderwebHeartbeatBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let rotation = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.innerWidth;
      const h = window.innerHeight;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      ctx.clearRect(0, 0, w, h);

      // background subtle
      ctx.fillStyle = "rgba(196, 199, 207, 0.7)";
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const maxRadius = Math.min(w, h) * 0.45;

      // Settings
      const spokes = 18; // number of radial lines
      const rings = 8; // number of concentric rings
      const ringGap = maxRadius / rings;

      // Rotation slowly changes
      rotation += 0.0008; // speed

      // Draw concentric rings (web)
      for (let r = 1; r <= rings; r++) {
        const radius = r * ringGap;
        // line alpha varies with radius
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255,0,0, ${0.04 + (rings - r) * 0.01})`;
        ctx.lineWidth = 1;
        // draw ring with small dashed effect
        const segments = 160;
        for (let s = 0; s <= segments; s++) {
          const angle = (s / segments) * Math.PI * 2 + rotation * (r % 2 ? 1 : -1) * 0.2;
          const x = cx + Math.cos(angle) * radius;
          const y = cy + Math.sin(angle) * radius;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Draw spokes (radial lines)
      for (let i = 0; i < spokes; i++) {
        const angle = (i / spokes) * Math.PI * 2 + rotation;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        const endX = cx + Math.cos(angle) * maxRadius;
        const endY = cy + Math.sin(angle) * maxRadius;
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = `rgba(255, 0, 0, 0.08)`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Optional: small moving tech particles along rings
      const now = Date.now() / 1000;
      const particles = 40;
      for (let p = 0; p < particles; p++) {
        const ringIndex = (p % rings) + 1;
        const baseRadius = ringIndex * ringGap;
        const t = now * (0.2 + (ringIndex % 3) * 0.03) + p;
        const angle = (t % (Math.PI * 2));
        const px = cx + Math.cos(angle + rotation) * baseRadius;
        const py = cy + Math.sin(angle + rotation) * baseRadius;
        const alpha = 0.6 - (ringIndex / rings) * 0.5;
        ctx.beginPath();
        ctx.fillStyle = `rgba(255,0,0,${alpha})`;
        ctx.arc(px, py, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* ECG overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
        style={{ mixBlendMode: "screen", opacity: 0.95 }}
      >
        <path
          d="M0 100 L100 100 L150 50 L200 150 L250 100 L300 100 L350 50 L400 150 L450 100 L550 100 L600 60 L650 140 L700 100 L1000 100"
          fill="none"
          stroke="#FF0000"
          strokeWidth="2"
          className="ecg-path"
        />
      </svg>

      {/* glow + animation */}
      <style jsx>{`
        .ecg-path {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: ecg-draw 4s linear infinite;
          filter: drop-shadow(0 0 6px rgba(255, 0, 0, 0.9)) saturate(1.3);
        }
        @keyframes ecg-draw {
          0% {
            stroke-dashoffset: 1400;
            opacity: 0.9;
          }
          50% {
            stroke-dashoffset: 0;
            opacity: 1;
            filter: drop-shadow(0 0 10px rgba(255, 0, 0, 0.9));
          }
          100% {
            stroke-dashoffset: -1400;
            opacity: 0.9;
          }
        }
      `}</style>
    </div>
  );
}
