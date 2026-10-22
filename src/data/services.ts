import type { LucideIcon } from 'lucide-react';
import {
  Search,
  MessageSquareText,
  Sparkles,
  MapPin,
  Megaphone,
  MonitorSmartphone,
  LayoutTemplate,
  Share2,
  MessageCircle,
  Mail,
  PenTool,
  Palette,
} from 'lucide-react';

export type ServiceFeature = {
  title: string;
  description: string;
};

export type Service = {
  /** URL-friendly identifier, also used as the React key and anchor id. */
  slug: string;
  /** Full service name as it appears in headings. */
  name: string;
  /** Short label for cards and tags. */
  shortName: string;
  /** Small label above the service name. */
  eyebrow: string;
  /** One-paragraph explanation. */
  summary: string;
  /** The building blocks of the service. */
  features: ServiceFeature[];
  /** Practical outputs the client receives. */
  includes: string[];
  /** Icon used across cards and lists. */
  icon: LucideIcon;
};

/**
 * The final approved service structure: twelve main services.
 *
 * Sub-services live inside their parent service's `features` list so that
 * Google Ads, Facebook Ads, Instagram Ads and Retargeting stay part of Paid
 * Advertising, CRO stays part of Landing Page Design & Development, and the
 * SEO specialisms stay part of SEO.
 */
export const services: Service[] = [
  {
    slug: 'seo',
    name: 'SEO',
    shortName: 'SEO',
    eyebrow: 'Search Engine Optimization',
    summary:
      'We make your website easier to understand, easier to trust and easier to find — so the people already searching for your services land on your site first.',
    features: [
      {
        title: 'Technical SEO',
        description:
          'Site speed, mobile usability, crawlability, indexing and structured data are cleaned up so search engines can read your site without obstacles.',
      },
      {
        title: 'On-Page SEO',
        description:
          'Every important page is tuned for the right keywords, with clear headings, useful content and metadata that matches how people actually search.',
      },
      {
        title: 'Off-Page SEO',
        description:
          'Authority is built over time through relevant mentions, citations and links from sources your customers and search engines already trust.',
      },
      {
        title: 'Local SEO',
        description:
          'Location pages, local citations and service areas are aligned so your business ranks in the areas you actually serve.',
      },
      {
        title: 'E-commerce SEO',
        description:
          'Category and product pages are structured so shoppers can find individual products, with clean URLs, internal linking and product-level metadata.',
      },
      {
        title: 'International SEO',
        description:
          'For businesses selling beyond one region: hreflang, country targeting and localised page structure so each market sees the right version.',
      },
      {
        title: 'Competitor Analysis',
        description:
          'We review who is already ranking for your services, why they win and which gaps are realistic for your business to close first.',
      },
    ],
    includes: [
      'Technical SEO audit and fixes',
      'Keyword and competitor research',
      'On-page optimisation for priority pages',
      'Content briefs and page rewrites',
      'Local SEO and citation clean-up',
      'Authority-building recommendations',
      'Monthly performance reporting',
    ],
    icon: Search,
  },
  {
    slug: 'aeo',
    name: 'AEO',
    shortName: 'AEO',
    eyebrow: 'Answer Engine Optimization',
    summary:
      'More searches now end in a direct answer instead of a list of links. AEO makes your business the source those answers are built from — in featured snippets, voice results and “people also ask” boxes.',
    features: [
      {
        title: 'Answer-ready content structure',
        description:
          'Pages are organised around real questions, with short direct answers followed by the detail, so answer engines can lift a clear response.',
      },
      {
        title: 'Featured snippet targeting',
        description:
          'We identify the snippets your competitors hold and format content — definitions, steps, tables and lists — to compete for them.',
      },
      {
        title: 'Voice search optimisation',
        description:
          'Content is written the way people speak queries aloud, with conversational phrasing and local context where it matters.',
      },
      {
        title: 'FAQ and Q&A optimisation',
        description:
          'Genuine customer questions are answered on the page in a structured format that answer engines can read and reuse.',
      },
      {
        title: 'Structured data for answers',
        description:
          'FAQ, HowTo, LocalBusiness and related schema are implemented correctly so answer surfaces can confidently interpret your content.',
      },
      {
        title: 'Answer visibility tracking',
        description:
          'We monitor which questions you appear for and refine the pages that are close to winning an answer box.',
      },
    ],
    includes: [
      'Answer opportunity audit',
      'Question and intent research',
      'FAQ and Q&A content',
      'Schema markup implementation',
      'Snippet formatting recommendations',
      'Monthly answer visibility reporting',
    ],
    icon: MessageSquareText,
  },
  {
    slug: 'geo',
    name: 'GEO',
    shortName: 'GEO',
    eyebrow: 'Generative Engine Optimization',
    summary:
      'AI assistants now answer buying questions directly. GEO makes sure your business is described accurately, cited as a source and included when generative engines summarise your market.',
    features: [
      {
        title: 'AI visibility audit',
        description:
          'We check how AI assistants currently describe your business, your competitors and your category — and where the picture is wrong or missing.',
      },
      {
        title: 'Entity and brand clarity',
        description:
          'Your business name, services, location and positioning are stated consistently so AI systems can identify you as a distinct, credible entity.',
      },
      {
        title: 'Citation-worthy content',
        description:
          'Content is written with clear facts, original explanations and citable detail — the kind of material generative engines prefer to reference.',
      },
      {
        title: 'Structured data for AI systems',
        description:
          'Schema and clean page structure make your services, areas served and contact details machine-readable rather than implied.',
      },
      {
        title: 'Third-party consistency',
        description:
          'Directories, profiles and mentions are aligned so the information AI models find about you agrees with your own website.',
      },
      {
        title: 'AI answer monitoring',
        description:
          'We track how your business appears in generative answers over time and adjust the content that is being missed or misrepresented.',
      },
    ],
    includes: [
      'AI visibility baseline audit',
      'Brand and entity fact sheet',
      'Content built for AI citations',
      'Structured data implementation',
      'Consistency checks across sources',
      'Ongoing AI answer monitoring',
    ],
    icon: Sparkles,
  },
  {
    slug: 'google-business-profile',
    name: 'Google Business Profile Optimization',
    shortName: 'Google Business Profile',
    eyebrow: 'Local Visibility',
    summary:
      'Your Google Business Profile is often the first thing a local customer sees. We optimise it so the right people in your area find you, call you and trust you.',
    features: [
      {
        title: 'Profile optimisation',
        description:
          'Categories, services, products, photos, description and attributes are fully completed so the profile works as a real sales tool.',
      },
      {
        title: 'Local rankings',
        description:
          'We work on the signals that move a business up the local results — relevance, distance and prominence — for the searches that matter.',
      },
      {
        title: 'Business information consistency',
        description:
          'Name, address, phone, hours, categories and services are accurate and consistent everywhere your business appears online.',
      },
      {
        title: 'Reviews strategy',
        description:
          'A simple, honest system for asking customers for reviews and responding to them so your reputation builds over time.',
      },
      {
        title: 'Local visibility',
        description:
          'Posts, photos, Q&A and products keep the profile active, which helps your business stand out in maps and local search.',
      },
    ],
    includes: [
      'Full profile setup and optimisation',
      'Service area and category strategy',
      'Photo and post scheduling',
      'Review request and response system',
      'Citation and NAP consistency clean-up',
      'Local ranking tracking',
    ],
    icon: MapPin,
  },
  {
    slug: 'paid-advertising',
    name: 'Paid Advertising',
    shortName: 'Paid Advertising',
    eyebrow: 'Paid Search & Social',
    summary:
      'Paid campaigns on Google, Facebook and Instagram, run as one strategy instead of disconnected accounts — so budget goes to the channels and audiences that actually produce enquiries.',
    features: [
      {
        title: 'Google Ads',
        description:
          'Search campaigns built around high-intent searches, with tight keyword groups, negative lists and budgets directed at what converts.',
      },
      {
        title: 'Facebook Ads',
        description:
          'Audience targeting, lead forms and messaging campaigns that reach people who match your best existing customers.',
      },
      {
        title: 'Instagram Ads',
        description:
          'Creative-led campaigns using the formats the platform rewards — reels, stories and carousels — matched to a clear offer.',
      },
      {
        title: 'Remarketing / Retargeting',
        description:
          'Website visitors, video viewers and previous leads are re-engaged with the right message at the right moment instead of being lost.',
      },
      {
        title: 'Conversion tracking',
        description:
          'Calls, forms, messages and purchases are tracked properly, so decisions are based on real enquiries rather than clicks.',
      },
      {
        title: 'Budget and bid management',
        description:
          'Spend is reviewed and reallocated continuously between campaigns and channels as the data comes in.',
      },
      {
        title: 'Landing page alignment',
        description:
          'Ads and the pages they point to are matched on offer and message, because a mismatch wastes most of an advertising budget.',
      },
    ],
    includes: [
      'Channel and budget plan',
      'Campaign build across selected platforms',
      'Keyword and audience research',
      'Ad creative direction and copy',
      'Conversion tracking setup',
      'Retargeting audiences and refresh',
      'Ongoing optimisation and reporting',
    ],
    icon: Megaphone,
  },
  {
    slug: 'website-development',
    name: 'Website Development',
    shortName: 'Website Development',
    eyebrow: 'Websites',
    summary:
      'Fast, professional websites built to make a good first impression and turn visitors into enquiries — not just look good on a screen.',
    features: [
      {
        title: 'Business websites',
        description:
          'Clear site structures built around your services, your location and the questions customers ask before they enquire.',
      },
      {
        title: 'Mobile responsive design',
        description:
          'Every page is designed mobile-first, because most local customers will find you on a phone.',
      },
      {
        title: 'SEO-friendly structure',
        description:
          'Clean URLs, logical headings, metadata, image optimisation and speed — all built in from the start rather than patched on later.',
      },
      {
        title: 'Conversion-focused pages',
        description:
          'Each page has a purpose: explain the offer, remove doubt and make getting in touch the obvious next step.',
      },
      {
        title: 'Fast performance',
        description:
          'Optimised images, minimal scripts and sensible code so pages load quickly on mobile connections.',
      },
    ],
    includes: [
      'Site structure and page plan',
      'Custom design and build',
      'Mobile-first responsive layout',
      'Technical SEO foundations',
      'Contact forms and call-to-action setup',
      'Analytics and search console',
    ],
    icon: MonitorSmartphone,
  },
  {
    slug: 'landing-page-design',
    name: 'Landing Page Design & Development',
    shortName: 'Landing Pages',
    eyebrow: 'Conversion-Focused Pages',
    summary:
      'Focused pages built for one job: turning ad clicks and campaign traffic into enquiries. Every section is written, designed and tested to move a visitor towards the next step.',
    features: [
      {
        title: 'Landing page strategy',
        description:
          'We start from the campaign, the audience and the single action you want — then decide what the page must prove to earn that action.',
      },
      {
        title: 'Copy and layout',
        description:
          'Conversion copy and a clear visual hierarchy answer the visitor’s real objections in the order they arise.',
      },
      {
        title: 'CRO (Conversion Rate Optimization)',
        description:
          'CRO is built into every page: we test headlines, offers, forms and layout to find what actually lifts enquiries rather than guessing.',
      },
      {
        title: 'A/B testing',
        description:
          'Meaningful variations are tested one at a time, so improvements are based on evidence instead of opinion.',
      },
      {
        title: 'Mobile-first build',
        description:
          'Most paid traffic arrives on a phone, so the mobile experience is designed first and the desktop version follows.',
      },
      {
        title: 'Speed and tracking',
        description:
          'Pages load quickly and every form, call button and conversion is tracked so results can be attributed properly.',
      },
    ],
    includes: [
      'Campaign and audience review',
      'Page structure and wireframe',
      'Conversion copywriting',
      'Custom design and build',
      'CRO testing plan',
      'Tracking and form setup',
    ],
    icon: LayoutTemplate,
  },
  {
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    shortName: 'Social Media',
    eyebrow: 'Social Presence',
    summary:
      'A consistent, useful social presence that makes your business look active, approachable and worth recommending — with content planned rather than improvised.',
    features: [
      {
        title: 'Content strategy',
        description:
          'A simple plan of what to post, where and why, based on what your customers care about rather than what is easy to post.',
      },
      {
        title: 'Social media management',
        description:
          'Publishing, scheduling and day-to-day handling of your profiles across the platforms your customers actually use.',
      },
      {
        title: 'Creative planning',
        description:
          'A monthly creative calendar with the concepts, formats and offers lined up before production starts.',
      },
      {
        title: 'Audience engagement',
        description:
          'Comments, messages and reviews are answered as part of the service, because that is where trust is actually built.',
      },
      {
        title: 'Brand presence',
        description:
          'A consistent look and tone across your website, profiles and ads so your business is instantly recognisable.',
      },
    ],
    includes: [
      'Channel selection and strategy',
      'Monthly content calendar',
      'Creative concepts and production',
      'Scheduling and publishing',
      'Community management and engagement',
      'Monthly performance snapshot',
    ],
    icon: Share2,
  },
  {
    slug: 'whatsapp-marketing',
    name: 'WhatsApp Marketing',
    shortName: 'WhatsApp Marketing',
    eyebrow: 'Direct Messaging',
    summary:
      'WhatsApp is where many local customers prefer to talk. We set up your business profile and message flows so enquiries are answered quickly and updates reach people who already know you.',
    features: [
      {
        title: 'Business profile setup',
        description:
          'A complete WhatsApp Business profile with accurate details, hours, catalogue and greeting so customers know they are talking to a real business.',
      },
      {
        title: 'Broadcast campaigns',
        description:
          'Opted-in customers receive offers, updates and reminders through structured broadcasts instead of ad-hoc group messages.',
      },
      {
        title: 'Catalogue and quick replies',
        description:
          'Products, services and answers to common questions are set up so staff can respond quickly and consistently.',
      },
      {
        title: 'Click-to-WhatsApp ads',
        description:
          'Paid campaigns that open a conversation directly, turning ad interest into a chat while intent is still high.',
      },
      {
        title: 'Welcome and follow-up flows',
        description:
          'Simple automated greetings and follow-ups make sure no enquiry is left unanswered or forgotten.',
      },
      {
        title: 'Opt-in list building',
        description:
          'Customers are invited to opt in properly, so your audience is permission-based and sustainable.',
      },
      {
        title: 'Campaign reporting',
        description:
          'Delivery, replies and conversions are reviewed so messaging improves instead of repeating the same broadcast.',
      },
    ],
    includes: [
      'Business profile and greeting setup',
      'Broadcast campaign planning',
      'Message templates and quick replies',
      'Catalogue and product setup',
      'Click-to-WhatsApp ad integration',
      'Opt-in and list management guidance',
      'Performance reporting',
    ],
    icon: MessageCircle,
  },
  {
    slug: 'email-marketing',
    name: 'Email Marketing',
    shortName: 'Email Marketing',
    eyebrow: 'Owned Audience',
    summary:
      'Email is the one channel you own. We build a clean list and send campaigns that people actually open — offers, updates and follow-ups that bring customers back.',
    features: [
      {
        title: 'List building and segmentation',
        description:
          'Sign-up points, lead magnets and clean segmentation so the right message reaches the right group of customers.',
      },
      {
        title: 'Campaign design',
        description:
          'Templates designed for real inboxes — readable on a phone, on-brand and focused on a single action.',
      },
      {
        title: 'Welcome and nurture sequences',
        description:
          'A structured follow-up that introduces the business, answers common questions and keeps interest warm.',
      },
      {
        title: 'Promotions and offers',
        description:
          'Seasonal and service-led campaigns planned ahead, with clear offers and honest deadlines.',
      },
      {
        title: 'Deliverability setup',
        description:
          'Sending domain, authentication and list hygiene are handled so campaigns reach inboxes rather than spam folders.',
      },
      {
        title: 'Reporting and list hygiene',
        description:
          'Opens, clicks and conversions are reviewed, and inactive contacts are cleaned so list quality does not decay.',
      },
    ],
    includes: [
      'List audit and segmentation',
      'Campaign template design',
      'Welcome and follow-up sequences',
      'Monthly campaign calendar',
      'Deliverability and authentication setup',
      'Open, click and conversion reporting',
    ],
    icon: Mail,
  },
  {
    slug: 'content-creation',
    name: 'Content Creation',
    shortName: 'Content Creation',
    eyebrow: 'Words & Ideas',
    summary:
      'Content that explains what you do clearly and gives customers a reason to choose you — written for your website, your social profiles and your campaigns.',
    features: [
      {
        title: 'Copywriting',
        description:
          'Website pages, service descriptions, ads and profiles written in plain language that a real customer would understand and act on.',
      },
      {
        title: 'Social Content',
        description:
          'Posts, captions and short-form ideas built around the questions, objections and interests of your actual audience.',
      },
      {
        title: 'AI-assisted Content',
        description:
          'AI is used to speed up drafting and research, then every piece is edited by a person for accuracy, tone and brand voice.',
      },
      {
        title: 'Content planning',
        description:
          'A practical calendar so publishing is consistent rather than a burst of activity followed by silence.',
      },
      {
        title: 'SEO content briefs',
        description:
          'Briefs that tell a writer exactly what a page must cover, which questions it must answer and how it should be structured.',
      },
      {
        title: 'Editing and brand voice',
        description:
          'Existing content is tightened and aligned so everything sounds like one business across every channel.',
      },
    ],
    includes: [
      'Content plan and calendar',
      'Website and service page copy',
      'Social post copy and captions',
      'Ad and email copy',
      'SEO content briefs',
      'Editing and brand voice guidelines',
    ],
    icon: PenTool,
  },
  {
    slug: 'graphic-design',
    name: 'Graphic Design',
    shortName: 'Graphic Design',
    eyebrow: 'Visual Identity',
    summary:
      'Clean, consistent visuals that make your business look established — across your website, social profiles, ads and printed materials.',
    features: [
      {
        title: 'Brand visuals',
        description:
          'Logo usage, colour, type and layout guidance so every piece of design looks like it belongs to the same business.',
      },
      {
        title: 'Social media graphics',
        description:
          'Reusable templates for posts, stories and carousels that keep your feed consistent without starting from scratch each time.',
      },
      {
        title: 'Ad creatives',
        description:
          'Visuals designed for paid campaigns — built around the offer, sized correctly and tested in variations.',
      },
      {
        title: 'Landing page and website graphics',
        description:
          'Supporting visuals, icons and section graphics that make pages easier to scan and understand.',
      },
      {
        title: 'Print and offline materials',
        description:
          'Business cards, flyers, signage and menus designed to match your online presence.',
      },
      {
        title: 'Design consistency',
        description:
          'Files, templates and assets are organised so future design work stays on-brand as the business grows.',
      },
    ],
    includes: [
      'Visual direction and moodboard',
      'Social media templates',
      'Ad creative sets',
      'Landing page and website graphics',
      'Print-ready files',
      'Organised brand asset library',
    ],
    icon: Palette,
  },
];

/** Service names used to populate the "service interested in" dropdown. */
export const serviceNames = services.map((service) => service.name);
