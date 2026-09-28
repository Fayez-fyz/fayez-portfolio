'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export function CopyButton({ value, label }: { value: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — fail silently, value is still visible/selectable.
    }
  }

  return (
    <button
      onClick={handleCopy}
      aria-label={`Copy ${label}`}
      className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
    >
      {copied ? <Check size={14} className="text-accent-cyan" /> : <Copy size={14} />}
    </button>
  );
}
