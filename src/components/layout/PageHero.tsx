import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';
import { cn } from '../../lib/utils';

export type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  /** Breadcrumb trail, e.g. [{ label: 'Home', to: '/' }, { label: 'Services' }] */
  breadcrumb?: Array<{ label: string; to?: string }>;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Shared hero band for the interior pages. Keeps a consistent hierarchy and
 * a single, visible H1 per page.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative overflow-hidden bg-ink-950 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24',
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 right-0 size-[32rem] rounded-full bg-brand-600/22 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent"
      />

      <Container className="relative">
        {breadcrumb && breadcrumb.length > 0 ? (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-ink-400">
                {breadcrumb.map((crumb, index) => (
                  <li key={crumb.label} className="flex items-center gap-1.5">
                    {index > 0 ? (
                      <ChevronRight
                        className="size-3.5 text-ink-600"
                        aria-hidden="true"
                      />
                    ) : null}
                    {crumb.to ? (
                      <Link
                        to={crumb.to}
                        className="transition-colors hover:text-white"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="text-ink-200">
                        {crumb.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </Reveal>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? (
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
                {eyebrow}
              </p>
            </Reveal>
          ) : null}

          <Reveal delay={60}>
            <h1 className="mt-4 text-[2.25rem] leading-[1.1] font-extrabold text-white sm:text-[2.75rem] lg:text-[3.25rem]">
              {title}
            </h1>
          </Reveal>

          {description ? (
            <Reveal delay={120}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
                {description}
              </p>
            </Reveal>
          ) : null}

          {children ? (
            <Reveal delay={180}>
              <div className="mt-9">{children}</div>
            </Reveal>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
