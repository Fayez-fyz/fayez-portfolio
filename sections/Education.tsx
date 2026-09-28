'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/constants/motion';

export function Education() {
  return (
    <section id="education" className="relative py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Education" title="Academic foundation" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2"
        >
          {education.map((edu) => (
            <motion.div
              key={edu.degree}
              variants={fadeUp}
              className="glass-panel flex items-start gap-5 p-7 transition-colors duration-300 hover:border-accent-cyan/30"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-cyan">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">{edu.degree}</h3>
                <p className="mt-1 text-accent-cyan">{edu.institution}</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-ink-faint">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} /> {edu.year}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} /> {edu.location}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
