import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Non-Profit & Social Organisations (2). */
export const nonProfitSocialOrganisationsGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'non-profit-social-organisations',
    name: 'Non-Profit',
    scene: 'nonprofit',
    tagline:
      'NGO, charitable organisation, foundation aur community group — sab public trust par chalte hain, par unka kaam aur donor ka sawal alag hota hai.',
    intro: [
      'Is group mein wo organisations aati hain jo donation, grants ya local support se kaam karti hain. Koi field program chalati hai, koi grants deti hai, aur koi mohalle ke level par kaam karti hai.',
      'Donor pehle mission aur paise ka use dekhta hai; volunteer apna role; applicant eligibility. Isliye generic "hum samajh ke liye kaam karte hain" page kaafi nahi hota.',
    ],
    does: [
      'Community aur beneficiary programs chalana',
      'Donations, grants ya in-kind support manage karna',
      'Volunteers aur partners ko coordinate karna',
      'Kaam ka record aur updates publish karna',
    ],
    expect: [
      'Mission aur current programs ki detail',
      'Donation ka process aur receipt',
      'Registration ya legal identity',
      'Ek clear contact aur office location',
    ],
    priorities: [
      { title: 'Programs ko specific rakhein', why: 'Donor aur volunteer dono concrete kaam dekh kar judte hain.' },
      { title: 'Donation ka process transparent karein', why: 'Receipt, use aur record ka clarity hi donor ka bharosa hai.' },
      { title: 'Regular updates dijiye', why: 'Purana page organisation ke active hone ka proof nahi deta.' },
    ],
    mistakes: [
      'Impact ko bina detail ke bada dikhana.',
      'Registration aur contact hidden rakhna.',
      'Current needs ya program list update na karna.',
    ],
    check: [
      'Mission aur programs clear hain?',
      'Donation/receipt process likha hai?',
      'Volunteer form ya contact kaam karta hai?',
      'Recent updates visible hain?',
    ],
    services: ['website-development', 'social-media-marketing', 'email-marketing'],
  },
  {
    category: 'non-profit-social-organisations',
    name: 'Social Impact',
    scene: 'nonprofit',
    tagline:
      'Social enterprise, educational NGO, healthcare NGO aur environmental organisation — mission ke saath product, program ya service bhi deliver karte hain.',
    intro: [
      'Social impact group mein wo organisations aati hain jinka daily kaam kisi product, learning program, health support ya environment project se juda hota hai.',
      'Yahan log sirf bhavna nahi, practical cheezein bhi dekhte hain: product, eligibility, camp schedule ya project location. Isliye offering clear honi chahiye.',
    ],
    does: [
      'Products ya services deliver karna',
      'Programs, camps ya drives chalana',
      'Beneficiaries aur customers ko support karna',
      'Partners aur funders ko report karna',
    ],
    expect: [
      'Offering ya program ki clear detail',
      'Eligibility, price ya participation process',
      'Location aur schedule',
      'Mission aur funds ka use',
    ],
    priorities: [
      { title: 'Offering ko pehle explain karein', why: 'Customer ya beneficiary ko practical detail chahiye, sirf mission statement nahi.' },
      { title: 'Mission aur kaam ka link dikhayein', why: 'Log samajhna chahte hain revenue ya donation kaam mein kaise help karta hai.' },
      { title: 'Reports aur updates publish karein', why: 'Social impact claims ko evidence chahiye, warna trust nahi banta.' },
    ],
    mistakes: [
      'Bina source ke impact numbers likhna.',
      'Eligibility ya schedule unclear rakhna.',
      'Product ya service ki basic info missing.',
    ],
    check: [
      'Offering aur price/eligibility clear hai?',
      'Schedule ya camp calendar current hai?',
      'Reports ya updates available hain?',
      'Enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'social-media-marketing', 'content-creation'],
  },
];
