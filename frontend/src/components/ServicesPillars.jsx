import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

/* ================= GENERIC LOTTIE ICON ================= */

function LottieIcon({ path }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path,
    });

    return () => animation.destroy();
  }, [path]);

  return <div ref={containerRef} className="w-40 h-40 mb-10 mx-auto" />;
}

/* ================= MAIN ================= */

export default function ServicesPillars() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-white">

      {/* SECTION TITLE */}
      <h2 className="text-2xl md:text-3xl font-medium mb-16">
        Transform your enterprise data into intelligent action
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* TAB 1 — STRATEGY & ADVISORY */}
        <div className="bg-[#FBEFCD] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <LottieIcon path="/lottie/strategy-advisory.json" />

          <h3 className="text-xs font-semibold tracking-widest uppercase mb-6">
            Strategy and Advisory
          </h3>

          <ul className="space-y-2 text-sm mb-auto">
            <li>Analytics Roadmap</li>
            <li>Data Strategy</li>
            <li>Platform Strategy</li>
          </ul>

          <button className="mt-10 border-b border-black text-sm">
            Know more ↗
          </button>
        </div>

        {/* TAB 2 — ENGINEER YOUR DATA */}
        <div className="bg-[#CFE9E6] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <LottieIcon path="/lottie/engineer-your-data.json" />

          <h3 className="text-xs font-semibold tracking-widest uppercase mb-6">
            Engineer Your Data
          </h3>

          <ul className="space-y-2 text-sm mb-auto">
            <li>Data Modernization</li>
            <li>Data Foundation</li>
            <li>Data Operations</li>
          </ul>

          <button className="mt-10 border-b border-black text-sm">
            Know more ↗
          </button>
        </div>

        {/* TAB 3 — DIFFERENTIATE WITH AI / ML */}
        <div className="bg-[#D5E8F1] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <LottieIcon path="/lottie/differentiate-aiml.json" />

          <h3 className="text-xs font-semibold tracking-widest uppercase mb-6">
            Differentiate with AI / ML
          </h3>

          <ul className="space-y-2 text-sm mb-auto">
            <li>Data Science</li>
            <li>AI Engineering</li>
            <li>ML Products & Platforms</li>
          </ul>

          <button className="mt-10 border-b border-black text-sm">
            Know more ↗
          </button>
        </div>

        {/* TAB 4 — OPERATIONALIZE INSIGHTS */}
        <div className="bg-[#FBE3C8] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <LottieIcon path="/lottie/operationalize-insights.json" />

          <h3 className="text-xs font-semibold tracking-widest uppercase mb-6">
            Operationalize Insights
          </h3>

          <ul className="space-y-2 text-sm mb-auto">
            <li>Experience Consulting</li>
            <li>Application Engineering</li>
            <li>Business Intelligence</li>
            <li>ML Ops</li>
          </ul>

          <button className="mt-10 border-b border-black text-sm">
            Know more ↗
          </button>
        </div>

      </div>
    </section>
  );
}
