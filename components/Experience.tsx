"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { experiences } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute top-0 left-0 w-[500px] h-[400px] bg-brand-600/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-brand-400 font-mono text-sm">04.</span>
          <span className="text-gray-500 font-mono text-sm">work_experience</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-12"
        >
          Where I&apos;ve{" "}
          <span className="text-gradient">Worked</span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-accent-purple/40 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="relative pl-8 sm:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-[-5px] sm:left-[27px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-brand-500 to-accent-purple ring-4 ring-[#0a0a0f]" />

                <div className="card-glass p-6 hover:border-brand-500/30 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-brand-400 font-semibold text-sm mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={13} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + i * 0.15 + j * 0.05 }}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}

            {/* Education entry */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="relative pl-8 sm:pl-20"
            >
              <div className="absolute left-[-5px] sm:left-[27px] top-2 w-3 h-3 rounded-full bg-gradient-to-br from-accent-cyan to-brand-500 ring-4 ring-[#0a0a0f]" />

              <div className="card-glass p-6 border-dashed border-white/10">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">MS Computer Science — ML Track</h3>
                    <p className="text-accent-cyan font-semibold text-sm mt-0.5">
                      Cal State University Long Beach (CSULB)
                    </p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1 text-sm text-gray-500">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} />
                      2024 – May 2026
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} />
                      Long Beach, CA
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-3">
                  Focus: Deep Learning, Computer Vision, MLOps, Natural Language Processing
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
