import { Globe, Search, MapPin, Target } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ProjectCategory = 'Website' | 'SEO' | 'Local SEO' | 'Paid Advertising';

export type ProjectCategoryCard = {
  id: string;
  category: ProjectCategory;
  /** Short label describing the type of work. */
  title: string;
  description: string;
  /** What future projects in this category will cover. */
  scope: string[];
  icon: LucideIcon;
};

/**
 * Portfolio placeholders.
 *
 * Real client work has not been published yet, so these cards describe the
 * categories of work Bishora delivers and are explicitly marked as pending.
 * They are structured so a real project can be dropped in by replacing the
 * `description` and `scope` fields — no layout changes required.
 */
export const projectCategories: ProjectCategoryCard[] = [
  {
    id: 'website-projects',
    category: 'Website',
    title: 'Website Projects',
    description:
      'Business websites built to be fast, mobile friendly and structured around turning visitors into enquiries. Client websites will be published here once the work is live and approved.',
    scope: [
      'Site structure and page planning',
      'Custom responsive design and build',
      'Technical SEO foundations',
      'Conversion-focused contact flows',
    ],
    icon: Globe,
  },
  {
    id: 'seo-projects',
    category: 'SEO',
    title: 'SEO Projects',
    description:
      'Search optimisation engagements covering on-page work, technical fixes, keyword targeting and content that answers real customer questions.',
    scope: [
      'On-page optimisation',
      'Technical SEO audit and fixes',
      'Keyword research and content planning',
      'Reporting on organic visibility',
    ],
    icon: Search,
  },
  {
    id: 'local-seo-projects',
    category: 'Local SEO',
    title: 'Local SEO Projects',
    description:
      'Local visibility work centred on Google Business Profile, map rankings, service areas and the details customers use to decide whether to contact you.',
    scope: [
      'Google Business Profile optimisation',
      'Service area and category strategy',
      'Reviews and citation consistency',
      'Local ranking tracking',
    ],
    icon: MapPin,
  },
  {
    id: 'paid-advertising-projects',
    category: 'Paid Advertising',
    title: 'Paid Advertising Projects',
    description:
      'Paid search and paid social campaigns structured around a clear offer, accurate tracking and a continuous cycle of testing and optimisation.',
    scope: [
      'Google Search campaigns',
      'Facebook and Instagram campaigns',
      'Lead form and landing page setup',
      'Bid, budget and creative optimisation',
    ],
    icon: Target,
  },
];

export const projectCategoryFilters: ProjectCategory[] = [
  'Website',
  'SEO',
  'Local SEO',
  'Paid Advertising',
];

/** The structure a published case study will follow. */
export const caseStudyStructure = [
  {
    label: 'Client',
    value: 'Business name and sector, with permission to be named.',
  },
  {
    label: 'Location',
    value: 'The market the project was run in.',
  },
  {
    label: 'Challenge',
    value: 'The specific problem the business was facing.',
  },
  {
    label: 'Approach',
    value: 'The channels, work and timeline we agreed.',
  },
  {
    label: 'Results',
    value: 'Measured outcomes, published only with client approval.',
  },
  {
    label: 'Testimonial',
    value: 'A short client quote, shared only after the client signs off.',
  },
];
