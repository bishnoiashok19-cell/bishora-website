import { processSteps } from '../data/process';
import { Container } from './ui/Container';
import { SectionHeading } from './ui/SectionHeading';
import { Reveal } from './ui/Reveal';
import { cn } from '../lib/utils';

export type ProcessSectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

/**
 * The five-step Bishora process, shared by the home and services pages.
 */
export function ProcessSection({
  eyebrow = 'How we work',
  title = 'A clear process, from first conversation to steady growth.',
  description = 'No mystery and no jargon. You always know what we are doing, why we are doing it and what happens next.',
  className,
}: ProcessSectionProps) {
  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className={cn('bg-ink-50 py-20 sm:py-24 lg:py-28', className)}
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            align="center"
          />
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal as="li" key={step.number} delay={index * 80}>
                <div className="group relative h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex size-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-display text-2xl font-extrabold text-ink-100 transition-colors duration-300 group-hover:text-brand-100"
                    >
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-[1.0625rem] font-bold leading-snug text-ink-950">
                    {step.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
