'use client';

import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '@/constants/motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={align === 'center' ? 'text-center' : 'text-left'}
    >
      <div className={`flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/60" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-cyan" />
        </span>
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-ink-muted ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
