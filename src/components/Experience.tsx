"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "Head of IoT Infrastructure",
    company: "smart IoT",
    period: "2023 — Present",
    description:
      "Leading IoT infrastructure strategy — defining technical architectures, working directly with customers, and managing projects end-to-end. Overseeing connected product delivery from embedded firmware and wireless protocols to cloud platforms and cybersecurity.",
  },
  {
    role: "Senior Software Developer",
    company: "smart IoT",
    period: "2021 — 2023",
    description:
      "Drove technical decisions on Flutter mobile apps and cloud infrastructure for IoT products. Architected solutions spanning Zephyr RTOS firmware, BLE/Zigbee connectivity, and scalable backend services.",
  },
  {
    role: "Full-Stack Developer",
    company: "Ble Solutions",
    period: "2019 — 2021",
    description:
      "Focused on Bluetooth and embedded development — built firmware for a BLE smart lock on a Silicon Labs chip and worked on connected medical devices. Prototyped companion iOS apps in Swift.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-card-border md:left-1/2 md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative mb-12 pl-8 md:w-1/2 md:pl-0 ${
                i % 2 === 0
                  ? "md:pr-12 md:text-right"
                  : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background ${
                  i % 2 === 0
                    ? "left-[-5px] md:left-auto md:-right-[7px]"
                    : "left-[-5px] md:-left-[7px]"
                }`}
              />

              <span className="mb-1 block font-mono text-xs text-accent">
                {exp.period}
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                {exp.role}
              </h3>
              <h4 className="mb-2 text-sm font-medium text-accent-light">
                {exp.company}
              </h4>
              <p className="text-sm leading-relaxed text-muted">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
