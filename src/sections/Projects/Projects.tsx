"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { projects, projectCategories } from "@/lib/data/projects";
import ProjectCard from "./ProjectCard";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { staggerContainer, staggerItem } from "@/lib/animations/variants";
import styles from "./Projects.module.css";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { ref, isInView } = useScrollAnimation();

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const lightboxSlides = filteredProjects.map((project) => ({
    src: project.image,
    alt: project.title,
  }));

  const handleProjectClick = (index: number) => {
    setSelectedImage(index);
    setLightboxOpen(true);
  };

  return (
    <section id="projects" className="py-section bg-gray-50 relative" ref={ref}>
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <SectionHeader 
            title="Latest works"
            sectionNumber="02"
          />

          {/* Category Filter */}
          <motion.div variants={staggerItem} className="flex justify-center gap-4 mb-12 flex-wrap md:mb-10">
            {projectCategories.map((category) => (
              <button
                key={category}
                className={`${styles.filterButton} ${
                  activeCategory === category ? styles.active : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-3 gap-8 lg:grid-cols-2 lg:gap-6 sm:grid-cols-1">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={staggerItem}
                layout
              >
                <ProjectCard
                  {...project}
                  onClick={() => handleProjectClick(index)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={lightboxSlides}
        index={selectedImage}
      />
    </section>
  );
}
