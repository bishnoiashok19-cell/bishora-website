import { CalendarCheck, MessageCircle, Phone } from 'lucide-react';
import {
  contactConfig,
  hasPhone,
  hasWhatsapp,
  whatsappLink,
} from '../config/site';
import { Button } from './ui/Button';
import { Container } from './ui/Container';
import { Reveal } from './ui/Reveal';
import { cn } from '../lib/utils';

export type CTASectionProps = {
  title?: string;
  description?: string;
  eyebrow?: string;
  className?: string;
};

/**
 * Closing call-to-action block used near the bottom of most pages.
 *
 * It always offers a contact route and a WhatsApp route. When a WhatsApp
 * number has not been configured yet the button says so plainly rather than
 * pointing somewhere broken.
 */
export function CTASection({
  title = 'Ready to Grow Your Business Online?',
  description = 'Book a free consultation. We will look at what you have already, show you where the biggest opportunities are and tell you honestly what to do first.',
  eyebrow = 'Let’s work together',
  className,
}: CTASectionProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className={cn('relative overflow-hidden bg-ink-950 py-20 sm:py-24', className)}
    >
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[52rem] -translate-x-1/2 rounded-full bg-brand-600/22 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">
            {eyebrow}
          </p>

          <h2
            id="cta-heading"
            className="mt-4 text-3xl leading-[1.12] font-bold text-white sm:text-4xl lg:text-[2.85rem]"
          >
            {title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-[1.0625rem]">
            {description}
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/contact" size="lg" className="w-full sm:w-auto">
              Get Free Consultation
            </Button>

            {hasWhatsapp() ? (
              <Button
                href={whatsappLink()}
                size="lg"
                variant="whatsapp"
                className="w-full sm:w-auto"
                icon={<MessageCircle className="size-5" aria-hidden="true" />}
              >
                Message on WhatsApp
              </Button>
            ) : (
              <span
                title="Add your WhatsApp number in src/config/site.ts to activate this button"
                className="inline-flex h-13 w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-white/20 px-7 text-base font-semibold text-ink-400 sm:w-auto"
              >
                <MessageCircle className="size-5" aria-hidden="true" />
                WhatsApp number coming soon
              </span>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-sm text-ink-400 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <CalendarCheck className="size-4 text-brand-400" aria-hidden="true" />
              Free consultation, no obligation
            </span>

            {hasPhone() ? (
              <a
                href={`tel:${contactConfig.phone.replace(/[^\d+]/g, '')}`}
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="size-4 text-brand-400" aria-hidden="true" />
                {contactConfig.phone}
              </a>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
