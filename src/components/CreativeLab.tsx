import { useEffect, useRef, useState } from "react";

export default function CreativeLab() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeMode, setActiveMode] = useState<"gravity" | "flow" | "matrix">("flow");
  const [particleCount, setParticleCount] = useState(80);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 360);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 360;
    };
    window.addEventListener("resize", handleResize);

    const mouse = { x: width / 2, y: height / 2, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Particle nodes
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      baseX: number;
      baseY: number;
      radius: number;
      color: string;
    }

    const goldColors = ["#c9b17a", "#e2cf9f", "#9d8752", "#f3ebe0"];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        radius: Math.random() * 2 + 1.2,
        color: goldColors[Math.floor(Math.random() * goldColors.length)],
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.fillStyle = "rgba(10, 10, 10, 0.25)";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(35, 35, 35, 0.4)";
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p, idx) => {
        if (activeMode === "flow") {
          p.x += Math.sin(time + p.baseY * 0.02) * 1.2 + p.vx;
          p.y += Math.cos(time + p.baseX * 0.02) * 0.8 + p.vy;
        } else if (activeMode === "gravity") {
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 180 && dist > 1) {
              const force = (180 - dist) / 180;
              p.vx += (dx / dist) * force * 0.6;
              p.vy += (dy / dist) * force * 0.6;
            }
          }
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;
        } else {
          // Matrix cascade
          p.y += 2.4;
          if (p.y > height) {
            p.y = 0;
            p.x = Math.random() * width;
          }
        }

        // Mouse avoidance in flow mode
        if (mouse.active && activeMode !== "gravity") {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            p.x -= (dx / dist) * 4;
            p.y -= (dy / dist) * 4;
          }
        }

        // Boundary wrapping
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect adjacent particles
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 65) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(201, 177, 122, ${0.35 * (1 - dist / 65)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [activeMode, particleCount]);

  return (
    <section id="lab" className="py-20 sm:py-28 px-6 sm:px-10 border-t border-[#1a1a1a] bg-[#070707]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[0.72rem] text-[#8d887e] tracking-[0.2em] uppercase font-bold block mb-2">
              Interactive Sandbox
            </span>
            <h3 className="font-manrope font-extrabold text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Motion Lab <span className="text-[#c9b17a]">· Canvas 2D</span>
            </h3>
            <p className="text-sm text-[#8d887e] mt-1 max-w-lg">
              Direct manipulation kinetic canvas demonstrating responsive spring forces and particle kinetics.
            </p>
          </div>

          {/* Mode Switchers */}
          <div className="flex items-center gap-2">
            {(["flow", "gravity", "matrix"] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setActiveMode(mode)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider border transition-colors ${
                  activeMode === mode
                    ? "bg-[#c9b17a] text-[#0a0a0a] border-[#c9b17a]"
                    : "bg-[#111] text-[#8d887e] border-[#262626] hover:text-white"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>

        {/* Canvas Stage */}
        <div className="relative border border-[#222] bg-[#0a0a0a] overflow-hidden group">
          <canvas
            ref={canvasRef}
            className="w-full h-[360px] block cursor-crosshair"
          />
          <div className="absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-widest text-[#8d887e] pointer-events-none">
            Interact: Move cursor inside canvas to displace field
          </div>
          <div className="absolute bottom-3 right-4 flex items-center gap-3 text-[0.65rem] uppercase tracking-widest text-[#8d887e]">
            <span>Field nodes: {particleCount}</span>
            <button
              onClick={() => setParticleCount((c) => (c === 80 ? 140 : 80))}
              className="text-[#c9b17a] hover:underline"
            >
              [Toggle Density]
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
