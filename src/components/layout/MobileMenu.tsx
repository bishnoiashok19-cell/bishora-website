import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { X, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import {
  navLinks,
  primaryCta,
  contactConfig,
  hasPhone,
  hasEmail,
  hasWhatsapp,
} from '../../config/site';
import { Button } from '../ui/Button';
import { IndustryMobileNav } from '../industries/IndustryMobileNav';
import { Logo } from './Logo';
import { cn } from '../../lib/utils';

export type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Full-screen mobile navigation.
 *
 * Handles Escape-to-close, background scroll locking, focus placement and
 * focus restoration so keyboard users are never stranded inside the panel.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    restoreFocusRef.current = document.activeElement as HTMLElement | null;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 60);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      window.clearTimeout(focusTimer);
      restoreFocusRef.current?.focus?.();
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-0 z-[70] lg:hidden',
        open ? 'pointer-events-auto' : 'pointer-events-none',
      )}
      inert={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={cn(
          'absolute inset-0 bg-ink-950/55 backdrop-blur-[3px] transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className={cn(
          'absolute inset-x-0 top-0 max-h-[100dvh] overflow-y-auto rounded-b-3xl bg-white shadow-lift transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]',
          open ? 'translate-y-0' : '-translate-y-full',
        )}
      >
        <div className="flex items-center justify-between px-5 py-5 sm:px-7">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="inline-flex size-11 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 transition-colors hover:bg-ink-50"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav aria-label="Mobile" className="px-5 pb-2 sm:px-7">
          <ul className="divide-y divide-ink-100 border-y border-ink-100">
            {navLinks.map((link) =>
              link.to === '/industries' ? (
                <IndustryMobileNav key={link.to} onNavigate={onClose} />
              ) : (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={onClose}
                    className="flex items-center justify-between gap-4 py-4 text-lg font-semibold text-ink-900 transition-colors hover:text-brand-700"
                  >
                    {link.label}
                    <span className="text-sm font-normal text-ink-400">
                      {link.description}
                    </span>
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="space-y-4 px-5 py-6 sm:px-7">
          <Button to={primaryCta.to} onClick={onClose} fullWidth size="lg">
            {primaryCta.label}
          </Button>

          <div className="rounded-2xl border border-ink-100 bg-ink-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">
              Talk to us
            </p>
            <ul className="mt-3 space-y-2.5 text-sm text-ink-700">
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {hasPhone() ? (
                  <a
                    href={`tel:${contactConfig.phone.replace(/[^\d+]/g, '')}`}
                    className="hover:text-brand-700 hover:underline"
                  >
                    {contactConfig.phone}
                  </a>
                ) : (
                  <span className="text-ink-500">Phone number to be confirmed</span>
                )}
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {hasEmail() ? (
                  <a href={`mailto:${contactConfig.email}`} className="hover:text-brand-700 hover:underline">
                    {contactConfig.email}
                  </a>
                ) : (
                  <span className="text-ink-500">Email address to be confirmed</span>
                )}
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                <span className="text-ink-500">
                  {contactConfig.address || 'Service area details to be confirmed'}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="size-4 shrink-0 text-brand-600" aria-hidden="true" />
                {hasWhatsapp() ? (
                  <span>WhatsApp available</span>
                ) : (
                  <span className="text-ink-500">WhatsApp number to be confirmed</span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
