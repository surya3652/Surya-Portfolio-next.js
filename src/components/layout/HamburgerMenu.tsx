"use client";

import { useState, useEffect } from "react";
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
  {
    name: "LinkedIn",
    url: "#",
    icon: "bi-linkedin",
  },
  {
    name: "GitHub",
    url: "#",
    icon: "bi-github",
  },
  {
    name: "Portfolio",
    url: "#",
    icon: "bi-globe",
  },
];

interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function HamburgerMenu({ isOpen, onClose }: HamburgerMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on link click
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <>
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
            <motion.div
              className={styles.menuPanel}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {/* Close Button */}
              <button
                className={styles.closeButton}
                onClick={onClose}
                aria-label="Close menu"
              >
                <i className="bi bi-x-lg"></i>
              </button>

              <div className={styles.menuContent}>
                {/* Navigation Links */}
                <nav>
                  <ul className={styles.menuList}>
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        className={styles.menuItem}
                        variants={menuItemVariants}
                      >
                        <Link
                          href={item.href}
                          className={styles.menuLink}
                          onClick={handleLinkClick}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Contact Information */}
                <motion.div
                  className={styles.contactInfo}
                  variants={menuItemVariants}
                >
                  {contactInfo.map((info) => (
                    <div key={info.title} className={styles.contactBlock}>
                      <div className={styles.contactTitle}>{info.title}</div>
                      <div className={styles.divider}></div>
                      <p className={styles.contactText}>
                        <a href={info.href}>{info.content}</a>
                      </p>
                    </div>
                  ))}

                  {/* Social Links */}
                  <div className={styles.contactBlock}>
                    <div className={styles.contactTitle}>Follow</div>
                    <div className={styles.divider}></div>
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
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
