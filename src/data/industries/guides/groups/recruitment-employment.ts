import type { SubcategoryGuideSeed } from '../../types';

/** Group guides: Recruitment & Employment. */
export const recruitmentEmploymentGroupGuides: SubcategoryGuideSeed[] = [
  {
    category: 'recruitment-employment',
    name: 'Recruitment',
    scene: 'recruitment',
    tagline:
      'Recruitment agency, placement agency aur job consultant — teeno hiring se jude hain, lekin teeno ka customer aur paisa lene ka tarika alag hota hai.',
    intro: [
      'Recruitment agency employer ke liye kaam karti hai aur usse fee leti hai. Placement agency candidate ko job dilane mein help karti hai, often local aur bulk roles mein.',
      'Job consultant individual candidate ke career par kaam karta hai. Isliye website par ye clear hona chahiye ki aap kis side ke liye kaam karte hain aur charges kis se aate hain.',
    ],
    does: [
      'Requirement ya candidate profile ki intake',
      'Sourcing, screening aur shortlisting',
      'Interview aur joining coordination',
      'Employer aur candidate ke beech documentation',
    ],
    expect: [
      'Roles, industries aur locations ki clarity',
      'Fee structure aur kis party se charge hota hai',
      'Shortlist ya placement timeline',
      'Replacement ya support ki terms',
    ],
    priorities: [
      { title: 'Employer aur candidate side alag karein', why: 'Dono ka sawal aur process alag hota hai; mix content confusion banata hai.' },
      { title: 'Fees ka model likhein', why: 'Recruitment mein commercial clarity hi serious enquiry laati hai.' },
      { title: 'Current roles ya sectors update rakhein', why: 'Purani list par enquiry aana band ho jaata hai.' },
    ],
    mistakes: [
      'Candidate se charges chhupana ya baad mein batana.',
      'Role aur salary ko badha-chadha kar present karna.',
      'Bina JD ke profiles bhejna.',
    ],
    check: [
      'Website par roles/industries clear hain?',
      'Fee aur replacement terms likhe hain?',
      'Current openings ya mandates updated hain?',
      'Enquiry ka reply time check karein.',
    ],
    services: ['website-development', 'google-business-profile', 'content-creation'],
  },
  {
    category: 'recruitment-employment',
    name: 'Career Services',
    scene: 'recruitment',
    tagline:
      'Resume service, interview training aur employment consultant — yahan customer apne career par paisa kharch karta hai, isliye trust aur clarity sabse important hai.',
    intro: [
      'Career services mein customer individual hota hai aur decision personal hota hai. Usse pata chale ki service kya badlegi aur kitna time lagega.',
      'Resume, interview aur counselling ka outcome alag hota hai. Job guarantee jaisa claim yahan sabse zyada damage karta hai.',
    ],
    does: [
      'Resume aur profile ki structuring',
      'Interview practice aur feedback',
      'Career direction aur job search planning',
      'Documentation aur follow-up support',
    ],
    expect: [
      'Service ka exact scope aur deliverables',
      'Turnaround time ya session schedule',
      'Fees aur revision/support policy',
      'Confidentiality ka assurance',
    ],
    priorities: [
      { title: 'Scope aur deliverable likhein', why: 'Customer ko pata chale kis cheez ke liye pay kar raha hai.' },
      { title: 'Turnaround time commit karein', why: 'Job deadlines ke saath ye service urgent hoti hai.' },
      { title: 'Outcome ko honestly frame karein', why: 'Selection aur placement aapke control mein nahi hote.' },
    ],
    mistakes: [
      'Job ya selection guarantee dena.',
      'Fees aur revisions clear na karna.',
      'Client ka personal data bina consent dikhana.',
    ],
    check: [
      'Service scope website par clear hai?',
      'Fees aur timeline likhe hain?',
      'Samples ya trainer info visible hai?',
      'Enquiry/booking ka reply time check karein.',
    ],
    services: ['website-development', 'landing-page-design', 'content-creation'],
  },
];
