"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: "Children's Audio Streaming Box",
    description:
      "Connected audio player for kids with NFC-triggered playback. Implemented USB-C Audio Class driver and OTG management as well as Bluetooth Classic audio streaming for wireless speaker and headphone connectivity.",
    tech: ["Embedded C", "Bluetooth Classic", "USB-C Audio Class", "USB OTG"],
  },
  {
    title: "Bluetooth Smart Lock",
    description:
      "Bluetooth-enabled smart lock. Developed BLE firmware on a Silicon Labs BGM module handling secure pairing, access control, and low-power operation.",
    tech: ["Embedded C", "Bluetooth LE", "Silicon Labs BGM", "GATT"],
  },
  {
    title: "Smart Gardening Solution",
    description:
      "IoT-powered gardening platform. Built Zigbee sensor nodes on nRF for environmental monitoring, a cloud backend using Parse, and a cross-platform mobile app in Flutter for real-time data visualization.",
    tech: ["Zigbee", "nRF", "Parse", "Flutter", "Embedded C"],
  },
  {
    title: "RTLS Indoor Positioning",
    description:
      "Real-time location system using BLE fingerprinting and trilateration for indoor asset tracking. Built a Django backend, a React web dashboard, and an iOS companion app for beacon setup and calibration.",
    tech: ["BLE Beacons", "Django", "React", "iOS", "Python"],
  },
  {
    title: "Enterprise Device Management Portal",
    description:
      "B2B platform for fleet management of smartphones. Built a custom Android update engine, an OCM config app for bulk device settings management, a Django backend, and a React web portal.",
    tech: ["Django", "React", "Android", "Python", "REST API"],
  },
  {
    title: "Lab Climate Chamber Automation",
    description:
      "Desktop application automating lab workflows for climate chambers. View device logs, create chamber programs, sign documents, and manage the full lab process — built with a Flutter desktop frontend and Django backend.",
    tech: ["Flutter Desktop", "Django", "Python", "REST API", "IoT"],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-xl border border-card-border bg-card p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <svg
          className="h-10 w-10 text-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted transition-colors hover:text-accent"
              aria-label="Live site"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      {/* Tech */}
      <ul className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent"
          >
            {t}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Projects"
          subtitle="Some things I've built"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
