import type { LucideIcon } from 'lucide-react';
import { services } from './services';
import type { Service, ServiceFeature } from './services';

/** A single sub-service derived from one feature of a main service. */
export type ServiceSubService = {
  /** URL segment, unique within its parent service. */
  slug: string;
  /** Full name used as the page H1 and card title. */
  name: string;
  /** Short description reused on cards. */
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Opening paragraph on the dedicated page. */
  intro: string;
  /** Plain answer to "what does this sub-service mean?". */
  whatItIs: string;
  /** Why this piece of work matters. */
  whyItMatters: string;
  /** Concrete outputs the client receives. */
  includes: string[];
  /** How the work is delivered, broken down into stages. */
  approach: Array<{ title: string; body: string; bullets: string[] }>;
  faqs: Array<{ question: string; answer: string }>;
  icon: LucideIcon;
};

/**
 * Explicit slug overrides where the public URL should differ from the
 * generated version of the feature title.
 */
const slugOverrides: Record<string, string> = {
  'geo:Entity and brand clarity': 'entity-brand-clarity',
};

/** Turns a feature title into a stable, readable URL slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, '')
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Canonical in-site path for a main service. */
export const servicePath = (slug: string): string => `/services/${slug}`;

/** Canonical in-site path for a sub-service. */
export const subServicePath = (serviceSlug: string, subSlug: string): string =>
  `/services/${serviceSlug}/${subSlug}`;

/** Looks up a main service by its URL slug. */
export const getServiceBySlug = (slug: string): Service | undefined =>
  services.find((service) => service.slug === slug);

/** Looks up a sub-service within a specific parent service. */
export const getSubService = (
  service: Service,
  subSlug: string,
): ServiceSubService | undefined =>
  getServiceSubServices(service).find((subService) => subService.slug === subSlug);

/** Every main service except SEO, which keeps its existing bespoke page. */
export const genericServices = services.filter((service) => service.slug !== 'seo');

/** Main service index used for the "Service 01" style eyebrow. */
export const serviceIndex = (slug: string): number =>
  services.findIndex((service) => service.slug === slug) + 1;

/** Formats a list as "a, b and c". */
function formatList(items: string[]): string {
  if (items.length === 0) return '';
  if (items.length === 1) return items[0];
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

function buildSubService(service: Service, feature: ServiceFeature): ServiceSubService {
  const name = feature.title;
  const slug =
    slugOverrides[`${service.slug}:${name}`] ?? slugify(name);

  const includes = [
    `${name} review with clear findings`,
    `A prioritised action list for your ${service.name} work`,
    `Implementation support for the agreed changes`,
    `Before-and-after measurement of what changed`,
    `A short handover so the work can be maintained`,
  ];

  const approach = [
    {
      title: 'Review the current position',
      body: `We start by looking at how ${name} currently works for your business, what is already in place and where the gaps are.`,
      bullets: [
        `Current ${name} assessment`,
        'Comparison with the businesses you compete against',
        'Practical constraints and priorities agreed up front',
      ],
    },
    {
      title: 'Agree what to change',
      body: `Findings are turned into a short, prioritised plan so you know exactly what will change, in what order and why it matters to your ${service.name} results.`,
      bullets: [
        'Prioritised recommendations',
        'Clear scope and sequence',
        'No work started without your agreement',
      ],
    },
    {
      title: 'Put the work in place',
      body: `${feature.description} We implement the agreed changes directly, or provide developer-ready guidance where the work sits with your own team.`,
      bullets: [
        'Implementation or precise instructions',
        'Quality checks before anything goes live',
        'Clear notes on exactly what changed',
      ],
    },
    {
      title: 'Measure and refine',
      body:
        'Once the work is live we check what actually changed and adjust based on evidence rather than assumption.',
      bullets: [
        'Before-and-after comparison',
        'Plain-English reporting',
        'Next steps based on the results',
      ],
    },
  ];

  const faqs = [
    {
      question: `What does ${name} involve?`,
      answer: `${feature.description} As part of ${service.name}, we scope the work around your current setup and agree what will be reviewed and changed before anything starts.`,
    },
    {
      question: `Is ${name} relevant to our business?`,
      answer: `It is relevant when this part of ${service.name} is currently holding back your visibility or the number of enquiries you receive. During the first conversation we look at your situation and tell you honestly whether it is worth doing now, later or not at all.`,
    },
    {
      question: `How is ${name} measured?`,
      answer: `We agree a baseline before the work begins, then compare the same measures afterwards. Depending on the work, that can include visibility, traffic quality, calls, forms, messages or the number of pages doing their job properly.`,
    },
    {
      question: `Can ${name} be combined with the rest of our ${service.name} work?`,
      answer: `Yes. It is one part of the wider ${service.name} service, so it is planned alongside the other work rather than treated as a separate project with its own disconnected goals.`,
    },
  ];

  return {
    slug,
    name,
    description: feature.description,
    metaTitle: `${name} | ${service.name} Services | Bishora`,
    metaDescription: `${feature.description} Delivered as part of Bishora's ${service.name} service.`,
    keywords: [
      name.toLowerCase(),
      `${service.name.toLowerCase()} ${name.toLowerCase()}`,
      `${service.name.toLowerCase()} services`,
      'Bishora',
    ],
    intro: `${name} is a focused part of our ${service.name} service. ${feature.description} This page explains what the work involves, what you receive and how we measure whether it made a difference.`,
    whatItIs: `${name} is one of the building blocks of ${service.name}. ${feature.description} We treat it as a defined piece of work with a clear brief, rather than an open-ended task, so you can see what is being changed and what result it is meant to produce.`,
    whyItMatters: `When ${service.name} is treated as one coordinated strategy, ${name} is one of the pieces that makes the rest work. ${service.summary} Getting this element right removes a common source of wasted effort and gives the wider ${service.name} plan a firmer foundation.`,
    includes,
    approach,
    faqs,
    icon: service.icon,
  };
}

const subServiceCache = new Map<string, ServiceSubService[]>();

/** Returns the sub-services for a main service, derived from its features. */
export function getServiceSubServices(service: Service): ServiceSubService[] {
  const cached = subServiceCache.get(service.slug);
  if (cached) return cached;

  const built = service.features.map((feature) => buildSubService(service, feature));
  subServiceCache.set(service.slug, built);
  return built;
}

/** Related sub-services from the same parent service only. */
export function getRelatedSubServices(
  service: Service,
  currentSlug: string,
  limit = 3,
): ServiceSubService[] {
  return getServiceSubServices(service)
    .filter((subService) => subService.slug !== currentSlug)
    .slice(0, limit);
}

/** Main-service FAQs generated from the service data. */
export function buildServiceFaqs(service: Service): Array<{ question: string; answer: string }> {
  const subNames = service.features.map((feature) => feature.title);

  return [
    {
      question: `What does ${service.name} include?`,
      answer: `${service.summary} A typical engagement covers ${formatList(
        subNames.slice(0, 4),
      )} and the remaining sub-services where they are relevant to your business. The exact scope is agreed before any work starts.`,
    },
    {
      question: `Which ${service.name} sub-services should we start with?`,
      answer: `It depends on where you are today. The available sub-services are ${formatList(
        subNames,
      )}. We usually start with the area that is currently costing you the most enquiries, then expand once the foundation is in place.`,
    },
    {
      question: `How long does ${service.name} take to show results?`,
      answer: `Some changes can be made quickly, while others build over time. We set expectations for your market and your starting point rather than promising fixed timelines, and you see progress through regular reporting rather than a single review at the end.`,
    },
    {
      question: `Can you work with our existing website and accounts?`,
      answer: `Yes. Most of this work improves what already exists. If the current setup is genuinely holding you back, we will say so clearly and explain what a rebuild or migration would and would not solve before you commit to it.`,
    },
    {
      question: `How do you measure ${service.name}?`,
      answer: `We agree the measures that matter before work begins — usually a mix of visibility, traffic quality and real enquiries such as calls, forms and messages. Reporting focuses on what changed and what to do next, not on vanity numbers.`,
    },
  ];
}

/** Short "why this matters" paragraph for a main service page. */
export function serviceWhyItMatters(service: Service): string {
  return `For most businesses, the cost of ignoring ${service.name} is not a single lost sale — it is the steady stream of enquiries that go to a competitor who simply looks easier to find and easier to trust. ${service.eyebrow} is one of the areas where small, consistent improvements compound over time.`;
}

/** Short "what Bishora provides" paragraph for a main service page. */
export function serviceWhatBishoraProvides(service: Service): string {
  return `A prioritised plan instead of a generic checklist. We review what you have, agree what matters most for ${service.name}, do the work in a sensible order and report on what changed. Where a sub-service is not relevant to your business, we will tell you rather than sell it.`;
}
