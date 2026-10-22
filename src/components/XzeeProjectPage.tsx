import { useState } from "react";
import projectImg from "../assets/images/project_portfolio_visual_1791046656795.jpg";

interface XzeeProjectPageProps {
  onBack: () => void;
}

export default function XzeeProjectPage({ onBack }: XzeeProjectPageProps) {
  const externalUrl = "https://xzeeofc.ai.studio";
  const [copied, setCopied] = useState(false);
  const [promptText, setPromptText] = useState("Design a futuristic AI interface with kinetic typography");
  const [isGenerating, setIsGenerating] = useState(false);
  const [outputResult, setOutputResult] = useState<string | null>(null);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("xzeeofc.ai.studio");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSimulateAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptText.trim()) return;
    setIsGenerating(true);
    setOutputResult(null);

    setTimeout(() => {
      setIsGenerating(false);
      setOutputResult(`Generated UI Schema & Code for: "${promptText}"\n\nStatus: Compiled successfully with React 19 & Tailwind CSS v4. Zero layout shift. Motion choreography loaded.`);
    }, 900);
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
              XZEE
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
            <span>AI Studio · 02</span>
            <span>·</span>
            <span className="text-[#8d887e]">Client: Xzee / Personal Studio</span>
            <span>·</span>
            <span className="text-[#8d887e]">Year: 2026</span>
          </div>

          <h1 className="font-manrope font-extrabold text-5xl sm:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-none">
            XZEE
          </h1>

          <p className="text-[#cfc9bd] text-lg sm:text-xl max-w-3xl leading-relaxed font-light">
            An immersive digital workspace and creative platform showcasing next-generation AI interfaces, generative prompt workflows, and high-performance UI choreography.
          </p>

          <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#222] bg-[#121212]">
            <img
              src={projectImg}
              alt="XZEE preview"
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

        {/* Interactive Workspace Sandbox Preview */}
        <div className="border border-[#222] rounded-2xl bg-[#0b0b0b] p-6 sm:p-10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-manrope font-bold text-lg text-white uppercase tracking-wider">
                Interactive Generative Workspace Simulation
              </h3>
            </div>
            <span className="text-xs text-[#8d887e] font-mono">Sandbox Mode</span>
          </div>

          <form onSubmit={handleSimulateAI} className="space-y-4">
            <div>
              <label className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-2">
                Test Prompt Engine
              </label>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={promptText}
                  onChange={(e) => setPromptText(e.target.value)}
                  className="flex-1 bg-[#121212] border border-[#262626] focus:border-[#c9b17a] rounded-xl px-4 py-3 text-sm text-white outline-none"
                  placeholder="Enter design prompt..."
                />
                <button
                  type="submit"
                  disabled={isGenerating}
                  className="px-6 py-3 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-wider transition-colors rounded-xl cursor-pointer disabled:opacity-50 shrink-0"
                >
                  {isGenerating ? "Processing..." : "Generate UI"}
                </button>
              </div>
            </div>

            {outputResult && (
              <div className="p-4 bg-[#111111] border border-[#2a2a2a] rounded-xl font-mono text-xs text-[#c9b17a] space-y-2 animate-fadeIn">
                <div className="flex items-center justify-between text-[#8d887e]">
                  <span>Execution Output</span>
                  <span>100% Success</span>
                </div>
                <div className="text-white whitespace-pre-wrap">{outputResult}</div>
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
                XZEE is an advanced creative suite and digital workspace designed to explore prompt engineering, generative multimodal systems, and high-performance interactive UI components. Built with React, TypeScript, and Tailwind, it delivers sub-second fluid interactions and clean architectural scalability.
              </p>
            </div>

            <div className="border-l-2 border-[#c9b17a] bg-[#141412] p-5">
              <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-bold block mb-1">
                Key Outcome &amp; Impact
              </span>
              <p className="text-sm sm:text-base text-white font-medium">
                Integrated multimodal intelligence with sub-second execution and responsive fluid layouts.
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-4">
                Deliverables &amp; Scope
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "System Architecture",
                  "Interactive Workflows",
                  "Generative UI Components",
                  "Design Systems & Tokens",
                  "Performance Optimization",
                  "Responsive Layout Engineering"
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
                  {["React", "TypeScript", "Tailwind", "AI API", "Vite"].map((tech) => (
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
