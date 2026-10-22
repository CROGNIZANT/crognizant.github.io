import { useState } from "react";
import projectImg from "../assets/images/project_clothing_visual_1791046669077.jpg";

interface InsistorProjectPageProps {
  onBack: () => void;
}

export default function InsistorProjectPage({ onBack }: InsistorProjectPageProps) {
  const externalUrl = "https://insistor.ai.studio";
  const [copied, setCopied] = useState(false);
  const [taskInput, setTaskInput] = useState("Architect high-velocity interactive digital experience");
  const [isProcessing, setIsProcessing] = useState(false);
  const [executionLog, setExecutionLog] = useState<string[] | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("insistor.ai.studio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRunPipeline = (e: React.FormEvent) => {
    e.preventDefault();
    if (!taskInput.trim()) return;
    setIsProcessing(true);
    setExecutionLog(null);

    setTimeout(() => {
      setIsProcessing(false);
      setExecutionLog([
        "› Initializing Insistor Core Engine...",
        "› Compiling design tokens & kinetic motion matrices...",
        "› Loading modular component architecture & WebGL shader pipelines...",
        "› Verification passed: 60fps frame budgeting, 0 layout shifts, 100/100 performance score.",
        "› Deployment live at insistor.ai.studio."
      ]);
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white selection:bg-[#c9b17a] selection:text-[#0a0a0a]">
      {/* Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1f1f1f] px-6 sm:px-10 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d887e] hover:text-[#c9b17a] transition-colors py-1 cursor-pointer"
            >
              <span className="text-base group-hover:-translate-x-1 transition-transform">←</span>
              <span>Portfolio</span>
            </button>
            <span className="text-[#333]">/</span>
            <span className="text-xs uppercase tracking-wider text-white font-bold">
              Insistor
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyLink}
              className="text-xs font-mono px-3 py-1.5 border border-[#333] hover:border-[#c9b17a] text-[#8d887e] hover:text-white transition-colors rounded-sm cursor-pointer"
            >
              {copied ? "Copied Link ✓" : "Copy Link"}
            </button>
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
            >
              <span>Launch Live</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16 space-y-16">
        {/* Hero Banner Section */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-widest text-[#c9b17a]">
            <span>Platform · 03</span>
            <span>·</span>
            <span className="text-[#8d887e]">Client: Insistor Studio</span>
            <span>·</span>
            <span className="text-[#8d887e]">Year: 2026</span>
          </div>

          <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
            Insistor
          </h1>

          <p className="text-[#cfc9bd] text-lg sm:text-xl max-w-3xl leading-relaxed font-light">
            An avant-garde digital platform and creative execution lab engineered for uncompromising digital experiences, high-performance web applications, and experimental interactive design systems.
          </p>

          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#222] bg-[#121212]">
            <img
              src={projectImg}
              alt="Insistor preview"
              className="w-full h-full object-cover filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 sm:left-10 right-6 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-mono bg-black/60 px-3 py-1.5 border border-[#333]">
                Live Architecture Preview
              </span>
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider bg-[#c9b17a] text-[#0a0a0a] px-4 py-2 hover:bg-white transition-colors"
              >
                Open Fullscreen ↗
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Engine Simulation */}
        <div className="border border-[#222] rounded-2xl bg-[#0b0b0b] p-6 sm:p-10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-manrope font-bold text-lg text-white uppercase tracking-wider">
                Interactive Execution Engine Simulation
              </h3>
            </div>
            <span className="text-xs text-[#8d887e] font-mono">Pipeline v3.1</span>
          </div>

          <form onSubmit={handleRunPipeline} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-2">
                Execution Directive
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={taskInput}
                  onChange={(e) => setTaskInput(e.target.value)}
                  className="flex-1 bg-[#121212] border border-[#262626] focus:border-[#c9b17a] rounded-xl px-4 py-3 text-sm text-white outline-none"
                  placeholder="Enter creative execution directive..."
                />
                <button
                  type="submit"
                  disabled={isProcessing}
                  className="px-6 py-3 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-wider transition-colors rounded-xl cursor-pointer disabled:opacity-50 shrink-0"
                >
                  {isProcessing ? "Processing..." : "Run Pipeline"}
                </button>
              </div>
            </div>

            {executionLog && (
              <div className="p-5 bg-[#111111] border border-[#2a2a2a] rounded-xl space-y-2 font-mono text-xs animate-fadeIn">
                <div className="flex items-center justify-between text-[#8d887e] pb-2 border-b border-[#222]">
                  <span>Directive: "{taskInput}"</span>
                  <span className="text-emerald-400 font-bold">Status: Online</span>
                </div>
                {executionLog.map((line, idx) => (
                  <div
                    key={idx}
                    className={idx === executionLog.length - 1 ? "text-[#c9b17a] font-semibold pt-1" : "text-[#cfc9bd]"}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
          </form>
        </div>

        {/* Detailed Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-2">
                Overview &amp; Vision
              </span>
              <p className="text-base sm:text-lg text-[#cfc9bd] leading-relaxed">
                Insistor is an avant-garde digital platform and creative execution lab engineered for uncompromising digital experiences, high-performance web applications, and experimental interactive design systems. Built with React, TypeScript, and modern kinetic motion choreography, it translates complex ideas into immediate, impactful web realities.
              </p>
            </div>

            <div className="border-l-2 border-[#c9b17a] bg-[#141412] p-5">
              <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-bold block mb-1">
                Key Outcome &amp; Impact
              </span>
              <p className="text-sm sm:text-base text-white font-medium">
                Autonomous creative engine driving high-performance web systems with 60fps interaction velocity.
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-4">
                Deliverables &amp; Scope
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Brand Identity & Digital Systems",
                  "Creative Frontend Engineering",
                  "Interactive Web Architecture",
                  "Motion Systems & Choreography",
                  "Performance Tuning & Optimization",
                  "Scalable Web Deployment"
                ].map((item, idx) => (
                  <div key={idx} className="p-3 bg-[#101010] border border-[#1e1e1e] flex items-center gap-3 text-sm text-[#cfc9bd]">
                    <span className="text-[#c9b17a]">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <div className="border border-[#1e1e1e] bg-[#0b0b0b] rounded-2xl p-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-3">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Tailwind", "Motion", "Vite", "Canvas"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-[#151515] border border-[#262626] text-xs font-mono text-[#c9b17a]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#1a1a1a]">
                <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-3">
                  Quick Links
                </span>
                <div className="space-y-3">
                  <a
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Launch Live App</span>
                    <span>↗</span>
                  </a>
                  <button
                    onClick={onBack}
                    className="w-full py-3 bg-[#151515] hover:bg-[#222] border border-[#333] text-[#cfc9bd] font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Back to Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
