import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  industries,
  industriesPath,
  industryPath,
  totalBusinessTypes,
} from '../../data/industries';
import type { Industry } from '../../data/industries/types';

/** Splits the directory into balanced, ordered columns. */
function balancedColumns(items: Industry[], columns: number): Industry[][] {
  const result: Industry[][] = [];
  const base = Math.floor(items.length / columns);
  const extra = items.length % columns;
  let start = 0;

  for (let index = 0; index < columns; index += 1) {
    const size = base + (index < extra ? 1 : 0);
    result.push(items.slice(start, start + size));
    start += size;
  }

  return result;
}

const columns = balancedColumns(industries, 4);

export type IndustryMegaMenuProps = {
  onNavigate: () => void;
};

/**
 * Desktop mega menu for "Choose Your Business".
 *
 * Four balanced columns keep all 30 categories visible without scrolling or a
 * screen-height list. Every entry is a real link.
 */
export function IndustryMegaMenu({ onNavigate }: IndustryMegaMenuProps) {
  return (
    <div
      id="industry-mega-menu"
      className="absolute left-1/2 top-full w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 pt-3"
    >
      <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-lift">
        <div className="flex items-center justify-between gap-6 border-b border-ink-100 bg-ink-50/60 px-6 py-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Choose your business
            </p>
            <p className="mt-1 text-sm text-ink-600">
              Find your category, then the business group that fits.
            </p>
          </div>

          <Link
            to={industriesPath}
            onClick={onNavigate}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-900 transition-colors hover:border-brand-300 hover:text-brand-800"
          >
            View all categories
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-x-6 px-6 py-5">
          {columns.map((column, columnIndex) => (
            <ul key={columnIndex} className="space-y-0.5">
              {column.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    to={industryPath(industry.slug)}
                    onClick={onNavigate}
                    className="group flex items-start gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-brand-50"
                  >
                    <span className="mt-0.5 w-5 shrink-0 text-right font-display text-[0.7rem] font-bold tabular-nums text-ink-300">
                      {String(industry.number).padStart(2, '0')}
                    </span>
                    <span className="text-[0.8125rem] leading-snug font-medium text-ink-700 group-hover:text-brand-800">
                      {industry.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ink-100 px-6 py-3 text-xs text-ink-500">
          <span>
            {industries.length} business categories · {totalBusinessTypes}{' '}
            business types
          </span>
          <div className="flex items-center gap-5 font-medium">
            <Link
              to="/services"
              onClick={onNavigate}
              className="transition-colors hover:text-brand-800"
            >
              Services
            </Link>
            <Link
              to="/pricing"
              onClick={onNavigate}
              className="transition-colors hover:text-brand-800"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              onClick={onNavigate}
              className="transition-colors hover:text-brand-800"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
