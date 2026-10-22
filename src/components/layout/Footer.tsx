import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  contactConfig,
  hasEmail,
  hasPhone,
  hasWhatsapp,
  navLinks,
  socialConfig,
  whatsappConfig,
  whatsappLink,
} from '../../config/site';
import { services } from '../../data/services';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SocialIcon } from '../ui/SocialIcon';
import type { SocialIconName } from '../ui/SocialIcon';
import { Logo } from './Logo';
import { cn } from '../../lib/utils';

type SocialEntry = {
  key: keyof typeof socialConfig;
  label: string;
  icon: SocialIconName;
};

const socialEntries: SocialEntry[] = [
  { key: 'facebook', label: 'Facebook', icon: 'facebook' },
  { key: 'instagram', label: 'Instagram', icon: 'instagram' },
  { key: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { key: 'x', label: 'X', icon: 'x' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-200">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent"
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block">
              <Logo tone="light" />
              <span className="sr-only">— home</span>
            </Link>

            <p className="mt-6 max-w-sm text-[0.95rem] leading-relaxed text-ink-300">
              Bishora is a digital marketing agency helping small and local
              businesses get found, get leads and grow online through SEO,
              Google Business Profile optimisation, paid advertising, websites
              and social media marketing.
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
                Follow Bishora
              </p>
              <div className="mt-3 flex items-center gap-2.5">
                {socialEntries.map(({ key, label, icon }) => {
                  const url = socialConfig[key];

                  if (url) {
                    return (
                      <a
                        key={key}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} (opens in a new tab)`}
                        className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/5 text-ink-200 transition-colors duration-200 hover:border-brand-400/50 hover:bg-white/10 hover:text-white"
                      >
                        <SocialIcon name={icon} className="size-[1.05rem]" aria-hidden="true" />
                      </a>
                    );
                  }

                  // Placeholder — no social URLs are invented.
                  return (
                    <span
                      key={key}
                      title={`${label} — profile link coming soon`}
                      className="inline-flex size-10 cursor-not-allowed items-center justify-center rounded-full border border-dashed border-white/12 bg-white/[0.03] text-ink-400"
                    >
                      <SocialIcon name={icon} className="size-[1.05rem]" aria-hidden="true" />
                      <span className="sr-only">{label} profile link coming soon</span>
                    </span>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-ink-400">
                Social profile links will be added here.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Navigate
            </h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-block text-[0.95rem] text-ink-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="inline-block text-[0.95rem] text-ink-300 transition-colors hover:text-white"
                  >
                    {service.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
              Start a conversation
            </h2>

            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-300">
              Tell us what your business needs. We will come back with a
              practical plan and honest advice on what to do first.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <Button to="/contact" size="md" className="w-full">
                Get Free Consultation
              </Button>

              {hasWhatsapp() ? (
                <Button
                  href={whatsappLink()}
                  variant="whatsapp"
                  size="md"
                  className="w-full"
                  icon={<MessageCircle className="size-[1.05rem]" aria-hidden="true" />}
                >
                  Chat on WhatsApp
                </Button>
              ) : (
                <span
                  className="inline-flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-full border border-dashed border-white/15 px-5 py-2.5 text-[0.95rem] font-medium text-ink-400"
                  title="Add the WhatsApp number in src/config/site.ts to enable this button"
                >
                  <MessageCircle className="size-[1.05rem]" aria-hidden="true" />
                  WhatsApp — number to be confirmed
                </span>
              )}
            </div>

            <ul className="mt-7 space-y-3 text-[0.95rem]">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-[1.05rem] shrink-0 text-brand-400" aria-hidden="true" />
                {hasPhone() ? (
                  <a
                    href={`tel:${contactConfig.phone.replace(/[^\d+]/g, '')}`}
                    className="text-ink-200 transition-colors hover:text-white"
                  >
                    {contactConfig.phone}
                  </a>
                ) : (
                  <span className="text-ink-400">Phone number to be confirmed</span>
                )}
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-[1.05rem] shrink-0 text-brand-400" aria-hidden="true" />
                {hasEmail() ? (
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="break-all text-ink-200 transition-colors hover:text-white"
                  >
                    {contactConfig.email}
                  </a>
                ) : (
                  <span className="text-ink-400">Email address to be confirmed</span>
                )}
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-[1.05rem] shrink-0 text-brand-400" aria-hidden="true" />
                <span className="text-ink-400">
                  {contactConfig.address || 'Service area to be confirmed'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-7">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <p className="text-sm text-ink-400">
              © {year} Bishora. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/services"
                className="text-sm text-ink-400 transition-colors hover:text-white"
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-sm text-ink-400 transition-colors hover:text-white"
              >
                Contact
              </Link>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={cn(
                  'inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-ink-300',
                  'transition-colors hover:border-white/30 hover:text-white',
                )}
              >
                <ArrowUp className="size-4" aria-hidden="true" />
                Back to top
              </button>
            </div>
          </div>

          <p className="mt-5 max-w-3xl text-xs leading-relaxed text-ink-400">
            Bishora is a digital marketing agency for small and local
            businesses. Messaging apps mentioned on this site are trademarks of
            their respective owners. Project examples shown on the portfolio
            page are placeholders until real client work is published with
            permission.
          </p>
          <p className="mt-2 text-xs text-ink-400">
            Prefer WhatsApp?{' '}
            {hasWhatsapp() ? (
              <a
                href={whatsappLink(whatsappConfig.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-300 underline underline-offset-4 hover:text-brand-200"
              >
                Start a chat
              </a>
            ) : (
              <span className="text-ink-400">
                Our WhatsApp number will be published here shortly.
              </span>
            )}
          </p>
        </div>
      </Container>
    </footer>
  );
}
