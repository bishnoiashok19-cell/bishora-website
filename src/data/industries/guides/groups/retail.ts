import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Retail (6). */
export const retailGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'retail',
    name: 'Fashion & Apparel',
    scene: 'retail-fashion',
    tagline:
      'Clothing store, boutique, fashion store aur footwear — sab kapde bechte hain, lekin size, styling aur stock ka sawal har jagah alag hota hai.',
    intro: [
      'Is group mein wo businesses hain jahan customer pehenne ke liye kuch choose karta hai. Koi daily wear ke liye aata hai, koi function ka outfit dhoondhta hai, aur koi sirf apna size check karne ke liye.',
      'Clothing store mein range aur size availability matter karti hai, boutique mein design aur personal styling, fashion store mein brands aur offers, footwear mein fit aur exchange. Isliye ek hi product template sab par lagana kaam nahi karta.',
    ],
    does: [
      'Readymade aur curated apparel ki sale',
      'Size, fit aur alteration support',
      'Occasion ya season ke hisaab se collection',
      'Exchange, return aur billing handling',
    ],
    expect: [
      'Category-wise range aur price range',
      'Size chart ya available sizes ka hint',
      'Real product photos, sirf model shoot nahi',
      'Exchange policy aur store timing',
    ],
    priorities: [
      { title: 'Size aur stock clarity dein', why: 'Customer visit se pehle check karta hai ki uska size aur pasand ka option hai ya nahi.' },
      { title: 'Exchange policy likh kar rakhein', why: 'Fit ka risk hi apparel mein sabse bada purchase blocker hai.' },
      { title: 'Product photos honest rakhein', why: 'Fabric aur colour ka mismatch online enquiry ko cancel karwa deta hai.' },
    ],
    mistakes: [
      'Sirf model photos daalna, actual garment nahi.',
      'Size chart ya availability ka koi hint na dena.',
      'Exchange rule sirf counter par batana.',
    ],
    check: [
      'Google par timing aur shop photos sahi hain?',
      'Category-wise range website par hai?',
      'Size chart ya size list available hai?',
      'WhatsApp stock enquiry ka reply time check karein.',
    ],
    services: ['google-business-profile', 'social-media-marketing', 'website-development'],
  },
  {
    category: 'retail',
    name: 'Jewellery & Accessories',
    scene: 'retail-fashion',
    tagline:
      'Jewellery, watch aur bags — yahan customer look ke saath purity, warranty aur material ka bharosa bhi check karta hai.',
    intro: [
      'Is group mein high-value aur trust-led purchases aate hain. Jewellery mein purity aur buyback, watch mein warranty aur service, bags mein material aur size sabse pehle dekha jaata hai.',
      'Photos important hain, lekin akeli photos kaafi nahi. Charges, certification aur after-sales process clear likhna hi enquiry ko serious customer mein badalta hai.',
    ],
    does: [
      'Gold, silver, diamond ya fashion jewellery ki sale',
      'Watches aur accessories ki retail sale',
      'Repair, resizing, servicing aur warranty claims',
      'Gifting, bridal ya corporate orders',
    ],
    expect: [
      'Product photos with size aur finish detail',
      'Purity, material ya brand ki clear information',
      'Price range aur charges ka breakdown',
      'Warranty, buyback ya exchange policy',
    ],
    priorities: [
      { title: 'Charges aur policy transparent karein', why: 'Making charge, buyback ya warranty terms pehle likhne se negotiation clear rehti hai.' },
      { title: 'Photos real stock ki daalein', why: 'Design aur finish ka mismatch is category mein sabse aam complaint hai.' },
      { title: 'After-sales process batayein', why: 'Repair aur servicing ka bharosa hi repeat purchase laata hai.' },
    ],
    mistakes: [
      'Certification ya purity ka dawa bina detail.',
      'Buyback aur warranty terms purchase ke baad batana.',
      'Designer ya brand copy ko original jaisa dikhana.',
    ],
    check: [
      'Purity/material info website par hai?',
      'Warranty ya buyback policy likhi hai?',
      'Product photos actual stock se match karti hain?',
      'Appointment ya enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'social-media-marketing', 'google-business-profile'],
  },
  {
    category: 'retail',
    name: 'Electronics & Technology',
    scene: 'retail-electronics',
    tagline:
      'Electronics store, mobile shop aur computer store — jahan model, variant, warranty aur installation ka jawab price se zyada matter karta hai.',
    intro: [
      'Electronics mein customer pehle online compare karta hai, phir shop par aata hai. Model, variant, warranty aur installation ka process clear na ho to visit hi nahi hoti.',
      'Mobile mein exchange aur same-day decision hota hai, computer mein specs aur compatibility, electronics store mein appliance installation. Har type ka sawal alag hai.',
    ],
    does: [
      'Consumer electronics, smartphones aur computers ki sale',
      'Model aur variant comparison, demo',
      'EMI, exchange aur billing',
      'Installation, setup aur warranty coordination',
    ],
    expect: [
      'Current model aur variant-wise price',
      'Warranty aur service process',
      'Exchange ya EMI ki condition',
      'Store location, timing aur stock ka hint',
    ],
    priorities: [
      { title: 'Model aur price current rakhein', why: 'Is category mein price aur stock frequently badalte hain; purani list trust todti hai.' },
      { title: 'Warranty aur service likhein', why: 'Customer ka asli sawal after-sales support hota hai.' },
      { title: 'Enquiry ka fast reply set karein', why: 'Customer same din multiple shops se price compare karta hai.' },
    ],
    mistakes: [
      'Purane model ko latest batana.',
      'Offer ya EMI ki hidden condition.',
      'Refurbished ya open-box product ka farq na batana.',
    ],
    check: [
      'Model-wise price website par hai?',
      'Warranty/installation terms likhe hain?',
      'WhatsApp price enquiry ka reply time?',
      'Google par stock aur timing sahi hai?',
    ],
    services: ['google-business-profile', 'website-development', 'paid-advertising'],
  },
  {
    category: 'retail',
    name: 'Home & Hardware',
    scene: 'retail-home',
    tagline:
      'Furniture, hardware, paint, building material aur home decor — yahan dimension, grade aur delivery process hi purchase decide karte hain.',
    intro: [
      'Is group mein customer ghar, site ya renovation ke liye kharidta hai. Product ke saath dimension, material aur quantity ka hisaab samajhna padta hai.',
      'Furniture mein delivery aur assembly, hardware mein exact item match, paint mein shade aur coverage, building material mein rate aur transport. Content inhi sawalon ke around hona chahiye.',
    ],
    does: [
      'Furniture, decor aur furnishing ki sale',
      'Hardware, tools aur fittings ki supply',
      'Paint, shade matching aur quantity guidance',
      'Cement, steel, tiles jaise building material ki supply',
    ],
    expect: [
      'Product dimensions, grade ya material',
      'Price range aur quantity basis',
      'Delivery, transport ya assembly charges',
      'Warranty, return ya breakage policy',
    ],
    priorities: [
      { title: 'Specification detail mein likhein', why: 'Dimension aur grade galat hone se product site ya ghar ke liye bekaar ho jaata hai.' },
      { title: 'Delivery aur transport cost batayein', why: 'Last-mile charge hi total budget bigaadta hai.' },
      { title: 'Quote process simple banayein', why: 'Contractor aur bulk buyers rate aur quantity ek saath maangte hain.' },
    ],
    mistakes: [
      'Sirf photos dena, dimension ya grade nahi.',
      'Delivery ya assembly charge baad mein batana.',
      'Stock confirm kiye bina commitment dena.',
    ],
    check: [
      'Dimensions/grade product pages par hain?',
      'Delivery area aur charges clear hain?',
      'Quote request ka reply time?',
      'Google par showroom ya yard location sahi hai?',
    ],
    services: ['website-development', 'google-business-profile', 'whatsapp-marketing'],
  },
  {
    category: 'retail',
    name: 'Daily Needs',
    scene: 'retail-daily',
    tagline:
      'Grocery, supermarket, stationery, book, gift, toy aur cosmetic — yahan repeat purchase aur quick availability hi sab kuch hai.',
    intro: [
      'Daily needs businesses customer ke routine ka hissa hoti hain. Decision fast hota hai aur repeat purchase zyada. Isliye timing, stock aur order ka easy route sabse important hai.',
      'Grocery mein delivery area, supermarket mein offers aur parking, stationery aur books mein season aur title, gift aur toy mein occasion aur age group. Har type ka filter alag hai.',
    ],
    does: [
      'Daily grocery aur household essentials ki sale',
      'School, office aur art supplies',
      'Gifting, toys aur personal-care products',
      'WhatsApp order, home delivery ya bulk packs',
    ],
    expect: [
      'Stock ya availability ka quick confirmation',
      'Price aur offer ki clarity',
      'Delivery area ya pickup process',
      'Shop timing aur nearby location',
    ],
    priorities: [
      { title: 'WhatsApp order ko default route banayein', why: 'Daily needs mein customer jaldi order karna chahta hai, form bharna nahi.' },
      { title: 'Price aur offer update rakhein', why: 'Rate aur validity galat hone se repeat customer chala jaata hai.' },
      { title: 'Google listing complete karein', why: 'Near-me search aur timing hi walk-in laate hain.' },
    ],
    mistakes: [
      'Delivery area aur minimum order clear na karna.',
      'Purani price list ya expired offer dikhana.',
      'Out-of-stock item ko available batana.',
    ],
    check: [
      'Delivery area aur charges likhe hain?',
      'Google timing aur number sahi hain?',
      'WhatsApp order ka reply time?',
      'Offer aur price list current hai?',
    ],
    services: ['google-business-profile', 'whatsapp-marketing', 'website-development'],
  },
  {
    category: 'retail',
    name: 'Sports & Auto Retail',
    scene: 'sports',
    tagline:
      'Sports store aur automobile parts store — dono mein exact fit ka match chahiye, warna product customer ke kaam ka nahi.',
    intro: [
      'Yeh do retail types alag dikhte hain, lekin sawal ek hi hai: kya yeh item mere use ke liye sahi hai? Sports mein size aur sport, auto parts mein vehicle aur part number.',
      'Isliye category-wise listing, compatibility guidance aur bulk supply ka process clear hona chahiye. Customer usually specific requirement le kar aata hai, browse karne nahi.',
    ],
    does: [
      'Sports gear, equipment aur footwear ki sale',
      'Vehicle spare parts aur consumables ki supply',
      'Size, model ya part-number matching',
      'Team, academy ya workshop bulk orders',
    ],
    expect: [
      'Sport-wise ya vehicle-wise product listing',
      'Size, compatibility ya part number detail',
      'Genuine vs aftermarket ka farq jahan applicable',
      'Exchange ya return policy',
    ],
    priorities: [
      { title: 'Compatibility ko easy check karein', why: 'Galat size ya part customer ka kaam rukwa deta hai aur return badhata hai.' },
      { title: 'Bulk buyers ko alag route dein', why: 'Academies aur workshops regular, higher-value orders laate hain.' },
      { title: 'Product detail accurate rakhein', why: 'Is category mein specification hi purchase decision hai.' },
    ],
    mistakes: [
      'Part number ya size confirm kiye bina order lena.',
      'Duplicate ya local product ko branded batana.',
      'Bulk order timeline clear na karna.',
    ],
    check: [
      'Sport/vehicle-wise listing hai?',
      'Size ya compatibility guide visible hai?',
      'Return/exchange policy likhi hai?',
      'Bulk enquiry ka reply time?',
    ],
    services: ['google-business-profile', 'website-development', 'whatsapp-marketing'],
  },
];
