import { motion } from "framer-motion";

/* ================= DNA DECORATION ================= */

const DNADecoration = () => {
  const numRungs = 12;

  return (
    <div className="absolute bottom-[-60px] right-[-60px] w-[520px] h-[520px] opacity-30 pointer-events-none overflow-hidden rotate-[-15deg]">
      <svg viewBox="0 0 400 400" className="w-full h-full">
        {[...Array(numRungs)].map((_, i) => {
          const baseX = 200;
          const baseY = 40 + i * 26;
          const delay = i * 0.18;

          return (
            <g key={i}>
              {/* DNA RUNG */}
              <motion.line
                x1={baseX - 60}
                x2={baseX + 60}
                y1={baseY}
                y2={baseY}
                stroke="#E5E5E5"
                strokeWidth="1"
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.5, 0.15] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              />

              {/* LEFT STRAND */}
              <motion.circle
                cx={baseX - 60}
                cy={baseY}
                r="4"
                fill="#F59E0B"
                animate={{
                  cx: [baseX - 60, baseX + 60, baseX - 60],
                  r: [4, 6, 4],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              />

              {/* RIGHT STRAND */}
              <motion.circle
                cx={baseX + 60}
                cy={baseY}
                r="4"
                fill="#E5E5E5"
                animate={{
                  cx: [baseX + 60, baseX - 60, baseX + 60],
                  r: [4, 2, 4],
                  opacity: [0.4, 0.2, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ================= MAIN SECTION ================= */

export default function WhatWeDoSection() {
  return (
    <section className="relative bg-[#2F2F2D] text-white overflow-hidden min-h-screen flex items-center">
      
      {/* DNA BACKGROUND */}
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

            <a
              href="#"
              className="inline-flex items-center gap-2 text-[#F59E0B] font-medium group hover:text-white transition-colors"
            >
              Read our commitment to you
              <span className="transform group-hover:translate-x-1 transition-transform">
                ↗
              </span>
            </a>
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
              <button className="bg-white text-[#1F1F1F] px-8 py-4 font-bold hover:bg-[#F59E0B] hover:text-white transition-all transform hover:-translate-y-1 shadow-lg">
                See how we work ↗
              </button>
              <button className="border-2 border-white text-white px-8 py-4 font-bold hover:bg-white hover:text-[#1F1F1F] transition-all transform hover:-translate-y-1 shadow-lg">
                Find a career with us ↗
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
