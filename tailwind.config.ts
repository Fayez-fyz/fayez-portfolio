import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './sections/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        void: '#050816',
        deep: '#0B1120',
        surface: '#111827',
        elevated: '#151E33',
        border: '#1F2A44',
        accent: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          indigo: '#6366F1',
          purple: '#A855F7',
          amber: '#FBBF24',
        },
        ink: {
          DEFAULT: '#E7ECF7',
          muted: '#9AA5C0',
          faint: '#5A6584',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(148,163,196,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(148,163,196,0.06) 1px, transparent 1px)',
        'radial-glow':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.25), transparent)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        'pulse-slow': 'pulse-slow 3.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'dash-flow': 'dash-flow 2.4s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'dash-flow': {
          '0%': { strokeDashoffset: '24' },
          '100%': { strokeDashoffset: '0' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(99,102,241,0.15), 0 8px 40px -8px rgba(59,130,246,0.35)',
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.2), 0 8px 40px -8px rgba(34,211,238,0.35)',
      },
    },
  },
  plugins: [],
};

export default config;
