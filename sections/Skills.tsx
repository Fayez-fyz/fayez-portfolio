'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { skillCategories } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/constants/motion';
import type { LucideIcon } from 'lucide-react';

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Skills"
          title="A full toolkit, from pixels to pipelines"
          description="Categorized the way I actually use them day to day — frontend, backend, mobile, AI, and the DevOps that ships it all."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = (Icons[category.icon as keyof typeof Icons] as LucideIcon) ?? Icons.Code2;
            return (
              <motion.div
                key={category.id}
                variants={fadeUp}
                className="glass-panel group p-6 transition-colors duration-300 hover:border-accent-cyan/30"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-cyan">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-display text-base font-semibold text-white">
                    {category.label}
                  </h3>
                </div>

                <div className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${category.level}%` }}
                    viewport={viewportOnce}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-accent-cyan to-accent-indigo"
                  />
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span key={item} className="tag-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
