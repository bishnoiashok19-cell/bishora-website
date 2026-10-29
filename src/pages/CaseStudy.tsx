import { ArrowRight, Check, Clock } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { PageHero } from '../components/layout/PageHero';
import { CaseStudyScreenshot } from '../components/portfolio/CaseStudyScreenshot';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { IconTile } from '../components/ui/IconTile';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { caseStudyBySlug, caseStudyPath } from '../data/caseStudies';
import type { CaseStudy } from '../data/caseStudies';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';
import { cn } from '../lib/utils';
import NotFound from './NotFound';

/**
 * Route entry: resolves a case-study slug and falls back to the 404 page.
 * The same page renders every study in `src/data/caseStudies.ts`.
 */
export default function CaseStudyRoute() {
  const { slug = '' } = useParams();
  const study = caseStudyBySlug(slug);

  if (!study) return <NotFound />;

  return <CaseStudyPage study={study} />;
}

function CaseStudyPage({ study }: { study: CaseStudy }) {
  const path = caseStudyPath(study.slug);

  useSeo({
    title: study.seo.title,
    description: study.seo.description,
    path,
    keywords: study.seo.keywords,
    type: 'article',
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/portfolio' },
      { name: study.name, path },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="Case Study"
        title={study.title}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Portfolio', to: '/portfolio' },
          { label: study.name },
        ]}
      >
        <p className="text-lg font-semibold text-brand-200 sm:text-xl">
          {study.subtitle}
        </p>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-200 sm:text-lg">
          {study.heroDescription}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <StatusBadge label={study.statusLabel} tone="dark" />
          <span className="inline-flex items-center gap-2 text-sm text-ink-400">
            <Clock className="size-4" aria-hidden="true" />
            2 min read
          </span>
        </div>
      </PageHero>

      {/* Hero visual */}
      <section aria-label="Platform preview" className="bg-ink-950 pb-16 sm:pb-20 lg:pb-24">
        <Container>
          <Reveal className="mx-auto max-w-5xl">
            <CaseStudyScreenshot
              visual={study.heroVisual}
              priority
              showCaption={false}
            />
          </Reveal>
        </Container>
      </section>

      {/* About */}
      <section aria-labelledby="about-heading" className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <SectionHeading id="about-heading" title="About the Project" />

              <div className="mt-6 space-y-4 text-[0.98rem] leading-relaxed text-ink-600">
                {study.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <dl className="grid grid-cols-2 gap-3">
                {study.meta.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-ink-100 bg-ink-50/70 p-4"
                  >
                    <dt className="text-[0.65rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1.5 text-sm font-semibold text-ink-900">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section
        aria-labelledby="challenge-heading"
        className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="challenge-heading"
              eyebrow="What had to be solved"
              title="The Challenge"
              align="center"
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {study.challenges.map((challenge, index) => {
              const Icon = challenge.icon;

              return (
                <Reveal as="li" key={challenge.title} delay={index * 60}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                    <IconTile tone="brand">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <p className="mt-4 text-[0.95rem] leading-relaxed font-medium text-ink-900">
                      {challenge.title}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* What we built */}
      <section aria-labelledby="built-heading" className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              id="built-heading"
              eyebrow="Scope of work"
              title="What We Built"
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {study.features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <Reveal as="li" key={feature.title} delay={Math.min(index, 5) * 50}>
                  <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                    <IconTile tone="brand" size="sm">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <h3 className="mt-4 font-display text-[1.0625rem] font-bold text-ink-950">
                      {feature.title}
                    </h3>
                    {feature.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {feature.description}
                      </p>
                    ) : null}
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* How it works */}
      <section
        aria-labelledby="flow-heading"
        className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="flow-heading"
              eyebrow="The visitor journey"
              title="How It Works"
              align="center"
            />
          </Reveal>

          <ol className="mx-auto mt-10 max-w-2xl">
            {study.flow.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === study.flow.length - 1;

              return (
                <li key={step.title} className="relative flex gap-4 pb-5 last:pb-0">
                  {!isLast ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-11 bottom-0 left-5 w-px bg-ink-200"
                    />
                  ) : null}

                  <span
                    aria-hidden="true"
                    className="relative z-10 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ink-950 text-white ring-4 ring-ink-50"
                  >
                    <Icon className="size-4" />
                  </span>

                  <div className="flex-1 rounded-xl border border-ink-100 bg-white px-4 py-3.5 shadow-soft">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-[0.65rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                        Step {index + 1}
                      </span>
                      <span aria-hidden="true" className="size-1 rounded-full bg-ink-300" />
                      <h3 className="font-display text-[1rem] font-bold text-ink-950">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mx-auto mt-6 max-w-2xl text-center text-[0.8rem] leading-relaxed text-ink-500">
            Subscription और payment connection अभी pending हैं — platform in
            development है.
          </p>
        </Container>
      </section>

      {/* Inside the website */}
      <section aria-labelledby="inside-heading" className="bg-white py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              id="inside-heading"
              eyebrow="Screens"
              title="Inside the Website"
              description="Platform के चार main screens — homepage और categories से product details और account access तक का flow."
            />
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
            {study.visuals.map((visual, index) => (
              <Reveal key={visual.id} delay={Math.min(index, 3) * 60}>
                <CaseStudyScreenshot visual={visual} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section
        aria-labelledby="tech-heading"
        className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading id="tech-heading" title="Technology" />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <ul className="flex flex-wrap gap-2.5">
                  {study.technology.map((item) => (
                    <li
                      key={item}
                      className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-sm font-semibold text-ink-800 shadow-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-brand-500"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3 text-[0.95rem] leading-relaxed text-ink-600">
                  {study.technologyNote.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Current status */}
      <section aria-labelledby="status-heading" className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading id="status-heading" title="Current Status" />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-accent-200 bg-accent-100/60 p-7 sm:p-9">
                  <StatusBadge label={study.statusLabel} tone="light" />

                  <div className="mt-5 space-y-3 text-[0.95rem] leading-relaxed text-ink-700">
                    {study.statusNote.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <p className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 text-[0.8rem] font-medium text-ink-600 ring-1 ring-accent-200">
                    <Check className="size-4 text-accent-700" aria-hidden="true" />
                    Payment, subscriptions और final deployment अभी pending हैं.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Results — only rendered once real, measured outcomes exist. */}
      {study.results?.length ? (
        <section
          aria-labelledby="results-heading"
          className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20"
        >
          <Container>
            <SectionHeading
              id="results-heading"
              eyebrow="Measured outcomes"
              title="Results"
              align="center"
            />
            <dl className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
              {study.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-soft"
                >
                  <dt className="text-[0.65rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                    {result.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-bold text-ink-950">
                    {result.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      ) : null}

      {/* Testimonial — only rendered when an approved quote is supplied. */}
      {study.testimonial ? (
        <section aria-labelledby="testimonial-heading" className="bg-white py-16 sm:py-20">
          <Container>
            <SectionHeading
              id="testimonial-heading"
              eyebrow="In the client's words"
              title="Testimonial"
              align="center"
            />
            <figure className="mx-auto mt-8 max-w-3xl rounded-2xl border border-ink-100 bg-ink-50/70 p-7 text-center sm:p-9">
              <blockquote className="text-[1.0625rem] leading-relaxed text-ink-800">
                “{study.testimonial.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink-600">
                {study.testimonial.name}
                <span className="font-normal text-ink-500">
                  {' '}
                  — {study.testimonial.role}
                </span>
              </figcaption>
            </figure>
          </Container>
        </section>
      ) : null}

      <CTASection
        eyebrow={study.cta.eyebrow}
        title={study.cta.title}
        description={study.cta.description}
      />

      {/* Back to the listing, so the trail is never a dead end. */}
      <section className="bg-white py-10">
        <Container>
          <Button
            to="/portfolio"
            variant="ghost"
            icon={<ArrowRight className="size-4 rotate-180" aria-hidden="true" />}
          >
            All portfolio work
          </Button>
        </Container>
      </section>
    </>
  );
}

function StatusBadge({
  label,
  tone,
}: {
  label: string;
  tone: 'light' | 'dark';
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase',
        tone === 'dark'
          ? 'bg-accent-500 text-ink-950'
          : 'bg-white text-accent-700 ring-1 ring-accent-200',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'size-1.5 rounded-full',
          tone === 'dark' ? 'bg-ink-950' : 'bg-accent-500',
        )}
      />
      {label}
    </span>
  );
}
