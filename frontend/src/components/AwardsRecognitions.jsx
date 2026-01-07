import React, { useState } from "react";

import award1 from "../assets/1754423260466.jpg";
import award2 from "../assets/Wins-Finkelstein-Award.webp";
import award3 from "../assets/Pinnacle-Awards-2025.webp";
import award4 from "../assets/Among-APACs-High-Growth-Companies-2023_5.webp";
import award5 from "../assets/Asian-American-Business-Award.webp";
import award6 from "../assets/jombays-wow-workplace-award.webp";
import award7 from "../assets/40-under-40-award.webp";
import award8 from "../assets/gen-ai-conclave-2025-award.webp";
import award9 from "../assets/AIM-cypher-24.webp";
import award10 from "../assets/deloitte-50-24.webp";
import award11 from "../assets/Brandon-Hall-Group-Awards-2024.webp";
import award12 from "../assets/awards-microsoft.webp";
import award13 from "../assets/NASSCOM-AI-Gamechangers.webp";

const awards = [
  { image: award1, title: "Top 20 CEOs Defining the Future of AI in 2025 - AIM Research", year: "2025" },
  { image: award2, title: "Tiger Analytics Wins Finkelstein Award for Innovative Data Engineering Project of the Year", year: "2025" },
  { image: award3, title: "Tiger Analytics Honored as Winner for Exemplary Firms in AI & Analytics at Pinnacle Awards", year: "2025" },
  { image: award4, title: "Ranked among FT High-Growth Companies Asia-Pacific", year: "2025" },
  { image: award5, title: "Recognized for Excellence in Advanced Analytics", year: "2024" },
  { image: award6, title: "AI Innovation Leader Award", year: "2024" },
  { image: award7, title: "Best Enterprise AI Solution Provider", year: "2024" },
  { image: award8, title: "Top Data Engineering Partner", year: "2024" },
  { image: award9, title: "Analytics Services Excellence Award", year: "2023" },
  { image: award10, title: "Best AI Consulting Firm", year: "2023" },
  { image: award11, title: "Innovation in AI & ML Award", year: "2023" },
  { image: award12, title: "Top Workplace for Data Professionals", year: "2022" },
  { image: award13, title: "Fastest Growing Analytics Company", year: "2022" },
];

export default function AwardsRecognitions() {
  const [pause, setPause] = useState(false);

  return (
    <>
      {/* ===== MARQUEE KEYFRAMES ===== */}
      <style>{`
        @keyframes awardsMarquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="w-full bg-white py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24">

          {/* HEADER */}
          <h2 className="text-3xl md:text-4xl font-medium mb-16">
            Awards & Recognitions
          </h2>

          {/* MARQUEE WRAPPER */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setPause(true)}
            onMouseLeave={() => setPause(false)}
          >
            {/* LEFT FADE */}
            <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

            {/* MARQUEE */}
            <div
              className="flex w-fit"
              style={{
                animation: `awardsMarquee ${awards.length * 2800}ms linear infinite`,
                animationPlayState: pause ? "paused" : "running",
              }}
            >
              {[...awards, ...awards].map((award, index) => (
                <div
                  key={index}
                  className="w-[280px] mx-6 flex-shrink-0"
                >
                  {/* IMAGE CARD */}
                  <div className="bg-[#f6f4f2] rounded-2xl p-8 flex items-center justify-center mb-6 h-[220px]">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="max-h-full object-contain"
                    />
                  </div>

                  {/* TEXT */}
                  <p className="text-base leading-relaxed mb-3">
                    {award.title}
                  </p>

                  <p className="text-sm text-orange-500 font-medium">
                    {award.year}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT FADE */}
            <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          </div>

        </div>
      </section>
    </>
  );
}
