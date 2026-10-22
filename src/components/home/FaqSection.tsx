import { ArrowRight } from 'lucide-react';
import { faqs } from '../../data/faqs';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                id="faq-heading"
                eyebrow="Common questions"
                title="Questions local business owners ask us most."
                description="If your question is not here, ask us directly — we will give you a straight answer."
              >
                <Button
                  to="/contact"
                  variant="outline"
                  iconRight={
                    <ArrowRight className="size-4" aria-hidden="true" />
                  }
                >
                  Ask your question
                </Button>
              </SectionHeading>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={100}>
              <Accordion items={faqs} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
