"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "./HamburgerMenu.module.css";
import { menuVariants, menuItemVariants } from "@/lib/animations/variants";

const menuItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const contactInfo = [
  {
    title: "Email",
    content: "xxxxxx@gmail.com",
    href: "mailto:xxxxxx@gmail.com",
  },
  {
    title: "Phone",
    content: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
];

const socialLinks = [
  { name: "LinkedIn", url: "#", icon: "bi-linkedin" },
  { name: "GitHub", url: "#", icon: "bi-github" },
  { name: "Portfolio", url: "#", icon: "bi-globe" },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  /* Close on ESC */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.aside
            className={styles.menuPanel}
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className={styles.closeButton}
              onClick={onClose}
              aria-label="Close menu"
            >
              <i className="bi bi-x-lg" />
            </button>

            <div className={styles.menuContent}>
              {/* Navigation */}
              <nav>
                <ul className={styles.menuList}>
                  {menuItems.map((item) => (
                    <motion.li
                      key={item.label}
                      className={styles.menuItem}
                      variants={menuItemVariants}
                    >
                      <Link
                        href={item.href}
                        className={styles.menuLink}
                        onClick={onClose}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Contact */}
              <motion.div
                className={styles.contactInfo}
                variants={menuItemVariants}
              >
                {contactInfo.map((info) => (
                  <div key={info.title} className={styles.contactBlock}>
                    <div className={styles.contactTitle}>{info.title}</div>
                    <div className={styles.divider} />
                    <p className={styles.contactText}>
                      <a href={info.href}>{info.content}</a>
                    </p>
                  </div>
                ))}

                {/* Social */}
                <div className={styles.contactBlock}>
                  <div className={styles.contactTitle}>Follow</div>
                  <div className={styles.divider} />
                  <div className={styles.socialLinks}>
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={social.name}
                      >
                        <i className={`bi ${social.icon}`} />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
