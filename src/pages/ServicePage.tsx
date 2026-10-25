import { ArrowRight, Check, Sparkles } from 'lucide-react';
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
import type { Service } from '../data/services';
import {
  buildServiceFaqs,
  getServiceSubServices,
  serviceIndex,
  servicePath,
  serviceWhatBishoraProvides,
  serviceWhyItMatters,
  subServicePath,
} from '../data/servicePages';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, useSeo } from '../lib/seo';

export type ServicePageProps = {
  service: Service;
};

/**
 * Dedicated page for one main service.
 *
 * The page only ever renders its own service data and its own sub-service
 * cards. All detailed sub-service content lives on the dedicated child routes.
 */
export default function ServicePage({ service }: ServicePageProps) {
  const Icon = service.icon;
  const subServices = getServiceSubServices(service);
  const faqs = buildServiceFaqs(service);
  const index = serviceIndex(service.slug);
  const path = servicePath(service.slug);

  useSeo({
    title: `${service.name} Services | ${service.eyebrow} | Bishora`,
    description: service.summary,
    path,
    keywords: [
      `${service.name.toLowerCase()} services`,
      service.eyebrow.toLowerCase(),
      ...service.features.map((feature) => feature.title.toLowerCase()),
    ],
    jsonLd: [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path },
      ]),
      buildFaqJsonLd(faqs),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow={`Service ${String(index).padStart(2, '0')} — ${service.eyebrow}`}
        title={service.name}
        description={service.summary}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.name },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            to={`/contact?service=${encodeURIComponent(service.name)}`}
            size="lg"
            iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
          >
            Get a Free Consultation
          </Button>
          <Button to="/services" variant="outlineLight" size="lg">
            Back to all services
          </Button>
        </div>
      </PageHero>

      {/* Overview + this service's sub-service cards */}
      <section
        aria-labelledby="service-overview-heading"
        className="border-t border-ink-100 bg-white py-16 sm:py-20 lg:py-24"
      >
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
                      Service {String(index).padStart(2, '0')}
                    </p>
                    <p className="mt-0.5 text-sm text-ink-500">{service.eyebrow}</p>
                  </div>
                </div>

                <h2
                  id="service-overview-heading"
                  className="mt-6 text-2xl leading-[1.15] font-bold text-ink-950 sm:text-3xl"
                >
                  What {service.name} covers
                </h2>

                <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink-600">
                  {service.summary}
                </p>

                <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                  <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-950">
                    What is included
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {service.includes.map((item) => (
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
                    to={`/contact?service=${encodeURIComponent(service.name)}`}
                    iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
                  >
                    Get a Free Consultation
                  </Button>
                  <Button to="/contact" variant="outline">
                    Ask about {service.name}
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Only this service's sub-services are rendered here. */}
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {subServices.map((subService) => (
                    <li
                      key={subService.slug}
                      className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                    >
                      <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                        {subService.name}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[0.925rem] leading-relaxed text-ink-600">
                        {subService.description}
                      </p>
                      <Link
                        to={subServicePath(service.slug, subService.slug)}
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

      {/* What it is and why it matters */}
      <section
        aria-labelledby="service-explained-heading"
        className="border-t border-ink-100 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="service-explained-heading"
                  eyebrow="The basics"
                  title={`What ${service.name} is, and why it matters now.`}
                  description={`${service.eyebrow} is not a single task, and it is not finished once the first round of work is published. Here is what it means in practice.`}
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-6">
                <Reveal delay={80}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="font-display text-lg font-bold text-ink-950">
                      What {service.name} is
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      {service.summary}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={140}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="font-display text-lg font-bold text-ink-950">
                      Why it matters
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      {serviceWhyItMatters(service)}
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={200}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                    <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-950">
                      <Sparkles className="size-5 text-brand-600" aria-hidden="true" />
                      What Bishora provides
                    </h3>
                    <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-600">
                      {serviceWhatBishoraProvides(service)}
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProcessSection
        eyebrow={`Our ${service.name} approach`}
        title={`A measured ${service.name} process, not a monthly mystery.`}
        description={`We start with evidence, fix what is holding you back, then build on the areas that make the biggest difference to your ${service.name} results.`}
      />

      {/* FAQ */}
      <section
        aria-labelledby="service-faq-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  id="service-faq-heading"
                  eyebrow="FAQ"
                  title={`Common questions about ${service.name}.`}
                  description="Straight answers about scope, timelines and what is realistic."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={100}>
                <Accordion items={faqs} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        eyebrow={`Start with ${service.name}`}
        title={`Tell us what you want to improve with ${service.name}.`}
        description="A free consultation, an honest review of where you stand today and a clear recommendation on what to do first — with no obligation to continue."
      />
    </>
  );
}
