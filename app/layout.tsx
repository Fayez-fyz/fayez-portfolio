import type { Metadata } from 'next';
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { personal } from '@/lib/data';

const display = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const siteUrl = personal.portfolio;
const title = `${personal.name} — ${personal.shortTitle}`;
const description = personal.summary;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${personal.name}`,
  },
  description,
  keywords: [
    'Full Stack Developer',
    'AI Engineer',
    'LLM Engineer',
    'LangChain',
    'LangGraph',
    'RAG',
    'FastAPI',
    'React.js',
    'Next.js',
    'Agentic AI',
    personal.name,
  ],
  authors: [{ name: personal.name, url: siteUrl }],
  creator: personal.name,
  openGraph: {
    type: 'website',
    url: siteUrl,
    title,
    description,
    siteName: `${personal.name} · Portfolio`,
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
