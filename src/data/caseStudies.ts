import {
  ClipboardCheck,
  ClipboardList,
  Code2,
  Compass,
  Download,
  FileText,
  FolderTree,
  KeyRound,
  LayoutGrid,
  MousePointerClick,
  PenTool,
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

export type CaseStudyProcessStep = {
  title: string;
  description: string;
  /** One short line on why the step mattered. */
  note: string;
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
  /** Agency process: plan → design → build → test. */
  process: {
    note: string;
    steps: CaseStudyProcessStep[];
  };
  flow: CaseStudyStep[];
  heroVisual: CaseStudyVisual;
  visuals: CaseStudyVisual[];
  technology: string[];
  technologyNote: string[];
  statusNote: string[];
  /** One small line under the status checklist. */
  statusFootnote: string;
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
      'Dalchand के लिए सिर्फ एक normal product website नहीं बनानी थी। Goal था एक easy-to-use digital platform बनाना जहाँ photographers, videographers और creators अपने work के लिए useful digital resources को एक जगह explore और access कर सकें।',
      'Platform को इस तरह structure किया गया कि products categories में organize हों, हर resource की proper details दिखाई दें और आगे subscription-based access तथा secure downloads को support किया जा सके।',
    ],
    aboutFacts: [
      { label: 'Platform', value: 'Digital asset marketplace' },
      { label: 'Built for', value: 'Photographers, videographers & creators' },
      { label: 'Access model', value: 'Subscription-based, secure downloads' },
    ],
    challenges: [
      {
        title: 'Organize Digital Resources',
        description: 'बहुत सारे digital resources को properly organize करना।',
        icon: FolderTree,
      },
      {
        title: 'Easy Product Discovery',
        description: 'Users के लिए products को आसानी से find और explore करना।',
        icon: Search,
      },
      {
        title: 'Strong Platform Foundation',
        description:
          'Subscription, account और secure download के लिए strong foundation तैयार करना।',
        icon: ShieldCheck,
      },
    ],
    features: [
      {
        title: 'Product Catalog',
        description:
          'Digital products को एक structured catalog में organize किया गया।',
        icon: LayoutGrid,
      },
      {
        title: '8 Product Categories',
        description:
          'Products को 8 clear categories में organize किया गया ताकि users relevant resources आसानी से find कर सकें।',
        icon: FolderTree,
      },
      {
        title: 'Product Details',
        description:
          'हर product के लिए price, details, features, requirements और important information clearly दिखाई जाती है।',
        icon: FileText,
      },
      {
        title: 'Cart & Checkout',
        description:
          'Users products select करके cart और checkout flow के through आगे बढ़ सकते हैं।',
        icon: ShoppingCart,
      },
      {
        title: 'Customer Account',
        description:
          'Users के लिए account, orders, downloads और subscription-related sections का foundation तैयार किया गया।',
        icon: UserRound,
      },
    ],
    process: {
      note: 'Dalchand को सिर्फ एक website की तरह नहीं, बल्कि एक structured digital platform की तरह build किया गया — जहाँ design, product structure, user flow और future subscription functionality को शुरुआत से ध्यान में रखा गया।',
      steps: [
        {
          title: 'Plan & Structure',
          description:
            'सबसे पहले platform का पूरा structure plan किया गया — products, categories, product details, customer account और future subscription model को ध्यान में रखकर।',
          note: 'पहले तय किया गया कि website के अंदर कौन-कौन से parts होंगे और user किस तरह platform पर आगे बढ़ेगा।',
          icon: ClipboardList,
        },
        {
          title: 'Design the Experience',
          description:
            'इसके बाद clean और easy-to-use interface design किया गया ताकि users products को आसानी से browse, explore और समझ सकें।',
          note: 'Design को simple रखा गया ताकि visitor को product ढूँढने या समझने में confusion न हो।',
          icon: PenTool,
        },
        {
          title: 'Build & Integrate',
          description:
            'Design को actual platform functionality में convert किया गया और frontend, data architecture, account flow तथा future payment integration के लिए foundation तैयार की गई।',
          note: 'यहीं actual website development हुआ — screens, product structure, account flow और backend architecture को जोड़ा गया।',
          icon: Code2,
        },
        {
          title: 'Test & Prepare',
          description:
            'अलग-अलग screens, user flows और responsive layouts को test किया गया ताकि platform आगे production launch के लिए properly prepared हो सके।',
          note: 'Desktop, tablet और mobile layouts तथा important user flows को check किया गया।',
          icon: ClipboardCheck,
        },
      ],
    },
    flow: [
      {
        title: 'Browse',
        description: 'Products और categories explore करें।',
        icon: Compass,
      },
      {
        title: 'Select Product',
        description: 'अपनी जरूरत का digital resource चुनें।',
        icon: MousePointerClick,
      },
      {
        title: 'Account',
        description: 'Platform access के लिए account flow use करें।',
        icon: UserRound,
      },
      {
        title: 'Subscription / Access',
        description:
          'Future subscription-based access model के according resources तक पहुँच।',
        icon: KeyRound,
      },
      {
        title: 'Download',
        description: 'Authorized digital resources download करें।',
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
          'Platform का main entry point जहाँ users Dalchand को explore करना शुरू करते हैं।',
        image: {
          src: '/images/dalchand/dalchand-home.webp',
          width: 2048,
          height: 1280,
          alt: 'Dalchand homepage with the main headline and a search field for digital resources.',
        },
      },
      {
        id: 'dalchand-categories',
        label: 'Shop & Categories',
        path: '/shop',
        caption:
          'Categories और product listing के through users relevant resources आसानी से find कर सकते हैं।',
        image: {
          src: '/images/dalchand/dalchand-categories.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand category section showing eight product categories with covers and product counts.',
        },
      },
      {
        id: 'dalchand-product',
        label: 'Product Detail',
        path: '/product/wedding-photography-preset-pack',
        caption:
          'Product page पर pricing, details, features और important information clearly दिखाई जाती है।',
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
          'Customer account flow जहाँ आगे orders, downloads और subscription-related access manage किया जा सकता है।',
        image: {
          src: '/images/dalchand/dalchand-account.webp',
          width: 1440,
          height: 900,
          alt: 'Dalchand account access screen with the “Welcome back” heading and sign-in form.',
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
      'Platform को modern frontend architecture के साथ build किया गया है, जबकि Supabase backend/data architecture और future Razorpay payment integration के लिए foundation provide करता है।',
    ],
    statusNote: [
      'The platform is currently in development.',
      'Website का core platform और major functionality तैयार है। Final production deployment और payment connection इसके next steps हैं।',
    ],
    statusFootnote: 'Payment, subscriptions और final deployment अभी pending हैं।',
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
