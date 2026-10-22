import { useState, useEffect } from "react";

interface NavbarProps {
  onReplayIntro?: () => void;
}

export default function Navbar({ onReplayIntro }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live India Time (IST) clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Spend Tracker", href: "https://spendtrackrr.ai.studio", isApp: true, isExternal: true },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Lab", href: "#lab" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 py-5 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/85 backdrop-blur-md border-b border-[#222]"
            : "mix-blend-difference text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#top"
            className="script text-4xl sm:text-5xl tracking-normal text-white hover:text-[#c9b17a] transition-colors leading-none pt-1"
            aria-label="Krish Singh Homepage"
          >
            Krish
          </a>

          {/* Zone 2: 4-6 Nav Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-7 text-[0.78rem] font-extrabold uppercase tracking-wider text-white"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                onClick={handleNavClick}
                className={`relative py-1 transition-colors group flex items-center gap-1.5 ${
                  link.isApp ? "text-[#c9b17a] hover:text-white" : "hover:text-[#c9b17a]"
                }`}
              >
                {link.isApp && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9b17a] animate-pulse" />
                )}
                <span>{link.label}</span>
                {link.isApp && <span className="text-[0.65rem] opacity-75">↗</span>}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#c9b17a] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Time badge, primary CTA & Mobile Menu Toggle) */}
          <div className="flex items-center gap-4">
            {/* Live IST Clock */}
            <div className="hidden lg:flex items-center gap-2 text-[0.7rem] uppercase tracking-widest text-[#8d887e]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono tabular-nums text-[#cfc9bd]">{currentTime || "IST"}</span>
              <span>· India</span>
            </div>

            {/* Direct Contact Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0a0a0a] bg-[#c9b17a] hover:bg-white transition-colors rounded-sm"
            >
              Let&apos;s Talk ↗
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="bt"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-2xl text-white hover:text-[#c9b17a] p-1.5 focus-visible:outline-none"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Circular Clip-Path Overlay */}
      <div
        className={`fixed inset-0 bg-[#050505] z-30 flex flex-col items-center justify-center gap-8 transition-[clip-path] duration-700 ease-[cubic-bezier(0.7,0,0.2,1)] ${
          isOpen
            ? "[clip-path:circle(150%_at_95%_5%)] pointer-events-auto"
            : "[clip-path:circle(0%_at_95%_5%)] pointer-events-none"
        }`}
      >
        <div className="text-center mb-4">
          <span className="script text-6xl text-[#c9b17a] block">Krish Singh</span>
          <span className="text-xs uppercase tracking-widest text-[#8d887e] mt-1 block">
            Creative Developer · India
          </span>
        </div>

        <nav className="flex flex-col items-center gap-5 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              onClick={handleNavClick}
              className={`font-manrope font-extrabold text-3xl sm:text-4xl uppercase tracking-tight transition-colors flex items-center gap-2 ${
                link.isApp ? "text-[#c9b17a]" : "text-white hover:text-[#c9b17a]"
              }`}
            >
              <span>{link.label}</span>
              {link.isApp && <span className="text-xl">↗</span>}
            </a>
          ))}
        </nav>

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-xs uppercase tracking-widest text-[#8d887e] hover:text-[#c9b17a] transition-colors font-bold"
          >
            Get in touch ↗
          </a>
          <div className="flex items-center gap-4 text-xs uppercase tracking-wider text-[#c9b17a]">
            <span>© 2026</span>
            <span>·</span>
            <span>Available for Freelance</span>
          </div>
          {onReplayIntro && (
            <button
              onClick={() => {
                setIsOpen(false);
                onReplayIntro();
              }}
              className="mt-4 text-xs font-semibold text-[#8d887e] hover:text-[#c9b17a] underline cursor-pointer"
            >
              Replay Intro Animation
            </button>
          )}
        </div>
      </div>
    </>
  );
}
