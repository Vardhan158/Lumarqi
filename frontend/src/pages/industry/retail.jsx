import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import lottie from "lottie-web";
import heroImage from "../../assets/img_impact_industries-L3_CPG_bnr.webp";
import Footer from "../../components/Footer";

/* ================= LOTTIE ================= */

function IntelligenceLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/001_TA-Impact-Industries-Retail.json",
      rendererSettings: { preserveAspectRatio: "xMidYMid meet" },
    });

    return () => animation.destroy();
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}

/* ================= DESKTOP CHECK ================= */

function useIsDesktop(breakpoint = 768) {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= breakpoint : true
  );

  useEffect(() => {
    const onResize = () => setIsDesktop(window.innerWidth >= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isDesktop;
}

/* ================= DATA ================= */

const items = [
  {
    id: "01",
    title: "Revenue growth management",
    desc:
      "Maximize value from RGM investments through Trade Architecture, Price & Promo Optimization and Omnichannel Attribution.",
  },
  {
    id: "02",
    title: "In market execution",
    desc:
      "Optimize retail execution with pre-built components and Test & Learn capabilities across markets.",
  },
  {
    id: "03",
    title: "Precision marketing",
    desc:
      "Build targeted campaigns using first-party data, emerging data sources, and advanced analytics.",
  },
  {
    id: "04",
    title: "Supply chain intelligence",
    desc:
      "Enable resilient supply chains with demand sensing, forecasting, and network optimization.",
  },
  {
    id: "05",
    title: "Product innovation",
    desc:
      "Accelerate innovation with AI-driven experimentation and consumer insight platforms.",
  },
];

/* ================= PAGE ================= */

export default function IndustryHeroCPG() {
  const isDesktop = useIsDesktop();

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative bg-white overflow-hidden min-h-screen">
        <div className="hidden lg:block absolute right-0 top-[72px] w-[55vw] h-[calc(100vh-72px)]">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-16 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-[520px_1fr] gap-16">
            <div className="relative z-10 pt-[calc(72px+56px)]">
              <div className="mb-12">
                <span className="inline-flex items-center gap-2 text-xs border border-slate-400 rounded-full px-4 py-[6px]">
                  Home <span className="opacity-60">›</span> Industries{" "}
                  <span className="font-medium">CPG</span>
                </span>
              </div>

              <h1 className="text-[42px] font-medium leading-tight mb-6 max-w-[520px]">
                AI-based decisioning capabilities for sustainable rapid growth in{" "}
                <span className="font-semibold">Consumer Packaged Goods</span>
              </h1>

              <p className="text-[17px] text-slate-700 max-w-[460px]">
                Elevate revenue management, build agile supply chains, and engage
                better with customers and consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTELLIGENCE ================= */}
      <section className="bg-[#f1f5ff] py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-[1400px] mx-auto bg-white rounded-[24px] px-10 py-16 md:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="h-[420px]">
              <IntelligenceLottie />
            </div>

            <div className="max-w-xl">
              <h2 className="text-[36px] font-medium mb-6">
                Act on intelligent business decisions in real time
              </h2>
              <p className="text-slate-700 mb-6">
                AI & analytics are now strategic enablers across the CPG value
                chain — driving faster, smarter decisions.
              </p>
              <p className="text-slate-700">
                Tiger Analytics empowers organizations with real-time
                intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="px-6 md:px-16 lg:px-24">
          <div className="flex justify-between mb-16">
            <h2 className="text-[40px] font-medium">What we do</h2>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-orange-500">↔</span> SWIPE
            </div>
          </div>

          <motion.div
            className="flex gap-20"
            drag="x"
            dragConstraints={{ left: -800, right: 0 }}
            animate={{ x: [0, -160, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          >
            {items.map((item) => (
              <div key={item.id} className="min-w-[320px] max-w-[360px]">
                <span className="text-orange-500 font-medium">{item.id}</span>
                <h3 className="text-[22px] font-medium mt-4 mb-6">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="relative bg-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-[#f1f5ff]" />

        <div className="relative max-w-[1400px] mx-auto px-6 md:px-16">
          <h2 className="text-[32px] md:text-[40px] font-medium mb-16 md:mb-20">
            Awards &amp; Recognitions
          </h2>

          <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="max-w-[760px] mx-auto"
          >
            <motion.div
              variants={{
                rest: {
                  backgroundColor: "#ffffff",
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.08)",
                },
                hover: {
                  backgroundColor: "#f7931e",
                  boxShadow: "0px 28px 60px rgba(0,0,0,0.25)",
                },
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`
                rounded-[32px]
                px-8 py-12
                md:px-16 md:py-14
                flex ${isDesktop ? "flex-row" : "flex-col"}
                items-center gap-10
                overflow-hidden
              `}
            >
              {/* ===== CONTENT ===== */}
              <motion.div
                variants={{
                  rest: { x: 0, y: 0 },
                  hover: isDesktop
                    ? { x: -40, y: 0 } // desktop ⬅
                    : { x: 0, y: -40 }, // mobile ⬆
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`max-w-md ${isDesktop ? "text-left" : "text-center"}`}
              >
                <motion.p
                  variants={{
                    rest: { color: "#0f172a" },
                    hover: { color: "#ffffff" },
                  }}
                  className="text-[16px] md:text-[18px] leading-relaxed mb-6"
                >
                  Tiger Analytics Wins
                  <span className="block mt-2 font-medium">
                    ISG Leader Retail and CPG Specialty Analytics
                  </span>
                </motion.p>

                <motion.hr
                  variants={{
                    rest: { width: "40%", borderColor: "#cbd5e1" },
                    hover: { width: "100%", borderColor: "#ffffff" },
                  }}
                  className={`border mb-6 ${isDesktop ? "" : "mx-auto"}`}
                />

                <motion.p
                  variants={{
                    rest: { color: "#f7931e" },
                    hover: { color: "#ffffff" },
                  }}
                  className="text-[18px] md:text-[20px] font-medium"
                >
                  2025
                </motion.p>
              </motion.div>

              {/* ===== ICON ===== */}
              <motion.div
                variants={{
                  rest: { x: 0, y: 0 },
                  hover: isDesktop
                    ? { x: 40, y: 0 } // desktop ➡
                    : { x: 0, y: 40 }, // mobile ⬇
                }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0"
              >
                <img
                  src="https://www.tigeranalytics.com/wp-content/uploads/2025/10/ISG-Retal-and-CPG.webp"
                  alt="ISG Award"
                  className="w-[160px] h-[160px] md:w-[200px] md:h-[200px] object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ================= CUSTOMER STORIES ================= */}
<section className="bg-white py-24">
  <div className="max-w-[1400px] mx-auto px-6 md:px-16">
    {/* HEADER */}
    <h2 className="text-[36px] md:text-[42px] font-medium mb-14">
      Customer stories
    </h2>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      
      {/* CARD 1 */}
      <a
        href="/case-studies/market-optimization"
        className="group block bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1581090700227-1e37b190418e"
            alt="Market optimization"
            className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[18px] font-medium leading-snug mb-3">
            American CPG giant gains 4% value boost through market optimization
          </h3>

          <p className="text-[14px] text-slate-600 leading-relaxed mb-6">
            Tiger Analytics enhanced sales execution: 10+ RTM plans, 7% more team
            efficiency, 6% less travel, and precise product availability.
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
            Read
            <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </a>

      {/* CARD 2 */}
      <a
        href="/case-studies/sustainability-insights"
        className="group block bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1582719478171-2b3c6c7b9a1c"
            alt="Sustainability insights"
            className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[18px] font-medium leading-snug mb-3">
            15%+ market share and $500 Mn revenue via sustainability insights
          </h3>

          <p className="text-[14px] text-slate-600 leading-relaxed mb-6">
            Centralized data enabled greener product design and automated safety
            reporting—39% faster insights delivery.
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
            Read
            <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </a>

      {/* CARD 3 */}
      <a
        href="/case-studies/precision-marketing"
        className="group block bg-white rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
      >
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f"
            alt="Precision marketing"
            className="w-full h-[260px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-6">
          <h3 className="text-[18px] font-medium leading-snug mb-3">
            Fortune 500 CPG giant redefines ads with data science and AI
          </h3>

          <p className="text-[14px] text-slate-600 leading-relaxed mb-6">
            Optimized paid search, measured incremental sales, and delivered
            omnichannel SKU profitability insights.
          </p>

          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-900">
            Read
            <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </a>

    </div>
  </div>
</section>

<section className="relative bg-white py-24 overflow-hidden">
  <div className="max-w-[1600px] mx-auto px-6 md:px-16">

    <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

      {/* ================= LEFT FLOATING CARD ================= */}
      <div className="relative z-10">
        <div className="
          bg-[#f7f7f7]
          rounded-[24px]
          px-8 py-10
          md:px-14 md:py-14
          max-w-[560px]
          shadow-sm
        ">
          <h2 className="text-[28px] md:text-[34px] font-medium leading-tight mb-6">
            Win in a rapidly-changing market
            <br />
            with AI and CPG analytics
          </h2>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 text-sm font-medium text-slate-900 group"
          >
            <span className="border-b border-slate-900 pb-[2px]">
              Let’s connect
            </span>
            <span className="text-orange-500 transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="relative">
        <div className="
          rounded-[24px]
          overflow-hidden
          w-full
          h-[320px]
          sm:h-[420px]
          md:h-[480px]
        ">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="Business meeting"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>

                <Footer/>
    </>
  );
}
