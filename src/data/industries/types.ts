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

import type { ImageSceneId, IndustryImage } from './images';

/** A numbered priority with the practical reason behind it. */
export type GuidePriority = {
  title: string;
  why: string;
};

/** The customer-first, Hinglish guide attached to one business type page. */
export type BusinessTypeGuide = {
  /** Curated photo family for this exact kind of business. */
  scene: ImageSceneId;
  /** Short hero + card summary in natural Hinglish. */
  tagline: string;
  /** Four to six real activities this business handles. */
  does: string[];
  /** How customers actually discover this business online. */
  find: string[];
  /** What must stay accurate and useful online. */
  must: string[];
  /** What the business website should give a customer. */
  site: string[];
  /** Mistakes that cost enquiries for this business. */
  mistakes: string[];
  /** Ordered priorities, with the reason each one matters. */
  priorities: GuidePriority[];
  /** A simple self-audit the owner can run without help. */
  check: string[];
  /** Existing Bishora service slugs that genuinely fit. */
  services: string[];
};

export type BusinessTypeGuideSeed = BusinessTypeGuide & {
  /** Category slug, kept explicit so identical names in other categories stay unique. */
  category: string;
  /** Group slug. */
  group: string;
  name: string;
};

export type BusinessType = {
  /** Display name, exactly as supplied in the directory. */
  name: string;
  slug: string;
  /** Unique one-sentence summary used on cards and as the meta description. */
  description: string;
  /** Unique paragraph explaining who the business serves and why online matters. */
  focus: string;
  /** A practical first step for this business type. */
  start: string;
  /** Specific activities this business type usually handles. */
  does: string[];
  /** Specific online priorities for this business type. */
  online: string[];
  /** Existing Bishora service slugs relevant to this exact business type. */
  serviceSlugs: string[];
  /** Hinglish customer-first guide used by the page template. */
  guide: BusinessTypeGuide;
  /** Three or four curated photographs, hero first. */
  images: IndustryImage[];
};

/** Per-business-type editorial content, stored outside the category files. */
export type BusinessTypeContentSeed = {
  name: string;
  description: string;
  focus: string;
  start: string;
  does: string[];
  online: string[];
  services: string[];
};

/** Content is grouped by the category and group it belongs to. */
export type BusinessTypeContentGroup = {
  /** Category slug, e.g. 'food-hospitality'. */
  category: string;
  /** Group slug, e.g. 'restaurants-dining'. */
  subcategory: string;
  types: BusinessTypeContentSeed[];
};

export type SubcategoryGuide = {
  scene: ImageSceneId;
  tagline: string;
  /** Two short paragraphs explaining the group in practical language. */
  intro: string[];
  /** What these businesses actually do. */
  does: string[];
  /** What customers expect before they enquire. */
  expect: string[];
  priorities: GuidePriority[];
  mistakes: string[];
  check: string[];
  services: string[];
};

export type SubcategoryGuideSeed = SubcategoryGuide & {
  category: string;
  name: string;
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
  guide: SubcategoryGuide;
  images: IndustryImage[];
};

export type CategoryGuide = {
  scene: ImageSceneId;
  tagline: string;
  /** Two short overview paragraphs. */
  intro: string[];
  /** Checks that help an owner confirm they belong in this category. */
  whoFor: string[];
  /** What customers in this category generally want. */
  expect: string[];
  /** The typical online customer journey, in order. */
  journey: GuidePriority[];
  priorities: GuidePriority[];
  mistakes: string[];
  check: string[];
  services: string[];
  /** Genuinely related category slugs. */
  related: string[];
};

export type CategoryGuideSeed = CategoryGuide & {
  name: string;
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
  guide: CategoryGuide;
  images: IndustryImage[];
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
