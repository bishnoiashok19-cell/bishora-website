import type { LucideIcon } from 'lucide-react';
import {
  MonitorSmartphone,
  PenTool,
  Share2,
  MapPin,
  ShoppingCart,
  Globe,
  LineChart,
} from 'lucide-react';

export type SeoSubServiceSection = {
  /** Section heading shown as an H3 within the page. */
  title: string;
  /** Short explanatory paragraph. */
  body: string;
  /** Optional supporting points. */
  bullets?: string[];
};

export type SeoSubServiceFaq = {
  question: string;
  answer: string;
};

export type SeoSubService = {
  /** URL segment, also used as the React key. */
  slug: string;
  /** Full service name, used as the page H1. */
  name: string;
  /** Short label used in cards and links. */
  shortName: string;
  /** Optional casing override for headings that embed the service name in a sentence. */
  headingName?: string;
  /** One-line description kept identical to the SEO overview card copy. */
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  /** Opening paragraph on the dedicated page. */
  intro: string;
  /** Plain answer to "what does this service mean?". */
  whatItIs: string;
  /** Plain answer to "why does this matter?". */
  whyItMatters: string;
  /** Detailed service-specific topics, kept as sections rather than pages. */
  sections: SeoSubServiceSection[];
  /** What Bishora includes in the engagement. */
  includes: string[];
  /** Key activities and tangible deliverables. */
  deliverables: string[];
  /** Who the service is a good fit for. */
  suitableFor: string[];
  faqs: SeoSubServiceFaq[];
  icon: LucideIcon;
  /** Slugs of related SEO sub-services. */
  related: string[];
};

/** Builds the canonical in-site path for an SEO sub-service. */
export const seoSubServicePath = (slug: string): string => `/services/seo/${slug}`;

/**
 * The seven SEO specialisms that sit under the SEO service.
 *
 * These are the only dedicated SEO sub-service pages. Smaller topics — site
 * speed, metadata, headings, internal linking and so on — are covered as
 * sections inside these pages rather than as separate URLs.
 */
export const seoSubServices: SeoSubService[] = [
  {
    slug: 'technical-seo',
    name: 'Technical SEO',
    shortName: 'Technical SEO',
    headingName: 'technical SEO',
    cardDescription:
      'Site speed, mobile usability, crawlability, indexing and structured data are cleaned up so search engines can read your site without obstacles.',
    metaTitle: 'Technical SEO Services | Audits & Fixes | Bishora',
    metaDescription:
      'Technical SEO audits and fixes for local businesses: site speed, Core Web Vitals, crawlability, indexing, canonicals, structured data and ongoing monitoring.',
    keywords: [
      'technical SEO',
      'technical SEO audit',
      'core web vitals',
      'crawlability',
      'indexing issues',
      'structured data',
    ],
    intro:
      'Technical SEO is the work that removes the barriers between your website and search engines. If a page cannot be crawled, rendered or indexed properly, no amount of content or linking will help it rank.',
    whatItIs:
      'Technical SEO covers everything that affects how search engines discover, read and store your pages: server response, page speed, mobile rendering, URL handling, duplicate content signals, canonical tags, sitemaps and structured data. It is the foundation the rest of your SEO sits on.',
    whyItMatters:
      'Search engines only rank pages they can access and understand. Common technical problems — slow-loading pages, blocked resources, broken redirects, conflicting canonicals or thin duplicate URLs — quietly hold a site back while the content itself looks fine. Fixing them is usually the fastest way to make the rest of your SEO work harder.',
    sections: [
      {
        title: 'Site speed and Core Web Vitals',
        body:
          'We measure how the site actually performs for real visitors, not just in a lab test, and then fix the heaviest causes of delay.',
        bullets: [
          'Largest Contentful Paint, Interaction to Next Paint and Cumulative Layout Shift review',
          'Image compression, responsive sizing and modern formats',
          'Render-blocking scripts and stylesheet ordering',
          'Font loading, caching and compression settings',
          'Third-party scripts that are slow, duplicated or unnecessary',
        ],
      },
      {
        title: 'Mobile usability',
        body:
          'Most local searches happen on a phone, so the mobile experience is treated as the primary version of the site rather than a smaller copy of the desktop one.',
        bullets: [
          'Tap target sizing and spacing checks',
          'Viewport and responsive layout review',
          'Text legibility and horizontal overflow checks',
          'Mobile-only navigation and menu issues',
          'Intrusive interstitials and pop-ups that block content',
        ],
      },
      {
        title: 'Crawlability and indexability',
        body:
          'We make sure search engines can reach every page that should rank, and that they are not wasting time on pages that should not.',
        bullets: [
          'Robots.txt review against the pages you want indexed',
          'XML sitemap accuracy and submission',
          'noindex, nofollow and canonical tag conflicts',
          'Crawl depth, orphan pages and dead-end links',
          'Duplicate and near-duplicate URLs caused by parameters or trailing slashes',
        ],
      },
      {
        title: 'URL structure and internal linking',
        body:
          'Clear, stable URLs and sensible internal links help both users and crawlers understand how the site is organised.',
        bullets: [
          'Readable, consistent URL patterns',
          'Redirect chains and 404 clean-up',
          'Internal link paths to priority service pages',
          'Broken link and broken image checks',
          'Pagination and archive handling where relevant',
        ],
      },
      {
        title: 'Structured data and schema markup',
        body:
          'Where it is accurate and appropriate, we add structured data that describes the business, its services and its location — nothing that misrepresents the site.',
        bullets: [
          'Organisation and LocalBusiness markup review',
          'Service and breadcrumb markup',
          'FAQ markup where genuine questions are answered on the page',
          'Validation of existing markup and removal of invalid properties',
        ],
      },
      {
        title: 'Technical audits, fixes and monitoring',
        body:
          'A technical audit is only useful if the findings turn into changes. We work through issues in priority order and keep watching for regressions.',
        bullets: [
          'Prioritised audit with severity and effort notes',
          'Implementation support or developer-ready instructions',
          'Re-crawl and validation after fixes',
          'Ongoing monitoring for new indexing and performance issues',
          'Plain-English reporting on what changed and why it matters',
        ],
      },
    ],
    includes: [
      'Full technical SEO audit with prioritised findings',
      'Core Web Vitals and page speed recommendations',
      'Crawl and indexation review, including sitemap and robots.txt',
      'Canonical, redirect and duplicate content clean-up',
      'Structured data review and valid implementation',
      'Fix verification and ongoing monitoring guidance',
    ],
    deliverables: [
      'Prioritised technical audit document',
      'Developer-ready fix instructions where implementation is in-house',
      'Updated or newly created XML sitemap',
      'robots.txt recommendations',
      'Validated structured data for key templates',
      'Before-and-after crawl comparison after fixes',
    ],
    suitableFor: [
      'A site that has content but very little organic traffic',
      'A redesign or migration where URLs and redirects need protecting',
      'Sites with slow mobile pages or poor Core Web Vitals',
      'Businesses seeing indexing, duplicate content or crawl errors in Search Console',
    ],
    faqs: [
      {
        question: 'How long does a technical SEO audit take?',
        answer:
          'Most small and mid-sized business sites can be audited within one to two weeks, depending on the number of pages, templates and the access we are given. The audit is followed by a prioritised fix list rather than a single overwhelming report.',
      },
      {
        question: 'Do you implement the fixes yourselves?',
        answer:
          'Where we have access to the codebase or CMS, yes. If your site is managed by another developer, we provide clear, developer-ready instructions and review the result once the work is done.',
      },
      {
        question: 'Will technical SEO alone increase rankings?',
        answer:
          'Not always on its own. Technical SEO removes obstacles so that content, relevance and authority can do their job. On sites with serious technical problems it can produce noticeable movement; on healthy sites it mostly protects existing performance.',
      },
      {
        question: 'How often should a technical audit be repeated?',
        answer:
          'A full audit is usually worth repeating annually, or after a major redesign, migration or platform change. Between audits we recommend monitoring crawl errors, indexing status and Core Web Vitals so problems are caught early.',
      },
    ],
    icon: MonitorSmartphone,
    related: ['on-page-seo', 'off-page-seo', 'competitor-analysis'],
  },
  {
    slug: 'on-page-seo',
    name: 'On-Page SEO',
    shortName: 'On-Page SEO',
    cardDescription:
      'Every important page is tuned for the right keywords, with clear headings, useful content and metadata that matches how people actually search.',
    metaTitle: 'On-Page SEO Services | Content & Metadata | Bishora',
    metaDescription:
      'On-page SEO for local businesses: keyword and search intent research, title tags, meta descriptions, headings, content structure, internal linking and on-page audits.',
    keywords: [
      'on-page SEO',
      'on-page optimisation',
      'title tags',
      'meta descriptions',
      'keyword targeting',
      'content optimisation',
    ],
    intro:
      'On-page SEO is about making each page clearly answer the search it is meant to win. It connects what people type into Google with the words, structure and links on your page.',
    whatItIs:
      'On-page SEO covers the elements you control directly on a page: the target keyword and intent, title tag, meta description, heading hierarchy, body content, internal links, URLs and images. It is where relevance is established and where a technically healthy page becomes a page that deserves to rank.',
    whyItMatters:
      'Search engines rank pages, not websites. If a page does not clearly match a search intent, it will struggle even on a fast, well-linked site. Careful on-page work also improves click-through from search results and helps visitors understand quickly whether the page answers their question.',
    sections: [
      {
        title: 'Keyword targeting and search intent',
        body:
          'We start with what your customers actually search, then group those searches by intent so each page targets one clear job.',
        bullets: [
          'Commercial, informational and local intent mapping',
          'One primary topic per page rather than keyword-stuffed pages',
          'Long-tail and question-based searches worth targeting',
          'Priority order based on relevance and realistic competitiveness',
        ],
      },
      {
        title: 'Title tags and meta descriptions',
        body:
          'Titles and descriptions are written for people first and search engines second, with the service and location made obvious.',
        bullets: [
          'Unique title tags for every important page',
          'Descriptions that explain the offer and include a reason to click',
          'Sensible length so text is not truncated in results',
          'No duplicated or auto-generated metadata across templates',
        ],
      },
      {
        title: 'Heading structure and content',
        body:
          'A clear H1 and a logical H2/H3 structure make a page easier to scan for readers and easier to interpret for crawlers.',
        bullets: [
          'One clear H1 per page matching the page topic',
          'Section headings that reflect real sub-questions',
          'Content depth that matches the intent instead of padding',
          'Readable formatting with short paragraphs and lists',
          'Topical coverage of related questions customers ask',
        ],
      },
      {
        title: 'Internal linking and URL structure',
        body:
          'Internal links spread relevance and help visitors move from a broad service page to the specific detail they need.',
        bullets: [
          'Descriptive anchor text pointing to priority pages',
          'Links from service pages to related sub-services and guides',
          'Clean, readable URLs without unnecessary parameters',
          'Fixing orphan pages that no other page links to',
        ],
      },
      {
        title: 'Image and media optimisation',
        body:
          'Images are often the heaviest part of a page and the easiest place to lose speed and accessibility.',
        bullets: [
          'Descriptive file names and alt text',
          'Compression and correctly sized images',
          'Lazy loading below the fold',
          'Captions and transcripts where media carries information',
        ],
      },
      {
        title: 'Conversion-aware content',
        body:
          'A page that ranks but does not convert is an expensive win. We keep the next step obvious without turning the page into a sales pitch.',
        bullets: [
          'Clear statement of what the service is and who it is for',
          'Proof and practical detail instead of vague claims',
          'Visible calls to action at natural decision points',
          'Consistent contact routes across the page',
        ],
      },
    ],
    includes: [
      'Keyword and search intent research for priority pages',
      'Title tag and meta description rewrites',
      'Heading and content structure recommendations',
      'Content briefs or page copy for priority services',
      'Internal linking plan',
      'On-page audit with a prioritised action list',
    ],
    deliverables: [
      'Page-by-page on-page audit',
      'Keyword map showing which page targets which topic',
      'Rewritten titles and meta descriptions',
      'Content briefs or finished copy for agreed pages',
      'Internal linking recommendations',
      'Before-and-after summary of changes made',
    ],
    suitableFor: [
      'Businesses with a healthy website but pages that do not rank',
      'Sites with duplicated or generic page titles',
      'Service pages that get traffic but few enquiries',
      'New pages that need to be written with search in mind from the start',
    ],
    faqs: [
      {
        question: 'Do you rewrite the content or just advise?',
        answer:
          'Either is possible. Some clients prefer a brief they can pass to their own writer; others want us to write the page copy. We agree the scope before starting so there are no surprises.',
      },
      {
        question: 'How many keywords should one page target?',
        answer:
          'One clear topic per page, supported by related phrases that mean the same thing. Trying to rank a single page for several unrelated services usually makes it weaker for all of them.',
      },
      {
        question: 'Will changing titles and descriptions affect existing rankings?',
        answer:
          'It can, which is why changes are made deliberately and monitored. Improved relevance and click-through are the usual outcomes, but any change is reviewed against search performance after it goes live.',
      },
      {
        question: 'Is on-page SEO a one-off task?',
        answer:
          'The first pass is a project, but pages age. Services change, competitors publish better content and search intent shifts, so priority pages are reviewed periodically rather than left untouched.',
      },
    ],
    icon: PenTool,
    related: ['technical-seo', 'off-page-seo', 'competitor-analysis'],
  },
  {
    slug: 'off-page-seo',
    name: 'Off-Page SEO',
    shortName: 'Off-Page SEO',
    cardDescription:
      'Authority is built over time through relevant mentions, citations and links from sources your customers and search engines already trust.',
    metaTitle: 'Off-Page SEO & Authority Building | Bishora',
    metaDescription:
      'Off-page SEO for local businesses: relevant backlinks, citations, brand mentions, link quality assessment and competitor backlink research — no spam tactics.',
    keywords: [
      'off-page SEO',
      'authority building',
      'backlinks',
      'local citations',
      'brand mentions',
      'link building',
    ],
    intro:
      'Off-page SEO is everything outside your website that signals your business is worth trusting. Search engines use those signals — links, mentions and citations — to judge authority and relevance.',
    whatItIs:
      'Off-page SEO covers the references to your business that exist elsewhere: links from other websites, directory and association citations, brand mentions in articles and press, and the consistency of your business details across the web. It is earned credibility rather than a technical setting.',
    whyItMatters:
      'Two pages can be equally well optimised and equally fast, yet one ranks because other credible sites reference it. Authority is what separates a well-built site from a well-regarded one. It also supports local visibility, because citations and mentions help confirm that your business is real, established and relevant to an area.',
    sections: [
      {
        title: 'Authority building',
        body:
          'Authority grows from being referenced by sources that already have credibility in your market or region. There is no legitimate shortcut.',
        bullets: [
          'Identifying sources that matter to your industry and area',
          'Earning coverage through useful information, not paid link schemes',
          'Consistent brand naming and positioning across the web',
          'Gradual, sustainable growth rather than sudden spikes',
        ],
      },
      {
        title: 'Backlinks and link quality',
        body:
          'Not all links help. Relevance, editorial context and the credibility of the linking site matter far more than raw volume.',
        bullets: [
          'Relevance of the linking site to your service or region',
          'Editorial placement versus paid or automated links',
          'Anchor text that reads naturally',
          'Risk review of existing links, including spammy profiles',
          'Disavow considered only where genuinely necessary',
        ],
      },
      {
        title: 'Citations and business details',
        body:
          'Directory listings, trade associations and local organisations should all describe your business the same way.',
        bullets: [
          'Consistent name, address and phone details',
          'Relevant local and industry directories',
          'Duplicate or outdated listings cleaned up',
          'Links back to the correct page, not always the homepage',
        ],
      },
      {
        title: 'Brand mentions and digital PR',
        body:
          'Where it fits your business, being mentioned in local news, community pages or industry publications builds recognition as well as authority.',
        bullets: [
          'Story angles based on genuine business activity',
          'Local sponsorship, events and community involvement',
          'Expert commentary where you have real experience',
          'Consistent contact details in any published mention',
        ],
      },
      {
        title: 'Competitor backlink research',
        body:
          'Looking at who links to your competitors shows which sources are realistically available to you.',
        bullets: [
          'Comparison of referring domains, not just link counts',
          'Sources linking to several competitors but not to you',
          'Opportunities that fit your capacity and budget',
          'Realistic assessment of what can be earned versus bought',
        ],
      },
      {
        title: 'What we will not do',
        body:
          'Some tactics create short-term movement and long-term risk. We avoid them and say so plainly.',
        bullets: [
          'No bulk purchased links or link networks',
          'No automated comment, forum or profile spam',
          'No hidden links or link exchanges at scale',
          'No guarantees of specific rankings or positions',
        ],
      },
    ],
    includes: [
      'Backlink and citation profile review',
      'Competitor backlink comparison',
      'Citation consistency clean-up',
      'Relevant directory and association opportunities',
      'Authority-building plan matched to your capacity',
      'Ongoing review of new and lost links',
    ],
    deliverables: [
      'Current backlink and citation audit',
      'Competitor authority comparison summary',
      'Prioritised list of realistic link opportunities',
      'Cleaned-up core business listings',
      'Outreach or content ideas to support mentions',
      'Periodic authority reporting',
    ],
    suitableFor: [
      'Businesses competing in a market where competitors are well established online',
      'Sites with good content that still trail stronger-branded competitors',
      'Businesses with inconsistent or outdated directory listings',
      'Local companies wanting visibility beyond their own website',
    ],
    faqs: [
      {
        question: 'How long does off-page SEO take to show results?',
        answer:
          'Authority building is slow by nature. Citations and clean-up can have an effect within weeks, while earned links and mentions usually take months to contribute. We set expectations based on your market rather than promising timelines.',
      },
      {
        question: 'Can you guarantee a certain number of backlinks?',
        answer:
          'No. Genuine editorial links depend on other publishers. We can commit to a defined amount of prospecting and outreach work, but not to a fixed number of links or a specific ranking position.',
      },
      {
        question: 'Are paid directory listings worth it?',
        answer:
          'Sometimes. A paid listing makes sense when the directory is genuinely used by your customers or is a recognised industry body. We assess each one on relevance and visibility rather than cost alone.',
      },
      {
        question: 'What if we already have spammy backlinks?',
        answer:
          'We review the profile first. Most low-quality links are ignored by search engines and do not need action; only links that present a genuine risk are addressed, and disavow is treated as a last resort.',
      },
    ],
    icon: Share2,
    related: ['on-page-seo', 'local-seo', 'competitor-analysis'],
  },
  {
    slug: 'local-seo',
    name: 'Local SEO',
    shortName: 'Local SEO',
    cardDescription:
      'Location pages, local citations and service areas are aligned so your business ranks in the areas you actually serve.',
    metaTitle: 'Local SEO Services | Google Business Profile | Bishora',
    metaDescription:
      'Local SEO for service businesses: Google Business Profile optimisation, local citations, NAP consistency, location pages, service areas and local keyword targeting.',
    keywords: [
      'local SEO',
      'Google Business Profile optimisation',
      'local citations',
      'NAP consistency',
      'local landing pages',
      'service area SEO',
    ],
    intro:
      'Local SEO is how a business becomes visible to people searching in a specific area — including the map results that appear above the ordinary listings. For service businesses, it is often the highest-intent traffic available.',
    whatItIs:
      'Local SEO combines your Google Business Profile, local citations, location-relevant pages and consistent business details. It connects the areas you serve with the searches people make when they need a service nearby or in a particular town.',
    whyItMatters:
      'Someone searching for a local service is usually close to buying. If your profile is incomplete, your details are inconsistent or your site has no page for the area being searched, that enquiry goes to a competitor who looks more established locally.',
    sections: [
      {
        title: 'Local search visibility',
        body:
          'We look at how you currently appear for local searches, including the map pack, and where the realistic gaps are.',
        bullets: [
          'Visibility review for your main services and towns',
          'Map pack presence compared with local competitors',
          'Review of which pages currently rank for location searches',
          'Priority areas based on demand and proximity to your base',
        ],
      },
      {
        title: 'Google Business Profile optimisation',
        body:
          'Your profile is often the first impression a local customer gets, so every field is treated as part of the sales process.',
        bullets: [
          'Categories, services and attributes reviewed',
          'Business description and service list written clearly',
          'Photos and regular posts where appropriate',
          'Questions and answers monitored',
          'Consistent hours, contact details and service area',
        ],
      },
      {
        title: 'Citations and NAP consistency',
        body:
          'Name, address and phone details should match everywhere they appear, because inconsistency weakens confidence in the listing.',
        bullets: [
          'Audit of existing directory and association listings',
          'Correction of outdated addresses or numbers',
          'Removal or consolidation of duplicate listings',
          'Relevant local directories rather than every directory that exists',
        ],
      },
      {
        title: 'Local landing pages and service areas',
        body:
          'Town and area pages are only worth building when there is something genuinely useful to say about serving that place.',
        bullets: [
          'One page per meaningful service area, not thin duplicated pages',
          'Local context, coverage details and practical information',
          'Clear links between the main service page and area pages',
          'Avoiding doorway pages with no unique value',
        ],
      },
      {
        title: 'Local keyword targeting',
        body:
          'Local searches mix service, place and urgency. We target the combinations your customers actually use.',
        bullets: [
          'Service plus location phrasing',
          '"Near me" and suburb or district variations',
          'Seasonal or event-driven local demand where relevant',
          'Consistent naming of towns and areas across the site',
        ],
      },
      {
        title: 'Reviews and reputation guidance',
        body:
          'Reviews are a trust signal for customers and for local search. We advise on process and ethics, not on inventing feedback.',
        bullets: [
          'Simple, compliant ways to ask satisfied customers',
          'Responding to reviews consistently and professionally',
          'Understanding which review themes affect enquiries',
          'No incentivised or fabricated reviews',
        ],
      },
    ],
    includes: [
      'Google Business Profile review and optimisation',
      'Local citation audit and clean-up',
      'NAP consistency checks across key listings',
      'Local keyword and service-area research',
      'Location page planning and copy guidance',
      'Local competitor comparison',
    ],
    deliverables: [
      'Local visibility and citation audit',
      'Optimised profile fields and service descriptions',
      'Corrected core business listings',
      'Service-area and location page plan',
      'Local keyword map',
      'Ongoing local performance summary',
    ],
    suitableFor: [
      'Service businesses that rely on customers in a defined area',
      'Companies with multiple branches or service locations',
      'Businesses with an unclaimed or poorly completed Google profile',
      'Local companies losing map visibility to competitors',
    ],
    faqs: [
      {
        question: 'Do we need a separate page for every town we serve?',
        answer:
          'Only where you can write something genuinely useful about serving that area. A handful of strong location pages performs better than dozens of near-identical pages built purely for search engines.',
      },
      {
        question: 'Can you manage our Google Business Profile for us?',
        answer:
          'Yes, where you are willing to grant access. We can also work alongside whoever currently manages it and provide recommendations without taking ownership.',
      },
      {
        question: 'How important are reviews for local SEO?',
        answer:
          'Reviews contribute to trust and to local visibility, though they are one factor among several. We focus on a consistent, ethical process for asking and responding rather than on volume alone.',
      },
      {
        question: 'What if our address is our home rather than a shop?',
        answer:
          'That is common for service businesses. Profiles can be set up as service-area businesses without displaying a street address, and local pages can focus on the areas you actually cover.',
      },
    ],
    icon: MapPin,
    related: ['technical-seo', 'on-page-seo', 'off-page-seo'],
  },
  {
    slug: 'ecommerce-seo',
    name: 'E-commerce SEO',
    shortName: 'E-commerce SEO',
    cardDescription:
      'Category and product pages are structured so shoppers can find individual products, with clean URLs, internal linking and product-level metadata.',
    metaTitle: 'E-commerce SEO Services | Product & Category Pages | Bishora',
    metaDescription:
      'E-commerce SEO for online stores: category and product page optimisation, product schema, URL structure, faceted navigation, duplicate content and technical fixes.',
    keywords: [
      'ecommerce SEO',
      'product page SEO',
      'category page optimisation',
      'product schema',
      'faceted navigation SEO',
      'online store SEO',
    ],
    intro:
      'E-commerce SEO is about making sure the right product or category page appears when someone searches for what you sell. Online stores have more pages, more duplication and more technical complexity than most websites, and each of those creates both opportunity and risk.',
    whatItIs:
      'E-commerce SEO covers category and product page optimisation, product metadata and schema, internal linking between related items, URL and navigation structure, and the technical handling of filters, sorting and pagination. It is part on-page work and part technical discipline.',
    whyItMatters:
      'A store can hold hundreds of products and still be invisible if search engines only index a fraction of them, or if thousands of filter combinations create duplicate pages. Getting the structure right means shoppers find individual products directly, not only through paid ads or the homepage.',
    sections: [
      {
        title: 'Category page optimisation',
        body:
          'Category pages usually target the broader, higher-volume searches and often convert better than individual product pages.',
        bullets: [
          'Unique titles, descriptions and introductory copy',
          'Clear heading structure and sensible product ordering',
          'Internal links to the most important products and subcategories',
          'Useful content that answers common buying questions',
        ],
      },
      {
        title: 'Product page optimisation',
        body:
          'Product pages need to be unique, descriptive and easy to scan, because manufacturers often supply identical copy to every retailer.',
        bullets: [
          'Original descriptions rather than duplicated supplier text',
          'Specifications, sizing and compatibility details made explicit',
          'Descriptive image alt text and file names',
          'Clear availability, delivery and returns information',
        ],
      },
      {
        title: 'Product metadata and structured data',
        body:
          'Accurate structured data helps search engines understand price, availability and reviews, and can improve how listings appear.',
        bullets: [
          'Product schema with price, currency and availability',
          'Review and rating markup only where genuine',
          'Breadcrumb markup across the catalogue',
          'Validation and monitoring for missing or broken properties',
        ],
      },
      {
        title: 'URL structure and internal linking',
        body:
          'A predictable catalogue structure makes crawling and navigation easier for both shoppers and search engines.',
        bullets: [
          'Logical category and product URL patterns',
          'Breadcrumb navigation on every product page',
          'Related product and cross-sell links that are crawlable',
          'Canonical handling for similar or variant products',
        ],
      },
      {
        title: 'Faceted navigation and duplicate content',
        body:
          'Filters and sorting are useful to shoppers but can generate thousands of near-duplicate URLs if left unmanaged.',
        bullets: [
          'Which filter combinations deserve to be indexed',
          'Canonical and noindex rules for low-value combinations',
          'Pagination and sorting parameter handling',
          'Prevention of crawl traps and infinite filter paths',
        ],
      },
      {
        title: 'Search intent and product targeting',
        body:
          'Product and category pages should match how people search at each stage, from research to a specific model number.',
        bullets: [
          'Brand, model and specification searches',
          'Category-level research searches',
          'Comparison and buying-guide content where appropriate',
          'Seasonal demand planning',
        ],
      },
    ],
    includes: [
      'Catalogue crawl and indexation review',
      'Category and product page audits',
      'Product schema implementation guidance',
      'Faceted navigation and duplicate content rules',
      'Internal linking and URL structure plan',
      'Priority keyword mapping for categories and products',
    ],
    deliverables: [
      'Store-wide technical and on-page audit',
      'Indexation report showing which pages search engines actually hold',
      'Optimised category and product templates guidance',
      'Validated product structured data',
      'Filter and pagination handling rules',
      'Prioritised optimisation roadmap',
    ],
    suitableFor: [
      'Online stores with large or fast-changing catalogues',
      'Retailers relying mainly on paid ads for product discovery',
      'Stores with heavy filter usage and duplicate URL problems',
      'Businesses moving from a marketplace listing to their own store',
    ],
    faqs: [
      {
        question: 'Can SEO work for a store with thousands of products?',
        answer:
          'Yes, but the work shifts towards templates, rules and priorities rather than editing every page by hand. Category pages and the highest-value products are usually addressed first, with the rest handled through consistent templates.',
      },
      {
        question: 'Should out-of-stock products be removed?',
        answer:
          'Usually not immediately. If a product will return, keeping the page with clear availability information preserves its history and links. Permanent removal is more appropriate for discontinued items, ideally with a redirect to a relevant alternative.',
      },
      {
        question: 'How do we stop filter URLs being indexed?',
        answer:
          'There is no single setting. We define which combinations have genuine search value, then use canonical tags, robots directives and internal linking rules to keep the rest out of the index.',
      },
      {
        question: 'Do you work with Shopify, WooCommerce and custom stores?',
        answer:
          'Yes, across common platforms and custom builds. The approach is adapted to what the platform allows, and where a change needs development work we provide precise instructions.',
      },
    ],
    icon: ShoppingCart,
    related: ['technical-seo', 'on-page-seo', 'international-seo'],
  },
  {
    slug: 'international-seo',
    name: 'International SEO',
    shortName: 'International SEO',
    cardDescription:
      'For businesses selling beyond one region: hreflang, country targeting and localised page structure so each market sees the right version.',
    metaTitle: 'International SEO Services | Multi-Market Search | Bishora',
    metaDescription:
      'International SEO for businesses expanding beyond one market: country and language targeting, localised content, hreflang, URL structure and regional search intent.',
    keywords: [
      'international SEO',
      'hreflang',
      'country targeting',
      'multilingual SEO',
      'localised content',
      'regional search intent',
    ],
    intro:
      'International SEO helps a business appear in the right country, in the right language, with the right offer. It is less about translating pages and more about making each market feel locally relevant.',
    whatItIs:
      'International SEO covers how you structure multilingual and multi-country sites, how you signal which page serves which audience, and how you adapt content, currency, examples and contact details to each market. It includes country and language targeting, hreflang implementation and duplicate content control.',
    whyItMatters:
      'Without clear signals, search engines can show the wrong version of a page — or treat several versions as duplicates and rank none of them well. Visitors also leave quickly when the content, pricing or contact options clearly belong to another country.',
    sections: [
      {
        title: 'Country and language targeting',
        body:
          'The first decision is whether you need separate pages per country, per language, or both. The answer depends on how different the markets really are.',
        bullets: [
          'Country targeting versus language targeting',
          'Deciding when one English page can serve several markets',
          'Search engine Webmaster Tools geographic settings where relevant',
          'Realistic scope based on where demand actually exists',
        ],
      },
      {
        title: 'International keyword research',
        body:
          'Direct translations often miss the phrase customers actually use, so research is done per market.',
        bullets: [
          'Native-language keyword research, not translated lists',
          'Regional vocabulary and spelling differences',
          'Local competitors and the terms they rank for',
          'Demand validation before investing in a new market',
        ],
      },
      {
        title: 'Localised content',
        body:
          'Localisation goes beyond language: pricing, delivery, regulations, examples and contact routes all affect trust.',
        bullets: [
          'Currency, units and date formats',
          'Local case examples and service availability',
          'Region-appropriate calls to action and contact methods',
          'Cultural tone reviewed rather than assumed',
        ],
      },
      {
        title: 'URL structure',
        body:
          'The URL pattern should make the market obvious and stay consistent as the site grows.',
        bullets: [
          'Country-code domains, subdomains or subdirectories',
          'Consistent patterns such as /de/ or /fr-ca/',
          'Stable URLs that do not change with each campaign',
          'Redirect planning if the structure changes later',
        ],
      },
      {
        title: 'Hreflang and duplicate content',
        body:
          'Hreflang tells search engines which language and region version to show. Implemented badly, it causes more confusion than it solves.',
        bullets: [
          'Correct reciprocal hreflang annotations',
          'x-default handling for unmatched visitors',
          'Canonical tags that do not conflict with hreflang',
          'Avoiding near-duplicate pages that differ only slightly',
        ],
      },
      {
        title: 'International technical SEO',
        body:
          'Multi-market sites add hosting, speed and crawl considerations that a single-market site never faces.',
        bullets: [
          'Server location and CDN considerations',
          'Page speed for visitors in each target region',
          'Crawl budget across large multilingual structures',
          'Sitemaps split by market where useful',
        ],
      },
    ],
    includes: [
      'Market and language opportunity review',
      'International site structure recommendations',
      'Per-market keyword research',
      'Hreflang planning and validation',
      'Localisation guidance for key pages',
      'Technical review of multi-market setup',
    ],
    deliverables: [
      'Market prioritisation summary',
      'Recommended URL and hreflang structure',
      'Localised keyword maps per market',
      'Validation report for existing hreflang',
      'Localisation checklist for content teams',
      'Technical recommendations for regional performance',
    ],
    suitableFor: [
      'Businesses expanding into a second country or language',
      'Companies with existing translations that do not perform',
      'Exporters and online stores shipping internationally',
      'Multi-location businesses serving distinct regional audiences',
    ],
    faqs: [
      {
        question: 'Do we need a separate website for each country?',
        answer:
          'Not necessarily. Subdirectories on one domain are often the simplest and most cost-effective option. Separate domains or subdomains can make sense where brand, regulation or infrastructure differ significantly.',
      },
      {
        question: 'Is hreflang required if we only translate the content?',
        answer:
          'If you publish the same page in multiple languages, hreflang is the clearest way to tell search engines which version belongs to which audience. Without it, the wrong language version can appear in results.',
      },
      {
        question: 'Can we start with machine translation?',
        answer:
          'It can be a temporary starting point for low-priority pages, but important commercial pages benefit from human review. Poor localisation damages trust and rarely ranks well for competitive terms.',
      },
      {
        question: 'How do we know which market to target first?',
        answer:
          'We look at existing demand signals — enquiries, traffic, sales and search volume — rather than guessing. The first market should be the one where you already have some proof of interest and can support customers properly.',
      },
    ],
    icon: Globe,
    related: ['technical-seo', 'ecommerce-seo', 'on-page-seo'],
  },
  {
    slug: 'competitor-analysis',
    name: 'Competitor Analysis',
    shortName: 'Competitor Analysis',
    cardDescription:
      'We review who is already ranking for your services, why they win and which gaps are realistic for your business to close first.',
    metaTitle: 'SEO Competitor Analysis Services | Bishora',
    metaDescription:
      'SEO competitor analysis: competitor keyword research, SERP review, content gap analysis, backlink comparison and a practical plan built on realistic opportunities.',
    keywords: [
      'SEO competitor analysis',
      'competitor keyword research',
      'content gap analysis',
      'SERP analysis',
      'backlink comparison',
      'SEO strategy',
    ],
    intro:
      'Competitor analysis shows you what is already working in your market and where the achievable gaps are. It turns SEO from a list of generic best practices into a plan built around your actual competition.',
    whatItIs:
      'Competitor analysis reviews who ranks for the searches that matter to you, what their pages contain, how strong their authority is and which opportunities they have left open. It is research that informs strategy rather than a report to file away.',
    whyItMatters:
      'Knowing that a competitor ranks does not explain why. Understanding their content depth, page structure, internal linking and referring domains tells you whether to compete directly, target a different angle or focus on searches they serve poorly.',
    sections: [
      {
        title: 'Competitor identification',
        body:
          'Not every business ranking for your terms is a real competitor. We separate genuine commercial rivals from directories, marketplaces and publishers.',
        bullets: [
          'Direct competitors for your core services',
          'Indirect competitors and aggregators in the results',
          'Local competitors where geography matters',
          'Priority set small enough to analyse properly',
        ],
      },
      {
        title: 'Competitor keyword research',
        body:
          'We look at the terms competitors rank for, then separate the ones you could realistically win from the ones you cannot yet.',
        bullets: [
          'Shared keywords across the competitor set',
          'Keywords only one competitor holds strongly',
          'Terms with commercial intent and local relevance',
          'Opportunity scoring based on difficulty and fit',
        ],
      },
      {
        title: 'Search result and SERP analysis',
        body:
          'The results page itself tells you what search engines believe the query needs — and what features take attention before any organic result.',
        bullets: [
          'Result types, snippets and map packs present',
          'Page formats that dominate the top results',
          'Ad presence and its effect on click share',
          'Whether the intent is informational or transactional',
        ],
      },
      {
        title: 'Content gap analysis',
        body:
          'Comparing your pages with theirs shows which topics you have not covered, and where your existing pages are thinner.',
        bullets: [
          'Topics competitors cover that you do not',
          'Depth and structure of their highest-ranking pages',
          'Questions answered by competitors but missing from your site',
          'Pages worth creating versus pages worth improving',
        ],
      },
      {
        title: 'Backlink and authority comparison',
        body:
          'Referring domains give a sense of how far ahead competitors are and which sources matter in your market.',
        bullets: [
          'Referring domain counts rather than raw link totals',
          'Overlap between competitors suggesting essential sources',
          'Types of sites linking to them',
          'Realistic authority targets for the next stage',
        ],
      },
      {
        title: 'Opportunity identification and strategy',
        body:
          'The output is a prioritised plan: what to fix, what to create and what to leave alone for now.',
        bullets: [
          'Quick wins where a page is close to competing',
          'Medium-term content and authority work',
          'Areas where direct competition is unrealistic today',
          'Clear sequence with effort and impact noted',
        ],
      },
    ],
    includes: [
      'Competitor set selection and validation',
      'Keyword overlap and gap analysis',
      'SERP and content format review',
      'Backlink and authority comparison',
      'Prioritised opportunity list',
      'Strategy recommendations tied to your capacity',
    ],
    deliverables: [
      'Competitor landscape summary',
      'Keyword gap spreadsheet with priorities',
      'Content gap and improvement list',
      'Authority comparison snapshot',
      'Recommended 90-day action sequence',
      'Review session to walk through findings',
    ],
    suitableFor: [
      'Businesses entering a market with established competitors',
      'Sites that rank but consistently sit below rivals',
      'Companies unsure where to focus SEO effort first',
      'Teams planning a new service page or content programme',
    ],
    faqs: [
      {
        question: 'How many competitors do you analyse?',
        answer:
          'Usually three to five genuine competitors. A longer list widens the picture but dilutes the usefulness of the recommendations, so the set is chosen to reflect who actually takes the business you want.',
      },
      {
        question: 'Will you copy what competitors do?',
        answer:
          'No. Their results show what the market rewards, but copying thin or outdated content rarely works. We use the analysis to find gaps and decide where a different approach makes more sense.',
      },
      {
        question: 'Is competitor analysis a one-off?',
        answer:
          'It is most valuable as a starting point and then refreshed periodically. Search results and competitor content change, so a light review every six to twelve months keeps the strategy current.',
      },
      {
        question: 'Do we need expensive SEO tools for this?',
        answer:
          'Tools help with scale and speed, but the interpretation is what matters. We work with the data available and are transparent about where estimates are approximate.',
      },
    ],
    icon: LineChart,
    related: ['on-page-seo', 'off-page-seo', 'technical-seo'],
  },
];

/** Looks up a single SEO sub-service by its URL slug. */
export const getSeoSubService = (slug: string): SeoSubService | undefined =>
  seoSubServices.find((service) => service.slug === slug);
