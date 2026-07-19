"use client";
import { motion } from "framer-motion";

/**
 * @param {{
 *   children: import("react").ReactNode,
 *   id: string,
 *   className?: string,
 *   style?: import("react").CSSProperties
 * }} props
 */
export default function RevealSection({ children, id, className, style }) {
  return (
    <motion.section
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
