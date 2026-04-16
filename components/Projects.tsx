"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/data";

const stackColors: Record<string, string> = {
  Python: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  FastAPI: "bg-green-500/20 text-green-300 border-green-500/30",
  "Next.js": "bg-gray-500/20 text-gray-300 border-gray-500/30",
  "YOLOv8": "bg-red-500/20 text-red-300 border-red-500/30",
  XGBoost: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  MLflow: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Docker: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  default: "bg-brand-500/20 text-brand-300 border-brand-500/30",
};

function getStackColor(tech: string) {
  return stackColors[tech] || stackColors.default;
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent-purple/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-brand-400 font-mono text-sm">02.</span>
          <span className="text-gray-500 font-mono text-sm">featured_projects</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          Things I&apos;ve{" "}
          <span className="text-gradient">Built</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-2xl"
        >
          A selection of ML systems, data pipelines, and AI-powered applications.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1 }}
              className="group relative"
            >
              {/* Glow on hover */}
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-brand-600/0 to-accent-purple/0 group-hover:from-brand-600/30 group-hover:to-accent-purple/30 transition-all duration-500 blur-sm" />

              <div className="relative card-glass p-6 h-full flex flex-col hover:border-brand-500/40 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    )}
                    <h3 className="font-bold text-white text-lg group-hover:text-brand-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-full border font-medium ${getStackColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/shivenpaudyal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors group"
          >
            <Github size={16} />
            View all projects on GitHub
            <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
