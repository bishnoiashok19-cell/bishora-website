import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

export type ChecklistProps = {
  items: string[];
  /** Two columns from `sm` upward unless disabled. */
  columns?: 1 | 2;
  className?: string;
};

/** Compact tick list used for expectations, essentials and self-audits. */
export function Checklist({ items, columns = 2, className }: ChecklistProps) {
  return (
    <ul
      className={cn(
        'grid gap-x-8 gap-y-3.5',
        columns === 2 ? 'sm:grid-cols-2' : undefined,
        className,
      )}
    >
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-100"
          >
            <Check className="size-3" strokeWidth={3} />
          </span>
          <span className="text-[0.95rem] leading-relaxed text-ink-700">{item}</span>
        </li>
      ))}
    </ul>
  );
}
