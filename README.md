# FlowSync SaaS Website

A polished, production-ready SaaS marketing site built with **Next.js 15+**, App Router, TypeScript, and Tailwind-ready CSS.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15+ (App Router) |
| Language | TypeScript |
| Styling | Custom CSS (Tailwind-ready) |
| Linting | ESLint |
| Deployment | Vercel (recommended) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev       # Start development server
npm run build     # Create optimized production build
npm run start     # Run production server locally
npm run lint      # Lint with ESLint
```

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout + metadata
    page.tsx        # Landing page (hero, features, pricing, CTA)
    globals.css     # Full design system + component styles
```

## Sections

- **Hero** — Large headline, dashboard mockup, key metrics
- **Trust strip** — Logo row
- **Features** — 4-card grid with large feature card
- **Solutions** — Why it works callout
- **Testimonials** — Social proof cards
- **Pricing** — 3-tier pricing with featured plan
- **CTA** — Final conversion section

## Extending

This repo is designed as a clean foundation. Easy next steps:

- Add authentication with [NextAuth.js](https://next-auth.js.org/)
- Wire up billing with [Stripe](https://stripe.com/docs)
- Add a blog/docs section via MDX or a headless CMS
- Deploy to [Vercel](https://vercel.com) with one click

## Branch Strategy

```
main       ← production-stable
staging    ← pre-production integration branch
feature/*  ← individual feature branches off staging
```

## License

MIT
