"use client";

import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import styles from './Hero.module.css';
import Image from 'next/image';
import Badge from '@/components/ui/Badge';

const getTextVariants = (i: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: [0.6, 0.01, 0.05, 0.95] as const,
    },
  },
});

export default function Hero() {
  return (
    <section className={`full-screen magic-cursor ipad-top-space-margin md-p-0 rounded-cursor bg-base-color bg-sliding-line overflow-hidden relative md:h-[850px] sm:h-[750px] ${styles.hero}`} id="home">
      <ParticlesBackground />

      <motion.img
        src="https://placehold.co/435x468"
        className="absolute top-[35%] -left-[100px] hidden md:block"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        alt=""
        width={435}
        height={468}
      />

      <div className="container h-full">
        <div className="row items-start lg:items-center h-full">
          <motion.div
            className="col-xl-6 col-lg-8 md-pt-15"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={getTextVariants(0)}
              className="fs-150 sm-fs-120 lh-110 text-white font-bold ls-minus-5px"
            >
              <span className="text-outline">Surya</span>
              <i className="bi bi-arrow-up-right text-6xl lh-0 ms-2"></i>
            </motion.div>

            <div className="ps-20">
              <motion.div
                variants={getTextVariants(2)}
                className="-top-10 sm-top-minus-5 -right-1 sm-right-0 relative"
              >
                <Badge variant="dark" className="mb-6 ms-1">
                  Full-Stack Developer
                </Badge>
                <div className="fs-19 lh-26 text-black font-medium w-[65%] md:w-[70%] sm-w-full">
                  A passionate developer based in India. Creating innovative solutions and{" "}
                  <span className="font-bold text-decoration-line-bottom-medium text-black">
                    digital experiences.
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div className="absolute right-[100px] -bottom-[100px] w-[55%] md:w-[60%] xs:w-full md:right-[150px] xs:right-0">
            <motion.img
              src="https://placehold.co/800x600"
              className="absolute top-[20%] -right-[50px]"
              initial={{ y: -150 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              alt=""
              width={400}
              height={400}
            />

            <motion.img
              src="https://placehold.co/600x400"
              className="absolute top-[50%] left-[150px] z-10 animation-float"
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              alt=""
              width={300}
              height={300}
            />

            <div className="text-center">
              <div className="absolute left-0 right-0">
                <img src="https://placehold.co/800x600" alt="" width={800} height={600} />
              </div>
              <Image
                src="https://placehold.co/1030x1100"
                width={1030}
                height={1100}
                alt="Hero Image"
                priority
                className="relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
