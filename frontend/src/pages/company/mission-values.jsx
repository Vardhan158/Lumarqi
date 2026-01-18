import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/Navbar";
import heroImage from "../../assets/unnamed.jpg";
import valuesImage from "../../assets/Frame-8.avif";

/* ================= COUNT-UP HOOK ================= */
function useCountUp(target, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setValue(decimals ? current.toFixed(decimals) : Math.floor(current));

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  return { value, ref };
}

/* ================= METRIC ================= */
function Metric({ label, prefix = "", suffix = "", value, decimals = 0 }) {
  const { value: count, ref } = useCountUp(value, 1600, decimals);

  return (
    <div>
      <div className="h-[1px] w-full bg-blue-600 mb-6" />
      <h3 ref={ref} className="text-5xl font-light text-slate-900">
        {prefix}
        {Number(count).toLocaleString()}
        {suffix}
      </h3>
      <p className="mt-3 text-slate-600">{label}</p>
    </div>
  );
}

/* ================= PAGE ================= */
export default function MissionValues() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const CourageIcon = () => (
    <svg width="28" height="28" fill="none" stroke="#1d4ed8" strokeWidth="2">
      <path d="M14 3l7 4v6c0 5-3.5 9-7 12-3.5-3-7-7-7-12V7l7-4z" />
    </svg>
  );

  const CuriosityIcon = () => (
    <svg width="28" height="28" fill="none" stroke="#1d4ed8" strokeWidth="2">
      <path d="M4 18c6 0 6-6 10-6s4 6 10 6" />
      <path d="M12 18v4" />
    </svg>
  );

  const CollaborationIcon = () => (
    <svg width="28" height="28" fill="none" stroke="#1d4ed8" strokeWidth="2">
      <path d="M7 12l3 3 4-4" />
      <path d="M14 12l3 3 4-4" />
    </svg>
  );

  /* ================= VALUE CARD ================= */
  function ValueCard({ icon, title, text }) {
    return (
      <div className="border border-[#d8d2c7] bg-[#f7f1e6] p-6">
        <div className="flex items-center gap-4 mb-4">
          {icon}
          <h3 className="text-xl font-medium text-slate-900">{title}</h3>
        </div>

        <div className="h-[1px] w-full bg-[#d8d2c7] mb-4" />

        <p className="text-slate-700 text-sm leading-relaxed">
          {text}
        </p>
      </div>
    );
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] h-[60vh] sm:h-[70vh] md:h-screen flex items-center">
        <img
          src={heroImage}
          alt="Mission and Values"
          className="absolute inset-0 h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
        <div className="relative z-10 flex h-full items-center px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 w-full">
          <div className="max-w-4xl w-full">
            <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-light">
              Mission & values
            </h1>
            <p className="mt-6 text-white/80 max-w-xl text-base sm:text-lg">
              Transforming uncertainty into opportunity for the world’s most successful organisations.
            </p>
            <div className="mt-10 h-[1px] w-32 sm:w-48 bg-white/40" />
          </div>
        </div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="bg-white px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-14 sm:py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] text-slate-500 uppercase mb-6">Our impact in numbers</p>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light">In a world drowning in data, we deliver clarity</h2>
          <div className="mt-6 h-[2px] w-20 sm:w-28 bg-blue-600" />
        </div>
        <div className="mt-12 sm:mt-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 md:gap-16 max-w-5xl mx-auto">
          <Metric value={4900} suffix="+" label="Clients worldwide" />
          <Metric value={3700} suffix="+" label="Employees worldwide" />
          <Metric value={285.5} prefix="£" suffix="m" decimals={1} label="Revenue" />
          <Metric value={116.8} prefix="£" suffix="m" decimals={1} label="Adjusted ebitda" />
        </div>
      </section>

      {/* ================= IMAGE ================= */}
      <section>
        <img
          src="https://www.globaldata.com/wp-content/uploads/2024/09/Frame-8.png"
          alt=""
          className="w-full h-auto max-h-[320px] sm:max-h-[420px] md:max-h-[520px] object-cover"
        />
      </section>

      {/* ================= MISSION / VISION ================= */}
      <section className="bg-white px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-14 sm:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {[
            ["Our mission", "To turn data into foresight, questions into answers, and decisions into results."],
            ["Our vision", "To provide the intelligence that transforms uncertainty into opportunity."]
          ].map(([title, text]) => (
            <div key={title}>
              <h2 className="text-4xl font-light">{title}</h2>
              <div className="relative mt-6 mb-10 h-[1px] bg-slate-300">
                <span className="absolute left-0 top-0 h-[2px] w-32 bg-blue-600" />
              </div>
              <p className="text-slate-600 max-w-xl">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= HERITAGE (PARALLAX) ================= */}
      <section className="bg-white px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-14 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 min-h-[60vh] lg:min-h-[80vh]">
          {/* ================= LEFT (PINNED) ================= */}
          <div className="lg:sticky lg:top-32 self-start max-w-xl h-fit mb-10 lg:mb-0">
            <p className="text-xs tracking-[0.25em] text-slate-500 uppercase mb-6">
              Our heritage
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 leading-tight">
              We’ve brought the best providers & tools together to create a
              single, powerful experience
            </h2>
            <div className="mt-8 h-[2px] w-28 bg-blue-600" />
            <p className="mt-10 text-slate-600 leading-relaxed">
              Our technology keeps growing. And so do our people and expertise.
              Together, we help you turn data into foresight, questions into
              answers, and decisions into results.
            </p>
          </div>
          {/* ================= RIGHT (SCROLLABLE) ================= */}
          <div className="h-72 sm:h-96 md:h-[420px] lg:h-full overflow-y-auto pr-0 sm:pr-4 space-y-6 sm:space-y-10">
            {Array.from({ length: 28 }).map((_, index) => (
              <div
                key={index}
                className="border border-slate-200 bg-white p-4 sm:p-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4">
                  <span className="text-xs font-semibold text-slate-500 uppercase">Brand</span>
                  <h3 className="text-lg sm:text-xl font-medium text-slate-900">Company {index + 1}</h3>
                </div>
                <div className="h-[1px] w-full bg-slate-200 mb-4" />
                <p className="text-slate-600 text-sm leading-relaxed">
                  Acquired 2025. Strategic intelligence platform delivering cross-industry insights and decision-grade intelligence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col lg:grid lg:grid-cols-[45%_55%] min-h-[60vh] lg:min-h-screen">
          {/* ================= LEFT PANEL ================= */}
          <div className="bg-[#0b1a24] px-6 sm:px-10 md:px-16 py-14 sm:py-24 flex flex-col justify-center">
            <p className="text-xs tracking-[0.35em] text-white/60 uppercase mb-6">Our values</p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight max-w-xl">Our values shape how we work with you and each other</h2>
            <p className="mt-6 text-white/70 max-w-md">They shape our culture and help us make a real impact.</p>
            <ul className="mt-10 sm:mt-12 space-y-3 sm:space-y-4 text-white">
              {["Courage", "Curiosity", "Collaboration"].map((item) => (
                <li key={item} className="flex items-center gap-2 sm:gap-3">
                  <span className="text-green-400 text-lg">✓</span>
                  <span className="text-base">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* ================= RIGHT PANEL ================= */}
          <div className="bg-[#f7f1e6] flex flex-col sm:flex-row">
            {/* IMAGE */}
            <div className="w-full sm:w-[52%] relative min-h-[180px] sm:min-h-0 h-40 sm:h-auto">
              <img
                src={valuesImage}
                alt="Corporate building"
                className="absolute inset-0 w-full h-full object-cover rounded-none"
              />
            </div>
            {/* CARDS */}
            <div className="w-full sm:w-[48%] px-4 sm:px-8 py-8 sm:py-16 space-y-4 sm:space-y-6 overflow-y-auto">
              <ValueCard
                icon={<CourageIcon />}
                title="Courage"
                text="We guide our customers and the markets we serve, to a more successful, sustainable future. We are bold, courageous, trustworthy, and resilient when making a positive difference."
              />
              <ValueCard
                icon={<CuriosityIcon />}
                title="Curiosity"
                text="We have a curiosity for opportunities to innovate and do things better, with an appetite for experimentation and thinking differently."
              />
              <ValueCard
                icon={<CollaborationIcon />}
                title="Collaboration"
                text="We work together and combine our powerful resources to provide clarity in a complex world. We believe in the collective power of data, technology, expertise, and collaborative relationships to succeed."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-[#0b1a24] to-[#0e2233] text-white">
        {/* ================= TOP ================= */}
        <div className="px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-14 sm:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 relative">
            {/* Divider */}
            <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px bg-white/10" />
            {/* LEFT */}
            <div className="mb-10 lg:mb-0">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-2xl font-semibold">GlobalData</span>
              </div>
              <h4 className="text-lg font-medium mb-2">Company information</h4>
              <p className="text-white/70 text-sm leading-relaxed max-w-lg">
                Registered Office: John Carpenter House, John Carpenter Street,<br />
                London, EC4Y 0AN, UK<br />
                Registered in England No. 03925319
              </p>
              <button className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:gap-4 transition-all">
                Contact us
                <span>→</span>
              </button>
            </div>
            {/* RIGHT */}
            <div className="flex flex-col justify-center items-start lg:items-center">
              <h3 className="text-2xl md:text-3xl font-light mb-8 max-w-md">DECODED, your curated industry newsletter.</h3>
              <button className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-3 rounded-full font-medium w-full sm:w-fit hover:gap-4 transition-all mb-4">
                Subscribe
                <span>→</span>
              </button>
              <div className="mt-6 flex gap-6 text-white/60 text-sm flex-wrap">
                <a href="#" className="hover:text-white transition">LinkedIn</a>
                <a href="#" className="hover:text-white transition">Instagram</a>
              </div>
            </div>
          </div>
        </div>
        {/* ================= BOTTOM ================= */}
        <div className="border-t border-white/10 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-32 py-6 relative">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <div className="flex flex-wrap gap-4 justify-center md:justify-start w-full md:w-auto">
              <a href="#" className="hover:text-white transition">Modern Slavery Statement</a>
              <a href="#" className="hover:text-white transition">UK Gender Pay Gap report</a>
              <a href="#" className="hover:text-white transition">Terms & Conditions</a>
              <a href="#" className="hover:text-white transition">Privacy Policy</a>
            </div>
            <div className="text-center md:text-left w-full md:w-auto">Copyright © GlobalData Plc 2025. All Rights Reserved.</div>
          </div>
          {/* Back to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 md:right-16 bg-white/10 border border-white/20 w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/20 transition"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </footer>
    </main>
  );
}