'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, Building2, Wrench } from 'lucide-react';
import type { ProjectEntry } from '@/types';
import { cn } from '@/lib/utils';

export function ProjectCard({ project, index }: { project: ProjectEntry; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const isPersonal = project.kind === 'personal';

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={cn(
          'group relative h-full rounded-2xl border p-7 backdrop-blur-xl transition-colors duration-300 sm:p-8',
          isPersonal
            ? 'border-accent-cyan/25 bg-gradient-to-br from-accent-cyan/[0.07] via-white/[0.03] to-accent-purple/[0.07] shadow-glow-cyan hover:border-accent-cyan/60'
            : 'border-white/[0.08] bg-white/[0.03] hover:border-accent-indigo/50'
        )}
      >
        <div style={{ transform: 'translateZ(24px)' }}>
          <div className="flex items-center justify-between gap-3">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider',
                isPersonal
                  ? 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan'
                  : 'border-white/10 bg-white/[0.04] text-ink-muted'
              )}
            >
              {isPersonal ? <Sparkles size={12} /> : <Building2 size={12} />}
              {project.context}
            </span>
          </div>

          <h3 className={cn('mt-5 font-display font-semibold text-white', isPersonal ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl')}>
            {project.name}
          </h3>
          <p className="mt-1.5 text-accent-cyan">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

          <div className="mt-6">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
              <Wrench size={12} /> Highlights
            </p>
            <ul className="mt-3 space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex gap-2 text-sm text-ink-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-cyan/70" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="tag-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
