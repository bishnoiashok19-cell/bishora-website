import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Reveal } from '../ui/Reveal';

export type IndustryNextStepsProps = {
  title?: string;
  description?: string;
};

/** Shared next-step band used at the end of every industry page. */
export function IndustryNextSteps({
  title = 'Decide what to do next.',
  description = 'Review the services in detail, compare starting prices or tell us about your business and get an honest recommendation.',
}: IndustryNextStepsProps) {
  return (
    <section
      aria-labelledby="next-steps-heading"
      className="bg-white py-16 sm:py-20"
    >
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-ink-100 bg-ink-50/60 p-7 sm:p-9">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2
                  id="next-steps-heading"
                  className="font-display text-2xl font-bold text-ink-950"
                >
                  {title}
                </h2>
                <p className="mt-3 text-[1.0625rem] leading-relaxed text-ink-600">
                  {description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:shrink-0">
                <Button
                  to="/services"
                  iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
                >
                  View services
                </Button>
                <Button to="/pricing" variant="outline">
                  See pricing
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Bishora
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
