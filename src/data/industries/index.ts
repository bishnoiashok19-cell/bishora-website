import { slugify } from './types';
import type { Industry, IndustrySeed, IndustrySubcategory } from './types';
import { industriesPartA } from './part-a';
import { industriesPartB } from './part-b';
import { industriesPartC } from './part-c';
import { industriesPartD } from './part-d';
import { industriesPartE } from './part-e';

/**
 * The complete, approved directory, in source order.
 *
 * Every name here is taken directly from the approved master directory. Slugs
 * and the nested business-type records are derived once, so a future addition
 * only needs the display name.
 */
const seeds: IndustrySeed[] = [
  ...industriesPartA,
  ...industriesPartB,
  ...industriesPartC,
  ...industriesPartD,
  ...industriesPartE,
];

export const industries: Industry[] = seeds.map((seed) => ({
  ...seed,
  slug: slugify(seed.name),
  subcategories: seed.subcategories.map(
    (subcategory): IndustrySubcategory => ({
      ...subcategory,
      slug: slugify(subcategory.name),
      businessTypes: subcategory.businessTypes.map((name) => ({
        name,
        slug: slugify(name),
      })),
    }),
  ),
}));

/** Canonical route helpers — used by pages, cards and the sitemap. */
export const industriesPath = '/industries';
export const industryPath = (slug: string): string => `/industries/${slug}`;
export const subcategoryPath = (
  industrySlug: string,
  subcategorySlug: string,
): string => `/industries/${industrySlug}/${subcategorySlug}`;
export const businessTypePath = (
  industrySlug: string,
  subcategorySlug: string,
  businessTypeSlug: string,
): string =>
  `/industries/${industrySlug}/${subcategorySlug}/${businessTypeSlug}`;

export const industryBySlug = (slug: string): Industry | undefined =>
  industries.find((industry) => industry.slug === slug);

export const subcategoryCount = (industry: Industry): number =>
  industry.subcategories.length;

export const businessTypeCount = (industry: Industry): number =>
  industry.subcategories.reduce(
    (total, subcategory) => total + subcategory.businessTypes.length,
    0,
  );

export const totalBusinessTypes = industries.reduce(
  (total, industry) => total + businessTypeCount(industry),
  0,
);

export const totalSubcategories = industries.reduce(
  (total, industry) => total + subcategoryCount(industry),
  0,
);

/** The eight categories featured on the homepage. */
export const featuredIndustries: Industry[] = [
  'food-hospitality',
  'healthcare',
  'professional-services',
  'home-local-services',
  'retail',
  'real-estate-construction',
  'beauty-lifestyle',
  'e-commerce-online-business',
]
  .map((slug) => industryBySlug(slug))
  .filter((industry): industry is Industry => Boolean(industry));
