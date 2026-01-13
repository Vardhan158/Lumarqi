import React from "react";

const letters = [
  { char: "L", x: -120, y: -80 },
  { char: "U", x: 90, y: -100 },
  { char: "M", x: -140, y: 60 },
  { char: "A", x: 140, y: 80 },
  { char: "R", x: 0, y: -140 },
  { char: " ", x: 0, y: 0 },
  { char: "Q", x: -160, y: 0 },
  { char: "I", x: 160, y: 0 },
];

const LumarLoader = ({ isVisible }) => {
  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center
      bg-[#050812]
      transition-opacity duration-700
      ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      {/* ASSEMBLING LETTERS */}
      <div className="relative flex items-center justify-center mb-6">
        {letters.map((l, i) => (
          <span
            key={i}
            className={`
              assemble-letter
              text-4xl font-semibold tracking-[0.28em]
              ${l.char === "Q" || l.char === "I"
                ? "bg-gradient-to-r from-indigo-500 to-cyan-400 bg-clip-text text-transparent"
                : "text-slate-200"}
            `}
            style={{
              "--from-x": `${l.x}px`,
              "--from-y": `${l.y}px`,
              animationDelay: `${i * 0.1}s`,
            }}
          >
            {l.char === " " ? "\u00A0" : l.char}
          </span>
        ))}
      </div>

      {/* TAGLINE */}
      <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
        Initializing Intelligence
      </p>

      {/* ANIMATION STYLE */}
      <style>
        {`
          @keyframes assembleClean {
            0% {
              opacity: 0;
              transform: translate(var(--from-x), var(--from-y)) scale(0.92);
              filter: blur(6px);
            }

            60% {
              opacity: 1;
              transform: translate(0, 0) scale(1);
              filter: blur(0);
            }

            100% {
              opacity: 1;
              transform: translate(0, 0) scale(1);
              filter: blur(0);
            }
          }

          .assemble-letter {
            display: inline-block;
            animation: assembleClean 2.2s cubic-bezier(0.22, 1, 0.36, 1)
              infinite;
            will-change: transform, opacity, filter;
          }
        `}
      </style>
    </div>
  );
};

export default LumarLoader;
