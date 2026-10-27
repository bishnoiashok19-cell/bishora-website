import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Technology & IT (4). */
export const technologyItGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'technology-it',
    name: 'Software',
    scene: 'technology',
    tagline:
      'Software company, SaaS, app development aur web development — sab code likhte hain, lekin ek client project bechta hai aur doosra subscription product.',
    intro: [
      'Is group mein wo teams hain jo software banati hain. Software company client ke business ke liye custom kaam karti hai, SaaS apna product subscription par bechti hai, aur app ya web development ek defined build deliver karti hai.',
      'Buyer ka sawal isliye badalta hai: custom software mein scope aur team, SaaS mein trial aur pricing, app mein store listing aur updates, web mein CMS aur handover. Ek hi sales pitch sab par lagana kaam nahi karta.',
    ],
    does: [
      'Requirement discovery aur solution design',
      'Design, development aur testing',
      'Deployment, hosting aur release management',
      'Maintenance, updates aur support',
    ],
    expect: [
      'Technology stack aur team ka clear intro',
      'Live product ya project ke links',
      'Timeline, milestones aur revision process',
      'Launch ke baad support aur handover terms',
    ],
    priorities: [
      { title: 'Kaam ka proof link ke saath dikhayein', why: 'Screenshots ke bajaye live site ya published app hi buyer ka bharosa jeetta hai.' },
      { title: 'Scope aur handover likhein', why: 'Software projects mein sabse zyada dispute scope aur access par hota hai.' },
      { title: 'Maintenance ka rasta batayein', why: 'Launch ke baad updates aur fixes ka sawal har client poochta hai.' },
    ],
    mistakes: [
      'Har project ko "fully customised" bol kar same template dikhana.',
      'Timeline ko estimate ke bina commit karna.',
      'Handover mein code, domain ya store access clear na karna.',
    ],
    check: [
      'Portfolio ke links aaj bhi khulte hain?',
      'Stack, timeline aur milestones page par hain?',
      'Support aur maintenance ka option likha hai?',
      'Enquiry form project ka goal poochta hai?',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
  {
    category: 'technology-it',
    name: 'IT Services',
    scene: 'technology',
    tagline:
      'IT company, IT consulting, IT support, cloud aur data services — buyer ka pehla sawal yahi hota hai: aap daily systems chalane mein help karte hain ya change plan karte hain?',
    intro: [
      'IT services ke andar do tarah ka kaam hai. Support aur managed services daily chal rahe systems ko stable rakhte hain, jabki consulting, cloud migration aur data projects ek badlav deliver karte hain.',
      'Isliye ek hi page par sab kuch likhna buyer ko confuse karta hai. Har service ka scope, response time aur deliverable alag dikhna chahiye — warna enquiry galat team tak pahunchti hai.',
    ],
    does: [
      'Systems assessment aur requirement planning',
      'Infrastructure, cloud ya data setup aur migration',
      'Day-to-day support aur maintenance',
      'Monitoring, reporting aur vendor coordination',
    ],
    expect: [
      'Service scope: kya in-house hai aur kya outsource',
      'Response time aur support hours',
      'Project timeline aur cost structure',
      'Data access, security aur escalation process',
    ],
    priorities: [
      { title: 'Support aur project work alag dikhayein', why: 'Buyer ko pata chale aap daily help kar rahe hain ya ek baar ka change.' },
      { title: 'Response time likhein', why: 'IT services mein delay ka matlab client ka kaam band hona hai.' },
      { title: 'Escalation aur access process rakhein', why: 'Incident ke waqt clear contact hi trust bachata hai.' },
    ],
    mistakes: [
      'Sab services ek hi page par bina scope ke daal dena.',
      'AMC ya retainer mein inclusions clear na karna.',
      'Client ke systems ka access bina documentation lena.',
    ],
    check: [
      'Har service ka scope alag likha hai?',
      'Support hours aur response time visible hain?',
      'AMC inclusions list ki hui hain?',
      'Emergency contact test karein.',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'technology-it',
    name: 'Security & AI',
    scene: 'technology',
    tagline:
      'Cybersecurity aur AI business dono naye technology par kaam karte hain, lekin ek risk kam karta hai aur doosra naya capability add karta hai.',
    intro: [
      'Cybersecurity buyer ke liye risk aur compliance ka sawal hai. Usse assessment scope, report aur incident response ka process chahiye — marketing language yahan kaam nahi karti.',
      'AI business mein buyer naya capability chahta hai, par data privacy, output quality aur cost ke sawal saath aate hain. Dono mein proof aur limitation honestly likhna zaroori hai.',
    ],
    does: [
      'Current setup ka assessment aur gap identification',
      'Security testing ya AI use-case evaluation',
      'Implementation, integration aur monitoring',
      'Reporting, training aur remediation support',
    ],
    expect: [
      'Assessment scope aur methodology',
      'Team credentials aur relevant experience',
      'Data handling, privacy aur NDA process',
      'Deliverable format aur follow-up support',
    ],
    priorities: [
      { title: 'Scope aur limitation likhein', why: 'Security aur AI dono mein overclaim sabse bada trust breaker hai.' },
      { title: 'Data handling explain karein', why: 'Client ka data kahan jaata hai, ye pehla sawal hota hai.' },
      { title: 'Report ya output ka sample dikhayein', why: 'Deliverable ka format hi kaam ki value clear karta hai.' },
    ],
    mistakes: [
      'Complete protection ya perfect accuracy ka claim.',
      'Data retention aur access policy na batana.',
      'Client ka naam bina permission case study mein dalna.',
    ],
    check: [
      'Methodology aur scope website par hai?',
      'Data policy aur NDA note visible hai?',
      'Sample report ya demo milta hai?',
      'Incident ya support contact working hai?',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
  {
    category: 'technology-it',
    name: 'Technology Sales',
    scene: 'corporate',
    tagline:
      'Software reseller aur computer services — dono technology bechte ya sambhalte hain, lekin customer ka sawal licence, invoice aur repair turnaround hota hai.',
    intro: [
      'Technology sales mein customer ka decision chhota aur practical hota hai: licence genuine hai ya nahi, rate kya hai, invoice milega ya nahi, aur repair kitne din mein hoga.',
      'Yahan trust pricing se zyada matter karta hai. Authorisation, warranty, data safety aur response time clear hone chahiye — warna customer nearby option choose kar leta hai.',
    ],
    does: [
      'Software licence ya hardware ki sale',
      'Activation, installation aur setup support',
      'Repair, upgrade aur maintenance',
      'Invoice, warranty aur renewal handling',
    ],
    expect: [
      'Product ya service ka exact scope aur rate',
      'Genuineness, warranty aur invoice ki clarity',
      'Delivery ya repair ka turnaround',
      'Support contact aur renewal reminder',
    ],
    priorities: [
      { title: 'Rate aur included cheezein likhein', why: 'Customer comparison karta hai; hidden charge se deal cancel hoti hai.' },
      { title: 'Genuineness ka proof dein', why: 'Licence aur parts mein authenticity hi bharosa banati hai.' },
      { title: 'Warranty aur turnaround likhein', why: 'Repair aur renewal dono mein time expectation clear honi chahiye.' },
    ],
    mistakes: [
      'Bina range diye har customer ko "call karein" bhejna.',
      'Warranty aur return policy baad mein batana.',
      'Grey market ya unverified licence ko authorised bata kar bechna.',
    ],
    check: [
      'Product list rates ke saath hai?',
      'Authorisation ya warranty proof visible hai?',
      'Turnaround time likha hai?',
      'WhatsApp/call response test karein.',
    ],
    services: ['google-business-profile', 'website-development', 'whatsapp-marketing'],
  },
];
