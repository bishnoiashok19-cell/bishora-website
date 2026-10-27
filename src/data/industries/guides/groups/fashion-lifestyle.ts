import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Fashion & Lifestyle (2). */
export const fashionLifestyleGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'fashion-lifestyle',
    name: 'Fashion',
    scene: 'fashion-brand',
    tagline:
      'Fashion brand, designer, tailor, bridal, ethnic, men\'s, women\'s aur kids wear — kapde ek jaise lagte hain, par har business ka customer sawal alag poochhta hai.',
    intro: [
      'Is group mein wo businesses hain jo kapde design, stitch ya retail karte hain. Koi apna label chalata hai, koi client ke liye custom banata hai, aur koi readymade stock bechta hai.',
      'Brand ko size chart aur collection photography chahiye, tailor ko rate aur delivery date, bridal store ko appointment aur trial process. Ek hi fashion template sab par lagane se customer ka asli sawal unanswered reh jaata hai.',
    ],
    does: [
      'Kapde design, stitch ya retail karna',
      'Size, fit aur fabric guidance dena',
      'Collection, trial ya alteration manage karna',
      'Online order, exchange aur delivery handle karna',
    ],
    expect: [
      'Size chart aur fabric ki clear detail',
      'Delivery, alteration ya trial ka timeline',
      'Return/exchange ki simple policy',
      'Store ya appointment ka easy contact',
    ],
    priorities: [
      { title: 'Fit aur fabric ki clarity dein', why: 'Apparel mein return ka sabse bada reason size aur material ka mismatch hota hai.' },
      { title: 'Apni real photos use karein', why: 'Stock ya reposted images customer ka bharosa nahi banate.' },
      { title: 'Ek order/appointment route fix karein', why: 'DM, call aur WhatsApp sab jagah enquiry aane se koi request chhoot jaati hai.' },
    ],
    mistakes: [
      'Har platform par alag size chart, price ya delivery time.',
      'Sirf model photos dikhana, garment ki detail nahi.',
      'Delivery date ya alteration timeline vague rakhna.',
    ],
    check: [
      'Size chart product page par hai?',
      'Fabric aur care details likhi hain?',
      'Return/exchange policy visible hai?',
      'Appointment ya order ka reply time check karein.',
    ],
    services: ['website-development', 'social-media-marketing', 'graphic-design'],
  },
  {
    category: 'fashion-lifestyle',
    name: 'Accessories',
    scene: 'retail-fashion',
    tagline:
      'Fashion accessories aur bags/luggage mein ticket size chhota hota hai, par material, size aur warranty ke sawal utne hi specific hote hain.',
    intro: [
      'Accessories group mein belts, scarves, imitation jewellery, sunglasses, bags aur luggage aate hain. Ye mostly outfit ke saath ya gifting ke liye kharide jaate hain.',
      'Customer ko close-up photo, actual size aur material ka sach chahiye. Bags mein warranty aur cabin size jaisi practical details decision le leti hain.',
    ],
    does: [
      'Accessories, bags aur luggage retail karna',
      'Outfit ke saath styling aur combo sets banana',
      'Gifting aur corporate/bulk orders handle karna',
      'Warranty, repair aur exchange manage karna',
    ],
    expect: [
      'Material aur finish ki clear detail',
      'Dimensions ya scale reference',
      'Warranty/repair terms jahan applicable ho',
      'Delivery aur exchange ka process',
    ],
    priorities: [
      { title: 'Material honestly likhein', why: 'Plating, leather-look aur finish ka galat claim seedha return laata hai.' },
      { title: 'Photos mein scale dikhayein', why: 'Chhote item ka size screen par bina reference ke samajh nahi aata.' },
      { title: 'Warranty aur exchange terms likhein', why: 'Bags aur luggage mein repair policy hi purchase ka bharosa hai.' },
    ],
    mistakes: [
      'Material ya plating ko galat naam se bechna.',
      'Size reference ke bina photos lagana.',
      'Warranty aur exchange terms vague rakhna.',
    ],
    check: [
      'Material aur dimensions product par hain?',
      'Photos scale ke saath hain?',
      'Warranty/exchange policy likhi hai?',
      'Stock aur delivery time current hai?',
    ],
    services: ['social-media-marketing', 'website-development', 'google-business-profile'],
  },
];
