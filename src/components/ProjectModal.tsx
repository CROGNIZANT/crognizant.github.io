import { useEffect } from "react";
import { Project } from "../data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click dismiss */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c0c0c] border border-[#262626] shadow-2xl overflow-y-auto flex flex-col z-10 text-white rounded-none">
        {/* Top Header Bar */}
        <div className="sticky top-0 bg-[#0c0c0c]/95 backdrop-blur-sm border-b border-[#222] px-6 py-4 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-bold">
              {project.number}
            </span>
            <span className="text-[#444]">·</span>
            <span className="text-xs uppercase tracking-wider text-[#8d887e]">
              Client: {project.client} ({project.year})
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 border border-[#333] hover:border-[#c9b17a] hover:text-[#c9b17a] flex items-center justify-center text-sm transition-colors"
            aria-label="Close project modal"
          >
            ✕
          </button>
        </div>

        {/* Hero Visual Area */}
        <div className="relative w-full aspect-[16/9] bg-[#141414] overflow-hidden border-b border-[#222]">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-black/30 pointer-events-none" />
          <div className="absolute bottom-6 left-6 sm:left-8 right-6">
            <h3
              id="modal-title"
              className="font-manrope font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white drop-shadow-md"
            >
              {project.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-2">
              Overview &amp; Vision
            </span>
            <p className="text-base sm:text-lg text-[#cfc9bd] leading-relaxed max-w-3xl">
              {project.fullDesc}
            </p>
          </div>

          {/* Highlight Callout */}
          <div className="border-l-2 border-[#c9b17a] bg-[#141412] p-4 sm:p-5">
            <span className="text-xs uppercase tracking-widest text-[#c9b17a] font-bold block mb-1">
              Key Outcome &amp; Impact
            </span>
            <p className="text-sm sm:text-base text-white font-medium">
              {project.highlight}
            </p>
          </div>

          {/* Deliverables & Tech Stack Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#222]">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-3">
                Deliverables &amp; Scope
              </span>
              <ul className="space-y-2 text-sm text-[#b9b4aa]">
                {project.deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#c9b17a]">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#8d887e] font-semibold block mb-3">
                Technologies Utilized
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 border border-[#333] bg-[#151515] text-xs uppercase tracking-wider text-[#cfc9bd]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-[#222] flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  Launch Live App <span>↗</span>
                </a>
              ) : (
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-6 py-3 bg-[#c9b17a] hover:bg-white text-[#0a0a0a] text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  Inquire Similar Project <span>↗</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href="#contact"
                  onClick={onClose}
                  className="px-5 py-3 border border-[#333] hover:border-white text-xs font-bold uppercase tracking-wider text-[#cfc9bd] transition-colors"
                >
                  Contact About This ↗
                </a>
              )}
              <button
                onClick={onClose}
                className="px-5 py-3 border border-[#333] hover:border-white text-xs font-bold uppercase tracking-wider text-[#cfc9bd] transition-colors"
              >
                Close Case
              </button>
            </div>
            <span className="text-xs text-[#666] font-mono">
              Krish Singh — Creative Developer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
