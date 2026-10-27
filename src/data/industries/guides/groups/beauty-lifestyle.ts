import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Beauty & Lifestyle (3). */
export const beautyLifestyleGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'beauty-lifestyle',
    name: 'Beauty',
    scene: 'salon',
    tagline:
      'Salon, barber, beauty parlour aur spa — customer service, price aur hygiene dekh kar appointment book karta hai, brand name dekh kar nahi.',
    intro: [
      'Beauty businesses mein customer pehle photos aur price list dekhta hai, phir slot confirm karta hai. Bharosa safai, product aur staff ke behaviour se banta hai.',
      'Salon aur barber mein grooming routine chalti hai, parlour mein packages aur occasion, spa mein treatment aur privacy. Isliye menu aur tone alag rakhna padta hai.',
    ],
    does: [
      'Hair, skin aur grooming services',
      'Appointment aur slot management',
      'Packages aur bridal ya occasion bookings',
      'Product selection aur hygiene practices',
    ],
    expect: [
      'Service menu with duration aur price',
      'Actual work ki photos',
      'Hygiene aur product ki basic info',
      'Booking ka easy route aur correct timing',
    ],
    priorities: [
      { title: 'Price list aur duration online rakhein', why: 'Customer slot aur budget dono ke hisaab se plan karta hai.' },
      { title: 'Apne kaam ki photos dikhayein', why: 'Beauty mein photo hi expectation set karti hai; stock photo baad mein complaint banti hai.' },
      { title: 'Appointment confirm karein', why: 'Slot confirm na hone par customer doosra salon try kar leta hai.' },
    ],
    mistakes: [
      'Purani price list website aur Google par chhodna.',
      'Edited photos se unrealistic finish dikhana.',
      'Appointment delay ka update na dena.',
    ],
    check: [
      'Menu aur price current hain?',
      'Gallery ki photos aapke kaam ki hain?',
      'Booking ka reply time kya hai?',
      'Google par timing aur number sahi hain?',
    ],
    services: ['google-business-profile', 'social-media-marketing', 'website-development'],
  },
  {
    category: 'beauty-lifestyle',
    name: 'Makeup',
    scene: 'salon',
    tagline:
      'Makeup artist aur bridal makeup — dono mein portfolio decide karta hai, par bridal mein date, trial aur family functions ka plan bhi judta hai.',
    intro: [
      'Makeup services mein client ka pehla filter portfolio hota hai. Uske baad skin type, products, travel aur trial ka discussion aata hai.',
      'Party makeup ek appointment ka kaam hai, bridal makeup multi-day planning. Isliye package aur availability alag tarah se likhni chahiye.',
    ],
    does: [
      'Bridal, party aur event makeup',
      'Hairstyling aur draping',
      'Trial aur look consultation',
      'On-location travel aur team coordination',
    ],
    expect: [
      'Different looks ka portfolio',
      'Package inclusions aur price range',
      'Trial policy aur booking amount',
      'Travel charges aur date availability',
    ],
    priorities: [
      { title: 'Portfolio ko occasion se organise karein', why: 'Bride, party client aur shoot client alag examples dhoondhte hain.' },
      { title: 'Package inclusions likhein', why: 'Makeup, hair, draping aur family members ka scope clear hone se baad ka confusion bachta hai.' },
      { title: 'Date availability ka process dein', why: 'Bridal enquiry date se shuru hoti hai; fast confirmation se booking bachti hai.' },
    ],
    mistakes: [
      'Ek hi skin tone ke photos dikhana.',
      'Travel aur early-morning charges chhupana.',
      'Trial ke baad price ya scope badalna.',
    ],
    check: [
      'Portfolio mein different looks hain?',
      'Package inclusions aur price range clear hai?',
      'Trial aur booking process likha hai?',
      'Date enquiry ka reply time kya hai?',
    ],
    services: ['social-media-marketing', 'website-development', 'google-business-profile'],
  },
  {
    category: 'beauty-lifestyle',
    name: 'Fitness & Wellness',
    scene: 'gym',
    tagline:
      'Fitness centre, gym, yoga, pilates, personal trainer aur meditation — sab health ke around hain, par customer ka goal aur format alag hota hai.',
    intro: [
      'Fitness aur wellness mein customer goal, timing aur comfort dekh kar join karta hai. Kisi ko weight training chahiye, kisi ko class ka structure, kisi ko stress kam karna hai.',
      'Trial session aur schedule ki clarity yahan sabse zyada kaam karti hai. Medical claims se bach kar realistic expectation dena zaroori hai.',
    ],
    does: [
      'Membership aur session-based training',
      'Group classes aur personal sessions',
      'Assessment aur progress tracking',
      'Workshops, retreats aur corporate sessions',
    ],
    expect: [
      'Class ya session ka schedule',
      'Fees, validity aur terms',
      'Trainer ya instructor ki qualification',
      'Trial ya first-visit process',
    ],
    priorities: [
      { title: 'Timetable ko current rakhein', why: 'Schedule galat ho to member pehle hafte mein hi chala jaata hai.' },
      { title: 'Fees aur terms likhein', why: 'Lock-in, admission fee aur renewal terms pehle clear hone chahiye.' },
      { title: 'Trainer ki qualification batayein', why: 'Health-related service mein customer instructor ke credentials poochta hai.' },
    ],
    mistakes: [
      'Membership terms aur lock-in chhupana.',
      'Guaranteed weight loss ya cure claims karna.',
      'Trial session ka process clear na karna.',
    ],
    check: [
      'Timetable website par updated hai?',
      'Fees aur membership terms visible hain?',
      'Trainer info available hai?',
      'Trial booking ka reply time kya hai?',
    ],
    services: ['google-business-profile', 'social-media-marketing', 'website-development'],
  },
];
