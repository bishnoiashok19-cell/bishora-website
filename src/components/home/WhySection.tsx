import { whyBishora } from '../../data/whyBishora';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { IconTile } from '../ui/IconTile';

export function WhySection() {
  return (
    <section
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-ink-950 py-20 sm:py-24 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/3 size-[30rem] rounded-full bg-brand-700/22 blur-[130px]"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="why-heading"
            theme="dark"
            eyebrow="Why Bishora?"
            title="A marketing partner built around how local business works."
            description="We are not a volume agency pushing the same playbook at everyone. Here is what you get when you work with us."
            align="center"
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 md:grid-cols-2">
          {whyBishora.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal as="li" key={item.title} delay={index * 80}>
                <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-brand-400/40 hover:bg-white/[0.07] sm:p-8">
                  <div className="flex items-center gap-4">
                    <IconTile tone="dark">
                      <Icon aria-hidden="true" />
                    </IconTile>
                    <h3 className="font-display text-xl font-bold text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-300">
                    {item.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm text-ink-200"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-accent-400"
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
      </Container>
    </section>
  );
}
