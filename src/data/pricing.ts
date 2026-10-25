/**
 * ============================================================================
 * BISHORA — PRICING & SERVICE SCOPE
 * ============================================================================
 * Single source of truth for the /pricing page.
 *
 * Every price, inclusion, requirement and exclusion below mirrors
 * `Bishora_Final_Pricing_Master_OpenCode.md` (Version 1.0). Do not edit prices
 * here without updating the master first — no price is invented on this page.
 *
 * Business rules that the UI must keep visible:
 *  - "Setup" never means ongoing management.
 *  - One-time and monthly charges are always shown separately.
 *  - Google/Meta ad spend is paid by the client directly to Google/Meta.
 *  - Third-party platform charges are separate unless a custom quote says so.
 *  - "Starting" / "Custom Quote" are kept wherever the master says so.
 */

export type PricingBilling = 'one-time' | 'monthly' | 'custom' | 'bundle';

export type PricingItem = {
  id: string;
  name: string;
  /** Headline price exactly as written in the master, e.g. "₹1,000". */
  price: string;
  /** "Starting" where the master says Starting/Starting From. */
  priceQualifier?: 'Starting';
  /** Short unit shown beside the price, e.g. "/month" or "per platform". */
  priceUnit?: string;
  billing: PricingBilling;
  /** Customer-facing billing type shown on the card. */
  billingLabel: string;
  summary: string;
  /** Bundle cards call this "Possible combination". */
  includesLabel?: string;
  includes: string[];
  requirements: string[];
  excludes: string[];
  notes?: string[];
};

export type PricingCategory = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  note?: string;
  items: PricingItem[];
};

/* -------------------------------------------------------------------------- */
/* 1. Digital setup                                                           */
/* -------------------------------------------------------------------------- */

const digitalSetup: PricingItem[] = [
  {
    id: 'facebook-business-page-setup',
    name: 'Facebook Business Page Setup',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'A correctly configured Facebook Business Page for your business — set up once and owned by you.',
    includes: [
      'Facebook Business Page setup',
      'Correct business category',
      'Business information configuration',
      'About / description setup',
      'Contact information',
      'Website link',
      'CTA button / basic contact action',
      'Basic profile optimisation',
      'Basic page configuration',
    ],
    requirements: [
      'Gmail / email or existing Facebook account access',
      'Business name and business category',
      'Business phone number',
      'Business address or service area',
      'Business description',
      'Website URL, if available',
      'Logo / profile image and cover image, if available',
      'Other business details required by Facebook',
    ],
    excludes: [
      'Regular posts',
      'Reels',
      'Stories',
      'Daily / weekly page management',
      'Content calendar',
      'Community management',
      'Paid advertising management',
      'Ongoing page maintenance',
    ],
    notes: [
      'Setup only — this is not social media management and does not include posting.',
    ],
  },
  {
    id: 'instagram-business-setup',
    name: 'Instagram Business Setup',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'A professional Instagram business profile with your contact details, category and links in place.',
    includes: [
      'Professional / business account setup',
      'Bio configuration',
      'Category setup',
      'Contact buttons / details',
      'Website link',
      'Basic profile optimisation',
      'Basic business information configuration',
    ],
    requirements: [
      'Gmail / email or existing Instagram account',
      'Business / brand name',
      'Business category',
      'Phone / email',
      'Website, if available',
      'Logo / profile image',
      'Business description / details',
      'Required account access / verification',
    ],
    excludes: [
      'Regular posts',
      'Reels',
      'Stories',
      'Content creation',
      'Daily / weekly management',
      'Engagement / community management',
      'Instagram Ads management',
    ],
    notes: [
      'Setup only — no reels, stories, posts or ongoing account management.',
    ],
  },
  {
    id: 'google-business-profile-setup',
    name: 'Google Business Profile Setup',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'Get your business live on Google Search and Maps with a correctly configured profile.',
    includes: [
      'Google Business Profile setup',
      'Business information configuration',
      'Primary category setup',
      'Address / service area setup',
      'Hours setup',
      'Phone / website configuration',
      'Basic profile optimisation',
      'Guidance through Google verification',
    ],
    requirements: [
      'Google / Gmail account',
      'Real business name',
      'Business category',
      'Phone number',
      'Address or service area',
      'Business hours',
      'Website, if available',
      'Business description',
      'Logo / photos',
      'Verification information / access when Google requires it',
    ],
    excludes: [
      'Guaranteed Google ranking',
      'Ongoing Local SEO',
      'Ongoing GBP post management',
      'Review management',
      'Monthly profile management',
      'Fake reviews or policy-violating activity',
    ],
    notes: [
      'Setup only. Local SEO and GBP optimisation are separate services.',
    ],
  },
  {
    id: 'social-media-setup',
    name: 'Social Media Setup',
    price: '₹1,000',
    priceQualifier: 'Starting',
    priceUnit: 'per platform',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'Profile setup for LinkedIn, YouTube or another agreed platform — priced per platform.',
    includes: [
      'Account / page / channel setup',
      'Business information',
      'Bio / About',
      'Contact details',
      'Website links',
      'Basic profile optimisation',
      'Basic CTA configuration where supported',
    ],
    requirements: [
      'Account / email',
      'Business / brand information',
      'Logo',
      'Contact information',
      'Website',
      'Description and category',
      'Required access / verification',
    ],
    excludes: [
      'Regular posting',
      'Reels',
      'Stories',
      'Content creation',
      'Community management',
      'Daily / weekly / monthly social media management',
    ],
    notes: [
      'Facebook and Instagram have their own dedicated setup options in this section.',
      'Setup only — posting and ongoing management are not included.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 2. WhatsApp                                                                */
/* -------------------------------------------------------------------------- */

const whatsappSolutions: PricingItem[] = [
  {
    id: 'whatsapp-business-setup',
    name: 'WhatsApp Business Setup',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'A complete WhatsApp Business profile with hours, contact details and basic quick replies.',
    includes: [
      'WhatsApp Business profile setup',
      'Business name / category configuration',
      'Description',
      'Business hours',
      'Address / service area',
      'Website',
      'Greeting message',
      'Away message',
      'Basic quick replies',
      'Basic business profile optimisation',
    ],
    requirements: [
      'Business phone number / SIM',
      'Business name',
      'Business category',
      'Business description',
      'Address / service area',
      'Business hours',
      'Website',
      'Logo',
      'Business information',
      'Access / OTP / verification when required',
    ],
    excludes: [
      'Advanced chatbot / automation',
      'WhatsApp API setup',
      'Bulk messaging campaigns',
      'Ongoing WhatsApp marketing',
      'Monthly management',
    ],
    notes: [
      'This is the basic profile setup. WhatsApp automation is a separate service.',
    ],
  },
  {
    id: 'whatsapp-automation',
    name: 'WhatsApp Automation',
    price: '₹2,500',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'Automated replies for FAQs, business hours, location and services, built once and handed over.',
    includes: [
      'FAQ automation',
      'Greeting flow',
      'Business-hours response',
      'Location response',
      'Services / menu information flow',
      'Basic enquiry flow',
      'Lead / customer information collection',
      'Human handoff / escalation flow',
      'Basic automated customer conversation flow',
    ],
    requirements: [
      'Business information',
      'Frequently asked questions and answers',
      'Services / menu / pricing information',
      'Business hours and location',
      'Contact information',
      'Website / social links',
      'Required WhatsApp account / access',
      'Any approved message wording or business policies',
    ],
    excludes: [
      'Third-party WhatsApp API / platform subscription fees',
      'Paid automation software charges',
      'High-volume messaging costs',
      'Complex custom chatbot development',
      'Advanced AI chatbot unless separately quoted',
      'Ongoing campaign management',
    ],
    notes: [
      'Different from the ₹1,000 WhatsApp Business Setup.',
      '₹2,500 is a starting price — the final quote depends on the agreed flows.',
    ],
  },
  {
    id: 'whatsapp-marketing',
    name: 'WhatsApp Marketing / Campaign Management',
    price: 'Custom Quote',
    billing: 'custom',
    billingLabel: 'Custom Quote',
    summary:
      'Campaign planning, broadcasts and follow-up flows — quoted per campaign and workload.',
    includes: [
      'Campaign scope agreed in writing before work starts',
      'Broadcast campaign setup',
      'Catalogue and quick-reply campaign assets',
      'Click-to-WhatsApp campaign support',
      'Welcome and follow-up flows',
      'Opt-in list guidance',
      'Campaign reporting',
    ],
    requirements: [
      'WhatsApp Business account access',
      'Approved message wording / templates',
      'Audience and opt-in list details',
      'Business and offer information',
      'Campaign schedule and volume',
    ],
    excludes: [
      'WhatsApp API charges',
      'Third-party platform charges',
      'Message / template charges',
      'Bulk campaign tool charges',
    ],
    notes: [
      'Quoted per scope — volume, templates and reporting are confirmed before work starts.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 3. SEO & local SEO                                                         */
/* -------------------------------------------------------------------------- */

const seoAndLocal: PricingItem[] = [
  {
    id: 'basic-seo-setup',
    name: 'Basic SEO Setup',
    price: '₹3,000',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'A clean technical and on-page foundation so Google can read, index and understand your site.',
    includes: [
      'Basic on-page SEO setup',
      'Title / meta description work',
      'Basic technical SEO checks',
      'Basic indexing / Search Console configuration where applicable',
      'Basic internal optimisation',
    ],
    requirements: [
      'Website access',
      'Google account / Search Console access where required',
      'Business information',
      'Target services / location',
      'Existing keyword / business information',
    ],
    excludes: [
      'Monthly SEO management',
      'Guaranteed rankings',
      'Large-scale content production',
      'Advanced link building unless separately quoted',
    ],
    notes: ['A one-time foundation. Ongoing SEO is a separate monthly service.'],
  },
  {
    id: 'monthly-seo',
    name: 'Monthly SEO',
    price: '₹5,000',
    priceQualifier: 'Starting',
    priceUnit: '/month',
    billing: 'monthly',
    billingLabel: 'Monthly',
    summary:
      'Ongoing keyword, on-page and technical work with monitoring and a basic monthly report.',
    includes: [
      'Keyword work',
      'On-page optimisation',
      'Technical monitoring',
      'Internal linking',
      'Content recommendations',
      'Search performance monitoring',
      'Basic reporting',
    ],
    requirements: [
      'Website access',
      'Google account / Search Console access',
      'Business information',
      'Target services / location',
      'Existing keyword / business information',
    ],
    excludes: [
      'Any ranking guarantee',
      'Work outside the agreed monthly scope',
      'Advanced link building unless separately quoted',
    ],
    notes: [
      'Larger or competitive projects: ₹10,000–₹20,000+ per month or a custom quote.',
      'Management is billed monthly, in advance.',
    ],
  },
  {
    id: 'gbp-optimization',
    name: 'GBP Optimization',
    price: '₹2,500',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Optimisation',
    summary:
      'Sharpen an existing Google Business Profile so it matches what people actually search for.',
    includes: [
      'Profile optimisation',
      'Category review',
      'Services',
      'Business description',
      'Business information',
      'Local optimisation basics',
    ],
    requirements: [
      'Google Business Profile access',
      'Business information',
      'Services and service area details',
      'Business description and photos',
    ],
    excludes: [
      'Guaranteed ranking',
      'Review generation / manipulation',
      'Ongoing monthly management',
    ],
    notes: ['Profile setup from scratch is the ₹1,000 GBP Setup in Digital Setup.'],
  },
  {
    id: 'local-seo-management',
    name: 'Local SEO Management',
    price: '₹5,000',
    priceQualifier: 'Starting',
    priceUnit: '/month',
    billing: 'monthly',
    billingLabel: 'Monthly',
    summary:
      'Ongoing local visibility work across your profile, local pages and citations.',
    includes: [
      'GBP optimisation / monitoring',
      'Local keyword work',
      'Local on-page SEO',
      'Local presence / citation work',
      'Performance monitoring',
      'Basic reporting',
    ],
    requirements: [
      'Website access',
      'Google Business Profile access',
      'Business information',
      'Target services / locations',
    ],
    excludes: [
      'Any ranking guarantee',
      'Review generation / manipulation',
      'Work outside the agreed monthly scope',
    ],
    notes: [
      'Advanced local SEO is quoted individually.',
      'Management is billed monthly, in advance.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 4. Websites & landing pages                                                */
/* -------------------------------------------------------------------------- */

const websitesAndLanding: PricingItem[] = [
  {
    id: 'basic-business-website',
    name: 'Basic Business Website',
    price: '₹8,000',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Project',
    summary:
      'A clean, responsive business website with the pages you need to look credible and get enquiries.',
    includes: [
      'Basic responsive business website',
      'Agreed number of pages / sections',
      'Business information',
      'Contact details',
      'Basic CTA',
      'Basic mobile responsiveness',
      'Basic deployment guidance',
    ],
    requirements: [
      'Page list and business information',
      'Logo and images',
      'Services and contact details',
      'Domain / hosting access where you already have it',
    ],
    excludes: [
      'Domain and hosting',
      'Paid plugins and premium tools',
      'Third-party APIs',
      'Pages or features outside the agreed scope',
    ],
    notes: ['Exact page count and features are confirmed before your quote.'],
  },
  {
    id: 'professional-business-website',
    name: 'Professional Business Website',
    price: '₹15,000',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Project',
    summary:
      'More pages, a stronger layout and a proper lead flow for businesses that need more than the basics.',
    includes: [
      'More pages',
      'Professional layout',
      'Service sections',
      'Contact / lead flow',
      'Responsive design',
      'Basic SEO structure',
      'Agreed integrations',
    ],
    requirements: [
      'Page list and business information',
      'Logo, images and brand assets',
      'Services and contact details',
      'Domain / hosting access where you already have it',
    ],
    excludes: [
      'Domain and hosting',
      'Paid plugins and premium tools',
      'Third-party APIs',
      'Pages or features outside the agreed scope',
    ],
    notes: ['Scope and page count are confirmed in writing before work starts.'],
  },
  {
    id: 'advanced-website',
    name: 'Advanced Website',
    price: '₹30,000+',
    priceQualifier: 'Starting',
    billing: 'custom',
    billingLabel: 'Custom Quote',
    summary:
      'Larger websites and custom functionality, quoted against a defined feature list.',
    includes: [
      'Custom functionality and larger scope',
      'Feature set agreed in writing before work starts',
      'Custom quote based on the agreed scope',
    ],
    requirements: [
      'Agreed feature list and page structure',
      'Business information and content',
      'Logo, images and brand assets',
      'Domain / hosting access where you already have it',
    ],
    excludes: [
      'Domain',
      'Hosting',
      'Paid plugins',
      'Third-party APIs',
      'Premium tools / services',
    ],
    notes: ['Custom scope — the price is confirmed after the feature list is agreed.'],
  },
  {
    id: 'basic-landing-page',
    name: 'Basic Landing Page',
    price: '₹3,000',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Project',
    summary:
      'A focused single page built around one offer, with a clear call to action.',
    includes: [
      'Agreed single-page layout',
      'Business / offer information',
      'CTA',
      'Responsive design',
      'Basic conversion structure',
    ],
    requirements: [
      'Offer / product / service information',
      'Images or video where available',
      'Business information',
      'CTA and contact details',
      'Required access',
    ],
    excludes: [
      'Domain and hosting',
      'Advertising spend',
      'Advanced integrations',
      'Creative or video production unless separately quoted',
    ],
  },
  {
    id: 'conversion-focused-landing-page',
    name: 'Conversion-Focused Landing Page',
    price: '₹5,000',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Project',
    summary:
      'A campaign-ready page with a stronger structure, sharper sections and a deliberate CTA flow.',
    includes: [
      'Stronger conversion structure',
      'Structured page sections',
      'CTA flow',
      'Campaign-oriented setup',
      'Responsive design',
    ],
    requirements: [
      'Offer / product / service information',
      'Images or video where available',
      'Business information',
      'CTA and contact details',
      'Required access',
    ],
    excludes: [
      'Domain and hosting',
      'Advertising spend',
      'Creative or video production unless separately quoted',
      'Advanced integrations',
    ],
  },
  {
    id: 'advanced-landing-page',
    name: 'Advanced Landing Page',
    price: '₹8,000+',
    priceQualifier: 'Starting',
    billing: 'custom',
    billingLabel: 'Custom Quote',
    summary:
      'Custom-scope landing pages for larger campaigns and more complex offers.',
    includes: [
      'Custom landing page scope',
      'Structure and sections agreed in writing',
      'Campaign-oriented build',
    ],
    requirements: [
      'Offer / product / service information',
      'Images or video where available',
      'Business information',
      'CTA and contact details',
      'Required access',
    ],
    excludes: [
      'Domain and hosting',
      'Advertising spend',
      'Creative or video production unless separately quoted',
      'Advanced integrations',
    ],
    notes: ['Custom scope — confirmed before the quote is finalised.'],
  },
];

/* -------------------------------------------------------------------------- */
/* 5. Ads                                                                     */
/* -------------------------------------------------------------------------- */

export const adsPricingSteps = [
  {
    step: '01',
    title: 'Google Ads account setup',
    price: '₹1,000',
    billing: 'One-time',
    description:
      'Account creation and basic configuration. If your Google Ads account is already properly configured, the ₹1,000 setup fee is not charged.',
    detail:
      'Client controls and pays the Google advertising bill directly.',
  },
  {
    step: '02',
    title: 'Campaign / ad creation & launch',
    price: '₹1,000',
    billing: 'One-time per agreed campaign',
    description:
      'Targeting, ad copy, campaign settings and launch. Meta ad creation is also ₹1,000 per agreed campaign/ad setup.',
    detail:
      'Video creation is not included. New image/creative production is charged separately unless a package includes it.',
  },
  {
    step: '03',
    title: 'Management',
    price: '₹3,000',
    billing: 'Starting / month, paid in advance',
    description:
      'Monitoring, basic optimisation, budget checks, targeting and performance review.',
    detail:
      'Larger workloads are ₹4,000–₹5,000+ per month or a custom quote.',
  },
  {
    step: '04',
    title: 'Advertising spend',
    price: 'Paid directly',
    billing: 'Google / Meta',
    description:
      'Ad budget is paid by you to Google or Meta on your own billing method. It is not part of any Bishora fee.',
    detail:
      'Bishora does not pay your advertising spend from Bishora’s account, and spend is never presented as a Bishora service fee.',
  },
] as const;

export const adsExamples = [
  {
    id: 'example-google',
    title: 'Example A — Google Ads',
    lines: [
      'No Google Ads account yet: ₹1,000 account setup + ₹1,000 campaign/ad creation = ₹2,000 one-time.',
      'With management: ₹2,000 one-time + ₹3,000/month management (base).',
      'Google ad spend is paid directly by the client to Google.',
    ],
  },
  {
    id: 'example-meta-existing',
    title: 'Example B — Meta Ads (account already configured)',
    lines: [
      'Account is already properly configured, so the ₹1,000 setup fee is not charged.',
      'One campaign/ad setup: ₹1,000 one-time.',
      'With management: ₹1,000 one-time + ₹3,000/month management (base).',
      'Meta ad spend is paid directly by the client to Meta.',
    ],
  },
  {
    id: 'example-meta-new',
    title: 'Example C — New Meta setup + ad + management',
    lines: [
      'Meta setup: ₹1,000 one-time.',
      'Ad creation/launch: ₹1,000 one-time.',
      'Management: ₹3,000/month (base).',
      'Meta ad spend: separate, paid directly by the client.',
    ],
  },
] as const;

const ads: PricingItem[] = [
  {
    id: 'google-ads-account-setup',
    name: 'Google Ads Account Setup',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'A correctly structured Google Ads account, ready for campaigns and owned by you.',
    includes: [
      'Google Ads account setup',
      'Basic account configuration',
      'Business information configuration',
      'Basic billing setup guidance',
      'Basic campaign-ready configuration',
    ],
    requirements: [
      'Gmail / Google account',
      'Business information, name and contact details',
      'Website / landing page, if applicable',
      'Billing / payment method access required by Google',
      'Business location / target area',
      'Relevant products / services',
    ],
    excludes: [
      'Campaign creation',
      'Ad creation',
      'Ongoing management',
      'Google ad spend',
    ],
    notes: [
      'If your Google Ads account is already properly configured, the ₹1,000 account setup fee is not charged.',
      'You control and pay the Google advertising bill directly.',
    ],
  },
  {
    id: 'google-ads-campaign-creation',
    name: 'Google Ads Campaign / Ad Creation & Launch',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time per Campaign',
    summary:
      'One agreed campaign built, written and launched — targeting, ad copy and settings included.',
    includes: [
      'Campaign setup',
      'Relevant targeting / settings',
      'Ad copy',
      'Required campaign information',
      'Basic campaign configuration',
      'Ad setup',
      'Launch / live configuration',
    ],
    requirements: [
      'Business information',
      'Target service / product',
      'Target location',
      'Offer / details',
      'Website or landing page',
      'Required access',
      'Video creative if you want to use a video',
      'Existing images / brand assets if available',
    ],
    excludes: [
      'Advertising budget',
      'Video production',
      'Advanced graphic design unless separately quoted',
      'Ongoing campaign management',
    ],
    notes: [
      'Priced per agreed campaign / ad setup.',
      'If a new image is needed, creative production is charged separately unless a package includes it.',
    ],
  },
  {
    id: 'google-ads-management',
    name: 'Google Ads Management',
    price: '₹3,000',
    priceQualifier: 'Starting',
    priceUnit: '/month',
    billing: 'monthly',
    billingLabel: 'Monthly',
    summary:
      'Ongoing monitoring and basic optimisation of your Google Ads campaigns.',
    includes: [
      'Campaign monitoring',
      'Basic optimisation',
      'Budget monitoring',
      'Keyword / targeting review where applicable',
      'Ad performance review',
      'Basic changes / adjustments',
      'Campaign management',
    ],
    requirements: [
      'Access to your Google Ads account',
      'Business information and target services',
      'Target location and budget guidance',
      'Billing access where Google requires it',
    ],
    excludes: [
      'Google advertising spend',
      'Video production',
      'Advanced creative production unless separately quoted',
      'Website / landing page development unless separately purchased',
    ],
    notes: [
      'Paid in advance. Base model ≈ ₹100/day = ₹3,000 for 30 days.',
      '15-day option: ₹1,500 in advance for the first 15 days, ₹1,500 at the start of the next cycle.',
      'Larger workloads: ₹4,000–₹5,000+ per month or custom quote.',
    ],
  },
  {
    id: 'meta-ads-account-setup',
    name: 'Meta Ads Account / Business Setup',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'Meta Business and advertising setup so your Facebook and Instagram campaigns can run properly.',
    includes: [
      'Meta Business / Ads setup as applicable',
      'Basic account configuration',
      'Business information configuration',
      'Basic advertising setup',
      'Campaign-ready configuration',
    ],
    requirements: [
      'Gmail / email',
      'Existing Facebook / Instagram account where applicable',
      'Business information and details',
      'Phone number',
      'Website / landing page',
      'Billing / payment method access required by Meta',
      'Verification information / access where required',
    ],
    excludes: [
      'Campaign creation',
      'Ad creation',
      'Ongoing management',
      'Meta ad spend',
    ],
    notes: [
      'If your Meta advertising setup is already properly configured, the ₹1,000 setup fee is not charged.',
      'You control and pay Meta advertising spend directly.',
    ],
  },
  {
    id: 'meta-ad-creation',
    name: 'Meta Ad Creation & Launch',
    price: '₹1,000',
    billing: 'one-time',
    billingLabel: 'One-Time per Campaign',
    summary:
      'One agreed Meta campaign built and launched with audience, copy and settings handled.',
    includes: [
      'Campaign setup',
      'Audience / targeting configuration',
      'Ad copy',
      'Campaign settings',
      'Ad configuration',
      'Launch / live setup',
    ],
    requirements: [
      'Business information',
      'Product / service',
      'Target audience / location',
      'Offer',
      'Website / landing page',
      'Required account access',
      'Video if you want a video ad',
      'Existing brand assets if available',
    ],
    excludes: [
      'Advertising budget',
      'Video production',
      'Advanced graphic design unless separately quoted',
      'Ongoing campaign management',
    ],
    notes: [
      'Priced per agreed campaign / ad setup.',
      'If a new image or creative is needed, production is charged separately unless a package includes it.',
    ],
  },
  {
    id: 'meta-ads-management',
    name: 'Meta Ads Management',
    price: '₹3,000',
    priceQualifier: 'Starting',
    priceUnit: '/month',
    billing: 'monthly',
    billingLabel: 'Monthly',
    summary:
      'Ongoing monitoring, audience adjustments and basic optimisation for Meta campaigns.',
    includes: [
      'Campaign monitoring',
      'Performance review',
      'Basic optimisation',
      'Audience / targeting adjustments',
      'Budget monitoring',
      'Ad / campaign adjustments',
      'Basic management',
    ],
    requirements: [
      'Access to your Meta advertising account',
      'Business information and target audiences',
      'Target location and budget guidance',
      'Billing access where Meta requires it',
    ],
    excludes: [
      'Meta advertising spend',
      'Video production',
      'Advanced creative production unless separately quoted',
      'Website / landing page development unless separately purchased',
    ],
    notes: [
      'Paid in advance. Base model ≈ ₹100/day = ₹3,000 for 30 days.',
      '15-day option: ₹1,500 in advance for the first 15 days, ₹1,500 at the start of the next cycle.',
      'Larger workloads: ₹4,000–₹5,000+ per month or custom quote.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 6. Content & design                                                        */
/* -------------------------------------------------------------------------- */

const contentAndDesign: PricingItem[] = [
  {
    id: 'basic-ai-seo-content',
    name: 'Basic AI/SEO Content',
    price: '₹500',
    priceQualifier: 'Starting',
    priceUnit: '/content',
    billing: 'one-time',
    billingLabel: 'Per Content Piece',
    summary:
      'Short-form content written to an agreed brief and basic SEO direction.',
    includes: [
      'Content written to an agreed brief',
      'Basic SEO structure',
      'Agreed topic and length',
    ],
    requirements: [
      'Business information',
      'Topic / brief',
      'Target keywords (if you have them)',
      'Any brand tone or style notes',
    ],
    excludes: [
      'Design or image creation',
      'Publishing and ongoing management',
      'Revisions beyond the agreed number',
    ],
    notes: [
      'Final price depends on length, research, complexity, industry, expert input and number of revisions.',
    ],
  },
  {
    id: 'website-content',
    name: 'Website Content',
    price: '₹1,000',
    priceQualifier: 'Starting',
    priceUnit: '/page',
    billing: 'one-time',
    billingLabel: 'Per Page',
    summary:
      'Clear, structured copy for an agreed page of your website.',
    includes: [
      'Page copy written to an agreed brief',
      'Structured headings and sections',
      'Basic SEO structure',
    ],
    requirements: [
      'Business information',
      'Page purpose and outline',
      'Target keywords / location',
      'Brand tone or style notes',
    ],
    excludes: [
      'Design or development work',
      'Images and video',
      'Publishing and ongoing management',
    ],
    notes: [
      'Final price depends on length, research, complexity, industry and revisions.',
    ],
  },
  {
    id: 'seo-blog-article',
    name: 'SEO Blog Article',
    price: '₹1,000',
    priceQualifier: 'Starting',
    priceUnit: '/article',
    billing: 'one-time',
    billingLabel: 'Per Article',
    summary:
      'A research-backed article built around an agreed keyword and search intent.',
    includes: [
      'Article written to an agreed keyword',
      'Keyword-aware structure',
      'Agreed topic and length',
    ],
    requirements: [
      'Business information',
      'Target keyword and topic',
      'Audience and location',
      'Any brand tone or style notes',
    ],
    excludes: [
      'Design or image creation',
      'Publishing and ongoing management',
      'Link building',
    ],
    notes: [
      'Final price depends on length, research, complexity, industry and revisions.',
    ],
  },
  {
    id: 'basic-social-creative',
    name: 'Basic Social Creative',
    price: '₹500',
    priceQualifier: 'Starting',
    priceUnit: '/design',
    billing: 'one-time',
    billingLabel: 'Per Design',
    summary:
      'A simple, on-brand graphic for an agreed post or campaign.',
    includes: [
      'One agreed design',
      'Your logo and brand colours',
      'Basic copy placement',
    ],
    requirements: [
      'Logo and brand assets',
      'Offer / message text',
      'Preferred size or platform',
    ],
    excludes: [
      'Video production',
      'Copywriting beyond basic placement',
      'Multiple concept rounds beyond the agreed scope',
    ],
  },
  {
    id: 'business-promotional-creative',
    name: 'Business/Promotional Creative',
    price: '₹750',
    priceQualifier: 'Starting',
    priceUnit: '/design',
    billing: 'one-time',
    billingLabel: 'Per Design',
    summary:
      'A promotional creative for an offer, launch or seasonal campaign.',
    includes: [
      'One agreed promotional design',
      'Offer / campaign messaging layout',
      'Brand-consistent styling',
    ],
    requirements: [
      'Logo and brand assets',
      'Offer details and terms',
      'Preferred size or platform',
    ],
    excludes: [
      'Video production',
      'Copywriting beyond basic placement',
      'Multiple concept rounds beyond the agreed scope',
    ],
  },
  {
    id: 'advanced-creative',
    name: 'Advanced Creative',
    price: '₹1,500+',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time',
    summary:
      'More involved creative work, quoted against the agreed brief.',
    includes: [
      'Advanced creative scope',
      'Agreed formats and sizes',
      'Brand-consistent styling',
    ],
    requirements: [
      'Logo and brand assets',
      'Campaign brief and messaging',
      'Required formats and sizes',
    ],
    excludes: [
      'Video production',
      'Paid ad spend',
      'Ongoing creative management',
    ],
    notes: [
      'Advertising campaign pricing does not automatically include new creative production.',
      'If new image/video/advanced creative is needed, it is quoted separately unless a package explicitly includes it.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 7. Email marketing                                                         */
/* -------------------------------------------------------------------------- */

const emailMarketing: PricingItem[] = [
  {
    id: 'email-setup',
    name: 'Email Setup',
    price: '₹1,500',
    priceQualifier: 'Starting',
    billing: 'one-time',
    billingLabel: 'One-Time Setup',
    summary:
      'Basic email marketing configuration with your business details and sender identity.',
    includes: [
      'Basic email marketing system configuration',
      'Business information setup',
      'Basic sender configuration where supported',
    ],
    requirements: [
      'Email platform account (or access)',
      'Business information',
      'Sender name and reply-to address',
      'Audience / list details if available',
    ],
    excludes: [
      'Third-party email platform charges',
      'Campaign creation',
      'Monthly management',
    ],
    notes: ['Platform subscription charges are separate.'],
  },
  {
    id: 'email-campaign-setup',
    name: 'Email Campaign Setup',
    price: '₹2,000',
    priceQualifier: 'Starting',
    priceUnit: 'per campaign',
    billing: 'one-time',
    billingLabel: 'One-Time per Campaign',
    summary:
      'One email campaign configured, written and ready to send.',
    includes: [
      'Campaign configuration',
      'Basic email copy / structure',
      'Audience / list setup guidance',
    ],
    requirements: [
      'Email platform access',
      'Audience / list details',
      'Offer and message',
      'Brand assets',
    ],
    excludes: [
      'Third-party email platform charges',
      'Ongoing management',
      'Advanced design or video production',
    ],
    notes: ['Platform subscription charges are separate.'],
  },
  {
    id: 'email-marketing-management',
    name: 'Email Marketing Management',
    price: '₹5,000',
    priceQualifier: 'Starting',
    priceUnit: '/month',
    billing: 'monthly',
    billingLabel: 'Monthly',
    summary:
      'Ongoing email marketing management, scheduling and basic reporting.',
    includes: [
      'Ongoing email marketing management',
      'Campaign scheduling and monitoring',
      'Basic performance reporting',
    ],
    requirements: [
      'Email platform access',
      'Audience / list details',
      'Campaign calendar',
      'Brand assets',
    ],
    excludes: [
      'Third-party email platform charges',
      'Work outside the agreed monthly scope',
    ],
    notes: [
      'Third-party email platform charges are separate.',
      'Management is billed monthly, in advance.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* 8. Business packages                                                       */
/* -------------------------------------------------------------------------- */

export const businessBundles: PricingItem[] = [
  {
    id: 'starter-digital-setup',
    name: 'Starter Digital Setup',
    price: '₹2,999',
    priceQualifier: 'Starting',
    billing: 'bundle',
    billingLabel: 'One-Time Bundle',
    summary:
      'A complete starting point for small local businesses that need to exist properly online.',
    includesLabel: 'Possible combination',
    includes: [
      'Facebook Business Page setup',
      'Instagram Business setup',
      'Google Business Profile setup',
      'WhatsApp Business setup',
    ],
    requirements: [
      'Business name, category and description',
      'Business phone, address / service area and hours',
      'Logo and cover images, if available',
      'Account access, OTP / verification when required',
    ],
    excludes: [
      'Ongoing posting, reels or stories',
      'Social media management',
      'Monthly management fees',
      'Advertising spend',
    ],
    notes: [
      'The exact bundle scope is shown and confirmed before checkout or quote.',
      'Setup only — ongoing management and ad spend are not included.',
    ],
  },
  {
    id: 'local-business-growth-setup',
    name: 'Local Business Growth Setup',
    price: '₹5,999',
    priceQualifier: 'Starting',
    billing: 'bundle',
    billingLabel: 'One-Time Bundle',
    summary:
      'Built for restaurants, cafés, dhabas, salons, clinics, shops and local service businesses.',
    includesLabel: 'Possible combination',
    includes: [
      'Google Business Profile setup',
      'Instagram setup',
      'Facebook setup',
      'WhatsApp setup',
      'Basic WhatsApp automation',
      'Basic local presence',
      'Website / landing-page consultation',
    ],
    requirements: [
      'Business name, category and description',
      'Business phone, address / service area and hours',
      'Logo and images, if available',
      'FAQs and business information for automation',
      'Account access, OTP / verification when required',
    ],
    excludes: [
      'Ongoing social media management',
      'Regular posts, reels or stories',
      'Monthly management fees',
      'Advertising spend',
    ],
    notes: [
      'Exact scope is confirmed before work starts.',
      'Setup only — ongoing management and ad spend are not included.',
    ],
  },
  {
    id: 'growth-business-package',
    name: 'Growth Business Package',
    price: '₹10,000+',
    priceQualifier: 'Starting',
    billing: 'bundle',
    billingLabel: 'Bundle · Custom Scope',
    summary:
      'A joined-up setup across your website, profile, social presence and first ad campaigns.',
    includesLabel: 'Possible combination',
    includes: [
      'Website',
      'SEO',
      'Google Business Profile',
      'Social setup',
      'WhatsApp',
      'Ads setup',
      'Landing page',
      'Lead flow',
    ],
    requirements: [
      'Business information and offer details',
      'Logo, images and brand assets',
      'Website or landing-page requirements',
      'Access to the accounts being set up',
    ],
    excludes: [
      'Ongoing monthly management unless quoted',
      'Google / Meta advertising spend',
      'Video production unless explicitly included',
    ],
    notes: [
      'Custom scope — confirmed before work starts.',
      'Ad spend is paid directly to Google/Meta and is not part of this price.',
    ],
  },
  {
    id: 'premium-business-package',
    name: 'Premium Business Package',
    price: '₹30,000+',
    priceQualifier: 'Starting',
    billing: 'bundle',
    billingLabel: 'Bundle · Custom Quote',
    summary:
      'A full growth system: professional website, SEO, ads, landing pages and lead tracking.',
    includesLabel: 'Possible combination',
    includes: [
      'Professional website',
      'SEO',
      'Local SEO',
      'Google Business Profile',
      'Google Ads',
      'Meta Ads',
      'Landing pages',
      'WhatsApp automation',
      'Lead-generation system',
      'Analytics / tracking',
      'Conversion optimisation',
    ],
    requirements: [
      'Business information, offers and target locations',
      'Brand assets and content inputs',
      'Access to accounts and platforms',
      'Billing access for Google / Meta ad spend',
    ],
    excludes: [
      'Google / Meta advertising spend',
      'Third-party platform subscriptions',
      'Video production unless explicitly included',
      'Ongoing monthly management unless quoted',
    ],
    notes: [
      'Custom quote based on scope.',
      'Advertising spend is separate and paid directly to Google/Meta.',
    ],
  },
];

/* -------------------------------------------------------------------------- */
/* Page structure                                                             */
/* -------------------------------------------------------------------------- */

export const pricingCategories: PricingCategory[] = [
  {
    id: 'digital-setup',
    title: 'Digital Setup',
    eyebrow: '01 — Digital Setup',
    description:
      'One-time setup of the profiles your customers expect to find. Setup only — no posting and no ongoing management.',
    note: 'A setup fee is charged once. It never includes daily posting, reels, stories or account management.',
    items: digitalSetup,
  },
  {
    id: 'whatsapp-solutions',
    title: 'WhatsApp Solutions',
    eyebrow: '02 — WhatsApp',
    description:
      'From a basic business profile to automated replies and campaign work.',
    note: 'WhatsApp API, platform subscriptions and message/template charges are separate where applicable.',
    items: whatsappSolutions,
  },
  {
    id: 'seo-local-seo',
    title: 'SEO & Local SEO',
    eyebrow: '03 — SEO & Local SEO',
    description:
      'A one-time SEO foundation, ongoing monthly SEO, and local visibility work around your Google profile.',
    note: 'No ranking is guaranteed on any SEO service. Monthly work is billed in advance.',
    items: seoAndLocal,
  },
  {
    id: 'website-landing-pages',
    title: 'Website & Landing Pages',
    eyebrow: '04 — Websites & Landing Pages',
    description:
      'Business websites and campaign landing pages, priced by agreed scope.',
    note: 'Domain, hosting, paid plugins and third-party services are separate where applicable.',
    items: websitesAndLanding,
  },
  {
    id: 'ads',
    title: 'Ads',
    eyebrow: '05 — Google & Meta Ads',
    description:
      'Account setup, campaign creation and management are three separate charges. Advertising spend is always separate again.',
    note: 'You pay Google/Meta directly for ad spend. Advertising budget is never part of a Bishora fee.',
    items: ads,
  },
  {
    id: 'content-design',
    title: 'Content & Design',
    eyebrow: '06 — Content & Design',
    description:
      'Copy and creative produced to an agreed brief, priced per piece.',
    note: 'Ad campaign pricing does not automatically include new creative production. Video is always quoted separately unless a package explicitly includes it.',
    items: contentAndDesign,
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    eyebrow: '07 — Email',
    description:
      'Email setup, one-off campaigns and ongoing email management.',
    note: 'Third-party email platform charges are separate.',
    items: emailMarketing,
  },
  {
    id: 'business-packages',
    title: 'Business Packages',
    eyebrow: '08 — Business Packages',
    description:
      'Bundled setups for businesses that want several foundations built together.',
    note: 'Every package is a starting price. The exact scope is confirmed before work starts, and ongoing management and ad spend are not included unless your written scope says so.',
    items: businessBundles,
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* -------------------------------------------------------------------------- */

export const pricingFaqs = [
  {
    question: 'What is the difference between setup and ongoing management?',
    answer:
      'Setup is a one-time charge for building or configuring something — a Facebook Page, a Google Business Profile, a campaign, a website. It does not include ongoing management. For example, Facebook Business Page Setup at ₹1,000 covers the page setup only: it does not include posts, reels, stories, a content calendar or daily page management. Ongoing management is a separate monthly service, charged in advance.',
  },
  {
    question: 'Is Google or Meta advertising spend included in the price?',
    answer:
      'No. Advertising spend is always separate. You pay Google or Meta directly using your own billing method. Bishora’s fee covers setup, campaign creation and/or management — never your ad budget. For example, a ₹3,000/month management fee does not include a ₹500/day ad budget; that ₹500/day is paid by you to Google or Meta.',
  },
  {
    question: 'Are creative, image or video charges included?',
    answer:
      'Ad creation includes campaign setup and ad copy, but not new creative production. If Bishora needs to create a new image or advanced creative, that is quoted separately unless a package explicitly includes it. Video production is never included in the ₹1,000 campaign/ad creation fee. Creative work is priced per design, e.g. ₹500 basic, ₹750 promotional, ₹1,500+ advanced.',
  },
  {
    question: 'Are domain, hosting, WhatsApp API and other third-party charges included?',
    answer:
      'No. Domain, hosting, paid plugins, API/platform subscriptions, WhatsApp API and message/template charges, bulk campaign tools and email platform fees are separate unless a written custom quote explicitly includes them. Bishora never represents third-party costs as Bishora’s service fee.',
  },
  {
    question: 'How and when are monthly fees paid?',
    answer:
      'Monthly management is paid in advance. For the base ₹3,000/month model, that is approximately ₹100/day, equivalent to ₹3,000 for 30 days. If you prefer 15-day cycles, ₹1,500 is paid in advance for the first 15 days and ₹1,500 before or at the start of the next 15-day cycle. The next cycle does not start until the applicable payment is received.',
  },
  {
    question: 'I already have Google Ads or Meta Ads set up — do I still pay the setup fee?',
    answer:
      'No. If your Google Ads account, or your Meta advertising setup, is already properly configured, the ₹1,000 account setup fee is not charged. Campaign/ad creation is still ₹1,000 per agreed campaign/ad setup, and ongoing management is quoted separately.',
  },
  {
    question: 'Why do some prices say “Starting” or “Custom Quote”?',
    answer:
      'Because the final price depends on scope — the number of pages, the number of campaigns, competition, content volume, integrations and workload. The figures shown are starting points taken directly from Bishora’s pricing master. We confirm the exact scope, deliverables and price in writing before any work begins, so there are no surprises.',
  },
];
