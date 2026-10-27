import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  featuredIndustries,
  industries,
  industryPath,
  subcategoryCount,
} from '../../data/industries';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { IconTile } from '../ui/IconTile';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { industryIcon } from '../industries/industryIcons';

/**
 * Homepage "Choose Your Business" band. Shows eight representative categories
 * only — the full 30 live on /industries so the homepage stays short.
 */
export function ChooseBusinessSection() {
  return (
    <section
      aria-labelledby="choose-business-heading"
      className="bg-ink-50 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="choose-business-heading"
            eyebrow="Choose your business"
            title="Tell us what kind of business you run."
            description="Explore the category that matches your business and see the digital services that usually matter — from your website and local visibility to advertising and customer communication."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredIndustries.map((industry, index) => {
            const Icon = industryIcon(industry.slug);

            return (
              <Reveal as="li" key={industry.slug} delay={index * 40}>
                <Link
                  to={industryPath(industry.slug)}
                  className="group flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift"
                >
                  <div className="flex items-start justify-between gap-3">
                    <IconTile tone="brand" size="sm">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <span className="pt-0.5 font-display text-xs font-bold tabular-nums text-ink-300">
                      {String(industry.number).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-[1.0625rem] leading-snug font-bold text-ink-950">
                    {industry.name}
                  </h3>

                  <p className="mt-1.5 text-xs text-ink-500">
                    {subcategoryCount(industry)} business groups
                  </p>

                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-brand-700 transition-colors group-hover:text-brand-800">
                    Explore category
                    <ArrowRight
                      className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              to="/industries"
              variant="outline"
              size="lg"
              iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
            >
              View all business categories
            </Button>
            <span className="text-sm text-ink-500">
              {industries.length} categories in the full directory
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
