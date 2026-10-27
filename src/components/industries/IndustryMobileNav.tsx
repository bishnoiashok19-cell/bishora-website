import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  industries,
  industriesPath,
  industryPath,
  subcategoryPath,
} from '../../data/industries';
import { cn } from '../../lib/utils';

export type IndustryMobileNavProps = {
  /** Closes the whole mobile menu once a destination is chosen. */
  onNavigate: () => void;
};

/**
 * Mobile accordion for the industry directory.
 *
 * Only one main category opens at a time so the panel never turns into an
 * unmanageable nested tree. Sub-categories are indented under their parent.
 */
export function IndustryMobileNav({ onNavigate }: IndustryMobileNavProps) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const panelId = `${baseId}-panel`;

  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold text-ink-900 transition-colors hover:text-brand-700"
      >
        Choose Your Business
        <ChevronDown
          className={cn(
            'size-5 shrink-0 text-ink-400 transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>

      <div id={panelId} hidden={!open} className="pb-4">
        <Link
          to={industriesPath}
          onClick={onNavigate}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand-200 bg-brand-50 px-3.5 py-2 text-sm font-semibold text-brand-800"
        >
          View all business categories
        </Link>

        <ul className="mt-3 space-y-0.5 border-l border-ink-100 pl-3">
          {industries.map((industry) => {
            const isExpanded = expanded === industry.slug;
            const subPanelId = `${baseId}-${industry.slug}`;

            return (
              <li key={industry.slug}>
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={subPanelId}
                  onClick={() =>
                    setExpanded((current) =>
                      current === industry.slug ? null : industry.slug,
                    )
                  }
                  className="flex min-h-11 w-full items-center gap-2.5 rounded-lg px-2 py-2 text-left text-[0.95rem] font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-brand-800"
                >
                  <span className="w-5 shrink-0 text-right font-display text-[0.7rem] font-bold tabular-nums text-ink-400">
                    {String(industry.number).padStart(2, '0')}
                  </span>
                  <span className="flex-1 leading-snug">{industry.name}</span>
                  <ChevronDown
                    className={cn(
                      'size-4 shrink-0 text-ink-400 transition-transform duration-200',
                      isExpanded && 'rotate-180',
                    )}
                    aria-hidden="true"
                  />
                </button>

                <ul
                  id={subPanelId}
                  hidden={!isExpanded}
                  className="mb-1 ml-2 space-y-0.5 border-l border-ink-100 pl-3"
                >
                  <li>
                    <Link
                      to={industryPath(industry.slug)}
                      onClick={onNavigate}
                      className="flex min-h-9 items-center py-1.5 text-sm font-semibold text-brand-700"
                    >
                      All {industry.name} groups
                    </Link>
                  </li>
                  {industry.subcategories.map((subcategory) => (
                    <li key={subcategory.slug}>
                      <Link
                        to={subcategoryPath(industry.slug, subcategory.slug)}
                        onClick={onNavigate}
                        className="flex min-h-9 items-center py-1.5 text-sm text-ink-600 transition-colors hover:text-brand-700"
                      >
                        {subcategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
