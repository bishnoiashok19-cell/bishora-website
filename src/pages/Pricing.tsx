import {
  ArrowRight,
  ChevronDown,
  Info,
  Layers,
  Mail,
  Megaphone,
  MessageCircle,
  Monitor,
  Package,
  PenTool,
  Search,
  Target,
  Wallet,
} from 'lucide-react';
import { PageHero } from '../components/layout/PageHero';
import { PricingCard } from '../components/pricing/PricingCard';
import { Accordion } from '../components/ui/Accordion';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import { adsExamples, adsPricingSteps, pricingCategories, pricingFaqs } from '../data/pricing';
import { hasWhatsapp, whatsappLink } from '../config/site';
import { buildBreadcrumbJsonLd, buildFaqJsonLd, useSeo } from '../lib/seo';

const categoryIcons = {
  'digital-setup': Layers,
  'whatsapp-solutions': MessageCircle,
  'seo-local-seo': Search,
  'website-landing-pages': Monitor,
  ads: Megaphone,
  'content-design': PenTool,
  'email-marketing': Mail,
  'business-packages': Package,
} as const;

const pricingPrinciples = [
  {
    icon: Wallet,
    title: 'Starting from',
    description:
      'Every figure on this page is a starting point. The final quote depends on the scope we agree with you in writing before any work begins.',
  },
  {
    icon: Layers,
    title: 'One-time or monthly',
    description:
      'Setup and management are always separate charges. A setup fee never includes ongoing work, and a monthly fee never includes setup.',
  },
  {
    icon: Target,
    title: 'Ad spend is separate',
    description:
      'Google and Meta advertising budget is paid by you directly to Google or Meta. It is never part of a Bishora service fee.',
  },
];

const paymentRules = [
  {
    title: 'One-time services',
    description:
      'Paid according to the agreed project terms before the work starts.',
  },
  {
    title: 'Monthly management',
    description:
      'Paid in advance. The next cycle does not start until the applicable payment is received.',
  },
  {
    title: 'Advertising spend',
    description:
      'Paid by you directly to Google or Meta using your own billing method.',
  },
];

function AdsPricingExplainer() {
  return (
    <div className="relative mt-12 overflow-hidden rounded-3xl bg-ink-950 p-6 sm:p-9 lg:p-11">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-brand-600/25 blur-[120px]"
      />

      <div className="relative">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
          Ads pricing explained
        </p>
        <h3 className="mt-4 max-w-2xl text-2xl leading-snug font-bold text-white sm:text-3xl">
          Four separate charges — never one blurred number.
        </h3>

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {adsPricingSteps.map((step) => (
            <li
              key={step.step}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <span className="text-[0.7rem] font-semibold tracking-[0.16em] text-brand-300">
                {step.step}
              </span>
              <h4 className="mt-2 text-[0.95rem] leading-snug font-semibold text-white">
                {step.title}
              </h4>
              <p className="mt-3 font-display text-xl font-bold text-white">
                {step.price}
              </p>
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.1em] text-brand-200/80">
                {step.billing}
              </p>
              <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-300">
                {step.description}
              </p>
              <p className="mt-3 border-t border-white/10 pt-3 text-[0.75rem] leading-relaxed text-ink-400">
                {step.detail}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border border-brand-400/30 bg-brand-500/10 p-4 sm:p-5">
          <Info className="mt-0.5 size-5 shrink-0 text-brand-300" aria-hidden="true" />
          <p className="text-[0.875rem] leading-relaxed text-ink-200">
            <span className="font-semibold text-white">
              Advertising spend is not a Bishora fee.
            </span>{' '}
            It is paid directly by you to Google or Meta on your own billing
            method, and is shown separately from setup, creation and management
            charges.
          </p>
        </div>

        <details className="group mt-4 rounded-2xl border border-white/10 bg-white/[0.03]">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-4 text-[0.875rem] font-semibold text-white transition-colors hover:text-brand-200 sm:px-5 [&::-webkit-details-marker]:hidden">
            <span>Worked examples (A, B, C)</span>
            <ChevronDown
              className="size-4 shrink-0 text-ink-400 transition-transform duration-200 group-open:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <div className="grid gap-4 border-t border-white/10 p-4 sm:p-5 lg:grid-cols-3">
            {adsExamples.map((example) => (
              <div key={example.id}>
                <p className="text-[0.8rem] font-semibold text-brand-200">
                  {example.title}
                </p>
                <ul className="mt-2 space-y-1.5">
                  {example.lines.map((line) => (
                    <li
                      key={line}
                      className="text-[0.78rem] leading-relaxed text-ink-300"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </div>
    </div>
  );
}

export default function Pricing() {
  useSeo({
    title: 'Pricing & Packages for Local Businesses | Bishora',
    description:
      'Transparent Bishora pricing: one-time digital setup, monthly SEO and ads management, websites, landing pages, WhatsApp automation, content, design and business packages. Starting prices confirmed in writing before work starts.',
    path: '/pricing',
    keywords: [
      'digital marketing pricing',
      'SEO pricing India',
      'Google Ads management pricing',
      'Meta ads pricing',
      'website development pricing',
      'WhatsApp automation pricing',
      'digital marketing packages',
    ],
    jsonLd: [
      buildBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Pricing', path: '/pricing' },
      ]),
      buildFaqJsonLd(pricingFaqs),
    ],
  });

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Clear pricing, confirmed in writing before work starts."
        description="One-time setup, monthly management and custom projects are priced separately — so you always know what you are paying for and what you are not. Every figure below is a starting point taken from our published pricing."
        breadcrumb={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Button
            to="/contact"
            size="lg"
            iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
          >
            Get a Quote
          </Button>
          {hasWhatsapp() ? (
            <Button
              href={whatsappLink()}
              size="lg"
              variant="outlineLight"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Ask on WhatsApp
            </Button>
          ) : null}
        </div>
      </PageHero>

      {/* How pricing works */}
      <section aria-label="How Bishora pricing works" className="border-b border-ink-100 bg-white py-10 sm:py-12">
        <Container>
          <dl className="grid gap-4 sm:grid-cols-3">
            {pricingPrinciples.map((principle, index) => (
              <Reveal key={principle.title} delay={index * 60}>
                <div className="flex h-full gap-3 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <principle.icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="font-display text-[0.95rem] font-bold text-ink-950">
                      {principle.title}
                    </dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-relaxed text-ink-600">
                      {principle.description}
                    </dd>
                  </div>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* Category quick navigation */}
      <nav aria-label="Pricing categories" className="border-b border-ink-100 bg-white py-5">
        <Container>
          <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0">
            {pricingCategories.map((category) => {
              const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
              return (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink-200 bg-white px-3.5 py-2 text-[0.78rem] font-semibold text-ink-700 transition-colors hover:border-brand-300 hover:bg-brand-50 hover:text-brand-800"
                >
                  {Icon ? <Icon className="size-3.5" aria-hidden="true" /> : null}
                  {category.title}
                </a>
              );
            })}
          </div>
        </Container>
      </nav>

      {pricingCategories.map((category, index) => {
        const isBundles = category.id === 'business-packages';
        const isAds = category.id === 'ads';

        return (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`${category.id}-heading`}
            className={
              index % 2 === 0
                ? 'bg-white py-16 sm:py-20'
                : 'border-y border-ink-100 bg-ink-50/50 py-16 sm:py-20'
            }
          >
            <Container>
              <SectionHeading
                id={`${category.id}-heading`}
                eyebrow={category.eyebrow}
                title={category.title}
                description={category.description}
              />

              {category.note ? (
                <p className="mt-5 flex max-w-3xl items-start gap-2.5 rounded-xl border border-ink-200/70 bg-white px-4 py-3 text-[0.8125rem] leading-relaxed text-ink-600">
                  <Info className="mt-0.5 size-4 shrink-0 text-brand-600" aria-hidden="true" />
                  <span>{category.note}</span>
                </p>
              ) : null}

              <div
                className={
                  isBundles
                    ? 'mt-9 grid gap-5 md:grid-cols-2'
                    : 'mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3'
                }
              >
                {category.items.map((item, itemIndex) => (
                  <Reveal key={item.id} delay={Math.min(itemIndex, 5) * 50} className="h-full">
                    <PricingCard
                      item={item}
                      highlight={isBundles && item.id === 'local-business-growth-setup'}
                    />
                  </Reveal>
                ))}
              </div>

              {isAds ? <AdsPricingExplainer /> : null}

              {isBundles ? (
                <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    Payment &amp; billing rules
                  </h3>
                  <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                    {paymentRules.map((rule) => (
                      <div key={rule.title}>
                        <dt className="text-[0.8rem] font-semibold text-ink-900">
                          {rule.title}
                        </dt>
                        <dd className="mt-1 text-[0.8125rem] leading-relaxed text-ink-600">
                          {rule.description}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              ) : null}
            </Container>
          </section>
        );
      })}

      {/* Custom quote CTA */}
      <section aria-labelledby="custom-quote-heading" className="bg-white py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl border border-brand-100 bg-brand-50/60 p-8 text-center sm:p-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
              Custom quote
            </p>
            <h2
              id="custom-quote-heading"
              className="mt-4 text-3xl leading-tight font-bold text-ink-950 sm:text-4xl"
            >
              Not sure what you need?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink-600">
              Tell us about your business. We will recommend what to do first and
              confirm the exact scope and price in writing before any work starts.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                to="/contact"
                size="lg"
                iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
              >
                Get a Custom Quote
              </Button>
              {hasWhatsapp() ? (
                <Button
                  href={whatsappLink()}
                  size="lg"
                  variant="whatsapp"
                  icon={<MessageCircle className="size-5" aria-hidden="true" />}
                >
                  Message on WhatsApp
                </Button>
              ) : null}
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="pricing-faq-heading"
        className="border-y border-ink-100 bg-ink-50/50 py-16 sm:py-20"
      >
        <Container>
          <SectionHeading
            id="pricing-faq-heading"
            eyebrow="Pricing questions"
            title="The details that matter before you pay."
            description="How setup and management differ, what ad spend really is, and why some prices are starting points."
          />
          <Reveal className="mt-9">
            <Accordion items={pricingFaqs} />
          </Reveal>
        </Container>
      </section>

      {/* Final CTA */}
      <section
        aria-labelledby="pricing-final-cta"
        className="relative overflow-hidden bg-ink-950 py-20 sm:py-24"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-600/22 blur-[130px]"
        />

        <Container className="relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
              Next step
            </p>
            <h2
              id="pricing-final-cta"
              className="mt-4 text-3xl leading-[1.12] font-bold text-white sm:text-4xl lg:text-[2.85rem]"
            >
              Get a clear quote for your business.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-[1.0625rem]">
              Tell us what you need. We will confirm the scope, the price and what
              we need from you before any work starts.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Get a Quote
              </Button>
              {hasWhatsapp() ? (
                <Button
                  href={whatsappLink()}
                  size="lg"
                  variant="whatsapp"
                  className="w-full sm:w-auto"
                  icon={<MessageCircle className="size-5" aria-hidden="true" />}
                >
                  WhatsApp
                </Button>
              ) : null}
              <Button
                to="/contact"
                size="lg"
                variant="outlineLight"
                className="w-full sm:w-auto"
              >
                Contact
              </Button>
            </div>

            <p className="mt-6 text-sm text-ink-400">
              Starting prices. Advertising spend and third-party platform charges
              are separate where applicable.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
