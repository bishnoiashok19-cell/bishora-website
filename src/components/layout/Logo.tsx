import { cn } from '../../lib/utils';

export type LogoProps = {
  /** Use light text/brand colours for dark backgrounds. */
  tone?: 'light' | 'dark';
  className?: string;
  /** Render only the mark, without the wordmark. */
  markOnly?: boolean;
};

/**
 * Bishora logo.
 *
 * The mark is an ascending trend line with a highlighted end point — a simple
 * visual for "grow online". The wordmark is set in the display typeface so it
 * stays crisp at every size.
 */
export function Logo({ tone = 'dark', className, markOnly = false }: LogoProps) {
  const isDark = tone === 'light';

  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 40 40"
        aria-hidden="true"
        focusable="false"
        className="size-9 shrink-0"
      >
        <defs>
          <linearGradient id="bishora-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={isDark ? '#6691ff' : '#244bdc'} />
            <stop offset="100%" stopColor={isDark ? '#1c3bb4' : '#1c3073'} />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11.5" fill="url(#bishora-mark)" />
        <path
          d="M10.5 27.2 L17 19.4 L21.6 23.6 L29.6 12.8"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="29.6" cy="12.8" r="2.9" fill="#eeb95f" />
      </svg>

      {!markOnly ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[1.375rem] font-extrabold tracking-[-0.03em]',
              isDark ? 'text-white' : 'text-ink-950',
            )}
          >
            Bishora
          </span>
          <span
            className={cn(
              'mt-1 text-[0.625rem] font-semibold uppercase tracking-[0.2em]',
              isDark ? 'text-brand-200/80' : 'text-ink-500',
            )}
          >
            Digital Marketing
          </span>
        </span>
      ) : null}
    </span>
  );
}
