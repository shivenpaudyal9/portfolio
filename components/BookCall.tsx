"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarDays, Loader2, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";

export default function BookCall() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK || "https://cal.com/neo";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setSubmitted(true);
      toast.success("Booking request sent! Redirecting to Cal.com...");
      // Open cal.com after short delay
      setTimeout(() => window.open(calLink, "_blank"), 1500);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="book" className="py-24 sm:py-32 relative" ref={ref}>
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-brand-400 font-mono text-sm">05.</span>
          <span className="text-gray-500 font-mono text-sm">book_a_call</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Let&apos;s{" "}
              <span className="text-gradient">Talk</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Interested in working together, exploring my background, or just want to chat about
              ML? Book a 30-minute call directly on my calendar.
            </p>

            <div className="space-y-4">
              {[
                { label: "30-min intro call", desc: "Get to know each other, discuss roles or projects" },
                { label: "ML consulting session", desc: "Deep dive into a specific ML problem you're facing" },
                { label: "Portfolio walkthrough", desc: "I'll walk you through my projects & thought process" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <CalendarDays size={16} className="text-brand-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{item.label}</p>
                    <p className="text-gray-500 text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <motion.a
              href={calLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-purple text-white font-semibold hover:opacity-90 transition-opacity"
            >
              <CalendarDays size={16} />
              Open Cal.com Calendar
            </motion.a>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <div className="card-glass p-6">
              <h3 className="text-white font-semibold mb-1">Tell me a little about yourself</h3>
              <p className="text-gray-500 text-sm mb-6">
                Share your info and I&apos;ll get a heads up before we meet.
              </p>

              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle2 className="text-green-400 mx-auto mb-3" size={40} />
                  <p className="text-white font-semibold">All set!</p>
                  <p className="text-gray-400 text-sm mt-1">
                    Opening Cal.com to pick a time slot...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 mb-1.5 font-medium">
                      What would you like to discuss?
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="I'm hiring for a senior ML engineer role at..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-500/60 focus:ring-1 focus:ring-brand-500/30 transition-all resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-purple text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <CalendarDays size={16} />
                        Notify & Pick a Time
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
