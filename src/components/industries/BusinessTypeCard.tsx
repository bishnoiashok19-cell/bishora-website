import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BusinessType } from '../../data/industries/types';

export type BusinessTypeCardProps = {
  businessType: BusinessType;
  /** Canonical route for this business type. */
  to: string;
};

/**
 * Business-type card.
 *
 * The whole card is one link so the name, description and call to action are
 * a single, predictable target on both pointer and touch devices.
 */
export function BusinessTypeCard({ businessType, to }: BusinessTypeCardProps) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
        {businessType.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-ink-600">
        {businessType.description}
      </p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
        View More
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
