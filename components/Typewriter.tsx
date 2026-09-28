'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  phrases: string[];
  className?: string;
}

export function Typewriter({ phrases, className = '' }: TypewriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    const speed = deleting ? 35 : 60;
    const pause = 1600;

    if (!deleting && text === current) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }

    if (deleting && text === '') {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, phraseIndex, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="ml-0.5 inline-block w-[2px] animate-pulse-slow bg-accent-cyan align-middle" style={{ height: '1em' }} />
    </span>
  );
}
