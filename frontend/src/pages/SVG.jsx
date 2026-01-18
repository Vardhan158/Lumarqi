import React, { useEffect, useRef } from "react";
import svgData from "../assets/svgAnimation.json";

const SVG = () => {
  const refs = useRef({});
  const animationsRef = useRef([]);

  useEffect(() => {
    if (!svgData?.paths?.length) return;

    let delayCursor = 0;

    svgData.paths.forEach((item) => {
      const el = refs.current[item.id];
      if (!el) return;

      /* ===============================
         Base enterprise stroke styling
      =============================== */
      el.style.fill = "none";
      el.style.stroke = item.stroke?.color || "#1f2933";
      el.style.strokeWidth = item.stroke?.width || 2;
      el.style.strokeLinecap = item.stroke?.linecap || "round";
      el.style.strokeLinejoin = item.stroke?.linejoin || "round";

      /* ===============================
         Stroke draw math
      =============================== */
      const length = el.getTotalLength();
      el.style.strokeDasharray = length;
      el.style.strokeDashoffset = length;

      // Force layout so SVG applies dash styles
      el.getBoundingClientRect();

      /* ===============================
         Tiger-style motion:
         draw → brief hold → erase forward
      =============================== */
      const animation = el.animate(
        [
          { strokeDashoffset: length },            // hidden
          { strokeDashoffset: 0, offset: 0.6 },    // fully drawn
          { strokeDashoffset: -length }            // erase forward
        ],
        {
          duration: item.animation?.duration || 4000,
          easing:
            item.animation?.easing ||
            "cubic-bezier(0.4, 0, 0.2, 1)",
          delay: delayCursor + (item.animation?.delay || 0),
          iterations: item.animation?.loop ? Infinity : 1
        }
      );

      animationsRef.current.push(animation);

      // Hierarchy: next path starts after most of this one completes
      delayCursor +=
        (item.animation?.duration || 4000) * 0.65;
    });

    // Cleanup on unmount
    return () => {
      animationsRef.current.forEach((anim) => anim.cancel());
      animationsRef.current = [];
    };
  }, []);

  return (
    <svg
      viewBox={svgData.svg.viewBox}
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio={svgData.svg.preserveAspectRatio}
      style={{
        maxWidth: 480,
        display: "block"
      }}
    >
      {svgData.paths.map((item) => (
        <path
          key={item.id}
          ref={(el) => (refs.current[item.id] = el)}
          d={item.d}
        />
      ))}
    </svg>
  );
};

export default SVG;
