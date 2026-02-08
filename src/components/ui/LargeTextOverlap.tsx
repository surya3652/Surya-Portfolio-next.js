import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LargeTextOverlapProps {
  children: ReactNode;
  className?: string;
}

export default function LargeTextOverlap({ 
  children, 
  className = "" 
}: LargeTextOverlapProps) {
  return (
    <div className={`overlap-section mb-2 -top-10 relative z-[9] md:mb-0 ${className}`}>
      <motion.div 
        className="fs-335 text-white font-bold ls-minus-10px md:ls-minus-5px text-right text-shadow-large"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
