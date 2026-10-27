import { cn } from '../../lib/utils';
import type { IndustryImage as IndustryImageData } from '../../data/industries/images';

export type IndustryImageProps = {
  image: IndustryImageData;
  /** Responsive `sizes` hint — always set this so mobile downloads the 700w file. */
  sizes?: string;
  /** Hero images should be eager; everything below the fold stays lazy. */
  priority?: boolean;
  /** Wrapper classes (aspect ratio, rounding, background). */
  className?: string;
  /** Classes applied directly to the <img>. */
  imgClassName?: string;
  /** Lighter treatment for decorative images inside cards. */
  decorative?: boolean;
};

/**
 * One photograph from the central industry image registry.
 *
 * - Always renders width/height so the browser reserves space (no CLS).
 * - Serves a 700w + 1400w WebP pair with a real `sizes` value.
 * - Lazily loads below-the-fold images and decodes async.
 * - Decorative images get an empty alt and `aria-hidden`.
 */
export function IndustryImage({
  image,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  priority = false,
  className,
  imgClassName,
  decorative = false,
}: IndustryImageProps) {
  return (
    <span
      className={cn(
        'relative block overflow-hidden bg-ink-100',
        className,
      )}
    >
      <img
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={decorative ? '' : image.alt}
        aria-hidden={decorative ? 'true' : undefined}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn(
          'size-full object-cover',
          imgClassName,
        )}
      />
    </span>
  );
}
