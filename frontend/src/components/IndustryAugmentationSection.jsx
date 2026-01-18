import React from "react";
import { useNavigate } from "react-router-dom";
import industryImage from "../assets/home-page-industry-6th-fold-banner-.webp";

function IndustryAugmentationSection() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[85vh] overflow-hidden">
      {/* ===== BACKGROUND IMAGE ===== */}
      <img
        src={industryImage}
        alt="Industry skyline"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* ===== GRADIENT OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 h-full flex items-center">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight mb-6">
            Augmenting industry best practices with AI and analytics
          </h2>

          <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
            Every industry has its specific challenges, and there are no
            playbooks for many pressing ones. Balancing best practices and
            fundamental grounds-up thinking is needed to solve these.
          </p>

          <button
            className="group inline-flex items-center gap-3 border-b border-black pb-1 text-sm font-medium"
            onClick={() => navigate('/industry')}
          >
            Start building now
            <span className="text-orange-500 transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default IndustryAugmentationSection;
