import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import lottie from "lottie-web";

/* ================= LOTTIE BACKGROUND ================= */

const DNADecoration = () => {
  const lottieRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/tiger-analytics-dna.json", // ✅ CORRECT
    });

    return () => anim.destroy();
  }, []);

  return (
    <div className="absolute bottom-[-80px] right-[-80px] w-[520px] h-[520px] opacity-30 pointer-events-none rotate-[-15deg]">
      <div ref={lottieRef} className="w-full h-full" />
    </div>
  );
};

/* ================= MAIN SECTION ================= */

export default function WhatWeDoSection() {
  const navigate = useNavigate();
  return (
    <section className="relative bg-[#2F2F2D] text-white overflow-hidden min-h-screen flex items-center">

      {/* LOTTIE BACKGROUND */}
      <DNADecoration />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-32">

        {/* ================= TOP ================= */}
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="block text-sm uppercase tracking-widest text-[#F59E0B] mb-6 font-bold">
              What we do
            </span>

            <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8">
              We provide certainty by solving your toughest challenges
            </h2>

            <p className="text-[#D1D1CF] max-w-xl leading-relaxed mb-6">
              Problem-solving is not just about finding answers, but also about
              asking more questions until we know what will determine success
              and how to get there. Our focus is on helping you drive the right
              course of action, dispel ambiguity, and move ahead with confidence
              by bringing the best of AI and analytics together.
            </p>

            <Link
              to="/company/mission-values"
              className="inline-flex items-center gap-2 text-[#F59E0B] font-medium group hover:text-white transition-colors"
            >
              Read our commitment to you
              <span className="transform group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </Link>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#F59E0B]/10 rounded-lg blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="People network"
              className="relative z-10 w-full object-cover rounded-lg shadow-2xl"
            />
          </motion.div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-40 grid lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="block text-sm uppercase tracking-widest text-[#F59E0B] mb-4 font-bold">
              What powers us?
            </span>

            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              The Tiger Gene
            </h3>

            <p className="text-[#D1D1CF] max-w-xl leading-relaxed mb-10">
              An attribute intrinsic to exceptional teams, enabling us to unravel
              complexity, solve hard problems, and deliver meaningful impact
              through ownership, expertise, and experimentation.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="bg-white text-[#1F1F1F] px-8 py-4 font-bold hover:bg-[#F59E0B] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
                onClick={() => navigate('/company/leadership')}
              >
                See how we work ↗
              </button>
              <button
                className="border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-[#1F1F1F] transition-all transform hover:-translate-y-1 shadow-lg"
                onClick={() => navigate('/company/careers')}
              >
                Find a career with us ↗
              </button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
