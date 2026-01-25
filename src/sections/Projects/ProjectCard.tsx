import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

export default function ProjectCard({ title, description, image }: ProjectCardProps) {
  return (
    <div className="project-card">
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
