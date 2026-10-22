import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type CardProps = {
  children: ReactNode;
  className?: string;
  /** Adds a subtle lift + shadow on hover. */
  interactive?: boolean;
  /** Removes the default padding so the card can hold its own layout. */
  flush?: boolean;
};

export function Card({
  children,
  className,
  interactive = false,
  flush = false,
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-ink-100 bg-white shadow-soft',
        !flush && 'p-6 sm:p-7',
        interactive &&
          'transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift',
        className,
      )}
    >
      {children}
    </div>
  );
}
