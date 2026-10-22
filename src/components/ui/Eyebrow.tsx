import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type EyebrowProps = {
  children: ReactNode;
  className?: string;
  /** Use the light-on-dark treatment. */
  tone?: 'light' | 'dark';
  icon?: ReactNode;
};

export function Eyebrow({ children, className, tone = 'light', icon }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em]',
        tone === 'light'
          ? 'bg-brand-50 text-brand-700 ring-1 ring-brand-100'
          : 'bg-white/10 text-brand-100 ring-1 ring-white/15',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
