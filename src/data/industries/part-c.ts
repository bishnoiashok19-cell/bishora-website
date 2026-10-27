import type { IndustrySeed } from './types';

/** Categories 13–18 of the approved industry directory. */
export const industriesPartC: IndustrySeed[] = [
  {
    number: 13,
    name: 'Technology & IT',
    description:
      'Software companies, IT service providers, security firms and technology resellers.',
    intro:
      'Technology buyers compare capability and proof quickly. A vague website loses credibility before a conversation starts.',
    overview: [
      'This category covers software and product companies, IT support and consulting, cybersecurity and AI businesses, and technology resellers or computer services.',
      'Buyers are technical enough to notice missing detail. Clear product capability, integration context and support terms do more for trust than a list of buzzwords.',
    ],
    considerations: [
      'Products or services explained with real use cases and screenshots.',
      'Technical scope, integrations and support terms stated plainly.',
      'A credible demo or consultation route for decision makers.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'content-creation',
      'email-marketing',
    ],
    relatedSlugs: [
      'professional-services',
      'b2b-corporate-services',
      'media-marketing-creative',
    ],
    subcategories: [
      {
        name: 'Software',
        description:
          'Software companies, SaaS products and app or web development teams.',
        digitalFocus:
          'Explain the product, use cases and implementation path with real screenshots.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: [
          'Software Company',
          'SaaS Business',
          'App Development',
          'Web Development',
        ],
      },
      {
        name: 'IT Services',
        description:
          'IT companies supporting infrastructure, cloud, data and day-to-day operations.',
        digitalFocus:
          'Document service coverage, response process and sectors served.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: [
          'IT Company',
          'IT Consulting',
          'IT Support',
          'Cloud Services',
          'Data Services',
        ],
      },
      {
        name: 'Security & AI',
        description:
          'Cybersecurity providers and AI businesses selling specialist capability.',
        digitalFocus:
          'Explain approach and boundaries without jargon or exaggerated claims.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'seo',
        ],
        businessTypes: ['Cybersecurity', 'AI Business'],
      },
      {
        name: 'Technology Sales',
        description:
          'Software resellers and computer service businesses supplying technology.',
        digitalFocus:
          'Keep product ranges, licensing and support options easy to compare.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'seo',
        ],
        businessTypes: ['Software Reseller', 'Computer Services'],
      },
    ],
  },
  {
    number: 14,
    name: 'Media, Marketing & Creative',
    description:
      'Marketing agencies, production teams and creative studios.',
    intro:
      'This is a crowded category where buyers look for evidence of thinking, not just a list of deliverables.',
    overview: [
      'This category covers marketing and advertising agencies, content and video production, photography and creative design studios.',
      'Prospects are usually comparing several providers with similar service lists. A clear point of view, a focused portfolio and transparent process are what separate one agency from another.',
    ],
    considerations: [
      'Selected work shown with context, not a wall of thumbnails.',
      'Specialisms stated instead of claiming every discipline equally.',
      'A clear process from brief to delivery and reporting.',
    ],
    serviceSlugs: [
      'website-development',
      'social-media-marketing',
      'content-creation',
      'seo',
    ],
    relatedSlugs: [
      'printing-packaging-signage',
      'events-entertainment',
      'photography-visual-services',
    ],
    subcategories: [
      {
        name: 'Marketing',
        description:
          'Digital, advertising, social, branding and PR agencies working with businesses.',
        digitalFocus:
          'Show specialism, process and selected work rather than every service at once.',
        serviceSlugs: [
          'seo',
          'paid-advertising',
          'content-creation',
        ],
        businessTypes: [
          'Digital Marketing Agency',
          'Advertising Agency',
          'Social Media Agency',
          'Branding Agency',
          'PR Agency',
          'Influencer Marketing',
        ],
      },
      {
        name: 'Content & Production',
        description:
          'Content teams and production houses creating video, photo and editorial assets.',
        digitalFocus:
          'Lead with a tight showreel and clear production scope.',
        serviceSlugs: [
          'social-media-marketing',
          'content-creation',
          'graphic-design',
        ],
        businessTypes: [
          'Content Creation',
          'Video Production',
          'Photography',
          'Editing Studio',
        ],
      },
      {
        name: 'Creative Design',
        description:
          'Graphic design and creative studios building brand and campaign assets.',
        digitalFocus:
          'Show range and craft with organised portfolio work.',
        serviceSlugs: [
          'graphic-design',
          'content-creation',
          'website-development',
        ],
        businessTypes: ['Graphic Design', 'Creative Agency'],
      },
    ],
  },
  {
    number: 15,
    name: 'Events & Entertainment',
    description:
      'Planners, venues, decorators, performers and event service providers.',
    intro:
      'Event enquiries are deadline-driven. Couples and companies need availability, packages and confidence fast.',
    overview: [
      'This category covers event planning and venues, event services such as decor and equipment, and entertainment businesses or performers.',
      'Clients are coordinating several suppliers at once. Clear packages, capacity and availability reduce back-and-forth and help you get shortlisted.',
    ],
    considerations: [
      'Capacity, packages and availability stated clearly.',
      'A gallery that reflects the events you actually deliver.',
      'A fast enquiry route for dates and budgets.',
    ],
    serviceSlugs: [
      'social-media-marketing',
      'website-development',
      'google-business-profile',
      'graphic-design',
    ],
    relatedSlugs: [
      'food-hospitality',
      'photography-visual-services',
      'luxury-premium-services',
    ],
    subcategories: [
      {
        name: 'Events',
        description:
          'Planners and venues coordinating weddings, corporate events and celebrations.',
        digitalFocus:
          'Show capacity, packages and availability with a fast enquiry route.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'google-business-profile',
        ],
        businessTypes: [
          'Event Planner',
          'Wedding Planner',
          'Wedding Venue',
          'Event Management Company',
        ],
      },
      {
        name: 'Event Services',
        description:
          'Decor, music, equipment and exhibition suppliers supporting event delivery.',
        digitalFocus:
          'Publish service coverage and setup details so organisers can plan.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'graphic-design',
        ],
        businessTypes: [
          'Event Decorator',
          'DJ',
          'Event Equipment Rental',
          'Exhibition & Trade Show Services',
        ],
      },
      {
        name: 'Entertainment',
        description:
          'Entertainment companies, artists and music services performing at events.',
        digitalFocus:
          'Use performance footage and clear booking terms.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'content-creation',
        ],
        businessTypes: [
          'Entertainment Company',
          'Artist & Performer',
          'Music Services',
        ],
      },
    ],
  },
  {
    number: 16,
    name: 'Photography & Visual Services',
    description:
      'Photographers, videographers, production teams and photo studios.',
    intro:
      'Visual buyers judge the portfolio first. The website and social profiles are the portfolio.',
    overview: [
      'This category covers wedding, commercial, product and property photography, videography and editing, and studio space providers.',
      'The work has to look good on a phone before a client will open a full gallery. Organised, fast-loading portfolios and clear packages turn interest into an enquiry.',
    ],
    considerations: [
      'Portfolio organised by specialism and shoot type.',
      'Fast-loading images and correctly sized video embeds.',
      'Packages, deliverables and travel coverage explained.',
    ],
    serviceSlugs: [
      'website-development',
      'social-media-marketing',
      'graphic-design',
      'seo',
    ],
    relatedSlugs: [
      'media-marketing-creative',
      'events-entertainment',
      'fashion-lifestyle',
    ],
    subcategories: [
      {
        name: 'Photography',
        description:
          'Wedding, product, commercial, portrait, property and drone photographers.',
        digitalFocus:
          'Organise work by specialism and make package enquiries simple.',
        serviceSlugs: [
          'website-development',
          'social-media-marketing',
          'seo',
        ],
        businessTypes: [
          'Wedding Photography',
          'Product Photography',
          'Commercial Photography',
          'Portrait Photography',
          'Real Estate Photography',
          'Drone Photography',
        ],
      },
      {
        name: 'Video',
        description:
          'Wedding and commercial videographers, production and editing teams.',
        digitalFocus:
          'Embed fast, well-sized video and explain deliverables clearly.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'content-creation',
        ],
        businessTypes: [
          'Wedding Videography',
          'Commercial Videography',
          'Video Production',
          'Video Editing',
        ],
      },
      {
        name: 'Studios',
        description:
          'Photo studios offering space, lighting and production support.',
        digitalFocus:
          'Show the space, equipment and hourly booking options.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: ['Photo Studio'],
      },
    ],
  },
  {
    number: 17,
    name: 'Printing, Packaging & Signage',
    description:
      'Printers, signage makers and promotional product suppliers.',
    intro:
      'Print buyers need specifications, quantities and turnaround before they request a quote.',
    overview: [
      'This category covers printing presses and digital printers, signage and flex or LED providers, and promotional product or branding material suppliers.',
      'Orders are specification-led. Clear material options, file requirements and delivery timelines remove the repeated questions that slow a quote down.',
    ],
    considerations: [
      'Materials, sizes and finishing options listed clearly.',
      'Artwork and file requirements published for faster quotes.',
      'Turnaround and delivery coverage stated upfront.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'graphic-design',
      'whatsapp-marketing',
    ],
    relatedSlugs: [
      'manufacturing-b2b',
      'media-marketing-creative',
      'retail',
    ],
    subcategories: [
      {
        name: 'Printing',
        description:
          'Presses and digital printers producing business and marketing material.',
        digitalFocus:
          'Explain formats, finishes and file requirements with sample requests.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'graphic-design',
        ],
        businessTypes: [
          'Printing Press',
          'Digital Printing',
          'Offset Printing',
          'Label Printing',
        ],
      },
      {
        name: 'Signage',
        description:
          'Sign board, flex and LED signage businesses serving shops and offices.',
        digitalFocus:
          'Show installation coverage and material options with site photos.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: ['Sign Board', 'Flex Printing', 'LED Signage'],
      },
      {
        name: 'Promotional',
        description:
          'Promotional product and branding material suppliers for campaigns and events.',
        digitalFocus:
          'Organise products by use case with clear minimum quantities.',
        serviceSlugs: [
          'website-development',
          'graphic-design',
          'email-marketing',
        ],
        businessTypes: ['Promotional Products', 'Branding Materials'],
      },
    ],
  },
  {
    number: 18,
    name: 'Logistics & Supply Chain',
    description:
      'Couriers, transporters, warehouses and fleet operators.',
    intro:
      'Logistics buyers need coverage, capacity and reliability. The enquiry usually starts with a route or consignment.',
    overview: [
      'This category covers courier and delivery services, freight and transport operators, storage providers and fleet management businesses.',
      'Business customers are comparing service coverage and dependability. Clear routes, cut-off times and documentation requirements shorten the sales cycle.',
    ],
    considerations: [
      'Coverage areas, cut-off times and consignment types stated.',
      'Tracking and documentation options explained clearly.',
      'A quote route that captures route, weight and volume.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'google-business-profile',
      'email-marketing',
    ],
    relatedSlugs: [
      'manufacturing-b2b',
      'e-commerce-online-business',
      'industrial-commercial-services',
    ],
    subcategories: [
      {
        name: 'Courier & Delivery',
        description:
          'Courier, delivery and e-commerce logistics providers moving parcels locally and nationally.',
        digitalFocus:
          'Publish coverage, cut-off times and tracking options.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'seo',
        ],
        businessTypes: [
          'Courier Service',
          'Delivery Service',
          'E-commerce Logistics',
        ],
      },
      {
        name: 'Freight & Transport',
        description:
          'Logistics companies, transporters and freight forwarders handling larger consignments.',
        digitalFocus:
          'Explain modes, routes and documentation with a quote route.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: [
          'Logistics Company',
          'Transporter',
          'Freight Forwarder',
        ],
      },
      {
        name: 'Storage',
        description:
          'Warehouses and cold chain providers offering storage and handling.',
        digitalFocus:
          'Show capacity, conditions and compliance details.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: ['Warehouse', 'Cold Chain'],
      },
      {
        name: 'Fleet',
        description:
          'Fleet management providers supporting commercial vehicle operations.',
        digitalFocus:
          'Explain service scope and reporting with a B2B enquiry path.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: ['Fleet Management'],
      },
    ],
  },
];
