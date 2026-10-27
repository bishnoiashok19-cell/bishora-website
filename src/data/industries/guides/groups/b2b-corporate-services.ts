import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: B2B & Corporate Services (2). */
export const b2bCorporateServicesGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'b2b-corporate-services',
    name: 'Business Operations',
    scene: 'corporate',
    tagline:
      'BPO, call centre, customer support, outsourcing aur procurement — sab client ke process ka ek hissa lete hain, par SLA aur risk har case mein alag hote hain.',
    intro: [
      'Business operations services client ke daily kaam ka ek portion sambhalti hain: calls, back-office processing, staff ya sourcing. Decision shortlist aur comparison se hota hai, impulse se nahi.',
      'Client process scope, SLA, team structure aur data handling dekhta hai. Isliye generic capability page se zyada specific use case aur engagement model kaam karta hai.',
    ],
    does: [
      'Client ke process ya function ko operate karna',
      'Team, training aur quality monitoring dena',
      'SLA aur reporting ke saath delivery',
      'Transition aur compliance manage karna',
    ],
    expect: [
      'Exact process aur use case',
      'SLA, capacity aur shift coverage',
      'Pricing aur engagement model',
      'Security, compliance aur transition plan',
    ],
    priorities: [
      { title: 'Use case specific likhein', why: 'Client apna function search karta hai, poori service catalogue nahi.' },
      { title: 'SLA aur capacity dein', why: 'Operations buy karne se pehle coverage aur response ka proof chahiye.' },
      { title: 'Security aur compliance clear karein', why: 'Client data aur process access ke bina engagement aage nahi badhti.' },
    ],
    mistakes: [
      'Har service ke liye same generic content.',
      'SLA ya capacity ko vague rakhna.',
      'Pricing model aur contract terms chhupana.',
    ],
    check: [
      'Process aur use case clear hai?',
      'SLA, shifts ya capacity likhi hai?',
      'Security aur compliance info visible hai?',
      'Enquiry/RFI ka reply time check karein.',
    ],
    services: ['website-development', 'seo', 'email-marketing'],
  },
  {
    category: 'b2b-corporate-services',
    name: 'Corporate Services',
    scene: 'corporate',
    tagline:
      'Payroll, office service, corporate event aur business supplies — ye wo services hain jo company ke daily ya planned kaam ko chalati hain.',
    intro: [
      'Corporate services mein client ka sawal practical hota hai: payroll accuracy, office coverage, event execution ya supply delivery. Yahan presentation se zyada process aur reliability matter karti hai.',
      'Har service ka buyer alag hai — HR, admin, procurement ya marketing. Isliye content mein role, timeline aur compliance ki bhasha clear honi chahiye.',
    ],
    does: [
      'Payroll, office ya facility operations',
      'Corporate events aur production',
      'Bulk supplies aur vendor coordination',
      'Compliance, invoicing aur reporting',
    ],
    expect: [
      'Scope aur deliverables',
      'Timeline, cut-off ya delivery window',
      'Pricing structure aur invoice terms',
      'Ek responsible account contact',
    ],
    priorities: [
      { title: 'Scope aur cut-off clearly likhein', why: 'Monthly services mein timing aur boundaries hi expectation set karti hain.' },
      { title: 'Process aur supervision dikhayein', why: 'Client ko pata chale kaam kaise check hoga aur issue par kya hoga.' },
      { title: 'Commercial terms transparent rakhein', why: 'Pricing, GST aur payment terms procurement approval ka hissa hain.' },
    ],
    mistakes: [
      'Scope vague rakhna aur extra charges baad mein batana.',
      'Timeline ya cut-off miss karna.',
      'Stock ya capacity ko hamesha available dikhana.',
    ],
    check: [
      'Scope aur timeline clear hain?',
      'Pricing aur invoice terms likhe hain?',
      'Delivery ya service coverage visible hai?',
      'Account contact ka reply time check karein.',
    ],
    services: ['website-development', 'email-marketing', 'seo'],
  },
];
