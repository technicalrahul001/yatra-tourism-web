"use client";

import React, { useState } from "react";
import Image from "next/image";

type Interest = { name: string; icon: string };

const cities: string[] = [
  "Jaipur",
  "Jaisalmer",
  "Udaipur",
  "Ajmer",
  "Jodhpur",
  "Pushkar",
  "Alwar",
  "Bikaner",
];

const interests: Interest[] = [
  { name: "Nature", icon: "🌳" },
  { name: "History & Museums", icon: "🏛️" },
  { name: "Food & Cuisine", icon: "🍽️" },
  { name: "Wildlife", icon: "🐾" },
  { name: "Shopping", icon: "🛍️" },
  { name: "Rest & Chill", icon: "😌" },
];

export default function PlanYourVisit(): JSX.Element {
  const [selectedDays, setSelectedDays] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleClick = (message: string): void => {
    // For production replace alert with a modal or toast
    alert(message);
  };

  const toggleCity = (city: string): void => {
    setSelectedCities((prev) =>
      prev.includes(city) ? prev.filter((c) => c !== city) : [...prev, city]
    );
  };

  const toggleInterest = (interest: string): void => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]
    );
  };

  return (
    <section className="bg-[#F8EDEE]">

      {/* Main Content Section */}
      <div className="py-8 sm:py-12 md:py-16">
        <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B1538] mb-3 sm:mb-4 text-center">
            Plan Your Perfect Visit
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2 font-sans">
            Create a customized itinerary tailored to your preferences, time, and interests.
          </p>

          {/* Main Content - Form and Illustration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left: Form */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 font-sans">
                Tell us about your visit
              </h3>

              {/* Days Dropdown */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 font-sans">
                  How many days are you visiting Jaipur?
                </label>
                <div className="relative">
                  <select
                    value={selectedDays}
                    onChange={(e) => setSelectedDays(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent font-sans"
                    aria-label="Select number of days"
                  >
                    <option value="">Select no. of days</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="4">4 Days</option>
                    <option value="5+">5+ Days</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Cities Checkboxes */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 font-sans">
                  Which cities interest you?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {cities.map((city) => (
                    <label key={city} className="flex items-center gap-2 cursor-pointer font-sans">
                      <input
                        type="checkbox"
                        checked={selectedCities.includes(city)}
                        onChange={() => toggleCity(city)}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B1538] border-gray-300 rounded focus:ring-[#8B1538]"
                        aria-checked={selectedCities.includes(city)}
                      />
                      <span className="text-sm sm:text-base text-gray-700">{city}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Availability Dropdown */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 font-sans">
                  Daily time availability
                </label>
                <div className="relative">
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-[#8B1538] focus:border-transparent font-sans"
                    aria-label="Daily time availability"
                  >
                    <option value="">How much time do you have each day?</option>
                    <option value="2-4">2-4 Hours</option>
                    <option value="4-6">4-6 Hours</option>
                    <option value="6-8">6-8 Hours</option>
                    <option value="full">Full Day</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Interests Checkboxes */}
              <div className="mb-3 sm:mb-4">
                <label className="block text-sm sm:text-base text-gray-700 font-semibold mb-2 font-sans">
                  What interests you most?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {interests.map((interest) => (
                    <label key={interest.name} className="flex items-center gap-2 cursor-pointer font-sans">
                      <input
                        type="checkbox"
                        checked={selectedInterests.includes(interest.name)}
                        onChange={() => toggleInterest(interest.name)}
                        className="w-4 h-4 sm:w-5 sm:h-5 text-[#8B1538] border-gray-300 rounded focus:ring-[#8B1538]"
                        aria-checked={selectedInterests.includes(interest.name)}
                      />
                      <span className="text-sm sm:text-base text-gray-700 flex items-center gap-2">
                        <span className="text-base sm:text-lg" aria-hidden>{interest.icon}</span>
                        {interest.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Generate Button */}
              <button
                type="button"
                onClick={() => handleClick("Generate My Itinerary")}
                className="w-full bg-[#8B1538] text-white py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold flex items-center justify-center gap-2 hover:bg-[#6B1030] transition-colors font-sans"
                aria-label="Generate my itinerary"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="whitespace-nowrap">Generate My Itinerary</span>
              </button>
            </div>

            {/* Right: Illustration */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-5 md:p-6 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]">
              {/* Logo */}
              <div className="flex items-center justify-center mb-3 sm:mb-4">
                <Image
                  src="/assets/logo.png"
                  alt="Rajasthan Tourism Logo"
                  width={300}
                  height={300}
                  className="object-contain w-full max-w-[200px] sm:max-w-[250px] md:max-w-[300px] h-auto"
                  priority
                />
              </div>

              {/* Instruction Text */}
              <p className="text-sm sm:text-base text-gray-600 text-center px-2 font-sans">
                Fill in your preferences on the left to generate a personalized travel plan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
