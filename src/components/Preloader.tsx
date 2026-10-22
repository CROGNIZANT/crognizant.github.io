import { useEffect, useState } from "react";

interface PreloaderProps {
  onComplete?: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [showHello, setShowHello] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current = Math.min(100, current + Math.ceil(Math.random() * 9));
      setPercent(current);

      if (current >= 100) {
        clearInterval(interval);
        setShowHello(true);
        const timer = setTimeout(() => {
          setIsDismissed(true);
          onComplete?.();
        }, 850);
        return () => clearTimeout(timer);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDismissed(true);
    onComplete?.();
  };

  return (
    <div
      className={`fixed inset-0 bg-[#050505] z-50 flex flex-col items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.7,0,0.2,1)] ${
        isDismissed ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      <div className="relative w-full max-w-sm h-48 flex items-center justify-center">
        {/* Percentage Counter */}
        <span
          className={`font-anton text-7xl sm:text-8xl text-[#c9b17a] transition-opacity duration-300 tabular-nums ${
            showHello ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          {percent}%
        </span>

        {/* Cursive Hello */}
        <span
          className={`script text-8xl sm:text-9xl text-[#c9b17a] absolute transition-all duration-500 transform ${
            showHello
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-4 pointer-events-none"
          }`}
        >
          hello
        </span>
      </div>

      {/* Subtle skip prompt */}
      {!isDismissed && (
        <button
          onClick={handleSkip}
          className="absolute bottom-10 text-xs font-semibold uppercase tracking-widest text-[#8d887e] hover:text-[#c9b17a] transition-colors py-2 px-4 cursor-pointer"
        >
          Skip Intro →
        </button>
      )}
    </div>
  );
}
