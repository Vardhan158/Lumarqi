import React, { useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import lottie from "lottie-web";

import analyticsImg from "../../assets/TA-Services-Strategy-_-Advisory-Analytics-Roadmap.webp";
import dataStrategyImg from "../../assets/TA-Services-Strategy-_-Advisory-Data-Strategy.webp";
import platformStrategyImg from "../../assets/TA-Services-Strategy-_-Advisory-Platform-Strategy.webp";

import storyImg1 from "../../assets/platform-strategy-QEP-.webp";
import storyImg2 from "../../assets/analytics-roadmap-1-2.webp";
import storyImg3 from "../../assets/data-strategy-1-2.webp";

/* ================= HERO LOTTIE ================= */

function HeroLottie() {
  const containerRef = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/strategy-advisory.json",
    });

    return () => animation.destroy();
  }, []);

  return <div ref={containerRef} className="w-full h-full" />;
}

export default function StrategyAdvisory() {
  return (
    <div className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="bg-[#eef3ff] px-6 md:px-16 lg:px-24 xl:px-32 pt-24 pb-32">
        <div className="text-sm mb-20 text-[#222]">
          Home / Services / <span className="font-medium">Strategy & Advisory</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-semibold text-[#0b132b] leading-tight">
              Drive business value<br />
              with the right<br />
              <span className="font-bold">strategies</span> and<br />
              roadmaps
            </h1>

            <p className="mt-6 text-lg text-[#1c2541] max-w-xl">
              Accelerate your AI-driven transformation across the business value chain
            </p>

            <button className="mt-10 bg-[#4f46e5] text-white px-8 py-4 rounded-full font-medium">
              Request a consultation
            </button>
          </div>

          <div className="flex justify-end">
            <div className="w-full max-w-[460px] aspect-square">
              <HeroLottie />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VALUE SECTION ================= */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <h2 className="text-[40px] lg:text-[52px] font-semibold text-[#0b132b] leading-tight">
            Maximize your data outcomes through tailored strategies that align with your goals and drive growth
          </h2>

          <div className="text-[#1c2541] text-lg space-y-6">
            <p>
              In the ever-evolving digital landscape, analyzing large amounts of data rapidly
              and reliably while aligning it with key objectives has become crucial.
            </p>
            <p>
              At Tiger Analytics, we identify precise business areas where AI and analytics
              can generate substantial value.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}


      {/* ================= OUR OFFERINGS ================= */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-40">
        <h3 className="text-[32px] font-semibold mb-14">Our offerings</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <OfferingCard
            image={analyticsImg}
            title="Analytics Roadmap"
            description="Drive AI and analytics adoption across critical business areas with our personalized roadmaps, accelerating your journey towards informed decision-making and digital transformation."
          />

          <OfferingCard
            image={dataStrategyImg}
            title="Data Strategy"
            description="Implement the right data strategy tailored to your business objectives with optimized data management, quality, and governance practices."
          />

          <OfferingCard
            image={platformStrategyImg}
            title="Platform Strategy"
            description="Leverage your data’s full potential to enhance operational efficiency by defining the right technology infrastructure and platforms."
          />
        </div>
      </section>

            <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-32">
        <h3 className="text-[32px] font-semibold mb-20">Why choose us?</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {[
            "Customized advisory services to address industry-specific challenges and regulatory compliance",
            "Comprehensive strategic planning to drive business growth and success",
            "Decision-making frameworks and methodologies for informed, data-driven choices",
            "Risk management strategies and organizational design to optimize business outcomes",
          ].map((text, i) => (
            <div key={i}>
              <div className="h-[1px] w-full bg-[#b9b1a8] mb-6" />
              <p className="text-[16px] text-[#222] leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CUSTOMER STORIES ================= */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-40">
        <h3 className="text-[32px] font-semibold mb-14">Customer stories</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <CustomerStory
            image={storyImg1}
            title="ML platform powers data accessibility for private equity firm"
            description="Tiger Analytics built a Machine Learning (ML) platform to act as a centralized gateway for internal users, portfolio companies, and partners."
          />

          <CustomerStory
            image={storyImg2}
            title="Next-gen RGM boosts promotion ROI for confectionery manufacturer"
            description="Tiger Analytics established a feasible model that improved product promotion recommendations at the customer level."
          />

          <CustomerStory
            image={storyImg3}
            title="Redesigned Clickstream platform boosts grocery retailer’s margin by $17 million"
            description="Tiger Analytics established a future-ready Clickstream platform and a best-fit operating model."
          />
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="bg-[#f6f6f6] rounded-3xl p-16">
            <h3 className="text-[36px] font-semibold leading-tight">
              Design data strategies that drive business excellence
            </h3>

            <span className="mt-8 inline-flex items-center gap-2 border-b border-black text-sm">
              Let’s connect ↗
            </span>
          </div>

          <div className="rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ================= OFFERING CARD ================= */

function OfferingCard({ image, title, description }) {
  return (
    <div className="bg-[#fff2cf] rounded-2xl p-10 flex flex-col items-center text-center h-full">
      <img src={image} alt={title} className="w-full max-w-[260px] mb-10 object-contain" />
      <h4 className="text-lg font-medium text-[#222]">{title}</h4>
      <p className="mt-4 text-sm text-[#333] leading-relaxed max-w-sm">
        {description}
      </p>
      <span className="mt-auto pt-10 border-b border-black text-sm flex items-center gap-2">
        Here’s what we offer ↗
      </span>
    </div>
  );
}

/* ================= CUSTOMER STORY CARD ================= */

function CustomerStory({ image, title, description }) {
  return (
    <div className="border rounded-2xl overflow-hidden bg-white flex flex-col h-full">
      <img src={image} alt={title} className="h-52 w-full object-cover" />
      <div className="p-8 flex flex-col flex-1">
        <h4 className="font-medium mb-4">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
        <span className="mt-auto inline-flex items-center gap-2 text-sm border-b border-black w-fit">
          Read ↗
        </span>
      </div>
    </div>
  );
}
