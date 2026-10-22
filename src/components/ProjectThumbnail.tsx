import { Globe, MapPin, Search, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../lib/utils';

export type ProjectThumbnailProps = {
  variant: 'website' | 'seo' | 'local' | 'ads';
  className?: string;
};

/**
 * Abstract, illustrative thumbnails for the portfolio placeholders.
 *
 * These are deliberately generic shapes — not screenshots of real client
 * websites or dashboards — so nothing on the page can be mistaken for a
 * genuine client result.
 */
export function ProjectThumbnail({
  variant,
  className,
}: ProjectThumbnailProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative h-44 overflow-hidden rounded-t-2xl bg-ink-950',
        className,
      )}
    >
      <div className="absolute inset-0 bg-dot-grid opacity-50" />

      {variant === 'website' ? (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="w-full max-w-[15rem] rounded-lg border border-white/15 bg-white/[0.06] p-2">
            <div className="flex gap-1 pb-2">
              <span className="size-1.5 rounded-full bg-white/25" />
              <span className="size-1.5 rounded-full bg-white/25" />
              <span className="size-1.5 rounded-full bg-white/25" />
            </div>
            <div className="rounded-md bg-white/[0.07] p-2.5">
              <div className="h-2 w-2/3 rounded-full bg-white/30" />
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/15" />
              <div className="mt-1.5 h-1.5 w-4/5 rounded-full bg-white/15" />
              <div className="mt-3 h-4 w-14 rounded-full bg-brand-500/50" />
            </div>
          </div>
        </div>
      ) : null}

      {variant === 'seo' ? (
        <div className="absolute inset-0 flex items-end justify-center p-6">
          <svg viewBox="0 0 220 120" aria-hidden="true" focusable="false" className="h-full w-full">
            <defs>
              <linearGradient id="thumb-seo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3e6cf6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#3e6cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M10 104 C 45 100, 60 86, 88 80 S 130 62, 152 48 S 190 24, 212 14 L212 120 L10 120 Z"
              fill="url(#thumb-seo)"
            />
            <path
              d="M10 104 C 45 100, 60 86, 88 80 S 130 62, 152 48 S 190 24, 212 14"
              fill="none"
              stroke="#6691ff"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      ) : null}

      {variant === 'local' ? (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative size-24">
            <span className="absolute inset-0 rounded-full border border-brand-400/25" />
            <span className="absolute inset-4 rounded-full border border-brand-400/40" />
            <span className="absolute inset-8 rounded-full border border-brand-400/60" />
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent-500 text-ink-950 shadow-lift">
                <MapPin className="size-4" />
              </span>
            </span>
          </div>
        </div>
      ) : null}

      {variant === 'ads' ? (
        <div className="absolute inset-0 flex items-end justify-center gap-3 p-6">
          {[38, 62, 48, 84, 70].map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className="w-7 rounded-t-md bg-gradient-to-t from-brand-700/60 to-brand-400/80"
            />
          ))}
        </div>
      ) : null}

      <span className="absolute right-3 top-3 rounded-full bg-white/10 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/70 backdrop-blur">
        Illustrative
      </span>
    </div>
  );
}

export const thumbnailIcon: Record<ProjectThumbnailProps['variant'], LucideIcon> = {
  website: Globe,
  seo: Search,
  local: MapPin,
  ads: Target,
};
