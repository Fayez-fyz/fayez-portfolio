'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';
import { navLinks, personal } from '@/lib/data';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(navLinks.map((l) => l.href.replace('#', '')));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5'
      )}
    >
      <div className="section-shell">
        <div
          className={cn(
            'flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300',
            scrolled
              ? 'border-white/10 bg-void/80 shadow-glow backdrop-blur-xl'
              : 'border-transparent bg-transparent'
          )}
        >
          <a
            href="#home"
            className="font-display text-lg font-semibold tracking-tight text-white"
          >
            {personal.name}
            <span className="text-accent-cyan">.</span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeId === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors duration-200',
                    isActive ? 'text-accent-cyan' : 'text-ink-muted hover:text-white'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-white/[0.06] ring-1 ring-white/10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a href={personal.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary hidden !px-4 !py-2 text-xs sm:inline-flex">
              <Download size={14} />
              Resume
            </a>
            <button
              className="rounded-lg border border-white/10 p-2 text-ink lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-void/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 font-mono text-sm uppercase tracking-wider text-ink-muted transition-colors hover:bg-white/[0.04] hover:text-accent-cyan"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
