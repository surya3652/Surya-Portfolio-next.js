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
    <footer className="bg-dark-gray text-white py-[80px] relative md:py-[60px]">
      <div className="container">
        <div className="grid grid-cols-3 gap-[60px] mb-[60px] lg:gap-[40px] md:grid-cols-1 md:gap-[40px] md:mb-[40px]">
          {/* Logo & Description */}
          <div className="space-y-[20px]">
            <Link href="#home" className={`text-[32px] font-bold text-white no-underline inline-block mb-[15px] md:text-[28px] ${styles.logo}`}>
              Portfolio
            </Link>
            <p className="text-[15px] text-white/70 leading-[1.7] max-w-[300px] md:text-[14px]">
              Full Stack Developer & ML Enthusiast crafting innovative digital
              experiences.
            </p>
            <div className="flex gap-[15px]">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className={`w-[40px] h-[40px] rounded-full bg-white/10 flex items-center justify-center text-white text-[18px] no-underline ${styles.socialLink}`}
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
          <div className="space-y-[20px]">
            <h4 className="text-[18px] font-bold text-white mb-[20px] md:text-[16px]">Quick Links</h4>
            <nav className="flex flex-col gap-[12px]">
              {footerLinks.map((link) => (
                <Link key={link.label} href={link.href} className={`text-[15px] text-white/70 no-underline md:text-[14px] ${styles.link}`}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-[20px]">
            <h4 className="text-[18px] font-bold text-white mb-[20px] md:text-[16px]">Get In Touch</h4>
            <div className="flex flex-col gap-[15px]">
              <a href="mailto:xxxxxx@gmail.com" className={`flex items-center gap-[12px] text-[15px] text-white/70 no-underline md:text-[14px] ${styles.contactItem}`}>
                <i className="bi-envelope text-[18px] text-base-color"></i>
                <span>xxxxxx@gmail.com</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" className={`flex items-center gap-[12px] text-[15px] text-white/70 no-underline md:text-[14px] ${styles.contactItem}`}>
                <i className="bi-phone text-[18px] text-base-color"></i>
                <span>+91 XXXXXXXXXX</span>
              </a>
              <div className="flex items-center gap-[12px] text-[15px] text-white/70 md:text-[14px]">
                <i className="bi-geo-alt text-[18px] text-base-color"></i>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center pt-[40px] border-t border-white/10 md:flex-col md:gap-[15px] md:text-center md:pt-[30px]">
          <div className="text-[14px] text-white/60 md:text-[13px]">
            &copy; {currentYear} Portfolio. All rights reserved.
          </div>
          <div className="text-[14px] text-white/60 md:text-[13px]">
            Built with{" "}
            <span className="text-base-color inline-block mx-[4px]">❤️</span> using Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
