import type { IndustrySeed } from './types';

/** Categories 25–30 of the approved industry directory. */
export const industriesPartE: IndustrySeed[] = [
  {
    number: 25,
    name: 'Fashion & Lifestyle',
    description:
      'Fashion brands, designers, tailors and accessory businesses.',
    intro:
      'Fashion is visual and seasonal. Presentation and consistency decide whether a brand feels credible.',
    overview: [
      'This category covers fashion brands and labels, designers and tailors, bridal and ethnic wear, plus accessories and luggage businesses.',
      'Customers are buying taste and identity as much as a product. A coherent visual presence across the website, social profiles and enquiries does most of the persuasion.',
    ],
    considerations: [
      'A consistent visual identity across every channel.',
      'Collections, sizing and order timelines kept current.',
      'A simple route for custom, bridal or bulk enquiries.',
    ],
    serviceSlugs: [
      'social-media-marketing',
      'website-development',
      'paid-advertising',
      'graphic-design',
    ],
    relatedSlugs: [
      'retail',
      'e-commerce-online-business',
      'photography-visual-services',
    ],
    subcategories: [
      {
        name: 'Fashion',
        description:
          'Fashion brands, designers and tailoring businesses serving retail and bridal customers.',
        digitalFocus:
          'Keep collections, sizing and order timelines clear.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'paid-advertising',
        ],
        businessTypes: [
          'Fashion Brand',
          'Fashion Designer',
          'Tailor',
          'Bridal Wear',
          'Ethnic Wear',
          "Men's Fashion",
          "Women's Fashion",
          'Kids Fashion',
        ],
      },
      {
        name: 'Accessories',
        description:
          'Fashion accessory and bag or luggage businesses.',
        digitalFocus:
          'Use consistent product photography and simple enquiry options.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'google-business-profile',
        ],
        businessTypes: ['Fashion Accessories', 'Bags & Luggage'],
      },
    ],
  },
  {
    number: 26,
    name: 'Sports & Recreation',
    description:
      'Sports academies, clubs, recreation centres and equipment businesses.',
    intro:
      'Sports businesses sell participation and progress. Parents and players want schedules, coaches and facilities explained.',
    overview: [
      'This category covers sports academies and clubs, coaching programmes, recreation centres and sports equipment businesses.',
      'Parents in particular compare safety, coaching quality and scheduling before committing. Clear batch information and facility photos reduce the number of calls needed.',
    ],
    considerations: [
      'Schedules, age groups and coaching credentials published.',
      'Facility photos and location details that are current.',
      'A trial or visit option that is easy to request.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'social-media-marketing',
      'paid-advertising',
    ],
    relatedSlugs: [
      'education-training',
      'beauty-lifestyle',
      'events-entertainment',
    ],
    subcategories: [
      {
        name: 'Fitness & Sports',
        description:
          'Academies, clubs and coaching programmes for sport and physical activity.',
        digitalFocus:
          'Publish batches, coaching credentials and trial options.',
        serviceSlugs: [
          'google-business-profile',
          'social-media-marketing',
          'website-development',
        ],
        businessTypes: [
          'Sports Academy',
          'Sports Club',
          'Swimming Academy',
          'Martial Arts Academy',
        ],
      },
      {
        name: 'Recreation',
        description:
          'Recreation centres and sports equipment businesses serving leisure and fitness.',
        digitalFocus:
          'Show facilities, timings and membership or purchase options.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: ['Recreation Centre', 'Sports Equipment Business'],
      },
    ],
  },
  {
    number: 27,
    name: 'Religious, Spiritual & Cultural',
    description:
      'Temples, ashrams, spiritual centres and cultural organisations.',
    intro:
      'Visitors look for timings, location and event information, often with respect and sensitivity.',
    overview: [
      'This category covers temples, religious institutions, ashrams and spiritual centres, related pilgrimage or event services, and cultural organisations.',
      'Accuracy and tone matter. Timings, festival schedules and directions should be easy to find, and communication should reflect the community it serves.',
    ],
    considerations: [
      'Timings, events and directions kept accurate.',
      'A respectful, uncluttered presentation on mobile.',
      'Event or visit information that is easy to share.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'social-media-marketing',
      'content-creation',
    ],
    relatedSlugs: [
      'events-entertainment',
      'non-profit-social-organisations',
      'travel-transport',
    ],
    subcategories: [
      {
        name: 'Religious',
        description:
          'Temples, institutions, ashrams and spiritual centres serving communities.',
        digitalFocus:
          'Keep timings, events and directions accurate and easy to find.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: [
          'Temple',
          'Religious Institution',
          'Ashram',
          'Spiritual Centre',
        ],
      },
      {
        name: 'Religious Services',
        description:
          'Pilgrimage, event and religious product services supporting observances.',
        digitalFocus:
          'Explain services and booking arrangements respectfully.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
        businessTypes: [
          'Pilgrimage Service',
          'Religious Event Service',
          'Religious Product Store',
        ],
      },
      {
        name: 'Cultural',
        description:
          'Cultural organisations preserving and presenting arts and heritage.',
        digitalFocus:
          'Document programmes and participation clearly.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'social-media-marketing',
        ],
        businessTypes: ['Cultural Organisation'],
      },
    ],
  },
  {
    number: 28,
    name: 'Non-Profit & Social Organisations',
    description:
      'NGOs, charities, foundations and social impact organisations.',
    intro:
      'Non-profits need to explain their work clearly and make support or participation easy.',
    overview: [
      'This category covers NGOs, charitable organisations, foundations, community groups and social enterprises working across education, healthcare and the environment.',
      'Supporters want to understand what an organisation actually does and how funds or time are used. Transparency and simple participation routes matter more than polished slogans.',
    ],
    considerations: [
      'Mission, programmes and leadership explained openly.',
      'A clear way to volunteer, donate or partner.',
      'Regular updates that show work in progress.',
    ],
    serviceSlugs: [
      'website-development',
      'content-creation',
      'social-media-marketing',
      'email-marketing',
    ],
    relatedSlugs: [
      'religious-spiritual-cultural',
      'education-training',
      'healthcare',
    ],
    subcategories: [
      {
        name: 'Non-Profit',
        description:
          'NGOs, charities, foundations and community organisations.',
        digitalFocus:
          'Publish mission, programmes and contact details with transparency.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'email-marketing',
        ],
        businessTypes: [
          'NGO',
          'Charitable Organisation',
          'Foundation',
          'Community Organisation',
        ],
      },
      {
        name: 'Social Impact',
        description:
          'Social enterprises and cause-focused organisations delivering programmes.',
        digitalFocus:
          'Explain impact honestly and make involvement straightforward.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'social-media-marketing',
        ],
        businessTypes: [
          'Social Enterprise',
          'Educational NGO',
          'Healthcare NGO',
          'Environmental Organisation',
        ],
      },
    ],
  },
  {
    number: 29,
    name: 'B2B & Corporate Services',
    description:
      'Outsourcing, support, payroll and corporate service providers.',
    intro:
      'Corporate buyers need clear scope, compliance and a reliable point of contact.',
    overview: [
      'This category covers business process outsourcing, call centres and customer support, procurement, payroll, office services and corporate event or supply providers.',
      'The sales cycle involves multiple stakeholders. Documented processes, service levels and a clear point of contact help procurement teams evaluate you with confidence.',
    ],
    considerations: [
      'Service scope, capacity and service levels documented.',
      'Compliance, data handling and confidentiality explained.',
      'A named contact or structured proposal request route.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'email-marketing',
      'content-creation',
    ],
    relatedSlugs: [
      'professional-services',
      'technology-it',
      'manufacturing-b2b',
    ],
    subcategories: [
      {
        name: 'Business Operations',
        description:
          'BPOs, call centres and outsourcing providers supporting business processes.',
        digitalFocus:
          'Explain processes, capacity and quality controls with a B2B enquiry path.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: [
          'BPO',
          'Call Centre',
          'Customer Support',
          'Outsourcing Service',
          'Procurement Service',
        ],
      },
      {
        name: 'Corporate Services',
        description:
          'Payroll, office, event and business supply providers.',
        digitalFocus:
          'Publish service scope, turnaround and compliance details.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'email-marketing',
        ],
        businessTypes: [
          'Payroll Service',
          'Office Service',
          'Corporate Event Service',
          'Business Supplies',
        ],
      },
    ],
  },
  {
    number: 30,
    name: 'Luxury & Premium Services',
    description:
      'Premium hospitality, property, automotive, retail and professional services.',
    intro:
      'Premium buyers expect restraint, detail and a seamless first impression.',
    overview: [
      'This category covers luxury hotels, property, cars, jewellery, fashion, events and travel, plus premium interior design and wealth management.',
      'Presentation has to feel considered rather than loud. Strong photography, careful copy and a discreet enquiry route support the price point.',
    ],
    considerations: [
      'High-quality, consistent photography and visual detail.',
      'Copy that is specific and calm rather than promotional.',
      'A discreet, well-managed enquiry and follow-up process.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'paid-advertising',
      'graphic-design',
    ],
    relatedSlugs: [
      'fashion-lifestyle',
      'real-estate-construction',
      'travel-transport',
    ],
    subcategories: [
      {
        name: 'Premium',
        description:
          'Luxury hotels, property, cars, jewellery, fashion, events and travel.',
        digitalFocus:
          'Use restrained design, strong photography and discreet enquiry routes.',
        serviceSlugs: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
        businessTypes: [
          'Luxury Hotel',
          'Luxury Real Estate',
          'Luxury Car',
          'Luxury Jewellery',
          'Premium Fashion',
          'Luxury Event Service',
          'Luxury Travel',
        ],
      },
      {
        name: 'Premium Professional',
        description:
          'High-end interior design and wealth management practices.',
        digitalFocus:
          'Lead with expertise, process and confidentiality.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: ['Premium Interior Design', 'Wealth Management'],
      },
    ],
  },
];
