import { slugify } from './types';
import type {
  BusinessType,
  BusinessTypeContentSeed,
  BusinessTypeGuide,
  CategoryGuide,
  Industry,
  IndustrySeed,
  IndustrySubcategory,
  SubcategoryGuide,
} from './types';
import { businessTypeContent } from './content';
import { categoryGuides } from './guides/categories';
import { groupGuides } from './guides/groups';
import { businessTypeGuides } from './guides/types';
import { imagesForScene } from './images';
import { services } from '../services';
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

const serviceSlugs = new Set(services.map((service) => service.slug));

/** Fails the build if a guide recommends a service that does not exist. */
function validateServices(where: string, slugs: string[]): void {
  if (slugs.length < 2 || slugs.length > 4) {
    throw new Error(`${where}: expected 2-4 services, received ${slugs.length}`);
  }

  for (const slug of slugs) {
    if (!serviceSlugs.has(slug)) {
      throw new Error(`${where}: unknown service slug "${slug}"`);
    }
  }

  if (new Set(slugs).size !== slugs.length) {
    throw new Error(`${where}: duplicate service slugs`);
  }
}

const categoryGuideBySlug = new Map(
  categoryGuides.map((guide) => [slugify(guide.name), guide]),
);

if (categoryGuides.length !== seeds.length) {
  throw new Error(
    `Category guide mismatch: ${categoryGuides.length} guides for ${seeds.length} categories.`,
  );
}

const groupGuideByKey = new Map<string, (typeof groupGuides)[number]>();
for (const guide of groupGuides) {
  const key = `${guide.category}/${slugify(guide.name)}`;
  if (groupGuideByKey.has(key)) throw new Error(`Duplicate group guide: ${key}`);
  groupGuideByKey.set(key, guide);
}

const typeGuideByKey = new Map<string, (typeof businessTypeGuides)[number]>();
for (const guide of businessTypeGuides) {
  const key = `${guide.category}/${guide.group}/${slugify(guide.name)}`;
  if (typeGuideByKey.has(key)) throw new Error(`Duplicate business-type guide: ${key}`);
  typeGuideByKey.set(key, guide);
}

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
  const categoryGuide = categoryGuideBySlug.get(industrySlug);

  if (!categoryGuide) {
    throw new Error(`Missing category guide: ${industrySlug}`);
  }

  if (categoryGuide.intro.length < 2) {
    throw new Error(`${industrySlug}: category guide needs two intro paragraphs`);
  }

  validateServices(`${industrySlug}: category`, categoryGuide.services);

  return {
    ...seed,
    slug: industrySlug,
    guide: categoryGuide as CategoryGuide,
    images: imagesForScene(categoryGuide.scene, 4, industrySlug),
    subcategories: seed.subcategories.map((subcategory) => {
      const subcategorySlug = slugify(subcategory.name);
      const groupKey = `${industrySlug}/${subcategorySlug}`;
      const groupGuide = groupGuideByKey.get(groupKey);

      if (!groupGuide) {
        throw new Error(`Missing group guide: ${groupKey}`);
      }

      validateServices(`${groupKey}: group`, groupGuide.services);

      return {
        ...subcategory,
        slug: subcategorySlug,
        guide: groupGuide as SubcategoryGuide,
        images: imagesForScene(groupGuide.scene, 3, groupKey),
        businessTypes: subcategory.businessTypes.map(
          (name): BusinessType => {
            const slug = slugify(name);
            const key = `${groupKey}/${slug}`;
            const content = contentByKey.get(key);
            const typeGuide = typeGuideByKey.get(key);

            if (!content) {
              throw new Error(`Missing business-type content: ${key}`);
            }

            if (!typeGuide) {
              throw new Error(`Missing business-type guide: ${key}`);
            }

            validateServices(`${key}: type`, typeGuide.services);
            const { category, group, name: guideName, ...guide } = typeGuide;

            if (guideName !== name) {
              throw new Error(
                `Business-type guide name mismatch: ${key} vs "${guideName}"`,
              );
            }

            if (guide.priorities.length !== 4) {
              throw new Error(`${key}: expected 4 ordered priorities`);
            }

            if (guide.does.length < 4 || guide.does.length > 6) {
              throw new Error(`${key}: expected 4-6 activities`);
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
              guide: guide as BusinessTypeGuide,
              images: imagesForScene(guide.scene, 4, key),
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

if (typeGuideByKey.size !== declaredBusinessTypes) {
  throw new Error(
    `Business-type guide mismatch: ${typeGuideByKey.size} entries for ${declaredBusinessTypes} business types.`,
  );
}

const declaredGroups = industries.reduce(
  (total, industry) => total + industry.subcategories.length,
  0,
);

if (groupGuideByKey.size !== declaredGroups) {
  throw new Error(
    `Group guide mismatch: ${groupGuideByKey.size} entries for ${declaredGroups} groups.`,
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
