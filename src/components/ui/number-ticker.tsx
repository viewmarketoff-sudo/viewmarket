"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  decimalPlaces = 0,
}: {
  value: number;
  direction?: "up" | "down";
  className?: string;
  delay?: number; // delay in s
  decimalPlaces?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        let startTimestamp: number | null = null;
        const duration = 2000; // ms

        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);

          // Easing function: easeOutExpo
          const easeOutExpo = (x: number): number => {
            return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
          };

          const currentProgress = easeOutExpo(progress);
          const nextValue =
            direction === "up"
              ? currentProgress * value
              : value - currentProgress * value;

          setDisplayValue(nextValue);

          if (progress < 1) {
            window.requestAnimationFrame(step);
          } else {
            setDisplayValue(direction === "up" ? value : 0);
          }
        };

        window.requestAnimationFrame(step);
      }, delay * 1000);
    }
  }, [isInView, value, direction, delay]);

  return (
    <span
      ref={ref}
      className={cn(
        "inline-block tabular-nums tracking-wider text-foreground",
        className,
      )}
    >
      {displayValue.toFixed(decimalPlaces)}
    </span>
  );
}
