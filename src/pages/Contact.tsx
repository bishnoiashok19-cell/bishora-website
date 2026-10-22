import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldQuestion,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { ContactForm } from '../components/ContactForm';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  contactConfig,
  hasEmail,
  hasPhone,
  hasWhatsapp,
  whatsappLink,
} from '../config/site';
import { serviceNames } from '../data/services';
import { useSeo, buildBreadcrumbJsonLd } from '../lib/seo';

const nextSteps = [
  {
    title: 'You send the details',
    description:
      'A short description of your business and what you want to improve is enough to get started.',
  },
  {
    title: 'We look at what you already have',
    description:
      'Your website, Google Business Profile, search visibility and current advertising get reviewed.',
  },
  {
    title: 'We come back with a plan',
    description:
      'A clear view of the opportunities, what we would prioritise first and what it would realistically take.',
  },
];

export default function Contact() {
  const [searchParams] = useSearchParams();

  // Pre-select the service when the visitor arrives from a service CTA.
  const initialService = useMemo(() => {
    const requested = searchParams.get('service');
    if (!requested) return '';

    const exact = serviceNames.find((name) => name === requested);
    if (exact) return exact;

    const partial = serviceNames.find((name) =>
      name.toLowerCase().startsWith(requested.toLowerCase()),
    );

    return partial ?? '';
  }, [searchParams]);

  useSeo({
    title: 'Contact Bishora — Free Consultation for Local Businesses',
    description:
      'Get in touch with Bishora about SEO, paid advertising, websites, landing pages, social media, WhatsApp and email marketing for your local business.',
    path: '/contact',
    keywords: [
      'contact digital marketing agency',
      'free marketing consultation',
      'hire local SEO agency',
      'Google Ads quote small business',
    ],
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  });

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk about your business."
        description="Tell us what you sell, who your customers are and what you would like to improve. We will come back with honest, practical advice — whether or not you work with us."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section
        aria-labelledby="contact-heading"
        className="bg-white py-20 sm:py-24 lg:py-28"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Form */}
            <div className="lg:col-span-7">
              <Reveal>
                <h2 id="contact-heading" className="sr-only">
                  Contact form
                </h2>
                <ContactForm initialService={initialService} />
              </Reveal>
            </div>

            {/* Details */}
            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/70 p-7 shadow-soft sm:p-8">
                  <h2 className="font-display text-xl font-bold text-ink-950">
                    Talk to us directly
                  </h2>

                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
                    {contactConfig.responseNote}
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    {hasWhatsapp() ? (
                      <Button
                        href={whatsappLink()}
                        variant="whatsapp"
                        size="lg"
                        className="w-full"
                        icon={
                          <MessageCircle className="size-5" aria-hidden="true" />
                        }
                      >
                        Chat on WhatsApp
                      </Button>
                    ) : (
                      <span
                        title="Add the WhatsApp number in src/config/site.ts to enable this button"
                        className="inline-flex h-13 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-ink-300 bg-white px-6 text-[0.95rem] font-semibold text-ink-500"
                      >
                        <MessageCircle className="size-5" aria-hidden="true" />
                        WhatsApp number coming soon
                      </span>
                    )}

                    <Button to="/services" variant="outline" size="lg" className="w-full">
                      Browse our services
                    </Button>
                  </div>

                  <ul className="mt-8 space-y-4 border-t border-ink-200 pt-7">
                    <li className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-100"
                      >
                        <Phone className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Phone
                        </p>
                        {hasPhone() ? (
                          <a
                            href={`tel:${contactConfig.phone.replace(/[^\d+]/g, '')}`}
                            className="mt-1 block text-[0.95rem] font-medium text-ink-900 transition-colors hover:text-brand-700"
                          >
                            {contactConfig.phone}
                          </a>
                        ) : (
                          <p className="mt-1 text-[0.95rem] text-ink-500">
                            To be confirmed
                          </p>
                        )}
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-100"
                      >
                        <Mail className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Email
                        </p>
                        {hasEmail() ? (
                          <a
                            href={`mailto:${contactConfig.email}`}
                            className="mt-1 block break-all text-[0.95rem] font-medium text-ink-900 transition-colors hover:text-brand-700"
                          >
                            {contactConfig.email}
                          </a>
                        ) : (
                          <p className="mt-1 text-[0.95rem] text-ink-500">
                            To be confirmed
                          </p>
                        )}
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-100"
                      >
                        <MapPin className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Service area
                        </p>
                        <p className="mt-1 text-[0.95rem] text-ink-500">
                          {contactConfig.address || 'To be confirmed'}
                        </p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-100"
                      >
                        <Clock className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                          Working hours
                        </p>
                        <p className="mt-1 text-[0.95rem] text-ink-500">
                          {contactConfig.hours || 'To be confirmed'}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-7 shadow-soft">
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100"
                    >
                      <ShieldQuestion className="size-5" />
                    </span>
                    <h2 className="font-display text-lg font-bold text-ink-950">
                      What happens next
                    </h2>
                  </div>

                  <ol className="mt-5 space-y-5">
                    {nextSteps.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-ink-200 bg-ink-50 font-display text-xs font-bold text-ink-700"
                        >
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="font-display text-[0.9375rem] font-bold text-ink-950">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-ink-600">
                            {step.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Reassurance */}
      <section
        aria-labelledby="reassurance-heading"
        className="bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="reassurance-heading"
              eyebrow="Before you get in touch"
              title="No pressure, no jargon, no hard sell."
              description="A short conversation is enough for us to give you a useful view of your situation. Here is what we want you to know before you send a message."
              align="center"
            />
          </Reveal>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-3">
            {[
              {
                title: 'It is genuinely free',
                description:
                  'The consultation and the initial assessment cost you nothing and carry no obligation.',
              },
              {
                title: 'You keep everything',
                description:
                  'Your accounts, website, content and data stay yours — always, from day one.',
              },
              {
                title: 'Honest recommendations',
                description:
                  'If the best next step is a small fix rather than a retainer, that is what we will tell you.',
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-ink-100 bg-white p-6 text-center shadow-soft"
              >
                <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
