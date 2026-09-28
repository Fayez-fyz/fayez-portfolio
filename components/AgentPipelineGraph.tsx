'use client';

import { motion } from 'framer-motion';

const nodes = [
  { id: 'input', label: 'Input', x: 40, y: 140 },
  { id: 'retriever', label: 'Retriever', x: 200, y: 60 },
  { id: 'llm', label: 'LLM', x: 200, y: 220 },
  { id: 'tools', label: 'Tools', x: 380, y: 60 },
  { id: 'agent', label: 'Agent', x: 380, y: 220 },
  { id: 'output', label: 'Output', x: 540, y: 140 },
];

const edges: [string, string][] = [
  ['input', 'retriever'],
  ['input', 'llm'],
  ['retriever', 'llm'],
  ['llm', 'tools'],
  ['llm', 'agent'],
  ['tools', 'agent'],
  ['agent', 'output'],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function AgentPipelineGraph() {
  return (
    <div className="relative w-full max-w-xl">
      <svg
        viewBox="0 0 580 280"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of an AI agent pipeline: input flows through a retriever and LLM, into tools and agent reasoning, producing an output"
      >
        <defs>
          <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#A855F7" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map(([from, to], i) => {
          const a = getNode(from);
          const b = getNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edge-grad)"
              strokeWidth="1.5"
              strokeDasharray="5 7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -24] }}
              transition={{
                pathLength: { duration: 0.8, delay: 0.15 * i, ease: 'easeOut' },
                opacity: { duration: 0.4, delay: 0.15 * i },
                strokeDashoffset: {
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: 0.15 * i + 0.8,
                },
              }}
            />
          );
        })}

        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="34"
              fill="url(#node-glow)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="20"
              fill="#0B1120"
              stroke={node.id === 'llm' || node.id === 'agent' ? '#A855F7' : '#22D3EE'}
              strokeWidth="1.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.text
              x={node.x}
              y={node.y + 38}
              textAnchor="middle"
              className="fill-ink-muted font-mono"
              fontSize="11"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.15 * i + 0.2 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
