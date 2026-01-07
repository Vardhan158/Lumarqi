import React from "react";

import img1 from "../assets/detectingbias.webp";
import img2 from "../assets/beyond_traditional_analytics.webp";
import img3 from "../assets/aiofthetiger.webp";
import img4 from "../assets/AI-for-Luxury-Retail-Thumb.webp";
import img5 from "../assets/AI-in-Healthcare-Thumb-1.webp";
import img6 from "../assets/Microsoft-Fabric-Whitepaper-Thumb.webp";
import img7 from "../assets/PTP-Data-Lake-Home.webp";
import img8 from "../assets/apache_iceberg.webp";

const insights = [
  {
    image: img1,
    tag: "TIGER FEATURES",
    title: "Bias in Business and Product Testing: How AI is Changing the Game",
    description:
      "Artificial intelligence is transforming business and product testing by mitigating bias, improving efficiency, and accelerating validation through advanced AI models.",
  },
  {
    image: img2,
    tag: "AI STRATEGY",
    title: "From Experimentation to Enterprise AI at Scale",
    description:
      "How organizations move from isolated AI experiments to enterprise-wide adoption with governance, platforms, and operating models.",
  },
  {
    image: img3,
    tag: "DATA PLATFORMS",
    title: "Modern Data Platforms: Building the Foundation for AI",
    description:
      "Why cloud-native data platforms are essential for scalable analytics and AI-driven decision making.",
  },
  {
    image: img4,
    tag: "RESPONSIBLE AI",
    title: "Embedding Responsible AI by Design",
    description:
      "Governance, transparency, and ethics must be built into AI systems from day one — not bolted on later.",
  },
  {
    image: img5,
    tag: "ML ENGINEERING",
    title: "Operationalizing Machine Learning in the Real World",
    description:
      "Turning models into reliable, production-grade ML systems that deliver continuous business value.",
  },
  {
    image: img6,
    tag: "ANALYTICS",
    title: "Decision Intelligence: Moving Beyond Dashboards",
    description:
      "How organizations shift from descriptive analytics to prescriptive and predictive decision intelligence.",
  },
  {
    image: img7,
    tag: "GENAI",
    title: "Enterprise GenAI: Separating Hype from Value",
    description:
      "Practical use cases, architecture patterns, and guardrails for generative AI in enterprises.",
  },
  {
    image: img8,
    tag: "FUTURE OF AI",
    title: "What the Next Wave of AI Means for Enterprises",
    description:
      "Emerging trends in AI, data, and automation that will shape the next decade of enterprise transformation.",
  },
];

export default function InsightsListSection() {
  return (
    <section className="w-full bg-white py-32">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 lg:px-24 space-y-16">

        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-[#2f2c2b] rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* IMAGE */}
            <div className="w-full lg:w-[40%]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-[60%] text-white">
              <p className="text-xs tracking-widest text-orange-500 mb-4">
                {item.tag}
              </p>

              <h3 className="text-2xl md:text-3xl font-medium leading-snug mb-6">
                {item.title}
              </h3>

              <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-10 max-w-2xl">
                {item.description}
              </p>

              <button className="group inline-flex items-center gap-3 border-b border-white pb-1 text-sm font-medium">
                Read More
                <span className="text-orange-500 transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
