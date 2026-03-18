import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function AnimatedCounter({ value, duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = typeof value === "string" ? parseInt(value) : value;
  const suffix = typeof value === "string" ? value.replace(/\d+/, "") : "";

  return (
    <span ref={ref}>
      {isInView ? (
        <>
          <InnerCounter from={0} to={numericValue} duration={duration} />
          {suffix}
        </>
      ) : (
        "0"
      )}
    </span>
  );
}

function InnerCounter({ from, to, duration }) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(from + (to - from) * eased));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration]);

  return count;
}
