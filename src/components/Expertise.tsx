import { useState } from "react";
import { EXPERTISE_LIST, ExpertiseItem } from "../data/portfolioData";

export default function Expertise() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleRow = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="expertise" className="py-24 sm:py-32 px-6 sm:px-10 border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] gap-12 lg:gap-16 items-start bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:60px_60px] p-6 sm:p-10 rounded-sm">
        {/* Left Sticky Column */}
        <div className="lg:sticky lg:top-28">
          <span className="text-[0.72rem] text-[#8d887e] tracking-[0.2em] uppercase font-bold block mb-2">
            Capabilities &amp; Craft
          </span>
          <h2 className="font-manrope font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.95] text-white">
            My<br />
            Expertise<span className="text-[#666]">.</span>
          </h2>
          <p className="mt-6 text-[#b9b4aa] text-base sm:text-lg leading-relaxed max-w-sm">
            I design and build digital experiences where{" "}
            <b className="text-[#c9b17a] font-bold">design, code and motion</b> work as one.
          </p>

          <div className="mt-8 pt-8 border-t border-[#222] max-w-sm">
            <span className="text-xs uppercase tracking-widest text-[#8d887e] block mb-2 font-semibold">
              Approach
            </span>
            <p className="text-sm text-[#8d887e] leading-relaxed">
              Every interface is built from scratch with zero dependency bloat, strict 60fps/120fps
              rendering targets, and responsive mathematical typography.
            </p>
          </div>
        </div>

        {/* Right Interactive Rows Column */}
        <div className="flex flex-col border-t border-[#1d1d1d]">
          {EXPERTISE_LIST.map((item: ExpertiseItem, index: number) => {
            const isExpanded = expandedIndex === index;
            return (
              <div
                key={item.title}
                onClick={() => toggleRow(index)}
                className={`group border-b border-[#1d1d1d] py-7 px-4 sm:px-6 cursor-pointer transition-all duration-300 ${
                  isExpanded ? "bg-[#111111] pl-6 sm:pl-8 border-l-2 border-l-[#c9b17a]" : "hover:bg-[#0c0c0c] hover:pl-6"
                }`}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleRow(index);
                  }
                }}
              >
                <div className="flex items-start gap-5">
                  {/* Icon Box */}
                  <div className="w-11 h-11 border border-[#2a2a2a] group-hover:border-[#c9b17a]/60 bg-[#0a0a0a] flex items-center justify-center text-[#c9b17a] font-mono text-base shrink-0 transition-colors">
                    {item.icon}
                  </div>

                  {/* Text Details */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-manrope font-semibold text-xl sm:text-2xl text-white group-hover:text-[#c9b17a] transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-sm text-[#8d887e] group-hover:text-[#c9b17a] transition-colors">
                        {isExpanded ? "—" : "+"}
                      </span>
                    </div>

                    <p className="text-[#8d887e] text-sm sm:text-base leading-relaxed mt-2 max-w-xl">
                      {item.description}
                    </p>

                    {/* Unboxed tech metadata */}
                    <div className="flex flex-wrap items-center gap-2 mt-4 text-[0.7rem] uppercase tracking-wider text-[#cfc9bd]">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tag} className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 border border-[#2a2a2a] bg-[#141414] text-[#cfc9bd] rounded-sm">
                            {tag}
                          </span>
                          {tIdx < item.tags.length - 1 && (
                            <span className="text-[#444]" aria-hidden="true">·</span>
                          )}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Breakdown */}
                    {isExpanded && (
                      <div className="mt-5 pt-4 border-t border-[#222] animate-fadeIn">
                        <span className="text-[0.68rem] uppercase tracking-widest text-[#c9b17a] block mb-2 font-bold">
                          Key Deliverables &amp; Principles
                        </span>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#b9b4aa]">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx} className="flex items-baseline gap-2">
                              <span className="text-[#c9b17a] font-bold">↳</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
