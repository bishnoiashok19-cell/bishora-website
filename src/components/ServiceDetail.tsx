import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Service } from '../data/services';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { IconTile } from './ui/IconTile';
import { cn } from '../lib/utils';

export type ServiceDetailProps = {
  service: Service;
  index: number;
  /** Optional link to a dedicated page for this service. */
  moreHref?: string;
  /** Label for the optional dedicated-page link. */
  moreLabel?: string;
};

/**
 * A single service, presented in full.
 *
 * The left column explains the service and what the client receives; the
 * right column breaks the service down into its individual components.
 */
export function ServiceDetail({ service, index, moreHref, moreLabel }: ServiceDetailProps) {
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <section
      id={service.slug}
      aria-labelledby={`${service.slug}-heading`}
      className={cn(
        'scroll-mt-28 border-t border-ink-100 py-16 sm:py-20 lg:py-24',
        isEven ? 'bg-white' : 'bg-ink-50',
      )}
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Explanation */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-4">
            <IconTile tone="brand" size="lg">
              <Icon aria-hidden="true" />
            </IconTile>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                Service {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-0.5 text-sm text-ink-500">{service.eyebrow}</p>
            </div>
          </div>

          <h2
            id={`${service.slug}-heading`}
            className="mt-6 text-2xl leading-[1.15] font-bold text-ink-950 sm:text-3xl"
          >
            {service.name}
          </h2>

          <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
            {service.summary}
          </p>

          <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
              What is included
            </h3>
            <ul className="mt-4 space-y-2.5">
              {service.includes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-600"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              to={`/contact?service=${encodeURIComponent(service.name)}`}
              iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
            >
              Get a Free Consultation
            </Button>
            <Button
              to="/contact"
              variant="outline"
            >
              Ask about {service.shortName}
            </Button>
          </div>

          {moreHref ? (
            <p className="mt-6">
              <Link
                to={moreHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
              >
                {moreLabel ?? 'Learn more'}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </p>
          ) : null}
        </div>

        {/* Components */}
        <div className="lg:col-span-7">
          <ul className="grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-[0.925rem] leading-relaxed text-ink-600">
                  {feature.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </Container>
    </section>
  );
}
