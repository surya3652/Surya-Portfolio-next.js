"use client";

import styles from "./MarqueeText.module.css";

interface MarqueeTextProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
  fontSize?: string;
}

export default function MarqueeText({
  items,
  speed = 40,
  reverse = false,
  fontSize = "180px",
}: MarqueeTextProps) {
  const animationDuration = `${speed}s`;

  return (
    <div className="overflow-hidden whitespace-nowrap py-[50px] bg-dark-gray relative md:py-[40px]">
      <div
        className={`flex gap-[60px] md:gap-[40px] ${styles.marqueeContent} ${reverse ? styles.reverse : ""}`}
        style={{
          animationDuration,
        }}
      >
        {/* Duplicate items for seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={index}
            className="font-bold text-white/10 uppercase tracking-tight whitespace-nowrap lg:text-[150px] md:text-[120px] sm:text-[80px]"
            style={{ fontSize }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
