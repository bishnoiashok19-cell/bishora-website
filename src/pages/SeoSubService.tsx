import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
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
import {
  getSeoSubService,
  seoSubServicePath,
  type SeoSubService,
} from '../data/seoSubServices';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, useSeo } from '../lib/seo';

export type SeoSubServicePageProps = {
  subService: SeoSubService;
};

/**
 * Dedicated page for one SEO sub-service.
 *
 * Reuses the same page shell, typography, card and section patterns as the rest
 * of the site so the page feels like part of the original design rather than a
 * separate template.
 */
export default function SeoSubServicePage({ subService }: SeoSubServicePageProps) {
  const Icon = subService.icon;
  const related = subService.related
    .map((slug) => getSeoSubService(slug))
    .filter((item): item is SeoSubService => Boolean(item));
  const sentenceName = subService.headingName ?? subService.shortName.toLowerCase();

  useSeo({
    title: subService.metaTitle,
    description: subService.metaDescription,
    path: seoSubServicePath(subService.slug),
    keywords: subService.keywords,
    jsonLd: [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'SEO', path: '/services/seo' },
        { name: subService.name, path: seoSubServicePath(subService.slug) },
      ]),
      buildFaqJsonLd(subService.faqs),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="SEO sub-service"
        title={subService.name}
        description={subService.intro}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: 'SEO', to: '/services/seo' },
          { label: subService.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            to={`/contact?service=${encodeURIComponent(`${subService.name} (SEO)`)}`}
            size="lg"
            iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
          >
            Get a Free Consultation
          </Button>
          <Button to="/services/seo" variant="outlineLight" size="lg">
            Back to SEO overview
          </Button>
        </div>
      </PageHero>

      {/* What it means / why it matters */}
      <section aria-labelledby="sub-service-meaning" className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <div className="flex items-center gap-4">
                  <IconTile tone="brand" size="lg">
                    <Icon aria-hidden="true" />
                  </IconTile>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                      SEO
                    </p>
                    <p className="mt-0.5 text-sm text-ink-500">{subService.name}</p>
                  </div>
                </div>

                <h2
                  id="sub-service-meaning"
                  className="mt-6 text-2xl leading-[1.15] font-bold text-ink-950 sm:text-3xl"
                >
                  What {subService.name} means
                </h2>

                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
                  {subService.whatItIs}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:p-8">
                  <h2 className="font-display text-xl font-bold text-ink-950 sm:text-2xl">
                    Why it matters
                  </h2>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-ink-600">
                    {subService.whyItMatters}
                  </p>

                  <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                    <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
                      What is included
                    </h3>
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {subService.includes.map((item) => (
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
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Detailed topics */}
      <section
        aria-labelledby="sub-service-detail"
        className="border-t border-ink-100 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="sub-service-detail"
              eyebrow="In detail"
              title={`How we approach ${sentenceName}.`}
              description="The specifics below are the areas we review and improve as part of this service."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 lg:grid-cols-2">
            {subService.sections.map((section, index) => (
              <Reveal as="li" key={section.title} delay={index * 50}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                  <h3 className="font-display text-[1.0625rem] font-bold text-ink-950 sm:text-lg">
                    {section.title}
                  </h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">
                    {section.body}
                  </p>

                  {section.bullets ? (
                    <ul className="mt-4 space-y-2 border-t border-ink-100 pt-4">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-sm text-ink-700"
                        >
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-brand-600"
                            strokeWidth={2.5}
                            aria-hidden="true"
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Activities, deliverables and fit */}
      <section
        aria-labelledby="sub-service-deliverables"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="sub-service-deliverables"
                  eyebrow="Outputs"
                  title="What you actually receive."
                  description="Every engagement produces tangible work you can review, keep and use — not just advice in a slide deck."
                />
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
                    Who this is for
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {subService.suitableFor.map((item) => (
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
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:p-8">
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    Key activities and deliverables
                  </h3>
                  <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                    {subService.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 rounded-xl border border-ink-100 bg-white p-4 text-sm font-medium text-ink-800"
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
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <ProcessSection
        eyebrow="How we work"
        title={`A clear process for ${sentenceName}.`}
        description="The same five-step approach applies: understand the business, find the opportunities, agree the plan, do the work and measure what changed."
      />

      {/* FAQ */}
      <section
        aria-labelledby="sub-service-faq"
        className="border-t border-ink-100 bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  id="sub-service-faq"
                  eyebrow="FAQ"
                  title={`${subService.name} questions.`}
                  description="The questions businesses usually ask before starting this work."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <Accordion items={subService.faqs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Related sub-services + back to overview */}
      <section
        aria-labelledby="sub-service-related"
        className="border-t border-ink-100 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="sub-service-related"
              eyebrow="Related services"
              title="Often combined with this service."
              description="SEO works best as one coordinated strategy. These sub-services usually support the work above."
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal as="li" key={item.slug} delay={index * 60}>
                <Link
                  to={seoSubServicePath(item.slug)}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                    {item.name}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.925rem] leading-relaxed text-ink-600">
                    {item.cardDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
                    Learn More
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-10">
              <Button
                to="/services/seo"
                variant="outline"
                icon={<ArrowLeft className="size-4" aria-hidden="true" />}
              >
                Back to the SEO overview
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Talk it through"
        title={`Need help with ${sentenceName}?`}
        description="A free consultation, a clear view of where you stand today and honest advice on what to do first — no obligation to continue."
      />
    </>
  );
}
