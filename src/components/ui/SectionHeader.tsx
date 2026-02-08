import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  sectionNumber: string;
  className?: string;
}

export default function SectionHeader({ 
  title, 
  sectionNumber,
  className = "" 
}: SectionHeaderProps) {
  return (
    <motion.div
      className={`row items-center mb-6 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="col-10">
        <span className="text-base-color font-bold uppercase fs-14 ls-05px">
          {title}
        </span>
      </div>
      <div className="col-2 text-right">
        <span className="text-base-color fs-14 font-bold">{sectionNumber}</span>
      </div>
      <div className="col-12 mt-1">
        <div className="separator-line-2px w-full block bg-base-color"></div>
      </div>
    </motion.div>
  );
}
