'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send } from 'lucide-react';
import { personal } from '@/lib/data';
import { SectionHeading } from '@/components/SectionHeading';
import { CopyButton } from '@/components/CopyButton';
import { fadeUp, staggerContainer, viewportOnce } from '@/constants/motion';

const contactDetails = [
  { icon: Mail, label: 'Email', value: personal.email, copyValue: personal.email },
  { icon: Phone, label: 'Phone', value: personal.phone, copyValue: personal.phone },
  { icon: MapPin, label: 'Location', value: personal.location },
];

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
  { icon: Github, label: 'GitHub', href: personal.github },
  { icon: Globe, label: 'Portfolio', href: personal.portfolio },
];

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailtoHref = `mailto:${personal.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${form.name || 'a visitor'}`
  )}&body=${encodeURIComponent(
    `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`
  )}`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    window.location.href = mailtoHref;
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something worth shipping"
          description="Open to full stack and AI engineering roles, freelance builds, or a quick technical chat."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-4"
          >
            {contactDetails.map((item) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                className="glass-panel flex items-center justify-between gap-4 p-5"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-accent-cyan">
                    <item.icon size={17} />
                  </span>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                      {item.label}
                    </p>
                    <p className="text-sm text-ink">{item.value}</p>
                  </div>
                </div>
                {item.copyValue && <CopyButton value={item.copyValue} label={item.label} />}
              </motion.div>
            ))}

            <motion.div variants={fadeUp} className="glass-panel p-5">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                Elsewhere
              </p>
              <div className="mt-3 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-ink-muted transition-all duration-300 hover:-translate-y-1 hover:border-accent-cyan/40 hover:text-accent-cyan"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            onSubmit={handleSubmit}
            className="glass-panel space-y-5 p-7 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-cyan/50"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent-cyan/50"
                placeholder="Tell me a bit about the role or project..."
              />
            </div>

            <button type="submit" className="btn-primary w-full justify-center sm:w-auto">
              <Send size={16} />
              Send Message
            </button>
            <p className="text-xs text-ink-faint">
              Opens your email client addressed to {personal.email}.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
