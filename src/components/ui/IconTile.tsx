import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type IconTileProps = {
  children: ReactNode;
  className?: string;
  tone?: 'brand' | 'accent' | 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
};

const toneClasses = {
  brand: 'bg-brand-50 text-brand-700 ring-brand-100',
  accent: 'bg-accent-100 text-accent-700 ring-accent-200',
  dark: 'bg-white/10 text-white ring-white/15',
  light: 'bg-white text-ink-900 ring-ink-100 shadow-soft',
};

const sizeClasses = {
  sm: 'size-10 rounded-xl [&_svg]:size-5',
  md: 'size-12 rounded-xl [&_svg]:size-6',
  lg: 'size-14 rounded-2xl [&_svg]:size-7',
};

/** Rounded icon container used for services, benefits and feature lists. */
export function IconTile({
  children,
  className,
  tone = 'brand',
  size = 'md',
}: IconTileProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex shrink-0 items-center justify-center ring-1',
        toneClasses[tone],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </span>
  );
}
