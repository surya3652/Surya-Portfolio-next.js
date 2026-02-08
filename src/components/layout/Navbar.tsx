"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show navbar when hero section is in viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.9, // Trigger when at least 10% of hero is visible
        rootMargin: "0px"
      }
    );

    observer.observe(heroSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header className={`${styles.navbar} ${!isVisible ? styles.hidden : ""}`}>
        <div className={styles.navbarContent}>
          {/* Logo */}
          <div className={styles.logoWrapper}>
            <Link href="#home" className={styles.logo}>
              <span className={styles.logoText}>Surya</span>
            </Link>
          </div>

          {/* Email and Hamburger Button */}
          <div className={styles.headerIcon}>
            <a href="mailto:surya@domain.com" className={styles.email}>
              surya@domain.com
            </a>
            <ThemeToggle />
            <button
              className={styles.hamburgerButton}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className={`${styles.pushButton} ${isMenuOpen ? styles.active : ""}`}>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => {
        setIsMenuOpen(false);
      }} />
    </>
  );
}

