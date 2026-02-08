"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { progressBarVariants } from "@/lib/animations/variants";
import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  title: string;
  percentage: number;
  delay?: number;
}

export default function ProgressBar({
  title,
  percentage,
  delay = 0,
}: ProgressBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div className="w-full" ref={ref}>
      <div className="flex justify-between items-center mb-3">
        <span className="text-base font-semibold text-dark-gray md:text-sm">{title}</span>
        <span className="text-sm font-bold text-base-color">{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={styles.fill}
          custom={percentage}
          variants={progressBarVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  );
}
