"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hoverLift } from "@/lib/animations/variants";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  description,
  image,
  category,
  tags,
  demoUrl,
  githubUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      className={styles.card}
      // whileHover={hoverLift}
      onClick={onClick}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className={styles.image}
        />
        <div className={styles.overlay}>
          <div className="text-white flex items-center gap-2.5 text-lg font-semibold">
            <span className="uppercase tracking-wide">View Project</span>
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
        <span className="absolute top-4 left-4 bg-base-color text-white px-4 py-1.5 text-xs uppercase tracking-wide font-semibold rounded-full">{category}</span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-gray mb-3 line-clamp-1 md:text-lg">{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2 md:text-xs">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {(demoUrl || githubUrl) && (
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            {demoUrl && (
              <a
                href={demoUrl}
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-box-arrow-up-right"></i>
                Demo
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className={styles.link}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
