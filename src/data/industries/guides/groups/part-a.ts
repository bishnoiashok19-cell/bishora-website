import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Food & Hospitality, Healthcare, Professional Services. */
export const groupGuidesPartA: SubcategoryGuideSeed[] = [
  // Food & Hospitality -------------------------------------------------------
  {
    category: 'food-hospitality',
    name: 'Restaurants & Dining',
    scene: 'restaurant',
    tagline:
      'Restaurant, cafe, dhaba, fast food, tea shop, juice shop aur bar — sabka customer same nahi hota, isliye online priority bhi alag hoti hai.',
    intro: [
      'Is group mein wo businesses hain jahan log khane-peene ke liye aate hain. Koi quick takeaway chahta hai, koi family ke saath baithna, aur koi sirf coffee aur wifi.',
      'Restaurant mein ambience aur menu matter karta hai, dhaba mein location aur speed, bar mein crowd aur timings. Isliye ek hi template sab par lagana galat hoga.',
    ],
    does: [
      'Menu planning aur daily specials',
      'Dine-in, takeaway aur delivery service',
      'Table booking, private events ya party enquiries',
      'Kitchen, staff aur daily operations manage karna',
    ],
    expect: [
      'Current menu, price range aur portion idea',
      'Food, seating aur entrance ki real photos',
      'Aaj ka timing aur holiday closure',
      'Call, WhatsApp ya booking ka easy route',
    ],
    priorities: [
      { title: 'Google listing ko source of truth banayein', why: 'Timing, photos aur location yahin se sabse zyada log dekhte hain.' },
      { title: 'Menu aur photos current rakhein', why: 'Purana menu customer ko turant next option par bhej deta hai.' },
      { title: 'Ek booking/order route fix karein', why: 'Alag-alag numbers aur apps se enquiries kho jaati hain.' },
    ],
    mistakes: [
      'Har platform par alag timing ya menu.',
      'Stock food photos se apni dishes ka expectation galat banana.',
      'WhatsApp/phone enquiry ka reply late karna.',
    ],
    check: [
      'Google par timing aur number check karein.',
      'Menu ki latest photo website par hai?',
      'WhatsApp par enquiry bhej kar reply time dekhein.',
      'Directions link sahi location kholta hai?',
    ],
    services: ['google-business-profile', 'website-development', 'social-media-marketing'],
  },
  {
    category: 'food-hospitality',
    name: 'Bakeries & Sweets',
    scene: 'bakery',
    tagline:
      'Bakery aur sweet shop mein customer freshness, customisation aur occasion ke hisaab se order karta hai — photos aur flavour list hi decision banate hain.',
    intro: [
      'Bakery aur mithai ki demand daily walk-in aur occasion orders dono se aati hai. Customer ko flavour, weight, price aur order lead time ka clear idea chahiye.',
      'Cake par message, eggless option aur delivery area jaise sawal phone par hi aate hain. Inhe website par clear likhna repeat orders badhata hai.',
    ],
    does: [
      'Daily bakery items aur mithai production',
      'Custom cakes aur occasion orders',
      'Walk-in sale, pre-order aur delivery',
      'Seasonal/festival special items',
    ],
    expect: [
      'Flavour, weight aur price ki clear list',
      'Cake/design photos aur customisation options',
      'Order lead time aur delivery area',
      'Freshness aur storage ki basic info',
    ],
    priorities: [
      { title: 'Flavour aur price list online rakhein', why: 'Customer phone par hi rate aur option confirm karna chahta hai.' },
      { title: 'Custom cake photos dikhayein', why: 'Design aur finish hi occasion order ka main deciding factor hai.' },
      { title: 'Order lead time clear karein', why: 'Late order aur expectation mismatch dono complaints banate hain.' },
    ],
    mistakes: [
      'Cake photos mein actual design se different finish dikhana.',
      'Eggless/veg options clear na karna.',
      'Delivery area ya cut-off time na likhna.',
    ],
    check: [
      'Google par shop timing aur photos sahi hain?',
      'Flavour list aur price range website par hai?',
      'WhatsApp par custom cake enquiry ka reply time check karein.',
      'Delivery area clearly likha hai?',
    ],
    services: ['google-business-profile', 'social-media-marketing', 'graphic-design'],
  },
  {
    category: 'food-hospitality',
    name: 'Food Services',
    scene: 'catering',
    tagline:
      'Catering, cloud kitchen aur food delivery — jahan menu, quantity, packaging aur delivery promise pehle clear karna padta hai.',
    intro: [
      'Food services mein customer apne event, office ya ghar ke liye order karta hai. Usse portion size, menu options, delivery window aur packaging ka bharosa chahiye.',
      'Cloud kitchen aur delivery mein photos aur ratings zyada matter karte hain, catering mein menu planning aur coordination. Dono ka online process alag hai.',
    ],
    does: [
      'Bulk/event menu planning aur quotation',
      'Cloud kitchen se delivery-only order fulfilment',
      'Packaging, dispatch aur delivery coordination',
      'Dietary preferences aur customisation handle karna',
    ],
    expect: [
      'Menu options, portion size aur per-plate price',
      'Delivery/pickup window aur area',
      'Packaging aur hygiene ka bharosa',
      'Event ya bulk order ke liye clear contact',
    ],
    priorities: [
      { title: 'Menu aur quantity options clear karein', why: 'Catering enquiry mein sabse pehle per-plate aur portion samajhna hota hai.' },
      { title: 'Delivery area aur cut-off time likhein', why: 'Out-of-area orders aur late requests dono side ka time bachta hai.' },
      { title: 'Photos aur hygiene proof dikhayein', why: 'Food service mein kitchen aur packaging ka bharosa decision banata hai.' },
    ],
    mistakes: [
      'Per-plate price ya minimum order hidden rakhna.',
      'Delivery area/time confirm na karna.',
      'Event ke din menu change bina bataye karna.',
    ],
    check: [
      'Menu aur minimum order website par hai?',
      'Delivery area clearly likha hai?',
      'Bulk enquiry ka reply time check karein.',
      'Recent catering/delivery photos hain?',
    ],
    services: ['google-business-profile', 'landing-page-design', 'social-media-marketing'],
  },
  {
    category: 'food-hospitality',
    name: 'Accommodation',
    scene: 'hotel',
    tagline:
      'Hotel, resort, homestay, guest house, hostel aur rental — jahan guest room, location, price aur check-in process pehle verify karta hai.',
    intro: [
      'Accommodation mein guest photos, room type, location aur total price dekh kar book karta hai. Ek misleading photo ya hidden charge review mein laut kar aata hai.',
      'Har stay type ka guest alag hai: hotel business traveller, resort family, hostel backpacker, PG long-stay student. Content aur photos usi hisaab se hone chahiye.',
    ],
    does: [
      'Rooms/suites aur common areas ki booking',
      'Check-in, check-out aur guest support',
      'Housekeeping, food aur facilities manage karna',
      'Direct bookings aur OTA/agent coordination',
    ],
    expect: [
      'Room types, real photos aur amenities',
      'Location, check-in time aur cancellation policy',
      'Total price aur extra charges ki clarity',
      'Direct booking ya enquiry ka option',
    ],
    priorities: [
      { title: 'Room photos honest rakhein', why: 'Guest photo aur actual room ka mismatch sabse common complaint hai.' },
      { title: 'Policies aur charges likhein', why: 'Check-in time, cancellation aur extra charges pehle clear hone chahiye.' },
      { title: 'Direct booking route dein', why: 'OTA dependency kam karne ke liye apna contact/booking option zaroori hai.' },
    ],
    mistakes: [
      'Purane ya different room type ki photos.',
      'Hidden charges checkout par batana.',
      'Check-in timing clear na karna.',
    ],
    check: [
      'Google/OTA par photos aur info match karti hain?',
      'Website par room types aur price range hai?',
      'Direct booking number/WhatsApp kaam karta hai?',
      'Cancellation policy visible hai?',
    ],
    services: ['google-business-profile', 'website-development', 'social-media-marketing'],
  },

  // Healthcare ---------------------------------------------------------------
  {
    category: 'healthcare',
    name: 'Medical Care',
    scene: 'hospital',
    tagline:
      'Doctor, hospital, clinic aur multi-specialty clinic — jahan patient qualification, timing aur appointment process ke basis par choose karta hai.',
    intro: [
      'Medical care mein patient ka decision trust par hota hai. Qualification, specialization, facility aur appointment ka process clear hona chahiye.',
      'Walk-in, appointment aur emergency — teeno ke liye alag information chahiye. Isliye ek hi generic contact page kaafi nahi hota.',
    ],
    does: [
      'General aur specialist consultation',
      'OPD, IPD ya day-care treatment',
      'Diagnosis, prescriptions aur follow-up',
      'Emergency/referral coordination',
    ],
    expect: [
      'Doctor qualification aur specialization',
      'Clinic/hospital location, timing aur contact',
      'Appointment ya walk-in process',
      'Fees/insurance ka basic idea jahan applicable ho',
    ],
    priorities: [
      { title: 'Doctor aur facility info clear rakhein', why: 'Patient ko pehle bharosa chahiye ki aap right specialist hain.' },
      { title: 'Appointment route simple karein', why: 'Ek clear number/WhatsApp/form se missed appointments kam hote hain.' },
      { title: 'Timing aur location accurate rakhein', why: 'Patient often attendant ke saath aata hai; galat info wasted trip banati hai.' },
    ],
    mistakes: [
      'Qualification ya specialization update na karna.',
      'Appointment ke liye sirf ek purana landline.',
      'Emergency contact hidden rakhna.',
    ],
    check: [
      'Google par doctor/facility info sahi hai?',
      'Appointment number/WhatsApp kaam karta hai?',
      'Timings aur location website par hain?',
      'Recent reviews ka reply professional hai?',
    ],
    services: ['google-business-profile', 'website-development', 'seo'],
  },
  {
    category: 'healthcare',
    name: 'Specialized Care',
    scene: 'dental',
    tagline:
      'Dentist, eye, skin, ENT, orthopedic, physiotherapy aur mental health — jahan patient specific problem ke liye specialist dhoondhta hai.',
    intro: [
      'Specialized care mein patient ka search problem-specific hota hai. Usse treatment, doctor ki expertise aur appointment process ka clear idea chahiye.',
      'Sensitive categories jaise mental health aur skin mein respectful language aur privacy ka signal bahut important hai.',
    ],
    does: [
      'Specialist consultation aur treatment planning',
      'Procedure-based care aur follow-up',
      'Reports, scans ya therapy sessions',
      'Referral aur long-term management',
    ],
    expect: [
      'Doctor ki specialization aur experience',
      'Treatment options aur expected process',
      'Appointment, fees range aur location',
      'Privacy aur patient-friendly communication',
    ],
    priorities: [
      { title: 'Problem-specific pages banayein', why: 'Patient apni condition se related page dhoondhta hai, generic clinic page nahi.' },
      { title: 'Process aur expectations likhein', why: 'Treatment steps aur follow-up ka idea anxiety kam karta hai.' },
      { title: 'Privacy-respecting communication rakhein', why: 'Sensitive health categories mein trust sabse pehle aata hai.' },
    ],
    mistakes: [
      'Patient photos/results bina consent dikhana.',
      'Treatment ka overpromise karna.',
      'Appointment ke baad instructions na dena.',
    ],
    check: [
      'Apni condition + specialist Google par search karein.',
      'Treatment process page par samjhaya gaya hai?',
      'Appointment ka reply time check karein.',
      'Reviews ka reply respectful hai?',
    ],
    services: ['google-business-profile', 'website-development', 'seo'],
  },
  {
    category: 'healthcare',
    name: 'Diagnostics',
    scene: 'diagnostics',
    tagline:
      'Diagnostic centre, pathology lab aur imaging centre — jahan patient test, report timing, price aur home collection check karta hai.',
    intro: [
      'Diagnostics mein patient ka sawal hota hai: test available hai, kitna time lagega, report kaise milegi aur home collection hai ya nahi.',
      'Accuracy aur turnaround time hi trust banate hain. Isliye test list, preparation instructions aur report delivery clear honi chahiye.',
    ],
    does: [
      'Pathology tests aur sample collection',
      'Imaging/radiology services',
      'Home collection aur report delivery',
      'Doctor referral aur report interpretation support',
    ],
    expect: [
      'Test list, price aur preparation instructions',
      'Report turnaround time',
      'Home collection area aur booking',
      'Report access/delivery process',
    ],
    priorities: [
      { title: 'Test list aur prices clear karein', why: 'Patient specific test ka price aur availability turant dekhna chahta hai.' },
      { title: 'Report timeline batayein', why: 'Turnaround time expectation set karta hai aur follow-up calls kam karta hai.' },
      { title: 'Home collection process likhein', why: 'Area, slot aur charges clear hone se booking badhti hai.' },
    ],
    mistakes: [
      'Preparation instructions (fasting etc.) na dena.',
      'Report delay ki info na dena.',
      'Home collection area/charges hidden rakhna.',
    ],
    check: [
      'Apna test Google par search karein — price/availability milti hai?',
      'Report timeline website par hai?',
      'Home collection booking ka reply time check karein.',
      'Report access process clear hai?',
    ],
    services: ['google-business-profile', 'website-development', 'seo'],
  },
  {
    category: 'healthcare',
    name: 'Alternative Medicine',
    scene: 'wellness',
    tagline:
      'Ayurveda, homeopathy aur naturopathy — jahan patient approach, practitioner credentials aur treatment timeline samajhna chahta hai.',
    intro: [
      'Alternative medicine mein patient conventional treatment se different approach explore karta hai. Usse practitioner ki qualification, consultation process aur realistic timeline pata hona chahiye.',
      'Bina evidence ke cure claims nahi karni chahiye. Clear consultation process aur honest expectations hi credibility banate hain.',
    ],
    does: [
      'Initial consultation aur case history',
      'Personalised treatment/wellness plan',
      'Follow-up aur lifestyle guidance',
      'Products/therapy recommendations jahan applicable ho',
    ],
    expect: [
      'Practitioner qualification aur approach',
      'Consultation duration, fees aur process',
      'Realistic timeline aur follow-up plan',
      'Safety aur suitability ki clear baat',
    ],
    priorities: [
      { title: 'Approach aur credentials explain karein', why: 'Patient ko samajhna hai aap kaise treat karte hain aur aap qualified hain.' },
      { title: 'Process aur timeline clear karein', why: 'Alternative medicine mein results gradual hote hain; expectation setting zaroori hai.' },
      { title: 'Honest, non-medical claims rakhein', why: 'Overpromising se trust aur compliance dono risk mein aate hain.' },
    ],
    mistakes: [
      'Guaranteed cure jaise claims.',
      'Treatment duration clear na karna.',
      'Follow-up process na batana.',
    ],
    check: [
      'Practitioner credentials website par hain?',
      'Consultation process aur fees clear hain?',
      'Appointment ka reply time check karein.',
      'Content mein overclaims to nahi hain?',
    ],
    services: ['google-business-profile', 'website-development', 'content-creation'],
  },
  {
    category: 'healthcare',
    name: 'Healthcare Support',
    scene: 'hospital',
    tagline:
      'Pharmacy, nursing/home healthcare aur medical equipment — jahan patient availability, delivery aur trained support check karta hai.',
    intro: [
      'Healthcare support businesses patient ke ghar ya treatment ke aas-paas kaam karti hain. Availability, response time aur trained staff ka bharosa sabse important hai.',
      'Prescription medicines aur equipment mein accuracy aur privacy zaroori hai. Online presence ko simple, trustworthy aur responsive rakhna chahiye.',
    ],
    does: [
      'Medicine/equipment availability aur delivery',
      'Home nursing ya caregiver support',
      'Equipment setup aur usage guidance',
      'Recurring supply aur follow-up coordination',
    ],
    expect: [
      'Product/service availability aur price',
      'Delivery area aur response time',
      'Trained staff/qualified support ka proof',
      'Prescription/privacy process',
    ],
    priorities: [
      { title: 'Availability aur delivery area likhein', why: 'Patient ko turant pata chale aap uske area mein service dete hain.' },
      { title: 'Response time visible rakhein', why: 'Healthcare support urgent hoti hai; fast contact hi value hai.' },
      { title: 'Privacy aur process clear karein', why: 'Prescription aur patient information sensitive hoti hai.' },
    ],
    mistakes: [
      'Availability ko hamesha "in stock" dikhana.',
      'Delivery area/charges clear na karna.',
      'Trained staff credentials na batana.',
    ],
    check: [
      'Apni service + area Google par search karein.',
      'Delivery area aur charges website par hain?',
      'WhatsApp/call response time check karein.',
      'Privacy/process info visible hai?',
    ],
    services: ['google-business-profile', 'website-development', 'whatsapp-marketing'],
  },
  {
    category: 'healthcare',
    name: 'Animal Healthcare',
    scene: 'veterinary',
    tagline:
      'Veterinary clinics aur animal care — jahan pet owner doctor ki availability, emergency support aur gentle handling check karta hai.',
    intro: [
      'Pet owner ke liye pet family jaisa hota hai. Usse clinic timing, doctor availability, emergency support aur handling ka bharosa chahiye.',
      'Photos aur reviews yahan strongly matter karte hain, lekin tone calm aur informative hona chahiye — salesy nahi.',
    ],
    does: [
      'Pet consultation aur vaccination',
      'Surgery/treatment aur follow-up',
      'Emergency care aur hospitalization',
      'Diet, grooming aur preventive guidance',
    ],
    expect: [
      'Doctor qualification aur services',
      'Clinic timing aur emergency contact',
      'Consultation/fees ka basic idea',
      'Pet handling aur hygiene ka bharosa',
    ],
    priorities: [
      { title: 'Emergency contact clearly dikhayein', why: 'Pet emergency mein owner sabse pehle phone karta hai.' },
      { title: 'Services aur timing accurate rakhein', why: 'Galat timing critical situation mein trust todti hai.' },
      { title: 'Clinic aur team ki real photos dikhayein', why: 'Owner ko facility aur handling ka andaaza chahiye.' },
    ],
    mistakes: [
      'Emergency number hidden rakhna.',
      'Vaccination/treatment prices ka koi hint na dena.',
      'Reviews ka reply emotional ya defensive karna.',
    ],
    check: [
      'Clinic Google par search karein — timing/number sahi?',
      'Emergency contact website par visible hai?',
      'Services aur fees range likhi hai?',
      'Recent clinic photos hain?',
    ],
    services: ['google-business-profile', 'website-development', 'social-media-marketing'],
  },

  // Professional Services ----------------------------------------------------
  {
    category: 'professional-services',
    name: 'Legal & Compliance',
    scene: 'legal',
    tagline:
      'Lawyer, advocate, notary aur company secretary — jahan client confidentiality, expertise aur process ke basis par consult karta hai.',
    intro: [
      'Legal services mein client pehle problem ki seriousness aur aapki relevant expertise samajhna chahta hai. Generic "legal services" se koi confident nahi hota.',
      'Practice areas, consultation process, documents aur fees structure clear hone chahiye. Confidentiality ka signal har page par hona chahiye.',
    ],
    does: [
      'Legal consultation aur opinion',
      'Documentation, notices aur filings',
      'Representation aur compliance support',
      'Contract drafting aur review',
    ],
    expect: [
      'Practice areas aur relevant experience',
      'Consultation process aur fees structure',
      'Documents/next steps ki clarity',
      'Confidentiality aur response time',
    ],
    priorities: [
      { title: 'Practice areas alag pages par rakhein', why: 'Client apni exact problem ke liye relevant lawyer dhoondhta hai.' },
      { title: 'Process aur fees structure likhein', why: 'Legal fees ka ambiguity consultation se pehle hi client ko rok deta hai.' },
      { title: 'Confidential contact route dein', why: 'Legal matters private hote hain; discreet enquiry option trust deta hai.' },
    ],
    mistakes: [
      'Har practice area ke liye same generic content.',
      'Fees/consultation process clear na karna.',
      'Client matter ki details public testimonial mein daalna.',
    ],
    check: [
      'Apna practice area Google par search karein — page milta hai?',
      'Consultation fees/process website par hai?',
      'Contact form ka reply time check karein.',
      'Confidentiality note visible hai?',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
  {
    category: 'professional-services',
    name: 'Finance & Accounting',
    scene: 'accounting',
    tagline:
      'CA, accountant, tax aur financial advisors — jahan client compliance deadline, fees aur confidentiality ke basis par choose karta hai.',
    intro: [
      'Finance aur accounting mein client ko deadline, scope aur confidentiality ka bharosa chahiye. "Best CA" se zyada relevant service aur clear process kaam karta hai.',
      'Tax, audit, bookkeeping aur advisory alag services hain. Inhe alag explain karna enquiries ko qualify karta hai.',
    ],
    does: [
      'Bookkeeping aur accounts management',
      'ITR, GST aur compliance filings',
      'Audit aur financial reporting',
      'Tax/financial planning aur advisory',
    ],
    expect: [
      'Services aur industries served',
      'Fees structure ya starting range',
      'Documents aur timeline ka process',
      'Confidentiality aur response time',
    ],
    priorities: [
      { title: 'Services ko deadline ke saath likhein', why: 'Client ko pata chale aap GST/ITR jaisi time-bound work handle karte hain.' },
      { title: 'Process aur documents clear karein', why: 'Client ka time bachta hai aur back-and-forth kam hota hai.' },
      { title: 'Fees ka structure dein', why: 'Pricing ambiguity serious clients ko rok deti hai.' },
    ],
    mistakes: [
      'Sirf "all types of accounting" likhna.',
      'Deadline-oriented services ko clearly na batana.',
      'Client financial data ko insecure form se lena.',
    ],
    check: [
      'Apni service Google par search karein — page specific hai?',
      'Fees/starting range website par hai?',
      'Document checklist diya hua hai?',
      'Contact form secure/clear hai?',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
  {
    category: 'professional-services',
    name: 'Consulting',
    scene: 'consulting',
    tagline:
      'Business, management, HR, IT aur marketing consultants — jahan client problem, approach aur engagement model pehle samajhta hai.',
    intro: [
      'Consulting mein client aapki expertise tabhi maanta hai jab usse lage ki aap uski problem samajhte hain. Generic capability list kaam nahi karti.',
      'Isliye problem-specific pages, approach, deliverables aur engagement model clear hona chahiye — bina jargon ke.',
    ],
    does: [
      'Discovery aur problem assessment',
      'Strategy/roadmap development',
      'Implementation support aur reviews',
      'Workshops, audits aur advisory',
    ],
    expect: [
      'Aap kis problem/industry mein help karte hain',
      'Approach aur deliverables',
      'Engagement model aur fees range',
      'Relevant experience/case examples',
    ],
    priorities: [
      { title: 'Problem-led content banayein', why: 'Client solution nahi, apni problem se search karta hai.' },
      { title: 'Approach aur deliverables likhein', why: 'Consulting ka scope intangible hota hai; clarity trust deti hai.' },
      { title: 'Discovery call easy rakhein', why: 'Consulting sale pehli conversation se shuru hoti hai.' },
    ],
    mistakes: [
      'Har industry ke liye same content.',
      'Deliverables vague rakhna.',
      'Case studies mein fake results likhna.',
    ],
    check: [
      'Apni problem Google par search karein — aapka page milta hai?',
      'Deliverables aur process clear hain?',
      'Discovery call book karne ka route easy hai?',
      'Case examples genuine lagte hain?',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
  {
    category: 'professional-services',
    name: 'Insurance',
    scene: 'consulting',
    tagline:
      'Insurance agent aur advisor — jahan customer policy coverage, premium, claim process aur advisor reliability check karta hai.',
    intro: [
      'Insurance mein customer ko coverage, exclusions, premium aur claim process ka clear idea chahiye. Sirf "best policy" bolne se trust nahi banta.',
      'Health, life, motor aur business insurance alag hote hain. Category-wise explanation aur honest comparison hi enquiries laata hai.',
    ],
    does: [
      'Policy need assessment',
      'Health/life/motor/business insurance advisory',
      'Documentation aur renewal support',
      'Claim assistance aur follow-up',
    ],
    expect: [
      'Coverage aur exclusions ki clear explanation',
      'Premium aur payment process',
      'Claim support ka role',
      'Advisor credentials aur contact',
    ],
    priorities: [
      { title: 'Insurance types alag explain karein', why: 'Customer apni specific need (health/motor/life) ke liye search karta hai.' },
      { title: 'Coverage aur exclusions likhein', why: 'Clear expectations claim ke waqt disputes kam karte hain.' },
      { title: 'Claim support process batayein', why: 'Customer ka asli sawal "claim ke waqt kaun help karega" hota hai.' },
    ],
    mistakes: [
      'Returns/benefits ko guaranteed dikhana.',
      'Exclusions chhupana.',
      'Claim support ka role clear na karna.',
    ],
    check: [
      'Apni insurance type Google par search karein — page milta hai?',
      'Coverage/exclusions explain kiye gaye hain?',
      'Claim process website par hai?',
      'Advisor contact ka reply time check karein.',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
  {
    category: 'professional-services',
    name: 'Architecture & Design',
    scene: 'interior',
    tagline:
      'Architect aur interior designer — jahan client portfolio, style, budget aur execution process dekh kar decide karta hai.',
    intro: [
      'Design services mein portfolio hi sabse strong proof hai. Client dekhna chahta hai ki aapka style unke ghar/office aur budget se match karta hai.',
      'Concept, drawings, execution aur timelines ka process clear hona chahiye. Sirf beautiful renders se kaam nahi chalta.',
    ],
    does: [
      'Site study aur requirement discussion',
      'Concept design, drawings aur 3D views',
      'Material/boq aur execution coordination',
      'Site supervision aur handover',
    ],
    expect: [
      'Relevant portfolio aur project scale',
      'Design process, timeline aur deliverables',
      'Budget range aur execution model',
      'Consultation ya site visit ka route',
    ],
    priorities: [
      { title: 'Portfolio ko project type se organise karein', why: 'Residential aur commercial clients alag proof dhoondhte hain.' },
      { title: 'Process aur deliverables likhein', why: 'Design projects mein scope clarity disputes kam karti hai.' },
      { title: 'Budget/consultation expectation set karein', why: 'Mismatch enquiries time waste karti hain.' },
    ],
    mistakes: [
      'Sirf renders dikhana, completed work nahi.',
      'Execution scope clear na karna.',
      'Budget range ka koi hint na dena.',
    ],
    check: [
      'Apni service + city Google par search karein.',
      'Portfolio mein completed projects hain?',
      'Process aur deliverables likhe hain?',
      'Consultation request ka reply time check karein.',
    ],
    services: ['website-development', 'seo', 'social-media-marketing'],
  },
  {
    category: 'professional-services',
    name: 'Digital Services',
    scene: 'agency',
    tagline:
      'Digital agency, SEO agency, web development aur graphic design — jahan client portfolio, process aur reporting ke basis par choose karta hai.',
    intro: [
      'Digital services mein har agency "results" ka claim karti hai. Client ko actual work, process aur reporting ka proof chahiye.',
      'Website, SEO aur design ke outcomes alag hote hain. Inhe alag pages par explain karna aur realistic timelines dena zaroori hai.',
    ],
    does: [
      'Strategy, audit aur requirement discovery',
      'Website/design/SEO execution',
      'Content, campaigns aur optimization',
      'Reporting, review aur iteration',
    ],
    expect: [
      'Services aur engagement model',
      'Relevant portfolio/case examples',
      'Timeline, reporting aur communication process',
      'Pricing structure ya starting range',
    ],
    priorities: [
      { title: 'Services ko outcome se link karein', why: 'Client deliverable nahi, business problem solve karna chahta hai.' },
      { title: 'Proof aur process dikhayein', why: 'Portfolio aur reporting process agency selection ka main filter hai.' },
      { title: 'Realistic timelines dein', why: 'SEO/ads ke guaranteed results claims credibility todte hain.' },
    ],
    mistakes: [
      'Guaranteed ranking/leads ka claim.',
      'Portfolio mein fake ya unrelated work.',
      'Reporting aur communication process clear na karna.',
    ],
    check: [
      'Apni service Google par search karein — page specific hai?',
      'Portfolio aur case studies genuine lagte hain?',
      'Pricing/engagement model clear hai?',
      'Enquiry ka reply time check karein.',
    ],
    services: ['seo', 'website-development', 'social-media-marketing'],
  },
];
