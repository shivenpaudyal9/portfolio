"use client";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import BookCall from "@/components/BookCall";
import Contact from "@/components/Contact";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] dark:bg-[#0a0a0f] light:bg-white">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <BookCall />
      <Contact />
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <p>
          Built with Next.js, Tailwind CSS &amp; Framer Motion ·{" "}
          <span className="text-brand-400">Shiven Paudyal (Neo)</span> © 2025
        </p>
      </footer>
      <ChatWidget />
    </main>
  );
}
