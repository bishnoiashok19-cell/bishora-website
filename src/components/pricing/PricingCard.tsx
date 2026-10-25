import {
  ArrowRight,
  Check,
  ChevronDown,
  ClipboardCheck,
  Info,
  X,
} from 'lucide-react';
import type { PricingBilling, PricingItem } from '../../data/pricing';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';

export type PricingCardProps = {
  item: PricingItem;
  /** Premium treatment used for bundle cards. */
  highlight?: boolean;
};

const badgeClasses: Record<PricingBilling, string> = {
  'one-time': 'border-brand-100 bg-brand-50 text-brand-700',
  monthly: 'border-ink-200 bg-ink-50 text-ink-700',
  custom: 'border-accent-200 bg-accent-100/70 text-accent-700',
  bundle: 'border-brand-200 bg-brand-50 text-brand-700',
};

function ScopeList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: 'positive' | 'neutral' | 'negative';
}) {
  if (items.length === 0) return null;

  const Icon =
    tone === 'positive' ? Check : tone === 'negative' ? X : ClipboardCheck;

  return (
    <div>
      <p
        className={cn(
          'text-[0.7rem] font-semibold uppercase tracking-[0.14em]',
          tone === 'negative' ? 'text-ink-500' : 'text-ink-600',
        )}
      >
        {title}
      </p>
      <ul className="mt-2 space-y-1.5">
        {items.map((entry) => (
          <li key={entry} className="flex items-start gap-2 text-[0.8125rem] leading-relaxed">
            <Icon
              aria-hidden="true"
              className={cn(
                'mt-0.5 size-3.5 shrink-0',
                tone === 'positive' && 'text-brand-600',
                tone === 'neutral' && 'text-ink-400',
                tone === 'negative' && 'text-ink-400',
              )}
              strokeWidth={tone === 'negative' ? 2.6 : 2.4}
            />
            <span className={tone === 'negative' ? 'text-ink-500' : 'text-ink-700'}>
              {entry}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ctaLabel(item: PricingItem): string {
  if (item.billing === 'custom') return 'Request a Custom Quote';
  if (item.billing === 'bundle') return 'Discuss This Package';
  return 'Get a Quote';
}

/**
 * A single pricing card.
 *
 * The headline price, billing type and a one-line summary are always visible.
 * The full scope (what you get / what we need / what is not included) sits in a
 * native `<details>` disclosure so long lists never crowd the page — while
 * staying keyboard accessible and readable without JavaScript.
 */
export function PricingCard({ item, highlight = false }: PricingCardProps) {
  const inclusions = item.includesLabel ?? 'What you get';

  return (
    <article
      className={cn(
        'group flex h-full flex-col rounded-2xl border bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift',
        highlight
          ? 'border-brand-200 bg-gradient-to-b from-white to-brand-50/40'
          : 'border-ink-100',
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
          {item.name}
        </h3>
        <span
          className={cn(
            'shrink-0 rounded-full border px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.1em]',
            badgeClasses[item.billing],
          )}
        >
          {item.billingLabel}
        </span>
      </div>

      <div className="mt-5">
        {item.priceQualifier ? (
          <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink-500">
            Starting from
          </p>
        ) : null}

        <p className="mt-1 flex flex-wrap items-baseline gap-x-2">
          <span className="font-display text-[1.9rem] leading-none font-extrabold tracking-[-0.02em] text-ink-950">
            {item.price}
          </span>
          {item.priceUnit ? (
            <span className="text-[0.8125rem] font-medium text-ink-500">
              {item.priceUnit}
            </span>
          ) : null}
        </p>
      </div>

      <p className="mt-3 text-[0.9rem] leading-relaxed text-ink-600">
        {item.summary}
      </p>

      <details className="group/scope mt-4 border-t border-ink-100 pt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md text-[0.8125rem] font-semibold text-ink-800 transition-colors hover:text-brand-800 [&::-webkit-details-marker]:hidden">
          <span>
            Full scope
            <span className="ml-1.5 font-normal text-ink-500">
              ({inclusions}, what we need, not included)
            </span>
          </span>
          <ChevronDown
            className="size-4 shrink-0 text-ink-400 transition-transform duration-200 group-open/scope:rotate-180"
            aria-hidden="true"
          />
        </summary>

        <div className="mt-4 space-y-4">
          <ScopeList title={inclusions} items={item.includes} tone="positive" />
          <ScopeList
            title="What we need from you"
            items={item.requirements}
            tone="neutral"
          />
          <ScopeList title="Not included" items={item.excludes} tone="negative" />
        </div>
      </details>

      {item.notes?.length ? (
        <ul className="mt-4 space-y-2">
          {item.notes.map((note) => (
            <li
              key={note}
              className="flex items-start gap-2 rounded-lg bg-ink-50 px-3 py-2.5 text-[0.75rem] leading-relaxed text-ink-600"
            >
              <Info
                className="mt-0.5 size-3.5 shrink-0 text-ink-400"
                aria-hidden="true"
              />
              <span>{note}</span>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto pt-5">
        <Button
          to="/contact"
          variant={highlight ? 'primary' : 'outline'}
          className="w-full"
          iconRight={<ArrowRight className="size-4" aria-hidden="true" />}
        >
          {ctaLabel(item)}
        </Button>
      </div>
    </article>
  );
}
