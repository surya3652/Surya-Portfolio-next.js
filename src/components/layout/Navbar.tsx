"use client";

import { useState } from "react";
import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styles.navbar}>
        <div className="container-fluid">
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
        </div>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

