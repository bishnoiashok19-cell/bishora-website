import { ArrowDown, ArrowRight, MapPin, MessageCircle, Search } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/layout/PageHero';
import NotFound from './NotFound';
import { IndustryNextSteps } from '../components/industries/IndustryNextSteps';
import { RelevantServices } from '../components/industries/RelevantServices';
import { SubcategoryCard } from '../components/industries/SubcategoryCard';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { IconTile } from '../components/ui/IconTile';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  businessTypeCount,
  industryBySlug,
  industryPath,
  subcategoryPath,
} from '../data/industries';
import type { Industry } from '../data/industries/types';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';

export type IndustryCategoryPageProps = {
  industry: Industry;
};

const considerationIcons = [Search, MapPin, MessageCircle];

/** Route entry: resolves the category slug and falls back to the 404 page. */
export default function IndustryCategoryRoute() {
  const { industrySlug = '' } = useParams();
  const industry = industryBySlug(industrySlug);

  if (!industry) return <NotFound />;

  return <IndustryCategory industry={industry} />;
}

function IndustryCategory({
  industry,
}: IndustryCategoryPageProps) {
  const path = industryPath(industry.slug);
  const groups = industry.subcategories;
  const types = businessTypeCount(industry);
  const firstType = groups[0]?.businessTypes[0]?.name;
  const lastType =
    groups[groups.length - 1]?.businessTypes.slice(-1)[0]?.name;
  const related = industry.relatedSlugs
    .map((slug) => industryBySlug(slug))
    .filter((item): item is Industry => Boolean(item));

  useSeo({
    title: `${industry.name} Businesses — Digital Marketing & Web Services | Bishora`,
    description: industry.intro,
    path,
    keywords: [
      `${industry.name.toLowerCase()} digital marketing`,
      `${industry.name.toLowerCase()} website`,
      `${industry.name.toLowerCase()} seo`,
      ...groups.map((group) => group.name.toLowerCase()),
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
      { name: industry.name, path },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow={`Category ${String(industry.number).padStart(2, '0')} — Choose your business`}
        title={industry.name}
        description={industry.intro}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business', to: '/industries' },
          { label: industry.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href="#groups"
            size="lg"
            iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
          >
            Explore business groups
          </Button>
          <Button to="/contact" variant="outlineLight" size="lg">
            Talk to us
          </Button>
        </div>
      </PageHero>

      {/* Overview */}
      <section
        aria-labelledby="overview-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="overview-heading"
                  eyebrow="Category overview"
                  title={`What ${industry.name} covers.`}
                />

                <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-ink-600">
                  {industry.overview.map((paragraph) => (
                    <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                  ))}
                </div>

                <p className="mt-6 rounded-xl border border-ink-100 bg-ink-50/70 p-4 text-sm leading-relaxed text-ink-600">
                  Across {groups.length} business groups, this category covers{' '}
                  {types} business types
                  {firstType && lastType
                    ? ` — from ${firstType} and similar businesses through to ${lastType}.`
                    : '.'}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    At a glance
                  </p>

                  <dl className="mt-4 grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-ink-50 p-4">
                      <dt className="text-xs text-ink-500">Business groups</dt>
                      <dd className="mt-1 font-display text-2xl font-bold text-ink-950">
                        {groups.length}
                      </dd>
                    </div>
                    <div className="rounded-xl bg-ink-50 p-4">
                      <dt className="text-xs text-ink-500">Business types</dt>
                      <dd className="mt-1 font-display text-2xl font-bold text-ink-950">
                        {types}
                      </dd>
                    </div>
                  </dl>

                  <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
                    Business groups
                  </h3>

                  <ul className="mt-3 space-y-1">
                    {groups.map((group) => (
                      <li key={group.slug}>
                        <Link
                          to={subcategoryPath(industry.slug, group.slug)}
                          className="flex items-center justify-between gap-3 rounded-lg px-2 py-1.5 text-sm text-ink-600 transition-colors hover:bg-ink-50 hover:text-brand-800"
                        >
                          <span>{group.name}</span>
                          <span className="text-xs tabular-nums text-ink-400">
                            {group.businessTypes.length}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Business groups */}
      <section
        id="groups"
        aria-labelledby="groups-heading"
        className="scroll-mt-24 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="groups-heading"
              eyebrow="Business groups"
              title={`Business groups in ${industry.name}.`}
              description="Each group covers a set of related business types. Open one to see exactly what is included and what usually matters online."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {groups.map((group, index) => (
              <Reveal as="li" key={group.slug} delay={index * 40}>
                <SubcategoryCard
                  industrySlug={industry.slug}
                  subcategory={group}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Digital considerations */}
      <section
        aria-labelledby="considerations-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="considerations-heading"
              eyebrow="Digital priorities"
              title={`What usually matters online for ${industry.name} businesses.`}
              description="These are practical starting points, not a fixed package. The right mix depends on how your business actually gets enquiries."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.considerations.map((consideration, index) => {
              const Icon =
                considerationIcons[index % considerationIcons.length];

              return (
                <Reveal as="li" key={consideration} delay={index * 60}>
                  <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                    <IconTile tone="brand" size="sm">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <p className="mt-4 text-[0.975rem] leading-relaxed text-ink-700">
                      {consideration}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* How Bishora can help */}
      <section
        aria-labelledby="help-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="help-heading"
              eyebrow="How Bishora can help"
              title={`Support that fits ${industry.name} businesses.`}
              description="These are the existing Bishora services that usually make the biggest difference here. Nothing is added to the scope unless it serves a purpose."
            />
          </Reveal>

          <div className="mt-12">
            <RelevantServices
              serviceSlugs={industry.serviceSlugs}
              context={`Not every ${industry.name.toLowerCase()} business needs every service. We will recommend the smallest set of work that addresses the actual gap.`}
            />
          </div>
        </Container>
      </section>

      <IndustryNextSteps />

      {/* Related categories */}
      {related.length > 0 ? (
        <section
          aria-labelledby="related-heading"
          className="bg-ink-50 py-16 sm:py-20"
        >
          <Container>
            <Reveal>
              <SectionHeading
                id="related-heading"
                eyebrow="Related categories"
                title="Businesses that often face similar decisions."
              />
            </Reveal>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={industryPath(item.slug)}
                    className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-display text-sm font-bold tabular-nums text-ink-300">
                        {String(item.number).padStart(2, '0')}
                      </span>
                      <span className="font-display text-[1.0625rem] font-bold text-ink-950">
                        {item.name}
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

      <CTASection
        eyebrow={`${industry.name} support`}
        title="Ready to talk about your business?"
        description="We will review your current presence, point out the biggest gap and tell you what is worth doing first — with no obligation to continue."
      />
    </>
  );
}
