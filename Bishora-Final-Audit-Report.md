# Bishora — Final Audit Report

**Date:** 22 October 2026
**Status:** ✅ PASS — ready for deployment

---

## 1. Project

| | |
|---|---|
| **Absolute path** | `C:\Users\rajku\Downloads\Bishora Website` |
| **Brand / domain** | Bishora — `bishora.com` |
| **Positioning** | "Helping Local Businesses Get Found, Get Leads & Grow Online." |

### Technology

React 19 · Vite 8 · TypeScript 5.9 · Tailwind CSS 4 · React Router 7 · lucide-react · @fontsource (self-hosted fonts)

**Static only.** No Next.js, no SSR, no Nitro, no Workers, no Firebase, no backend, no billing, no payment system. Output is a plain `dist/` folder (Firebase Spark compatible).

---

## 2. Build status

```
npm run build      → EXIT CODE 0
npm run typecheck  → EXIT CODE 0
```

`dist/` output: `index.html` 6.39 kB (1.80 gz) · CSS 59.97 kB (10.41 gz) · main JS 283.02 kB (86.81 gz) · 6 lazy route chunks · 8 self-hosted woff2 (142 kB) · `robots.txt`, `sitemap.xml`, `favicon.svg`, `og-image.svg`, `site.webmanifest`, `404.html`, `_redirects`.

---

## 3. Final homepage test result

HTTP 200 · title `Bishora — Helping Local Businesses Get Found, Get Leads & Grow Online` · H1 `Helping Local Businesses Get Found, Get Leads & Grow Online.` · meta description 160 chars · 8 sections · 3 contact CTAs · 14 articles · self-hosted fonts loaded · `scrollWidth 1440 = viewport 1440` · **0 console errors** · all 11 endpoints returned 200.

---

## 4. Routes / pages tested

| Route | Result |
|---|---|
| `/` | 200 — hero, value/outcomes, 6 service cards, sectors, Why Bishora, 5-step process, FAQ, CTA |
| `/services` | 200 — 6 detailed service sections, anchor nav, "included in every engagement", FAQ |
| `/about` | 200 — focus, principles, sectors, what we deliberately don't do, capabilities |
| `/portfolio` | 200 — 4 labelled placeholder cards, case-study format, transparency note |
| `/contact` | 200 — enquiry form, contact details, what-happens-next |
| `/this-route-does-not-exist` | 200 — in-app 404 page, `noindex` |
| `/robots.txt` `/sitemap.xml` `/404.html` `/favicon.svg` `/og-image.svg` `/site.webmanifest` | 200 |

Every route tested at **1440×900, 768×1024, 390×844, 375×812** (24 page loads).

---

## 5. Buttons, links and forms tested

- **Navigation** — all 5 desktop nav links reach the correct URL; mobile menu opens with 5 links, locks background scroll, navigates, closes, closes on Escape, restores focus to the trigger
- **CTAs** — hero "Get a Free Consultation" → `/contact`; "View Our Services" → `/services`; 3 contact CTAs on home; footer deep link → `/services#google-ads` scrolls to the section
- **Contact form** — empty submit rejected (3 required fields flagged, error summary, focus to first invalid); invalid email rejected (email only); invalid phone rejected; valid submit → success panel with value summary; reset returns a clean form; `?service=SEO` pre-selects the dropdown
- **Accordion** — expands, panel becomes visible
- **WhatsApp CTA** — present on every page, valid structure (button + honest "number to be confirmed"; no invented `wa.me` link)
- **Link crawl** — every internal href loads 200; zero invented social URLs; footer social placeholders are non-links

---

## 6. Playwright / browser tests performed

Playwright (Chrome channel) installed **outside the project** (`%TEMP%\opencode\pwtest`) — `package.json` was not modified.

| Suite | Result |
|---|---|
| Structural per page × viewport | HTTP status, title, meta description, canonical, H1 count, heading hierarchy, horizontal overflow, element overflow, broken images, alt text, CSS applied, blank sections, header, footer, accessible names, SVG labelling, console errors, runtime errors, failed requests, 4xx/5xx |
| Link crawl | all internal routes, external-link audit |
| Interactions | nav, CTAs, deep links, form validation matrix, accordion, 404 |
| Mobile menu | open/close/navigate/Escape/focus/hero fit/card stacking/footer usability/navbar fit |
| Static assets | robots.txt, sitemap.xml, manifest, favicon, OG image, 404.html |
| Lighthouse | 6 routes |
| Headless Chrome screenshots | desktop, tablet, mobile (visual confirmation) |

**Totals: 759 assertions passed, 0 failed.**

---

## 7. Bugs found and fixes made

### Bug 1 — Mobile navbar overflowed the viewport (real layout bug)
`src/components/layout/Navbar.tsx:112` — `className="hidden sm:inline-flex"` did not hide the CTA. Tailwind v4 emits `.inline-flex` (index 14254) **after** `.hidden` (index 14175), so `inline-flex` won the cascade. The 196 px CTA stayed visible at 390 px and pushed the hamburger to `right = 411` — 21 px off-screen.

**Fix:** `className="max-sm:hidden"` — a `max-*` variant sits in a media query emitted after base utilities (verified: `.max-sm:hidden` index 50369), so it reliably wins. Hamburger now `right = 370 ≤ 390`.

All 13 `hidden` usages in the codebase were audited; this was the only broken one.

### Bug 2 — Home meta description too long (226 chars)
`src/pages/Home.tsx` + `index.html` — Google truncates near 155–160 chars. Shortened to **160 chars**; `og:description` and `twitter:description` aligned.

### Bug 3 — Portfolio chart SVG not explicitly `aria-hidden`
`src/components/ProjectThumbnail.tsx` — added `aria-hidden="true" focusable="false"` (defensive; parent already carried `aria-hidden`).

---

## 8. Remaining issues

None functional.

- Home meta description is 160 chars — top of the ideal range; a judgement call, not a defect.
- `Bishora-Website-Source-Final.zip` in the root was regenerated at the end of this session and **includes all three fixes above**.
- Real business details (phone, email, WhatsApp number, social URLs) remain intentionally **blank** in `src/config/site.ts`. The site shows honest "to be confirmed" placeholders — no fake data was introduced anywhere.

---

## 9. SEO checks completed

- Unique, page-appropriate `<title>` per route · meta description on every route (140–186 chars) · canonical URL per route · `robots` directive (`index, follow`; `noindex, nofollow` on 404)
- Exactly **one H1 per page**, sensible text, no skipped heading levels
- Open Graph (`og:title/description/type/url/site_name/locale/image/image:alt`) and Twitter card tags per route
- JSON-LD: `ProfessionalService` + `OfferCatalog` site-wide; `BreadcrumbList` on interior pages
- `robots.txt` allows crawling and points to the sitemap; `sitemap.xml` lists all 5 public routes
- Clean URLs (`/services`, `/portfolio`, …); all images have alt text; all links/buttons have accessible names

---

## 10. Accessibility checks completed

- Semantic landmarks (`header`/`nav`/`main`/`footer`), skip-to-content link, one H1 per page
- Keyboard: visible `:focus-visible` rings, focus trap in the mobile menu, Escape to close, focus restoration, `inert` on the closed menu so hidden links are unreachable
- Every form field has a `<label for>`, `aria-invalid`, `aria-describedby`; success region is `role="status"` / `aria-live`
- Colour contrast passes WCAG AA (footer contrast corrected to `text-ink-400`)
- `prefers-reduced-motion` disables animation; `<noscript>` keeps all content visible
- Automated audit: **Accessibility 100** with zero axe failures

---

## 11. Lighthouse results

| Route | Accessibility | Best Practices | SEO |
|---|---|---|---|
| `/` | 100 | 100 | 100 |
| `/services` | 100 | 100 | 100 |
| `/about` | 100 | 100 | 100 |
| `/portfolio` | 100 | 100 | 100 |
| `/contact` | 100 | 100 | 100 |
| `/404` | 100 | 100 | 100 |

---

## 12. Deployment

Static site — works on the free Firebase Spark plan (no Blaze, no pay-as-you-go).

```bash
npm install
npm run build        # → dist/
```

Point Firebase Hosting at `dist/` and add **one rewrite** so deep links resolve:

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

`public/_redirects` already covers Netlify-style hosts; `public/404.html` covers static-404 hosts. Firebase has deliberately **not** been configured in this repo — add it when ready.

Before going live: add real contact details to `src/config/site.ts`, and update the `https://bishora.com` URLs in `index.html`, `public/sitemap.xml`, `public/robots.txt` and `siteConfig.url`.

---

## 13. Exact files changed in the final QA session

| File | Change |
|---|---|
| `src/components/layout/Navbar.tsx` | `hidden sm:inline-flex` → `max-sm:hidden` (Bug 1) + explanatory comment |
| `src/pages/Home.tsx` | meta description shortened to 160 chars (Bug 2) |
| `index.html` | `meta description`, `og:description`, `twitter:description` shortened (Bug 2) |
| `src/components/ProjectThumbnail.tsx` | SVG `aria-hidden` + `focusable="false"` (Bug 3) |

No other source files were altered. `package.json` gained no test dependencies.

---

## 14. Final status

# ✅ PASS

759/759 automated assertions passed · Lighthouse 100/100/100 on all 6 routes · production build exit code 0 · typecheck exit code 0 · homepage smoke test clean with 0 console errors · no secrets, credentials or fake business details in the repository.

**Ready for the next deployment step.**
