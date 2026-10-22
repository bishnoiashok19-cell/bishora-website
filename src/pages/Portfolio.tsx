import { ArrowRight, Clock, FolderOpen, Lock } from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { IconTile } from '../components/ui/IconTile';
import { ProjectThumbnail } from '../components/ProjectThumbnail';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { caseStudyStructure, projectCategories } from '../data/projects';
import { useSeo, buildBreadcrumbJsonLd } from '../lib/seo';

const thumbnailVariant = {
  Website: 'website',
  SEO: 'seo',
  'Local SEO': 'local',
  'Paid Advertising': 'ads',
} as const;

export default function Portfolio() {
  useSeo({
    title: 'Portfolio & Case Studies | Bishora',
    description:
      'Project categories and case study work from Bishora — website projects, SEO projects, local SEO projects and paid advertising projects for local businesses.',
    path: '/portfolio',
    keywords: [
      'digital marketing case studies',
      'local SEO case study',
      'Google Ads case study',
      'small business website examples',
      'Bishora portfolio',
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Portfolio', path: '/portfolio' },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="Portfolio & Case Studies"
        title="Project work, published as it is completed."
        description="This page is set up and ready for real client projects. Until each piece of work is live and cleared for publication, the cards below describe the categories we deliver in — rather than showing results that have not been published yet."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
      >
        <Button
          to="/contact"
          size="lg"
          iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
        >
          Start a project with us
        </Button>
      </PageHero>

      {/* Project categories */}
      <section
        aria-labelledby="projects-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="projects-heading"
              eyebrow="Project categories"
              title="Four areas of work. Real projects to be added."
              description="Each card below is a live placeholder. When a project is finished and the client agrees to it being shown, its card is replaced with the full case study — same layout, same fields."
              align="center"
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2">
            {projectCategories.map((project, index) => {
              const Icon = project.icon;

              return (
                <Reveal as="li" key={project.id} delay={index * 70}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                    <ProjectThumbnail
                      variant={thumbnailVariant[project.category]}
                    />

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <span className="inline-flex items-center gap-2 rounded-full bg-ink-950 px-3 py-1.5 text-xs font-semibold text-white">
                          <Icon className="size-3.5" aria-hidden="true" />
                          {project.category}
                        </span>

                        <span className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink-300 bg-ink-50 px-3 py-1.5 text-xs font-semibold text-ink-600">
                          <Clock className="size-3.5" aria-hidden="true" />
                          Project details coming soon
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-xl font-bold text-ink-950">
                        {project.title}
                      </h3>

                      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
                        {project.description}
                      </p>

                      <div className="mt-5 rounded-xl bg-ink-50/70 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          What this work covers
                        </p>
                        <ul className="mt-3 space-y-2">
                          {project.scope.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-sm text-ink-700"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-brand-500"
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink-500">
                        <FolderOpen className="size-4" aria-hidden="true" />
                        Awaiting the first published project
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Case study format */}
      <section
        aria-labelledby="format-heading"
        className="bg-ink-50 py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="format-heading"
                  eyebrow="How we present work"
                  title="The structure every case study will follow."
                  description="Consistency makes projects easy to compare and easy to trust. This is the template each published project will use."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ol className="grid gap-4 sm:grid-cols-2">
                  {caseStudyStructure.map((item, index) => (
                    <li
                      key={item.label}
                      className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-flex size-8 items-center justify-center rounded-lg bg-ink-950 font-display text-xs font-bold text-white"
                        >
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                          {item.label}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-ink-600">
                        {item.value}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Transparency note */}
      <section
        aria-labelledby="transparency-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-ink-100 bg-ink-50/60 p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <IconTile tone="brand">
                  <Lock aria-hidden="true" />
                </IconTile>
                <div>
                  <h2
                    id="transparency-heading"
                    className="font-display text-xl font-bold text-ink-950"
                  >
                    Why the project details are not published yet
                  </h2>
                  <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-ink-600">
                    <p>
                      Bishora publishes case studies only after the work is
                      live, the outcome is measurable, and the client has
                      approved exactly what appears. Nothing is written up
                      from assumptions, and no numbers are ever estimated.
                    </p>
                    <p>
                      In the meantime, this page is deliberately honest about
                      what is and is not available. The card structure is built
                      so real projects can be added without changing the
                      layout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Your project could be the first"
        title="Let us build something worth publishing."
        description="Tell us about your business and we will show you where the quickest wins are — whether or not you decide to work with us."
      />
    </>
  );
}
