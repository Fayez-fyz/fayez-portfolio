'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, MapPin } from 'lucide-react';
import { certifications } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/constants/motion';

export function Certifications() {
  return (
    <section id="certifications" className="relative py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Certifications" title="Formal credentials" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.name}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="glass-panel relative overflow-hidden p-7 transition-colors duration-300 hover:border-accent-amber/40 sm:p-9"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent-amber/10 blur-3xl" />
              <div className="relative flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent-amber/30 bg-accent-amber/10 text-accent-amber">
                    <Award size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="mt-1 text-accent-cyan">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1 font-mono text-xs text-ink-faint sm:items-end">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {cert.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} /> {cert.location}
                  </span>
                </div>
              </div>

              <ul className="relative mt-5 space-y-2">
                {cert.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-amber/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
