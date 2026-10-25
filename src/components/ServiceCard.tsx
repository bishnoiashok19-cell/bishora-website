import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import type { Service } from '../data/services';
import { serviceHref } from '../data/services';
import { IconTile } from './ui/IconTile';
import { cn } from '../lib/utils';

export type ServiceCardProps = {
  service: Service;
  /** How many feature bullets to preview in the card. */
  previewCount?: number;
  className?: string;
};

/**
 * Overview card for a single service. Used on the home page and as the
 * quick-reference grid on the services page.
 */
export function ServiceCard({
  service,
  previewCount = 3,
  className,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft',
        'transition-[transform,box-shadow,border-color] duration-300',
        'hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-lift',
        className,
      )}
    >
      <IconTile tone="brand">
        <Icon aria-hidden="true" />
      </IconTile>

      <h3 className="mt-5 font-display text-xl font-bold text-ink-950">
        {service.name}
      </h3>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
        {service.summary}
      </p>

      <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
        {service.features.slice(0, previewCount).map((feature) => (
          <li key={feature.title} className="flex items-start gap-2.5">
            <Check
              className="mt-0.5 size-4 shrink-0 text-brand-600"
              strokeWidth={2.5}
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-ink-700">
              {feature.title}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to={serviceHref(service.slug)}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
      >
        Learn more about {service.shortName.toLowerCase()}
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
