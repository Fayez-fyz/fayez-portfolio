interface PipelineNodeProps {
  className?: string;
  active?: boolean;
}

export function PipelineNode({ className = '', active = true }: PipelineNodeProps) {
  return (
    <span className={`relative inline-flex h-2 w-2 shrink-0 ${className}`}>
      {active && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan/50" />
      )}
      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-cyan" />
    </span>
  );
}

export function PipelineEdge({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`h-full w-px overflow-visible ${className}`}
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="0"
        x2="0"
        y2="100%"
        stroke="url(#pipeline-gradient)"
        strokeWidth="2"
        strokeDasharray="4 6"
        className="animate-dash-flow"
      />
      <defs>
        <linearGradient id="pipeline-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
        </linearGradient>
      </defs>
    </svg>
  );
}
