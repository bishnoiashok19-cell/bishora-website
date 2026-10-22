import {
  BadgeCheck,
  MapPin,
  MousePointerClick,
  Search,
  PhoneCall,
  Gauge,
  MessageSquareText,
  LineChart,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { IconTile } from '../ui/IconTile';

type ValueItem = {
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

const valueItems: ValueItem[] = [
  {
    title: 'Show up when people search',
    description:
      'More of the people who need your service find you in Google instead of scrolling past your competitors.',
    points: [
      'SEO built around real local searches',
      'Pages written for how customers actually search',
    ],
    icon: Search,
  },
  {
    title: 'Own your local map results',
    description:
      'An optimised Google Business Profile makes you easier to choose, easier to call and easier to visit.',
    points: [
      'Complete, optimised business listings',
      'Reviews and posts handled properly',
    ],
    icon: MapPin,
  },
  {
    title: 'Turn visitors into enquiries',
    description:
      'Traffic is only useful if it converts. Your pages and ads are built to make the next step obvious.',
    points: [
      'Landing pages written to convert',
      'Calls, forms and booking flows tracked',
    ],
    icon: MousePointerClick,
  },
  {
    title: 'Build trust that repeats',
    description:
      'A consistent presence across search, social and your website makes people confident enough to choose you.',
    points: [
      'Content and creative with one voice',
      'A brand that looks professional everywhere',
    ],
    icon: BadgeCheck,
  },
];

const outcomes: Array<{ label: string; icon: LucideIcon }> = [
  { label: 'More inbound calls', icon: PhoneCall },
  { label: 'Higher local visibility', icon: Gauge },
  { label: 'Qualified enquiries', icon: MessageSquareText },
  { label: 'Clear, honest reporting', icon: LineChart },
];

export function ValueSection() {
  return (
    <section
      aria-labelledby="value-heading"
      className="relative bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                id="value-heading"
                eyebrow="What you get"
                title="What Bishora helps your business achieve."
                description="Marketing only matters when it produces something useful for the business. We focus on the handful of outcomes that actually move a local business forward."
              />
            </Reveal>

            <Reveal delay={120}>
              <ul className="mt-9 grid gap-3 sm:grid-cols-2">
                {outcomes.map(({ label, icon: Icon }) => (
                  <li
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-ink-100 bg-ink-50/60 px-4 py-3.5 text-sm font-semibold text-ink-800"
                  >
                    <span
                      className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-700 ring-1 ring-ink-100"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" />
                    </span>
                    {label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-5 sm:grid-cols-2">
              {valueItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal as="li" key={item.title} delay={index * 80}>
                    <article className="group h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                      <IconTile tone="brand">
                        <Icon aria-hidden="true" />
                      </IconTile>

                      <h3 className="mt-5 font-display text-lg font-bold text-ink-950">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-600">
                        {item.description}
                      </p>

                      <ul className="mt-4 space-y-2 border-t border-ink-100 pt-4">
                        {item.points.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-2.5 text-sm text-ink-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-brand-500"
                            />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
