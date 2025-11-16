"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const dividerStyle = {
  display: "inline-block",
  width: "2px",
  height: "22px",
  background: "rgba(255, 255, 255, 0.25)",
  margin: "0 6px",
  verticalAlign: "middle"
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (message: string) => {
    alert(message);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Dark Maroon/Red */}
          <div className="bg-[#8B1538] text-white text-xs sm:text-sm py-1.5 sm:py-2">
        <div className="container mx-auto px-3 sm:px-4 flex items-center justify-between font-sans">
          {/* Left: Government of India */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-base sm:text-lg">🇮🇳</span>
            <span className="hidden sm:inline">Government of India</span>
            <span className="sm:hidden">GoI</span>
            <button
              onClick={() => handleClick("External link to Government of India")}
              className="ml-1"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>

<div className="hidden sm:flex ml-auto mr-4">
  <button
    onClick={() => handleClick("Skip to main content")}
    className="text-lg sm:text-xl"
  >
    Skip to Main Content
  </button>
</div>
<span style={dividerStyle} />

          {/* Right: Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Font Size Controls */}
            <div className="hidden md:flex items-center gap-1">
              <button
                onClick={() => handleClick("Decrease font size")}
                className="text-xs px-1"
              >
                A
              </button>
              <button
                onClick={() => handleClick("Normal font size")}
                className="text-sm px-1"
              >
                A
              </button>
              <button
                onClick={() => handleClick("Increase font size")}
                className="text-base px-1"
              >
                A
              </button>
            </div>
            <span style={dividerStyle} />

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={() => handleClick("Toggle dark/light mode")}
              className="p-1"
            >
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
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
            <span style={dividerStyle} />
            

            {/* More Button */}
            <button
              onClick={() => handleClick("More options")}
              className="hidden sm:flex items-center gap-1 text-xs sm:text-sm"
            >
              More
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <span className="header-divider" />
          </div>
        </div>
      </div>

      {/* Main Navigation Bar - White with blur effect on scroll */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "backdrop-blur-lg bg-white/80 shadow-md"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            {/* Left: Logo and Title */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 sm:gap-3 mr-2 sm:mr-3">
                <Image
                  src="/assets/ashok.png"
                  alt="National Emblem of India"
                  width={36}
                  height={36}
                  className="w-9 h-9 sm:w-10 sm:h-10 object-contain shrink-0"
                  priority
                />
                <Image
                  src="/assets/pink.png"
                  alt="Hawa Mahal Logo"
                  width={42}
                  height={42}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0"
                  priority
                />
              </div>
              <div className="leading-snug">
                <div className="text-xs sm:text-sm md:text-base font-semibold text-[#8B1538] font-sans">
                  <span className="hidden sm:inline">Government of Rajasthan</span>
                  <span className="sm:hidden">GoR</span>
                </div>
                <div className="text-[10px] sm:text-xs text-gray-600 font-sans hidden sm:block">
                  Online Booking Management System
                </div>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 font-sans">
              <button
                onClick={() => handleClick("Explore")}
                className="text-gray-700 hover:text-[#8B1538] transition-colors"
              >
                Explore
              </button>
              <button
                onClick={() => handleClick("Packages")}
                className="text-gray-700 hover:text-[#8B1538] transition-colors"
              >
                Packages
              </button>
              <button
                onClick={() => handleClick("Wildlife")}
                className="text-gray-700 hover:text-[#8B1538] transition-colors"
              >
                Wildlife
              </button>
              <button
                onClick={() => handleClick("Monuments")}
                className="text-gray-700 hover:text-[#8B1538] transition-colors"
              >
                Monuments
              </button>
              <button
                onClick={() => handleClick("About")}
                className="text-gray-700 hover:text-[#8B1538] transition-colors"
              >
                About
              </button>
              <button
                onClick={() => handleClick("Contact Us")}
                className="text-gray-700 hover:text-[#8B1538] transition-colors"
              >
                Contact Us
              </button>
            </nav>

            {/* Right: Search, Menu, and Login */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => handleClick("Search")}
                className="p-1.5 sm:p-2 text-gray-700 hover:text-[#8B1538]"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
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
              </button>
              {/* Mobile Menu Button */}
              <button
                onClick={() => handleClick("Menu")}
                className="lg:hidden p-2 text-gray-700 hover:text-[#8B1538]"
              >
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
              <button
                onClick={() => handleClick("Login/Register")}
                className="hidden sm:flex items-center gap-1 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base text-[#8B1538] border border-[#8B1538] rounded hover:bg-[#8B1538] hover:text-white transition-colors font-sans"
              >
                <span className="hidden md:inline">Login/Register</span>
                <span className="md:hidden">Login</span>
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
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

