/**
 * Scroll Animation Utilities
 * Helper functions for scroll-triggered animations
 */

import { useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";

/**
 * Default scroll animation options
 */
const defaultOptions: UseInViewOptions = {
  once: true,
  amount: 0.3,
};

/**
 * Custom hook for scroll animations
 * Triggers animations when element comes into view
 */
export function useScrollAnimation(options: UseInViewOptions = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { ...defaultOptions, ...options });

  return { ref, isInView };
}

/**
 * Stagger delay calculator for sequential animations
 */
export function getStaggerDelay(
  index: number,
  baseDelay: number = 0.1,
): number {
  return index * baseDelay;
}

/**
 * Parallax scroll effect calculator
 */
export function calculateParallax(
  scrollY: number,
  speed: number = 0.5,
): number {
  return scrollY * speed;
}

/**
 * Scroll progress calculator (0 to 1)
 */
export function calculateScrollProgress(
  elementRef: React.RefObject<HTMLElement>,
): number {
  if (!elementRef.current) return 0;

  const element = elementRef.current;
  const windowHeight = window.innerHeight;
  const elementTop = element.getBoundingClientRect().top;
  const elementHeight = element.offsetHeight;

  const start = windowHeight;
  const end = -elementHeight;
  const distance = start - end;
  const progress = (start - elementTop) / distance;

  return Math.max(0, Math.min(1, progress));
}
