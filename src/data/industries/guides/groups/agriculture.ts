import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Agriculture. */
export const agricultureGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'agriculture',
    name: 'Farm & Animal Production',
    scene: 'agriculture',
    tagline:
      'Farm, dairy, poultry, goat farming aur animal husbandry — sab produce karte hain, par buyer ka sawal season, quantity aur pickup par hota hai.',
    intro: [
      'Is group mein kheti aur pashupalan se juda kaam aata hai. Buyer mostly local hota hai: trader, dukaan, hotel ya seedha ghar ka customer. Usse current availability aur pickup ka time chahiye.',
      'Har business ka rhythm alag hai. Fasal season mein aati hai, doodh roz subah shaam, egg roz, aur goat ki demand festival par badhti hai. Isliye rate aur stock update ka system hona chahiye.',
    ],
    does: [
      'Crop, doodh, egg ya livestock ka production',
      'Daily ya seasonal supply aur route delivery',
      'Grading, packing aur transport coordination',
      'Rate, stock aur pickup ka daily update',
    ],
    expect: [
      'Aaj ka rate aur available quantity',
      'Farm location aur pickup ya delivery time',
      'Product ka grade, weight ya pack size',
      'WhatsApp ya phone par seedha contact',
    ],
    priorities: [
      { title: 'Current rate aur stock update rakhein', why: 'Agri rates roz badalte hain; purani jankari enquiry kharab karti hai.' },
      { title: 'Pickup aur delivery ka time fix karein', why: 'Transport aur timing hi cost aur order decide karte hain.' },
      { title: 'WhatsApp ko order ka main route banayein', why: 'Local buyer photo aur rate wahin confirm karta hai.' },
    ],
    mistakes: [
      'Purani fasal ya purane rate ki photo chhodna.',
      'Quantity ka galat andaza batana.',
      'Season khatam hone par listing update na karna.',
    ],
    check: [
      'Aaj ka rate aur availability dikh rahi hai?',
      'Farm location map par sahi hai?',
      'WhatsApp enquiry ka reply time kya hai?',
      'Pickup aur transport ka process clear hai?',
    ],
    services: ['website-development', 'whatsapp-marketing', 'google-business-profile'],
  },
  {
    category: 'agriculture',
    name: 'Agricultural Inputs',
    scene: 'agriculture',
    tagline:
      'Seed, fertilizer aur pesticide dealer — kisan season ke hisaab se aata hai, aur usse variety, dose aur stock ka seedha jawab chahiye.',
    intro: [
      'Input dealer ka customer kisan hota hai, jo kharif ya rabi ki taiyari mein dukaan tak aata hai. Uske paas crop, acre aur problem ki jankari hoti hai, lekin time kam.',
      'Isliye product list, bag ya packet size, season aur basic guidance simple language mein honi chahiye. Stock confirm karne ka WhatsApp route dealer ke liye sabse practical hai.',
    ],
    does: [
      'Seed, fertilizer ya crop protection product ki sale',
      'Crop aur season ke hisaab se stock planning',
      'Packet aur bag size ke hisaab se supply',
      'Dose, sowing ya spray ki basic guidance',
    ],
    expect: [
      'Crop-wise product aur variety list',
      'Packet ya bag size aur rate',
      'Season, sowing window ya crop stage',
      'Dukaan location, timing aur stock',
    ],
    priorities: [
      { title: 'Crop aur season ke hisaab se list rakhein', why: 'Kisan wahi product dhoondhta hai jo uski fasal aur samay ke liye hai.' },
      { title: 'Pack size aur rate clear likhein', why: 'Chhota kisan quantity aur budget ke hisaab se hi kharidta hai.' },
      { title: 'Store timing season mein badhayein', why: 'Kharif aur rabi ke waqt shaam tak bheed rehti hai.' },
    ],
    mistakes: [
      'Har fasal ke liye same dose ya product batana.',
      'Licence ya quality ka jhootha claim.',
      'Stock khatam hone par listing update na karna.',
    ],
    check: [
      'Crop-wise product list website par hai?',
      'Pack size aur rate range clear hai?',
      'Google par dukaan timing aur number sahi hai?',
      'WhatsApp stock enquiry ka reply time?',
    ],
    services: ['google-business-profile', 'whatsapp-marketing', 'website-development'],
  },
  {
    category: 'agriculture',
    name: 'Agricultural Equipment',
    scene: 'agriculture',
    tagline:
      'Agriculture equipment, tractor aur irrigation — teeno khet ke liye hain, par buyer ek mein implement, doosre mein finance aur teesre mein layout dekhta hai.',
    intro: [
      'Is group mein farm machinery aur paani ke system aate hain. Kisan ke paas pehle se tractor aur zameen ka size hota hai, isliye compatibility pehla sawal hai.',
      'Equipment mein demo aur spare matter karta hai, tractor mein price aur finance, irrigation mein acre-wise design aur installation. Inhe alag explain karna zaroori hai.',
    ],
    does: [
      'Farm implement, tractor ya irrigation system ki supply',
      'Tractor HP aur acre ke hisaab se matching',
      'Demo, delivery aur installation support',
      'Spare parts, service aur repair coordination',
    ],
    expect: [
      'HP, acre ya crop ke hisaab se suitability',
      'Price range aur kya include hai',
      'Demo, installation aur delivery process',
      'Spare aur service ka contact',
    ],
    priorities: [
      { title: 'Compatibility clear likhein', why: 'Kisan ke tractor aur zameen ke hisaab se hi product chunta hai.' },
      { title: 'Demo ya installation dikhayein', why: 'Kaam chalte hue dekhe bina high-value purchase nahi hoti.' },
      { title: 'Spare aur service bataein', why: 'Season mein equipment band pade to nuksan hota hai.' },
    ],
    mistakes: [
      'Har tractor ya fasal ke liye same product batana.',
      'Subsidy ya finance ka jhootha claim.',
      'Price range hidden rakhna.',
    ],
    check: [
      'HP ya acre compatibility likha hai?',
      'Demo video ya installation photos hain?',
      'Price range ya enquiry route clear hai?',
      'Service contact visible hai?',
    ],
    services: ['website-development', 'google-business-profile', 'whatsapp-marketing'],
  },
  {
    category: 'agriculture',
    name: 'Plants & Horticulture',
    scene: 'horticulture',
    tagline:
      'Nursery aur organic farming — ek plant bechta hai, doosra produce. Dono mein customer freshness aur process ka proof dhoondhta hai.',
    intro: [
      'Nursery customer plant ka size, season aur care dekh kar aata hai. Organic farming customer product ke saath method aur certification status jaanna chahta hai.',
      'Dono categories mein photos sabse zyada kaam karti hain. Plant ki current photo aur farm ka actual process, dono claim se zyada bharosa dete hain.',
    ],
    does: [
      'Plant, sapling ya organic produce ki sale',
      'Season ke hisaab se stock aur availability',
      'Care guidance ya farming method ki jankari',
      'Delivery, pickup aur bulk supply',
    ],
    expect: [
      'Plant variety ya product ki current photos',
      'Size, pack aur rate',
      'Season aur care ya storage ki basic info',
      'Nursery ya farm location aur contact',
    ],
    priorities: [
      { title: 'Photos current rakhein', why: 'Plant ka size aur health, aur produce ka look hi decision banata hai.' },
      { title: 'Season aur availability likhein', why: 'Har plant aur fasal saal bhar available nahi hoti.' },
      { title: 'Certification status honest rakhein', why: 'Organic buyer sabse pehle proof maangta hai.' },
    ],
    mistakes: [
      'Out-of-season stock available dikhana.',
      'Bina certification organic claim karna.',
      'Care instruction ya storage detail na dena.',
    ],
    check: [
      'Latest plant ya produce photos hain?',
      'Seasonal availability updated hai?',
      'Certification status sahi likha hai?',
      'Google location aur timing sahi hai?',
    ],
    services: ['google-business-profile', 'social-media-marketing', 'website-development'],
  },
  {
    category: 'agriculture',
    name: 'Agri Services',
    scene: 'agriculture',
    tagline:
      'Agricultural consultant aur food processing — ek salah deta hai, doosra produce ko pack karta hai. Dono mein clarity aur process hi bharosa banate hain.',
    intro: [
      'Consultant ka customer kisan hota hai jo problem ka solution dhoondh raha hai. Food processing ka customer retailer, distributor ya brand hota hai jo product aur pack size dekhta hai.',
      'Consultant mein simple language aur season-wise advice chahiye. Food processing mein ingredients, shelf life, MOQ aur sample ka process. Dono ka content mix nahi karna chahiye.',
    ],
    does: [
      'Crop advisory, soil health ya farm planning',
      'Training aur field visit based guidance',
      'Raw produce ki processing aur packing',
      'Retail, bulk aur private label supply',
    ],
    expect: [
      'Crop aur region ya product aur pack size',
      'Consultation fees ya MOQ aur sample process',
      'Season, shelf life ya delivery timeline',
      'Seedha contact aur reply time',
    ],
    priorities: [
      { title: 'Apni exact service clear likhein', why: 'Kisan advisory dhoondhta hai, retailer product; dono ki search alag hai.' },
      { title: 'Process aur fees ya MOQ batayein', why: 'Bina basic terms ke enquiry aage nahi badhti.' },
      { title: 'Season aur stock ke hisaab se update karein', why: 'Agri service aur food product dono ka kaam season se juda hai.' },
    ],
    mistakes: [
      'Har problem ya product ke liye same generic content.',
      'Zyada yield ya shelf life ka pakka wada.',
      'Licence ya certification ka jhootha mention.',
    ],
    check: [
      'Consultation ya product ki detail page par hai?',
      'Fees ya MOQ clear hai?',
      'Season ke hisaab se content updated hai?',
      'Enquiry ka reply time kya hai?',
    ],
    services: ['website-development', 'seo', 'content-creation'],
  },
];
