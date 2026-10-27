import { cn } from '../../lib/utils';
import type { IndustryImage as IndustryImageData } from '../../data/industries/images';
import { IndustryImage } from './IndustryImage';

export type IndustryFigureProps = {
  image: IndustryImageData;
  /** Visible caption. Keep it factual — it also doubles as context for readers. */
  caption?: string;
  /** Small overlay label, e.g. "On the floor" or "Customer view". */
  label?: string;
  aspect?: 'video' | 'square' | 'portrait' | 'wide';
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Decorative figures drop the alt text and hide the caption from AT. */
  decorative?: boolean;
};

const aspectClasses = {
  wide: 'aspect-[16/9]',
  video: 'aspect-[4/3]',
  square: 'aspect-square',
  portrait: 'aspect-[4/5]',
} as const;

/**
 * A photograph with an optional label and caption.
 *
 * Used for the in-body image sections so every picture carries context rather
 * than sitting on the page as decoration.
 */
export function IndustryFigure({
  image,
  caption,
  label,
  aspect = 'video',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  className,
  priority = false,
  decorative = false,
}: IndustryFigureProps) {
  return (
    <figure className={cn('m-0', className)}>
      <div className="relative">
        <IndustryImage
          image={image}
          sizes={sizes}
          priority={priority}
          decorative={decorative}
          className={cn(aspectClasses[aspect], 'rounded-2xl ring-1 ring-ink-100')}
        />

        {label ? (
          <span className="absolute top-3 left-3 rounded-full bg-ink-950/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.12em] text-white uppercase backdrop-blur">
            {label}
          </span>
        ) : null}
      </div>

      {caption ? (
        <figcaption className="mt-3 text-[0.8rem] leading-relaxed text-ink-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
