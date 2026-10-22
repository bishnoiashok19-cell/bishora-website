import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  /** Dark sections invert the text colours. */
  theme?: 'light' | 'dark';
  /** Heading level — keep the page hierarchy correct (h1 once, h2 per section). */
  as?: ElementType;
  /** Optional id for the heading element (used by aria-labelledby). */
  id?: string;
  className?: string;
  /** Extra content rendered under the description, e.g. buttons. */
  children?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  theme = 'light',
  as: Heading = 'h2',
  id,
  className,
  children,
}: SectionHeadingProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-4 text-xs font-semibold uppercase tracking-[0.18em]',
            isDark ? 'text-brand-300' : 'text-brand-700',
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <Heading
        id={id}
        className={cn(
          'text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.85rem]',
          isDark && 'text-white',
        )}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={cn(
            'mt-5 text-base leading-relaxed sm:text-[1.0625rem]',
            isDark ? 'text-ink-200' : 'text-ink-600',
          )}
        >
          {description}
        </p>
      ) : null}

      {children ? <div className="mt-7">{children}</div> : null}
    </div>
  );
}
