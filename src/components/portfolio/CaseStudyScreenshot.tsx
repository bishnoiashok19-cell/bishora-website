import { Lock } from 'lucide-react';
import { cn } from '../../lib/utils';
import type { CaseStudyVisual } from '../../data/caseStudies';

export type CaseStudyScreenshotProps = {
  visual: CaseStudyVisual;
  /** Hero screenshots load eagerly; everything else stays lazy. */
  priority?: boolean;
  /** Hide the caption when the surrounding section already explains the shot. */
  showCaption?: boolean;
  className?: string;
  /** Aspect ratio of the screen area. Compact ratios crop instead of stretching. */
  aspectClassName?: string;
  /** Object position used when a compact ratio crops the screenshot. */
  imagePositionClassName?: string;
};

/**
 * A browser-framed case-study visual.
 *
 * Renders the real product screenshot supplied by `visual.image` at its
 * intrinsic aspect ratio, so replacing a screen never changes the layout.
 */
export function CaseStudyScreenshot({
  visual,
  priority = false,
  showCaption = true,
  className,
  aspectClassName = 'aspect-[16/10]',
  imagePositionClassName = 'object-center',
}: CaseStudyScreenshotProps) {
  return (
    <figure className={cn('m-0', className)}>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-ink-900 shadow-lift">
        {/* Browser chrome (decorative — the caption below describes the screen) */}
        <div
          aria-hidden="true"
          className="flex items-center gap-2.5 border-b border-white/10 bg-ink-950 px-3 py-2.5 sm:px-4"
        >
          <span aria-hidden="true" className="flex shrink-0 items-center gap-1.5">
            <span className="size-2 rounded-full bg-white/20" />
            <span className="size-2 rounded-full bg-white/15" />
            <span className="size-2 rounded-full bg-white/10" />
          </span>

          <span className="inline-flex min-w-0 flex-1 items-center gap-1.5 overflow-hidden rounded-md bg-white/[0.06] px-2 py-1 text-[0.68rem] font-medium text-ink-300">
            <Lock className="size-2.5 shrink-0 text-ink-500" aria-hidden="true" />
            <span className="min-w-0 truncate">dalchand{visual.path}</span>
          </span>

          <span className="hidden shrink-0 items-center gap-1 sm:flex" aria-hidden="true">
            <span className="h-1 w-4 rounded-full bg-white/12" />
            <span className="h-1 w-4 rounded-full bg-white/12" />
          </span>
        </div>

        {/* Screen */}
        <div className={cn('relative overflow-hidden bg-ink-950', aspectClassName)}>
          <img
            src={visual.image.src}
            srcSet={visual.image.srcSet}
            sizes="(min-width: 1024px) 60vw, 100vw"
            width={visual.image.width}
            height={visual.image.height}
            alt={visual.image.alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            className={cn('size-full object-cover', imagePositionClassName)}
          />
        </div>
      </div>

      {showCaption && visual.caption ? (
        <figcaption className="mt-3 text-[0.8rem] leading-relaxed text-ink-500">
          {visual.caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
