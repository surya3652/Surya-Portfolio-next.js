"use client";

import React from 'react';

interface MarqueeTextProps {
  items: string[];
  speed?: number;
  reverse?: boolean;
}

export default function MarqueeText({ items, speed = 50, reverse = false }: MarqueeTextProps) {
  return (
    <div className="marquee-container">
      <div className={`marquee-content ${reverse ? 'reverse' : ''}`}>
        {[...items, ...items].map((item, index) => (
          <span key={index} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
