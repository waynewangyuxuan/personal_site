"use client";

import { motion } from "framer-motion";
import { personal } from "@/lib/content";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="section page-container">
      <ScrollReveal className="max-w-4xl">
        <div className="divider mb-16" />
        <p className="section-label mb-8">Get in touch</p>
        <motion.a
          href={`mailto:${personal.email}`}
          className="inline-block text-2xl md:text-3xl link-underline"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          {personal.email}
        </motion.a>
      </ScrollReveal>
    </section>
  );
}
