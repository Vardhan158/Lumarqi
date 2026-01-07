import React from "react";
import careersImage from "../assets/why-join-us-CTA-1.webp"; // your uploaded image

export default function CareersCTASection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1600px] mx-auto px-6 md:px-16 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">

          {/* LEFT CONTENT CARD */}
          <div className="bg-[#f7f7f6] rounded-3xl px-12 py-16 md:px-16 md:py-20 max-w-[640px]">
            <h2 className="text-[32px] md:text-[40px] lg:text-[44px] font-medium leading-[1.25] text-black mb-8">
              Unleash your full potential for a future of infinite possibilities
            </h2>

            <p className="text-[16px] text-gray-700 leading-relaxed mb-12 max-w-[460px]">
              Discover a meaningful career path in a collaborative environment.
            </p>

            <button className="group inline-flex items-center gap-3 border-b border-black pb-1 text-sm font-medium">
              Apply now
              <span className="text-orange-500 transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full max-w-[720px] ml-auto">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={careersImage}
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
