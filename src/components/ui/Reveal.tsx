import { useEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type RevealProps = {
  children: ReactNode;
  /** Delay in milliseconds before the element animates in. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Scroll-triggered fade-up animation.
 *
 * Robustness rules:
 *  - Content that is already in the viewport when it mounts is revealed
 *    immediately, so nothing depends on an observer callback to be readable.
 *  - Content below the fold waits for the intersection observer.
 *  - A safety timer guarantees the element is never left permanently hidden.
 *  - If JavaScript never runs, the `<noscript>` rule in index.html keeps all
 *    content visible, and reduced-motion preferences disable the effect.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let cancelled = false;
    const show = () => {
      if (!cancelled) setShown(true);
    };

    if (typeof IntersectionObserver === 'undefined') {
      show();
      return;
    }

    // Already on screen at mount → reveal without waiting for the observer.
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      show();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            observer.disconnect();
          }
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' },
    );

    observer.observe(element);

    // Safety net: never leave content hidden if the observer misbehaves.
    const timer = window.setTimeout(() => {
      const current = element.getBoundingClientRect();
      if (current.top < window.innerHeight && current.bottom > 0) {
        show();
        observer.disconnect();
      }
    }, 2500);

    return () => {
      cancelled = true;
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn('reveal', shown && 'reveal-in', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
