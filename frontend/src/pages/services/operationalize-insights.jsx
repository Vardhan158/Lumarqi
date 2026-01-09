import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import lottie from "lottie-web";

/* ================= ASSETS ================= */

import surfDetail from "../../assets/img_Strategy-Advisory_analytics-roadmap_advancing-business_1-min-1-1.webp";
import surfImage from "../../assets/img_Strategy-Advisory_analytics-roadmap_advancing-business_2-min-1-1.webp";
import Strategy from "../../assets/Strategy-_-Advisory-Analytics-Roadmap_infographics.webp";

// Case studies
import Case1 from "../../assets/analytics-roadmap-1-2.webp";
import Case2 from "../../assets/Service-Strategize-and-Advisory-Analytics-Roadmap-Sales-_-Marketing-Transformation-at-a-major-Pet-Care_Ed2.webp";
import Case3 from "../../assets/Service-Strategize-and-Advisory-Analytics-Roadmap-Data-Platform_Ed2.webp";

// CTA
import CTAImage from "../../assets/contact-us-CTA-1 (1).webp";
import Footer from "../../components/Footer";

/* ================= HERO LOTTIE ================= */

function HeroLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/operationalize-insights.json", // 🔁 new animation
    });

    return () => animation.destroy();
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}

const cardData = [
  {
    title: "Business roadmaps",
    description:
      "We enable building a vision of possibilities aligned closely with your business strategy. We work with specific functions – customer, sales, marketing...",
  },
  {
    title: "Design thinking",
    description:
      "We adopt a design thinking-led approach to seek and structure inputs from multiple stakeholders. This inclusive approach serves the needs of internal...",
  },
  {
    title: "Financial case",
    description:
      "As part of the roadmap development, we have a structured approach to value-complexity estimation and quantifying change management. Our business...",
  },
];

/* ================= PAGE ================= */

export default function AnalyticsRoadmap() {
  return (
    <>
      {/* ================= HERO ================= */}
      <main className="bg-[#f1f5ff] min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 pt-28 pb-28">
        {/* Breadcrumb */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 text-sm text-slate-600">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:underline">
              Services
            </Link>
            <span>/</span>
            <Link to="/services/strategy-advisory" className="hover:underline">
              Strategy & Advisory
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900">Data Strategy</span>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative w-full max-w-[520px] aspect-[4/5]">
            <HeroLottie />
          </div>

          <div className="max-w-xl">
            <h1 className="text-[36px] md:text-[52px] font-medium leading-tight text-slate-900 mb-6">
              Drive business expansion with{" "}
              <span className="font-semibold">pragmatic AI roadmaps</span>
            </h1>
            <p className="text-lg text-slate-700">
              See how Tiger Analytics’ approach helps reimagine business
              processes and functions by aligning AI initiatives with measurable
              outcomes.
            </p>
          </div>
        </div>
      </main>

      {/* ================= IMAGE + CONTENT (FIXED) ================= */}
      <div className="bg-white font-sans">
        {/* ================= HERO SECTION (GRID LAYOUT) ================= */}
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 border-t border-l border-slate-200">
            {/* TOP LEFT IMAGE (Col 1) */}
            <div className="border-r border-b border-slate-200">
              <img
                src={surfDetail} // Replace with {surfDetail}
                alt="AI analytics detail"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* TOP RIGHT TEXT (Cols 2-4) */}
            <div className="lg:col-span-3 border-r border-b border-slate-200 flex items-center p-8 lg:p-16">
              <h2 className="text-[36px] md:text-[48px] font-medium text-slate-900 leading-tight max-w-2xl">
                Advancing business growth with AI and analytics
              </h2>
            </div>

            {/* BOTTOM LEFT SPACER (Col 1) */}
            <div className="hidden lg:block border-r border-b border-slate-200" />

            {/* BOTTOM RIGHT IMAGE (Col 2) */}
            <div className="border-r border-b border-slate-200">
              <img
                src={surfImage} // Replace with {surfImage}
                alt="Advancing business growth"
                className="w-full aspect-square object-cover"
              />
            </div>

            {/* BOTTOM DESCRIPTION TEXT (Cols 3-4) */}
            <div className="lg:col-span-2 border-r border-b border-slate-200 p-8 lg:p-12 flex flex-col justify-center">
              <div className="max-w-xl text-slate-700 leading-relaxed text-lg">
                <p>
                  In today’s digital business landscape, organizations are awash
                  with vast amount of data. By creating a well-defined AI
                  strategy, carefully leveraging breakthrough innovations like
                  Generative AI, and integrating insights into business
                  functions, organizations can unlock opportunities at scale.
                </p>
                <p className="mt-4">
                  Tigor Analytics brings the right expertise and capabilities to
                  shape your AI and analytics roadmap closely aligned with your
                  overall digital transformation journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 md:px-16 lg:px-24 xl:px-20 py-20 bg-white">
          <h2 className="text-4xl font-light mb-12">What we do</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-[#2d2a28] text-white p-5 flex flex-col min-h-[180px] rounded-sm"
              >
                <h3 className="text-xl font-medium mb-6">{card.title}</h3>

                {/* Orange Divider */}
                <div className="w-full h-[1px] bg-orange-500 mb-8 opacity-80" />

                <p className="text-slate-300 leading-relaxed mb-auto">
                  {card.description}
                </p>

                {/* Read More Link */}
                <div className="mt-10 group cursor-pointer flex items-center text-sm font-medium border-b border-slate-500 w-max pb-1">
                  <span className="mr-2">Read More</span>
                  <svg
                    className="w-4 h-4 text-orange-500 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-16">
          <div className="max-w-7xl mx-auto">
            {/* FULL-WIDTH HEADING */}
            <h2 className="text-[28px] sm:text-[32px] md:text-[23px] font-medium text-slate-900 mb-10 leading-tight">
              Our unique approach: Understand, design, and implement
            </h2>

            {/* CONTENT BELOW HEADING */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* LEFT CONTENT */}
              <div>
                <p className="text-slate-700 leading-relaxed max-w-xl">
                  Our unique methodology spans three weeks. In the first two
                  weeks, we gain a deeper understanding of our client’s
                  landscape, from the process to data, technology, and
                  organization. In the third week, we conduct a design workshop
                  where a consensus roadmap is structured and implemented.
                </p>
              </div>

              {/* RIGHT CONTENT */}
              <div>
                <p className="text-slate-700 leading-relaxed max-w-xl">
                  The workshop helps the team build an understanding and
                  consensus on moving forward, creating a concrete call to
                  action that paves the way for success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-40">
          <h2 className="text-[36px] font-medium text-slate-900 mb-16">
            Why choose us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              "Accelerating digitization with industry and functional blueprints",
              "Optimizing rapid prototyping with accelerators and human-centric design",
              "Capable, trusted partner to get the best out of Generative AI and beyond",
              "Driving adoption to provide value in as early as four weeks",
            ].map((text, i) => (
              <div key={i}>
                {/* Highlight line: Orange for the second item as requested */}
                <div
                  className={`h-[2px] mb-6 ${
                    i === 1 ? "bg-[#ff8a00]" : "bg-slate-300"
                  }`}
                />
                <p className="text-lg text-slate-900 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ================= CASE STUDIES ================= */}
      <section className="bg-[#f7f7f7] px-6 md:px-16 lg:px-24 xl:px-32 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[Case1, Case2, Case3].map((img, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm"
            >
              <img src={img} className="h-[220px] w-full object-cover" alt="" />
              <div className="p-6">
                <h3 className="text-lg font-medium text-slate-900 mb-3">
                  Analytics-led business transformation
                </h3>
                <Link
                  to="#"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                >
                  Read <span className="text-[#f59e0b]">↗</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#f5f5f5] px-6 md:px-16 lg:px-24 xl:px-32 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-2xl p-10 max-w-xl">
            <h2 className="text-[32px] md:text-[40px] font-medium text-slate-900 mb-6">
              Maximize your potential with AI and analytics
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium border-b border-slate-900"
            >
              Let’s connect <span className="text-[#ff8a00]">↗</span>
            </Link>
          </div>

          <img
            src={CTAImage}
            alt="Business meeting"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
