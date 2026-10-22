export default function Marquee() {
  const items = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "GSAP",
    "Tailwind",
    "Motion",
    "UI/UX",
    "TypeScript",
    "WebGL",
    "Next.js",
    "Creative Direction",
  ];

  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="bg-[#c9b17a] text-[#0a0a0a] overflow-hidden whitespace-nowrap py-3.5 sm:py-4 select-none border-y border-[#b29b68]"
      aria-hidden="true"
    >
      <div className="inline-flex items-center animate-marquee">
        {repeatedItems.map((word, index) => (
          <span key={index} className="inline-flex items-center font-anton text-xl sm:text-2xl uppercase tracking-wider mx-4 sm:mx-6">
            <span>{word}</span>
            <span className="text-sm ml-4 sm:ml-6 opacity-75">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
