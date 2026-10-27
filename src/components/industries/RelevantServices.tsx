import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { serviceHref, services } from '../../data/services';
import { IconTile } from '../ui/IconTile';

export type RelevantServicesProps = {
  serviceSlugs: string[];
  /** Wording used in the small note under the cards. */
  context: string;
};

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

/** Compact list of the existing Bishora services that usually matter here. */
export function RelevantServices({ serviceSlugs, context }: RelevantServicesProps) {
  const relevant = serviceSlugs
    .map((slug) => serviceBySlug.get(slug))
    .filter((service): service is (typeof services)[number] => Boolean(service));

  return (
    <>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {relevant.map((service) => {
          const Icon = service.icon;

          return (
            <li key={service.slug}>
              <Link
                to={serviceHref(service.slug)}
                className="group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
              >
                <IconTile tone="brand" size="sm">
                  <Icon aria-hidden="true" />
                </IconTile>
                <div className="flex-1">
                  <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                    {service.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-600">
                    {service.summary}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-800">
                    Learn more
                    <ArrowRight className="size-3.5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 text-sm leading-relaxed text-ink-500">{context}</p>
    </>
  );
}
