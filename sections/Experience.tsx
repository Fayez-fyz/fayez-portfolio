'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, viewportOnce } from '@/constants/motion';

export function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Experience"
          title="Where the pipeline ran in production"
          description="Each role below fed into the next — from RESTful platforms to agentic AI systems running in enterprise environments."
        />

        <div className="relative mt-16">
          <div
            className="absolute left-[19px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent-cyan/60 via-accent-indigo/40 to-transparent sm:block"
            aria-hidden="true"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeUp}
                custom={index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="relative pl-0 sm:pl-14"
              >
                <div className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center rounded-full border border-accent-cyan/40 bg-void sm:flex">
                  <Briefcase size={16} className="text-accent-cyan" />
                </div>

                <div className="glass-panel p-6 transition-colors duration-300 hover:border-accent-cyan/30 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white sm:text-2xl">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-accent-cyan">
                        {exp.company}
                        {exp.companyMeta && (
                          <span className="text-ink-faint"> · {exp.companyMeta}</span>
                        )}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 font-mono text-xs text-ink-faint sm:items-end">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={12} />
                        {exp.start} – {exp.end}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.stack.map((tech) => (
                      <span key={tech} className="tag-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
