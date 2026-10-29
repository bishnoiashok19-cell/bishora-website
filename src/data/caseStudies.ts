import {
  Compass,
  Download,
  FileText,
  FolderTree,
  KeyRound,
  LayoutGrid,
  MousePointerClick,
  Search,
  Settings2,
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
  description: string;
  icon: LucideIcon;
};

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudyResult = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  /** Short client name used in breadcrumbs and headings. */
  name: string;
  title: string;
  subtitle: string;
  status: CaseStudyStatus;
  /** Visible badge text. Keep it honest. */
  statusLabel: string;
  heroDescription: string;
  /** One or two lines used on the portfolio listing card. */
  summary: string;
  meta: CaseStudyMeta[];
  about: string[];
  challenges: CaseStudyCard[];
  features: CaseStudyCard[];
  flow: CaseStudyStep[];
  heroVisual: CaseStudyVisual;
  visuals: CaseStudyVisual[];
  technology: string[];
  technologyNote: string[];
  statusNote: string[];
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
    subtitle: 'Website Design & Development',
    status: 'in-development',
    statusLabel: 'IN DEVELOPMENT',
    heroDescription:
      'Dalchand एक digital platform है जहाँ photographers, videographers और creators अपने creative work के लिए useful digital resources को एक जगह explore और access कर सकते हैं.',
    summary:
      'Photographers, videographers और creators के लिए एक organised digital asset platform — product catalog, categories, cart और account system के साथ.',
    meta: [
      { label: 'Client', value: 'Dalchand' },
      { label: 'Work', value: 'Website design & development' },
      { label: 'Platform', value: 'Digital asset platform' },
      { label: 'Status', value: 'In development' },
    ],
    about: [
      'Dalchand के लिए सिर्फ एक normal product website नहीं बनानी थी.',
      'Goal था एक ऐसा easy-to-use digital platform बनाना जहाँ अलग-अलग creative resources को categories में organize किया जा सके, हर product की proper details दिखाई जाएँ और आगे चलकर subscription-based access और secure downloads को manage किया जा सके.',
    ],
    challenges: [
      {
        title: 'बहुत सारे digital resources को properly organize करना',
        icon: FolderTree,
      },
      {
        title: 'Users के लिए products को आसानी से find और explore करना',
        icon: Search,
      },
      {
        title:
          'Subscription, account और secure download के लिए strong foundation तैयार करना',
        icon: ShieldCheck,
      },
    ],
    features: [
      {
        title: 'Product Catalog',
        description:
          'Different digital products को एक proper catalog में organize किया गया.',
        icon: LayoutGrid,
      },
      {
        title: '8 Product Categories',
        description:
          'Products को अलग-अलग categories में रखा गया ताकि user आसानी से अपनी जरूरत की चीज ढूंढ सके.',
        icon: FolderTree,
      },
      {
        title: 'Product Details',
        description:
          'हर product के लिए price, details, features, requirements और other important information दिखाई जाती है.',
        icon: FileText,
      },
      {
        title: 'Cart & Checkout',
        description:
          'User products select करके cart और checkout flow तक जा सकता है.',
        icon: ShoppingCart,
      },
      {
        title: 'Customer Account',
        description:
          'User के लिए account, orders, downloads और subscription related sections तैयार किए गए.',
        icon: UserRound,
      },
      {
        title: 'Admin Panel',
        description:
          'Products, categories, users, subscriptions और downloads को manage करने के लिए admin system बनाया गया.',
        icon: Settings2,
      },
    ],
    flow: [
      {
        title: 'Browse',
        description: 'Platform के products और categories explore करें.',
        icon: Compass,
      },
      {
        title: 'Select Product',
        description: 'अपनी जरूरत का resource चुनें.',
        icon: MousePointerClick,
      },
      {
        title: 'Account',
        description: 'Account बनाकर अपनी details manage करें.',
        icon: UserRound,
      },
      {
        title: 'Subscription / Access',
        description: 'Subscription या access plan के through product access मिलता है.',
        icon: KeyRound,
      },
      {
        title: 'Download',
        description: 'Access मिलने के बाद resource download करें.',
        icon: Download,
      },
    ],
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
        caption:
          'Homepage का categories section, जहाँ से user एक ही जगह पर सभी 8 categories explore कर सकता है.',
        image: {
          src: '/images/dalchand/dalchand-categories.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand homepage category section showing eight product categories with covers and product counts.',
        },
      },
      {
        id: 'dalchand-shop',
        label: 'Shop & Categories',
        path: '/shop',
        caption:
          'Categories और product listing के through user अपनी जरूरत के resources जल्दी find कर सकता है.',
        image: {
          src: '/images/dalchand/dalchand-shop.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand shop page with search, category filters and a grid of product cards.',
        },
      },
      {
        id: 'dalchand-product',
        label: 'Product Details',
        path: '/product/wedding-photography-preset-pack',
        caption:
          'Product लेने से पहले user को उसकी important information एक ही जगह मिल जाती है.',
        image: {
          src: '/images/dalchand/dalchand-product.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand product detail page with product artwork, details panel and download action.',
        },
      },
      {
        id: 'dalchand-account',
        label: 'Account Access',
        path: '/login',
        caption:
          'Account sign-in screen — login के बाद user अपने orders, downloads और subscription details manage करता है.',
        image: {
          src: '/images/dalchand/dalchand-account.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand sign-in screen for customer account access.',
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
      'Modern frontend के साथ backend, database और future subscription/payment requirements को ध्यान में रखकर architecture तैयार किया गया.',
      'Razorpay के लिए integration architecture तैयार है, लेकिन payment अभी fully live नहीं है.',
    ],
    statusNote: [
      'The platform is currently in development.',
      'Website का core platform और major functionality तैयार है.',
      'Final production deployment और payment connection इसके next steps हैं.',
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
