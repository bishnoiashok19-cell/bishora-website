import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Logistics & Supply Chain. */
export const logisticsSupplyChainGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'logistics-supply-chain',
    name: 'Courier & Delivery',
    scene: 'logistics',
    tagline:
      'Courier, local delivery aur e-commerce logistics — teeno mein customer speed chahta hai, par coverage, tracking aur charges ka farq decision badalta hai.',
    intro: [
      'Is group mein chhote parcel se lekar daily order pickup tak ka kaam aata hai. Customer ka pehla sawal hota hai: kitne din mein, kis area tak, aur kitne mein.',
      'Courier mein documentation aur tracking zyada matter karta hai, local delivery mein cut-off aur slot, aur e-commerce logistics mein COD, RTO aur remittance cycle.',
    ],
    does: [
      'Document aur parcel pickup aur delivery',
      'Local same-day aur scheduled routes',
      'E-commerce order pickup aur last-mile delivery',
      'Tracking, POD aur COD handling',
    ],
    expect: [
      'Coverage area aur transit time',
      'Weight ya drop-based pricing',
      'Tracking aur proof of delivery process',
      'COD, RTO aur escalation clarity',
    ],
    priorities: [
      { title: 'Coverage aur timeline honest likhein', why: 'Customer usi area ke liye enquiry karta hai jahan delivery promise milta hai.' },
      { title: 'Charges ka basis batayein', why: 'Actual aur volumetric weight ka farq baad mein billing dispute banata hai.' },
      { title: 'Tracking aur POD set karein', why: 'Shipment visibility aur delivery proof hi repeat business ka base hai.' },
    ],
    mistakes: [
      'Har shipment ke liye same transit time claim karna.',
      'COD aur RTO charges hidden rakhna.',
      'Pickup ke baad status update na dena.',
    ],
    check: [
      'Coverage aur transit time website par hai?',
      'Pricing basis clear hai?',
      'Tracking link ya process visible hai?',
      'Pickup enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'google-business-profile', 'whatsapp-marketing'],
  },
  {
    category: 'logistics-supply-chain',
    name: 'Freight & Transport',
    scene: 'transport',
    tagline:
      'Logistics company, transporter aur freight forwarder — teeno goods move karte hain, par scope road se international customs tak badhta hai.',
    intro: [
      'Freight aur transport mein customer route, volume aur documentation ke saath enquiry karta hai. Rate ke saath transit time aur responsibility ka clear picture chahiye.',
      'Transporter road par truck chalata hai, freight forwarder sea ya air shipment aur customs coordinate karta hai, aur logistics company poora chain manage karti hai.',
    ],
    does: [
      'Road, sea aur air freight movement',
      'FTL, part-load aur container planning',
      'Customs aur transport documentation',
      'Route coordination aur shipment tracking',
    ],
    expect: [
      'Routes aur modes ki clear list',
      'Transit time aur pricing basis',
      'Documentation aur compliance process',
      'Quote request with weight aur route',
    ],
    priorities: [
      { title: 'Scope aur coverage clear karein', why: 'Buyer ko pata chale aap road, sea ya end-to-end chain mein kya handle karte hain.' },
      { title: 'Documentation process batayein', why: 'LR, e-way bill, HS code aur customs papers ke bina shipment ruk jaati hai.' },
      { title: 'Quote ka format simple rakhein', why: 'Route, weight aur volume ke saath fast quote hi comparison possible banata hai.' },
    ],
    mistakes: [
      'Bina network ke "all India" ya "worldwide" claim.',
      'Transit time mein season aur congestion ignore karna.',
      'Loading aur destination charges hidden rakhna.',
    ],
    check: [
      'Routes aur modes website par hain?',
      'Documentation checklist available hai?',
      'Quote form chhota aur clear hai?',
      'Quote ka reply time check karein.',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'logistics-supply-chain',
    name: 'Storage',
    scene: 'warehouse',
    tagline:
      'Warehouse aur cold chain dono space dete hain, par ek mein handling aur access matter karta hai, doosre mein temperature aur power backup.',
    intro: [
      'Storage customer apna stock rakhne ke liye space dhoondhta hai. Usse location, size, access aur rate ka basis pata hona chahiye.',
      'Normal warehouse mein racking aur loading bay important hai, cold chain mein temperature range, monitoring aur backup. Dono ka proof alag hota hai.',
    ],
    does: [
      'Pallet, rack aur floor storage',
      'Inbound, outbound aur handling',
      'Inventory records aur stock counts',
      'Temperature-controlled storage jahan applicable ho',
    ],
    expect: [
      'Facility photos aur size options',
      'Rate basis: sqft, pallet ya rack',
      'Access hours aur security details',
      'Contract aur notice period terms',
    ],
    priorities: [
      { title: 'Facility ki real photos dikhayein', why: 'Customer ko floor, height, dock aur racking ka practical idea chahiye.' },
      { title: 'Rate ka basis likhein', why: 'Sqft aur pallet pricing bina basis ke compare nahi hoti.' },
      { title: 'Access aur safety clear karein', why: 'Loading hours, gate entry aur monitoring customer ke operations decide karte hain.' },
    ],
    mistakes: [
      'Sirf exterior ya stock photo se facility dikhana.',
      'Rate basis aur extra handling charges hidden rakhna.',
      'Cold chain mein power backup detail na dena.',
    ],
    check: [
      'Facility photos aur specs hain?',
      'Rate basis clearly likha hai?',
      'Access/security details visible hain?',
      'Enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'google-business-profile', 'email-marketing'],
  },
  {
    category: 'logistics-supply-chain',
    name: 'Fleet',
    scene: 'transport',
    tagline:
      'Fleet management mein business vehicle uptime aur compliance kharidta hai — dashboard se zyada on-ground service ka scope dekha jaata hai.',
    intro: [
      'Fleet customer ke paas pehle se vehicles hote hain. Usse maintenance, driver, permit aur fuel cost ka ek system chahiye.',
      'Isliye service modules, reporting aur responsibility ka clear division hona chahiye. Sirf software screen dikhane se fleet decision nahi hota.',
    ],
    does: [
      'Vehicle maintenance aur servicing schedules',
      'GPS, fuel aur trip reporting',
      'Permit, insurance aur compliance tracking',
      'Driver aur breakdown support coordination',
    ],
    expect: [
      'Fleet size aur vehicle types handled',
      'Service modules aur scope',
      'Reporting format aur frequency',
      'Contract aur pricing model',
    ],
    priorities: [
      { title: 'Service scope define karein', why: 'Maintenance, telematics aur compliance mein kya included hai, ye pehle clear hona chahiye.' },
      { title: 'Reporting ka sample dikhayein', why: 'Fleet cost aur uptime ka data hi client ke decisions ka base hai.' },
      { title: 'Responsibility likhein', why: 'Permit ya service miss hone par accountability clear rehni chahiye.' },
    ],
    mistakes: [
      'Sirf app ya dashboard ko poora service batana.',
      'Compliance aur documentation ki responsibility ambiguous rakhna.',
      'Pricing model ya contract length hidden rakhna.',
    ],
    check: [
      'Service modules website par hain?',
      'Sample report visible hai?',
      'Compliance scope likha hai?',
      'Consultation enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
];
