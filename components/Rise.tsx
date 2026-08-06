"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Replaces the original IntersectionObserver +
 * CSS-class toggle with a Framer Motion spring for a smoother, more
 * premium fade/rise-in as sections enter the viewport.
 */
export default function Rise({
  as: _as,
  className = "",
  children,
  delay = 0,
  ...rest
}: {
  as?: "div"; // kept for call-site compatibility; Rise only ever renders a div
  className?: string;
  children: ReactNode;
  delay?: number;
  [key: string]: any;
}) {
  return (
    <motion.div
      data-rise
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
