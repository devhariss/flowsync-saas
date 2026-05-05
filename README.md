# FlowSync — SaaS Workflow Automation

A modern SaaS landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 + CSS Variables (Nexus Design System)
- **Icons:** Lucide React
- **Fonts:** Cabinet Grotesk (display) + Satoshi (body) via Fontshare

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout with metadata & fonts
│   ├── page.tsx          # Home page (assembles all sections)
│   └── globals.css       # Design tokens + base styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Logos.tsx
│       ├── Features.tsx
│       ├── HowItWorks.tsx
│       ├── Testimonials.tsx
│       ├── Pricing.tsx
│       └── CTA.tsx
└── lib/
    └── utils.ts          # cn() helper (clsx + tailwind-merge)
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type checking |

## Deployment

Deploy instantly on [Vercel](https://vercel.com) — zero config required for Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/devhariss/flowsync-saas)
