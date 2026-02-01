"use client";

import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: "bi-linkedin", name: "LinkedIn", url: "#" },
  { icon: "bi-github", name: "GitHub", url: "#" },
  { icon: "bi-twitter", name: "Twitter", url: "#" },
  { icon: "bi-globe", name: "Portfolio", url: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Logo & Description */}
          <div className={styles.brand}>
            <Link href="#home" className={styles.logo}>
              Portfolio
            </Link>
            <p className={styles.description}>
              Full Stack Developer & ML Enthusiast crafting innovative digital
              experiences.
            </p>
            <div className={styles.socialLinks}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={styles.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksSection}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <nav className={styles.linksList}>
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className={styles.contactSection}>
            <h4 className={styles.contactTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <a href="mailto:xxxxxx@gmail.com" className={styles.contactItem}>
                <i className="bi-envelope"></i>
                <span>xxxxxx@gmail.com</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" className={styles.contactItem}>
                <i className="bi-phone"></i>
                <span>+91 XXXXXXXXXX</span>
              </a>
              <div className={styles.contactItem}>
                <i className="bi-geo-alt"></i>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            &copy; {currentYear} Portfolio. All rights reserved.
          </div>
          <div className={styles.credits}>
            Built with{" "}
            <span className={styles.heart}>❤️</span> using Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
