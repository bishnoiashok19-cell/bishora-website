import { ArrowRight, Check, Layers } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { ServiceDetail } from '../components/ServiceDetail';
import { CTASection } from '../components/CTASection';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services } from '../data/services';
import { servicesFaqs } from '../data/servicesFaq';
import { useSeo, buildBreadcrumbJsonLd } from '../lib/seo';

const includedInEveryEngagement = [
  'A clear, prioritised plan before any work starts',
  'Honest advice on what to do and what to skip',
  'Transparent reporting you can actually read',
  'A single point of contact for the whole engagement',
  'No lock-in — you keep your accounts, assets and data',
];

export default function Services() {
  useSeo({
    title: 'Digital Marketing Services for Local Businesses | Bishora',
    description:
      'Bishora provides SEO, AEO, GEO, Google Business Profile optimisation, paid advertising, websites, landing pages, social media, WhatsApp and email marketing.',
    path: '/services',
    keywords: [
      'digital marketing services',
      'SEO services',
      'answer engine optimization',
      'generative engine optimization',
      'Google Business Profile optimization',
      'paid advertising agency',
      'Google Ads management',
      'landing page design',
      'WhatsApp marketing',
      'email marketing',
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Services', path: '/services' },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Marketing services built around leads, not vanity metrics."
        description="Everything Bishora does is aimed at one outcome: more of the right people contacting your business. Here is what each service involves and what you receive."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            to="/contact"
            size="lg"
            iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
          >
            Get a Free Consultation
          </Button>
          <Button to="/portfolio" variant="outlineLight" size="lg">
            View our projects
          </Button>
        </div>
      </PageHero>

      {/* Quick navigation */}
      <section
        aria-label="Services on this page"
        className="border-b border-ink-100 bg-white py-8"
      >
        <Container>
          <Reveal>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
              <p className="flex shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
                <Layers className="size-4 text-brand-600" aria-hidden="true" />
                Jump to a service
              </p>
              <ul className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <li key={service.slug}>
                    <a
                      href={`#${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
                    >
                      <service.icon className="size-4" aria-hidden="true" />
                      {service.shortName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Detailed services */}
      {services.map((service, index) => (
        <ServiceDetail key={service.slug} service={service} index={index} />
      ))}

      {/* Included in every engagement */}
      <section
        aria-labelledby="included-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="included-heading"
                  eyebrow="How we work"
                  title="Included in every engagement."
                  description="Whichever services you choose, the way we work does not change. You get clarity, honesty and full visibility at every stage."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {includedInEveryEngagement.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white"
                      >
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-[0.95rem] font-medium text-ink-800">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="services-faq-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  id="services-faq-heading"
                  eyebrow="FAQ"
                  title="Common questions about our services."
                  description="Straight answers about scope, timelines and budgets."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <Accordion items={servicesFaqs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Not sure where to start?"
        title="Tell us what you want to improve and we will tell you what to do first."
        description="A free consultation, an honest assessment of your current online presence and a clear recommendation — no obligation to continue."
      />
    </>
  );
}
