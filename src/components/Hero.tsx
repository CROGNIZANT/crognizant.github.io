import { useState } from "react";

export default function Hero() {
  const letters = ["C", "R", "E", "A", "T", "I", "V", "E"];
  const [activeLetter, setActiveLetter] = useState<number | null>(null);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] bg-[#f3ebe0] text-[#0a0a0a] flex flex-col items-center justify-center px-4 sm:px-8 pt-24 pb-20 overflow-hidden select-none"
    >
      {/* Background subtle noise or watermark-free clean cream canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(#0a0a0a_0.75px,transparent_0.75px)] [background-size:28px_28px] opacity-[0.04] pointer-events-none" />

      {/* Main Kinetic Typography */}
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center z-10">
        <h1
          className="font-anton text-[clamp(4.2rem,22vw,22rem)] leading-[0.82] tracking-[-0.01em] uppercase flex justify-center scale-x-[1.03] cursor-default"
          aria-label="Creative"
        >
          {letters.map((char, index) => (
            <span
              key={index}
              onMouseEnter={() => setActiveLetter(index)}
              onMouseLeave={() => setActiveLetter(null)}
              onClick={() => {
                setActiveLetter(index);
                setTimeout(() => setActiveLetter(null), 500);
              }}
              className={`inline-block transition-transform duration-300 ease-[cubic-bezier(0.3,1.6,0.5,1)] hover:scale-y-[1.12] hover:-skew-x-[6deg] hover:text-[#b89c5a] active:scale-95 ${
                activeLetter === index ? "scale-y-[1.14] -skew-x-[7deg] text-[#b89c5a]" : ""
              }`}
            >
              {char}
            </span>
          ))}
        </h1>

        <div className="font-anton text-[clamp(1.8rem,5.8vw,4.8rem)] leading-none uppercase tracking-normal mt-2 text-[#0a0a0a]">
          Developer
        </div>

        {/* Clean unboxed tags with subtle separators */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 font-extrabold text-[0.72rem] sm:text-xs uppercase tracking-widest text-[#0a0a0a] mt-6">
          <span>Visuals</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" aria-hidden="true" />
          <span>Code</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0a0a0a]" aria-hidden="true" />
          <span>Experience</span>
        </div>
      </div>

      {/* Bottom Row - 3 Zones */}
      {/* Left: Copyright with Signature */}
      <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-10 text-[0.72rem] font-extrabold uppercase tracking-wider text-[#0a0a0a] flex items-baseline gap-2 z-10">
        <span>©2026</span>
        <span className="script text-2xl sm:text-3xl font-normal lowercase tracking-normal text-[#0a0a0a]">
          Krish Singh
        </span>
      </div>

      {/* Center: Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center text-[0.7rem] font-extrabold uppercase tracking-widest text-[#0a0a0a] z-10">
        <span>Scroll to explore</span>
        <span
          className="block w-[1.5px] h-6 bg-[#0a0a0a] mt-2 animate-drop-line"
          aria-hidden="true"
        />
      </div>

      {/* Right: Spinning circular badge CTA & Location */}
      <a
        href="#contact"
        className="absolute bottom-5 sm:bottom-7 right-4 sm:right-10 flex flex-col items-center group z-10 text-center"
        aria-label="Let's work together - Based in India"
      >
        <div className="relative w-[78px] h-[78px] sm:w-[94px] sm:h-[94px] flex items-center justify-center mb-1.5">
          {/* Rotating Text Path SVG */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-spin-badge group-hover:[animation-duration:6s] transition-all"
            aria-hidden="true"
          >
            <defs>
              <path
                id="textPathCircle"
                d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
              />
            </defs>
            <text
              fontSize="9.4"
              fontWeight="800"
              fill="#0a0a0a"
              letterSpacing="2.1"
              className="uppercase"
            >
              <textPath href="#textPathCircle">
                LET&apos;S WORK TOGETHER • LET&apos;S WORK TOGETHER •
              </textPath>
            </text>
          </svg>

          {/* Center Arrow */}
          <span className="text-lg sm:text-xl font-bold transition-transform duration-300 group-hover:scale-125 group-hover:rotate-45 text-[#0a0a0a]">
            ↗
          </span>
        </div>

        <span className="text-[0.68rem] font-extrabold uppercase tracking-widest text-[#0a0a0a] opacity-80 group-hover:opacity-100 transition-opacity">
          Based in India
        </span>
      </a>
    </section>
  );
}
