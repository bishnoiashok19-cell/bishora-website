import { ArrowDown, ArrowRight, Check, Lightbulb } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/layout/PageHero';
import NotFound from './NotFound';
import { IndustryNextSteps } from '../components/industries/IndustryNextSteps';
import { RelevantServices } from '../components/industries/RelevantServices';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  businessTypePath,
  businessTypeRecord,
  industryPath,
  subcategoryPath,
} from '../data/industries';
import type {
  BusinessType,
  Industry,
  IndustrySubcategory,
} from '../data/industries/types';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';

type BusinessTypePageProps = {
  industry: Industry;
  subcategory: IndustrySubcategory;
  businessType: BusinessType;
};

/** Route entry: resolves the three slugs and falls back to the 404 page. */
export default function BusinessTypeRoute() {
  const {
    industrySlug = '',
    subcategorySlug = '',
    businessTypeSlug = '',
  } = useParams();
  const record = businessTypeRecord(
    industrySlug,
    subcategorySlug,
    businessTypeSlug,
  );

  if (!record) return <NotFound />;

  return (
    <BusinessTypePage
      industry={record.industry}
      subcategory={record.subcategory}
      businessType={record.businessType}
    />
  );
}

function BusinessTypePage({
  industry,
  subcategory,
  businessType,
}: BusinessTypePageProps) {
  const path = businessTypePath(
    industry.slug,
    subcategory.slug,
    businessType.slug,
  );
  const relatedTypes = subcategory.businessTypes
    .filter((item) => item.slug !== businessType.slug)
    .slice(0, 8);
  const siblingGroups = industry.subcategories.filter(
    (item) => item.slug !== subcategory.slug,
  );

  useSeo({
    title: `${businessType.name} — Digital Marketing & Web Services | Bishora`,
    description: businessType.description,
    path,
    keywords: [
      `${businessType.name.toLowerCase()} marketing`,
      `${businessType.name.toLowerCase()} website`,
      `${businessType.name.toLowerCase()} seo`,
      subcategory.name.toLowerCase(),
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
      { name: industry.name, path: industryPath(industry.slug) },
      { name: subcategory.name, path: subcategoryPath(industry.slug, subcategory.slug) },
      { name: businessType.name, path },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="Business type"
        title={businessType.name}
        description={businessType.description}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business', to: '/industries' },
          { label: industry.name, to: industryPath(industry.slug) },
          {
            label: subcategory.name,
            to: subcategoryPath(industry.slug, subcategory.slug),
          },
          { label: businessType.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href="#priorities"
            size="lg"
            iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
          >
            See digital priorities
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg">
            Talk to us
          </Button>
        </div>
      </PageHero>

      {/* What this business does */}
      <section
        aria-labelledby="what-it-does-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="what-it-does-heading"
              eyebrow="The business"
              title="What this business does."
              description={`${businessType.name} businesses usually cover the following work:`}
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {businessType.does.map((item, index) => (
              <Reveal as="li" key={item} delay={index * 60}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                  <Check
                    className="mt-0.5 size-4 shrink-0 text-brand-600"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <p className="text-[0.95rem] leading-relaxed text-ink-700">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* What to get right online */}
      <section
        aria-labelledby="online-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="online-heading"
                  eyebrow="Online presence"
                  title={`What to get right online for ${businessType.name.toLowerCase()} businesses.`}
                  description={businessType.focus}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-brand-700 shadow-soft">
                    <Lightbulb className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Start here
                  </p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-700">
                    {businessType.start}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Digital priorities */}
      <section
        id="priorities"
        aria-labelledby="priorities-heading"
        className="scroll-mt-24 bg-white py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="priorities-heading"
              eyebrow="Digital priorities"
              title={`Where ${businessType.name.toLowerCase()} businesses should focus first.`}
              description="Work through these in order. The right scope depends on how your business actually gets enquiries, so treat this as a starting point rather than a fixed package."
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {businessType.online.map((item, index) => (
              <Reveal as="li" key={item} delay={index * 60}>
                <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                  <span className="font-display text-sm font-bold tabular-nums text-brand-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-700">
                    {item}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* How Bishora can help */}
      <section
        aria-labelledby="type-help-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="type-help-heading"
              eyebrow="How Bishora can help"
              title={`Support for ${businessType.name.toLowerCase()} businesses.`}
              description="These are the existing services that usually matter for this specific business type. We will only recommend what your business actually needs."
            />
          </Reveal>

          <div className="mt-12">
            <RelevantServices
              serviceSlugs={businessType.serviceSlugs}
              context="The scope, timeline and starting price for each service are set out on its own page and on the pricing page."
            />
          </div>
        </Container>
      </section>

      {/* Related business types and groups */}
      {relatedTypes.length > 0 || siblingGroups.length > 0 ? (
        <section
          aria-labelledby="related-types-heading"
          className="bg-white py-16 sm:py-20"
        >
          <Container>
            {relatedTypes.length > 0 ? (
              <>
                <Reveal>
                  <SectionHeading
                    id="related-types-heading"
                    eyebrow={subcategory.name}
                    title="Related business types."
                    description="These types sit in the same group, but their online priorities are not identical."
                  />
                </Reveal>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedTypes.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={businessTypePath(
                          industry.slug,
                          subcategory.slug,
                          item.slug,
                        )}
                        className="group flex h-full items-start justify-between gap-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
                      >
                        <span>
                          <span className="block font-display text-[1.0625rem] font-bold text-ink-950">
                            {item.name}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-ink-500">
                            {item.description}
                          </span>
                        </span>
                        <ArrowRight
                          className="mt-1 size-4 shrink-0 text-ink-300 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-brand-600"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {siblingGroups.length > 0 ? (
              <div className={relatedTypes.length > 0 ? 'mt-14' : undefined}>
                <Reveal>
                  <SectionHeading
                    eyebrow={industry.name}
                    title={`Other groups in ${industry.name}.`}
                    description="If your business sits closer to another group, open it to see the exact types covered."
                  />
                </Reveal>

                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {siblingGroups.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={subcategoryPath(industry.slug, item.slug)}
                        className="group flex items-center justify-between gap-4 rounded-xl border border-ink-100 bg-white p-4 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-lift"
                      >
                        <span>
                          <span className="block font-display text-[1.0625rem] font-bold text-ink-950">
                            {item.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-ink-500">
                            {item.businessTypes.length} business types
                          </span>
                        </span>
                        <ArrowRight
                          className="size-5 shrink-0 text-ink-300 transition-[color,transform] duration-200 group-hover:translate-x-0.5 group-hover:text-brand-600"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </Container>
        </section>
      ) : null}

      <IndustryNextSteps
        title={`Next steps for your ${businessType.name.toLowerCase()} business.`}
      />

      <CTASection
        eyebrow={industry.name}
        title={`Tell us about your ${businessType.name.toLowerCase()} business.`}
        description="We will look at what you already have, identify the most useful next step and explain it plainly."
      />
    </>
  );
}
