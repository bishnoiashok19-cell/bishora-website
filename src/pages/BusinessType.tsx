import { ArrowDown, ArrowRight, Lightbulb, Search } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { IndustryNextSteps } from '../components/industries/IndustryNextSteps';
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
  businessTypeCount,
  businessTypePath,
  businessTypeRecord,
  industryPath,
  subcategoryPath,
} from '../data/industries';
import type {
  BusinessType,
  Industry,
  IndustrySubcategory,
} from '../data/industries/types';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';
import { truncateText } from '../lib/utils';
import NotFound from './NotFound';

type BusinessTypePageProps = {
  industry: Industry;
  subcategory: IndustrySubcategory;
  businessType: BusinessType;
};

/** Route entry: resolves the three slugs and falls back to the 404 page. */
export default function BusinessTypeRoute() {
  const {
    industrySlug = '',
    subcategorySlug = '',
    businessTypeSlug = '',
  } = useParams();
  const record = businessTypeRecord(
    industrySlug,
    subcategorySlug,
    businessTypeSlug,
  );

  if (!record) return <NotFound />;

  return (
    <BusinessTypePage
      industry={record.industry}
      subcategory={record.subcategory}
      businessType={record.businessType}
    />
  );
}

function BusinessTypePage({
  industry,
  subcategory,
  businessType,
}: BusinessTypePageProps) {
  const { guide } = businessType;
  const path = businessTypePath(
    industry.slug,
    subcategory.slug,
    businessType.slug,
  );
  const image = (index: number) =>
    businessType.images[index % businessType.images.length];

  const relatedTypes = subcategory.businessTypes
    .filter((item) => item.slug !== businessType.slug)
    .slice(0, 6);
  const siblingGroups = industry.subcategories.filter(
    (item) => item.slug !== subcategory.slug,
  );

  useSeo({
    title: `${businessType.name} — Online Guide, Website & Digital Priorities | Bishora`,
    description: truncateText(guide.tagline),
    path,
    keywords: [
      `${businessType.name.toLowerCase()} website`,
      `${businessType.name.toLowerCase()} google profile`,
      `${businessType.name.toLowerCase()} marketing`,
      subcategory.name.toLowerCase(),
      industry.name.toLowerCase(),
    ],
    image: image(0).src,
    imageAlt: image(0).alt,
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
      { name: industry.name, path: industryPath(industry.slug) },
      {
        name: subcategory.name,
        path: subcategoryPath(industry.slug, subcategory.slug),
      },
      { name: businessType.name, path },
    ]),
  });

  return (
    <>
      <IndustryHero
        eyebrow="Business type guide"
        title={businessType.name}
        description={guide.tagline}
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business', to: '/industries' },
          { label: industry.name, to: industryPath(industry.slug) },
          {
            label: subcategory.name,
            to: subcategoryPath(industry.slug, subcategory.slug),
          },
          { label: businessType.name },
        ]}
        image={image(0)}
        chips={[industry.name, subcategory.name, 'Self-check included']}
      >
        <Button
          href="#priorities"
          size="lg"
          iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
        >
          Digital priorities dekhein
        </Button>
        <Button to="/contact" variant="outlineLight" size="lg">
          Apne business ke baare mein bataayein
        </Button>
      </IndustryHero>

      {/* What this business actually does */}
      <section
        aria-labelledby="what-it-does-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="what-it-does-heading"
                  eyebrow="Kaam kya hai"
                  title={`${businessType.name} business actually kya karti hai?`}
                  description={businessType.focus}
                />
              </Reveal>

              <Reveal delay={80}>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {guide.does.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-xl border border-ink-100 bg-ink-50/60 p-4"
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
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <IndustryFigure
                  image={image(1)}
                  label="Roz ka kaam"
                  aspect="portrait"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  caption="Customer ke liye aapka kaam tab clear hota hai jab wo usey online dekh sake."
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* How customers discover this business */}
      <section
        aria-labelledby="discovery-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5 lg:order-2">
              <Reveal>
                <SectionHeading
                  id="discovery-heading"
                  eyebrow="Discovery"
                  title="Customer aapko online kaise dhoondhta hai?"
                  description="Har business ka search pattern alag hota hai. Ye wo raaste hain jinse log aap tak pahunchte hain — inhe apne actual business se match karein."
                />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5 shadow-soft">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                      <Search className="size-4" aria-hidden="true" />
                    </span>
                    <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
                      Yaad rakhein
                    </p>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    Customer usually ek hi waqt par 3-4 options dekhta hai. Jo
                    option sabse clear aur current lagta hai, usi par call ya
                    enquiry jaati hai — sabse zyada fancy wale par nahi.
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:order-1">
              <Reveal>
                <ol className="space-y-3">
                  {guide.find.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-4 shadow-soft sm:p-5"
                    >
                      <span
                        aria-hidden="true"
                        className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink-950 font-display text-sm font-bold tabular-nums text-white"
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="pt-1 text-[0.95rem] leading-relaxed text-ink-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ol>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                  <p className="text-xs font-semibold tracking-[0.16em] text-ink-500 uppercase">
                    Enquiry moment
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    Jab customer decide kar leta hai, tab wo call, WhatsApp ya
                    form use karta hai. Isi ek step ko simple rakhein — number
                    tap par kaam kare, form chhota ho aur reply ka expectation
                    clear ho.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* What must stay right online */}
      <section
        aria-labelledby="must-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="must-heading"
              eyebrow="Online essentials"
              title="Online kya sahi rakhna zaroori hai?"
              description="Ye cheezein har platform par same honi chahiye. Customer ek jagah dekh kar doosri jagah verify karta hai — mismatch usi waqt trust todta hai."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                    <Lightbulb className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    Har jagah same information
                  </h3>
                </div>
                <Checklist items={guide.must} columns={1} className="mt-5" />
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full rounded-2xl border border-ink-100 bg-ink-50/60 p-6 sm:p-7">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex size-9 items-center justify-center rounded-xl bg-white text-brand-700 ring-1 ring-brand-100">
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink-950">
                    Website par kya hona chahiye
                  </h3>
                </div>
                <Checklist items={guide.site} columns={1} className="mt-5" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Common mistakes */}
      <section
        aria-labelledby="mistakes-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="mistakes-heading"
                  eyebrow="Common mistakes"
                  title="Ye galtiyan enquiries kam karti hain."
                  description="Inme se koi bhi galti customer ko aapke paas aane se pehle rok sakti hai. Apne business par honestly check karein."
                />
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-6">
                  <IndustryFigure
                    image={image(2)}
                    label="Customer view"
                    aspect="wide"
                    sizes="(min-width: 1024px) 35vw, 100vw"
                    caption="Customer jo dekhta hai wahi uski reality hai — aapka actual kaam usse better ho sakta hai, lekin online proof ke bina wo pata nahi chalta."
                  />
                </div>
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

      {/* Ordered priorities */}
      <section
        id="priorities"
        aria-labelledby="priorities-heading"
        className="scroll-mt-24 bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeading
                  id="priorities-heading"
                  eyebrow="Digital priorities"
                  title={`${businessType.name} ke liye kaam kis order mein karein?`}
                  description="Har business ka starting point alag hota hai. Ye order average case ke liye hai — apne enquiries ke hisaab se adjust karein."
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
                    10 minute ka apna audit
                  </h2>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-600">
                    Kisi tool ki zaroorat nahi. Phone uthaayein aur ye cheezein
                    khud check karein — jo missing mile, wahi aapka pehla kaam hai.
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

      {/* When professional help is useful */}
      <section
        aria-labelledby="help-heading"
        className="bg-white py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="help-heading"
              eyebrow="Agar help chahiye"
              title="Professional help kab useful hoti hai?"
              description="Bahut si cheezein aap khud kar sakte hain. Professional help tab samajh aati hai jab kaam consistently ruk raha ho, ya jab galti ki cost zyada ho."
            />
          </Reveal>

          <div className="mt-10">
            <ContextualServices
              serviceSlugs={guide.services}
              context="Ye services optional hain. Pehle apna self-check complete karein, phir decide karein ki kaunsa kaam khud karna hai aur kaunsa outsource karna practical hai."
            />
          </div>
        </Container>
      </section>

      {/* Related links */}
      <section
        aria-labelledby="related-heading"
        className="bg-ink-50 py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <RelatedLinks
            id="related-heading"
            eyebrow={subcategory.name}
            title="Isi group ke doosre business types."
            description="Same group, lekin customer aur online priorities alag. Apna exact type khol kar compare karein."
            items={relatedTypes.map((item) => ({
              name: item.name,
              to: businessTypePath(industry.slug, subcategory.slug, item.slug),
              description: item.guide.tagline,
            }))}
          />

          <div className="mt-14">
            <RelatedLinks
              id="sibling-groups-heading"
              eyebrow={industry.name}
              title={`${industry.name} ke doosre groups.`}
              description={`Is group mein ${subcategory.businessTypes.length} business types hain. Agar aapka kaam kisi doosre group se behtar match karta hai, wahan se shuru karein.`}
              items={siblingGroups.map((item) => ({
                name: item.name,
                to: subcategoryPath(industry.slug, item.slug),
                description: item.guide.tagline,
                meta: `${item.businessTypes.length} business types`,
              }))}
              columns={2}
            />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-ink-200/70 pt-6 text-sm">
            <RelatedLinksCrumb
              to={subcategoryPath(industry.slug, subcategory.slug)}
              label={`Back to ${subcategory.name}`}
            />
            <RelatedLinksCrumb
              to={industryPath(industry.slug)}
              label={`All of ${industry.name}`}
            />
            <span className="text-ink-500">
              {businessTypeCount(industry)} business types across {industry.subcategories.length} groups
            </span>
          </div>
        </Container>
      </section>

      <IndustryNextSteps
        title={`${businessType.name} business ke liye next step.`}
        description="Apna current website aur Google listing dekhein, ya humein business ke baare mein bataayein — hum batayenge ki pehla useful kaam kya hai."
      />

      <CTASection
        eyebrow={industry.name}
        title={`${businessType.name} business?`}
        description="Aap kya karte hain, kahan se customers aate hain aur abhi online kya hai — bas ye teen cheezein batayein. Hum seedha aur simple suggestion denge."
      />
    </>
  );
}

/** Small text link used in the footer row of the related section. */
function RelatedLinksCrumb({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1.5 font-semibold text-brand-700 transition-colors hover:text-brand-800"
    >
      {label}
      <ArrowRight className="size-3.5" aria-hidden="true" />
    </Link>
  );
}
