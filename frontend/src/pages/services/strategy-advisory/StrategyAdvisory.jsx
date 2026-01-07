import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Reveal from "../../../components/Reveal";
import Footer from "../../../components/Footer";

export default function StrategyAdvisory() {
  const radius = 140;
  const circumference = 2 * Math.PI * radius;

  const progressRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: progressRef,
    offset: ["start end", "end start"],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const strokeOffset = useTransform(
    progress,
    (v) => circumference * (1 - v / 100)
  );

  const [percent, setPercent] = useState(0);
  const svgRef = useRef(null);
  const svgUnsubRef = useRef(null);

  useEffect(() => {
    const unsubscribe = progress.onChange((v) =>
      setPercent(Math.round(v))
    );
    return () => unsubscribe();
  }, [progress]);

  // Stroke draw animation synced with scroll
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const targets = Array.from(el.querySelectorAll("path, circle"));
    const total = Math.max(1, targets.length);

    targets.forEach((t, i) => {
      try {
        const len = t.getTotalLength();
        t.style.strokeDasharray = `${len}`;
        t.style.strokeDashoffset = `${len}`;
        t.__startPercent = total > 1 ? (i / (total - 1)) * 60 : 0;
        t.style.opacity = "0";
        t.style.transition =
          "stroke-dashoffset 0.12s linear, opacity 0.12s linear";
      } catch {}
    });

    svgUnsubRef.current = progress.onChange((v) => {
      targets.forEach((t) => {
        try {
          const len = parseFloat(t.style.strokeDasharray);
          const start = t.__startPercent || 0;
          const local = Math.max(
            0,
            Math.min(1, (v - start) / (100 - start))
          );
          t.style.strokeDashoffset = `${len * (1 - local)}`;
          t.style.opacity = `${local}`;
        } catch {}
      });
    });

    return () => svgUnsubRef.current?.();
  }, [svgRef.current]);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 bg-indigo-50 flex flex-col">
        <Reveal>
          <div className="pt-32 mb-8 flex items-center gap-2 text-sm">
            <a href="/" className="text-slate-600 hover:text-slate-900">Home</a>
            <span className="text-slate-400">/</span>
            <a href="/services" className="text-slate-600 hover:text-slate-900">Services</a>
            <span className="text-slate-400">/</span>
            <span className="text-slate-900 font-semibold">
              Strategy & Advisory
            </span>
          </div>
        </Reveal>

        <div className="flex-1 flex items-center">
          <div className="grid md:grid-cols-2 gap-12 w-full items-center">
            {/* LEFT CONTENT */}
            <Reveal>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 mb-6">
                  Drive business value with the right strategies and roadmaps
                </h1>

                <p className="text-lg text-slate-700 max-w-md">
                  Accelerate your AI-driven transformation across the business value chain
                </p>

                <motion.button
                  className="mt-12 px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full"
                >
                  Request a consultation
                </motion.button>
              </motion.div>
            </Reveal>

            {/* RIGHT ANIMATION (IMAGE REPLACED HERE) */}
            <Reveal>
              <motion.div className="relative flex justify-center items-center h-full">
                {/* Rotating rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[420px] h-[420px] rounded-full border border-indigo-200/40"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[340px] h-[340px] rounded-full border border-indigo-300/40"
                />

                {/* Progress + SVG */}
                <div
                  ref={progressRef}
                  className="relative w-80 h-80 flex items-center justify-center"
                >
                  <svg width="320" height="320" className="-rotate-90">
                    <circle
                      cx="160"
                      cy="160"
                      r={radius}
                      stroke="#E0E7FF"
                      strokeWidth="12"
                      fill="none"
                    />
                    <motion.circle
                      cx="160"
                      cy="160"
                      r={radius}
                      stroke="#4F46E5"
                      strokeWidth="12"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      style={{ strokeDashoffset: strokeOffset }}
                    />
                  </svg>

                  {/* Percentage */}
                  <div className="absolute text-center">
                    <span className="text-5xl font-semibold text-indigo-600">
                      {percent}%
                    </span>
                    <p className="text-sm text-slate-600">
                      Strategy Maturity
                    </p>
                  </div>

                  {/* FLOATING SVG (REPLACED IMAGE) */}
                  <motion.svg
                    ref={svgRef}
                    animate={{
                      y: [0, -12, 0],
                      rotate: [0, 6, 0, -6, 0],
                      scale: [1, 1.06, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-40 h-40 opacity-20 pointer-events-none"
                    viewBox="0 0 540 540"
                  >
                    <path
                      d="M330.3940124511719,267.9670104980469 C328.3169860839844,237.53199768066406 302.97100830078125,213.48800659179688 272.010009765625,213.48899841308594 C239.69000244140625,213.49000549316406 213.48899841308594,239.6909942626953 213.49000549316406,272.010986328125 C213.49099731445312,304.33099365234375 239.69000244140625,330.531005859375 272.010009765625,330.531005859375 C304.33099365234375,330.531005859375 330.5320129394531,304.3299865722656 330.5320129394531,272.0090026855469 M280.8340148925781,144.5540008544922 C347.27398681640625,149.08700561523438 399.7640075683594,204.41799926757812 399.7640075683594,272.0090026855469 C399.7640075683594,342.5660095214844 342.5660095214844,399.7640075683594 272.0090026855469,399.7640075683594 C201.45199584960938,399.7640075683594 144.25399780273438,342.5660095214844 144.25399780273438,272.0090026855469 C144.25399780273438,201.45199584960938 201.45199584960938,144.25399780273438 272.0090026855469,144.25399780273438 M255.97900390625,74.5979995727539 C151.50999450683594,82.99400329589844 70.88099670410156,171.97999572753906 74.04199981689453,277.9159851074219 C77.30500030517578,387.25 168.58299255371094,473.2380065917969 277.9169921875,469.97601318359375 C382.6990051269531,466.8489990234375 466.89599609375,382.61700439453125 469.9800109863281,277.8340148925781 M193.5970001220703,16.698999404907227 C84.39700317382812,50.19599914550781 5,151.83099365234375 5,272.0090026855469 C5,419.47900390625 124.54499816894531,539.0180053710938 272.0090026855469,539.0180053710938 C396.5119934082031,539.0180053710938 501.1109924316406,453.8059997558594 530.6690063476562,338.52099609375 M282.031005859375,5 C330.5820007324219,5 539.0180053710938,5 539.0180053710938,5 C539.0180053710938,5 539.0180053710938,272.0090026855469 539.0180053710938,272.0090026855469 C539.0180053710938,272.0090026855469 272.0090026855469,5 272.0090026855469,5 M477.85699462890625,135.7899932861328 C477.85699462890625,122.63600158691406 477.85699462890625,66.16300201416016 477.85699462890625,66.16300201416016 C477.85699462890625,66.16300201416016 405.5159912109375,66.16300201416016 405.5159912109375,66.16300201416016 C405.5159912109375,66.16300201416016 477.85699462890625,138.5050048828125 477.85699462890625,138.5050048828125"
                      fill="none"
                      stroke="black"
                      strokeWidth="2"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
