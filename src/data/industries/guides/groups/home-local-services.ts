import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Home & Local Services (3). */
export const homeLocalServicesGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'home-local-services',
    name: 'Home Repair',
    scene: 'electrician',
    tagline:
      'Electrician, plumber, carpenter, painter, AC/RO aur appliance repair — sabka customer problem lekar aata hai, isliye area, visit charge aur response time hi pehle decide karte hain.',
    intro: [
      'Is group mein wo log hain jo ghar ya dukaan ka kharab ya adhura kaam theek karte hain. Customer ke paas pehle se ek problem hoti hai — leak, trip, cooling issue ya purana furniture — aur wo sabse fast, reliable option dhoondhta hai.',
      'Repair ka kaam site par hota hai, isliye phone par hi area, visit charge aur availability clear honi chahiye. Website ka kaam bade claims se zyada "aap uska kaam karte hain, kitna lagega aur kab aa sakte hain" ka jawab dena hai.',
    ],
    does: [
      'Ghar aur office ki repair, fitting aur installation',
      'Site visit, estimate aur material discussion',
      'Emergency aur same-day service calls',
      'Kaam ke baad testing, cleaning aur handover',
    ],
    expect: [
      'Service area aur visit charge',
      'Kaam ka scope aur material ka process',
      'Kitni jaldi visit possible hai',
      'Kaam ka warranty ya follow-up',
    ],
    priorities: [
      { title: 'Area aur visit charge sabse pehle likhein', why: 'Customer pehle check karta hai aap uske locality mein aate hain aur visit ka kitna lagega.' },
      { title: 'Ek active call aur WhatsApp number rakhein', why: 'Repair ki demand urgent hoti hai; jo number online milta hai wahi turant uthna chahiye.' },
      { title: 'Kaam ki asli photos dikhayein', why: 'Before-after aur fitting ki photos quality ka proof hain, stock images nahi.' },
    ],
    mistakes: [
      'Rate sirf phone par batana aur website par kuch na rakhna.',
      'Google aur WhatsApp par purana ya band number chhodna.',
      'Bina scope bataye "ho jayega" bolna.',
    ],
    check: [
      'Apni service aur area Google par search karein — listing milti hai?',
      'Website par visit charge aur service area likha hai?',
      'WhatsApp par message bhej kar reply time check karein.',
      'Recent kaam ki photos updated hain?',
    ],
    services: ['google-business-profile', 'website-development', 'whatsapp-marketing'],
  },
  {
    category: 'home-local-services',
    name: 'Home Care',
    scene: 'cleaning',
    tagline:
      'Cleaning, pest control, laundry, dry cleaning aur handyman — yahan customer ghar ki routine ya kisi problem ke liye regular service dhoondhta hai, isliye scope aur pricing basis clear hona chahiye.',
    intro: [
      'Home care services do tarah ki demand par chalti hain: planned (deep cleaning, laundry, AMC) aur problem-based (pest, stain, chhota repair). Dono mein customer ko pehle scope aur price ka andaaza chahiye.',
      'Is group mein trust ka bada hissa hygiene aur care hai — chemicals, fabric, safety aur turnaround. Isliye before-after photos, safety note aur visit ka time window sabse zyada kaam aate hain.',
    ],
    does: [
      'Ghar aur flat ki cleaning aur upkeep',
      'Pest treatment aur preventive visits',
      'Laundry, dry cleaning aur pickup-delivery',
      'Chhote repair aur maintenance jobs',
    ],
    expect: [
      'Service scope aur pricing basis',
      'Pickup ya visit ka time window',
      'Safety aur chemical ya fabric care note',
      'Turnaround ya repeat plan',
    ],
    priorities: [
      { title: 'Scope aur price ka basis clear karein', why: 'BHK, kg ya piece — basis clear hone se customer quote compare kar pata hai.' },
      { title: 'Pickup aur visit slot likhein', why: 'Customer ghar par wait karta hai; time window dena booking aur trust dono badhata hai.' },
      { title: 'Before-after ya care proof dikhayein', why: 'Cleaning aur fabric care mein result hi quality ka sabse seedha proof hai.' },
    ],
    mistakes: [
      '"Starting from" price dikha kar baad mein badhana.',
      'Safety ya care instructions clear na dena.',
      'Turnaround aur re-visit policy hidden rakhna.',
    ],
    check: [
      'Google par service aur area search karein.',
      'Website par package ya rate card hai?',
      'WhatsApp par pickup ya slot maangein — reply time?',
      'Recent before-after photos hain?',
    ],
    services: ['google-business-profile', 'website-development', 'whatsapp-marketing'],
  },
  {
    category: 'home-local-services',
    name: 'Security & Moving',
    scene: 'security',
    tagline:
      'Security guards, CCTV, alarm aur movers — jahan customer ki decision trust, verification aur date availability par hoti hai, sirf lowest rate par nahi.',
    intro: [
      'Security aur moving dono mein customer apni property ya saaman kisi doosre ke haath mein de raha hai. Isliye verification, process aur accountability ka proof sabse pehle chahiye.',
      'CCTV aur alarm mein system ka coverage aur maintenance matter karta hai, movers mein survey aur packing quality. Dono mein site visit ya survey ke bina diya final quote baad mein dispute banata hai.',
    ],
    does: [
      'Guards, patrol ya security system install karna',
      'Site survey aur requirement assessment',
      'Installation, packing ya deployment',
      'Maintenance, AMC ya shifting coordination',
    ],
    expect: [
      'Verification aur training ya packing process',
      'Site survey aur quote ka process',
      'Warranty, AMC ya transit terms',
      'Date availability aur response time',
    ],
    priorities: [
      { title: 'Verification aur process dikhayein', why: 'Guard background check, camera coverage ya packing method — customer inhi cheezon par bharosa karta hai.' },
      { title: 'Survey-based quote rakhein', why: 'Bina site dekhe diya price expectation kharab karta hai aur baad mein badalna padta hai.' },
      { title: 'Terms clearly likhein', why: 'Warranty, AMC, replacement aur transit damage ka process pehle likhna disputes kam karta hai.' },
    ],
    mistakes: [
      'Bina verification guard deploy karna ya system claim karna.',
      'Installation, loading ya AMC ke hidden charges.',
      'Date availability ka reply late dena.',
    ],
    check: [
      'Google aur website par service area clear hai?',
      'Verification ya packing process likha hai?',
      'Enquiry bhej kar survey ka reply time check karein.',
      'Warranty, AMC ya transit terms visible hain?',
    ],
    services: ['website-development', 'google-business-profile', 'seo'],
  },
];
