export interface Project {
  id: string;
  number: string;
  bgText: string;
  category: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  tags: string[];
  gradientClass: string;
  client: string;
  year: string;
  deliverables: string[];
  highlight: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExpertiseItem {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  details: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "spend-tracker",
    number: "FinTech · 01",
    bgText: "SPEND",
    category: "Web App",
    title: "Spend Tracker",
    shortDesc: "An intelligent personal finance and expense analytics web application.",
    fullDesc: "Spend Tracker is a streamlined expense tracking and financial forecasting application designed to help individuals and teams monitor cash flow, categorize purchases, and identify recurring expenses with zero friction.",
    image: "/src/assets/images/spend_tracker_visual_1791048882406.jpg",
    tags: ["React", "TypeScript", "Tailwind", "Analytics"],
    gradientClass: "from-[#0f1f17] via-[#0d1410] to-[#0a0a0a]",
    client: "AI Studio / Open Project",
    year: "2026",
    deliverables: ["Product Architecture", "Expense Analytics", "Category Breakdown", "Interactive Dashboard"],
    highlight: "Deployed live at spendtrackrr.ai.studio with real-time responsive analytics.",
    liveUrl: "https://spendtrackrr.ai.studio",
  },
  {
    id: "xzeeofc",
    number: "Agency · 02",
    bgText: "MARKETING",
    category: "Marketing Agency",
    title: "XZEE",
    shortDesc: "A growth marketing and digital brand strategy agency founded and operated by Krish Singh.",
    fullDesc: "XZEE is a full-service marketing and brand growth agency founded and directed by Krish Singh. Specializing in high-converting campaigns, digital brand identity, social scaling, and bespoke creative strategy for ambitious brands.",
    image: "/src/assets/images/project_portfolio_visual_1791046656795.jpg",
    tags: ["Marketing Agency", "Growth Strategy", "Brand Positioning", "Performance Ads"],
    gradientClass: "from-[#1a1219] via-[#0d090f] to-[#0a0a0a]",
    client: "Krish Singh / XZEE Agency",
    year: "2026",
    deliverables: ["Full Brand Strategy", "Growth Marketing Campaigns", "Creative Direction", "High-Converting Landers"],
    highlight: "Helped partner brands achieve 4.8x average ROAS and scaled social reach globally.",
    liveUrl: "https://xzeeofc.ai.studio",
  },
  {
    id: "insistor",
    number: "Trading · 03",
    bgText: "TRADE",
    category: "Trading Journal",
    title: "Insistor",
    shortDesc: "An advanced trading journal and performance analytics web application.",
    fullDesc: "Insistor is an intuitive trading journaling and performance analytics web application engineered for active traders to log setups, monitor risk-to-reward ratios, analyze win rates, and master trade execution.",
    image: "/src/assets/images/project_watches_visual_1791046679784.jpg",
    tags: ["React", "TypeScript", "Tailwind", "Trading Analytics", "Charts"],
    gradientClass: "from-[#1a1c12] via-[#0e140d] to-[#0a0a0a]",
    client: "Insistor Trading",
    year: "2026",
    deliverables: ["Trade Execution Logger", "P&L Analytics Engine", "Risk Management Calculator", "Trade Psychology Journal"],
    highlight: "Comprehensive trade analytics with real-time risk-reward ratios and expectancy metrics.",
    liveUrl: "https://insistor.ai.studio",
  },
];

export const EXPERTISE_LIST: ExpertiseItem[] = [
  {
    icon: "‹/›",
    title: "Creative Development",
    description: "Building fast, responsive and scalable websites with modern frontend technologies.",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript"],
    details: [
      "Semantic, accessible HTML markup with zero layout shift",
      "Modular component architectures in React and Next.js",
      "Ultra-optimized asset delivery and sub-second load times",
      "Clean CSS layouts using Tailwind, flexbox, and CSS grid"
    ]
  },
  {
    icon: "✦",
    title: "Motion & Interaction",
    description: "Turning static interfaces into expressive experiences through meaningful, purposeful animation.",
    tags: ["GSAP", "Lenis", "Motion", "Physics"],
    details: [
      "Spring-damped gestures and micro-interactions (<=200ms)",
      "Continuous smooth scrolling and section pacing",
      "SVG morphing, path drawing, and scroll-linked timelines",
      "Strict compositor-only transforms for silky 60fps / 120fps output"
    ]
  },
  {
    icon: "◐",
    title: "UI / UX Design",
    description: "Creating clean interfaces with strong hierarchy, usability and a distinctive personality.",
    tags: ["Figma", "Layout", "Typography", "Systems"],
    details: [
      "Typographic pairing and mathematical type scales",
      "High-contrast editorial layouts and spatial tension",
      "Responsive design systems from 360px mobile to 2560px ultra-wide",
      "Zero-pill metadata discipline and human-first readability"
    ]
  },
  {
    icon: "▦",
    title: "Modern Web Apps",
    description: "Developing interactive applications with component-based structure and dynamic data.",
    tags: ["React", "APIs", "State", "Performance"],
    details: [
      "Declarative UI state management and optimistic updates",
      "Seamless API integrations and robust error handling",
      "Clean separation of business logic and presentation",
      "Modern build tools and automated CI validation"
    ]
  },
];
