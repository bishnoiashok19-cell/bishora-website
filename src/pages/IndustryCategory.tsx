import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { IndustryNextSteps } from '../components/industries/IndustryNextSteps';
import { Checklist } from '../components/industries/Checklist';
import { ContextualServices } from '../components/industries/ContextualServices';
import { IndustryFigure } from '../components/industries/IndustryFigure';
import { IndustryHero } from '../components/industries/IndustryHero';
import { JourneyFlow } from '../components/industries/JourneyFlow';
import { MistakeGrid } from '../components/industries/MistakeGrid';
import { PriorityList } from '../components/industries/PriorityList';
import { RelatedLinks } from '../components/industries/RelatedLinks';
import { SubcategoryCard } from '../components/industries/SubcategoryCard';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  businessTypeCount,
  businessTypePath,
  industryBySlug,
  industryPath,
  subcategoryCount,
  subcategoryPath,
} from '../data/industries';
import type { Industry } from '../data/industries/types';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';
import { truncateText } from '../lib/utils';
import NotFound from './NotFound';

export type IndustryCategoryPageProps = {
  industry: Industry;
};

/** Route entry: resolves the category slug and falls back to the 404 page. */
export default function IndustryCategoryRoute() {
  const { industrySlug = '' } = useParams();
  const industry = industryBySlug(industrySlug);

  if (!industry) return <NotFound />;

  return <IndustryCategoryPage industry={industry} />;
}

function IndustryCategoryPage({ industry }: IndustryCategoryPageProps) {
  const { guide } = industry;
  const path = industryPath(industry.slug);
  const groups = subcategoryCount(industry);
  const types = businessTypeCount(industry);
  const image = (index: number) => industry.images[index % industry.images.length];

  const related = guide.related
    .map((slug) => industryBySlug(slug))
    .filter((item): item is Industry => Boolean(item) && item?.slug !== industry.slug);

  useSeo({
    title: `${industry.name} — Business Guide, Website & Digital Priorities | Bishora`,
    description: truncateText(guide.tagline),
    path,
    keywords: [
      `${industry.name.toLowerCase()} businesses`,
      `${industry.name.toLowerCase()} website`,
      `${industry.name.toLowerCase()} marketing`,
      'choose your business',
      'business types',
    ],
    image: image(0).src,
    imageAlt: image(0).alt,
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
      { name: industry.name, path },
    ]),
  });

  return (
    <>
      <IndustryHero
        eyebrow="Business category"
        title={industry.name}
        description={guide.tagline}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business', to: '/industries' },
          { label: industry.name },
        ]}
        image={image(0)}
        chips={[`${groups} business groups`, `${types} business types`, 'Customer-first guide']}
      >
        <Button
          href="#groups"
          size="lg"
          iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
        >
          Groups dekhein
        </Button>
        <Button to="/contact" variant="outlineLight" size="lg">
          Apna business batayein
        </Button>
      </IndustryHero>

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
                  eyebrow="Overview"
                  title="Is category mein customer kya dekh raha hai?"
                />
              </Reveal>

              <div className="mt-6 space-y-4">
                {guide.intro.map((paragraph, index) => (
                  <Reveal key={paragraph} delay={index * 70}>
                    <p className="text-[1.0125rem] leading-relaxed text-ink-600">
                      {paragraph}
                    </p>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={140}>
                <div className="mt-8 rounded-2xl border border-brand-100 bg-brand-50/50 p-5 sm:p-6">
                  <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
                    Ek line mein
                  </p>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">
                    {industry.description}
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <IndustryFigure
                  image={image(1)}
                  label="Customer ki nazar se"
                  aspect="video"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  caption="Jo customer pehle 10 second mein samajh leta hai, wahi uske decision ka base banta hai."
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Is your business in this category? */}
      <section
        aria-labelledby="who-for-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="who-for-heading"
              eyebrow="Fit check"
              title="Kya aapka business is category mein aata hai?"
              description="Agar inme se zyadatar points aapke business se match karte hain, to aap sahi jagah par hain. Agar nahi, to directory mein apni behtar category dhoondhein."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                <h3 className="font-display text-lg font-bold text-ink-950">
                  Aapke business ke signs
                </h3>
                <Checklist items={guide.whoFor} columns={1} className="mt-5" />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                <h3 className="font-display text-lg font-bold text-ink-950">
                  Customer aapse kya expect karta hai
                </h3>
                <Checklist items={guide.expect} columns={1} className="mt-5" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Groups */}
      <section
        id="groups"
        aria-labelledby="groups-heading"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="groups-heading"
              eyebrow="Business groups"
              title={`${groups} groups, ${types} business types.`}
              description="Apna exact group khol kar uske business types dekhein. Har group ka customer, process aur online priority alag hota hai."
              align="center"
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industry.subcategories.map((subcategory, index) => (
              <Reveal as="li" key={subcategory.slug} delay={index * 40}>
                <SubcategoryCard
                  industrySlug={industry.slug}
                  subcategory={subcategory}
                />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Business types at a glance */}
      <section
        aria-labelledby="types-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="types-heading"
              eyebrow="All business types"
              title="Ek nazar mein poore business types."
              description="Agar aapko apna exact type pehle se pata hai, seedha us page par jaayein. Har page par usi business ke liye likha guide, priorities aur self-check hai."
            />
          </Reveal>

          <div className="mt-10 space-y-8">
            {industry.subcategories.map((subcategory) => (
              <Reveal key={subcategory.slug}>
                <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-[1.0625rem] font-bold text-ink-950">
                      {subcategory.name}
                    </h3>
                    <Link
                      to={subcategoryPath(industry.slug, subcategory.slug)}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
                    >
                      Group guide
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-2">
                    {subcategory.businessTypes.map((businessType) => (
                      <li key={businessType.slug}>
                        <Link
                          to={businessTypePath(
                            industry.slug,
                            subcategory.slug,
                            businessType.slug,
                          )}
                          className="inline-flex rounded-full border border-ink-100 bg-ink-50 px-3 py-1.5 text-[0.8125rem] font-medium text-ink-700 transition-colors hover:border-brand-200 hover:bg-brand-50 hover:text-brand-800"
                        >
                          {businessType.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Customer journey */}
      <section
        aria-labelledby="journey-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="journey-heading"
              eyebrow="Customer journey"
              title="Customer ki journey: search se enquiry tak."
              description="Har step par customer ek decision leta hai. Jahan information missing ho, wahin enquiry rukti hai."
            />
          </Reveal>

          <div className="mt-10">
            <JourneyFlow
              steps={guide.journey}
              note="Isliye sirf website nahi, Google listing, photos, reviews aur reply speed sab ek saath dekhna padta hai."
            />
          </div>
        </Container>
      </section>

      {/* Priorities */}
      <section
        id="priorities"
        aria-labelledby="priorities-heading"
        className="scroll-mt-24 bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="priorities-heading"
                  eyebrow="Digital priorities"
                  title="Sabse pehle kya theek karein?"
                  description="Ye order average case ke liye hai. Aapke business ka pattern alag ho sakta hai — apne actual enquiries se compare karein."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <PriorityList items={guide.priorities} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Mistakes */}
      <section
        aria-labelledby="mistakes-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="mistakes-heading"
                  eyebrow="Common mistakes"
                  title="Ye galtiyan is category mein sabse aam hain."
                  description="Aapko sab theek karne ki zaroorat nahi. Bas dekhein ki inme se kaunsi galti aapke business mein already ho rahi hai."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <MistakeGrid items={guide.mistakes} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Self-check */}
      <section
        aria-labelledby="self-check-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <div className="rounded-3xl border border-ink-100 bg-white p-6 shadow-soft sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase">
                    Self-check
                  </p>
                  <h2
                    id="self-check-heading"
                    className="mt-3 font-display text-2xl font-bold text-ink-950 sm:text-3xl"
                  >
                    Apne business ka 10 minute audit
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
                    Phone se apna business Google par search karein aur ye
                    cheezein check karein. Jo missing mile, wahi pehla kaam hai.
                  </p>
                </div>

                <div className="lg:col-span-8">
                  <Checklist items={guide.check} columns={2} />
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Services */}
      <section
        aria-labelledby="services-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Agar help chahiye"
              title="Is category ke liye kaunsi help useful hoti hai?"
              description="Ye services optional hain aur wahi useful hain jahan aapke self-check mein actual gap mile. Pehle self-check complete karein, phir relevant help par focus karein."
            />
          </Reveal>

          <div className="mt-10">
            <ContextualServices
              serviceSlugs={guide.services}
              context="Scope, timeline aur starting price har service page par diya gaya hai. Hum pehle problem samajhte hain, phir batate hain ki kaam karna worth hai ya nahi."
            />
          </div>
        </Container>
      </section>

      {/* Related categories */}
      <section
        aria-labelledby="related-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <RelatedLinks
            id="related-heading"
            eyebrow="Related categories"
            title="In categories se aapka kaam overlap kar sakta hai."
            description="Ye sirf random links nahi hain — in categories mein often same customers, same vendors ya same digital problems milte hain."
            items={related.map((item) => ({
              name: item.name,
              to: industryPath(item.slug),
              description: item.guide.tagline,
              meta: `${subcategoryCount(item)} groups · ${businessTypeCount(item)} business types`,
            }))}
          />

          <RelatedLinks
            id="browse-heading"
            eyebrow="Directory"
            title="Baaki categories bhi dekh lein."
            description="Apna business kisi doosri category se behtar match karta ho to wahan se shuru karein."
            items={[
              {
                name: 'All business categories',
                to: '/industries',
                description:
                  '30 categories, 102 groups aur 369 business types ka poora directory ek page par.',
              },
              {
                name: 'Bishora services',
                to: '/services',
                description:
                  'SEO, Google Business Profile, website, ads aur content — sab kuch simple language mein.',
              },
              {
                name: 'Pricing',
                to: '/pricing',
                description:
                  'Har service ka starting price aur scope, taaki aap pehle budget decide kar sakein.',
              },
            ]}
            className="mt-14"
          />
        </Container>
      </section>

      <IndustryNextSteps
        title={`${industry.name} ke liye next step.`}
        description="Apni category ke andar sahi group khol kar exact business type dekhein, ya humein apne business ke baare mein bataayein."
      />

      <CTASection
        eyebrow={industry.name}
        title="Apna business describe karein."
        description="Aap kya karte hain, customers kahan se aate hain aur abhi online kya hai — in teen sawalon ka jawab kaafi hai. Hum seedha suggestion denge."
      />
    </>
  );
}
