"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

const categories = [
  { key: "ml", label: "ML / AI", emoji: "🧠" },
  { key: "cloud", label: "Cloud & MLOps", emoji: "☁️" },
  { key: "languages", label: "Languages", emoji: "💻" },
  { key: "tools", label: "Tools & Frameworks", emoji: "🛠️" },
] as const;

function SkillBar({
  name,
  level,
  delay,
  inView,
}: {
  name: string;
  level: number;
  delay: number;
  inView: boolean;
}) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-gray-300 font-medium">{name}</span>
        <span className="text-xs text-gray-500 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-purple relative"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-brand-500/50" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-cyan/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-brand-400 font-mono text-sm">03.</span>
          <span className="text-gray-500 font-mono text-sm">skills</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-4"
        >
          My{" "}
          <span className="text-gradient">Toolkit</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-gray-400 mb-12 max-w-xl"
        >
          Technologies I&apos;ve worked with across research, production systems, and personal projects.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + catIdx * 0.1 }}
                className="card-glass p-5"
              >
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-xl">{cat.emoji}</span>
                  <h3 className="font-semibold text-white text-sm">{cat.label}</h3>
                </div>
                {catSkills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.3 + catIdx * 0.1 + i * 0.05}
                    inView={inView}
                  />
                ))}
              </motion.div>
            );
          })}
        </div>

        {/* Certification badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          {[
            { label: "AWS Certified AI Practitioner", bg: "from-orange-500/20 to-yellow-500/20", border: "border-orange-500/30", text: "text-orange-300" },
            { label: "AWS Certified Cloud Practitioner", bg: "from-orange-500/20 to-amber-500/20", border: "border-amber-500/30", text: "text-amber-300" },
            { label: "Deep Learning Research — Published", bg: "from-brand-500/20 to-accent-purple/20", border: "border-brand-500/30", text: "text-brand-300" },
          ].map((badge) => (
            <div
              key={badge.label}
              className={`px-5 py-2.5 rounded-full border ${badge.border} bg-gradient-to-r ${badge.bg} ${badge.text} text-sm font-medium`}
            >
              ✓ {badge.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
