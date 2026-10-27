import type { IndustrySeed } from './types';

/** Categories 07–12 of the approved industry directory. */
export const industriesPartB: IndustrySeed[] = [
  {
    number: 7,
    name: 'Automotive',
    description:
      'Dealers, workshops, detailing studios and vehicle service businesses.',
    intro:
      'Vehicle owners search with a specific problem or model in mind. Clear service information and location decide the call.',
    overview: [
      'This category covers vehicle sales, servicing, repairs, care and rental or driving services. Customers are usually comparing a few nearby options at the moment they need help.',
      'Trust is built on specifics: what is serviced, how long it takes, what it costs and whether the workshop handles their model. A phone number that is easy to find matters as much as the copy.',
    ],
    considerations: [
      'Services, vehicle types and turnaround times described clearly.',
      'Location and directions accurate, including workshop access.',
      'A quick booking or call route for urgent repairs and towing.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'paid-advertising',
      'whatsapp-marketing',
    ],
    relatedSlugs: [
      'home-local-services',
      'logistics-supply-chain',
      'luxury-premium-services',
    ],
    subcategories: [
      {
        name: 'Vehicle Sales',
        description:
          'New and used car or bike dealers serving buyers in and around their area.',
        digitalFocus:
          'List models, finance options and current stock honestly, with photos that match the vehicle.',
        serviceSlugs: [
          'website-development',
          'paid-advertising',
          'social-media-marketing',
        ],
        businessTypes: [
          'Car Dealer',
          'Bike Dealer',
          'Used Car Dealer',
          'Used Bike Dealer',
        ],
      },
      {
        name: 'Vehicle Service',
        description:
          'Workshops and repair specialists handling servicing, tyres and batteries.',
        digitalFocus:
          'Explain service coverage and make booking or towing contact immediate.',
        serviceSlugs: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
        businessTypes: [
          'Car Workshop',
          'Bike Workshop',
          'Auto Repair',
          'Tyre Shop',
          'Battery Shop',
        ],
      },
      {
        name: 'Vehicle Care',
        description:
          'Detailing and washing businesses selling finish, care and convenience.',
        digitalFocus:
          'Show packages and results with before-and-after visuals and simple booking.',
        serviceSlugs: [
          'social-media-marketing',
          'google-business-profile',
          'website-development',
        ],
        businessTypes: ['Car Detailing', 'Car Wash'],
      },
      {
        name: 'Vehicle Services',
        description:
          'Rental fleets and driving schools supporting mobility and licensing.',
        digitalFocus:
          'Publish requirements, pricing structure and availability without hidden conditions.',
        serviceSlugs: [
          'website-development',
          'paid-advertising',
          'seo',
        ],
        businessTypes: ['Car Rental', 'Driving School'],
      },
    ],
  },
  {
    number: 8,
    name: 'Real Estate & Construction',
    description:
      'Property, building, renovation and interior businesses working on homes and commercial spaces.',
    intro:
      'Property and construction decisions are high-value and slow. Buyers and owners look for evidence before they enquire.',
    overview: [
      'This category covers property sales and management, builders and contractors, planning and interior design, and specialist home development trades.',
      'Clients are making a long-term financial decision. Portfolio quality, process, timelines and service coverage matter far more than promotional language.',
    ],
    considerations: [
      'Current listings or project examples that are genuinely your work.',
      'A clear process from first enquiry to site visit or handover.',
      'Service area and project size stated openly.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'google-business-profile',
      'paid-advertising',
    ],
    relatedSlugs: [
      'home-local-services',
      'professional-services',
      'luxury-premium-services',
    ],
    subcategories: [
      {
        name: 'Real Estate',
        description:
          'Agencies, dealers and consultants helping clients buy, sell or manage property.',
        digitalFocus:
          'Keep listings current and make the site easy to browse by location and budget.',
        serviceSlugs: [
          'website-development',
          'paid-advertising',
          'seo',
        ],
        businessTypes: [
          'Real Estate Company',
          'Property Dealer',
          'Property Consultant',
          'Property Management',
        ],
      },
      {
        name: 'Construction',
        description:
          'Builders, contractors and civil teams delivering residential and commercial projects.',
        digitalFocus:
          'Document project type, process and coverage with real, permissioned images.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: [
          'Builder',
          'Construction Company',
          'Contractor',
          'Civil Contractor',
          'Renovation Contractor',
        ],
      },
      {
        name: 'Architecture & Interior',
        description:
          'Planning and interior firms turning briefs into buildable designs.',
        digitalFocus:
          'Lead with portfolio quality, process and consultation booking.',
        serviceSlugs: [
          'website-development',
          'social-media-marketing',
          'content-creation',
        ],
        businessTypes: ['Architecture & Planning', 'Interior Design'],
      },
      {
        name: 'Home Development',
        description:
          'Specialists in kitchens, renovation, roofing, waterproofing and flooring.',
        digitalFocus:
          'Explain materials, warranties and site assessment steps plainly.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'paid-advertising',
        ],
        businessTypes: [
          'Modular Kitchen',
          'Home Renovation',
          'Roofing',
          'Waterproofing',
          'Flooring',
        ],
      },
    ],
  },
  {
    number: 9,
    name: 'Beauty & Lifestyle',
    description:
      'Salons, spas, makeup professionals, gyms and wellness studios.',
    intro:
      'Beauty and wellness is visual and appointment-led. Clients judge quality from photos, reviews and how easy booking feels.',
    overview: [
      'This category covers grooming, beauty, bridal makeup and fitness or wellness businesses. Most customers are choosing an experience, not just a service.',
      'A strong profile, recent photos and simple booking do most of the work. Prices and availability should be easy to check without a phone call.',
    ],
    considerations: [
      'Services and prices kept visible and current.',
      'Recent photos of real work, not only styled stock imagery.',
      'One-tap booking through WhatsApp, call or a simple form.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'social-media-marketing',
      'website-development',
      'whatsapp-marketing',
    ],
    relatedSlugs: ['fashion-lifestyle', 'healthcare', 'sports-recreation'],
    subcategories: [
      {
        name: 'Beauty',
        description:
          'Salons, barbers, parlours and spas offering grooming and relaxation services.',
        digitalFocus:
          'Show services, prices and availability, and make booking a one-step action.',
        serviceSlugs: [
          'google-business-profile',
          'social-media-marketing',
          'whatsapp-marketing',
        ],
        businessTypes: ['Salon', 'Barber', 'Beauty Parlour', 'Spa'],
      },
      {
        name: 'Makeup',
        description:
          'Makeup artists specialising in bridal, event and editorial work.',
        digitalFocus:
          'Use consistent portfolio imagery and explain packages and travel coverage.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'graphic-design',
        ],
        businessTypes: ['Makeup Artist', 'Bridal Makeup'],
      },
      {
        name: 'Fitness & Wellness',
        description:
          'Gyms, studios, trainers and meditation centres helping people build routines.',
        digitalFocus:
          'Publish schedules, trainer credentials and membership options without unrealistic promises.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: [
          'Fitness Centre',
          'Gym',
          'Yoga Studio',
          'Pilates Studio',
          'Personal Trainer',
          'Meditation Centre',
        ],
      },
    ],
  },
  {
    number: 10,
    name: 'Travel & Transport',
    description:
      'Travel agencies, tour operators, cab services and travel documentation providers.',
    intro:
      'Travel planning is trust-heavy and time-sensitive. Travellers need clear itineraries, transparent inclusions and fast answers.',
    overview: [
      'This category covers travel agencies and tour operators, passenger transport providers, and visa, passport and ticketing services.',
      'The customer is often comparing unfamiliar options under time pressure. Itinerary detail, cancellation terms and a direct contact route reduce hesitation.',
    ],
    considerations: [
      'Itineraries and inclusions written clearly, with exclusions stated.',
      'A direct enquiry route for dates and group sizes.',
      'Local coverage and pickup points easy to confirm.',
    ],
    serviceSlugs: [
      'website-development',
      'google-business-profile',
      'paid-advertising',
      'whatsapp-marketing',
    ],
    relatedSlugs: [
      'food-hospitality',
      'logistics-supply-chain',
      'events-entertainment',
    ],
    subcategories: [
      {
        name: 'Travel',
        description:
          'Agencies and tour operators selling planned trips, pilgrimages and custom itineraries.',
        digitalFocus:
          'Publish itinerary detail, inclusions and enquiry routes clearly.',
        serviceSlugs: [
          'website-development',
          'paid-advertising',
          'content-creation',
        ],
        businessTypes: [
          'Travel Agency',
          'Tour Operator',
          'Travel Consultant',
          'Pilgrimage Tour Operator',
          'Adventure Tourism',
        ],
      },
      {
        name: 'Passenger Transport',
        description:
          'Taxi, cab and bus operators serving local, airport and outstation travel.',
        digitalFocus:
          'Show coverage, vehicle options and a direct booking number.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
        businessTypes: ['Taxi Service', 'Cab Service', 'Bus Operator'],
      },
      {
        name: 'Travel Support',
        description:
          'Visa, passport and ticketing services handling time-critical documentation.',
        digitalFocus:
          'Explain requirements, timelines and fees without overpromising approval.',
        serviceSlugs: [
          'website-development',
          'seo',
          'whatsapp-marketing',
        ],
        businessTypes: [
          'Visa Consultant',
          'Passport Service',
          'Ticketing Service',
        ],
      },
    ],
  },
  {
    number: 11,
    name: 'Manufacturing & B2B',
    description:
      'Manufacturers, industrial producers, distributors and suppliers.',
    intro:
      'Industrial buyers research quietly and enquire with a specification. Credibility and clarity matter more than decoration.',
    overview: [
      'This category covers manufacturers across general, textile, machinery, metal, plastic, electrical and electronics production, plus distributors, wholesalers, suppliers and exporters.',
      'A trade buyer needs to qualify you quickly: what you make, to what specification, at what capacity and where you deliver. A clear product and capability structure shortens that process.',
    ],
    considerations: [
      'Product specifications and capacity documented properly.',
      'Certifications, sectors served and delivery coverage stated.',
      'A straightforward request-for-quote path for trade buyers.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'content-creation',
      'email-marketing',
    ],
    relatedSlugs: [
      'industrial-commercial-services',
      'logistics-supply-chain',
      'b2b-corporate-services',
    ],
    subcategories: [
      {
        name: 'General Manufacturing',
        description:
          'Manufacturers and industrial companies producing goods for trade and consumer markets.',
        digitalFocus:
          'Document capabilities, capacity and certifications with a clear RFQ path.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: ['Manufacturer', 'Industrial Company'],
      },
      {
        name: 'Textile & Apparel Manufacturing',
        description:
          'Textile and garment producers supplying brands, wholesalers and exporters.',
        digitalFocus:
          'Show fabric capability, minimum order quantities and sample processes for trade buyers.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: ['Textile Manufacturer', 'Garment Manufacturer'],
      },
      {
        name: 'Industrial Production',
        description:
          'Makers of machinery, metal, plastic and electrical or electronic components.',
        digitalFocus:
          'Publish specifications and sectors served so engineers can qualify you quickly.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: [
          'Machinery Manufacturer',
          'Metal & Steel Manufacturer',
          'Plastic Manufacturer',
          'Electrical Manufacturer',
          'Electronics Manufacturer',
        ],
      },
      {
        name: 'Industrial Supply Chain',
        description:
          'Distributors, wholesalers, suppliers and exporters serving trade buyers.',
        digitalFocus:
          'Make catalogue structure, stock coverage and delivery terms easy to scan.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: [
          'Distributor',
          'Wholesaler',
          'Supplier',
          'Exporter',
          'Industrial Equipment Supplier',
        ],
      },
      {
        name: 'Packaging',
        description:
          'Packaging companies supplying protective and branded packaging at scale.',
        digitalFocus:
          'Show material options, print capability and sample request steps.',
        serviceSlugs: [
          'website-development',
          'seo',
          'graphic-design',
        ],
        businessTypes: ['Packaging Company'],
      },
    ],
  },
  {
    number: 12,
    name: 'Agriculture',
    description:
      'Farms, agri-input dealers, equipment suppliers and agri-service businesses.',
    intro:
      'Agricultural buyers value practical information, seasonal timing and dependable supply.',
    overview: [
      'This category covers farms and animal production, input dealers, equipment suppliers, nurseries and agricultural consultants or food processors.',
      'Buying decisions follow the crop cycle and are often made locally. Accurate availability, usage guidance and a direct contact route matter more than a polished brand story.',
    ],
    considerations: [
      'Product or produce availability updated with the season.',
      'Practical usage and support information for buyers.',
      'Local dealer or service coverage stated clearly.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'whatsapp-marketing',
      'seo',
    ],
    relatedSlugs: [
      'manufacturing-b2b',
      'logistics-supply-chain',
      'energy-environmental-services',
    ],
    subcategories: [
      {
        name: 'Farm & Animal Production',
        description:
          'Farms and livestock businesses producing food and agricultural products.',
        digitalFocus:
          'Explain produce, capacity and supply terms for buyers and partners.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'whatsapp-marketing',
        ],
        businessTypes: [
          'Farm',
          'Dairy',
          'Poultry',
          'Goat Farming',
          'Animal Husbandry',
        ],
      },
      {
        name: 'Agricultural Inputs',
        description:
          'Seed, fertiliser and pesticide dealers supplying farmers each season.',
        digitalFocus:
          'Keep product availability and usage guidance accurate and local.',
        serviceSlugs: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
        businessTypes: [
          'Seed Store',
          'Fertilizer Dealer',
          'Pesticide Dealer',
        ],
      },
      {
        name: 'Agricultural Equipment',
        description:
          'Equipment, tractor and irrigation suppliers serving farm operations.',
        digitalFocus:
          'Show models, support and service coverage for buyers comparing suppliers.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'seo',
        ],
        businessTypes: [
          'Agriculture Equipment',
          'Tractor Dealer',
          'Irrigation Equipment',
        ],
      },
      {
        name: 'Plants & Horticulture',
        description:
          'Nurseries and organic growers supplying plants and produce.',
        digitalFocus:
          'Use seasonal photos and clear availability rather than generic stock images.',
        serviceSlugs: [
          'social-media-marketing',
          'google-business-profile',
          'website-development',
        ],
        businessTypes: ['Nursery', 'Organic Farming'],
      },
      {
        name: 'Agri Services',
        description:
          'Consultants and food processing businesses supporting farm output and quality.',
        digitalFocus:
          'Explain service scope and processing capacity with a straightforward enquiry path.',
        serviceSlugs: [
          'website-development',
          'seo',
          'email-marketing',
        ],
        businessTypes: ['Agricultural Consultant', 'Food Processing'],
      },
    ],
  },
];
