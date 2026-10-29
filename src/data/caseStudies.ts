import {
  Compass,
  Download,
  FileText,
  FolderTree,
  KeyRound,
  LayoutGrid,
  MousePointerClick,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * ============================================================================
 * BISHORA — CASE STUDIES
 * ============================================================================
 * One record per published case study. The portfolio listing and the
 * `/portfolio/:slug` page both read from this file, so adding or updating a
 * study never requires touching page markup.
 *
 * Honesty rules for this data:
 *  - `status` reflects what is actually true today.
 *  - `results` and `testimonial` are OPTIONAL and stay empty until real,
 *    measured numbers exist. The page renders nothing when they are missing.
 *  - Every visual points at a real screenshot of the live product UI. Only
 *    replace `image.src` when a screen changes; the layout stays identical.
 *  - Internal admin screens are never published here.
 * ============================================================================
 */

export type CaseStudyStatus = 'in-development' | 'live';

export type CaseStudyImage = {
  src: string;
  /** Optional 2x source for retina screenshots. */
  srcSet?: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseStudyVisual = {
  id: string;
  /** Short label, e.g. "Homepage". Also used as the figure label. */
  label: string;
  /** Path shown in the browser bar. */
  path: string;
  caption: string;
  image: CaseStudyImage;
};

export type CaseStudyCard = {
  title: string;
  description?: string;
  icon: LucideIcon;
};

export type CaseStudyStep = {
  title: string;
  icon: LucideIcon;
};

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudyStatusPoint = {
  label: string;
  /** Ready items show a check; pending items show a clock. */
  done: boolean;
};

export type CaseStudyResult = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  /** Short client name used in breadcrumbs and headings. */
  name: string;
  /** Full project title used on the portfolio listing card. */
  title: string;
  /** Small eyebrow above the case-study H1. */
  heroEyebrow: string;
  /** Case-study page H1. */
  heroTitle: string;
  subtitle: string;
  status: CaseStudyStatus;
  /** Visible badge text. Keep it honest. */
  statusLabel: string;
  heroDescription: string;
  /** One or two lines used on the portfolio listing card. */
  summary: string;
  /** Compact Client / Project / Service row under the hero. */
  heroMeta: CaseStudyMeta[];
  about: string[];
  /** Short facts shown beside the About copy. */
  aboutFacts: CaseStudyMeta[];
  challenges: CaseStudyCard[];
  features: CaseStudyCard[];
  flow: CaseStudyStep[];
  /** Short design-thinking block after the screens. */
  discovery: {
    title: string;
    description: string;
    points: CaseStudyCard[];
  };
  heroVisual: CaseStudyVisual;
  visuals: CaseStudyVisual[];
  technology: string[];
  technologyNote: string[];
  statusNote: string[];
  statusPoints: CaseStudyStatusPoint[];
  cta: {
    eyebrow: string;
    title: string;
    description: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  /** Add only real, measured outcomes. Hidden while undefined. */
  results?: CaseStudyResult[];
  /** Add only a quote the client has approved. Hidden while undefined. */
  testimonial?: {
    quote: string;
    name: string;
    role: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'dalchand-digital-platform',
    name: 'Dalchand',
    title: 'DALCHAND — Digital Asset Platform',
    heroEyebrow: 'Dalchand',
    heroTitle: 'Digital Asset Platform',
    subtitle: 'Website Design & Development',
    status: 'in-development',
    statusLabel: 'IN DEVELOPMENT',
    heroDescription:
      'Dalchand एक digital platform है जहाँ photographers, videographers और creators अपने work के लिए useful digital resources को एक जगह explore और access कर सकते हैं।',
    summary:
      'Photographers, videographers और creators के लिए एक organised digital asset platform — product catalog, categories, cart और account system के साथ.',
    heroMeta: [
      { label: 'Client', value: 'Dalchand' },
      { label: 'Project', value: 'Digital Asset Platform' },
      { label: 'Service', value: 'Website Design & Development' },
    ],
    about: [
      'Dalchand के लिए सिर्फ एक normal product website नहीं बनानी थी.',
      'Goal था एक easy-to-use digital platform बनाना जहाँ अलग-अलग creative resources को categories में organize किया जा सके, users products को आसानी से find और explore कर सकें और आगे चलकर subscription-based access और secure downloads को manage किया जा सके.',
    ],
    aboutFacts: [
      { label: 'Platform', value: 'Digital asset marketplace' },
      { label: 'Built for', value: 'Photographers, videographers & creators' },
      { label: 'Access model', value: 'Subscription-based, secure downloads' },
    ],
    challenges: [
      {
        title: 'Organize Digital Resources',
        description:
          'बहुत सारे digital resources को properly organize करना ताकि users आसानी से सही resource तक पहुँच सकें.',
        icon: FolderTree,
      },
      {
        title: 'Easy Product Discovery',
        description:
          'Products को categories और clear information के साथ इस तरह present करना कि users आसानी से find और explore कर सकें.',
        icon: Search,
      },
      {
        title: 'Subscription-Ready Foundation',
        description:
          'Account, subscription access और secure downloads के लिए strong technical foundation तैयार करना.',
        icon: ShieldCheck,
      },
    ],
    features: [
      {
        title: 'Product Catalog',
        description:
          'Different digital products को एक organized catalog में present किया गया.',
        icon: LayoutGrid,
      },
      {
        title: '8 Product Categories',
        description:
          'Products को 8 clear categories में organize किया गया ताकि discovery आसान रहे.',
        icon: FolderTree,
      },
      {
        title: 'Product Details',
        description:
          'हर product के लिए pricing, details, features, requirements और related information का structured layout.',
        icon: FileText,
      },
      {
        title: 'Cart & Checkout',
        description:
          'Users के लिए product selection, cart और checkout flow तैयार किया गया.',
        icon: ShoppingCart,
      },
      {
        title: 'Customer Account',
        description:
          'Account, orders, downloads और subscription-related sections के लिए dedicated customer experience.',
        icon: UserRound,
      },
    ],
    flow: [
      { title: 'Browse', icon: Compass },
      { title: 'Select Product', icon: MousePointerClick },
      { title: 'Account', icon: UserRound },
      { title: 'Subscription / Access', icon: KeyRound },
      { title: 'Download', icon: Download },
    ],
    discovery: {
      title: 'Designed for Simple Discovery',
      description:
        'Platform का experience इस तरह रखा गया है कि user पहले resources explore करे, फिर category या product के through आगे बढ़े और बिना confusion के product information और access flow तक पहुँचे.',
      points: [
        { title: 'Easy Navigation', icon: Compass },
        { title: 'Clear Categories', icon: LayoutGrid },
        { title: 'Structured Product Information', icon: FileText },
      ],
    },
    heroVisual: {
      id: 'dalchand-home-hero',
      label: 'Homepage',
      path: '/',
      caption:
        'एक clean starting point जहाँ से user platform के products और available resources explore कर सकता है.',
      image: {
        src: '/images/dalchand/dalchand-home.webp',
        width: 2048,
        height: 1280,
        alt: 'Dalchand digital asset platform homepage with the headline “Premium Digital Designs, Ready to Create.”',
      },
    },
    visuals: [
      {
        id: 'dalchand-home',
        label: 'Homepage',
        path: '/',
        caption: 'Clean starting point for exploring the platform.',
        image: {
          src: '/images/dalchand/dalchand-home.webp',
          width: 2048,
          height: 1280,
          alt: 'Dalchand homepage with the main headline and a search field for digital resources.',
        },
      },
      {
        id: 'dalchand-categories',
        label: 'Categories',
        path: '/',
        caption: 'Category-based discovery for digital resources.',
        image: {
          src: '/images/dalchand/dalchand-categories.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand category section showing eight product categories with covers and product counts.',
        },
      },
      {
        id: 'dalchand-shop',
        label: 'Shop',
        path: '/shop',
        caption: 'Product browsing with structured product cards.',
        image: {
          src: '/images/dalchand/dalchand-shop.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand shop page with search, category filters and a grid of product cards.',
        },
      },
      {
        id: 'dalchand-product',
        label: 'Product Detail',
        path: '/product/wedding-photography-preset-pack',
        caption: 'Detailed product information and access flow.',
        image: {
          src: '/images/dalchand/dalchand-product.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand product detail page with product artwork, details panel and download action.',
        },
      },
    ],
    technology: [
      'React',
      'TypeScript',
      'Supabase',
      'Razorpay Integration Architecture',
    ],
    technologyNote: [
      'Razorpay integration architecture is prepared for the planned subscription/payment flow.',
      'Payment connection अभी live नहीं है.',
    ],
    statusNote: [
      'The platform is currently in development.',
      'Website का core platform और major functionality तैयार है। Final production deployment और payment connection इसके next steps हैं.',
    ],
    statusPoints: [
      { label: 'Core platform structure ready', done: true },
      { label: 'Major user-facing functionality ready', done: true },
      { label: 'Production payment connection pending', done: false },
      { label: 'Final deployment pending', done: false },
    ],
    cta: {
      eyebrow: 'Your project next',
      title: "Let's Build Something Similar",
      description:
        "आपके पास भी कोई digital platform, subscription website या online business idea है? Let's build it.",
    },
    seo: {
      title:
        'Dalchand Digital Asset Platform | Website Design & Development | Bishora',
      description:
        'See how Bishora designed and developed Dalchand, a digital asset platform for photographers, videographers and creators.',
      keywords: [
        'Dalchand case study',
        'digital asset platform development',
        'subscription website development',
        'product catalog website',
        'Razorpay integration architecture',
        'Bishora portfolio',
      ],
    },
    // `results` and `testimonial` are intentionally absent: the platform is in
    // development, so there is nothing measured or approved to publish yet.
  },
];

/** Canonical route for a case study. */
export const caseStudyPath = (slug: string): string => `/portfolio/${slug}`;

/** Lookup used by the `/portfolio/:slug` route. */
export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((study) => study.slug === slug);

/** The study highlighted on the portfolio listing. */
export const featuredCaseStudy: CaseStudy | undefined = caseStudies[0];
