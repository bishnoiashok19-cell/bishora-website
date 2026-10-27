import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

export type RelatedLinkItem = {
  name: string;
  to: string;
  description: string;
  /** Optional small line such as "4 groups · 21 business types". */
  meta?: string;
};

export type RelatedLinksProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: RelatedLinkItem[];
  columns?: 2 | 3;
  className?: string;
};

/** Related categories, groups or business types — one card per destination. */
export function RelatedLinks({
  id,
  eyebrow,
  title,
  description,
  items,
  columns = 3,
  className,
}: RelatedLinksProps) {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      <Reveal>
        <SectionHeading
          id={id}
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Reveal>

      <ul
        className={cn(
          'mt-8 grid gap-3',
          columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
        )}
      >
        {items.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="group flex h-full flex-col rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            >
              <span className="flex items-start justify-between gap-3">
                <span className="font-display text-[1.0125rem] leading-snug font-bold text-ink-950">
                  {item.name}
                </span>
                <ArrowRight
                  className="mt-1 size-4 shrink-0 text-ink-300 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-brand-600"
                  aria-hidden="true"
                />
              </span>

              <span className="mt-1.5 line-clamp-3 text-[0.875rem] leading-relaxed text-ink-600">
                {item.description}
              </span>

              {item.meta ? (
                <span className="mt-auto pt-3 text-xs font-medium text-ink-500">
                  {item.meta}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
