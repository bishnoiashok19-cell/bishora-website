import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { BusinessType } from '../../data/industries/types';
import { IndustryImage } from './IndustryImage';

export type BusinessTypeCardProps = {
  businessType: BusinessType;
  /** Canonical route for this business type. */
  to: string;
};

/**
 * Business-type card.
 *
 * The whole card is one link so the image, name, tagline and call to action are
 * a single, predictable target on both pointer and touch devices.
 */
export function BusinessTypeCard({ businessType, to }: BusinessTypeCardProps) {
  return (
    <Link
      to={to}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <IndustryImage
        image={businessType.images[0]}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
        className="aspect-[16/10]"
        imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
          {businessType.name}
        </h3>

        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-600">
          {businessType.guide.tagline}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
          View guide
          <ArrowRight
            className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
