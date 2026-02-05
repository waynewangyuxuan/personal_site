"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  index: number;
}

export function ProjectCard({ name, description, url, index }: ProjectCardProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl mb-2 group-hover:opacity-70 transition-opacity">
            {name}
          </h3>
          <p className="text-[var(--muted)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <motion.span
          className="text-[var(--muted)] text-lg mt-1"
          initial={{ x: 0 }}
          whileHover={{ x: 4 }}
        >
          →
        </motion.span>
      </div>
    </motion.a>
  );
}
