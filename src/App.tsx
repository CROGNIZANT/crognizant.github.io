/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Works from "./components/Works";
import CreativeLab from "./components/CreativeLab";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const targets = document.querySelectorAll(".reveal-item");
    targets.forEach((t) => observer.observe(t));

    return () => observer.disconnect();
  }, [showPreloader]);

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#c9b17a] selection:text-[#0a0a0a]">
      {/* Custom Difference Blend Ring Cursor */}
      <CustomCursor />

      {/* Preloader Sequence */}
      {showPreloader && (
        <Preloader onComplete={() => setShowPreloader(false)} />
      )}

      {/* Main Top Navigation */}
      <Navbar
        onReplayIntro={() => setShowPreloader(true)}
      />

      {/* Content Flow */}
      <main>
        {/* Kinetic Hero */}
        <Hero />

        {/* Endless Marquee Ribbon */}
        <Marquee />

        {/* Featured Live Projects Callout Ribbon */}
        <section className="bg-[#0c0c0c] border-b border-[#1f1f1f] py-3.5 px-6 sm:px-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-extrabold uppercase tracking-widest text-[#c9b17a]">
                Live Works &amp; Ventures:
              </span>
              <span className="text-[#cfc9bd]">
                Spend Tracker (FinTech), XZEE (Marketing Agency by Krish Singh) &amp; Insistor (Trading Journal)
              </span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://spendtrackrr.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9b17a] hover:text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
              >
                <span>Spend Tracker</span>
                <span>↗</span>
              </a>
              <span className="text-[#333]">·</span>
              <a
                href="https://xzeeofc.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9b17a] hover:text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
              >
                <span>XZEE</span>
                <span>↗</span>
              </a>
              <span className="text-[#333]">·</span>
              <a
                href="https://insistor.ai.studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c9b17a] hover:text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-1"
              >
                <span>Insistor</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Editorial About Me */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)]">
          <About />
        </div>

        {/* Expertise Grid & Interactive Capabilities */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)]">
          <Expertise />
        </div>

        {/* Selected Works Showcase */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)]">
          <Works />
        </div>

        {/* Interactive Creative Lab Canvas */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)]">
          <CreativeLab />
        </div>

        {/* Direct Contact & Collaboration Form */}
        <div className="reveal-item opacity-0 translate-y-10 transition-all duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)]">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
