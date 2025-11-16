"use client";

export default function TopAttractions() {
  const handleClick = (message: string) => {
    alert(message);
  };

  const attractions = [
    {
      category: "WILDLIFE",
      categoryColor: "bg-green-500",
      rating: "4.5",
      reviews: "(11K)",
      title: "Ranthambore National Park",
      location: "Sawai Madhopur",
      duration: "3-4 Hours",
      price: "₹₹₹₹",
      image: "/assets/Ranthambore.jpg",
      hoverText: "Home to majestic Bengal tigers and diverse wildlife",
      hoverIcons: ["tiger", "bird", "jeep"],
    },
    {
      category: "MONUMENT",
      categoryColor: "bg-amber-700",
      rating: "4.5",
      reviews: "(11K)",
      title: "Hawa Mahal",
      location: "Jaipur",
      duration: "1-2 Hours",
      price: "₹₹₹₹",
      image: "/assets/havaMahal.jpg",
      hoverText: "Iconic palace of winds with intricate architecture",
      hoverIcons: ["palace", "camera", "history"],
    },
    {
      category: "MUSEUM",
      categoryColor: "bg-yellow-600",
      rating: "4.5",
      reviews: "(11K)",
      title: "Government Central Museum",
      location: "Jaipur",
      duration: "1-2 Hours",
      price: "₹₹₹₹",
      image: "/assets/alberthall.jpg",
      hoverText: "Explore rich collections of art and artifacts",
      hoverIcons: ["museum", "art", "history"],
    },
    {
      category: "MONU",
      categoryColor: "bg-purple-600",
      rating: "4.5",
      reviews: "(11K)",
      title: "Amber Fort",
      location: "Jaipur",
      duration: "1-2 Hours",
      price: "₹₹₹₹",
      image: "/assets/amer.jpg",
      hoverText: "Magnificent fort showcasing Rajput heritage",
      hoverIcons: ["fort", "camera", "history"],
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F8EDEE] rounded-3xl">
  <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] font-serif font-bold text-[#8B1538] text-left mb-2 sm:mb-3">
      Top Attractions
    </h2>

    {/* Subtitle */}
    <p className="text-sm sm:text-base text-left text-[#6B6B6B] mb-8 sm:mb-10 md:mb-12 max-w-xl font-sans">
      Discover the most sought-after monuments and wildlife experiences in Rajasthan
    </p>

    {/* Scrollable Cards */}
    <div className="overflow-x-auto pb-4 scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
      <div className="flex gap-5 sm:gap-6 md:gap-8 min-w-max">

        {attractions.map((item, index) => (
          <div
            key={index}
            className="w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] bg-white rounded-[12px] sm:rounded-[18px] shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden flex-shrink-0 cursor-pointer hover:shadow-xl transition-all duration-300"
            onClick={() => handleClick(item.title)}
          >
            {/* IMAGE CONTAINER WITH WHITE SPACE AROUND */}
            <div className="w-full h-[320px] sm:h-[380px] md:h-[450px] lg:h-[500px] bg-white p-2 sm:p-3 md:p-4 relative group">
              {/* Image with rounded corners and white space around */}
              <div className="w-full h-full bg-gray-200 rounded-[12px] relative overflow-hidden">
                {/* Actual Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Always Visible Category Tag and Rating (when not hovering) */}
                <span
                  className={`absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 ${item.categoryColor} text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase group-hover:opacity-0 transition-opacity duration-300 z-20`}
                >
                  {item.category}
                </span>
                <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 bg-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md flex items-center gap-1.5 shadow-sm group-hover:opacity-0 transition-opacity duration-300 z-20">
                  <span className="text-yellow-500 text-sm sm:text-base">★</span>
                  <span className="text-sm sm:text-base font-semibold text-gray-800">{item.rating}</span>
                  <span className="text-xs sm:text-sm text-blue-600">{item.reviews}</span>
                </div>

                {/* Black Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300">
                  {/* Top Section - Category Tag and Rating (visible on hover) */}
                  <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6 right-4 sm:right-5 md:right-6 flex items-start justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <span
                    className={`${item.categoryColor} text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase`}
                  >
                    {item.category}
                  </span>
                  <div className="bg-white/90 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md flex items-center gap-1.5 shadow-sm">
                    <span className="text-yellow-500 text-sm sm:text-base">★</span>
                    <span className="text-sm sm:text-base font-semibold text-gray-800">{item.rating}</span>
                    <span className="text-xs sm:text-sm text-blue-600">{item.reviews}</span>
                  </div>
                </div>

                {/* Center - View Button (visible on hover) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleClick(`View ${item.title}`);
                    }}
                    className="bg-white/95 backdrop-blur-sm text-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base flex items-center gap-2 shadow-lg hover:bg-white transition-colors"
                  >
                    View
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>

                {/* Bottom Section - Description Text and Icons (visible on hover) */}
                <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 left-4 sm:left-5 md:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <p className="text-white text-sm sm:text-base md:text-lg font-medium mb-3 sm:mb-4">{item.hoverText}</p>
                  <div className="flex items-center gap-3 sm:gap-4">
                    {item.hoverIcons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white/80 flex items-center justify-center bg-white/10 backdrop-blur-sm"
                      >
                        {icon === "tiger" && (
                          <span className="text-xl sm:text-2xl">🐅</span>
                        )}
                        {icon === "bird" && (
                          <span className="text-xl sm:text-2xl">🦅</span>
                        )}
                        {icon === "jeep" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m0 0v8m0-8l-4-4m4 4l4 4M8 7v8m0 0H4m4 0h8M8 15v2m8-2v2" />
                          </svg>
                        )}
                        {icon === "palace" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {icon === "camera" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        )}
                        {icon === "history" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        )}
                        {icon === "museum" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                        {icon === "art" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                          </svg>
                        )}
                        {icon === "fort" && (
                          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-4 sm:p-5 md:p-6">
              {/* TITLE */}
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-semibold text-[#1E1E1E] mb-3 sm:mb-4 font-sans">
                {item.title}
              </h3>

              {/* LOCATION, DURATION & PRICE IN ONE ROW */}
              <div className="flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
                {/* LOCATION */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-sm sm:text-base md:text-[15px] font-sans">
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-500 flex-shrink-0"
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
                  <span className="whitespace-nowrap">{item.location}</span>
                </div>

                {/* DURATION */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-600 text-sm sm:text-base md:text-[15px] font-sans">
                  <svg
                    className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-gray-500 flex-shrink-0"
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
                  <span className="whitespace-nowrap">{item.duration}</span>
                </div>

                {/* PRICE */}
                <div className="flex items-center gap-2 ml-auto">
                  <span className="text-gray-700 text-sm sm:text-base md:text-[16px] font-semibold whitespace-nowrap font-sans">{item.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </div>
</section>

  );
}

