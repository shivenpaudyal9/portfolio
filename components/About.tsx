"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, BookOpen, Zap } from "lucide-react";

const stats = [
  { label: "ML Projects", value: "10+" },
  { label: "AWS Certs", value: "2" },
  { label: "Research Papers", value: "1+" },
  { label: "Years Building", value: "3+" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "MS Computer Science — ML Track",
    sub: "Cal State University Long Beach · Graduating May 2026",
    color: "from-brand-600 to-accent-purple",
  },
  {
    icon: Award,
    title: "AWS Certified",
    sub: "AI Practitioner + Cloud Practitioner · 2024",
    color: "from-accent-cyan to-brand-500",
  },
  {
    icon: BookOpen,
    title: "Deep Learning Research",
    sub: "Published work in computer vision & neural architectures",
    color: "from-accent-purple to-pink-500",
  },
  {
    icon: Zap,
    title: "Areas of Passion",
    sub: "Computer Vision · Soccer Analytics · MLOps · LLMs",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-brand-400 font-mono text-sm">01.</span>
          <span className="text-gray-500 font-mono text-sm">about_me</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl font-bold text-white mb-6"
        >
          Building the future,{" "}
          <span className="text-gradient">one model at a time.</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Hey, I&apos;m <strong className="text-white">Neo</strong> — a Machine Learning
              Engineer who loves building systems that learn, adapt, and create real business
              impact. I&apos;m currently wrapping up my MS in Computer Science (ML track) at
              CSULB, where my focus has been computer vision, deep learning architectures, and
              production ML systems.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              Outside academia, I&apos;ve shipped ML pipelines for enterprise clients at Zentrais
              LLC — from LLM document processors handling 10K+ docs/day to anomaly detection
              dashboards on AWS. Before that, at UiPath India, I automated 2,000+ manual
              hours/quarter using RPA and ML-powered OCR.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not pushing code, I&apos;m probably analyzing soccer match footage
              with YOLOv8, tinkering with LLM agents, or hiking somewhere with bad cell service.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((s) => (
                <div key={s.label} className="card-glass p-4 text-center">
                  <p className="text-2xl font-bold text-gradient">{s.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="card-glass p-5 group hover:border-brand-500/30 transition-all duration-300"
              >
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${h.color} flex items-center justify-center mb-3`}
                >
                  <h.icon size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{h.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{h.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
