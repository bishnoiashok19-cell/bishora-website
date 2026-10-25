import { ArrowRight, Check, Search, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/layout/PageHero';
import { ProcessSection } from '../components/ProcessSection';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { IconTile } from '../components/ui/IconTile';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { seoSubServices, seoSubServicePath } from '../data/seoSubServices';
import { services } from '../data/services';
import { useSeo, buildBreadcrumbJsonLd, buildFaqJsonLd } from '../lib/seo';

const seoService = services.find((service) => service.slug === 'seo');

const seoFaqs = [
  {
    question: 'What does SEO actually involve?',
    answer:
      'SEO covers the technical health of your site, the relevance and quality of each page, and the authority your business has earned elsewhere. The mix depends on the site: some businesses need technical fixes first, others need better pages, and many need both.',
  },
  {
    question: 'How long before SEO shows results?',
    answer:
      'Technical fixes can have an effect within weeks. Content and authority work usually takes a few months to show meaningful movement, and competitive markets take longer. We set expectations for your market rather than promising fixed timelines.',
  },
  {
    question: 'Do you guarantee first-page rankings?',
    answer:
      'No. Nobody can legitimately guarantee a specific position, because search results depend on competitors and algorithms you do not control. We commit to the work, the reporting and honest advice about what is realistic.',
  },
  {
    question: 'Can you work with our existing website?',
    answer:
      'Yes. Most of our SEO work improves sites that already exist. If the current platform is holding you back, we will say so clearly and explain what a rebuild would and would not solve.',
  },
  {
    question: 'How do the SEO sub-services fit together?',
    answer:
      'They are parts of one strategy rather than separate products. Technical SEO makes the site readable, on-page SEO makes it relevant, local and international work target the right markets, and off-page and competitor work build authority and direction. Most engagements combine several.',
  },
];

export default function Seo() {
  useSeo({
    title: 'SEO Services for Local Businesses | Search Engine Optimization',
    description:
      'Complete SEO services from Bishora: technical SEO, on-page SEO, off-page SEO, local SEO, e-commerce SEO, international SEO and competitor analysis — one practical strategy.',
    path: '/services/seo',
    keywords: [
      'SEO services',
      'search engine optimization',
      'technical SEO',
      'on-page SEO',
      'local SEO',
      'e-commerce SEO',
      'SEO agency for local businesses',
    ],
    jsonLd: [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'SEO', path: '/services/seo' },
      ]),
      buildFaqJsonLd(seoFaqs),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Service 01 — Search Engine Optimization"
        title="SEO that makes your business easier to find, understand and trust."
        description={
          seoService?.summary ??
          'Search engine optimization built around the searches your customers already make.'
        }
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'SEO' },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            to="/contact?service=SEO"
            size="lg"
            iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
          >
            Get a Free Consultation
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg">
            Ask about SEO
          </Button>
        </div>
      </PageHero>

      {/* Overview + the seven SEO sub-service cards */}
      <section
        aria-labelledby="seo-overview-heading"
        className="border-t border-ink-100 bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Explanation */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-4">
                  <IconTile tone="brand" size="lg">
                    <Search aria-hidden="true" />
                  </IconTile>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      Service 01
                    </p>
                    <p className="mt-0.5 text-sm text-ink-500">
                      Search Engine Optimization
                    </p>
                  </div>
                </div>

                <h2
                  id="seo-overview-heading"
                  className="mt-6 text-2xl leading-[1.15] font-bold text-ink-950 sm:text-3xl"
                >
                  SEO
                </h2>

                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
                  {seoService?.summary}
                </p>

                <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
                    What is included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {(seoService?.includes ?? []).map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink-700"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand-600"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    to="/contact?service=SEO"
                    iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
                  >
                    Get a Free Consultation
                  </Button>
                  <Button to="/contact" variant="outline">
                    Ask about SEO
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Sub-service cards */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {seoSubServices.map((subService) => (
                    <li
                      key={subService.slug}
                      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                    >
                      <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                        {subService.name}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[0.925rem] leading-relaxed text-ink-600">
                        {subService.cardDescription}
                      </p>
                      <Link
                        to={seoSubServicePath(subService.slug)}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                      >
                        Learn More
                        <ArrowRight
                          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What SEO is and why it matters */}
      <section
        aria-labelledby="seo-explained-heading"
        className="border-t border-ink-100 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="seo-explained-heading"
                  eyebrow="The basics"
                  title="What SEO is, and why it matters now."
                  description="SEO is the work of making your website the most useful answer to a search. It is not a single task, and it is not finished once a page is published."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                <Reveal delay={80}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="font-display text-lg font-bold text-ink-950">
                      What SEO is
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      Search engine optimization brings together three things:
                      a site search engines can read without obstacles, pages
                      that clearly match what people are searching for, and a
                      business that other credible sources reference. When those
                      line up, your pages become eligible for the searches that
                      already happen in your market every day.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={140}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="font-display text-lg font-bold text-ink-950">
                      Why SEO matters
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      Paid advertising stops the moment you stop paying. Organic
                      visibility, once earned, keeps bringing people to your
                      site. It also reaches customers at the moment they are
                      actively looking for a service — the point where a clear,
                      credible page turns a search into an enquiry.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-950">
                      <Sparkles
                        className="size-5 text-brand-600"
                        aria-hidden="true"
                      />
                      What Bishora provides
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      A prioritised plan instead of a generic checklist. We audit
                      what you have, identify the searches worth pursuing,
                      improve the pages that matter most and report on what
                      changed. Where a sub-service is not relevant to your
                      business, we will tell you rather than sell it.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProcessSection
        eyebrow="Our SEO approach"
        title="A measured SEO process, not a monthly mystery."
        description="We start with evidence, fix what is holding the site back, then build relevance and authority in the order that makes sense for your market."
      />

      {/* FAQ */}
      <section
        aria-labelledby="seo-faq-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  id="seo-faq-heading"
                  eyebrow="FAQ"
                  title="Common questions about SEO."
                  description="Straight answers about scope, timelines and what is realistic."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <Accordion items={seoFaqs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow="Start with SEO"
        title="Tell us what you sell and where you want to rank."
        description="A free consultation, an honest review of your current search visibility and a clear recommendation on what to do first — with no obligation to continue."
      />
    </>
  );
}
