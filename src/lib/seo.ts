import { useEffect } from 'react';
import { siteConfig } from '../config/site';

export type SeoJsonLd = Record<string, unknown> | Array<Record<string, unknown>>;

export type SeoOptions = {
  /** Page title. The brand suffix is added automatically when missing. */
  title: string;
  /** Meta description for the page. */
  description: string;
  /** Route path, e.g. '/services'. Used for canonical + og:url. */
  path?: string;
  /** Optional keyword list. */
  keywords?: string[];
  /** Open Graph type. */
  type?: 'website' | 'article';
  /** Social share image. Defaults to the site-wide Open Graph image. */
  image?: string;
  /** Alt text for the social share image. */
  imageAlt?: string;
  /** Set to true to ask search engines not to index the page. */
  noindex?: boolean;
  /** Optional JSON-LD structured data injected for this page. */
  jsonLd?: SeoJsonLd;
};

const DEFAULT_OG_IMAGE = '/og-image.svg';
const JSON_LD_ID = 'bishora-page-jsonld';

function upsertMeta(selectorAttr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${selectorAttr}="${key}"]`,
  );

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(selectorAttr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  let tag = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }

  tag.setAttribute('href', href);
}

function absoluteUrl(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Applies page-level SEO metadata to the document head.
 *
 * This is a fully static, client-side implementation — no server rendering and
 * no extra dependencies. The baseline tags are also present in `index.html`
 * so crawlers and link previews always have valid metadata before hydration.
 */
export function useSeo({
  title,
  description,
  path = '/',
  keywords,
  type = 'website',
  image = DEFAULT_OG_IMAGE,
  imageAlt = 'Bishora — digital marketing for local businesses',
  noindex = false,
  jsonLd,
}: SeoOptions): void {
  // `keywords` and `jsonLd` are usually inline literals, so their references
  // change on every render. Serialising them keeps the effect stable and stops
  // the head being rewritten (and the JSON-LD script being torn down and
  // rebuilt) on each re-render.
  const keywordsKey = keywords?.length ? keywords.join('|') : '';
  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const fullTitle = title.toLowerCase().includes('bishora')
      ? title
      : `${title} | ${siteConfig.name}`;
    const url = absoluteUrl(path);
    const imageUrl = absoluteUrl(image);

    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:site_name', siteConfig.name);
    upsertMeta('property', 'og:locale', siteConfig.locale);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', imageAlt);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertMeta('name', 'twitter:image:alt', imageAlt);
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, nofollow' : 'index, follow',
    );

    if (keywordsKey) {
      upsertMeta('name', 'keywords', keywordsKey.split('|').join(', '));
    }

    upsertLink('canonical', url);

    // JSON-LD for the current page.
    const existing = document.getElementById(JSON_LD_ID);
    if (existing) existing.remove();

    if (jsonLdKey) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = JSON_LD_ID;
      script.textContent = jsonLdKey;
      document.head.appendChild(script);
    }
  }, [
    title,
    description,
    path,
    keywordsKey,
    type,
    image,
    imageAlt,
    noindex,
    jsonLdKey,
  ]);
}

/** Builds a `BreadcrumbList` JSON-LD block for a page. */
export function buildBreadcrumbJsonLd(
  items: Array<{ name: string; path: string }>,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
