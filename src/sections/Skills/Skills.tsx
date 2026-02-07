"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/lib/data/experience";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { staggerContainer, staggerItem } from "@/lib/animations/variants";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillsNew() {
  const { ref, isInView } = useScrollAnimation();
  const progressRef = useRef(null);
  const progressInView = useInView(progressRef, { once: true, amount: 0.3 });

  return (
    <section id="expertise" className="container overflow-y-hidden py-20">
      <div className="row items-end flex-col-reverse lg:flex-row">
        {/* Image Column */}
        <div className="col-lg-7 relative overflow-hidden">
          <div className="outside-box-bottom-2 outside-box-left-5">
            <div className="text-center overflow-visible">
              <div className="absolute left-0 right-0">
                <img
                  src="https://placehold.co/600x400"
                  className="w-[70%] mx-auto"
                  alt=""
                />
              </div>
              <Image
                src="https://placehold.co/750x672"
                width={750}
                height={672}
                alt="Skills"
                className="relative"
                priority
              />
            </div>
          </div>
        </div>

        {/* Progress Bars Column */}
        <motion.div
          className="col-lg-5 mb-6 mt-6 md:mb-0"
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h4 
            variants={staggerItem}
            className="font-semibold text-white mb-5 ls-minus-1px"
          >
            Building scalable applications with modern technologies and best practices.
          </motion.h4>
          <motion.p 
            variants={staggerItem}
            className="w-[90%] text-black xl:w-full"
          >
            Currently working as Associate Software Engineer at XYZ Solutions, specializing in full-stack development with React, Vue.js, and backend technologies. Creating robust digital solutions.
          </motion.p>

          {/* Progress Bars */}
          <div className="mt-14 block" ref={progressRef}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                className="mb-12 sm:mb-20 bg-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={progressInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="inline-block text-black uppercase fs-14 font-semibold mb-2">
                  {skill.skill}
                </div>
                <div className="relative w-full h-1 bg-light-medium-gray rounded-full overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-black"
                    initial={{ width: 0 }}
                    animate={progressInView ? { width: `${skill.percentage}%` } : { width: 0 }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 1, ease: "easeOut" }}
                  >
                    <motion.span
                      className="absolute -top-8 right-0 text-center bg-black fs-11 lh-12 text-white px-2 py-1 rounded"
                      initial={{ opacity: 0 }}
                      animate={progressInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: index * 0.1 + 0.8, duration: 0.3 }}
                    >
                      {skill.percentage}%
                    </motion.span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
