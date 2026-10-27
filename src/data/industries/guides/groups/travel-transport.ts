import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Travel & Transport (3). */
export const travelTransportGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'travel-transport',
    name: 'Travel',
    scene: 'travel',
    tagline:
      'Travel agency, tour operator, consultant, pilgrimage aur adventure — sab trips plan karte hain, par customer ka sawal itinerary, inclusion aur safety par alag hota hai.',
    intro: [
      'Travel mein customer destination, dates aur budget se search shuru karta hai. Uske baad itinerary, inclusions aur cancellation policy dekhta hai.',
      'Agency ticket aur package bechti hai, operator ground arrangements karta hai, consultant planning karta hai. Pilgrimage aur adventure mein comfort aur safety ka layer extra hota hai.',
    ],
    does: [
      'Itinerary aur package planning',
      'Stay, transport aur activity coordination',
      'Booking, payment aur document handling',
      'On-trip support aur plan changes',
    ],
    expect: [
      'Day-wise itinerary aur total price',
      'Inclusions, exclusions aur payment terms',
      'Cancellation aur refund policy',
      'Trip ke dauran contact ka number',
    ],
    priorities: [
      { title: 'Inclusions aur exclusions likhein', why: 'Travel mein sabse zyada complaint isi clarity ki kami se hoti hai.' },
      { title: 'Itinerary realistic rakhein', why: 'Din bhar ki over-packed planning trip ko exhausting bana deti hai.' },
      { title: 'Cancellation policy pehle dikhayein', why: 'Weather, visa ya family reason se plan badal sakta hai; policy baad mein batana trust todta hai.' },
    ],
    mistakes: [
      'Starting price bina dates aur stay category ke dikhana.',
      'Doosri agency ki tour photos use karna.',
      'Cancellation aur refund terms chhupana.',
    ],
    check: [
      'Package inclusions aur exclusions clear hain?',
      'Itinerary realistic aur day-wise hai?',
      'Cancellation policy visible hai?',
      'Enquiry ka reply time kya hai?',
    ],
    services: ['website-development', 'paid-advertising', 'social-media-marketing'],
  },
  {
    category: 'travel-transport',
    name: 'Passenger Transport',
    scene: 'transport',
    tagline:
      'Taxi, cab aur bus — customer fare, driver detail aur pickup time par bharosa karta hai, brand name se zyada.',
    intro: [
      'Passenger transport mein booking mostly phone ya WhatsApp par hoti hai. Customer fare, vehicle type aur pickup confirmation turant chahta hai.',
      'Taxi local aur outstation chalti hai, cab app-jaisa convenience deta hai, bus route aur seat par chalti hai. Har case mein information ka order alag hai.',
    ],
    does: [
      'Local, airport aur outstation rides',
      'Vehicle aur driver assignment',
      'Fare estimate aur trip confirmation',
      'Corporate ya monthly booking coordination',
    ],
    expect: [
      'Fare estimate aur extra charges',
      'Vehicle type aur seating',
      'Driver aur pickup confirmation',
      'Cancellation aur waiting policy',
    ],
    priorities: [
      { title: 'Fare aur extra charges pehle batayein', why: 'Trip ke baad fare badalna sabse common complaint hai.' },
      { title: 'Driver aur vehicle details confirm karein', why: 'Customer pickup se pehle vehicle number aur driver naam chahta hai.' },
      { title: 'WhatsApp par booking confirm karein', why: 'Phone par hone wali booking mein likhit confirmation hi proof hota hai.' },
    ],
    mistakes: [
      'Waiting charges aur toll ka koi hint na dena.',
      'Driver details last minute dena.',
      'Pickup delay par update na karna.',
    ],
    check: [
      'Fare basis aur waiting charges likhe hain?',
      'Booking par driver aur vehicle details milti hain?',
      'Service area clear hai?',
      'Phone ya WhatsApp ka reply time kya hai?',
    ],
    services: ['google-business-profile', 'whatsapp-marketing', 'website-development'],
  },
  {
    category: 'travel-transport',
    name: 'Travel Support',
    scene: 'travel',
    tagline:
      'Visa, passport aur ticketing — teeno paperwork ke business hain, jahan checklist, fee aur timeline hi customer ka main sawal hota hai.',
    intro: [
      'Travel support mein customer ek specific kaam ke liye aata hai: visa, passport ya ticket. Usse documents, fees aur kitna time lagega, yeh teen cheezein chahiye.',
      'Yahan approval ka wada nahi kar sakte. Clear checklist, honest timeline aur status update hi credibility banate hain.',
    ],
    does: [
      'Document checklist aur application support',
      'Appointment aur filing coordination',
      'Fee aur timeline explanation',
      'Status tracking aur follow-up',
    ],
    expect: [
      'Case-wise document list',
      'Government fee aur service charge alag',
      'Processing time ka realistic idea',
      'Office location aur contact hours',
    ],
    priorities: [
      { title: 'Checklist ko case-wise rakhein', why: 'Fresh, reissue aur refusal case ke documents bilkul alag hote hain.' },
      { title: 'Fees ka breakdown dein', why: 'Customer government fee aur service charge alag samajhna chahta hai.' },
      { title: 'Timeline ko honest rakhein', why: 'Approval aapke haath mein nahi hota; realistic expectation complaint rokta hai.' },
    ],
    mistakes: [
      'Visa guaranteed ya passport guaranteed bolna.',
      'Purani checklist use karna.',
      'Application ke baad status update na dena.',
    ],
    check: [
      'Case-wise checklist website par hai?',
      'Fee breakdown clear hai?',
      'Processing time realistic likha hai?',
      'Enquiry ka reply time kya hai?',
    ],
    services: ['website-development', 'seo', 'whatsapp-marketing'],
  },
];
