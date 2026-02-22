"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed z-[70] hidden h-6 w-6 rounded-full border border-cyan-300/50 bg-cyan-400/10 backdrop-blur-sm md:block"
      animate={{ x: pos.x - 12, y: pos.y - 12 }}
      transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.3 }}
    />
  );
}
