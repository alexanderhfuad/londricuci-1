# Londri Cuci Cuci — Landing Page

Modern, SEO-friendly React + Vite + Tailwind landing page in Bahasa Indonesia
for "Londri Cuci Cuci", a laundry kiloan service. Major design upgrade over the
original WordPress site at https://cuci-cuci.alexfuad.link.

## Stack

- React 18 + TypeScript + Vite
- Tailwind v4 with HSL design tokens
- shadcn/ui components
- framer-motion (animations, counters, scroll reveals)
- react-hook-form + zod (contact form validation)
- wouter (routing with `BASE_URL`)
- lucide-react + react-icons (icons including FaWhatsapp)

## Branding

- Primary: cyan `hsl(195 85% 45%)`
- Secondary: mint `hsl(160 60% 85%)`
- Accent: cream `hsl(40 80% 90%)`
- Font: Plus Jakarta Sans (preconnect + Google Fonts)
- Radius: 1rem
- Logo mark: rounded square "L" in primary

## Sections (artifacts/cuci-cuci/src/components/sections/)

1. `Navbar` — fixed glassmorphism navbar with smooth-scroll anchors and mobile menu
2. `Hero` — gradient headline, hero image, social-proof avatars, dual CTA
3. `HowItWorks` — 3 steps (Jemput, Cuci, Antar) with connecting line
4. `Services` — 4 service cards with images and pricing
5. `Stats` — animated counters on cyan gradient with floating bubbles
6. `Pricing` — 3 plans (Hemat, Express featured, Premium)
7. `Calculator` — interactive cost estimator (service + qty + addons → total + WhatsApp deeplink with itemized message)
8. `Coverage` — Jabodetabek service areas grid
8. `About` — story with values grid (Garansi, Eco-Friendly, Mesin Premium, Tim)
9. `Testimonials` — 6 customer stories with 5-star ratings
10. `FAQ` — 8 expandable Q&A using accordion
11. `CTA` — large gradient CTA with discount offer
12. `Contact` — info cards + validated form (name/phone/email/message)
13. `Footer` — 4-column with brand, contact, links, socials
14. `WhatsAppFloat` — appears after scroll, expands tooltip after 1.2s

## SEO

`index.html` contains `lang="id"`, complete OG/Twitter meta, JSON-LD
`LocalBusiness` schema with address/phone/hours, Plus Jakarta Sans font preconnect,
custom `favicon.svg`, and OG image at `/opengraph.jpg`.

## Assets

`public/images/` — hero.png + service-{regular,express,satuan,dryclean}.png
(AI-generated, mix-blend on tinted gradient backgrounds for brand cohesion).

## WhatsApp Integration

All CTAs link to `https://wa.me/6281234567890` with prefilled
Indonesian-language messages encoded per context (general, plan-specific,
promo, etc.).

## Routing

Wouter wraps with `base={import.meta.env.BASE_URL.replace(/\/$/, "")}` so the
artifact works under both `/` (root) and any path-based mount.

## Commands

- `pnpm --filter @workspace/cuci-cuci run typecheck` — TS check (passes clean)
- Workflow `artifacts/cuci-cuci: web` runs the Vite dev server on PORT.
