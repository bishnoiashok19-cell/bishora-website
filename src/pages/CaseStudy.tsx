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
        eyebrow={study.heroEyebrow}
        title={study.heroTitle}
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

        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-5 text-sm">
          {study.heroMeta.map((item) => (
            <div key={item.label} className="flex items-baseline gap-2">
              <dt className="text-[0.65rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                {item.label}
              </dt>
              <dd className="font-medium text-ink-100">{item.value}</dd>
            </div>
          ))}
        </dl>
      </PageHero>

      {/* Hero visual — supporting evidence, deliberately not full width. */}
      <section
        aria-label="Platform preview"
        className="relative overflow-hidden bg-ink-950 pb-14 sm:pb-16 lg:pb-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[46rem] -translate-x-1/2 rounded-full bg-brand-600/15 blur-[120px]"
        />

        <Container className="relative">
          {/* Sized as supporting evidence: ~72% desktop, ~88% tablet, full width on mobile. */}
          <Reveal className="mx-auto w-full sm:max-w-[88%] xl:max-w-[72%]">
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

              <div className="mt-6 max-w-2xl space-y-3 text-[1rem] leading-[1.75] text-ink-600">
                {study.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={80}>
                <dl className="overflow-hidden rounded-2xl border border-ink-100 bg-ink-50/60">
                  {study.aboutFacts.map((fact, index) => (
                    <div
                      key={fact.label}
                      className={cn(
                        'px-5 py-4 sm:px-6',
                        index > 0 && 'border-t border-ink-100',
                      )}
                    >
                      <dt className="text-[0.65rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                        {fact.label}
                      </dt>
                      <dd className="mt-1 text-[0.95rem] font-semibold text-ink-900">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
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
                  <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <IconTile tone="brand" size="sm">
                        <Icon aria-hidden="true" />
                      </IconTile>
                      <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-ink-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
                      {challenge.title}
                    </h3>

                    {challenge.description ? (
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">
                        {challenge.description}
                      </p>
                    ) : null}
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

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {study.features.map((feature, index) => {
              const Icon = feature.icon;
              // 3 cards on the first row, 2 wider cards on the second.
              const span = index < 3 ? 'lg:col-span-2' : 'lg:col-span-3';

              return (
                <Reveal
                  as="li"
                  key={feature.title}
                  className={span}
                  delay={Math.min(index, 4) * 50}
                >
                  <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:p-6">
                    <div className="flex items-center justify-between gap-3">
                      <IconTile tone="brand" size="sm">
                        <Icon aria-hidden="true" />
                      </IconTile>
                      <span className="text-[0.7rem] font-semibold tracking-[0.18em] text-ink-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

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
        className="relative overflow-hidden border-y border-white/5 bg-ink-950 py-16 sm:py-20"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-brand-600/18 blur-[120px]"
        />

        <Container className="relative">
          <Reveal>
            <SectionHeading
              id="flow-heading"
              eyebrow="The visitor journey"
              title="How It Works"
              align="center"
              theme="dark"
            />
          </Reveal>

          <ol className="relative mx-auto mt-12 max-w-xl space-y-6 lg:grid lg:max-w-none lg:grid-cols-5 lg:gap-4 lg:space-y-0">
            <span
              aria-hidden="true"
              className="absolute top-4 bottom-4 left-7 w-px bg-white/25 lg:hidden"
            />
            <span
              aria-hidden="true"
              className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent lg:block"
            />

            {study.flow.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.title}
                  className="relative flex items-start gap-4 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                >
                  <span
                    aria-hidden="true"
                    className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-brand-300 ring-1 ring-white/12 shadow-lift"
                  >
                    <Icon className="size-6" />
                  </span>

                  <div className="lg:mt-5">
                    <span className="text-[0.6rem] font-semibold tracking-[0.18em] text-ink-500 uppercase">
                      Step {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="mt-1 font-display text-[0.95rem] leading-snug font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                </li>
              );
            })}
          </ol>

          <p className="mx-auto mt-10 max-w-2xl text-center text-[0.8rem] leading-relaxed text-ink-400">
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
              description="Platform के main user-facing screens को simple और easy-to-use experience के लिए design किया गया।"
            />
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
            {study.visuals.map((visual, index) => (
              <Reveal key={visual.id} delay={Math.min(index, 3) * 60}>
                <CaseStudyScreenshot visual={visual} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Design approach */}
      <section
        aria-labelledby="discovery-heading"
        className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="discovery-heading"
                  eyebrow="Design approach"
                  title={study.discovery.title}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <p className="max-w-2xl text-[0.98rem] leading-[1.75] text-ink-600">
                  {study.discovery.description}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                  {study.discovery.points.map((point) => {
                    const Icon = point.icon;

                    return (
                      <li
                        key={point.title}
                        className="flex items-center gap-2.5 rounded-xl border border-ink-100 bg-white px-3.5 py-3 text-[0.85rem] font-semibold text-ink-900 shadow-soft"
                      >
                        <Icon
                          className="size-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        <span>{point.title}</span>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology */}
      <section aria-labelledby="tech-heading" className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading id="tech-heading" title="Technology" />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
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

                <div className="mt-5 max-w-2xl space-y-2 text-[0.9rem] leading-relaxed text-ink-600">
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
      <section
        aria-labelledby="status-heading"
        className="border-y border-ink-100 bg-ink-50 py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading id="status-heading" title="Current Status" />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={80}>
                <div className="rounded-2xl border border-accent-200 bg-white p-6 shadow-soft sm:p-8">
                  <StatusBadge label={study.statusLabel} tone="light" />

                  <div className="mt-5 space-y-2 text-[0.95rem] leading-relaxed text-ink-700">
                    {study.statusNote.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>

                  <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {study.statusPoints.map((point) => (
                      <li
                        key={point.label}
                        className={cn(
                          'flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-[0.85rem] font-medium',
                          point.done
                            ? 'bg-brand-50 text-ink-800 ring-1 ring-brand-100'
                            : 'bg-accent-100/50 text-ink-700 ring-1 ring-accent-200',
                        )}
                      >
                        {point.done ? (
                          <Check
                            className="size-4 shrink-0 text-brand-700"
                            aria-hidden="true"
                          />
                        ) : (
                          <Clock
                            className="size-4 shrink-0 text-accent-700"
                            aria-hidden="true"
                          />
                        )}
                        <span>{point.label}</span>
                      </li>
                    ))}
                  </ul>
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
          className="border-b border-ink-100 bg-white py-16 sm:py-20"
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
          : 'bg-accent-100 text-accent-700 ring-1 ring-accent-200',
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
