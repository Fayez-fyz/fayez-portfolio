'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, FolderGit2 } from 'lucide-react';
import { personal } from '@/lib/data';
import { Typewriter } from '@/components/Typewriter';
import { AgentPipelineGraph } from '@/components/AgentPipelineGraph';
import { fadeUp } from '@/constants/motion';

const roles = [
  'Agentic AI Systems',
  'LangChain & LangGraph',
  'RAG Pipelines',
  'Full Stack Products',
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent-indigo/20 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-accent-cyan/10 blur-[120px]" />

      <div className="section-shell relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div variants={fadeUp} className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent-cyan" />
            </span>
            <p className="eyebrow">Available for select opportunities</p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {personal.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="mt-4 h-8 font-mono text-lg text-accent-cyan sm:text-xl">
            <Typewriter phrases={roles} />
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
            Full Stack Developer with {personal.yearsExperience} years building scalable web, mobile,
            and AI-driven applications — from production RAG pipelines to LangGraph-orchestrated
            agents to SaaS platforms shipped end to end.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <Download size={16} />
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} />
              Contact Me
            </a>
            <a href="#projects" className="btn-secondary">
              <FolderGit2 size={16} />
              View Projects
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs text-ink-faint">
            {personal.focusAreas.map((area) => (
              <span key={area} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-accent-cyan" />
                {area}
              </span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="glass-panel flex justify-center p-6 sm:p-10"
        >
          <AgentPipelineGraph />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/10 p-2 text-ink-muted hover:text-accent-cyan sm:flex"
      >
        <ArrowDown size={18} />
      </motion.a>
    </section>
  );
}
