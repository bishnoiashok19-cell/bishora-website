import { ArrowDown, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/layout/PageHero';
import { IndustryCard } from '../components/industries/IndustryCard';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  industries,
  totalBusinessTypes,
  totalSubcategories,
} from '../data/industries';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';

const steps = [
  {
    title: 'Find your category',
    description:
      'Start with the broad industry that best describes what your business does.',
  },
  {
    title: 'Open the business group',
    description:
      'Each category is split into groups so you can go straight to your type of work.',
  },
  {
    title: 'See what matters',
    description:
      'Review the business types covered and the digital priorities that usually apply.',
  },
];

export default function Industries() {
  useSeo({
    title: 'Choose Your Business — Industry Directory | Bishora',
    description:
      'Explore 30 business categories and the groups inside them. Find your type of business and see the digital services that usually matter, from local visibility and websites to advertising and customer communication.',
    path: '/industries',
    keywords: [
      'choose your business',
      'business category directory',
      'industry directory',
      'digital marketing by business type',
      'local business categories',
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="Choose your business"
        title="Choose Your Business"
        description="Explore business categories and find the area that best matches your business."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business' },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            href="#categories"
            size="lg"
            iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
          >
            Browse all categories
          </Button>
          <Button to="/services" variant="outlineLight" size="lg">
            See our services
          </Button>
        </div>
      </PageHero>

      {/* How the directory works */}
      <section
        aria-labelledby="directory-heading"
        className="bg-white py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="directory-heading"
                  eyebrow="How it works"
                  title="Start with your business, not a service list."
                  description="Services describe what Bishora provides. This directory starts from what you do instead, so the advice you read is relevant to your business from the first page."
                />
              </Reveal>

              <ol className="mt-8 grid gap-4 sm:grid-cols-3">
                {steps.map((step, index) => (
                  <Reveal as="li" key={step.title} delay={index * 60}>
                    <div className="h-full rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                      <span className="font-display text-sm font-bold tabular-nums text-brand-600">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-2 font-display text-[1.0625rem] font-bold text-ink-950">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/70 p-6 shadow-soft sm:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-700">
                    In this directory
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-5">
                    <div>
                      <dt className="text-sm text-ink-500">
                        Business categories
                      </dt>
                      <dd className="mt-1 font-display text-3xl font-bold text-ink-950">
                        {industries.length}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500">Business groups</dt>
                      <dd className="mt-1 font-display text-3xl font-bold text-ink-950">
                        {totalSubcategories}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-sm text-ink-500">Business types</dt>
                      <dd className="mt-1 font-display text-3xl font-bold text-ink-950">
                        {totalBusinessTypes}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-5 text-sm leading-relaxed text-ink-600">
                    Every category lists the groups and business types it
                    covers. If your exact type is not listed, choose the nearest
                    group and tell us what you do.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* All categories */}
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="scroll-mt-24 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="categories-heading"
              eyebrow="All business categories"
              title="Thirty categories, one clear path."
              description="Choose the category that matches your business to see its groups, business types and the digital priorities that usually apply."
              align="center"
            />
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Reveal as="li" key={industry.slug} delay={index * 20}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Not sure where to start */}
      <section
        aria-labelledby="unsure-heading"
        className="bg-white py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-7 sm:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2
                    id="unsure-heading"
                    className="font-display text-2xl font-bold text-ink-950"
                  >
                    Not sure which category fits?
                  </h2>
                  <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-700">
                    Tell us what your business actually does and we will point
                    you to the right group, then explain what is worth doing
                    first — without adding services you do not need.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                  <Button
                    to="/contact"
                    iconRight={
                      <ArrowRight className="size-5" aria-hidden="true" />
                    }
                  >
                    Talk to us
                  </Button>
                  <Button to="/pricing" variant="outline">
                    See pricing
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Need a hand choosing?"
        title="Tell us what your business does."
        description="We will help you find the right category and explain which services are actually worth considering first."
      />
    </>
  );
}
