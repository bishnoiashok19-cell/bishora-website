import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { subcategoryPath } from '../../data/industries';
import type { IndustrySubcategory } from '../../data/industries/types';
import { IndustryImage } from './IndustryImage';

export type SubcategoryCardProps = {
  industrySlug: string;
  subcategory: IndustrySubcategory;
  onNavigate?: () => void;
};

/** Sub-category card on a main category page. The whole card is clickable. */
export function SubcategoryCard({
  industrySlug,
  subcategory,
  onNavigate,
}: SubcategoryCardProps) {
  const preview = subcategory.businessTypes.slice(0, 4);
  const remaining = subcategory.businessTypes.length - preview.length;

  return (
    <Link
      to={subcategoryPath(industrySlug, subcategory.slug)}
      onClick={onNavigate}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <IndustryImage
        image={subcategory.images[0]}
        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
        className="aspect-[16/9]"
        imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
            {subcategory.name}
          </h3>
          <ArrowUpRight
            className="mt-1 size-5 shrink-0 text-ink-300 transition-[color,transform] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
            aria-hidden="true"
          />
        </div>

        <p className="mt-2.5 line-clamp-3 text-[0.925rem] leading-relaxed text-ink-600">
          {subcategory.guide.tagline}
        </p>

        <p className="mt-4 text-xs font-medium text-ink-500">
          {subcategory.businessTypes.length} business types
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {preview.map((type) => (
            <span
              key={type.slug}
              className="rounded-full border border-ink-100 bg-ink-50 px-2.5 py-1 text-xs text-ink-600"
            >
              {type.name}
            </span>
          ))}
          {remaining > 0 ? (
            <span className="rounded-full border border-brand-100 bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700">
              +{remaining} more
            </span>
          ) : null}
        </div>

        <span className="mt-auto pt-4 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
          View business group
        </span>
      </div>
    </Link>
  );
}
