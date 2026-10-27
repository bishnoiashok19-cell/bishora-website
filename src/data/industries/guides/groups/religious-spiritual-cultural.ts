import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Religious, Spiritual & Cultural (3). */
export const religiousSpiritualCulturalGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'religious-spiritual-cultural',
    name: 'Religious',
    scene: 'religious',
    tagline:
      'Temple, religious institution, ashram aur spiritual centre — sab ek doosre se related hain, par devotee ka sawal timing, stay, program ya guidance alag hota hai.',
    intro: [
      'Is group mein wo places aati hain jahan log darshan, satsang, seekhne ya thodi shanti ke liye aate hain. Har jagah ka purpose alag hai, isliye ek hi tarah ka page kaam nahi karta.',
      'Temple mein timings aur festival, ashram mein stay rules, spiritual centre mein program aur teacher — visitor pehle yahi cheezein check karta hai.',
    ],
    does: [
      'Daily darshan, pooja ya satsang',
      'Festival aur special program arrangements',
      'Religious education, classes ya guidance',
      'Community seva aur visitor support',
    ],
    expect: [
      'Accurate timings aur schedule',
      'Location, directions aur parking',
      'Program ya stay ki practical details',
      'Respectful contact aur enquiry route',
    ],
    priorities: [
      { title: 'Timings ko source of truth banayein', why: 'Devotee door se plan karke aata hai; galat timing ka matlab wasted trip hai.' },
      { title: 'Respectful aur simple language rakhein', why: 'Bhaari shabd ya promotional tone shraddha ke saath match nahi karta.' },
      { title: 'Program aur contact clear dein', why: 'Visitor ko pata chale kab aana hai aur kisse baat karni hai.' },
    ],
    mistakes: [
      'Aarti ya darshan timings outdated rakhna.',
      'Donation ko kisi guaranteed benefit se jodna.',
      'Festival ki info last minute par daalna.',
    ],
    check: [
      'Timings aur festival info current hai?',
      'Maps pin sahi entry point kholta hai?',
      'Contact number active hai?',
      'Photos respectful aur relevant hain?',
    ],
    services: ['google-business-profile', 'website-development', 'social-media-marketing'],
  },
  {
    category: 'religious-spiritual-cultural',
    name: 'Religious Services',
    scene: 'religious',
    tagline:
      'Pilgrimage, religious event aur puja saman — teeno mein customer pehle process, inclusions aur trust check karta hai.',
    intro: [
      'Religious services wo hain jo log apne ghar, family function ya yatra ke liye book karte hain. Yahan decision bhavna aur bharosa dono se hota hai.',
      'Pilgrimage mein itinerary, event service mein samagri aur pandit, product store mein material aur delivery. Har jagah clear inclusions hi repeat referral laate hain.',
    ],
    does: [
      'Yatra, pooja ya ceremony ki planning',
      'Pandit, samagri aur logistics coordination',
      'Puja items aur religious products ki supply',
      'Group booking aur delivery support',
    ],
    expect: [
      'Kya included hai aur kya extra',
      'Dates, availability aur lead time',
      'Charges ka clear range',
      'Ek responsible contact person',
    ],
    priorities: [
      { title: 'Inclusions pehle likhein', why: 'Samagri, meals ya transport ka confusion baad mein trust todta hai.' },
      { title: 'Date aur availability confirm karein', why: 'Religious functions fixed dates par hote hain, flexible nahi.' },
      { title: 'Ek contact person dein', why: 'Family ya group ko event ke din seedha baat karne wala chahiye.' },
    ],
    mistakes: [
      'Extra charges baad mein batana.',
      'Itinerary ya samagri list vague rakhna.',
      'Product ka size aur material clearly na likhna.',
    ],
    check: [
      'Inclusions aur exclusions likhe hain?',
      'Booking/availability ka process clear hai?',
      'Charges ka range visible hai?',
      'Delivery ya event-day contact diya hai?',
    ],
    services: ['website-development', 'whatsapp-marketing', 'social-media-marketing'],
  },
  {
    category: 'religious-spiritual-cultural',
    name: 'Cultural',
    scene: 'events',
    tagline:
      'Cultural organisation events, classes aur participation se community banati hai — calendar aur venue hi uski pehchaan hain.',
    intro: [
      'Cultural organisations music, dance, theatre aur local traditions ke around kaam karti hain. Log inhe program dekhne, seekhne ya participate karne ke liye follow karte hain.',
      'Isliye event calendar, class schedule aur venue ki info sabse zyada kaam aati hai. Participation process clear ho to naye log judte hain.',
    ],
    does: [
      'Cultural performances aur festivals organise karna',
      'Music, dance ya theatre classes',
      'Membership aur volunteer participation',
      'Artist aur community collaborations',
    ],
    expect: [
      'Upcoming events aur dates',
      'Class schedule aur eligibility',
      'Venue, timings aur entry info',
      'Membership ya participation ka process',
    ],
    priorities: [
      { title: 'Calendar ko regularly update karein', why: 'Purana calendar dekh kar aaya visitor disappoint hota hai.' },
      { title: 'Class aur membership details dein', why: 'Seekhne wale log schedule aur level ke hisaab se decide karte hain.' },
      { title: 'Venue ki practical info rakhein', why: 'Event ya class tak pahunchne ka clarity attendance badhata hai.' },
    ],
    mistakes: [
      'Event dates aur venue outdated rakhna.',
      'Photos mein program ka context na dena.',
      'Participation ya audition process unclear rakhna.',
    ],
    check: [
      'Upcoming events ki list current hai?',
      'Class schedule aur fees likhe hain?',
      'Venue aur timing clear hai?',
      'Contact ka reply time check karein.',
    ],
    services: ['website-development', 'social-media-marketing', 'email-marketing'],
  },
];
