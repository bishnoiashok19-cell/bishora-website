import { Hero } from '../components/home/Hero';
import { ValueSection } from '../components/home/ValueSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { VerticalsSection } from '../components/home/VerticalsSection';
import { WhySection } from '../components/home/WhySection';
import { FaqSection } from '../components/home/FaqSection';
import { ProcessSection } from '../components/ProcessSection';
import { CTASection } from '../components/CTASection';
import { useSeo } from '../lib/seo';

export default function Home() {
  useSeo({
    title:
      'Bishora — Helping Local Businesses Get Found, Get Leads & Grow Online',
    description:
      'Bishora helps local businesses get found online with SEO, AEO, GEO, Google Business Profile optimisation, paid advertising, websites, social media and email marketing.',
    path: '/',
    keywords: [
      'digital marketing agency',
      'local business marketing',
      'local SEO agency',
      'answer engine optimization',
      'generative engine optimization',
      'Google Business Profile optimization',
      'paid advertising for small business',
      'WhatsApp marketing',
      'email marketing',
      'social media marketing agency',
    ],
  });

  return (
    <>
      <Hero />
      <ValueSection />
      <ServicesOverview />
      <VerticalsSection />
      <WhySection />
      <ProcessSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
