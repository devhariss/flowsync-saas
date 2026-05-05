# Changelog

All notable changes to FlowSync are documented here.
This project follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] — 2026-05-05

### Added
- Complete SaaS landing page built with Next.js 16.2.4 (App Router)
- Hero section with live dashboard panel mockup and key metrics
- Trust strip with partner brand logos
- Feature grid: Visual orchestration, AI suggestions, Enterprise governance, Live observability
- "Why it works" solution framing section
- Customer testimonials (2-column grid)
- 3-tier pricing section: Starter / Growth / Enterprise
- Full-width CTA conversion band
- Dark-mode-first global CSS design system with spacing tokens and fluid type scale
- Fully responsive layout (mobile-first, 900px breakpoint)
- TypeScript strict mode
- ESLint configuration via `eslint-config-next`
- Production Turbopack build verified

### Infrastructure
- `staging` branch created as integration branch before production releases
- `feat/add-animations` branch for upcoming animation layer
- README updated with setup instructions and stack overview

---

## [Unreleased]

### In Progress
- `feat/add-animations` — scroll-reveal, staggered entrance, and micro-interaction animations
- Stripe billing integration
- Auth layer (NextAuth or Clerk)
- CMS integration for blog and docs
