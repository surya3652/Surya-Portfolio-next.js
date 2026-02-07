"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations/variants";
import SectionHeader from "@/components/ui/SectionHeader";
import LargeTextOverlap from "@/components/ui/LargeTextOverlap";

const aboutData = {
  title: "About Surya",
  features: [
    {
      title: "Discover",
      description: "Working at the sweet spot between innovation and practicality to develop solutions that inform and solve complex problems."
    },
    {
      title: "Development",
      description: "Building scalable full-stack applications using modern frameworks like React, Vue.js, Next.js with strong backend expertise in Node.js and Python."
    },
    {
      title: "Creation",
      description: "From AI-driven platforms to mobile apps, delivering tried-tested efficient, scalable solutions that make an impact."
    }
  ],
  stats: [
    { label: "Expertise", value: "Full-Stack & ML" },
    { label: "Location", value: "India" },
    { label: "Experience", value: "2+ Years" },
    { label: "Education", value: "B.Tech CSE" },
  ],
};

export default function AboutNew() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section
      id="about"
      className="big-section bg-gradient-top-very-light-gray pb-0 sm-pt-0"
      ref={ref}
    >
      {/* Large "developer" text */}
      <LargeTextOverlap>developer</LargeTextOverlap>

      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Section Header */}
            <SectionHeader 
              title={aboutData.title}
              sectionNumber="01"
            />

            {/* Main Content */}
            <div className="row mb-6">
              <motion.div
                className="col-xl-4 col-lg-5"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.h4 variants={staggerItem} className="font-bold ls-minus-1px mb-5">
                  Full-Stack Developer & ML Enthusiast focused on innovation.
                </motion.h4>
                <motion.p variants={staggerItem} className="w-[85%] lg:w-full">
                  Currently working as Associate Software Engineer at XYZ Solutions, building scalable web applications with React, Vue.js, and modern backend technologies.
                </motion.p>
              </motion.div>

              <motion.div
                className="col-xl-8 col-lg-7"
                variants={staggerContainer}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {aboutData.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    className={`row items-center ${
                      index < aboutData.features.length - 1
                        ? "border-b border-light-medium-gray mb-8 pb-8"
                        : ""
                    }`}
                  >
                    <div className="col-md-3">
                      <div className="fs-18 font-semibold">{feature.title}</div>
                    </div>
                    <div className="col-md-9">
                      <p className="mb-0">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Stats */}
            <motion.div
              className="row row-cols-1 row-cols-lg-4 row-cols-md-2"
              variants={staggerContainer}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className={`col ${
                    index < aboutData.stats.length - 1
                      ? "lg:mb-8"
                      : ""
                  } ${index < 2 ? "sm:mb-8" : ""}`}
                >
                  <span className="font-semibold block">{stat.label}</span>
                  <p className="mb-0">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
