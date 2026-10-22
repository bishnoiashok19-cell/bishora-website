# Bishora — Marketing Website

Static marketing website for **Bishora**, a digital marketing agency helping
small and local businesses get found, get leads and grow online.

> **Helping Local Businesses Get Found, Get Leads & Grow Online.**

- **Brand:** Bishora (B-I-S-H-O-R-A)
- **Domain:** `bishora.com`
- **Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · React Router 7 · lucide-react
- **Output:** a plain static `dist/` folder — no SSR, no server runtime, no backend

---

## Quick start

```bash
npm install     # install dependencies
npm run dev     # local dev server  → http://localhost:5173
npm run build   # type-check + production build → dist/
npm run preview # serve the production build locally → http://localhost:4173
```

Requires **Node.js 20.19+** (Node 22 LTS or newer recommended).

---

## Project structure

```
bishora-website/
├── index.html                  # HTML shell + default SEO meta + JSON-LD
├── vite.config.ts              # Vite + React + Tailwind plugin
├── tsconfig*.json              # TypeScript project references
├── public/                     # copied verbatim into dist/
│   ├── fonts/                  # self-hosted Latin woff2 (synced by npm run fonts)
│   ├── favicon.svg             # Bishora logo mark
│   ├── og-image.svg            # 1200×630 social share image
│   ├── robots.txt              # allows crawling, points at the sitemap
│   ├── sitemap.xml             # the five public routes
│   ├── site.webmanifest        # PWA manifest
│   ├── _redirects              # SPA fallback for Netlify-style hosts
│   └── 404.html                # static 404 for hosts without SPA rewrites
├── scripts/
│   └── sync-fonts.mjs          # copies woff2 files out of @fontsource
└── src/
    ├── main.tsx                # React root + BrowserRouter
    ├── App.tsx                 # routes (code-split interior pages)
    ├── index.css               # Tailwind theme tokens + base styles
    ├── config/
    │   └── site.ts             # ★ ALL business details live here
    ├── data/                   # copy & content (services, FAQs, projects…)
    ├── lib/
    │   ├── seo.ts              # per-page title/meta/OG/canonical/JSON-LD
    │   └── utils.ts            # class-name helper
    ├── components/
    │   ├── layout/             # Navbar, MobileMenu, Footer, Logo, PageHero
    │   ├── ui/                 # Button, Container, SectionHeading, Card, …
    │   ├── home/               # Home page sections
    │   ├── ContactForm.tsx     # validated enquiry form
    │   ├── CTASection.tsx      # reusable closing CTA
    │   ├── ProcessSection.tsx  # reusable 5-step process
    │   ├── ServiceCard.tsx     # service overview card
    │   ├── ServiceDetail.tsx   # full service block
    │   ├── ProjectThumbnail.tsx
    │   └── WhatsAppButton.tsx  # floating WhatsApp CTA
    └── pages/                  # Home, Services, About, Portfolio, Contact, 404
```

---

## ★ Adding your real business details

Everything is in one file: **`src/config/site.ts`**. Change the values marked
`TODO` and the whole site updates — navbar, footer, contact page, floating
WhatsApp button and the enquiry form.

```ts
export const contactConfig = {
  email: '',            // TODO: e.g. 'hello@bishora.com'
  phone: '',            // TODO: e.g. '+1 555 010 1234'
  address: '',
  hours: '',
};

export const whatsappConfig = {
  number: '',           // TODO: digits only, country code first — e.g. '447700900123'
  message: "Hi Bishora, I'd like to talk about getting more customers.",
};

export const socialConfig = {
  facebook: '',
  instagram: '',
  linkedin: '',
  x: '',
};
```

**Behaviour while these are empty** (by design — nothing is ever faked):

| Element | Empty-config behaviour |
| --- | --- |
| Phone | "Phone number to be confirmed" |
| Email | "Email address to be confirmed" |
| WhatsApp | Disabled button reading "WhatsApp number coming soon", and the floating button opens a short panel pointing to the contact form |
| Social icons | Muted placeholder tiles labelled "profile link coming soon" |

As soon as a real WhatsApp number is added, the floating button, the CTA
sections and the contact form all switch to live `wa.me` links automatically.

---

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Hero, value/outcomes, service overview, sectors, Why Bishora, 5-step process, FAQ, CTA |
| `/services` | Twelve detailed service sections, "included in every engagement", FAQ, CTA |
| `/about` | Focus, principles, sectors, what we deliberately do not do, capabilities |
| `/portfolio` | Four clearly-labelled placeholder project cards, case-study format, transparency note |
| `/contact` | Validated enquiry form, contact details, "what happens next" |
| `*` | In-app 404 page (plus a static `public/404.html` fallback) |

---

## SEO

- Unique `<title>` and meta description per route, applied at runtime by
  `src/lib/seo.ts` (`useSeo` hook) — no extra dependency, no SSR needed.
- Baseline tags are also hard-coded in `index.html`, so crawlers and link
  previews always see valid metadata before hydration.
- Canonical URLs, Open Graph and Twitter card tags, `robots` directives.
- JSON-LD structured data: `ProfessionalService` + `OfferCatalog` (site-wide,
  in `index.html`) and `BreadcrumbList` per interior page.
- Exactly one `<h1>` per page with a correct `h2`/`h3` hierarchy.
- `public/robots.txt` and `public/sitemap.xml` reference `https://bishora.com`.
- Clean, hyphen-free URLs (`/services`, `/portfolio`, …).

> After adding the real domain, update the `https://bishora.com` URLs in
> `index.html`, `public/sitemap.xml`, `public/robots.txt` and `siteConfig.url`
> in `src/config/site.ts`.

---

## Accessibility

- Semantic landmarks (`header`/`nav`/`main`/`footer`), a skip-to-content link,
  and a single `<h1>` per page.
- Full keyboard support: visible `:focus-visible` rings, focus trapping in the
  mobile menu, Escape-to-close, and focus restoration to the trigger button.
- All form fields have real `<label>` elements, `aria-invalid` and
  `aria-describedby` error wiring, and an `aria-live` success region.
- The mobile menu uses the `inert` attribute so hidden links are never
  focusable or exposed to assistive technology.
- Colour contrast passes WCAG AA (Lighthouse accessibility = 100).
- `prefers-reduced-motion` disables all animation, and a `<noscript>` rule
  keeps all content visible if JavaScript is unavailable.

---

## Performance

- Route-level code splitting — the home page is the only eagerly-loaded route.
- ~87 kB gzipped for the main bundle, ~10 kB gzipped of CSS.
- **Zero third-party requests.** Inter and Plus Jakarta Sans are self-hosted
  as Latin-subset woff2 files (`public/fonts/`, synced from the `@fontsource`
  packages by `npm run fonts`, which runs automatically before `dev`/`build`).
  This removes the render-blocking Google Fonts stylesheet and the extra
  DNS/TLS round-trip.
- The two most important font files are preloaded; the rest load with
  `font-display: swap`.
- No raster images — every graphic is an inline SVG, so there is no image
  decoding cost and no layout shift.
- Scroll-reveal animations are pure CSS, transform/opacity only, and are
  disabled for reduced-motion users.

---

## Deployment (Firebase Hosting — Spark plan)

The build is a **static** site, so it works with ordinary Firebase Hosting on
the free Spark plan. No Blaze, no pay-as-you-go, no server code.

```bash
npm run build          # outputs to dist/
```

Point Firebase Hosting at the `dist` directory and add a **single rewrite** so
deep links such as `/services` resolve to the SPA:

```jsonc
// firebase.json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [{ "source": "**", "destination": "/index.html" }]
  }
}
```

`public/_redirects` already provides the equivalent rule for Netlify-style
hosts, and `public/404.html` covers hosts that serve a static 404 page.

> Deploying with Firebase is intentionally **not** configured in this repo —
> add it when you are ready, with the CLI you prefer.

---

## Content rules followed in this build

To keep the site honest, no client names, awards, revenue figures, years in
business, testimonials or certifications have been invented. The portfolio
page uses clearly-labelled placeholders ("Project details coming soon"), and
the About page describes Bishora's approach without unverifiable claims.

---

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Sync fonts → `tsc -b` type-check → production build to `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run typecheck` | Type-check only |
| `npm run fonts` | Re-copy the woff2 font files into `public/fonts/` |

---

© Bishora. All rights reserved.
