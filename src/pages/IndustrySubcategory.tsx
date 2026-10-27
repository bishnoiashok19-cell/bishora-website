import { ArrowDown, ArrowRight, Check, MapPin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/layout/PageHero';
import NotFound from './NotFound';
import { BusinessTypeCard } from '../components/industries/BusinessTypeCard';
import { IndustryNextSteps } from '../components/industries/IndustryNextSteps';
import { RelevantServices } from '../components/industries/RelevantServices';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  businessTypeCount,
  industryBySlug,
  industryPath,
  subcategoryCount,
  subcategoryPath,
} from '../data/industries';
import type {
  Industry,
  IndustrySubcategory,
} from '../data/industries/types';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';

export type IndustrySubcategoryPageProps = {
  industry: Industry;
  subcategory: IndustrySubcategory;
};

/** "A, B and C" — used to name the business types covered by a group. */
function formatList(items: string[]): string {
  if (items.length <= 1) return items[0] ?? '';
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/** Route entry: resolves both slugs and falls back to the 404 page. */
export default function IndustrySubcategoryRoute() {
  const { industrySlug = '', subcategorySlug = '' } = useParams();
  const industry = industryBySlug(industrySlug);
  const subcategory = industry?.subcategories.find(
    (item) => item.slug === subcategorySlug,
  );

  if (!industry || !subcategory) return <NotFound />;

  return (
    <IndustrySubcategoryPage
      industry={industry}
      subcategory={subcategory}
    />
  );
}

function IndustrySubcategoryPage({
  industry,
  subcategory,
}: IndustrySubcategoryPageProps) {
  const path = subcategoryPath(industry.slug, subcategory.slug);
  const siblings = industry.subcategories.filter(
    (item) => item.slug !== subcategory.slug,
  );
  const groupIndex =
    industry.subcategories.findIndex(
      (item) => item.slug === subcategory.slug,
    ) + 1;

  useSeo({
    title: `${subcategory.name} — ${industry.name} Businesses | Bishora`,
    description: `${subcategory.description} Explore the business types covered and the digital support that usually matters.`,
    path,
    keywords: [
      `${subcategory.name.toLowerCase()} marketing`,
      `${subcategory.name.toLowerCase()} website`,
      ...subcategory.businessTypes.map((type) => type.name.toLowerCase()),
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
      { name: industry.name, path: industryPath(industry.slug) },
      { name: subcategory.name, path },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow={`${industry.name} — Business group ${String(groupIndex).padStart(2, '0')}`}
        title={subcategory.name}
        description={subcategory.description}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business', to: '/industries' },
          { label: industry.name, to: industryPath(industry.slug) },
          { label: subcategory.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href="#business-types"
            size="lg"
            iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
          >
            See business types
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg">
            Talk to us
          </Button>
        </div>
      </PageHero>

      {/* What this group includes */}
      <section
        aria-labelledby="group-overview-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="group-overview-heading"
                  eyebrow={industry.name}
                  title={`What ${subcategory.name} includes.`}
                />

                <p className="mt-6 text-[1.0625rem] leading-relaxed text-ink-600">
                  This group covers{' '}
                  {formatList(
                    subcategory.businessTypes.map((type) => type.name),
                  )}{' '}
                  — {subcategory.businessTypes.length} business types in total.
                  It sits inside the{' '}
                  <Link
                    to={industryPath(industry.slug)}
                    className="font-medium text-brand-700 underline decoration-brand-200 underline-offset-4 hover:text-brand-800"
                  >
                    {industry.name}
                  </Link>{' '}
                  category, alongside {subcategoryCount(industry) - 1} other
                  business groups.
                </p>

                <div className="mt-7 rounded-2xl border border-brand-100 bg-brand-50/60 p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Digital focus
                  </p>
                  <p className="mt-2 text-[0.975rem] leading-relaxed text-ink-700">
                    {subcategory.digitalFocus}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    Group overview
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-ink-50 p-4">
                      <dt className="text-xs text-ink-500">Business types</dt>
                      <dd className="mt-1 font-display text-2xl font-bold text-ink-950">
                        {subcategory.businessTypes.length}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-ink-50 p-4">
                      <dt className="text-xs text-ink-500">
                        Groups in category
                      </dt>
                      <dd className="mt-1 font-display text-2xl font-bold text-ink-950">
                        {subcategoryCount(industry)}
                      </dd>
                    </div>
                  </dl>

                  <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
                    Included in this group
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {subcategory.businessTypes.map((type) => (
                      <li
                        key={type.slug}
                        className="flex items-start gap-2.5 text-sm text-ink-700"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand-600"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        {type.name}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-ink-500">
                    <MapPin
                      className="mt-0.5 size-3.5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                    Part of {industry.name} — {businessTypeCount(industry)}{' '}
                    business types across the category.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Business types */}
      <section
        id="business-types"
        aria-labelledby="business-types-heading"
        className="scroll-mt-24 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="business-types-heading"
              eyebrow="Business types"
              title={`Business types in ${subcategory.name}.`}
              description="These are the specific business types covered by this group. Each card links to the existing Bishora services that usually apply."
            />
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subcategory.businessTypes.map((type, index) => (
              <Reveal as="li" key={type.slug} delay={index * 40}>
                <BusinessTypeCard
                  businessType={type}
                  serviceSlugs={subcategory.serviceSlugs}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* What to get right */}
      <section
        aria-labelledby="priorities-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="priorities-heading"
                  eyebrow="Digital priorities"
                  title={`What to get right online for ${subcategory.name.toLowerCase()}.`}
                  description={subcategory.digitalFocus}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="space-y-3">
                  {industry.considerations.map((consideration) => (
                    <li
                      key={consideration}
                      className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 text-[0.95rem] leading-relaxed text-ink-700"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-600"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      {consideration}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* How Bishora can help */}
      <section
        aria-labelledby="sub-help-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="sub-help-heading"
              eyebrow="How Bishora can help"
              title={`Support for ${subcategory.name.toLowerCase()} businesses.`}
              description="These existing services usually matter most for this group. We will only recommend what the business actually needs."
            />
          </Reveal>

          <div className="mt-12">
            <RelevantServices
              serviceSlugs={subcategory.serviceSlugs}
              context="The scope, timeline and starting price for each service are set out on its own page and on the pricing page."
            />
          </div>
        </Container>
      </section>

      {/* Other groups */}
      {siblings.length > 0 ? (
        <section
          aria-labelledby="siblings-heading"
          className="bg-white py-16 sm:py-20"
        >
          <Container>
            <Reveal>
              <SectionHeading
                id="siblings-heading"
                eyebrow={industry.name}
                title={`Other groups in ${industry.name}.`}
                description="If your business sits closer to one of these groups, open it to see the exact types covered."
              />
            </Reveal>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {siblings.map((item) => (
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
          </Container>
        </section>
      ) : null}

      <IndustryNextSteps
        title={`Next steps for your ${subcategory.name.toLowerCase()} business.`}
      />

      <CTASection
        eyebrow={industry.name}
        title={`Tell us about your ${subcategory.name.toLowerCase()} business.`}
        description="We will look at what you already have, identify the most useful next step and explain it plainly."
      />
    </>
  );
}
