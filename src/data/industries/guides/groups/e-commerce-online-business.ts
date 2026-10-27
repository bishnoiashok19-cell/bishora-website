import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: E-commerce & Online Business. */
export const eCommerceOnlineBusinessGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'e-commerce-online-business',
    name: 'E-commerce',
    scene: 'ecommerce',
    tagline:
      'Online store, multi-channel business aur marketplace seller — teeno products bechte hain, par channel aur control ka farq poora game badal deta hai.',
    intro: [
      'Is group mein wo businesses hain jo product online sell karti hain. Customer photos, price, delivery aur return policy dekh kar purchase karta hai.',
      'Apna store customer relationship aur data deta hai, marketplace reach deta hai, aur multi-channel dono ko manage karta hai. Har model mein priority alag hoti hai.',
    ],
    does: [
      'Product catalogue aur listing management',
      'Order processing aur shipping',
      'Payment, COD aur return handling',
      'Channel-wise pricing aur stock coordination',
    ],
    expect: [
      'Clear product photos, variants aur price',
      'Delivery time aur shipping charges',
      'Return/exchange policy',
      'Order tracking aur support contact',
    ],
    priorities: [
      { title: 'Product page complete banayein', why: 'Photo, spec aur price ke bina customer compare aur trust nahi kar sakta.' },
      { title: 'Shipping aur return clear likhein', why: 'Delivery aur return cost purchase se pehle pata hona chahiye.' },
      { title: 'Channel consistency maintain karein', why: 'Different price ya stock return aur complaint badhata hai.' },
    ],
    mistakes: [
      'Product photos aur actual product mein farq.',
      'Shipping charge checkout par reveal karna.',
      'Return policy ya support contact hidden rakhna.',
    ],
    check: [
      'Mobile par purchase flow test karein.',
      'Shipping aur return policy visible hai?',
      'Saare channels par price same hai?',
      'Order support ka reply time check karein.',
    ],
    services: ['website-development', 'seo', 'paid-advertising'],
  },
  {
    category: 'e-commerce-online-business',
    name: 'Direct-to-Consumer',
    scene: 'ecommerce',
    tagline:
      'D2C, fashion, beauty aur home brands apne channel par sell karte hain — yahan product detail aur repeat experience hi growth banate hain.',
    intro: [
      'D2C brand ka customer direct aap se kharidta hai, isliye product ka poora context aapko dena hota hai: material, size, ingredients ya dimensions.',
      'Fashion mein fit, beauty mein ingredients aur home mein dimensions sabse bada sawal hain. Inhe clear karna return kam karta hai aur repeat order badhata hai.',
    ],
    does: [
      'Own website aur social channel par sales',
      'Product content, lookbook aur education',
      'Shipping, exchange aur return handling',
      'Email, WhatsApp aur repeat purchase programs',
    ],
    expect: [
      'Product ki full details aur honest photos',
      'Size, ingredient ya dimension information',
      'Shipping, exchange aur return policy',
      'Support aur order tracking',
    ],
    priorities: [
      { title: 'Product detail ko complete rakhein', why: 'Direct customer ke paas dukaan ka salesperson nahi hota; page ko hi sab batana padta hai.' },
      { title: 'Category-specific sawal answer karein', why: 'Fashion mein fit, beauty mein ingredients aur home mein size hi return ka reason hote hain.' },
      { title: 'Retention channel banayein', why: 'Email aur WhatsApp repeat order ka sabse sasta aur reliable source hain.' },
    ],
    mistakes: [
      'Sirf aesthetic photos, product specs nahi.',
      'Exchange aur return policy unclear rakhna.',
      'Discount-led communication se brand value girana.',
    ],
    check: [
      'Product page par full specs hain?',
      'Size/ingredient/dimension info clear hai?',
      'Exchange aur return policy visible hai?',
      'Support enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'social-media-marketing', 'email-marketing'],
  },
  {
    category: 'e-commerce-online-business',
    name: 'Digital Business',
    scene: 'ecommerce',
    tagline:
      'Digital product, subscription aur online service — teeno mein delivery instant ya remote hoti hai, isliye scope aur terms hi trust banate hain.',
    intro: [
      'Digital business mein customer physical product nahi kharidta. Wo course, template, recurring plan ya remote service kharidta hai, jahan expectation pehle set karni padti hai.',
      'Digital product mein access aur license matter karta hai, subscription mein billing aur cancel, aur online service mein scope aur turnaround. Terms clear na hon to refund aur review dono aate hain.',
    ],
    does: [
      'Digital product ya course delivery',
      'Recurring plans aur billing management',
      'Remote service delivery aur calls',
      'Access, license aur support handling',
    ],
    expect: [
      'Kya included hai aur kis format mein',
      'Pricing, billing ya payment terms',
      'Access, delivery ya service timeline',
      'Refund, pause ya cancel policy',
    ],
    priorities: [
      { title: 'Scope aur deliverables likhein', why: 'Digital purchase mein customer sirf description par decide karta hai.' },
      { title: 'Access aur billing transparent rakhein', why: 'Payment ke baad access ya renewal ka confusion sabse common complaint hai.' },
      { title: 'Support aur refund policy dein', why: 'Digital goods mein bhi clear process hone se disputes kam hote hain.' },
    ],
    mistakes: [
      'Lifetime access ya unlimited revisions bina terms ke bolna.',
      'Auto-renewal ya payment terms hidden rakhna.',
      'Preview ya sample na dikhana.',
    ],
    check: [
      'Product/service page par scope clear hai?',
      'Pricing aur billing terms visible hain?',
      'Refund ya cancel policy hai?',
      'Support reply time check karein.',
    ],
    services: ['website-development', 'email-marketing', 'content-creation'],
  },
];
