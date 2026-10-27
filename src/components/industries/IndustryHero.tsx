import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { IndustryImage as IndustryImageData } from '../../data/industries/images';
import { Container } from '../ui/Container';
import { IndustryImage } from './IndustryImage';

export type IndustryHeroProps = {
  /** Small label above the H1, e.g. "Business category". */
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: Array<{ label: string; to?: string }>;
  image: IndustryImageData;
  /** Primary and secondary calls to action. */
  children?: ReactNode;
  /** Short factual chips under the CTAs, e.g. counts or the group name. */
  chips?: string[];
};

/**
 * Shared hero for the three industry levels.
 *
 * Left: breadcrumb, label, H1, description, CTAs.
 * Right: one relevant photograph that also acts as the page's LCP element.
 * The two columns stack under `lg` and the section stays compact on mobile.
 */
export function IndustryHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  image,
  children,
  chips,
}: IndustryHeroProps) {
  return (
    <section className="relative overflow-hidden bg-ink-950 pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 size-[30rem] rounded-full bg-brand-600/22 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-0 size-[26rem] rounded-full bg-accent-500/10 blur-[120px]"
      />

      <Container className="relative">
        <div className="grid items-center gap-9 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <nav aria-label="Breadcrumb" className="min-w-0">
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.78rem] leading-relaxed text-ink-300">
                {breadcrumb.map((crumb, index) => {
                  const isLast = index === breadcrumb.length - 1;

                  return (
                    <li key={`${crumb.label}-${index}`} className="flex items-center gap-1.5">
                      {crumb.to && !isLast ? (
                        <Link
                          to={crumb.to}
                          className="rounded transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span
                          aria-current={isLast ? 'page' : undefined}
                          className={isLast ? 'text-ink-200' : undefined}
                        >
                          {crumb.label}
                        </span>
                      )}
                      {!isLast ? (
                        <ChevronRight className="size-3 shrink-0 text-ink-500" aria-hidden="true" />
                      ) : null}
                    </li>
                  );
                })}
              </ol>
            </nav>

            <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-brand-300 uppercase">
              {eyebrow}
            </p>

            <h1 className="mt-3 font-display text-[2.1rem] leading-[1.08] font-extrabold tracking-[-0.02em] text-white sm:text-[2.6rem] lg:text-[3.1rem]">
              {title}
            </h1>

            <p className="mt-5 max-w-2xl text-[1.0125rem] leading-relaxed text-ink-200 sm:text-[1.0625rem]">
              {description}
            </p>

            {children ? (
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {children}
              </div>
            ) : null}

            {chips && chips.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-ink-200"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[1.9rem] bg-gradient-to-br from-brand-500/25 via-transparent to-accent-500/20 blur-xl"
              />
              <IndustryImage
                image={image}
                priority
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="relative aspect-[4/3] rounded-3xl ring-1 ring-white/15 shadow-lift"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
