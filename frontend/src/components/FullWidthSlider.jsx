import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const NAVBAR_HEIGHT = 72;

const slides = [
  {
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide1.png",
    title: "Transform Data into Value",
    description:
      "Build future-ready data and AI strategies that drive measurable business outcomes.",
    cta: "Explore Services",
    to: "/services"
  },
  {
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide2.png",
    title: "AI-Driven Enterprises",
    description:
      "Operationalize AI at scale with governance, trust, and performance built-in.",
    cta: "Learn More",
    to: "/company/mission-values"
  },
  {
    image:
      "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/gallery/slide3.png",
    title: "Modern Analytics Platforms",
    description:
      "Design scalable, cloud-native platforms for speed, insight, and growth.",
    cta: "View Case Studies",
    to: "/case-studies"
  },
];

/* ================= MOTION VARIANTS ================= */

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export default function FullWidthSlider() {
  const [index, setIndex] = useState(0);
  const total = slides.length;
  const navigate = useNavigate();

  const next = () => setIndex((i) => (i + 1) % total);
  const prev = () => setIndex((i) => (i - 1 + total) % total);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(next, 6500);
    return () => clearInterval(interval);
  }, []);

  const handleCtaClick = () => {
    const to = slides[index].to;
    if (to) navigate(to);
  };

  return (
    <section
      className="relative w-screen overflow-hidden"
      style={{
        marginTop: NAVBAR_HEIGHT,
        height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
      }}
    >
      {/* SLIDER TRACK */}
      <div
        className="flex h-full transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: `translateX(-${index * 100}vw)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-screen h-full flex-shrink-0">
            {/* IMAGE */}
            <img
              src={slide.image}
              alt={slide.title}
              className={`absolute inset-0 w-full h-full object-cover
                transition-transform duration-[9000ms] ease-linear
                ${i === index ? "scale-110" : "scale-100"}`}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/35" />

            {/* LEFT CONTENT */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-xl px-8 md:px-16 lg:px-24 text-white">
                <AnimatePresence mode="wait">
                  {i === index && (
                    <motion.div
                      key={index}
                      variants={containerVariants}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <motion.h1
                        variants={itemVariants}
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
                      >
                        {slide.title}
                      </motion.h1>

                      <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-white/90 mb-8"
                      >
                        {slide.description}
                      </motion.p>

                      <motion.div variants={itemVariants}>
                        <button
                          className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 transition"
                          onClick={handleCtaClick}
                        >
                          {slide.cta}
                        </button>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 rounded-full
                   bg-black/40 hover:bg-black/60
                   text-white text-xl
                   flex items-center justify-center transition"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20
                   w-12 h-12 rounded-full
                   bg-black/40 hover:bg-black/60
                   text-white text-xl
                   flex items-center justify-center transition"
      >
        ❯
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all
              ${i === index ? "w-8 bg-white" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </section>
  );
}
