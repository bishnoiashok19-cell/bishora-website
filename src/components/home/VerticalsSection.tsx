import { businessVerticals } from '../../data/verticals';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { IconTile } from '../ui/IconTile';

export function VerticalsSection() {
  return (
    <section
      aria-labelledby="verticals-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="verticals-heading"
            eyebrow="Who we work with"
            title="Built for the way local businesses actually operate."
            description="Small teams, tight budgets and customers who search before they buy. The strategy adapts to your market, your service area and your capacity."
          />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessVerticals.map((vertical, index) => {
            const Icon = vertical.icon;

            return (
              <Reveal as="li" key={vertical.title} delay={index * 50}>
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
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
      </Container>
    </section>
  );
}
