export default function About() {
  const stats = [
    { label: "Based", value: "India", highlight: false },
    { label: "Focus", value: "Web / Motion", highlight: false },
    { label: "Building websites", value: "Every day", highlight: false },
    { label: "Mindset", value: "Always learning", highlight: true },
    { label: "Stack", value: "HTML · CSS · JS · React", highlight: false },
    { label: "Status", value: "Open to work", highlight: true, dot: true },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-6 sm:px-10 max-w-5xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-6">
        <h2 className="font-anton text-5xl sm:text-7xl md:text-8xl text-[#c9b17a] uppercase tracking-normal">
          About me
        </h2>
        {/* Curved Gold Arc */}
        <svg
          className="w-full max-w-xl mx-auto mt-2 h-7"
          viewBox="0 0 560 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 4 Q280 34 560 4"
            fill="none"
            stroke="#c9b17a"
            strokeWidth="2.2"
          />
        </svg>
      </div>

      {/* Editorial Content Container */}
      <div className="mt-12 bg-[#0a0a0a] border border-[#1f1f1f] p-8 sm:p-14 rounded-sm relative">
        {/* Corner framing marks */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#c9b17a]/50 pointer-events-none" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#c9b17a]/50 pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#c9b17a]/50 pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#c9b17a]/50 pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center sm:text-left">
          <span className="text-[0.72rem] text-[#8d887e] tracking-[0.2em] uppercase font-bold block mb-3">
            Who am I?
          </span>

          <h3 className="font-manrope font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.08] mb-6 text-white text-balance">
            I build <span className="text-[#c9b17a]">digital worlds</span> where design meets{" "}
            <span className="text-[#c9b17a]">code.</span>
          </h3>

          <p className="text-[#cfc9bd] text-base sm:text-xl leading-relaxed mb-5 font-normal">
            I&apos;m Krish Singh, a creative front-end developer who enjoys turning ideas, interfaces,
            and motion into experiences people remember.
          </p>

          <p className="text-[#a8a39a] text-base sm:text-lg leading-relaxed mb-10 font-normal">
            I care about the details most people don&apos;t notice: the rhythm of typography, the timing
            of an interaction, and the tiny moments that make a digital product feel alive.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-[#222]">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col text-left">
                <small className="text-[0.65rem] tracking-[0.15em] text-[#8d887e] uppercase font-medium mb-1">
                  {stat.label}
                </small>
                <div className="flex items-center gap-2">
                  {stat.dot && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                  <b
                    className={`text-sm sm:text-base font-bold uppercase tracking-tight ${
                      stat.highlight ? "text-[#c9b17a]" : "text-white"
                    }`}
                  >
                    {stat.value}
                  </b>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Navigation */}
          <div className="mt-10 pt-8 border-t border-[#1d1d1d] flex flex-wrap items-center justify-between gap-4 text-xs font-bold uppercase tracking-wider text-[#8d887e]">
            <div className="flex items-center gap-6">
              <a
                href="#expertise"
                className="text-[#c9b17a] hover:text-white transition-colors flex items-center gap-1.5"
              >
                Explore Expertise <span>↓</span>
              </a>
              <span className="text-[#333]">·</span>
              <a
                href="#work"
                className="hover:text-[#c9b17a] transition-colors flex items-center gap-1.5"
              >
                View Selected Works <span>↗</span>
              </a>
            </div>

            <a
              href="#contact"
              className="hover:text-white transition-colors text-[#cfc9bd]"
            >
              Get in Touch <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
