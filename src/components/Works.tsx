import { useState } from "react";
import { PROJECTS } from "../data/portfolioData";

export default function Works() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const filters = ["All", "Web App", "Marketing Agency", "Trading Journal"];

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <section id="work" className="py-24 sm:py-32 px-6 sm:px-10 text-center border-t border-[#1a1a1a]">
      {/* SVG Goo / Turbulence Filter */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <filter id="goo">
          <feTurbulence baseFrequency="0.02" numOctaves="2" result="t" />
          <feDisplacementMap in="SourceGraphic" in2="t" scale="4" />
        </filter>
      </svg>

      <div className="max-w-7xl mx-auto">
        <span className="text-[0.72rem] text-[#8d887e] tracking-[0.2em] uppercase font-bold block mb-2">
          Scroll to explore my
        </span>

        <h2 className="font-anton text-[clamp(5rem,24vw,22rem)] leading-[0.85] text-[#c9b17a] uppercase tracking-normal select-none">
          Work
        </h2>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center justify-center gap-2 mt-8 mb-12 sm:mb-16 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                activeFilter === f
                  ? "bg-[#c9b17a] text-[#0a0a0a] border-[#c9b17a]"
                  : "bg-[#0f0f0f] text-[#cfc9bd] border-[#262626] hover:border-[#8d887e]"
              }`}
            >
              {f === "All" ? "All Works" : f}
            </button>
          ))}
        </div>

        {/* Project Cards Grid - Direct External Live Links */}
        <div className="max-w-5xl mx-auto grid gap-10 text-left">
          {filteredProjects.map((project) => (
            <a
              key={project.id}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative min-h-[55vh] sm:min-h-[65vh] border border-[#1e1e1e] hover:border-[#c9b17a] overflow-hidden flex flex-col justify-end p-6 sm:p-12 isolation-auto transition-all duration-500 hover:-translate-y-1.5 cursor-pointer bg-gradient-to-br ${project.gradientClass} block`}
              aria-label={`Open live site for ${project.title}`}
            >
              {/* High-res Image Background with Scrim */}
              <div className="absolute inset-0 z-[-2] overflow-hidden opacity-30 group-hover:opacity-40 transition-opacity duration-700">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-transparent z-[-1]" />

              {/* Editorial Large Background Typography */}
              <span
                className="absolute right-[-2%] top-[6%] font-anton text-[clamp(6rem,22vw,18rem)] leading-none text-white opacity-[0.08] select-none pointer-events-none group-hover:opacity-[0.14] transition-opacity duration-500"
                aria-hidden="true"
              >
                {project.bgText}
              </span>

              {/* Top Left Project Index & Direct URL Badge */}
              <div className="absolute top-6 left-6 sm:left-12 right-6 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-[0.72rem] font-extrabold uppercase tracking-widest text-[#c9b17a]">
                    {project.number}
                  </span>
                  <span className="text-xs text-[#555]">·</span>
                  <span className="text-xs uppercase tracking-wider text-[#8d887e]">
                    {project.client}
                  </span>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#2a2a2a] group-hover:border-[#c9b17a] text-[0.7rem] font-mono text-[#c9b17a] group-hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{project.liveUrl?.replace("https://", "")} ↗</span>
                </div>
              </div>

              {/* Title & Narrative */}
              <div className="z-10 max-w-xl">
                <h3 className="font-manrope font-semibold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight uppercase group-hover:text-[#f3ebe0] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#cfc9bd] text-sm sm:text-base leading-relaxed mt-4 mb-6 max-w-lg">
                  {project.shortDesc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#2a2a2a] bg-[#101010]/80 backdrop-blur-sm rounded-full px-3 py-1 text-[0.68rem] text-[#8d887e] group-hover:text-[#cfc9bd] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile Direct Link indicator */}
                <div className="sm:hidden flex items-center gap-2 mt-4 text-xs font-mono text-[#c9b17a]">
                  <span>{project.liveUrl?.replace("https://", "")} ↗</span>
                </div>
              </div>

              {/* Floating Action Button */}
              <div
                className="absolute right-6 sm:right-12 bottom-6 sm:bottom-12 w-16 h-16 sm:w-20 sm:h-20 border border-white/60 rounded-full flex items-center justify-center text-xl sm:text-2xl text-white transition-all duration-300 group-hover:bg-[#c9b17a] group-hover:text-[#0a0a0a] group-hover:border-[#c9b17a] group-hover:rotate-45"
                aria-hidden="true"
              >
                ↗
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
