import { Linkedin, Github, Globe, Mail } from 'lucide-react';
import { personal } from '@/lib/data';

const socials = [
  { icon: Linkedin, href: personal.linkedin, label: 'LinkedIn' },
  { icon: Github, href: personal.github, label: 'GitHub' },
  { icon: Globe, href: personal.portfolio, label: 'Portfolio' },
  { icon: Mail, href: `mailto:${personal.email}`, label: 'Email' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="section-shell flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-lg font-semibold text-white">
            {personal.name}
            <span className="text-accent-cyan">.</span>
          </p>
          <p className="mt-1 text-xs text-ink-faint">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-muted transition-colors hover:border-accent-cyan/40 hover:text-accent-cyan"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
