"use client";

import { useEffect, useRef, useState } from "react";
 
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isPinned, setIsPinned] = useState(false);
  const [showBg, setShowBg] = useState(true);
 
  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      // Show background only while the hero intersects the viewport (bottom > 0)
      const shouldShow = rect.bottom > 0;
      setShowBg(shouldShow);
      // Pin background when the bottom edge hits the viewport bottom but still visible
      const shouldPin = shouldShow && rect.bottom <= window.innerHeight;
      setIsPinned(shouldPin);
    };
 
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
 
  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[640px] sm:h-[720px] md:h-[860px] lg:h-[960px] flex flex-col justify-start items-center text-center px-3 sm:px-4 pt-12 sm:pt-16 md:pt-20 lg:pt-24 overflow-visible"
    >
      {/* BACKGROUND LAYER: becomes fixed when pinned so following sections scroll over it */}
      {showBg && (
        <div
          aria-hidden
          className={`${isPinned ? "fixed inset-0 h-screen" : "absolute inset-0"} z-[-10] bg-cover bg-center pointer-events-none`}
          style={{ backgroundImage: "url('/assets/hero-bg.png')" }}
        />
      )}
 
      {/* TEXT */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] sm:tracking-[0.35em] text-[#4A4A4A] uppercase mb-2 sm:mb-3 font-sans">
          EXPERIENCE THE ROYAL HERITAGE OF
        </p>
 
        <h1 className="text-7xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-[#8B1538] mt-2 sm:mt-3 md:mt-4 mb-6 sm:mb-8 md:mb-10">
          Rajasthan
        </h1>
      </div>
 
      {/* SEARCH BAR */}
      <div className="relative z-10 mt-6 sm:mt-8 md:mt-10 w-full max-w-3xl px-2">
        <div className="flex items-center bg-white rounded-full shadow-xl px-3 sm:px-4 md:px-6 py-3 sm:py-4 border border-gray-200">
          {/* Search Icon */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2 sm:mr-3 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
 
          <input
            type="text"
            placeholder="Search for destinations or experiences"
            className="flex-1 outline-none text-sm sm:text-base text-gray-700 placeholder-gray-400 font-sans"
          />
 
          {/* Icons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ml-2 sm:ml-3">
            <button className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-300 rounded-full flex-shrink-0" />
 
            <button className="text-gray-500 hover:text-gray-700">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 1a3 3 0 013 3v6a3 3 0 11-6 0V4a3 3 0 013-3zm7 10a7 7 0 11-14 0m7 7v4m0 0H8m4 0h4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

