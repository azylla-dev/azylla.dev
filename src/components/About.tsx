"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const embedded = [
  "Zephyr RTOS",
  "Bluetooth LE",
  "Zigbee",
  "C / C++",
  "nRF Connect SDK",
  "Silicon Labs (Blue Gecko)",
];

const fullstack = [
  "TypeScript",
  "React / Next.js",
  "Flutter",
  "Node.js",
  "Python",
  "Docker / AWS",
];

export default function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" subtitle="A bit of background" />

        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-4 leading-relaxed text-muted">
              I&apos;m a full-stack IoT developer who thrives at the
              intersection of embedded systems and cloud software. From
              writing firmware for BLE and Zigbee devices on Zephyr RTOS
              to building the web platforms that manage them — I deliver
              connected products end-to-end.
            </p>
            <p className="mb-8 leading-relaxed text-muted">
              At smart IoT I work on custommade connected products —
              hardware engineering, firmware, mobile apps, cloud
              infrastructure, and cybersecurity. 100% made in Germany.
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  Embedded &amp; IoT
                </h3>
                <ul className="grid gap-2">
                  {embedded.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 font-mono text-sm text-muted"
                    >
                      <span className="text-accent">&#9656;</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                  Full-Stack &amp; Cloud
                </h3>
                <ul className="grid gap-2">
                  {fullstack.map((tech) => (
                    <li
                      key={tech}
                      className="flex items-center gap-2 font-mono text-sm text-muted"
                    >
                      <span className="text-accent">&#9656;</span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-64 sm:w-72"
          >
            <div className="group relative">
              <div className="absolute -inset-1 rounded-xl bg-accent/20 blur-md transition-all group-hover:bg-accent/30" />
              <div className="relative overflow-hidden rounded-xl border-2 border-card-border transition-colors group-hover:border-accent/50">
                <Image
                  src="/images/avatar.png"
                  alt="Alexander Zylla"
                  width={400}
                  height={400}
                  className="aspect-square object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
