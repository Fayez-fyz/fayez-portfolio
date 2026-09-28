# Fayez — Portfolio

A premium, dark-themed portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. All content is sourced directly from the attached resume — no fabricated experience, projects, or skills.

**Signature visual motif:** the hero features an animated agent-pipeline graph (Input → Retriever → LLM → Tools → Agent → Output), echoing the LangChain/LangGraph agentic systems this profile is built around. The same node/edge language recurs in the experience timeline connectors.

## Tech Stack

- **Framework:** Next.js 14 (App Router), TypeScript
- **Styling:** Tailwind CSS with custom design tokens (dark theme, custom colors, fonts)
- **Animation:** Framer Motion
- **Icons:** lucide-react
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (labels/mono), loaded via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: `next/font/google` fetches font files at build time, so an internet connection is required for `npm run build` / `npm run dev` the first time (standard for any Next.js project using Google Fonts). Vercel's build environment has this by default.

## Project Structure

```
app/                 App Router entry: layout, page, globals.css, robots.ts, sitemap.ts
components/          Reusable UI primitives (Navbar, Footer, ProjectCard, SectionHeading, etc.)
sections/             Page sections (Hero, About, Experience, Skills, Projects, AIExpertise,
                      Education, Certifications, Contact)
hooks/                useActiveSection — IntersectionObserver-based nav highlighting
lib/                  data.ts (single source of truth from the resume), utils.ts
types/                Shared TypeScript interfaces
constants/            Framer Motion animation variant presets
public/               favicon.svg
```

## Content Source

Every section pulls from `lib/data.ts`, which mirrors the resume 1:1 — professional summary,
work experience, technical skills, education, and the GUVI MERN certification. The **Projects**
section lists two personal builds (Enterprise RAG System, Claude-style AI workspace) in more depth,
and two professional products (Finance AI Chatbot, Hyring) kept deliberately high level.

Contact links (email, phone, LinkedIn, GitHub, portfolio URL) were extracted directly from the
hyperlinks embedded in the resume PDF.

## Customizing

- **Update resume content:** edit `lib/data.ts`.
- **Resume link:** set `personal.resumeUrl` in `lib/data.ts` to your Google Drive share link
  (sharing: "Anyone with the link can view").
- **Colors/fonts:** `tailwind.config.ts` (`colors`, `fontFamily`) and `app/layout.tsx` (font imports).
- **Contact form:** currently opens the visitor's email client via a `mailto:` link (no backend
  required). To wire it to a real inbox without exposing your email client, swap the `onSubmit`
  handler in `sections/Contact.tsx` for a call to a service like Resend, Formspree, or a custom
  API route.

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables are required.
4. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Performance & SEO

- Metadata, Open Graph, and Twitter card tags are set in `app/layout.tsx`.
- `app/robots.ts` and `app/sitemap.ts` generate `robots.txt` and `sitemap.xml` automatically.
- Fonts are self-hosted at build time via `next/font` (no runtime request to Google Fonts,
  zero layout shift).
- Animations respect `prefers-reduced-motion`.
- Update `personal.portfolio` in `lib/data.ts` once your production URL is live so metadata,
  the sitemap, and OG tags point to the right place.
