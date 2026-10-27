import { ArrowDown, ArrowRight, Layers, ListTree, Sparkles } from 'lucide-react';
import { CTASection } from '../components/CTASection';
import { IndustryCard } from '../components/industries/IndustryCard';
import { IndustryHero } from '../components/industries/IndustryHero';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Reveal } from '../components/ui/Reveal';
import { SectionHeading } from '../components/ui/SectionHeading';
import {
  industries,
  totalBusinessTypes,
  totalSubcategories,
} from '../data/industries';
import { imagesForScene } from '../data/industries/images';
import { buildBreadcrumbJsonLd, useSeo } from '../lib/seo';

const steps = [
  {
    title: 'Apni category chunein',
    description:
      'Sabse pehle wo broad category chunein jo aapka business sabse sahi tarike se describe karti hai.',
    icon: Layers,
  },
  {
    title: 'Business group kholein',
    description:
      'Har category ke andar groups hain, taaki aap seedha apne type ke kaam tak pahunch sakein.',
    icon: ListTree,
  },
  {
    title: 'Apna exact type dekhein',
    description:
      'Business type page par usi business ke liye likha guide, priorities aur self-check milega.',
    icon: Sparkles,
  },
];

const directoryHeroImage = imagesForScene('consulting', 1, 'industries-directory')[0];

export default function Industries() {
  useSeo({
    title: 'Choose Your Business — 30 Categories, 102 Groups, 369 Business Types | Bishora',
    description:
      'Apna business type chunein aur uska practical guide padhein — customer kaise dhoondhta hai, online kya sahi rakhna hai aur kaam kis order mein karein.',
    path: '/industries',
    keywords: [
      'choose your business',
      'business category directory',
      'business types in India',
      'digital guide by business type',
      'local business categories',
    ],
    image: directoryHeroImage.src,
    imageAlt: directoryHeroImage.alt,
    jsonLd: buildBreadcrumbJsonLd([
      { name: 'Home', path: '/' },
      { name: 'Choose Your Business', path: '/industries' },
    ]),
  });

  return (
    <>
      <IndustryHero
        eyebrow="Choose your business"
        title="Choose Your Business"
        description="Apne business se shuru karein, service list se nahi. Yahan har category, group aur business type ke liye alag guide hai — customer kya dekhta hai, online kya sahi rakhna hai aur kaam kis order mein karna chahiye."
        breadcrumb={[
          { label: 'Home', to: '/' },
          { label: 'Choose Your Business' },
        ]}
        image={directoryHeroImage}
        chips={[
          `${industries.length} categories`,
          `${totalSubcategories} groups`,
          `${totalBusinessTypes} business types`,
        ]}
      >
        <Button
          href="#categories"
          size="lg"
          iconRight={<ArrowDown className="size-5" aria-hidden="true" />}
        >
          Saari categories dekhein
        </Button>
        <Button to="/services" variant="outlineLight" size="lg">
          Services dekhein
        </Button>
      </IndustryHero>

      {/* How the directory works */}
      <section
        aria-labelledby="directory-heading"
        className="bg-white py-16 sm:py-20"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  id="directory-heading"
                  eyebrow="Kaise use karein"
                  title="Apne kaam se shuru karein, service list se nahi."
                  description="Services batati hain Bishora kya karta hai. Ye directory batati hai ki aapke business mein asli problem kahan hoti hai — aur uske hisaab se kaunsi cheez pehle theek karni chahiye."
                />
              </Reveal>

              <ol className="mt-8 grid gap-4 sm:grid-cols-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <Reveal as="li" key={step.title} delay={index * 60}>
                      <div className="h-full rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
                        <span className="inline-flex size-9 items-center justify-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                          <Icon className="size-4" aria-hidden="true" />
                        </span>
                        <p className="mt-3 font-display text-sm font-bold tabular-nums text-ink-300">
                          Step {String(index + 1).padStart(2, '0')}
                        </p>
                        <h3 className="mt-1 font-display text-[1.0125rem] font-bold text-ink-950">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                          {step.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </ol>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <div className="rounded-2xl border border-ink-100 bg-ink-50/70 p-6 shadow-soft sm:p-7">
                  <p className="text-xs font-semibold tracking-[0.16em] text-brand-700 uppercase">
                    Directory mein kya hai
                  </p>

                  <dl className="mt-5 grid grid-cols-2 gap-5">
                    <div>
                      <dt className="text-sm text-ink-500">Business categories</dt>
                      <dd className="mt-1 font-display text-3xl font-bold text-ink-950">
                        {industries.length}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500">Business groups</dt>
                      <dd className="mt-1 font-display text-3xl font-bold text-ink-950">
                        {totalSubcategories}
                      </dd>
                    </div>
                    <div className="col-span-2">
                      <dt className="text-sm text-ink-500">Business types</dt>
                      <dd className="mt-1 font-display text-3xl font-bold text-ink-950">
                        {totalBusinessTypes}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-5 text-sm leading-relaxed text-ink-600">
                    Har page par wahi cheezein hain jo owner ke kaam ki hain:
                    customer ka search pattern, online essentials, common
                    mistakes, priorities ka order aur ek chhota self-check.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* All categories */}
      <section
        id="categories"
        aria-labelledby="categories-heading"
        className="scroll-mt-24 bg-ink-50 py-20 sm:py-24"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="categories-heading"
              eyebrow="All business categories"
              title="Apni category chunein."
              description="Tees categories, har ek ke andar groups aur exact business types. Apne business se milti category khol kar shuru karein."
              align="center"
            />
          </Reveal>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry, index) => (
              <Reveal as="li" key={industry.slug} delay={index * 20}>
                <IndustryCard industry={industry} />
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* Not sure where to start */}
      <section
        aria-labelledby="unsure-heading"
        className="bg-white py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-brand-100 bg-brand-50/60 p-7 sm:p-9">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <h2
                    id="unsure-heading"
                    className="font-display text-2xl font-bold text-ink-950"
                  >
                    Category samajh nahi aa rahi?
                  </h2>
                  <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-700">
                    Simple language mein batayein ki aap actually kya karte hain.
                    Hum sahi group tak le jaayenge, phir batayenge ki pehla
                    useful kaam kya hai — bina extra services add kiye.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                  <Button
                    to="/contact"
                    iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
                  >
                    Baat karein
                  </Button>
                  <Button to="/pricing" variant="outline">
                    Pricing dekhein
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <CTASection
        eyebrow="Need a hand choosing?"
        title="Apna business describe karein."
        description="Aap kya karte hain aur customers aap tak kaise pahunchte hain — bas ye batayein. Hum sahi category aur pehla practical step suggest karenge."
      />
    </>
  );
}
