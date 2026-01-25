"use client";

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button className="scroll-progress" onClick={scrollToTop} aria-label="Scroll to top">
      <span>Scroll</span>
      <span className="scroll-line"></span>
    </button>
  );
}
