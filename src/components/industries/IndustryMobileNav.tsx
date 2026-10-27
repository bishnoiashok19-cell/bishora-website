import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  industries,
  industriesPath,
  industryPath,
  subcategoryPath,
  businessTypePath,
} from '../../data/industries';
import { cn } from '../../lib/utils';

export type IndustryMobileNavProps = {
  /** Closes the whole mobile menu once a destination is chosen. */
  onNavigate: () => void;
};

/**
 * Mobile accordion for the industry directory.
 *
 * Three levels, one open branch at a time:
 *   category → group → business type
 *
 * Only one main category opens at a time so the panel never turns into an
 * unmanageable nested tree, and type links stay shallow enough to read at 360px.
 */
export function IndustryMobileNav({ onNavigate }: IndustryMobileNavProps) {
  const baseId = useId();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const panelId = `${baseId}-panel`;

  return (
    <li>
      <div className="flex items-center justify-between gap-3">
        <Link
          to={industriesPath}
          onClick={onNavigate}
          className="flex-1 py-4 text-lg font-semibold text-ink-900 transition-colors hover:text-brand-700"
        >
          Choose Your Business
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label="Browse business categories"
          onClick={() => setOpen((current) => !current)}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full text-ink-500 transition-colors hover:bg-ink-50 hover:text-ink-900"
        >
          <ChevronDown
            className={cn(
              'size-5 text-ink-400 transition-transform duration-200',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      </div>

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
                <div className="flex items-center gap-1">
                  <Link
                    to={industryPath(industry.slug)}
                    onClick={onNavigate}
                    className="flex min-h-11 flex-1 items-center gap-2.5 rounded-lg px-2 py-2 text-left text-[0.95rem] font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-brand-800"
                  >
                    <span className="w-5 shrink-0 text-right font-display text-[0.7rem] font-bold tabular-nums text-ink-400">
                      {String(industry.number).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1 leading-snug">
                      {industry.name}
                    </span>
                  </Link>

                  <button
                    type="button"
                    aria-expanded={isExpanded}
                    aria-controls={subPanelId}
                    aria-label={`Show ${industry.name} groups`}
                    onClick={() => {
                      setExpanded((current) => {
                        const next = current === industry.slug ? null : industry.slug;
                        if (next === null) setExpandedGroup(null);
                        return next;
                      });
                    }}
                    className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-50 hover:text-brand-800"
                  >
                    <ChevronDown
                      className={cn(
                        'size-4 transition-transform duration-200',
                        isExpanded && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <ul
                  id={subPanelId}
                  hidden={!isExpanded}
                  className="mt-0.5 mb-1 ml-2 space-y-0.5 border-l border-ink-100 pl-3"
                >
                  {industry.subcategories.map((subcategory) => {
                    const groupKey = `${industry.slug}/${subcategory.slug}`;
                    const isGroupExpanded = expandedGroup === groupKey;
                    const typePanelId = `${baseId}-${industry.slug}-${subcategory.slug}`;

                    return (
                      <li key={subcategory.slug}>
                        <div className="flex items-center gap-1">
                          <Link
                            to={subcategoryPath(industry.slug, subcategory.slug)}
                            onClick={onNavigate}
                            className="flex min-h-9 flex-1 items-center px-1 py-1.5 text-sm leading-snug text-ink-600 transition-colors hover:text-brand-700"
                          >
                            {subcategory.name}
                          </Link>

                          <button
                            type="button"
                            aria-expanded={isGroupExpanded}
                            aria-controls={typePanelId}
                            aria-label={`Show ${subcategory.name} business types`}
                            onClick={() =>
                              setExpandedGroup((current) =>
                                current === groupKey ? null : groupKey,
                              )
                            }
                            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-ink-400 transition-colors hover:bg-ink-50 hover:text-brand-800"
                          >
                            <ChevronDown
                              className={cn(
                                'size-3.5 transition-transform duration-200',
                                isGroupExpanded && 'rotate-180',
                              )}
                              aria-hidden="true"
                            />
                          </button>
                        </div>

                        <ul
                          id={typePanelId}
                          hidden={!isGroupExpanded}
                          className="mb-1 ml-1 space-y-0.5 border-l border-ink-100 pl-3"
                        >
                          {subcategory.businessTypes.map((businessType) => (
                            <li key={businessType.slug}>
                              <Link
                                to={businessTypePath(
                                  industry.slug,
                                  subcategory.slug,
                                  businessType.slug,
                                )}
                                onClick={onNavigate}
                                className="flex min-h-8 items-center py-1 text-[0.8125rem] leading-snug text-ink-500 transition-colors hover:text-brand-700"
                              >
                                {businessType.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
