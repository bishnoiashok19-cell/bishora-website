/**
 * ============================================================================
 * BISHORA — INDUSTRY DIRECTORY DATA MODEL
 * ============================================================================
 * A single, central source of truth for the "Choose Your Business" system.
 *
 * Data files use `IndustrySeed` (plain strings, no slugs) so the slugs are
 * generated in one place from the exact approved names. That keeps URLs
 * consistent and makes future category additions a data-only change.
 * ============================================================================
 */

/** Turns an approved display name into a stable, lowercase URL slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/['\u2019]/g, '')
    .replace(/&/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export type BusinessType = {
  /** Display name, exactly as supplied in the directory. */
  name: string;
  /** Reserved for the third URL level. */
  slug: string;
};

export type IndustrySubcategory = {
  name: string;
  slug: string;
  /** Unique one-sentence summary used on cards and in the page header. */
  description: string;
  /** The practical digital priority for this group of businesses. */
  digitalFocus: string;
  /** Existing Bishora service slugs that usually matter for this group. */
  serviceSlugs: string[];
  businessTypes: BusinessType[];
};

export type Industry = {
  number: number;
  name: string;
  slug: string;
  /** Short description used on directory cards. */
  description: string;
  /** Longer introduction used in the category hero. */
  intro: string;
  /** Two unique paragraphs explaining what the category covers. */
  overview: string[];
  /** Practical digital considerations for this category. */
  considerations: string[];
  /** Existing Bishora service slugs that usually matter for this category. */
  serviceSlugs: string[];
  /** Slugs of genuinely related categories. */
  relatedSlugs: string[];
  subcategories: IndustrySubcategory[];
};

/** The shape each data file exports. Slugs are derived in `index.ts`. */
export type IndustrySeed = {
  number: number;
  name: string;
  description: string;
  intro: string;
  overview: string[];
  considerations: string[];
  serviceSlugs: string[];
  relatedSlugs: string[];
  subcategories: Array<{
    name: string;
    description: string;
    digitalFocus: string;
    serviceSlugs: string[];
    businessTypes: string[];
  }>;
};
