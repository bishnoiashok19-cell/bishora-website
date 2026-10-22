import { ArrowRight } from 'lucide-react';
import { services } from '../../data/services';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../ui/Reveal';
import { ServiceCard } from '../ServiceCard';
import { Button } from '../ui/Button';

export function ServicesOverview() {
  return (
    <section
      aria-labelledby="services-overview-heading"
      className="relative bg-ink-50 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading
            id="services-overview-heading"
            eyebrow="What we do"
            title="Twelve services. One practical plan for getting found and winning the enquiry."
            description="Each service stands on its own, but they work far better together. We will tell you which combination makes sense for your business."
            align="center"
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal as="li" key={service.slug} delay={index * 60}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              to="/services"
              variant="outline"
              size="lg"
              iconRight={<ArrowRight className="size-5" aria-hidden="true" />}
            >
              Explore all services in detail
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
