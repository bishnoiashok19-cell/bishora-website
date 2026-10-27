import { Link } from 'react-router-dom';
import { serviceHref, services } from '../../data/services';
import type { BusinessType } from '../../data/industries/types';

export type BusinessTypeCardProps = {
  businessType: BusinessType;
  /** Existing Bishora services that usually matter for this group. */
  serviceSlugs: string[];
};

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

/**
 * Business-type card.
 *
 * Business-type pages are intentionally deferred until there is enough
 * genuinely distinct content for them, so the card lists the relevant
 * existing services instead of linking to a thin page.
 */
export function BusinessTypeCard({
  businessType,
  serviceSlugs,
}: BusinessTypeCardProps) {
  const relevant = serviceSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <article className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift">
      <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
        {businessType.name}
      </h3>

      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
        Relevant support
      </p>

      <ul className="mt-2.5 flex flex-wrap gap-1.5">
        {relevant.map((service) => (
          <li key={service.slug}>
            <Link
              to={serviceHref(service.slug)}
              className="inline-flex rounded-full border border-ink-100 bg-ink-50 px-2.5 py-1 text-xs font-medium text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
            >
              {service.shortName}
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
