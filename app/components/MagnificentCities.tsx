"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

export default function MagnificentCities() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleClick = (message: string) => {
    alert(message);
  };

  // Add scrolling class when user scrolls
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      container.classList.add('scrolling');
      clearTimeout((container as any).scrollTimeout);
      (container as any).scrollTimeout = setTimeout(() => {
        container.classList.remove('scrolling');
      }, 1000);
    };

    container.addEventListener('scroll', handleScroll);
    container.addEventListener('wheel', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      container.removeEventListener('wheel', handleScroll);
    };
  }, []);

  const attractions = [
    { name: "Amber Fort" },
    { name: "Chokhi Dhani Cultural Villa..." },
    { name: "Raw" },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F8EDEE]">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B1538] mb-3 sm:mb-4 text-center">
          Magnificent Cities of Rajasthan
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-2 font-sans">
          Each city is a masterpiece of history, culture, and architectural
          brilliance waiting to be explored
        </p>

        {/* Main Content - Map and Info Panel */}
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
          <div className="w-full lg:w-2/3 max-w-4xl">
            {/* Map Section */}
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
            <Image
              src="/assets/map.jpg"
              alt="Rajasthan Map"
              fill
              className="object-cover"
              priority
            />

            {/* City Name and Button Container */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 flex flex-col gap-2 sm:gap-3">
  <button
    onClick={() => handleClick("Explore Jaipur")}
    className="bg-[#8B1538] text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-lg text-sm sm:text-base font-semibold flex items-center gap-2 hover:bg-[#6B1030] transition-colors font-sans w-fit"
  >
    Explore Jaipur
    <svg
      className="w-3 h-3 sm:w-4 sm:h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>

          </div>
          </div>

          {/* City Info Panel */}
          <div className="w-full lg:flex-1 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] bg-[#F8EDEE] rounded-lg p-4 sm:p-5 md:p-6 overflow-y-auto">
            {/* City Navigation */}
            <div className="flex items-center justify-between mb-4 sm:mb-5 md:mb-6">
              <button
                onClick={() => handleClick("Previous city")}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <h3 className="text-xl sm:text-2xl font-bold text-[#8B1538] font-sans">Jaipur</h3>
              <button
                onClick={() => handleClick("Next city")}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* City Description */}
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-5 md:mb-6 leading-relaxed font-sans">
              The Pink City, capital of Rajasthan known for its magnificent
              palaces, forts, and vibrant bazaars.
            </p>

            {/* Weather Information Cards */}
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
              <div className="bg-[#FFF5F0] rounded-lg p-2 sm:p-3 text-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-sans">33°C</p>
              </div>
              <div className="bg-[#FFF5F0] rounded-lg p-2 sm:p-3 text-center">
                <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 mb-0.5 sm:mb-1 font-sans">Humidity</p>
                <p className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 font-sans">80%</p>
              </div>
              <div className="bg-[#FFF5F0] rounded-lg p-2 sm:p-3 text-center">
                <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mx-auto mb-1 sm:mb-2 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-[10px] sm:text-xs md:text-sm font-semibold text-gray-800 font-sans">
                  Can Visit
                </p>
              </div>
            </div>

            {/* Best Time to Visit */}
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FFF5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#8B1538]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600 font-sans">Best Time to Visit</p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 font-sans">
                  03 Oct - Mar
                </p>
              </div>
            </div>

            {/* Airport */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 md:mb-6">
              <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-[#FFF5F0] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-[#8B1538]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-600 font-sans">Airport</p>
                <p className="text-sm sm:text-base font-semibold text-gray-800 font-sans">
                  Jaipur International Ai...
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3 font-sans">
                Image Gallery
              </p>
              <div 
                ref={scrollContainerRef}
                className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hover pb-2"
              >
                {attractions.map((attraction, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-24 sm:w-28 md:w-32 cursor-pointer"
                    onClick={() => handleClick(attraction.name)}
                  >
                    <div className="w-24 h-20 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-1.5 sm:mb-2 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-0.5 sm:mb-1 border-2 border-dashed border-gray-300 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600 truncate font-sans">
                      {attraction.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

