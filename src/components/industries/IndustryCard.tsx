import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  businessTypeCount,
  industryPath,
  subcategoryCount,
} from '../../data/industries';
import type { Industry } from '../../data/industries/types';
import { IconTile } from '../ui/IconTile';
import { IndustryImage } from './IndustryImage';
import { industryIcon } from './industryIcons';

export type IndustryCardProps = {
  industry: Industry;
  /** Runs after navigation — used to close the mega menu. */
  onNavigate?: () => void;
};

/** The single card used for every main category, on the directory and home. */
export function IndustryCard({ industry, onNavigate }: IndustryCardProps) {
  const Icon = industryIcon(industry.slug);
  const groups = subcategoryCount(industry);
  const types = businessTypeCount(industry);

  return (
    <Link
      to={industryPath(industry.slug)}
      onClick={onNavigate}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <div className="relative">
        <IndustryImage
          image={industry.images[0]}
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
          className="aspect-[16/9]"
          imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute top-3 left-3 rounded-full bg-ink-950/80 px-2.5 py-1 font-display text-[0.7rem] font-bold tabular-nums text-white backdrop-blur">
          {String(industry.number).padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <IconTile tone="brand" size="sm">
            <Icon aria-hidden="true" />
          </IconTile>
          <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
            {industry.name}
          </h3>
        </div>

        <p className="mt-3 line-clamp-3 flex-1 text-[0.925rem] leading-relaxed text-ink-600">
          {industry.guide.tagline}
        </p>

        <p className="mt-4 text-xs font-medium text-ink-500">
          {groups} business groups · {types} business types
        </p>

        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
          View category
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
