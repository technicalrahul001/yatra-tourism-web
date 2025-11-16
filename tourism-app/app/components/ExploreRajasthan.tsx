"use client";

import { useState, useRef, useEffect } from "react";

export default function ExploreRajasthan() {
  const [activeTab, setActiveTab] = useState("Wildlife");
  const scrollContainersRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (message: string) => {
    alert(message);
  };

  const destinations = [
  {
    category: "WILDLIFE",
    categoryColor: "bg-green-500",
    title: "National Chambal Gharial Sanctuary Palighat",
    location: "Sawai Madhopur",
    duration: "3-4 Hours",
    price: "₹₹₹₹",
    rating: "4.5",
    reviews: "(11K)",
    images: ["/assets/crocodile2.png", "/assets/crocodile2.png", "/assets/crocodile2.png"]
  },
  {
    category: "WILDLIFE",
    categoryColor: "bg-green-500",
    title: "Nahargarh Biological Park",
    location: "Jaipur",
    duration: "3-4 Hours",
    price: "₹₹₹₹",
    rating: "4.5",
    reviews: "(11K)",
    images: ["/assets/tiger1.png", "/assets/dear.png","/assets/dear.png"]
  },
  {
    category: "WILDLIFE",
    categoryColor: "bg-green-500",
    title: "Jhalana Leopard Reserve",
    location: "Jaipur",
    duration: "3-4 Hours",
    price: "₹₹₹₹",
    rating: "4.5",
    reviews: "(11K)",
    images: ["/assets/leopard.png", "/assets/leopard2.png", "/assets/leopard.png", "/assets/leopard2.png"]
  },
  {
    category: "WILDLIFE",
    categoryColor: "bg-green-500",
    title: "Keoladeo Ghana National Park",
    location: "Bharatpur",
    duration: "3-4 Hours",
    price: "₹₹₹₹",
    rating: "4.5",
    reviews: "(11K)",
    images: ["/assets/bird.png", "/assets/bird2.png","/assets/bird2.png"]
  }
];

  // Add scrolling class when user scrolls
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('scrollbar-hover')) {
        target.classList.add('scrolling');
        clearTimeout((target as any).scrollTimeout);
        (target as any).scrollTimeout = setTimeout(() => {
          target.classList.remove('scrolling');
        }, 1000);
      }
    };

    const containers = scrollContainersRef.current.filter(Boolean);
    containers.forEach(container => {
      if (container) {
        container.addEventListener('scroll', handleScroll);
        container.addEventListener('wheel', handleScroll);
      }
    });

    return () => {
      containers.forEach(container => {
        if (container) {
          container.removeEventListener('scroll', handleScroll);
          container.removeEventListener('wheel', handleScroll);
        }
      });
    };
  });


  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F8EDEE]">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B1538] text-left mb-2 sm:mb-3">
          Explore Rajasthan
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-left text-[#6B6B6B] mb-8 sm:mb-10 md:mb-12 max-w-xl font-sans">
          Discover specialized collections of wildlife reserves, historic
          monuments, and cultural museums.
        </p>

        {/* Tabs */}
        <div className="flex text-left gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12 overflow-x-auto pb-2">
          <button
            onClick={() => {
              setActiveTab("Wildlife");
              handleClick("Wildlife tab");
            }}
            className={`pb-2 text-sm sm:text-base font-semibold transition-colors font-sans whitespace-nowrap ${
              activeTab === "Wildlife"
                ? "text-[#8B1538] border-b-2 border-[#8B1538]"
                : "text-gray-600 hover:text-[#8B1538]"
            }`}
          >
            Wildlife
          </button>
          <button
            onClick={() => {
              setActiveTab("Monuments");
              handleClick("Monuments tab");
            }}
            className={`pb-2 text-sm sm:text-base font-semibold transition-colors font-sans whitespace-nowrap ${
              activeTab === "Monuments"
                ? "text-[#8B1538] border-b-2 border-[#8B1538]"
                : "text-gray-600 hover:text-[#8B1538]"
            }`}
          >
            Monuments
          </button>
          <button
            onClick={() => {
              setActiveTab("Museums");
              handleClick("Museums tab");
            }}
            className={`pb-2 text-sm sm:text-base font-semibold transition-colors font-sans whitespace-nowrap ${
              activeTab === "Museums"
                ? "text-[#8B1538] border-b-2 border-[#8B1538]"
                : "text-gray-600 hover:text-[#8B1538]"
            }`}
          >
            Museums
          </button>
          <button
            onClick={() => handleClick("View more")}
            className="pb-2 text-sm sm:text-base font-semibold text-gray-600 hover:text-[#8B1538] transition-colors flex items-center gap-1 font-sans whitespace-nowrap"
          >
            View more
            <svg
              className="w-4 h-4"
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

        {/* Destination Cards Grid */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => handleClick("Previous destinations")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-16 z-10 w-8 h-16 lg:w-10 lg:h-24 bg-[#eccfd3] rounded flex items-center justify-center transition-colors shadow-md"
          >
            <svg
              className="w-6 h-6 text-gray-800"
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

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => handleClick(destination.title)}
              >
                 {/* Card Content */}
                 <div className="px-4 sm:px-5 md:px-6 pt-4 sm:pt-5 md:pt-6 pb-2">
                  {/* Title and Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 font-sans">
                      {destination.title}
                    </h3>
                    <div className="flex items-center gap-1 font-sans">
                      <span className="text-yellow-500">★</span>
                      <span className="text-xs sm:text-sm font-semibold text-gray-800">
                        {destination.rating}
                      </span>
                      <span className="text-[10px] sm:text-xs text-gray-600">
                        {destination.reviews}
                      </span>
                    </div>
                  </div>

                  {/* Category, Location, Duration, Price */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full mt-2 gap-2 sm:gap-0 font-sans">
                    {/* LEFT: Category */}
                    <span
                      className={`${destination.categoryColor} text-white text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full w-fit`}
                    >
                      {destination.category}
                    </span>

                    {/* RIGHT: Location + Duration + Price */}
                    <div className="flex items-center gap-3 sm:gap-4 md:gap-6 text-gray-600 flex-wrap">
                      {/* Location */}
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm whitespace-nowrap">{destination.location}</span>
                      </div>

                      {/* Duration */}
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-xs sm:text-sm whitespace-nowrap">{destination.duration}</span>
                      </div>

                      {/* Price */}
                      <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
                        {destination.price}
                      </span>
                    </div>
                  </div>
                </div>
                {/* Images - Horizontal scrollable if more than 2 images */}
                {destination.images.length > 2 ? (
                  <div className="px-2 sm:px-3 pb-2 sm:pb-3 pt-1">
                    <div 
                      ref={(el) => {
                        scrollContainersRef.current[index] = el;
                      }}
                      className="flex gap-1.5 sm:gap-2 overflow-x-auto  pb-2"
                    >
                      {destination.images.map((image, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={image}
                          alt={`${destination.title} Image ${imgIndex + 1}`}
                          className="h-32 sm:h-40 md:h-44 w-auto min-w-[200px] sm:min-w-[240px] md:min-w-[280px] flex-shrink-0 object-cover rounded-lg sm:rounded-xl"
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-1.5 sm:gap-2 px-2 sm:px-3 pb-2 sm:pb-3 pt-1">
                    {destination.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${destination.title} Image ${imgIndex + 1}`}
                        className="h-32 sm:h-40 md:h-44 w-full object-cover rounded-lg sm:rounded-xl"
                      />
                    ))}
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => handleClick("Next destinations")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-16 z-10 w-8 h-16 lg:w-10 lg:h-24 bg-[#eccfd3] rounded flex items-center justify-center transition-colors shadow-md"
          >
            <svg
              className="w-6 h-6 text-gray-800"
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
    </section>
  );
}

