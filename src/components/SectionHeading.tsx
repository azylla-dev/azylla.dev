"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16 text-center"
    >
      <h2 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h2>
      {subtitle && <p className="text-muted">{subtitle}</p>}
    </motion.div>
  );
}
