# Kekpop Spiele — Official Website

Modern, board-game-themed website for **Kekpop Spiele**, the game company of award-winning designer **Mathias Wigge**, creator of [Arche Nova](https://archenova-brettspiel.de/) (Deutscher Spielepreis 2022).

**Live:** [kekpop.sankofa-digital.ai](https://kekpop.sankofa-digital.ai)

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS 3 with custom board-game theme
- **Fonts:** Fredoka (display) + Inter (body) via `next/font/google`
- **Email:** Resend for contact form submissions
- **Deployment:** Vercel (Sankofa Digital team)
- **SEO:** OpenGraph, sitemap.xml, robots.txt, canonical URLs

## Features

- Animated hero with tilted playing-card business card images
- Arche Nova game showcase with real box art, stats, and reseller links
- Ark Nova 3DITION Gamefound campaign highlight (2M€+, 7.900+ backers)
- YouTube video review thumbnails with play button overlays
- 6 international awards ribbon
- Founder bio with real photography
- Validated contact form with Resend email delivery
- Impressum & Datenschutz (German legal compliance)
- Custom 404 page, accessibility (skip link, ARIA, reduced motion)
- Fully responsive (mobile-first)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for contact form email delivery |

## Domains

| URL | Status |
|-----|--------|
| [kekpop.sankofa-digital.ai](https://kekpop.sankofa-digital.ai) | Primary |
| [kekpop-spiele.sankofa-digital.ai](https://kekpop-spiele.sankofa-digital.ai) | Alias |
| [kekpop-spiele.vercel.app](https://kekpop-spiele.vercel.app) | Vercel default |

## Project Structure

```
app/
├── api/contact/    # Contact form API route (Resend)
├── datenschutz/    # Privacy policy page
├── impressum/      # Legal notice page
├── layout.tsx      # Root layout with fonts & metadata
├── page.tsx        # Home page
├── not-found.tsx   # Custom 404
├── robots.ts       # SEO robots.txt
└── sitemap.ts      # SEO sitemap.xml
components/
├── Header.tsx      # Sticky nav with mobile menu
├── Hero.tsx        # Playing card hero section
├── About.tsx       # Company pillars & stats
├── Games.tsx       # Arche Nova, 3DITION, Marine Worlds, resellers
├── Media.tsx       # Video reviews, awards, social links
├── Founder.tsx     # Mathias Wigge bio & photo
├── Contact.tsx     # Contact form with validation
└── Footer.tsx      # Site footer
```

---

## Developed by Sankofa Digital

This website was designed and developed by **Sankofa Digital OÜ** — a premium AI-powered development agency building scalable web applications for startups, NGOs, and enterprises.

**Sankofa Digital OÜ**
Harju maakond, Ahtri tn 12
10151 Tallinn, Estonia
Registry code: 14998798

**Contact:**
- Web: [sankofa.digital](https://sankofa.digital)
- Email: [info@sankofa-digital.ai](mailto:info@sankofa-digital.ai)

**Services:** SaaS MVPs, AI-powered Apps, Marketplaces, Native & Web Apps, Workflow Automations, UX Design

*You pay for results, not waiting time.*
