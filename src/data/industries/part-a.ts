import type { IndustrySeed } from './types';

/** Categories 01–06 of the approved industry directory. */
export const industriesPartA: IndustrySeed[] = [
  {
    number: 1,
    name: 'Food & Hospitality',
    description:
      'Restaurants, cafés, bakeries, food service and accommodation businesses.',
    intro:
      'Food and hospitality is a local, trust-led business. People decide quickly, compare options on their phone and expect the details they find to be accurate.',
    overview: [
      'This category covers businesses that prepare, serve or sell food and drink, along with places to stay. It ranges from a single tea shop to a restaurant, a catering operation or a boutique hotel.',
      'Most customers start with a search, a map listing or a recommendation. Menus, timings, photos, location and reviews do more selling than any slogan on a homepage.',
    ],
    considerations: [
      'Menus, prices and opening hours that are easy to find and always current.',
      'Accurate map listings with real photos, directions and one-tap calling.',
      'A simple way to reserve a table, order or ask a question on WhatsApp.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'social-media-marketing',
      'paid-advertising',
    ],
    relatedSlugs: ['travel-transport', 'events-entertainment', 'retail'],
    subcategories: [
      {
        name: 'Restaurants & Dining',
        description:
          'Dine-in restaurants, cafés, dhabas and quick-service outlets serving local customers.',
        digitalFocus:
          'Show the menu, the atmosphere and the location clearly, and make table enquiries easy.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: [
          'Restaurant',
          'Cafe',
          'Dhaba',
          'Fast Food',
          'Tea Shop',
          'Juice Shop',
          'Bar',
        ],
      },
      {
        name: 'Bakeries & Sweets',
        description:
          'Bakeries and sweet shops selling fresh products, celebration orders and gifting.',
        digitalFocus:
          'Keep product ranges and custom-order details visible, with photos that match what customers receive.',
        serviceSlugs: [
          'google-business-profile',
          'social-media-marketing',
          'website-development',
        ],
        businessTypes: ['Bakery', 'Sweet Shop'],
      },
      {
        name: 'Food Services',
        description:
          'Catering, cloud kitchens and delivery-led food businesses serving homes and events.',
        digitalFocus:
          'Explain menus, minimum orders and service areas, and capture enquiries before the event date.',
        serviceSlugs: [
          'website-development',
          'paid-advertising',
          'whatsapp-marketing',
        ],
        businessTypes: ['Catering', 'Cloud Kitchen', 'Food Delivery'],
      },
      {
        name: 'Accommodation',
        description:
          'Hotels, resorts, homestays and other stays that take direct and online bookings.',
        digitalFocus:
          'Make rooms, rates and availability simple to check, and reduce dependence on third-party booking platforms.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'paid-advertising',
          'content-creation',
        ],
        businessTypes: [
          'Hotel',
          'Resort',
          'Homestay',
          'Guest House',
          'Hostel',
          'PG Accommodation',
          'Lodge',
          'Boutique Hotel',
          'Vacation Rental',
        ],
      },
    ],
  },
  {
    number: 2,
    name: 'Healthcare',
    description:
      'Clinics, hospitals, diagnostic centres, pharmacies and allied health practices.',
    intro:
      'Healthcare searches are urgent and personal. Patients look for clear information, credible credentials and a simple way to book.',
    overview: [
      'This category covers medical and allied health providers: individual doctors, hospitals, specialist clinics, diagnostic centres, pharmacies and home-care services.',
      'Patients and families usually compare a few providers in a hurry. Accurate timings, specialities, location and a visible appointment route remove most of the friction.',
    ],
    considerations: [
      'Specialities, doctors and consultation hours stated accurately.',
      'A direct appointment or call option on every page and listing.',
      'Patient information written carefully, without promising treatment outcomes.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'seo',
      'social-media-marketing',
    ],
    relatedSlugs: [
      'beauty-lifestyle',
      'pets-animal-services',
      'professional-services',
    ],
    subcategories: [
      {
        name: 'Medical Care',
        description:
          'Individual doctors, hospitals and general clinics serving patients in a local area.',
        digitalFocus:
          'Publish specialities, consultation timings and a direct appointment route.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'seo',
        ],
        businessTypes: [
          'Doctor',
          'Hospital',
          'Clinic',
          'Multi-Specialty Clinic',
        ],
      },
      {
        name: 'Specialized Care',
        description:
          'Focused practices covering dental, eye, skin, orthopaedic, ENT, physiotherapy and mental health.',
        digitalFocus:
          'Explain the conditions treated and make the first consultation easy to request.',
        serviceSlugs: [
          'seo',
          'website-development',
          'google-business-profile',
        ],
        businessTypes: [
          'Dentist',
          'Dental Clinic',
          'Eye Clinic',
          'Skin Clinic',
          'ENT',
          'Orthopedic',
          'Physiotherapist',
          'Mental Health Professional',
        ],
      },
      {
        name: 'Diagnostics',
        description:
          'Labs and imaging centres that support diagnosis and ongoing treatment.',
        digitalFocus:
          'Show test availability, preparation instructions, timings and report collection clearly.',
        serviceSlugs: [
          'seo',
          'google-business-profile',
          'website-development',
        ],
        businessTypes: [
          'Diagnostic Centre',
          'Pathology Lab',
          'Imaging & Radiology Centre',
        ],
      },
      {
        name: 'Alternative Medicine',
        description:
          'Ayurveda, homeopathy and naturopathy practices offering consultative care.',
        digitalFocus:
          'Describe treatments honestly, without promising outcomes, and make consultations easy to book.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'google-business-profile',
        ],
        businessTypes: ['Ayurveda', 'Homeopathy', 'Naturopathy'],
      },
      {
        name: 'Healthcare Support',
        description:
          'Pharmacies, home nursing and medical equipment suppliers supporting patient care.',
        digitalFocus:
          'Keep stock, service areas and delivery options easy to check by phone or message.',
        serviceSlugs: [
          'google-business-profile',
          'whatsapp-marketing',
          'website-development',
        ],
        businessTypes: [
          'Pharmacy',
          'Nursing & Home Healthcare',
          'Medical Equipment Supplier',
        ],
      },
      {
        name: 'Animal Healthcare',
        description:
          'Veterinary practices caring for pets and farm animals.',
        digitalFocus:
          'Combine clinic details with emergency guidance and clear appointment hours.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: ['Veterinary'],
      },
    ],
  },
  {
    number: 3,
    name: 'Professional Services',
    description:
      'Legal, accounting, consulting, insurance, design and digital practices.',
    intro:
      'Professional services are sold on expertise and trust. Clients compare carefully before they ever make contact.',
    overview: [
      'This category covers advice-led businesses: legal and compliance practices, accountants and financial advisers, consultants, insurance professionals, architects and digital service providers.',
      'Buyers are usually weighing risk as much as price. Plain explanations of scope, process and credentials do more for conversion than a long list of credentials on a home page.',
    ],
    considerations: [
      'Practice areas or service lines explained in plain, specific language.',
      'A visible process so clients know what happens after an enquiry.',
      'Confidential contact routes that work on both desktop and mobile.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'content-creation',
      'google-business-profile',
    ],
    relatedSlugs: [
      'b2b-corporate-services',
      'technology-it',
      'real-estate-construction',
    ],
    subcategories: [
      {
        name: 'Legal & Compliance',
        description:
          'Lawyers, advocates, notaries and compliance professionals advising individuals and businesses.',
        digitalFocus:
          'Explain practice areas in plain language and make confidential enquiries straightforward.',
        serviceSlugs: [
          'website-development',
          'seo',
          'content-creation',
        ],
        businessTypes: [
          'Lawyer',
          'Advocate',
          'Legal Consultant',
          'Notary Service',
          'Company Secretary',
        ],
      },
      {
        name: 'Finance & Accounting',
        description:
          'Chartered accountants, tax advisers and financial professionals supporting personal and business finance.',
        digitalFocus:
          'Clarify services, document requirements and deadlines before the first call.',
        serviceSlugs: [
          'seo',
          'website-development',
          'content-creation',
        ],
        businessTypes: [
          'CA',
          'Accountant',
          'Tax Consultant',
          'Financial Advisor',
          'Investment Advisor',
        ],
      },
      {
        name: 'Consulting',
        description:
          'Business, management, HR, IT and marketing consultants working with growing organisations.',
        digitalFocus:
          'Show the problems you solve and the sectors you know, with a credible enquiry path.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'seo',
        ],
        businessTypes: [
          'Business Consultant',
          'Management Consultant',
          'HR Consultant',
          'IT Consultant',
          'Marketing Consultant',
        ],
      },
      {
        name: 'Insurance',
        description:
          'Agents and advisers helping people and businesses choose suitable cover.',
        digitalFocus:
          'Make it easy to understand the types of cover you handle and request a review.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'seo',
        ],
        businessTypes: ['Insurance Agent', 'Insurance Advisor'],
      },
      {
        name: 'Architecture & Design',
        description:
          'Architects and interior designers planning spaces for homes and commercial clients.',
        digitalFocus:
          'Lead with project imagery, process and the areas you serve.',
        serviceSlugs: [
          'website-development',
          'graphic-design',
          'social-media-marketing',
        ],
        businessTypes: ['Architect', 'Interior Designer'],
      },
      {
        name: 'Digital Services',
        description:
          'Agencies and freelancers delivering digital marketing, web and design work.',
        digitalFocus:
          'Demonstrate process and specialisms clearly rather than listing every service you could offer.',
        serviceSlugs: [
          'seo',
          'paid-advertising',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: [
          'Digital Agency',
          'SEO Agency',
          'Web Development',
          'Graphic Design',
        ],
      },
    ],
  },
  {
    number: 4,
    name: 'Home & Local Services',
    description:
      'Repair, maintenance, cleaning, security and moving businesses that serve local homes.',
    intro:
      'Home service customers need someone reliable, nearby and available. Most enquiries happen on a phone, often in a hurry.',
    overview: [
      'This category covers the trades and services households call when something needs fixing, cleaning, securing or moving. The work is practical and the decision is usually immediate.',
      'A customer rarely reads a long page. They check whether you cover their area, whether you look legitimate and whether there is an obvious number to call.',
    ],
    considerations: [
      'Service area and response time visible before anything else.',
      'One-tap calling and WhatsApp on every listing and page.',
      'Photos of completed work rather than generic stock imagery.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'paid-advertising',
      'whatsapp-marketing',
    ],
    relatedSlugs: [
      'real-estate-construction',
      'industrial-commercial-services',
      'security-safety',
    ],
    subcategories: [
      {
        name: 'Home Repair',
        description:
          'Electricians, plumbers, carpenters and appliance technicians handling household repairs.',
        digitalFocus:
          'Make your service area, response time and call button impossible to miss.',
        serviceSlugs: [
          'google-business-profile',
          'paid-advertising',
          'website-development',
        ],
        businessTypes: [
          'Electrician',
          'Plumber',
          'Carpenter',
          'Painter',
          'AC Repair',
          'RO Service',
          'Appliance Repair',
        ],
      },
      {
        name: 'Home Care',
        description:
          'Cleaning, pest control, laundry and maintenance services for homes and small offices.',
        digitalFocus:
          'Explain what a visit includes and how recurring bookings work.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
        businessTypes: [
          'Cleaning Service',
          'Pest Control',
          'Laundry',
          'Dry Cleaning',
          'Home Maintenance',
        ],
      },
      {
        name: 'Security & Moving',
        description:
          'Security installation, monitoring and relocation services for homes and premises.',
        digitalFocus:
          'Build trust with a clear process, equipment details and service coverage.',
        serviceSlugs: [
          'website-development',
          'google-business-profile',
          'paid-advertising',
        ],
        businessTypes: [
          'Security Service',
          'CCTV Installation',
          'Alarm System',
          'Movers & Packers',
        ],
      },
    ],
  },
  {
    number: 5,
    name: 'Education & Training',
    description:
      'Schools, coaching centres, institutes and professional training providers.',
    intro:
      'Education decisions involve parents, students and working professionals. The website often has to answer detailed questions before a call.',
    overview: [
      'This category covers formal education, coaching, skill training, creative classes and career guidance. The audience ranges from school children to working adults.',
      'Prospects compare schedules, fees, faculty and location carefully. Clear course information and an honest picture of what students get are the strongest trust signals.',
    ],
    considerations: [
      'Course or programme details organised for quick comparison.',
      'Fee, duration and admission steps that are easy to find.',
      'Location, batch timings and online options kept current.',
    ],
    serviceSlugs: [
      'website-development',
      'seo',
      'social-media-marketing',
      'paid-advertising',
    ],
    relatedSlugs: [
      'recruitment-employment',
      'sports-recreation',
      'professional-services',
    ],
    subcategories: [
      {
        name: 'Formal Education',
        description:
          'Schools, colleges and universities with structured programmes and admissions.',
        digitalFocus:
          'Keep admissions, facilities and contact details accurate across every listing.',
        serviceSlugs: [
          'website-development',
          'seo',
          'google-business-profile',
        ],
        businessTypes: ['School', 'College', 'University'],
      },
      {
        name: 'Coaching & Tutoring',
        description:
          'Coaching institutes and tuition centres preparing students for exams and coursework.',
        digitalFocus:
          'Publish batch details, timings and results honestly, with a simple enquiry form.',
        serviceSlugs: [
          'paid-advertising',
          'website-development',
          'social-media-marketing',
        ],
        businessTypes: [
          'Coaching Institute',
          'Tuition Centre',
          'Competitive Exam Coaching',
          'Test Preparation',
        ],
      },
      {
        name: 'Skills & Professional Training',
        description:
          'Institutes delivering computer, vocational and corporate training.',
        digitalFocus:
          'Explain course modules, duration and who each course suits.',
        serviceSlugs: [
          'website-development',
          'seo',
          'paid-advertising',
        ],
        businessTypes: [
          'Computer Institute',
          'Skill Training',
          'Vocational Training',
          'Corporate Training',
        ],
      },
      {
        name: 'Languages & Creative Education',
        description:
          'Language schools and creative academies teaching practical skills and hobbies.',
        digitalFocus:
          'Show class schedules, levels and trial options clearly.',
        serviceSlugs: [
          'social-media-marketing',
          'website-development',
          'google-business-profile',
        ],
        businessTypes: [
          'Language Institute',
          'Spoken English Institute',
          'Music School',
          'Dance Academy',
          'Art Classes',
        ],
      },
      {
        name: 'Career Education',
        description:
          'Counsellors and consultants guiding students and professionals on next steps.',
        digitalFocus:
          'Explain the counselling process and keep appointment booking simple.',
        serviceSlugs: [
          'website-development',
          'content-creation',
          'seo',
        ],
        businessTypes: [
          'Career Counselling',
          'Study Abroad Consultant',
          'Education Consultant',
        ],
      },
    ],
  },
  {
    number: 6,
    name: 'Retail',
    description:
      'Shops and stores selling fashion, electronics, home goods and everyday essentials.',
    intro:
      'Retail customers compare online before they visit or message. What they find shapes whether they walk in at all.',
    overview: [
      'This category covers physical and hybrid retailers: clothing and footwear, jewellery and accessories, electronics, home and hardware, daily needs and specialist stores.',
      'A store now competes with every listing and marketplace on the customer phone. Product clarity, location accuracy and a real contact option are what turn a comparison into a visit.',
    ],
    considerations: [
      'Product and category information that reflects what is actually in stock.',
      'Store location, hours and directions correct on every platform.',
      'A WhatsApp catalogue or enquiry route for price and availability checks.',
    ],
    serviceSlugs: [
      'google-business-profile',
      'website-development',
      'social-media-marketing',
      'whatsapp-marketing',
    ],
    relatedSlugs: [
      'fashion-lifestyle',
      'e-commerce-online-business',
      'luxury-premium-services',
    ],
    subcategories: [
      {
        name: 'Fashion & Apparel',
        description:
          'Clothing, footwear and fashion stores selling in-store and through social channels.',
        digitalFocus:
          'Show current collections, sizes and store details without pretending to be a full e-commerce operation.',
        serviceSlugs: [
          'social-media-marketing',
          'google-business-profile',
          'website-development',
        ],
        businessTypes: [
          'Clothing Store',
          'Boutique',
          'Fashion Store',
          'Footwear Store',
        ],
      },
      {
        name: 'Jewellery & Accessories',
        description:
          'Jewellery, watch and accessory retailers serving local and gifting customers.',
        digitalFocus:
          'Use clear product photography and explain customisation, certification and store visits.',
        serviceSlugs: [
          'social-media-marketing',
          'google-business-profile',
          'website-development',
        ],
        businessTypes: [
          'Jewellery Store',
          'Watch Store',
          'Bags & Accessories',
        ],
      },
      {
        name: 'Electronics & Technology',
        description:
          'Electronics, mobile and computer retailers competing with online marketplaces.',
        digitalFocus:
          'Make stock, service and after-sales support visible to justify a store visit.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'paid-advertising',
        ],
        businessTypes: [
          'Electronics Store',
          'Mobile Shop',
          'Computer Store',
        ],
      },
      {
        name: 'Home & Hardware',
        description:
          'Furniture, hardware, paint, building material and decor stores.',
        digitalFocus:
          'Organise products by project need, not just by brand, and publish delivery coverage.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
        businessTypes: [
          'Furniture Store',
          'Hardware Store',
          'Paint Store',
          'Building Material Store',
          'Home Decor Store',
        ],
      },
      {
        name: 'Daily Needs',
        description:
          'Grocery, stationery, book, gift and cosmetic shops serving repeat local customers.',
        digitalFocus:
          'Keep hours, offers and home-delivery options easy to find.',
        serviceSlugs: [
          'google-business-profile',
          'whatsapp-marketing',
          'social-media-marketing',
        ],
        businessTypes: [
          'Grocery Store',
          'Supermarket',
          'Stationery Store',
          'Book Store',
          'Gift Shop',
          'Toy Store',
          'Cosmetic Store',
        ],
      },
      {
        name: 'Sports & Auto Retail',
        description:
          'Sports goods and automobile parts retailers with specialist product knowledge.',
        digitalFocus:
          'Help customers check fitment and availability before travelling.',
        serviceSlugs: [
          'google-business-profile',
          'website-development',
          'whatsapp-marketing',
        ],
        businessTypes: ['Sports Store', 'Automobile Parts Store'],
      },
    ],
  },
];
