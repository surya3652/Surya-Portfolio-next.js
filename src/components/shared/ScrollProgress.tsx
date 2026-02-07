"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./ScrollProgress.module.css";

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-[50px] bottom-[50px] z-[999] lg:right-[40px] lg:bottom-[40px] md:right-[30px] md:bottom-[30px]">
      <button
        className={`bg-transparent border-none cursor-pointer p-0 flex flex-col items-center gap-[10px] ${styles.scrollTop}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <span className="text-[13px] text-dark-gray font-semibold uppercase tracking-[2px] [writing-mode:vertical-rl] [text-orientation:mixed]">
          Scroll
        </span>
        <span className="w-[2px] h-[80px] bg-gray-300 relative block overflow-hidden">
          <motion.span
            className={`absolute top-0 left-0 w-full h-full bg-base-color block ${styles.scrollPoint}`}
            style={{ scaleY }}
          />
        </span>
      </button>
    </div>
  );
}
