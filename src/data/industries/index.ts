import { slugify } from './types';
import type {
  BusinessType,
  BusinessTypeContentSeed,
  Industry,
  IndustrySeed,
  IndustrySubcategory,
} from './types';
import { businessTypeContent } from './content';
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
 * only needs the display name plus its editorial entry.
 */
const seeds: IndustrySeed[] = [
  ...industriesPartA,
  ...industriesPartB,
  ...industriesPartC,
  ...industriesPartD,
  ...industriesPartE,
];

/**
 * Business-type copy is authored separately and keyed by
 * `category/group/type` slug. A missing entry is a build-time error rather
 * than a quietly thin page.
 */
const contentByKey = new Map<string, BusinessTypeContentSeed>();

for (const group of businessTypeContent) {
  for (const type of group.types) {
    const key = `${group.category}/${group.subcategory}/${slugify(type.name)}`;

    if (contentByKey.has(key)) {
      throw new Error(`Duplicate business-type content: ${key}`);
    }

    contentByKey.set(key, type);
  }
}

export const industries: Industry[] = seeds.map((seed) => {
  const industrySlug = slugify(seed.name);

  return {
    ...seed,
    slug: industrySlug,
    subcategories: seed.subcategories.map((subcategory) => {
      const subcategorySlug = slugify(subcategory.name);

      return {
        ...subcategory,
        slug: subcategorySlug,
        businessTypes: subcategory.businessTypes.map(
          (name): BusinessType => {
            const slug = slugify(name);
            const key = `${industrySlug}/${subcategorySlug}/${slug}`;
            const content = contentByKey.get(key);

            if (!content) {
              throw new Error(`Missing business-type content: ${key}`);
            }

            return {
              name,
              slug,
              description: content.description,
              focus: content.focus,
              start: content.start,
              does: content.does,
              online: content.online,
              serviceSlugs: content.services,
            };
          },
        ),
      } satisfies IndustrySubcategory;
    }),
  };
});

const declaredBusinessTypes = industries.reduce(
  (total, industry) =>
    total +
    industry.subcategories.reduce(
      (count, subcategory) => count + subcategory.businessTypes.length,
      0,
    ),
  0,
);

if (contentByKey.size !== declaredBusinessTypes) {
  throw new Error(
    `Business-type content mismatch: ${contentByKey.size} entries for ${declaredBusinessTypes} business types.`,
  );
}

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

export type BusinessTypeRecord = {
  industry: Industry;
  subcategory: IndustrySubcategory;
  businessType: BusinessType;
};

/** Resolves a full three-level route, or returns undefined for a 404. */
export const businessTypeRecord = (
  industrySlug: string,
  subcategorySlug: string,
  businessTypeSlug: string,
): BusinessTypeRecord | undefined => {
  const industry = industryBySlug(industrySlug);
  const subcategory = industry?.subcategories.find(
    (item) => item.slug === subcategorySlug,
  );
  const businessType = subcategory?.businessTypes.find(
    (item) => item.slug === businessTypeSlug,
  );

  if (!industry || !subcategory || !businessType) return undefined;

  return { industry, subcategory, businessType };
};

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
