import {
  ArrowRight,
  Globe,
  MapPin,
  MoreVertical,
  Navigation,
  Phone,
  Search,
  Star,
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

/**
 * Illustrative "how your business appears in search" panel.
 *
 * The panel uses placeholder content only — it demonstrates the outcome
 * Bishora works towards, it is not a screenshot of a client account.
 */
function SearchPreview() {
  return (
    <div className="relative">
      {/* Floating badge */}
      <div className="absolute -left-3 top-8 z-20 hidden rounded-xl border border-white/15 bg-ink-900/90 px-3 py-2 shadow-lift backdrop-blur sm:block lg:-left-8">
        <p className="flex items-center gap-2 text-xs font-semibold text-white">
          <span className="inline-flex size-6 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400">
            <MapPin className="size-3.5" aria-hidden="true" />
          </span>
          Local listing optimised
        </p>
      </div>

      {/* Browser window */}
      <div className="rounded-2xl border border-white/12 bg-white/[0.05] p-2 shadow-lift backdrop-blur-sm">
        <div className="overflow-hidden rounded-xl bg-white">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-ink-100 bg-ink-50/80 px-4 py-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="size-2.5 rounded-full bg-ink-200" />
              <span className="size-2.5 rounded-full bg-ink-200" />
              <span className="size-2.5 rounded-full bg-ink-200" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3 py-1.5">
              <Search className="size-3.5 text-ink-400" aria-hidden="true" />
              <span className="text-xs font-medium text-ink-600">
                your service near me
              </span>
            </div>
            <MoreVertical className="size-4 text-ink-300" aria-hidden="true" />
          </div>

          {/* Results */}
          <div className="space-y-3 p-4">
            <div className="rounded-xl border-2 border-brand-500/70 bg-brand-50/50 p-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-sm font-bold text-ink-950">
                    Your Business
                  </p>
                  <p className="mt-0.5 text-[0.7rem] font-medium text-ink-500">
                    Local business · Open now
                  </p>
                </div>
                <span className="inline-flex items-center gap-0.5 rounded-md bg-white px-1.5 py-1 text-[0.7rem] font-semibold text-ink-700 ring-1 ring-ink-100">
                  <Star className="size-3 fill-accent-500 text-accent-500" aria-hidden="true" />
                  <span className="sr-only">Rated </span>Reviews
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                <span className="inline-flex items-center gap-1.5 rounded-lg bg-ink-950 px-2.5 py-1.5 text-[0.7rem] font-semibold text-white">
                  <Phone className="size-3" aria-hidden="true" />
                  Call
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-[0.7rem] font-semibold text-ink-700">
                  <Globe className="size-3" aria-hidden="true" />
                  Website
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-[0.7rem] font-semibold text-ink-700">
                  <Navigation className="size-3" aria-hidden="true" />
                  Directions
                </span>
              </div>
            </div>

            <div className="rounded-xl border border-ink-100 p-3.5 opacity-70">
              <div className="h-2.5 w-2/5 rounded-full bg-ink-200" />
              <div className="mt-2.5 h-2 w-4/5 rounded-full bg-ink-100" />
            </div>

            <div className="rounded-xl border border-ink-100 p-3.5 opacity-70">
              <div className="h-2.5 w-1/3 rounded-full bg-ink-200" />
              <div className="mt-2.5 h-2 w-3/5 rounded-full bg-ink-100" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating result badge */}
      <div className="absolute -right-3 bottom-16 z-20 hidden rounded-xl border border-white/15 bg-ink-900/90 px-3.5 py-2.5 shadow-lift backdrop-blur sm:block lg:-right-6">
        <p className="text-xs font-semibold text-white">More calls</p>
        <p className="text-xs font-semibold text-brand-300">More enquiries</p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28">
      {/* Background layers */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-70"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-24 size-[38rem] rounded-full bg-brand-600/25 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 size-[32rem] rounded-full bg-accent-500/12 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6 xl:col-span-6">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-brand-200">
                <span className="size-1.5 rounded-full bg-accent-400" aria-hidden="true" />
                Digital marketing for local businesses
              </span>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-[2.5rem] leading-[1.08] font-extrabold text-white sm:text-[3.25rem] lg:text-[3.75rem]">
                Helping Local Businesses Get Found, Get Leads &amp; Grow Online.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-200 sm:text-lg">
                Bishora helps local businesses build a stronger online presence
                through SEO, Google Business Profile optimization, paid
                advertising, websites and social media marketing.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  to="/contact"
                  size="lg"
                  className="w-full sm:w-auto"
                  iconRight={
                    <ArrowRight className="size-5" aria-hidden="true" />
                  }
                >
                  Get a Free Consultation
                </Button>

                <Button
                  to="/services"
                  variant="outlineLight"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View Our Services
                </Button>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-ink-300">
                <li className="flex items-center gap-2">
                  <span
                    className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Free consultation
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  No obligation
                </li>
                <li className="flex items-center gap-2">
                  <span
                    className="inline-flex size-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  Built for local business
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="lg:col-span-6 xl:col-span-6 xl:pl-6">
            <Reveal delay={160}>
              <SearchPreview />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
