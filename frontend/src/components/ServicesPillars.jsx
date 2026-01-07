import { motion } from "framer-motion";

/* ================= DRAW VARIANT (INFINITE) ================= */

const draw = {
  hidden: { pathLength: 0, opacity: 0.25 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: {
        duration: 2.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.6,
      },
      opacity: { duration: 0.4 },
    },
  },
};

/* ================= SVGs (UNCHANGED) ================= */

function StrategySvgAnimation() {
  return (
    <motion.svg viewBox="0 0 536 536" className="w-40 h-40 mb-10 mx-auto" fill="none" initial="hidden" animate="visible">
      <motion.path
        variants={draw}
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d={`
M330.532 272.009
C330.531 239.689 304.33 213.488 272.01 213.489
C239.69 213.49 213.489 239.691 213.49 272.011
C213.491 304.331 239.69 330.531 272.01 330.531
C304.331 330.531 330.532 304.33 330.532 272.009

M272.009 144.254
C342.566 144.254 399.764 201.452 399.764 272.009
C399.764 342.566 342.566 399.764 272.009 399.764
C201.452 399.764 144.254 342.566 144.254 272.009
C144.254 201.452 201.452 144.254 272.009 144.254
        `}
      />
    </motion.svg>
  );
}

function EngineerDataSvgAnimation() {
  return (
    <motion.svg viewBox="0 0 536 536" className="w-40 h-40 mb-10 mx-auto" fill="none" initial="hidden" animate="visible">
      <motion.circle cx="268" cy="268" r="18" variants={draw} stroke="#000" strokeWidth="2" fill="none" />
      <motion.path d="M268 130 A138 138 0 1 1 267.9 130" variants={draw} stroke="#000" strokeWidth="2" fill="none" />
      <motion.path d="M268 180 A88 88 0 1 1 267.9 180" variants={draw} stroke="#000" strokeWidth="2" fill="none" />
    </motion.svg>
  );
}

function DifferentiateAISvgAnimation() {
  return (
    <motion.svg viewBox="0 0 536 536" className="w-40 h-40 mb-10 mx-auto" fill="none" initial="hidden" animate="visible">
      <motion.circle cx="180" cy="160" r="90" variants={draw} stroke="#000" strokeWidth="2" fill="none" />
      <motion.circle cx="180" cy="160" r="45" variants={draw} stroke="#000" strokeWidth="2" fill="none" />
      <motion.path d="M60 420 L420 60" variants={draw} stroke="#000" strokeWidth="2" />
    </motion.svg>
  );
}

function OperationalizeInsightsSvgAnimation() {
  return (
    <motion.svg viewBox="0 0 536 536" className="w-40 h-40 mb-10 mx-auto" fill="none" initial="hidden" animate="visible">
      <motion.circle cx="268" cy="268" r="244" variants={draw} stroke="#000" strokeWidth="2" fill="none" />
      <motion.path
        d="M80 268 C140 200 200 180 268 180 C336 180 396 200 456 268 C396 336 336 356 268 356 C200 356 140 336 80 268 Z"
        variants={draw}
        stroke="#000"
        strokeWidth="2"
        fill="none"
      />
    </motion.svg>
  );
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

        {/* TAB 1 */}
        <div className="bg-[#FBEFCD] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <StrategySvgAnimation />
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

        {/* TAB 2 */}
        <div className="bg-[#CFE9E6] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <EngineerDataSvgAnimation />
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

        {/* TAB 3 */}
        <div className="bg-[#D5E8F1] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <DifferentiateAISvgAnimation />
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

        {/* TAB 4 */}
        <div className="bg-[#FBE3C8] rounded-3xl px-10 py-12 flex flex-col items-center text-center min-h-[620px]">
          <OperationalizeInsightsSvgAnimation />
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
