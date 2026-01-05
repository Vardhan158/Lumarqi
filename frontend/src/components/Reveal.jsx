import React from "react";
import { motion } from "framer-motion";

export default function Reveal({ children, className = "", slide = "up", delay = 0 }) {
  const offsets = {
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
  };

  const { x, y } = offsets[slide] || offsets.up;

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
