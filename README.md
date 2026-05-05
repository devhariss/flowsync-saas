# FlowSync — SaaS Website

A polished, production-ready SaaS marketing website built with **Next.js 16.2.4** (App Router), TypeScript, and a dark-mode-first CSS design system.

---

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16.2.4 (App Router) |
| Language | TypeScript |
| Styling | Global CSS + design tokens |
| Linting | ESLint (eslint-config-next) |
| Build | Turbopack |

---

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

---

## Branch strategy

| Branch | Purpose |
|---|---|
| `main` | Production — always deployable |
| `staging` | Integration branch — merges into main via PR |
| `feat/add-animations` | Feature branch — scroll and entrance animations |

---

## Project structure

```
flowsync-saas/
├── src/
│   └── app/
│       ├── layout.tsx       # Root layout + metadata
│       ├── page.tsx         # Main landing page
│       └── globals.css      # Design system + global styles
├── next.config.mjs
├── tsconfig.json
├── package.json
├── CHANGELOG.md
└── README.md
```

---

## Deployment

Vercel is the recommended deployment target. Connect the repo and Vercel auto-detects Next.js settings.

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Set environment variables from `.env.staging` as a reference
4. Deploy

---

## Roadmap

- [ ] `feat/add-animations` — scroll-reveal + staggered entrance animations
- [ ] Stripe billing integration
- [ ] Auth layer (NextAuth / Clerk)
- [ ] CMS integration for blog and docs
