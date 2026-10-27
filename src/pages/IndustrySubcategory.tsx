import { ArrowDown, ArrowRight } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { IndustryNextSteps } from '../components/industries/IndustryNextSteps';
import { BusinessTypeCard } from '../components/industries/BusinessTypeCard';
import { Checklist } from '../components/industries/Checklist';
import { ContextualServices } from '../components/industries/ContextualServices';
import { IndustryFigure } from '../components/industries/IndustryFigure';
import { IndustryHero } from '../components/industries/IndustryHero';
import { MistakeGrid } from '../components/industries/MistakeGrid';
import { PriorityList } from '../components/industries/PriorityList';
import { RelatedLinks } from '../components/industries/RelatedLinks';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  businessTypePath,
  industryBySlug,
  industryPath,
  subcategoryPath,
} from '../data/industries';
import type { Industry, IndustrySubcategory } from '../data/industries/types';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';
import { truncateText } from '../lib/utils';
import NotFound from './NotFound';

export type IndustrySubcategoryPageProps = {
  industry: Industry;
  subcategory: IndustrySubcategory;
};

/** Route entry: resolves category + group slugs, then falls back to the 404 page. */
export default function IndustrySubcategoryRoute() {
  const { industrySlug = '', subcategorySlug = '' } = useParams();
  const industry = industryBySlug(industrySlug);
  const subcategory = industry?.subcategories.find(
    (item) => item.slug === subcategorySlug,
  );

  if (!industry || !subcategory) return <NotFound />;

  return (
    <IndustrySubcategoryPage
      industry={industry}
      subcategory={subcategory}
    />
  );
}

function IndustrySubcategoryPage({
  industry,
  subcategory,
}: IndustrySubcategoryPageProps) {
  const { guide } = subcategory;
  const path = subcategoryPath(industry.slug, subcategory.slug);
  const image = (index: number) => subcategory.images[index % subcategory.images.length];
  const siblingGroups = industry.subcategories.filter(
    (item) => item.slug !== subcategory.slug,
  );

  useSeo({
    title: `${subcategory.name} — ${industry.name} Business Guide | Bishora`,
    description: truncateText(guide.tagline),
    path,
    keywords: [
      subcategory.name.toLowerCase(),
      `${subcategory.name.toLowerCase()} businesses`,
      `${industry.name.toLowerCase()} ${subcategory.name.toLowerCase()}`,
      'business types',
      'online priorities',
    ],
    image: image(0).src,
    imageAlt: image(0).alt,
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
      { name: industry.name, path: industryPath(industry.slug) },
      { name: subcategory.name, path },
    ]),
  });

  return (
    <>
      <IndustryHero
        eyebrow={industry.name}
        title={subcategory.name}
        description={guide.tagline}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business', to: '/industries' },
          { label: industry.name, to: industryPath(industry.slug) },
          { label: subcategory.name },
        ]}
        image={image(0)}
        chips={[
          `${subcategory.businessTypes.length} business types`,
          `${industry.name}`,
        ]}
      >
        <Button
          href="#business-types"
          size="lg"
          iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
        >
          Business types dekhein
        </Button>
        <Button to="/contact" variant="outlineLight" size="lg">
          Apna business batayein
        </Button>
      </IndustryHero>

      {/* Practical explanation */}
      <section
        aria-labelledby="group-intro-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="group-intro-heading"
                  eyebrow="Group overview"
                  title={`${subcategory.name} mein kaam kaise hota hai?`}
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

              <Reveal delay={120}>
                <p className="mt-6 rounded-2xl border border-brand-100 bg-brand-50/50 p-5 text-[0.95rem] leading-relaxed text-ink-700">
                  {subcategory.digitalFocus}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={100}>
                <IndustryFigure
                  image={image(1)}
                  label="Kaam ki jhalak"
                  aspect="video"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  caption="Har business type ka customer alag hota hai, isliye ek hi template sab par lagana kaam nahi karta."
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What these businesses do */}
      <section
        aria-labelledby="group-does-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="group-does-heading"
                  eyebrow="Roz ka kaam"
                  title="Ye businesses actually kya karti hain?"
                  description="Naam se similar lagne wale businesses ka kaam alag hota hai. Ye points check karein ki aapka business inse match karta hai ya nahi."
                />
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {guide.does.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-ink-100 bg-white p-4 shadow-soft"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-500"
                      />
                      <span className="text-[0.925rem] leading-relaxed text-ink-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft sm:p-6">
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    Customer kya expect karta hai
                  </h3>
                  <Checklist items={guide.expect} columns={1} className="mt-4" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Included business types */}
      <section
        id="business-types"
        aria-labelledby="types-heading"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="types-heading"
              eyebrow="Included business types"
              title={`${subcategory.businessTypes.length} business types in ${subcategory.name}.`}
              description="Apna exact type khol kar uske liye likha guide, priorities aur self-check dekhein."
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subcategory.businessTypes.map((businessType, index) => (
              <Reveal as="li" key={businessType.slug} delay={index * 40}>
                <BusinessTypeCard
                  businessType={businessType}
                  to={businessTypePath(
                    industry.slug,
                    subcategory.slug,
                    businessType.slug,
                  )}
                />
              </Reveal>
            ))}
          </ul>
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
                  eyebrow="Online priorities"
                  title="Is group mein kya pehle theek karein?"
                  description="Ye common priorities hain jo is group ke zyadatar businesses par lagti hain. Exact type ke page par aapko zyada specific order milega."
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

      {/* Mistakes + self-check */}
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
                  title="Ye galtiyan is group mein often hoti hain."
                  description="Chhoti si inconsistency bhi customer ko rok deti hai. Neeche diye points apne business par honestly check karein."
                />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6">
                  <MistakeGrid items={guide.mistakes} />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="rounded-3xl border border-ink-100 bg-ink-50/70 p-6 shadow-soft sm:p-8">
                  <p className="text-xs font-semibold tracking-[0.18em] text-brand-700 uppercase">
                    Self-check
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-bold text-ink-950">
                    10 minute ka apna audit
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                    Kisi tool ki zaroorat nahi. Phone se apna business search
                    karein aur ye cheezein check karein.
                  </p>
                  <Checklist items={guide.check} columns={1} className="mt-5" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section
        aria-labelledby="services-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Agar help chahiye"
              title="Is group ke liye kaunsi help practical hai?"
              description="Ye services optional hain aur wahi useful hain jahan aapke self-check mein actual gap mile. Pehle self-check karein, phir decide karein ki kya khud karna hai aur kya outsource karna practical hai."
            />
          </Reveal>

          <div className="mt-10">
            <ContextualServices
              serviceSlugs={guide.services}
              context="Hum sirf wahi service recommend karte hain jo aapke case mein actually kaam ki ho. Scope aur pricing har service page par clear hai."
            />
          </div>
        </Container>
      </section>

      {/* Related */}
      <section
        aria-labelledby="related-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <RelatedLinks
            id="related-heading"
            eyebrow={industry.name}
            title={`${industry.name} ke doosre groups.`}
            description="Aapka business kisi doosre group se behtar match karta ho to wahan se shuru karein."
            items={siblingGroups.map((item) => ({
              name: item.name,
              to: subcategoryPath(industry.slug, item.slug),
              description: item.guide.tagline,
              meta: `${item.businessTypes.length} business types`,
            }))}
            columns={2}
          />

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-200/70 pt-6 text-sm">
            <Link
              to={industryPath(industry.slug)}
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              All of {industry.name}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
            <Link
              to="/industries"
              className="inline-flex items-center gap-1.5 font-semibold text-brand-700 transition-colors hover:text-brand-800"
            >
              Choose Your Business
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      <IndustryNextSteps
        title={`${subcategory.name} ke liye next step.`}
        description="Apne exact business type ka page khol kar specific priorities dekhein, ya humein apne business ke baare mein bataayein."
      />

      <CTASection
        eyebrow={industry.name}
        title={`${subcategory.name} business?`}
        description="Aap exactly kya karte hain aur customers aap tak kaise pahunchte hain — bas ye batayein. Hum simple aur honest suggestion denge."
      />
    </>
  );
}
