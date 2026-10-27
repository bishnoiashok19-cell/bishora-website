import type { BusinessTypeContentGroup } from '../types';

/** Business-type content: Events, Photography, Printing, Logistics, E-commerce, Energy. */
export const businessTypeContentPart5: BusinessTypeContentGroup[] = [
  {
    category: 'events-entertainment',
    subcategory: 'events',
    types: [
      {
        name: 'Event Planner',
        description:
          'Planners coordinating private and corporate events from concept to delivery.',
        focus:
          'Event planners sell confidence and coordination, so portfolio, service scope and budget ranges should be clear.',
        start:
          'Publish event types, planning stages and enquiry details.',
        does: [
          'Event concept and planning',
          'Vendor selection and coordination',
          'On-day execution and oversight',
        ],
        online: [
          'Event gallery by type',
          'Planning process and scope',
          'Enquiry form with date and budget',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Wedding Planner',
        description:
          'Planners managing wedding planning, vendors and wedding-day coordination.',
        focus:
          'Couples need to see style range, vendor network and package clarity before trusting a planner with their wedding.',
        start:
          'Show wedding styles and explain package and coordination scope.',
        does: [
          'Wedding planning and scheduling',
          'Vendor selection and negotiation',
          'Wedding-day coordination',
        ],
        online: [
          'Wedding portfolio by style',
          'Package and process details',
          'A date enquiry form',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Wedding Venue',
        description:
          'Venues hosting weddings, receptions and related celebrations.',
        focus:
          'Venue choice depends on capacity, setting and included facilities, so photos and practical details must be complete.',
        start:
          'Publish capacity, layouts, menus and availability.',
        does: [
          'Venue hire for weddings and receptions',
          'Catering, decor and setup',
          'Event coordination support',
        ],
        online: [
          'Venue galleries and capacity details',
          'Package and menu information',
          'Availability enquiry',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Event Management Company',
        description:
          'Companies delivering large events, conferences and brand activations.',
        focus:
          'Event-management clients need operational proof, production capability and a clear scope for complex events.',
        start:
          'Publish event types, production capability and past delivery.',
        does: [
          'Event strategy and production',
          'Logistics, staffing and permissions',
          'Sponsorship and brand activation',
        ],
        online: [
          'Case-style event portfolio',
          'Capability and event scale',
          'A brief and RFP route',
        ],
        services: [
          'website-development',
          'email-marketing',
          'social-media-marketing',
        ],
      },
    ],
  },
  {
    category: 'events-entertainment',
    subcategory: 'event-services',
    types: [
      {
        name: 'Event Decorator',
        description:
          'Decorators designing and installing event styling and stage setups.',
        focus:
          'Decorating is visual, so themed galleries and clear setup scope are the main decision tools.',
        start:
          'Publish decor themes, setup options and pricing approach.',
        does: [
          'Event styling and theme design',
          'Stage, entrance and table decor',
          'Flowers, lighting and props',
        ],
        online: [
          'Themed portfolio',
          'Package and custom options',
          'Date and venue enquiry',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'DJ',
        description:
          'DJs providing music, sound and event atmosphere.',
        focus:
          'DJ bookings depend on music fit, equipment and reliability, so samples and setup details matter.',
        start:
          'Publish music samples, equipment and event coverage.',
        does: [
          'Event DJ sets',
          'Sound and lighting setup',
          'MC and event coordination',
        ],
        online: [
          'Audio or video samples',
          'Event types and equipment list',
          'Booking and availability enquiry',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Event Equipment Rental',
        description:
          'Businesses renting chairs, tables, sound, lighting and event equipment.',
        focus:
          'Rental buyers need item availability, delivery and setup terms, so a clear catalogue and quote process are essential.',
        start:
          'Publish rental categories, quantities and delivery terms.',
        does: [
          'Furniture and tent rental',
          'Sound, lighting and AV equipment',
          'Delivery, setup and collection',
        ],
        online: [
          'Rental catalogue',
          'Availability and delivery details',
          'A quote request form',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Exhibition & Trade Show Services',
        description:
          'Providers building stalls, managing exhibits and supporting trade shows.',
        focus:
          'Exhibitors need design, build and show logistics handled, so past stalls and turnkey scope should be shown.',
        start:
          'Publish stall designs, build capability and show support.',
        does: [
          'Stall design and fabrication',
          'Show logistics and setup',
          'On-site exhibition support',
        ],
        online: [
          'Stall portfolio',
          'Turnkey service scope',
          'Exhibition enquiry form',
        ],
        services: [
          'website-development',
          'email-marketing',
          'social-media-marketing',
        ],
      },
    ],
  },
  {
    category: 'events-entertainment',
    subcategory: 'entertainment',
    types: [
      {
        name: 'Entertainment Company',
        description:
          'Companies supplying performers, shows and entertainment for events.',
        focus:
          'Entertainment buyers need act variety, suitability and technical requirements, so a clear roster helps.',
        start:
          'Publish available acts, show formats and booking terms.',
        does: [
          'Performer and act booking',
          'Show production and direction',
          'Event entertainment coordination',
        ],
        online: [
          'Act and show catalogue',
          'Performance clips',
          'Booking enquiry',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Artist & Performer',
        description:
          'Individual artists, musicians and performers available for events and shows.',
        focus:
          'Artists are booked on performance quality and fit, so live clips and a clear booking process are essential.',
        start:
          'Publish performance clips and the events you play.',
        does: [
          'Live performances',
          'Private and event bookings',
          'Collaborations and shows',
        ],
        online: [
          'Performance showreel',
          'Event types and availability',
          'Booking contact',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Music Services',
        description:
          'Businesses providing live music, recording, sound and music production.',
        focus:
          'Music-service buyers need to hear the quality and understand the deliverable, so samples and service scope matter.',
        start:
          'Publish audio samples and the services you provide.',
        does: [
          'Live music and bands',
          'Recording, mixing and mastering',
          'Sound and production support',
        ],
        online: [
          'Audio portfolio',
          'Service and equipment list',
          'Project enquiry',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'content-creation',
        ],
      },
    ],
  },
  {
    category: 'photography-visual-services',
    subcategory: 'photography',
    types: [
      {
        name: 'Wedding Photography',
        description:
          'Photographers covering weddings, rituals and related celebrations.',
        focus:
          'Couples choose wedding photographers on style and trust, so full wedding stories and package clarity are essential.',
        start:
          'Publish complete wedding stories and explain packages.',
        does: [
          'Wedding-day coverage',
          'Couple, family and ritual portraits',
          'Edited album and image delivery',
        ],
        online: [
          'Full wedding galleries',
          'Package and delivery details',
          'Date availability enquiry',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'paid-advertising',
        ],
      },
      {
        name: 'Product Photography',
        description:
          'Photographers producing product images for e-commerce and marketing.',
        focus:
          'Product photography is judged on consistency and conversion, so sample catalogues and shot-list options matter.',
        start:
          'Publish product samples and explain shot-list packages.',
        does: [
          'Catalogue and e-commerce images',
          'Styled product and lifestyle shoots',
          'Retouching and file delivery',
        ],
        online: [
          'Product portfolio',
          'Package and turnaround',
          'Sample request',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Commercial Photography',
        description:
          'Photographers shooting brand, corporate and advertising imagery.',
        focus:
          'Commercial buyers need usage rights and production capability, so scope and licensing should be explicit.',
        start:
          'Publish campaign work and explain usage licensing.',
        does: [
          'Brand and advertising shoots',
          'Corporate and industrial photography',
          'Licensing and image delivery',
        ],
        online: [
          'Commercial portfolio',
          'Licensing and production details',
          'A brief enquiry form',
        ],
        services: [
          'website-development',
          'content-creation',
          'social-media-marketing',
        ],
      },
      {
        name: 'Portrait Photography',
        description:
          'Photographers creating personal, family and professional portraits.',
        focus:
          'Portrait clients want to feel comfortable and see a style they like, so session details and galleries matter.',
        start:
          'Publish portrait galleries and explain session format.',
        does: [
          'Personal and family portraits',
          'Professional headshots',
          'Studio or location sessions',
        ],
        online: [
          'Portrait gallery',
          'Session and pricing details',
          'Booking form',
        ],
        services: [
          'social-media-marketing',
          'google-business-profile',
          'website-development',
        ],
      },
      {
        name: 'Real Estate Photography',
        description:
          'Photographers producing property images for listings and marketing.',
        focus:
          'Property photographers need to show wide, clean, well-lit results and reliable turnaround for agents.',
        start:
          'Publish property samples and turnaround commitments.',
        does: [
          'Interior and exterior property shoots',
          'Twilight and drone options',
          'Editing and image delivery',
        ],
        online: [
          'Property portfolio',
          'Package and turnaround',
          'Agent enquiry form',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'social-media-marketing',
        ],
      },
      {
        name: 'Drone Photography',
        description:
          'Operators providing aerial photography and video within permitted rules.',
        focus:
          'Drone buyers need to know permissions, safety and output quality, so compliance should be visible.',
        start:
          'Publish aerial samples and explain permissions and safety.',
        does: [
          'Aerial photography',
          'Aerial video and inspection',
          'Survey and site documentation',
        ],
        online: [
          'Aerial showreel',
          'Permissions and safety notes',
          'Project enquiry',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'content-creation',
        ],
      },
    ],
  },
  {
    category: 'photography-visual-services',
    subcategory: 'video',
    types: [
      {
        name: 'Wedding Videography',
        description:
          'Videographers filming weddings and producing edited films.',
        focus:
          'Couples need to feel the emotion of a wedding film, so full samples and package differences should be clear.',
        start:
          'Publish full wedding films and explain package options.',
        does: [
          'Wedding film coverage',
          'Highlight and full-length edits',
          'Audio, colour and delivery',
        ],
        online: [
          'Wedding film gallery',
          'Package and delivery details',
          'Date availability enquiry',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'paid-advertising',
        ],
      },
      {
        name: 'Commercial Videography',
        description:
          'Videographers producing brand, product and corporate video.',
        focus:
          'Commercial buyers need concept, production value and usage clarity, so reels and process matter.',
        start:
          'Publish commercial work and explain production stages.',
        does: [
          'Brand and product videos',
          'Corporate interviews and profiles',
          'Scripting and production',
        ],
        online: [
          'Commercial showreel',
          'Process and usage terms',
          'A brief enquiry form',
        ],
        services: [
          'content-creation',
          'website-development',
          'social-media-marketing',
        ],
      },
      {
        name: 'Video Production',
        description:
          'Production companies handling concept, filming and post-production.',
        focus:
          'Production buyers need end-to-end capability and realistic timelines, so scope and crew details should be specific.',
        start:
          'Publish your production process and sample projects.',
        does: [
          'Concept development and scripting',
          'Filming, direction and crew',
          'Post-production and delivery',
        ],
        online: [
          'Showreel and project pages',
          'Production capability',
          'A quote request form',
        ],
        services: [
          'content-creation',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Video Editing',
        description:
          'Editors providing cutting, colour, sound and finishing services.',
        focus:
          'Editing clients care about turnaround and revision clarity, so workflow and formats should be explicit.',
        start:
          'Publish editing samples and revision terms.',
        does: [
          'Video cutting and assembly',
          'Colour correction and sound mixing',
          'Format delivery and exports',
        ],
        online: [
          'Before-and-after samples',
          'Turnaround and revision policy',
          'File transfer process',
        ],
        services: [
          'content-creation',
          'social-media-marketing',
          'website-development',
        ],
      },
    ],
  },
  {
    category: 'photography-visual-services',
    subcategory: 'studios',
    types: [
      {
        name: 'Photo Studio',
        description:
          'Studios providing controlled spaces and lighting for photo shoots.',
        focus:
          'Studio hirers need space dimensions, equipment and booking terms, so a clear facility page matters.',
        start:
          'Publish studio dimensions, equipment and hourly rates.',
        does: [
          'Studio space hire',
          'Lighting and backdrop setup',
          'Assisted or self-directed shoots',
        ],
        online: [
          'Studio gallery and floor details',
          'Equipment list',
          'Booking availability',
        ],
        services: [
          'google-business-profile',
          'social-media-marketing',
          'website-development',
        ],
      },
    ],
  },
  {
    category: 'printing-packaging-signage',
    subcategory: 'printing',
    types: [
      {
        name: 'Printing Press',
        description:
          'Commercial printers producing books, brochures, packaging and print materials.',
        focus:
          'Print buyers compare stock, finish and proofing, so specifications and sample quality are central.',
        start:
          'Publish print products, stock options and proofing process.',
        does: [
          'Commercial printing',
          'Binding and finishing',
          'Proofing and delivery',
        ],
        online: [
          'Product and stock catalogue',
          'Finishing options',
          'A quote request form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Digital Printing',
        description:
          'Printers offering short-run digital printing for fast turnaround.',
        focus:
          'Digital-print customers need quick turnaround and small-batch pricing, so file requirements and delivery times should be clear.',
        start:
          'Publish product sizes, file requirements and turnaround.',
        does: [
          'Short-run digital printing',
          'Custom sizes and quantities',
          'Fast-turnaround delivery',
        ],
        online: [
          'Product and size options',
          'File preparation guide',
          'An instant quote request',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Offset Printing',
        description:
          'Printers using offset presses for high-volume, high-quality print runs.',
        focus:
          'Offset buyers need volume pricing, colour accuracy and production schedules, so technical print knowledge matters.',
        start:
          'Publish supported paper stocks, volumes and proofing.',
        does: [
          'High-volume offset printing',
          'Colour matching and proofing',
          'Binding and finishing',
        ],
        online: [
          'Print specification pages',
          'Volume and stock guidance',
          'A quote request form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Label Printing',
        description:
          'Printers producing product labels, stickers and packaging labels.',
        focus:
          'Label buyers need material, adhesive and print durability detail, especially for food and retail use.',
        start:
          'Publish label materials, finishes and order volumes.',
        does: [
          'Product and packaging labels',
          'Custom shapes and adhesives',
          'Short and bulk production runs',
        ],
        online: [
          'Material and finish guide',
          'Artwork requirements',
          'A sample request form',
        ],
        services: [
          'website-development',
          'whatsapp-marketing',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'printing-packaging-signage',
    subcategory: 'signage',
    types: [
      {
        name: 'Sign Board',
        description:
          'Makers of shop, office and outdoor sign boards.',
        focus:
          'Sign buyers need material, size and installation guidance, so photos and site-survey options matter.',
        start:
          'Publish sign types, materials and installation process.',
        does: [
          'Shop and office signage',
          'Design and fabrication',
          'Site installation',
        ],
        online: [
          'Sign gallery',
          'Material and size guidance',
          'Site-survey booking',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Flex Printing',
        description:
          'Printers producing flex banners, hoardings and large-format displays.',
        focus:
          'Flex buyers need size, resolution and installation clarity, often on tight deadlines.',
        start:
          'Publish banner sizes, materials and turnaround.',
        does: [
          'Flex banners and hoardings',
          'Large-format printing',
          'Eyelets and installation',
        ],
        online: [
          'Size and material guide',
          'Artwork requirements',
          'An urgent quote route',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
      },
      {
        name: 'LED Signage',
        description:
          'Makers of illuminated LED signs and display boards.',
        focus:
          'LED signage buyers need brightness, durability and power details, plus installation and service support.',
        start:
          'Publish LED sign types, specifications and maintenance.',
        does: [
          'LED sign fabrication',
          'Illuminated letters and displays',
          'Installation and servicing',
        ],
        online: [
          'LED project gallery',
          'Specification and power details',
          'Site survey request',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'social-media-marketing',
        ],
      },
    ],
  },
  {
    category: 'printing-packaging-signage',
    subcategory: 'promotional',
    types: [
      {
        name: 'Promotional Products',
        description:
          'Suppliers of branded corporate gifts and promotional merchandise.',
        focus:
          'Promotional buyers need product ranges, branding methods and bulk pricing, so a clear catalogue helps.',
        start:
          'Publish product categories, branding options and MOQs.',
        does: [
          'Corporate gifting',
          'Branded merchandise',
          'Bulk order fulfilment',
        ],
        online: [
          'Product catalogue',
          'Branding and MOQ details',
          'A quote request form',
        ],
        services: [
          'website-development',
          'email-marketing',
          'graphic-design',
        ],
      },
      {
        name: 'Branding Materials',
        description:
          'Providers of branded stationery, uniforms, display and marketing materials.',
        focus:
          'Brand-material buyers need consistency across items, so brand-guideline application and production quality matter.',
        start:
          'Publish material categories and how brand guidelines are applied.',
        does: [
          'Branded stationery',
          'Uniforms and display items',
          'Brand rollout support',
        ],
        online: [
          'Material and product gallery',
          'Guideline application',
          'Corporate enquiry form',
        ],
        services: [
          'graphic-design',
          'website-development',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'logistics-supply-chain',
    subcategory: 'courier-delivery',
    types: [
      {
        name: 'Courier Service',
        description:
          'Courier businesses moving documents and parcels locally and nationally.',
        focus:
          'Courier customers need coverage, transit times and tracking, so service commitments should be explicit.',
        start:
          'Publish coverage, delivery times and the tracking process.',
        does: [
          'Document and parcel delivery',
          'Local and national routes',
          'Pickup and shipment tracking',
        ],
        online: [
          'Coverage and transit details',
          'Tracking information',
          'Booking or pickup request',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Delivery Service',
        description:
          'Local delivery businesses handling same-day and scheduled deliveries.',
        focus:
          'Delivery customers need speed, area coverage and proof of delivery, so operational clarity matters.',
        start:
          'Publish delivery windows, coverage and proof-of-delivery process.',
        does: [
          'Same-day and scheduled delivery',
          'Route planning and dispatch',
          'Proof of delivery',
        ],
        online: [
          'Coverage and timing details',
          'Booking form',
          'Delivery confirmation process',
        ],
        services: [
          'website-development',
          'whatsapp-marketing',
          'google-business-profile',
        ],
      },
      {
        name: 'E-commerce Logistics',
        description:
          'Logistics providers handling order fulfilment for online sellers.',
        focus:
          'E-commerce sellers need integration, pick-pack accuracy and return handling, so fulfilment scope should be clear.',
        start:
          'Publish integrations, fulfilment services and service levels.',
        does: [
          'Warehousing and pick-pack',
          'Shipping and tracking',
          'Returns processing',
        ],
        online: [
          'Integration and service pages',
          'Service-level and pricing model',
          'A seller enquiry form',
        ],
        services: [
          'website-development',
          'email-marketing',
          'seo',
        ],
      },
    ],
  },
  {
    category: 'logistics-supply-chain',
    subcategory: 'freight-transport',
    types: [
      {
        name: 'Logistics Company',
        description:
          'Companies coordinating freight, warehousing and supply-chain operations.',
        focus:
          'Logistics buyers need network coverage, tracking and exception handling, so capability should be specific.',
        start:
          'Publish transport modes, coverage and tracking capability.',
        does: [
          'Freight coordination',
          'Warehousing and distribution',
          'Supply-chain planning',
        ],
        online: [
          'Service and coverage pages',
          'Tracking and reporting',
          'A quote request form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Transporter',
        description:
          'Transporters moving goods by road across routes and regions.',
        focus:
          'Transport buyers need fleet capacity, route coverage and delivery reliability, so practical detail wins.',
        start:
          'Publish fleet types, routes and the booking process.',
        does: [
          'Full and part loads',
          'Regional and national transport',
          'Loading and delivery coordination',
        ],
        online: [
          'Fleet and route details',
          'Booking and quote request',
          'Tracking contact',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Freight Forwarder',
        description:
          'Forwarders arranging international freight and customs documentation.',
        focus:
          'Freight-forwarding clients need mode options, customs support and honest transit times.',
        start:
          'Publish freight modes, documentation support and coverage.',
        does: [
          'Sea, air and road freight',
          'Customs documentation',
          'Shipment coordination',
        ],
        online: [
          'Mode and route pages',
          'Documentation and transit details',
          'A quote request form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'logistics-supply-chain',
    subcategory: 'storage',
    types: [
      {
        name: 'Warehouse',
        description:
          'Warehouse operators providing storage space and handling services.',
        focus:
          'Warehouse clients need space, security and handling terms, so facility specifics should be visible.',
        start:
          'Publish storage capacity, location and handling services.',
        does: [
          'Short and long-term storage',
          'Inventory handling',
          'Dispatch support',
        ],
        online: [
          'Facility and capacity details',
          'Security and access notes',
          'An enquiry form',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'email-marketing',
        ],
      },
      {
        name: 'Cold Chain',
        description:
          'Temperature-controlled storage and transport providers.',
        focus:
          'Cold-chain buyers need temperature control, monitoring and compliance evidence, so operational proof is essential.',
        start:
          'Publish temperature ranges, monitoring and compliance details.',
        does: [
          'Cold storage',
          'Refrigerated transport',
          'Temperature monitoring',
        ],
        online: [
          'Range and compliance pages',
          'Monitoring and reporting',
          'A quote request form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'logistics-supply-chain',
    subcategory: 'fleet',
    types: [
      {
        name: 'Fleet Management',
        description:
          'Providers managing vehicles, maintenance and compliance for business fleets.',
        focus:
          'Fleet buyers need cost control, uptime and compliance support, so reporting and service scope should be clear.',
        start:
          'Publish fleet services, reporting and maintenance terms.',
        does: [
          'Fleet maintenance',
          'Vehicle tracking and compliance',
          'Cost and utilisation reporting',
        ],
        online: [
          'Service and reporting pages',
          'Compliance and uptime details',
          'A consultation request',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'e-commerce-online-business',
    subcategory: 'e-commerce',
    types: [
      {
        name: 'Online Store',
        description:
          'Retail businesses selling products through their own website.',
        focus:
          'Online stores need fast product discovery, trust and a frictionless checkout, so category and policy clarity matter.',
        start:
          'Publish clear categories, delivery terms and a simple checkout.',
        does: [
          'Product retail and merchandising',
          'Order fulfilment',
          'Returns and customer support',
        ],
        online: [
          'Product pages with real photos',
          'Delivery and return policies',
          'Checkout and payment trust signals',
        ],
        services: [
          'website-development',
          'seo',
          'paid-advertising',
        ],
      },
      {
        name: 'E-commerce Business',
        description:
          'Businesses running multi-channel online selling operations.',
        focus:
          'E-commerce operators need channel strategy, conversion and retention handled together rather than as separate tactics.',
        start:
          'Map your channels and fix the biggest conversion leak first.',
        does: [
          'Online sales across channels',
          'Inventory and fulfilment',
          'Customer retention',
        ],
        online: [
          'Channel-specific landing pages',
          'Analytics and conversion tracking',
          'Email and repeat-purchase flows',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'email-marketing',
        ],
      },
      {
        name: 'Marketplace Seller',
        description:
          'Sellers operating on third-party marketplaces such as Amazon or Flipkart.',
        focus:
          'Marketplace sellers compete on listings, reviews and fulfilment metrics, so platform-specific optimisation matters.',
        start:
          'Audit your top listings and improve titles, images and reviews.',
        does: [
          'Marketplace listing management',
          'Order and return handling',
          'Advertising within platforms',
        ],
        online: [
          'Optimised titles and images',
          'Review and rating management',
          'Platform ad campaigns',
        ],
        services: [
          'paid-advertising',
          'content-creation',
          'graphic-design',
        ],
      },
    ],
  },
  {
    category: 'e-commerce-online-business',
    subcategory: 'direct-to-consumer',
    types: [
      {
        name: 'D2C Brand',
        description:
          'Brands selling directly to consumers through their own channels.',
        focus:
          'D2C brands need a distinct story, an owned audience and repeat-purchase economics, so brand and retention work together.',
        start:
          'Clarify your positioning and build a direct ordering path.',
        does: [
          'Direct-to-consumer sales',
          'Product development and packaging',
          'Customer retention',
        ],
        online: [
          'Brand-led product pages',
          'Email and WhatsApp retention',
          'Paid acquisition with clear tracking',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'email-marketing',
        ],
      },
      {
        name: 'Online Fashion Brand',
        description:
          'Fashion brands selling clothing and accessories online.',
        focus:
          'Online fashion needs strong visuals, size confidence and easy returns to reduce hesitation.',
        start:
          'Fix product photography and size guidance before scaling ads.',
        does: [
          'Online fashion retail',
          'Collection drops and merchandising',
          'Returns and exchanges',
        ],
        online: [
          'Lookbook and product galleries',
          'Size and fit guidance',
          'Clear returns policy',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Online Beauty Brand',
        description:
          'Beauty brands selling skincare, makeup and personal care online.',
        focus:
          'Beauty buyers need ingredient clarity, shade guidance and authenticity, so product detail and reviews are critical.',
        start:
          'Publish ingredient and shade information with visible reviews.',
        does: [
          'Online beauty retail',
          'Product education and routines',
          'Subscription or repeat sales',
        ],
        online: [
          'Ingredient and routine pages',
          'Shade and skin-type guidance',
          'Review and user-content display',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'email-marketing',
        ],
      },
      {
        name: 'Online Home & Lifestyle Brand',
        description:
          'Brands selling homeware, decor and lifestyle products online.',
        focus:
          'Home brands sell through styling and room context, so photography and delivery confidence drive conversion.',
        start:
          'Shoot products in real rooms and publish delivery details.',
        does: [
          'Online homeware retail',
          'Collection curation',
          'Delivery and returns',
        ],
        online: [
          'Room-styled photography',
          'Dimensions and material detail',
          'Delivery and return policy',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
    ],
  },
  {
    category: 'e-commerce-online-business',
    subcategory: 'digital-business',
    types: [
      {
        name: 'Digital Product Business',
        description:
          'Businesses selling downloadable or access-based digital products.',
        focus:
          'Digital products need instant clarity on value, format and access, with a checkout that removes doubt.',
        start:
          'Publish exactly what the buyer receives and how access works.',
        does: [
          'Digital product creation',
          'Delivery and access management',
          'Customer support',
        ],
        online: [
          'Product preview and contents',
          'Instant delivery details',
          'Secure checkout',
        ],
        services: [
          'website-development',
          'email-marketing',
          'content-creation',
        ],
      },
      {
        name: 'Subscription Business',
        description:
          'Businesses selling recurring products or services on a subscription model.',
        focus:
          'Subscription buyers need to understand value, billing and cancellation before committing.',
        start:
          'Make plans, billing terms and cancellation easy to understand.',
        does: [
          'Recurring product or service delivery',
          'Plan and account management',
          'Retention and win-back',
        ],
        online: [
          'Plan comparison',
          'Billing and cancellation clarity',
          'An onboarding flow',
        ],
        services: [
          'website-development',
          'email-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Online Service Business',
        description:
          'Service businesses delivering work remotely through digital channels.',
        focus:
          'Online service buyers need proof of delivery quality and a clear process, since there is no physical office to visit.',
        start:
          'Publish your service process, deliverables and communication rhythm.',
        does: [
          'Remote service delivery',
          'Client communication',
          'Project management',
        ],
        online: [
          'Service and process pages',
          'Remote collaboration details',
          'Booking and enquiry',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'energy-environmental-services',
    subcategory: 'energy',
    types: [
      {
        name: 'Solar Company',
        description:
          'Companies selling and delivering solar energy systems.',
        focus:
          'Solar buyers need savings estimates, system options and subsidy clarity without exaggerated payback promises.',
        start:
          'Publish system sizes, estimated generation and subsidy guidance.',
        does: [
          'Solar system sales',
          'System design and installation',
          'Monitoring and service',
        ],
        online: [
          'System and savings pages',
          'Subsidy and finance details',
          'Site survey booking',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'seo',
        ],
      },
      {
        name: 'Solar Installer',
        description:
          'Installers fitting rooftop and ground-mounted solar systems.',
        focus:
          'Installation buyers need workmanship proof, safety and after-sales service, so credentials and process matter.',
        start:
          'Publish installation standards, warranty and service support.',
        does: [
          'Rooftop solar installation',
          'Wiring and commissioning',
          'Maintenance and repairs',
        ],
        online: [
          'Installation gallery',
          'Warranty and safety details',
          'A survey request',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'paid-advertising',
        ],
      },
      {
        name: 'Renewable Energy Company',
        description:
          'Companies developing renewable energy projects and solutions.',
        focus:
          'Renewable buyers need technical capability, project scale and commercial clarity across technologies.',
        start:
          'Publish technologies, project types and commercial models.',
        does: [
          'Renewable project development',
          'System integration',
          'Operations and maintenance',
        ],
        online: [
          'Technology and project pages',
          'Capability and compliance',
          'A project enquiry form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Battery & Inverter',
        description:
          'Suppliers and installers of batteries, inverters and backup power.',
        focus:
          'Backup-power buyers need capacity, compatibility and installation support, so product matching is essential.',
        start:
          'Publish product capacities, compatibility and installation service.',
        does: [
          'Inverter and battery supply',
          'Backup system installation',
          'Servicing and replacement',
        ],
        online: [
          'Product and capacity guide',
          'Compatibility and warranty',
          'Installation enquiry',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'EV Charging',
        description:
          'Providers installing and operating electric vehicle charging infrastructure.',
        focus:
          'EV charging buyers need site assessment, power requirements and ongoing support, so capability should be specific.',
        start:
          'Publish charger types, installation process and maintenance.',
        does: [
          'Charger supply and installation',
          'Site assessment and planning',
          'Monitoring and maintenance',
        ],
        online: [
          'Charger and use-case pages',
          'Installation and power details',
          'A site enquiry form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'energy-environmental-services',
    subcategory: 'water-waste',
    types: [
      {
        name: 'Water Treatment',
        description:
          'Providers of water purification, softening and treatment systems.',
        focus:
          'Water-treatment buyers need test results, system sizing and maintenance clarity, so practical guidance matters.',
        start:
          'Publish treatment options, testing process and maintenance plans.',
        does: [
          'Water testing and analysis',
          'Treatment system design',
          'Installation and servicing',
        ],
        online: [
          'Problem-based service pages',
          'System and maintenance details',
          'A test booking',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Waste Management',
        description:
          'Businesses collecting, processing and disposing of waste responsibly.',
        focus:
          'Waste-management clients need coverage, compliance and reporting, so service scope should be clear.',
        start:
          'Publish collection services, compliance and reporting.',
        does: [
          'Commercial and industrial waste collection',
          'Recycling and processing',
          'Compliance reporting',
        ],
        online: [
          'Service and coverage pages',
          'Compliance and reporting details',
          'A contract enquiry form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Recycling',
        description:
          'Businesses recovering, processing and reselling recyclable materials.',
        focus:
          'Recycling buyers and partners need material categories, processing capacity and traceability.',
        start:
          'Publish accepted materials, processing capacity and outcomes.',
        does: [
          'Material collection',
          'Sorting and processing',
          'Recycled material supply',
        ],
        online: [
          'Material and process pages',
          'Capacity and traceability',
          'A partnership enquiry form',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
  {
    category: 'energy-environmental-services',
    subcategory: 'environmental',
    types: [
      {
        name: 'Environmental Consultant',
        description:
          'Advisors supporting environmental compliance, impact assessment and sustainability.',
        focus:
          'Environmental clients need regulatory knowledge and clear scope, so credentials and process should be specific.',
        start:
          'Publish your compliance areas, assessments and sector experience.',
        does: [
          'Environmental assessments',
          'Compliance and permits',
          'Sustainability planning',
        ],
        online: [
          'Service and sector pages',
          'Credentials and process',
          'A consultation request',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
    ],
  },
];
