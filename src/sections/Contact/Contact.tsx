"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations/variants";
import styles from "./Contact.module.css";

const contactInfo = [
  {
    icon: "bi-envelope",
    title: "Email",
    value: "xxxxxx@gmail.com",
    href: "mailto:xxxxxx@gmail.com",
  },
  {
    icon: "bi-phone",
    title: "Phone",
    value: "+91 XXXXXXXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: "bi-geo-alt",
    title: "Location",
    value: "India",
  },
];

const socialLinks = [
  { icon: "bi-linkedin", name: "LinkedIn", url: "#" },
  { icon: "bi-github", name: "GitHub", url: "#" },
  { icon: "bi-globe", name: "Portfolio", url: "#" },
  { icon: "bi-twitter", name: "Twitter", url: "#" },
];

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="contact" className="py-section bg-white relative" ref={ref}>
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={staggerItem} className="text-center mb-20 md:mb-15 sm:mb-10">
            <span className="text-base-color text-sm uppercase tracking-wider font-semibold mb-2.5 inline-block">Let's Connect</span>
            <h2 className="text-6xl font-bold text-dark-gray leading-tight m-0 mb-5 lg:text-5xl md:text-4xl sm:text-3xl">Get In Touch</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto md:text-base">
              Have a project in mind or just want to chat? Feel free to reach
              out. I'm always open to discussing new opportunities and creative
              ideas.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Contact Info Cards */}
            <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-8 mb-12 md:grid-cols-1 md:gap-5">
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  variants={staggerItem}
                  className={styles.infoCard}
                >
                  <div className={styles.infoIcon}>
                    <i className={info.icon}></i>
                  </div>
                  <div className="space-y-2">
                    <div className={styles.infoTitle}>{info.title}</div>
                    {info.href ? (
                      <a href={info.href} className={styles.infoValue}>
                        {info.value}
                      </a>
                    ) : (
                      <div className={styles.infoValue}>{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h3 className="text-2xl font-bold text-dark-gray mb-6 md:text-xl">Connect on Social Media</h3>
              <div className="flex justify-center gap-5 flex-wrap">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-xl`}></i>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeInUp} className={styles.cta}>
              <a href="mailto:xxxxxx@gmail.com" className={styles.ctaButton}>
                <span>Send Me a Message</span>
                <i className="bi bi-arrow-right"></i>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
