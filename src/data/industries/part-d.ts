import type { IndustrySeed } from './types';

/** Categories 19–24 of the approved industry directory. */
export const industriesPartD: IndustrySeed[] = [
  {
    number: 19,
    name: 'E-commerce & Online Business',
    description:
      'Online stores, D2C brands and digital-first businesses.',
    intro:
      'Online buyers decide in seconds. Product pages, delivery clarity and checkout trust carry the sale.',
    overview: [
      'This category covers online stores and marketplace sellers, direct-to-consumer brands, and digital product or subscription businesses.',
      'Unlike a local shop, the website is the entire experience. Page speed, product structure, delivery terms and tracking are part of the product itself.',
    ],
    considerations: [
      'Product pages with clear pricing, delivery and returns information.',
      'Fast, mobile-first pages and reliable conversion tracking.',
      'A measurement plan before increasing ad spend.',
    ],
    serviceSlugs: [
      'website-development',
      'paid-advertising',
      'seo',
      'email-marketing',
    ],
    relatedSlugs: [
      'retail',
      'fashion-lifestyle',
      'media-marketing-creative',
    ],
    subcategories: [
      {
        name: 'E-commerce',
        description:
          'Online stores, e-commerce businesses and marketplace sellers.',
        digitalFocus:
          'Fix product structure, page speed and tracking before scaling traffic.',
        serviceSlugs: [
          'website-development',
          'seo',
          'paid-advertising',
        ],
        businessTypes: [
          'Online Store',
          'E-commerce Business',
          'Marketplace Seller',
        ],
      },
      {
        name: 'Direct-to-Consumer',
        description:
          'D2C brands selling fashion, beauty and lifestyle products directly.',
        digitalFocus:
          'Build a consistent brand experience across store, ads and social.',
        serviceSlugs: [
          'paid-advertising',
          'social-media-marketing',
          'email-marketing',
        ],
        businessTypes: [
          'D2C Brand',
          'Online Fashion Brand',
          'Online Beauty Brand',
          'Online Home & Lifestyle Brand',
        ],
      },
      {
        name: 'Digital Business',
        description:
          'Digital product, subscription and online service businesses.',
        digitalFocus:
          'Explain the offer, pricing and onboarding without friction.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: [
          'Digital Product Business',
          'Subscription Business',
          'Online Service Business',
        ],
      },
    ],
  },
  {
    number: 20,
    name: 'Energy & Environmental Services',
    description:
      'Solar, renewable energy, water, waste and environmental businesses.',
    intro:
      'Energy and environmental decisions involve upfront cost and long-term value. Buyers need clarity and credible detail.',
    overview: [
      'This category covers solar and renewable energy providers, battery and EV charging businesses, water and waste services, recycling and environmental consulting.',
      'Customers are weighing cost against long-term benefit and compliance. Honest system information and a clear process are more persuasive than savings promises.',
    ],
    considerations: [
      'System options, process and timelines explained without guarantees.',
      'Service coverage and after-installation support stated.',
      'Compliance and certification information available on request.',
    ],
    serviceSlugs: [
      'website-development',
      'google-business-profile',
      'paid-advertising',
      'seo',
    ],
    relatedSlugs: [
      'home-local-services',
      'agriculture',
      'industrial-commercial-services',
    ],
    subcategories: [
      {
        name: 'Energy',
        description:
          'Solar companies, installers, renewable providers and EV charging businesses.',
        digitalFocus:
          'Explain system options, process and service coverage without savings guarantees.',
        serviceSlugs: [
          'website-development',
          'paid-advertising',
          'google-business-profile',
        ],
        businessTypes: [
          'Solar Company',
          'Solar Installer',
          'Renewable Energy Company',
          'Battery & Inverter',
          'EV Charging',
        ],
      },
      {
        name: 'Water & Waste',
        description:
          'Water treatment, waste management and recycling providers.',
        digitalFocus:
          'Show service coverage, capacity and compliance clearly.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'seo',
        ],
        businessTypes: ['Water Treatment', 'Waste Management', 'Recycling'],
      },
      {
        name: 'Environmental',
        description:
          'Environmental consultants supporting compliance and impact assessment.',
        digitalFocus:
          'Explain specialisms and sectors with a credible B2B enquiry path.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: ['Environmental Consultant'],
      },
    ],
  },
  {
    number: 21,
    name: 'Recruitment & Employment',
    description:
      'Recruitment agencies, placement consultants and career service providers.',
    intro:
      'Recruitment works on both sides: employers need suitable candidates, and candidates need a clear next step.',
    overview: [
      'This category covers recruitment and placement agencies, job consultants, and resume, interview or employment services.',
      'Two audiences arrive with different questions. The site has to explain hiring support to employers while giving candidates a simple way to apply or get advice.',
    ],
    considerations: [
      'Separate, clear routes for employers and candidates.',
      'Sectors, roles and process explained without inflated placement claims.',
      'A simple application or consultation step on mobile.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'paid-advertising',
      'email-marketing',
    ],
    relatedSlugs: [
      'professional-services',
      'education-training',
      'b2b-corporate-services',
    ],
    subcategories: [
      {
        name: 'Recruitment',
        description:
          'Agencies and consultants placing candidates with employers.',
        digitalFocus:
          'Explain sectors, roles and hiring process for both audiences.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: [
          'Recruitment Agency',
          'Placement Agency',
          'Job Consultant',
        ],
      },
      {
        name: 'Career Services',
        description:
          'Resume, interview and employment consultants supporting job seekers.',
        digitalFocus:
          'Set expectations clearly and make service packages easy to compare.',
        serviceSlugs: [
          'website-development',
          'social-media-marketing',
          'seo',
        ],
        businessTypes: [
          'Resume Service',
          'Interview Training',
          'Employment Consultant',
        ],
      },
    ],
  },
  {
    number: 22,
    name: 'Industrial & Commercial Services',
    description:
      'Engineering, maintenance, cleaning and facility service providers.',
    intro:
      'Commercial buyers look for capability, safety and reliable coverage.',
    overview: [
      'This category covers engineering and industrial maintenance providers, contractors and fabricators, plus commercial cleaning, facility management and equipment rental.',
      'Purchasing decisions are often made by a site or operations manager. Certifications, response arrangements and past project scope carry more weight than general marketing copy.',
    ],
    considerations: [
      'Capabilities, certifications and sectors served documented.',
      'Response times and service coverage stated for commercial clients.',
      'A clear request-for-proposal route for procurement teams.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'email-marketing',
      'google-business-profile',
    ],
    relatedSlugs: [
      'manufacturing-b2b',
      'home-local-services',
      'security-safety',
    ],
    subcategories: [
      {
        name: 'Engineering & Maintenance',
        description:
          'Engineering, contracting and maintenance providers serving industrial clients.',
        digitalFocus:
          'Document capability, certifications and response arrangements.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: [
          'Engineering Service',
          'Industrial Contractor',
          'Industrial Maintenance',
          'Welding & Fabrication',
          'Calibration Service',
        ],
      },
      {
        name: 'Commercial Operations',
        description:
          'Commercial cleaning, facility management and equipment rental providers.',
        digitalFocus:
          'Publish coverage, contract options and a clear B2B quote route.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'email-marketing',
        ],
        businessTypes: [
          'Commercial Cleaning',
          'Facility Management',
          'Equipment Rental',
        ],
      },
    ],
  },
  {
    number: 23,
    name: 'Pets & Animal Services',
    description:
      'Pet shops, groomers, boarding, training and animal care businesses.',
    intro:
      'Pet owners look for care, safety and convenience, often on a phone while travelling.',
    overview: [
      'This category covers pet shops, grooming, boarding and training businesses, plus shelters and pet food or product sellers.',
      'Owners are cautious about who handles their animals. Recent photos, clear service details and easy contact build confidence quickly.',
    ],
    considerations: [
      'Services, timings and booking options visible on mobile.',
      'Real photos of the premises and animals in your care.',
      'Clear policies for boarding, health and cancellations.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'social-media-marketing',
      'website-development',
      'whatsapp-marketing',
    ],
    relatedSlugs: ['healthcare', 'retail', 'home-local-services'],
    subcategories: [
      {
        name: 'Pet Services',
        description:
          'Pet shops, groomers, boarding and training businesses.',
        digitalFocus:
          'Show services, timings and booking options with reassuring photos.',
        serviceSlugs: [
          'google-business-profile',
          'social-media-marketing',
          'whatsapp-marketing',
        ],
        businessTypes: [
          'Pet Shop',
          'Pet Grooming',
          'Pet Boarding',
          'Pet Training',
        ],
      },
      {
        name: 'Animal Care',
        description:
          'Shelters and pet food or product businesses supporting animal wellbeing.',
        digitalFocus:
          'Explain adoption or product processes and keep contact details current.',
        serviceSlugs: [
          'website-development',
          'social-media-marketing',
          'google-business-profile',
        ],
        businessTypes: ['Animal Shelter', 'Pet Food', 'Pet Products'],
      },
    ],
  },
  {
    number: 24,
    name: 'Security & Safety',
    description:
      'Security agencies, fire safety providers and safety equipment suppliers.',
    intro:
      'Security and safety buyers need proof of compliance and dependable response.',
    overview: [
      'This category covers security agencies and access control, fire safety services and equipment, and workplace safety suppliers.',
      'The buyer is often responsible for other people. Clear licensing, inspection processes and support arrangements are essential parts of the sales conversation.',
    ],
    considerations: [
      'Licences, certifications and compliance details available.',
      'Service coverage and response arrangements stated clearly.',
      'Product or equipment standards easy to verify.',
    ],
    serviceSlugs: [
      'website-development',
      'google-business-profile',
      'seo',
      'email-marketing',
    ],
    relatedSlugs: [
      'home-local-services',
      'industrial-commercial-services',
      'b2b-corporate-services',
    ],
    subcategories: [
      {
        name: 'Security',
        description:
          'Security agencies, guards and access control providers.',
        digitalFocus:
          'Explain coverage, licensing and response process clearly.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'email-marketing',
        ],
        businessTypes: [
          'Security Agency',
          'Security Guard',
          'Access Control',
        ],
      },
      {
        name: 'Fire Safety',
        description:
          'Fire safety services and equipment suppliers supporting premises compliance.',
        digitalFocus:
          'Publish service scope, inspection process and compliance documentation.',
        serviceSlugs: [
          'website-development',
          'seo',
          'google-business-profile',
        ],
        businessTypes: ['Fire Safety Service', 'Fire Equipment'],
      },
      {
        name: 'Safety',
        description:
          'Safety equipment and industrial safety suppliers serving workplaces.',
        digitalFocus:
          'Make product categories and standards easy to check.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: ['Safety Equipment', 'Industrial Safety'],
      },
    ],
  },
];
