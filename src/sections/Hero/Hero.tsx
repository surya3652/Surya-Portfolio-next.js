"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import styles from './Hero.module.css';
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
    <section 
      className={`full-screen magic-cursor ipad-top-space-margin md-p-0 rounded-cursor bg-base-color bg-sliding-line overflow-hidden relative md:h-[850px] sm:h-[750px] ${styles.hero}`} 
      id="home"
    >
      <ParticlesBackground />

      <div className="container h-full relative z-10">
        <div className="grid lg:grid-cols-2 lg:items-center gap-10 h-full">
          {/* Left Column - Content */}
          <motion.div
            className="flex flex-col space-y-8 sm:space-y-10 text-center lg:text-left max-w-2xl md:max-w-3xl mx-auto lg:mx-0"
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={getTextVariants(0)}
              className={`${styles.nameOutline} text-white font-bold`}
            >
              <span>Surya</span>
              <i className="bi bi-arrow-up-right"></i>
            </motion.div>

            <motion.div
              variants={getTextVariants(1)}
              className="space-y-6"
            >
              <Badge variant="dark" className="inline-flex">
                Full-Stack Developer
              </Badge>
              
              <p className="fs-19 lh-26 text-white/90 font-medium max-w-xl mx-auto lg:mx-0">
                A passionate developer based in India. Creating innovative solutions and{" "}
                <span className="font-bold text-white">
                  digital experiences.
                </span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={getTextVariants(2)}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full"
            >
              <a 
                href="#contact" 
                className="px-6 items-center h-12 rounded-3xl bg-white text-[var(--color-primary)] duration-300 ease-linear flex justify-center w-full sm:w-auto hover:shadow-lg hover:scale-105 font-semibold"
              >
                Get started
              </a>
              <a 
                href="#contact" 
                className="px-6 items-center h-12 rounded-3xl text-white border-2 border-white/30 bg-white/10 backdrop-blur-sm duration-300 ease-linear flex justify-center w-full sm:w-auto hover:bg-white/20 font-semibold"
              >
                View Portfolio
              </a>
            </motion.div>

            {/* Stats/Achievement Cards */}
            <motion.div
              variants={getTextVariants(3)}
              className="flex items-center justify-center lg:justify-start gap-6 flex-wrap mt-8"
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 min-w-[140px] hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-white/70 mt-1">Projects</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 min-w-[140px] hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-sm text-white/70 mt-1">Years Exp</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 min-w-[140px] hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-white/70 mt-1">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Asymmetric Images */}
          <motion.div
            className="flex aspect-square lg:aspect-auto lg:h-[35rem] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Front Image */}
            <div className="w-3/5 h-[80%] rounded-3xl overflow-hidden border-8 border-white/20 backdrop-blur-sm z-30 shadow-2xl hover:scale-105 transition-transform duration-500">
              {/* <Image 
                src="https://placehold.co/200x300" 
                alt="Surya - Full Stack Developer" 
                width={600} 
                height={800} 
                className="w-full h-full object-cover"
              /> */}
            </div>
            
            {/* Back Image */}
            {/* <div className="absolute right-0 bottom-0 h-[calc(100%-50px)] w-4/5 rounded-3xl overflow-hidden border-4 border-white/10 backdrop-blur-sm z-10 shadow-xl hover:scale-105 transition-transform duration-500">
              <Image 
                src="https://placehold.co/200x300" 
                alt="Portfolio Work" 
                height={800} 
                width={600} 
                className="z-10 w-full h-full object-cover"
              />
            </div> */}

            {/* Floating Badge */}
            <div className="absolute top-1/4 -left-6 bg-white text-[var(--color-primary)] rounded-2xl px-4 py-3 shadow-2xl z-40 hover:scale-110 transition-transform duration-300">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-sm">Available for Hire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
    </section>
  );
}
