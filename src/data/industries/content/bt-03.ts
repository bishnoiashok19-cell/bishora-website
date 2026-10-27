import type { BusinessTypeContentGroup } from '../types';

/** Business-type content: Automotive, Real Estate & Construction, Beauty, Travel. */
export const businessTypeContentPart3: BusinessTypeContentGroup[] = [
  {
    category: 'automotive',
    subcategory: 'vehicle-sales',
    types: [
      {
        name: 'Car Dealer',
        description:
          'Authorised or independent dealerships selling new cars and managing test drives.',
        focus:
          'Car buyers research models and prices long before visiting, so current stock, variants and finance options need to be online.',
        start:
          'Publish available models, variants and a test-drive booking route.',
        does: [
          'New car sales and deliveries',
          'Test drives and variant comparisons',
          'Finance, insurance and exchange assistance',
        ],
        online: [
          'Model and variant catalogue',
          'Price and finance ranges',
          'Test-drive booking and showroom details',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'google-business-profile',
        ],
      },
      {
        name: 'Bike Dealer',
        description:
          'Dealerships selling new motorcycles and scooters with service support.',
        focus:
          'Bike buyers compare models, on-road prices and service costs, so clear variants and finance details matter.',
        start:
          'List models with on-road price ranges and test-ride booking.',
        does: [
          'New two-wheeler sales',
          'Test rides and model comparisons',
          'Finance, accessories and service support',
        ],
        online: [
          'Model and price pages',
          'Test-ride booking',
          'Showroom location and service contact',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'social-media-marketing',
        ],
      },
      {
        name: 'Used Car Dealer',
        description:
          'Dealers buying and selling pre-owned cars with varying mileage and condition.',
        focus:
          'Used-car buyers worry about condition and paperwork, so inspection details and transparent history build confidence.',
        start:
          'Publish each car with photos, kilometres and inspection notes.',
        does: [
          'Pre-owned car sales',
          'Vehicle inspection and refurbishment',
          'Exchange and finance assistance',
        ],
        online: [
          'Current stock with real photos',
          'Inspection and warranty notes',
          'WhatsApp enquiry for a specific car',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Used Bike Dealer',
        description:
          'Dealers selling pre-owned motorcycles and scooters.',
        focus:
          'Used-bike buyers need condition, documents and service history, so honest listings reduce wasted visits.',
        start:
          'List each bike with kilometres, condition and documents.',
        does: [
          'Pre-owned two-wheeler sales',
          'Condition checks and servicing',
          'Ownership transfer paperwork',
        ],
        online: [
          'Stock listings with photos and kilometres',
          'Document and condition details',
          'Contact route to arrange a viewing',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
    ],
  },
  {
    category: 'automotive',
    subcategory: 'vehicle-service',
    types: [
      {
        name: 'Car Workshop',
        description:
          'Independent garages servicing and repairing cars across brands.',
        focus:
          'Workshop customers need confidence in diagnosis, parts and pricing, so service menus and turnaround estimates help.',
        start:
          'Publish service packages, brands handled and booking contact.',
        does: [
          'Periodic servicing and inspections',
          'Diagnostics and mechanical repairs',
          'Parts replacement and consumables',
        ],
        online: [
          'Service menu with price ranges',
          'Booking or WhatsApp contact',
          'Location, timings and pickup options',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Bike Workshop',
        description:
          'Two-wheeler garages handling servicing, repairs and parts.',
        focus:
          'Bike owners want quick turnaround and honest repair advice, so service scope and wait times should be clear.',
        start:
          'List common services, brands handled and typical turnaround.',
        does: [
          'Periodic servicing',
          'Repairs and spare-part replacement',
          'Breakdown and pickup support',
        ],
        online: [
          'Service and price list',
          'Pickup or drop-off details',
          'WhatsApp booking and updates',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
      },
      {
        name: 'Auto Repair',
        description:
          'Repair shops diagnosing and fixing mechanical and electrical vehicle faults.',
        focus:
          'Repair customers arrive with a problem they may not understand, so clear diagnosis and approval steps build trust.',
        start:
          'Explain your diagnosis process and how estimates are approved.',
        does: [
          'Fault diagnosis and testing',
          'Mechanical and electrical repairs',
          'Post-repair checks and handover',
        ],
        online: [
          'Diagnostic and repair service pages',
          'Estimate request with vehicle details',
          'Towing or pickup information',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Tyre Shop',
        description:
          'Shops selling, fitting and repairing tyres and related wheel services.',
        focus:
          'Tyre buyers compare brands, sizes and fitting charges, so stock and fitment guidance should be easy to check.',
        start:
          'Publish tyre sizes, brands and fitting prices.',
        does: [
          'Tyre sales and fitting',
          'Wheel alignment and balancing',
          'Puncture repair and rotation',
        ],
        online: [
          'Tyre size and brand guide',
          'Fitting price list',
          'Walk-in hours and booking option',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
      },
      {
        name: 'Battery Shop',
        description:
          'Retailers selling, installing and servicing vehicle batteries.',
        focus:
          'Battery failure is urgent, so brand availability, compatibility and installation support should be immediately clear.',
        start:
          'List battery brands, vehicle compatibility and installation service.',
        does: [
          'Vehicle battery sales',
          'Testing and installation',
          'Old battery exchange and disposal',
        ],
        online: [
          'Brand and vehicle-model guide',
          'Emergency contact for breakdowns',
          'Doorstep installation coverage',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'paid-advertising',
        ],
      },
    ],
  },
  {
    category: 'automotive',
    subcategory: 'vehicle-care',
    types: [
      {
        name: 'Car Detailing',
        description:
          'Specialist cleaning and restoration services for vehicle interiors and paintwork.',
        focus:
          'Detailing is visual and trust-based, so close-up before-and-after work and package clarity are essential.',
        start:
          'Show detailed before-and-after results and package inclusions.',
        does: [
          'Interior deep cleaning',
          'Paint correction and polishing',
          'Ceramic coating and surface protection',
        ],
        online: [
          'High-quality before-and-after gallery',
          'Package inclusions and duration',
          'Booking form with vehicle details',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'google-business-profile',
        ],
      },
      {
        name: 'Car Wash',
        description:
          'Quick exterior and interior cleaning services for cars.',
        focus:
          'Car-wash customers choose on convenience and price, so location, wait times and service packages should be visible.',
        start:
          'Publish packages, timings and location with parking details.',
        does: [
          'Exterior washing and drying',
          'Interior vacuuming and wiping',
          'Quick detailing add-ons',
        ],
        online: [
          'Service packages and prices',
          'Location, hours and waiting notes',
          'WhatsApp availability check',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'social-media-marketing',
        ],
      },
    ],
  },
  {
    category: 'automotive',
    subcategory: 'vehicle-services',
    types: [
      {
        name: 'Car Rental',
        description:
          'Businesses renting cars for self-drive, corporate and travel use.',
        focus:
          'Rental customers need vehicle availability, rental terms and insurance clarity before booking.',
        start:
          'Publish the fleet, rental terms and booking requirements.',
        does: [
          'Self-drive car rental',
          'Corporate and long-term hire',
          'Airport or doorstep delivery',
        ],
        online: [
          'Fleet and rate pages',
          'Licence, deposit and insurance requirements',
          'Booking enquiry with dates',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'google-business-profile',
        ],
      },
      {
        name: 'Driving School',
        description:
          'Schools teaching learner drivers and preparing them for licence tests.',
        focus:
          'Learner drivers compare instructor experience, lesson formats and test support, so those details should be prominent.',
        start:
          'Explain lesson packages, instructor credentials and test preparation.',
        does: [
          'Practical driving lessons',
          'Licence test preparation',
          'Refresher and confidence lessons',
        ],
        online: [
          'Lesson packages and fees',
          'Instructor profiles and vehicles',
          'Trial lesson booking',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'paid-advertising',
        ],
      },
    ],
  },
  {
    category: 'real-estate-construction',
    subcategory: 'real-estate',
    types: [
      {
        name: 'Real Estate Company',
        description:
          'Companies involved in buying, selling, developing or managing residential and commercial property.',
        focus:
          'Property buyers and sellers need credible listings, local knowledge and a clear point of contact before they enquire.',
        start:
          'Publish current projects or listings with location and enquiry details.',
        does: [
          'Property sales and development',
          'Buyer and seller representation',
          'Project marketing and handover support',
        ],
        online: [
          'Verified property and project listings',
          'Location and specification pages',
          'Enquiry routing by property type',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'seo',
        ],
      },
      {
        name: 'Property Dealer',
        description:
          'Local dealers connecting property buyers, sellers and owners.',
        focus:
          'Property dealers are chosen for local inventory and responsiveness, so current listings and area knowledge are the main draw.',
        start:
          'Keep a current list of available properties by area and budget.',
        does: [
          'Property matching and introductions',
          'Site visits and price negotiation',
          'Sale and purchase coordination',
        ],
        online: [
          'Listings by area and budget',
          'A direct WhatsApp enquiry route',
          'Short local market notes',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Property Consultant',
        description:
          'Advisors guiding clients on property selection, investment and transaction decisions.',
        focus:
          'Consultants sell judgement rather than inventory, so process, specialisation and independent advice need to be clear.',
        start:
          'Explain your advisory process and the property decisions you support.',
        does: [
          'Property needs and budget assessment',
          'Location and market analysis',
          'Transaction and documentation guidance',
        ],
        online: [
          'Advisory service pages',
          'Process and fee structure',
          'Consultation booking',
        ],
        services: [
          'website-development',
          'content-creation',
          'seo',
        ],
      },
      {
        name: 'Property Management',
        description:
          'Firms managing rented properties, tenants and maintenance on behalf of owners.',
        focus:
          'Owners need proof of tenant screening, rent collection and maintenance handling, while tenants need clear service channels.',
        start:
          'Publish owner services, tenant processes and maintenance response times.',
        does: [
          'Tenant sourcing and screening',
          'Rent collection and accounting',
          'Maintenance and move-in coordination',
        ],
        online: [
          'Separate owner and tenant pages',
          'Service-level and fee details',
          'Maintenance and enquiry forms',
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
    category: 'real-estate-construction',
    subcategory: 'construction',
    types: [
      {
        name: 'Builder',
        description:
          'Developers and builders constructing homes, apartments and commercial projects.',
        focus:
          'Builders are judged on delivered projects and process reliability, so completed work and approval experience matter.',
        start:
          'Publish completed projects with specifications and possession timelines.',
        does: [
          'Residential and commercial construction',
          'Project planning and approvals',
          'Handover and warranty support',
        ],
        online: [
          'Project portfolio with real photos',
          'Specification and approval details',
          'Site visit booking',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'social-media-marketing',
        ],
      },
      {
        name: 'Construction Company',
        description:
          'Companies delivering construction contracts across residential, commercial and infrastructure work.',
        focus:
          'Construction clients need evidence of capacity, safety records and contract experience, so credentials should be specific.',
        start:
          'Publish project types, capacity and safety or compliance information.',
        does: [
          'Contract construction delivery',
          'Project and site management',
          'Subcontractor and material coordination',
        ],
        online: [
          'Sector and project pages',
          'Safety and compliance details',
          'Tender or quote contact',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Contractor',
        description:
          'Contractors taking on defined construction or fit-out work packages.',
        focus:
          'Contractors win work on scope clarity, reliability and pricing, so the trades covered and quote process should be explicit.',
        start:
          'List the work packages you handle and how quotes are prepared.',
        does: [
          'Defined construction and fit-out packages',
          'Labour and material coordination',
          'Site supervision and handover',
        ],
        online: [
          'Work-package pages',
          'Project examples',
          'Quote request form',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Civil Contractor',
        description:
          'Contractors handling civil works such as roads, drainage, foundations and structures.',
        focus:
          'Civil work buyers need technical capability and compliance evidence, so project scale and certifications matter.',
        start:
          'Publish civil work categories, equipment and compliance details.',
        does: [
          'Civil construction and earthworks',
          'Foundations, drainage and structures',
          'Site execution and quality checks',
        ],
        online: [
          'Capability and project pages',
          'Equipment and compliance details',
          'Tender and project enquiry contact',
        ],
        services: [
          'website-development',
          'seo',
          'email-marketing',
        ],
      },
      {
        name: 'Renovation Contractor',
        description:
          'Contractors remodelling and upgrading existing homes and commercial spaces.',
        focus:
          'Renovation clients fear disruption and hidden costs, so scope, timeline and change-order handling need to be clear.',
        start:
          'Explain the renovation process and how costs are controlled.',
        does: [
          'Home and office renovation',
          'Structural and layout changes',
          'Finishing, snagging and handover',
        ],
        online: [
          'Before-and-after project gallery',
          'Process and timeline expectations',
          'Estimate and site-visit booking',
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
    category: 'real-estate-construction',
    subcategory: 'architecture-interior',
    types: [
      {
        name: 'Architecture & Planning',
        description:
          'Architectural practices providing building design, planning and approval drawings.',
        focus:
          'Planning clients need to understand approval requirements and design stages, so a clear process reduces uncertainty.',
        start:
          'Publish design stages, approval support and project examples.',
        does: [
          'Architectural design and planning',
          'Approval drawings and documentation',
          'Site and construction coordination',
        ],
        online: [
          'Project gallery by building type',
          'Approval and design process explained',
          'Consultation booking',
        ],
        services: [
          'website-development',
          'seo',
          'content-creation',
        ],
      },
      {
        name: 'Interior Design',
        description:
          'Interior studios designing residential and commercial spaces, finishes and furniture.',
        focus:
          'Interior design is bought visually, so completed spaces, material palettes and budget ranges should be shown honestly.',
        start:
          'Publish room-wise portfolios and explain the design stages.',
        does: [
          'Concept and space planning',
          'Material, lighting and furniture selection',
          'Execution coordination and handover',
        ],
        online: [
          'Portfolio by room and budget',
          'Process and timeline details',
          'Consultation form',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'graphic-design',
        ],
      },
    ],
  },
  {
    category: 'real-estate-construction',
    subcategory: 'home-development',
    types: [
      {
        name: 'Modular Kitchen',
        description:
          'Specialists designing, manufacturing and installing modular kitchen systems.',
        focus:
          'Kitchen buyers compare layout, materials and hardware, so detailed specifications and real installations are essential.',
        start:
          'Publish layout options, materials and hardware brands.',
        does: [
          'Kitchen design and measurement',
          'Modular manufacturing',
          'Installation and after-sales service',
        ],
        online: [
          'Gallery of installed kitchens',
          'Material and hardware details',
          'Showroom or home-visit booking',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'google-business-profile',
        ],
      },
      {
        name: 'Home Renovation',
        description:
          'Companies renovating homes through layout changes, upgrades and full remodels.',
        focus:
          'Homeowners need confidence about timeline, dust control and budget, so process transparency matters as much as photos.',
        start:
          'Publish project scope options and a clear renovation timeline.',
        does: [
          'Full-home and partial renovation',
          'Layout and utility upgrades',
          'Finishing and handover',
        ],
        online: [
          'Before-and-after gallery',
          'Package and timeline details',
          'Site assessment booking',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Roofing',
        description:
          'Roofing contractors installing, repairing and waterproofing roof systems.',
        focus:
          'Roofing buyers need material options, warranty terms and weather-related urgency handled clearly.',
        start:
          'Publish roofing systems, warranty details and inspection booking.',
        does: [
          'Roof installation and replacement',
          'Leak repair and storm damage',
          'Waterproofing and insulation',
        ],
        online: [
          'Material and system pages',
          'Warranty information',
          'Inspection request form',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Waterproofing',
        description:
          'Specialists treating terraces, basements and walls against water damage.',
        focus:
          'Waterproofing is a technical fix, so diagnosis, materials and warranty terms must be explained rather than promised vaguely.',
        start:
          'Explain your inspection process, treatments and warranty.',
        does: [
          'Leak diagnosis and moisture testing',
          'Terrace, basement and wall treatment',
          'Protective coatings and finishes',
        ],
        online: [
          'Problem-based service pages',
          'Treatment and warranty details',
          'Inspection booking',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'paid-advertising',
        ],
      },
      {
        name: 'Flooring',
        description:
          'Suppliers and installers of tiles, wood, vinyl and other floor finishes.',
        focus:
          'Flooring buyers compare material durability, finish and installation, so samples and site guidance matter.',
        start:
          'Publish material types, finishes and installation process.',
        does: [
          'Flooring material supply',
          'Site measurement and preparation',
          'Installation and finishing',
        ],
        online: [
          'Material and finish gallery',
          'Durability and maintenance notes',
          'Sample or site-visit request',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'google-business-profile',
        ],
      },
    ],
  },
  {
    category: 'beauty-lifestyle',
    subcategory: 'beauty',
    types: [
      {
        name: 'Salon',
        description:
          'Full-service salons offering haircuts, styling, colour and beauty treatments.',
        focus:
          'Salon clients choose on stylist skill, price and booking convenience, so service menus and real work photos are key.',
        start:
          'Publish the service menu, price list and online booking route.',
        does: [
          'Haircuts, colour and styling',
          'Beauty and grooming treatments',
          'Bridal and event packages',
        ],
        online: [
          'Service and price menu',
          'Stylist profiles and work photos',
          'Booking and cancellation policy',
        ],
        services: [
          'google-business-profile',
          'social-media-marketing',
          'website-development',
        ],
      },
      {
        name: 'Barber',
        description:
          'Barbershops focused on men haircuts, beard grooming and shaving.',
        focus:
          'Barbershops sell consistency and atmosphere, so chair availability and signature styles should be easy to see.',
        start:
          'Show your cuts, price list and walk-in or booking policy.',
        does: [
          'Men haircuts and fades',
          'Beard trimming and shaving',
          'Grooming products',
        ],
        online: [
          'Style gallery of real cuts',
          'Price and booking policy',
          'Location and opening hours',
        ],
        services: [
          'google-business-profile',
          'social-media-marketing',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Beauty Parlour',
        description:
          'Neighbourhood parlours offering skincare, waxing, threading and grooming services.',
        focus:
          'Parlour clients value hygiene, privacy and clear pricing, so treatment details and hygiene practices should be visible.',
        start:
          'Publish treatment and price lists with hygiene information.',
        does: [
          'Skincare and facials',
          'Waxing, threading and grooming',
          'Bridal and party preparation',
        ],
        online: [
          'Treatment and price menu',
          'Hygiene and product details',
          'Appointment booking',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'social-media-marketing',
        ],
      },
      {
        name: 'Spa',
        description:
          'Wellness spas offering massage, body treatments and relaxation therapies.',
        focus:
          'Spa clients buy calm and privacy, so treatment descriptions, therapist credentials and booking expectations should feel reassuring.',
        start:
          'Explain each therapy, duration and what a visit includes.',
        does: [
          'Massage and body therapies',
          'Facials and wellness treatments',
          'Couples and package sessions',
        ],
        online: [
          'Treatment menu with durations',
          'Therapist and hygiene details',
          'Booking and preparation notes',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'google-business-profile',
        ],
      },
    ],
  },
  {
    category: 'beauty-lifestyle',
    subcategory: 'makeup',
    types: [
      {
        name: 'Makeup Artist',
        description:
          'Freelance artists providing makeup for events, shoots and personal occasions.',
        focus:
          'Makeup artists are booked on visible work and style fit, so a portfolio by look and occasion is essential.',
        start:
          'Publish a portfolio by occasion and explain booking terms.',
        does: [
          'Event and party makeup',
          'Photoshoot and editorial makeup',
          'Trials, travel and on-location work',
        ],
        online: [
          'Look-based portfolio',
          'Service, travel and booking details',
          'WhatsApp enquiry with date and location',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'google-business-profile',
        ],
      },
      {
        name: 'Bridal Makeup',
        description:
          'Specialists providing bridal makeup, trials and wedding-day support.',
        focus:
          'Bridal clients plan months ahead and need style, products and timing confidence, so trials and wedding-day logistics matter.',
        start:
          'Show bridal looks and explain trial and booking steps.',
        does: [
          'Bridal makeup trials',
          'Wedding-day makeup and touch-ups',
          'Family and bridesmaid makeup',
        ],
        online: [
          'Bridal portfolio by style',
          'Trial and package details',
          'Date and location enquiry form',
        ],
        services: [
          'social-media-marketing',
          'website-development',
          'paid-advertising',
        ],
      },
    ],
  },
  {
    category: 'beauty-lifestyle',
    subcategory: 'fitness-wellness',
    types: [
      {
        name: 'Fitness Centre',
        description:
          'Facilities offering gym equipment, group classes and fitness programmes.',
        focus:
          'Fitness centres need to show facilities, class schedules and membership terms clearly to convert local interest.',
        start:
          'Publish facilities, class timetable and membership options.',
        does: [
          'Gym access and equipment',
          'Group fitness classes',
          'Personal training and programmes',
        ],
        online: [
          'Facility tour photos',
          'Class timetable',
          'Membership and trial details',
        ],
        services: [
          'google-business-profile',
          'social-media-marketing',
          'website-development',
        ],
      },
      {
        name: 'Gym',
        description:
          'Strength and cardio gyms focused on equipment access and training.',
        focus:
          'Gym members compare equipment, crowd levels and contract terms, so practical detail beats generic fitness slogans.',
        start:
          'Show the equipment, floor plan and membership terms.',
        does: [
          'Strength and cardio training',
          'Free weights and resistance machines',
          'Membership access and inductions',
        ],
        online: [
          'Equipment and facility gallery',
          'Timings and membership plans',
          'Trial pass booking',
        ],
        services: [
          'google-business-profile',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Yoga Studio',
        description:
          'Studios teaching yoga styles, breathwork and mindful movement.',
        focus:
          'Yoga students want to know the style, teacher and class level, so a clear timetable and philosophy build fit.',
        start:
          'Publish the timetable, styles and beginner class details.',
        does: [
          'Group yoga classes',
          'Private and corporate sessions',
          'Workshops and retreats',
        ],
        online: [
          'Class timetable and levels',
          'Teacher profiles',
          'Trial class booking',
        ],
        services: [
          'google-business-profile',
          'social-media-marketing',
          'website-development',
        ],
      },
      {
        name: 'Pilates Studio',
        description:
          'Studios offering mat and equipment Pilates for strength, posture and rehabilitation.',
        focus:
          'Pilates clients need to understand equipment, class size and instructor qualification, especially for rehab.',
        start:
          'Explain equipment, class sizes and beginner options.',
        does: [
          'Mat and reformer Pilates',
          'Small-group sessions',
          'Postural and rehabilitation programmes',
        ],
        online: [
          'Class types and equipment',
          'Instructor credentials',
          'Intro offer booking',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
      },
      {
        name: 'Personal Trainer',
        description:
          'Independent trainers designing and supervising individual fitness programmes.',
        focus:
          'Personal training is sold on trust and measurable progress, so trainer credentials and session structure should be explicit.',
        start:
          'Publish your training approach, credentials and session options.',
        does: [
          'One-to-one training sessions',
          'Custom programme design',
          'Nutrition and habit guidance',
        ],
        online: [
          'Trainer profile and certifications',
          'Session packages and pricing',
          'Consultation booking',
        ],
        services: [
          'social-media-marketing',
          'google-business-profile',
          'website-development',
        ],
      },
      {
        name: 'Meditation Centre',
        description:
          'Centres teaching meditation, mindfulness and relaxation practices.',
        focus:
          'Meditation centres need a calm, credible tone that explains the practice without overpromising health outcomes.',
        start:
          'Describe sessions, teachers and what a first visit involves.',
        does: [
          'Guided meditation sessions',
          'Mindfulness courses',
          'Group and corporate programmes',
        ],
        online: [
          'Session and course information',
          'Teacher backgrounds',
          'Booking and visit guidance',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'google-business-profile',
        ],
      },
    ],
  },
  {
    category: 'travel-transport',
    subcategory: 'travel',
    types: [
      {
        name: 'Travel Agency',
        description:
          'Agencies booking flights, hotels, packages and travel arrangements for clients.',
        focus:
          'Travel agencies compete on trust and problem-solving, so destination coverage, fees and support should be clear.',
        start:
          'Publish the destinations and booking services you handle.',
        does: [
          'Flight and hotel bookings',
          'Holiday packages and itineraries',
          'Travel documents and support',
        ],
        online: [
          'Destination and package pages',
          'Booking and fee details',
          'WhatsApp enquiry',
        ],
        services: [
          'website-development',
          'paid-advertising',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Tour Operator',
        description:
          'Operators designing and running group or private tours.',
        focus:
          'Tour operators sell itinerary quality and operational reliability, so day-by-day detail and inclusions matter.',
        start:
          'Publish sample itineraries with inclusions and pricing.',
        does: [
          'Tour design and operation',
          'Transport, stays and guides',
          'Group and custom departures',
        ],
        online: [
          'Itinerary pages with maps',
          'Inclusion and exclusion lists',
          'Booking enquiry',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Travel Consultant',
        description:
          'Independent consultants planning customised trips and travel logistics.',
        focus:
          'Travel consultants sell personal planning and saved time, so specialisation and response style need to be visible.',
        start:
          'Explain the destinations and trip types you plan best.',
        does: [
          'Trip planning and bookings',
          'Itinerary customisation',
          'Travel documentation advice',
        ],
        online: [
          'Specialisation and planning process',
          'Consultation booking',
          'Client enquiry form',
        ],
        services: [
          'website-development',
          'content-creation',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Pilgrimage Tour Operator',
        description:
          'Operators running religious pilgrimage journeys with group logistics and guidance.',
        focus:
          'Pilgrimage travellers need confidence in arrangements, accessibility and spiritual context, so practical detail matters.',
        start:
          'Publish itineraries, departure dates and what is included.',
        does: [
          'Pilgrimage group tours',
          'Transport, stays and darshan assistance',
          'Guides and on-trip support',
        ],
        online: [
          'Route and departure-date pages',
          'Inclusion and accessibility notes',
          'Enquiry and booking route',
        ],
        services: [
          'website-development',
          'social-media-marketing',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Adventure Tourism',
        description:
          'Operators running trekking, rafting, camping and outdoor adventure trips.',
        focus:
          'Adventure customers need safety standards, difficulty levels and equipment details before booking.',
        start:
          'Publish trip difficulty, safety measures and included gear.',
        does: [
          'Guided adventure trips',
          'Equipment, permits and logistics',
          'Safety briefings and support',
        ],
        online: [
          'Trip pages with difficulty ratings',
          'Safety and gear details',
          'Booking form',
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
    category: 'travel-transport',
    subcategory: 'passenger-transport',
    types: [
      {
        name: 'Taxi Service',
        description:
          'Local taxi providers offering on-demand and pre-booked rides.',
        focus:
          'Taxi customers need fare clarity, availability and a reliable contact route, especially at short notice.',
        start:
          'Publish fare estimates, coverage and a direct booking number.',
        does: [
          'Local and outstation taxi rides',
          'Airport and station transfers',
          'Pre-booked and recurring trips',
        ],
        online: [
          'Fare and coverage details',
          'Call or WhatsApp booking',
          'Driver and safety information',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'paid-advertising',
        ],
      },
      {
        name: 'Cab Service',
        description:
          'Cab companies providing app-based or phone-based city and intercity travel.',
        focus:
          'Cab customers compare availability, vehicle options and pricing, so a fast booking route is the main conversion point.',
        start:
          'List vehicle categories, routes and booking contact.',
        does: [
          'City and intercity cabs',
          'Corporate travel accounts',
          'Airport and hotel transfers',
        ],
        online: [
          'Vehicle and route information',
          'Instant booking contact',
          'Fare ranges and waiting policy',
        ],
        services: [
          'google-business-profile',
          'paid-advertising',
          'website-development',
        ],
      },
      {
        name: 'Bus Operator',
        description:
          'Operators running scheduled or chartered bus services.',
        focus:
          'Bus passengers need routes, timings and seat availability, while charter clients need capacity and quote details.',
        start:
          'Publish routes, schedules and charter enquiry details.',
        does: [
          'Scheduled bus services',
          'Charter and group travel',
          'Fleet, driver and schedule management',
        ],
        online: [
          'Route and timetable pages',
          'Charter quote form',
          'Boarding points and contact',
        ],
        services: [
          'website-development',
          'google-business-profile',
          'whatsapp-marketing',
        ],
      },
    ],
  },
  {
    category: 'travel-transport',
    subcategory: 'travel-support',
    types: [
      {
        name: 'Visa Consultant',
        description:
          'Consultants guiding applicants through visa documentation and submission.',
        focus:
          'Visa applicants are anxious about rejection, so country requirements, timelines and honest limits must be explicit.',
        start:
          'Publish country-wise document checklists and processing times.',
        does: [
          'Visa documentation and review',
          'Application submission and tracking',
          'Appointment and interview guidance',
        ],
        online: [
          'Country-specific requirement pages',
          'Fee and timeline details',
          'Document upload or enquiry route',
        ],
        services: [
          'website-development',
          'seo',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Passport Service',
        description:
          'Agencies assisting with passport applications, renewals and corrections.',
        focus:
          'Passport customers need document accuracy and appointment guidance, so checklists and timelines reduce costly mistakes.',
        start:
          'Publish service-wise checklists and appointment steps.',
        does: [
          'New passport applications',
          'Renewals and reissues',
          'Corrections and verification guidance',
        ],
        online: [
          'Document checklists',
          'Fee and timeline information',
          'Appointment assistance',
        ],
        services: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
      },
      {
        name: 'Ticketing Service',
        description:
          'Agencies booking flight, train, bus and event tickets.',
        focus:
          'Ticketing customers need availability, fare rules and refund clarity, so fast, accurate responses matter.',
        start:
          'Explain the ticket types and booking or cancellation process.',
        does: [
          'Flight, rail and bus ticketing',
          'Group and event bookings',
          'Changes, cancellations and refunds',
        ],
        online: [
          'A direct booking enquiry route',
          'Fare and cancellation rules',
          'WhatsApp support for urgent changes',
        ],
        services: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
      },
    ],
  },
];
