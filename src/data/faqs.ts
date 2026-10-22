export type FaqItem = {
  question: string;
  answer: string;
};

/** Frequently asked questions shown on the home page. */
export const faqs: FaqItem[] = [
  {
    question: 'Who does Bishora work with?',
    answer:
      'Bishora focuses on small and local businesses — restaurants, home services, salons and clinics, local retailers, professional services and fitness businesses. If you serve customers in a specific area and want to be found by more of them, we are built for that.',
  },
  {
    question: 'Which service should my business start with?',
    answer:
      'It depends on where you are starting from. A new business with no website usually needs the website and Google Business Profile work first, because everything else depends on those being in place. An established business with a website but no visibility usually gets the most from local SEO and Google Ads. We will tell you which one to prioritise during the free consultation.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Paid campaigns can produce enquiries within the first weeks because you are buying placement immediately. SEO and local visibility take longer, as Google needs time to crawl and re-evaluate changes — usually measured in months rather than days. We set realistic expectations for your situation before any work begins.',
  },
  {
    question: 'What does the free consultation cover?',
    answer:
      'A conversation about your business, your customers and your current online presence, followed by a straightforward view of where the biggest opportunities are and which channels are worth prioritising first. There is no obligation to continue afterwards.',
  },
  {
    question: 'Do you work with small monthly budgets?',
    answer:
      'Yes. Many of the businesses we work with are small, so we focus on the channels that can produce results within a realistic budget and avoid recommending spend you cannot sustain. Sometimes the best first step is not advertising at all — it is fixing what you already have.',
  },
  {
    question: 'Can you work with the website or accounts we already have?',
    answer:
      'Yes. We can take over an existing website, Google Business Profile, analytics or advertising account and improve it, or build new assets when that makes more sense. We will tell you honestly which route is cheaper and more effective.',
  },
];
