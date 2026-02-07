"use client";

import { motion } from "framer-motion";
import { achievements, stats } from "@/lib/data/achievements";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { staggerContainer, staggerItem } from "@/lib/animations/variants";
import styles from "./Achievements.module.css";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Achievements() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="achievements" className="py-section bg-gray-50 relative" ref={ref}>
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <SectionHeader 
            title="Awards & achievements"
            sectionNumber="03"
          />

          {/* Stats Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-4 gap-[30px] mb-[60px] md:grid-cols-2 md:gap-[20px] md:mb-[50px]">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                variants={staggerItem}
                className="bg-white p-[30px] rounded-[15px] shadow-lg text-center md:p-[25px]"
              >
                <div className={styles.statCard}>
                  <div className="text-[48px] font-bold text-base-color leading-[1] mb-[10px] md:text-[40px]">{stat.value}</div>
                  <div className="text-[14px] text-gray-600 uppercase tracking-[1px] font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-[30px] lg:gap-[25px] md:grid-cols-1">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={staggerItem}
                className="bg-white p-[30px] rounded-[15px] shadow-lg flex gap-[20px] md:p-[25px] md:gap-[15px]"
              >
                <div className={styles.card}>
                  <div className="flex-shrink-0">
                    <span className="text-[48px] block md:text-[40px]">{achievement.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start gap-[15px] mb-[10px] sm:flex-col sm:gap-[5px]">
                      <h3 className="text-[18px] font-bold text-dark-gray m-0 leading-[1.3] md:text-[17px]">{achievement.title}</h3>
                      <span className="text-[14px] text-base-color font-semibold uppercase tracking-[1px] flex-shrink-0">{achievement.year}</span>
                    </div>
                    <p className="text-[14px] text-gray-600 leading-[1.6] mb-[12px] md:text-[13px]">
                      {achievement.description}
                    </p>
                    <span className="inline-block px-[12px] py-[4px] bg-gray-100 text-gray-700 text-[12px] font-medium rounded-full uppercase tracking-[1px]">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
