export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#1a1a1a] py-8 sm:py-10 px-6 sm:px-10 text-[#8d887e] text-xs">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>© 2026</span>
          <span className="script text-xl text-white">Krish Singh</span>
          <span>· Creative Developer</span>
        </div>

        <div className="flex items-center gap-6">
          <span>Designed &amp; built from scratch</span>
          <button
            onClick={scrollToTop}
            className="hover:text-[#c9b17a] transition-colors uppercase tracking-widest text-[0.68rem] font-bold flex items-center gap-1 cursor-pointer"
          >
            Top <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
