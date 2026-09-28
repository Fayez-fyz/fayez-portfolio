'use client';

import { motion } from 'framer-motion';
import { personal, aboutHighlights } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/constants/motion';

export function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About"
          title="Building the systems behind reliable AI products"
          description="A snapshot of the experience, technologies, and delivery habits behind every project below."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="text-lg leading-relaxed text-ink-muted"
          >
            {personal.summary}
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-2 gap-4"
          >
            {aboutHighlights.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="glass-panel group p-5 transition-colors duration-300 hover:border-accent-cyan/30"
              >
                <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  {item.label}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-ink-muted">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
