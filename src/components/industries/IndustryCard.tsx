import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  businessTypeCount,
  industryPath,
  subcategoryCount,
} from '../../data/industries';
import type { Industry } from '../../data/industries/types';
import { IconTile } from '../ui/IconTile';
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
      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
    >
      <div className="flex items-start justify-between gap-4">
        <IconTile tone="brand">
          <Icon aria-hidden="true" />
        </IconTile>
        <span className="pt-1 font-display text-sm font-bold tabular-nums text-ink-300">
          {String(industry.number).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 font-display text-lg leading-snug font-bold text-ink-950">
        {industry.name}
      </h3>

      <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-600">
        {industry.description}
      </p>

      <p className="mt-4 text-xs font-medium text-ink-500">
        {groups} business groups · {types} business types
      </p>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
        View category
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
