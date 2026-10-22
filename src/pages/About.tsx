import { ArrowRight, Ban, Building2, MapPinned, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/layout/PageHero';
import { CTASection } from '../components/CTASection';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { IconTile } from '../components/ui/IconTile';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { businessVerticals } from '../data/verticals';
import { values, notDoing } from '../data/values';
import { services } from '../data/services';
import { useSeo, buildBreadcrumbJsonLd } from '../lib/seo';

export default function About() {
  useSeo({
    title: 'About Bishora — Digital Marketing for Local Businesses',
    description:
      'Bishora helps small and local businesses build a stronger digital presence and generate more opportunities online through practical, measurable digital marketing.',
    path: '/about',
    keywords: [
      'about Bishora',
      'local business digital marketing agency',
      'small business SEO agency',
      'digital marketing for local businesses',
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="About Bishora"
        title="Marketing that is practical, measurable and honest."
        description="Bishora is a digital marketing agency focused on helping small and local businesses build a stronger digital presence and generate more opportunities online."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'About' }]}
      />

      {/* Our focus */}
      <section
        aria-labelledby="focus-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="focus-heading"
                  eyebrow="What we focus on"
                  title="We help local businesses become easier to find — and easier to choose."
                />

                <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-ink-600">
                  <p>
                    Most local businesses do not lose customers because the
                    product is bad. They lose them because the right customer
                    cannot find them, does not trust what they find, or has
                    no reason to make contact.
                  </p>
                  <p>
                    Bishora exists to close that gap. We work with businesses
                    that sell a real service to real people in a real
                    neighbourhood, and we focus our time where it makes a
                    practical difference: appearing in the right searches,
                    appearing in the right place, and giving people a clear
                    reason to get in touch.
                  </p>
                  <p>
                    That means getting a website right, a Google Business
                    Profile right, and a marketing plan that a small team can
                    actually sustain. It also means being honest when a channel
                    is not worth your money — which happens more often than
                    you would expect.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/70 p-7 shadow-soft sm:p-8">
                  <IconTile tone="brand" size="lg">
                    <Target aria-hidden="true" />
                  </IconTile>

                  <h3 className="mt-5 font-display text-xl font-bold text-ink-950">
                    What we are here to do
                  </h3>

                  <ul className="mt-5 space-y-4">
                    {[
                      'Make your business visible when people search for what you offer.',
                      'Turn that visibility into calls, enquiries and bookings.',
                      'Build a presence that looks consistent and professional everywhere.',
                      'Keep improving it with measurements, not guesswork.',
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-3 text-[0.95rem] text-ink-700">
                        <span
                          aria-hidden="true"
                          className="mt-[0.5rem] size-1.5 shrink-0 rounded-full bg-brand-500"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section
        aria-labelledby="values-heading"
        className="relative overflow-hidden bg-ink-950 py-20 sm:py-24 lg:py-28"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-0 size-[30rem] rounded-full bg-brand-700/22 blur-[130px]"
        />

        <Container className="relative">
          <Reveal>
            <SectionHeading
              id="values-heading"
              theme="dark"
              eyebrow="What we believe"
              title="Five principles that shape every engagement."
              description="These are not slogans on a wall. They are the rules we use to decide what to recommend, what to build and what to refuse."
              align="center"
            />
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <Reveal as="li" key={value.title} delay={index * 70}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07] sm:p-7">
                    <IconTile tone="dark">
                      <Icon aria-hidden="true" />
                    </IconTile>

                    <h3 className="mt-5 font-display text-lg font-bold text-white">
                      {value.title}
                    </h3>

                    <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-300">
                      {value.description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* Who we work with */}
      <section
        aria-labelledby="sectors-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="sectors-heading"
                  eyebrow="Who we work with"
                  title="Businesses that serve a local market."
                  description="These are the sectors we focus on. They describe the kind of business we work best with — they are not a client list."
                />

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    to="/services"
                    iconRight={
                      <ArrowRight className="size-5" aria-hidden="true" />
                    }
                  >
                    See our services
                  </Button>
                  <Button to="/contact" variant="outline">
                    Talk to us
                  </Button>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ul className="grid gap-4 sm:grid-cols-2">
                {businessVerticals.map((vertical, index) => {
                  const Icon = vertical.icon;

                  return (
                    <Reveal as="li" key={vertical.title} delay={index * 50}>
                      <div className="flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                        <IconTile tone="accent" size="sm">
                          <Icon aria-hidden="true" />
                        </IconTile>
                        <div>
                          <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                            {vertical.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                            {vertical.description}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  );
                })}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* What we don't do */}
      <section
        aria-labelledby="not-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="not-heading"
                  eyebrow="Setting expectations"
                  title="What we deliberately do not do."
                  description="Trust is built by being clear about the boundaries as well as the offer."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="space-y-3">
                  {notDoing.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-ink-100 text-ink-600"
                      >
                        <Ban className="size-3.5" strokeWidth={2.5} />
                      </span>
                      <span className="text-[0.95rem] text-ink-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Capability summary */}
      <section
        aria-labelledby="capabilities-heading"
        className="bg-white py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="capabilities-heading"
              eyebrow="Capabilities"
              title="Everything we do, in one place."
              description="We also support content creation — the writing, photography and design that feed your website, your ads and your social channels."
              align="center"
            />
          </Reveal>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal as="li" key={service.slug} delay={index * 50}>
                <Link
                  to={`/services#${service.slug}`}
                  className="group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <IconTile tone="brand" size="sm">
                    <service.icon aria-hidden="true" />
                  </IconTile>
                  <div>
                    <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                      {service.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-ink-600">
                      {service.summary}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-2 text-sm font-medium text-ink-700">
                <MapPinned className="size-4 text-brand-600" aria-hidden="true" />
                Local service area coverage
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-ink-50 px-4 py-2 text-sm font-medium text-ink-700">
                <Building2 className="size-4 text-brand-600" aria-hidden="true" />
                Small and local businesses
              </span>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
