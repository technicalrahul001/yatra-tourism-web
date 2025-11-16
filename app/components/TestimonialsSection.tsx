"use client";

export default function TestimonialsSection() {
  const handleClick = (message: string) => {
    alert(message);
  };

  const testimonials = [
    {
      text: "Rajasthan, a realm where each grain of sand narrates a tale, is adorned with forts that stand as timeless guardians. The deserts echo stories of bravery that have forged the essence of our nation.",
      name: "Ravi Sharma",
      date: "15/05/2024",
    },
    {
      text: "Rajasthan, a land steeped in history, is a tapestry of vibrant cultures and majestic forts that tell tales of valor and resilience. The arid landscapes resonate with the echoes of ancient battles, shaping the spirit of our nation.",
      name: "Ananya Rao",
      date: "20/05/2024",
    },
    {
      text: "Rajasthan is a land where every grain of sand tells a story. The forts stand like sentinels of time, and the deserts whisper tales of valor that have shaped our nation's soul.",
      name: "Arjun Mehta",
      date: "13/04/2024",
    },
    {
      text: "Rajasthan, a realm where each grain of sand narrates a tale, is adorned with forts that stand as timeless guardians. The deserts echo stories of bravery that have forged the essence of our nation.",
      name: "Priya Patel",
      date: "22/03/2024",
    },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F8EDEE] relative overflow-hidden">
      {/* Background Quotation Marks - Placeholder */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full flex items-center justify-center">
          <span className="text-[100px] sm:text-[150px] md:text-[200px] font-serif text-gray-400">"</span>
        </div>
      </div>

      <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#8B1538] mb-3 sm:mb-4 text-center">
          Hear From Others
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2 font-sans">
          Discover heartfelt testimonials from visitors who have experienced the
          enchanting heritage of Rajasthan.
        </p>

        {/* Testimonial Cards - Auto Sliding */}
        <div className="overflow-hidden pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 sm:gap-6 animate-scroll">
            {/* Repeat testimonials multiple times for continuous scroll */}
            {[...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-[280px] sm:w-[300px] md:w-[320px] bg-white/5 backdrop-blur-2xl border border-[#8B1538]/40 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 transition-all cursor-pointer flex-shrink-0"
                onClick={() => handleClick(`Testimonial from ${testimonial.name}`)}
              >
                {/* Testimonial Text */}
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed font-sans">
                  "{testimonial.text}"
                </p>

                {/* Avatar and Info */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Avatar Placeholder */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-dashed border-gray-400"></div>
                  </div>

                  <div>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 font-sans">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 font-sans">{testimonial.date}</p>
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

