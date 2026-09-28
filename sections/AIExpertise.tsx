'use client';

import { motion } from 'framer-motion';
import {
  Sparkles, MessageSquare, Link2, GitBranch, Search, Database,
  Server, Bot, Wand2, Wrench, Users,
} from 'lucide-react';
import { aiExpertise } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { fadeUp, staggerContainer, viewportOnce } from '@/constants/motion';

const iconMap: Record<string, typeof Sparkles> = {
  'Generative AI': Sparkles,
  'LLM Applications': MessageSquare,
  LangChain: Link2,
  LangGraph: GitBranch,
  RAG: Search,
  'Vector Databases': Database,
  FastAPI: Server,
  'AI Agents': Bot,
  'Prompt Engineering': Wand2,
  'Tool Calling': Wrench,
  'Multi-Agent Systems': Users,
};

export function AIExpertise() {
  return (
    <section id="ai-expertise" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="section-shell">
        <SectionHeading
          eyebrow="AI & LLM Expertise"
          title="Agentic engineering, end to end"
          description="From retrieval and grounding to multi-step, tool-calling agents — the core of every AI system I ship."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {aiExpertise.map((item) => {
            const Icon = iconMap[item.label] ?? Sparkles;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="glass-panel group flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent-purple/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-cyan/15 to-accent-purple/15 text-accent-cyan group-hover:text-accent-purple">
                  <Icon size={19} />
                </span>
                <div>
                  <h3 className="font-display text-sm font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-muted">{item.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
