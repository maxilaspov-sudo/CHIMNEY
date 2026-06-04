# Project Overview


A Next.js site optimised for SEO. Pages are pre-rendered to static HTML at build time.


---


# Voice — read before writing any content


When writing **any blog post, service page, or customer-facing copy**, read the files in `./references/`:


| File | What it is |
|------|-----------|
| `references/voice.md` | Writing style, sentence rhythm, vocabulary, formatting, anti-patterns |
| `references/humour.md` | How the brand handles humour |
| `references/stats.md` | Canonical real numbers — pricing, response times, jobs, reviews |
| `references/stories.md` | Recurring anecdotes the brand uses |
| `references/opinions.md` | Hot takes and strong opinions backed by numbers |


**Content rules:**


- Never use AI-tell phrases (e.g. "unlock", "leverage", "seamless", "world-class", "in today's fast-paced world"), exclamation marks, or emojis
- Start with the answer; add context after
- Use real numbers from `stats.md`, never round
- One story per post max (from `stories.md`, don't invent new ones)
- One strong opinion per post max (from `opinions.md`, backed by a number)
- Tell people when NOT to hire you — biggest voice tell


Before shipping any writing, re-read `references/voice.md` → "Tells that it's AI-written" and delete anything that matches.


---


# On-page SEO


When generating or editing a blog post, read `on-page-seo.md` at the root. Every item applicable to the page type must be satisfied.


Required for every long-form post:
- FAQ section with FAQPage schema (JSON-LD)
- Breadcrumbs + BreadcrumbList schema
- Author byline + Person schema
- Table of contents with anchor links
- 3–5 internal links, 2–3 external links to authoritative sources
- Open Graph + Twitter Card meta
- Length within 20% of SERP top-3 for the target keyword


---


# Technical SEO


Site-wide:
- `app/sitemap.ts` — auto-generated sitemap covering all routes
- `app/robots.ts` — allows all crawlers, points to sitemap
- Canonical URLs on every page (via `metadata.alternates.canonical`)
- Open Graph images (1200×630) — `/public/og/*.png`
- Image width/height attributes for CLS
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Static pre-rendering — `output: 'export'`
- Mobile viewport — set in `app/layout.tsx`


---


# Design


Premium, modern, elegant. Subtle animations, proper spacing, clear visual hierarchy. No emoji icons. No generic gradients. One accent colour (pick one and stick to it).


---


# Development Rules


**Rule 1: Always read first** — before any action, read `CLAUDE.md`.


**Rule 2: Define before you build** — no code before spec approval.


**Rule 3: Look before you create** — check existing files before creating new ones.


**Rule 4: Test before you respond** — run `npm run build` before saying "done".
