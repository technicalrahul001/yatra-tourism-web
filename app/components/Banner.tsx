"use client";

import React from "react";
import Image from "next/image";

export default function Banner(): React.ReactElement {
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-[#F8EDEE]">
      <div className="w-[95%] sm:w-[90%] lg:w-[85%] max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl overflow-hidden bg-[#7a1f1f] shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] md:min-h-[600px]">
          {/* LEFT */}
          <div className="relative p-8 sm:p-10 md:p-12 lg:p-16 flex flex-col justify-center">
            {/* subtle floral pattern (low opacity) */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-12"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='600' height='600' viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cstyle%3E.s{fill:none;stroke:%23ffffff;stroke-opacity:0.06}%3C/style%3E%3C/defs%3E%3Cg%3E%3Cpath class='s' d='M300 0c165 0 300 135 300 300S465 600 300 600 0 465 0 300 135 0 300 0z'/%3E%3C/g%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "left top",
                backgroundSize: "cover",
              }}
            />

            <div className="relative z-10 text-white">
              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4">
                Your Rajasthan Trip,
                <br />
                One Tap Away
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl">
                Book forts, palaces, safaris, and forest trails with the official
                OBMS Tourist & Wildlife App.
              </p>

              <div className="mt-2 space-y-6 max-w-xl">
                <FeatureItem label={`Explore Rajasthan's forts, palaces, and museums in seconds.`} />
                <FeatureItem label={`Book safaris and wildlife tours with instant access.`} />
                <FeatureItem label={`Get quick confirmations for all your bookings.`} />
                <FeatureItem label={`Find maps, history, and travel tips in one place.`} />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          {/* <div className="p-[25px] rounded-[35px] overflow-hidden">
  <Image
    src="/assets/bannerImage.png"
    alt="Tourism App Mockup"
    width={720}
    height={1280}
    className="w-full h-full object-cover object-top rounded-[35px]" // <-- add rounded here!
  />
</div> */}
{/* RIGHT */}
<div className="p-[25px]">
  <div
    className="relative w-full rounded-[35px] overflow-hidden
               min-h-[420px] sm:min-h-[500px] md:min-h-[620px] lg:min-h-[700px]"
  >
    <Image
      src="/assets/bannerImage.png"
      alt="Tourism App Mockup"
      fill
      sizes="100vw"
      style={{ objectFit: "cover", objectPosition: "top" }}
    />
  </div>
</div>


        </div>
      </div>
      </div>
    </section>
  );
}

function FeatureItem({ label }: { label: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h18M3 12h18M3 17h18" />
        </svg>
      </div>
      <p className="text-sm sm:text-base md:text-lg text-white/95">{label}</p>
    </div>
  );
}

