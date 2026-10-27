import type { GuidePriority } from '../../data/industries/types';
import { cn } from '../../lib/utils';

export type PriorityListProps = {
  items: GuidePriority[];
  /** Copy shown above the first item, e.g. "Work through these in order." */
  className?: string;
  /** Compact mode is used for three-step sequences inside cards. */
  compact?: boolean;
};

/**
 * Ordered priorities with the reason each one matters.
 *
 * Rendered as a real <ol> so the order is announced to screen readers and
 * printed styles keep the numbers.
 */
export function PriorityList({ items, className, compact = false }: PriorityListProps) {
  return (
    <ol className={cn('space-y-3', className)}>
      {items.map((item, index) => (
        <li
          key={item.title}
          className={cn(
            'group flex gap-4 rounded-2xl border border-ink-100 bg-white shadow-soft',
            compact ? 'p-4' : 'p-5 sm:gap-5 sm:p-6',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'flex shrink-0 items-center justify-center rounded-xl bg-brand-50 font-display font-bold tabular-nums text-brand-700 ring-1 ring-brand-100',
              compact ? 'size-9 text-sm' : 'size-11 text-base',
            )}
          >
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="min-w-0">
            <h3
              className={cn(
                'font-display font-bold text-ink-950',
                compact ? 'text-[0.975rem]' : 'text-[1.0625rem]',
              )}
            >
              {item.title}
            </h3>
            <p
              className={cn(
                'mt-1 leading-relaxed text-ink-600',
                compact ? 'text-sm' : 'text-[0.95rem]',
              )}
            >
              {item.why}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
