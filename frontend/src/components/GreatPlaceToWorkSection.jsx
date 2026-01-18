import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    title: "Join Tiger Analytics at NRF 2026",
    subtitle: "Shaping Retail & CPG’s AI Future",
    meta: "January 11 – 13, 2026  |  Jacob K. Javits Convention Center, NYC",
    cta: "Meet us",
    background:
      "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
  },
  {
    title:
      "Tiger Analytics Wins Minsky Award for Excellence in AI Strategy Consulting",
    subtitle: "",
    meta:
      "Leading the way in AI-powered business transformation across industries.",
    cta: "Know More",
    background:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  },
  {
    title: "Our Tribe Makes All the Difference",
    subtitle: "",
    meta:
      "We are certified as a Great Place to Work® for yet another year.",
    cta: "Know More",
    background:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
];

export default function GreatPlaceToWorkSlider() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  // Navigation targets for each slide
  const slideLinks = [
    "/company/news",
    "/company/news",
    "/company/careers"
  ];

  const handleCtaClick = () => {
    const to = slideLinks[index];
    if (to) navigate(to);
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* SLIDE BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[index].background}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-16 lg:px-24">

          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${index}`}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-white max-w-xl p-14 shadow-2xl"
            >
              <h2 className="text-4xl md:text-5xl font-medium text-[#1F1F1F] leading-tight mb-4">
                {slides[index].title}
              </h2>

              {slides[index].subtitle && (
                <p className="text-2xl text-[#F97316] mb-6">
                  {slides[index].subtitle}
                </p>
              )}

              <p className="text-[#4B4B4B] text-lg mb-10 leading-relaxed">
                {slides[index].meta}
              </p>

              <button
                className="inline-flex items-center gap-3 bg-[#2C2C2C] text-white px-8 py-4 text-base font-medium hover:bg-black transition"
                onClick={handleCtaClick}
              >
                {slides[index].cta}
                <span className="text-[#F97316]">↗</span>
              </button>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* CONTROLS */}
      <div className="absolute bottom-10 right-10 flex gap-4 z-20">
        <button
          onClick={prev}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#F97316] transition"
        >
          <span className="text-black text-xl">←</span>
        </button>
        <button
          onClick={next}
          className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-[#F97316] transition"
        >
          <span className="text-black text-xl">→</span>
        </button>
      </div>
    </section>
  );
}
