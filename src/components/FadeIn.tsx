import { motion, type Variants } from "framer-motion";
import type { CSSProperties, ReactNode } from "react";

interface FadeInProps {
  children?: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Wraps children in a fade/slide-in entrance animation that plays once,
 * the first time the element scrolls into view. Used throughout the site
 * instead of repeating the same Framer Motion boilerplate in every section.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  const variants: Variants = {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: [0.25, 0.1, 0.25, 1], delay },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "50px", amount: 0 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
