import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type ContainerSize = 'narrow' | 'default' | 'wide';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: ContainerSize;
};

const widthClasses: Record<ContainerSize, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-[90rem]',
};

/** Consistent horizontal rhythm and responsive gutters for every section. */
export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-7 lg:px-10',
        widthClasses[size],
        className,
      )}
    >
      {children}
    </div>
  );
}
