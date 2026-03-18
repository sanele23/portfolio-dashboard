import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedBar({ level, color, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="w-full bg-google-grey-100 dark:bg-google-grey-700 rounded-full h-2.5 overflow-hidden"
    >
      <motion.div
        className={`${color} h-2.5 rounded-full`}
        initial={{ width: 0 }}
        animate={isInView ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
