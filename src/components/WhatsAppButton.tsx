import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X } from 'lucide-react';
import { hasWhatsapp, whatsappLink } from '../config/site';
import { cn } from '../lib/utils';

/**
 * Floating WhatsApp call-to-action, present on every page.
 *
 * The number lives in `src/config/site.ts`. Until a real number is added the
 * button explains that honestly and points the visitor to the contact form
 * instead of opening a broken chat.
 */
export function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
    };
  }, [open]);

  const configured = hasWhatsapp();

  return (
    <div
      ref={containerRef}
      className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
    >
      {open ? (
        <div
          role="dialog"
          aria-label="WhatsApp contact"
          className="w-[min(20rem,calc(100vw-2rem))] rounded-2xl border border-ink-100 bg-white p-5 shadow-lift"
        >
          <div className="flex items-start justify-between gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-xl bg-[#25D366]/12 text-[#128C3E]">
              <MessageCircle className="size-5" aria-hidden="true" />
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close WhatsApp message"
              className="inline-flex size-8 items-center justify-center rounded-full text-ink-400 transition-colors hover:bg-ink-100 hover:text-ink-700"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>

          <h2 className="mt-3 font-display text-base font-bold text-ink-950">
            {configured ? 'Chat with Bishora' : 'WhatsApp is coming soon'}
          </h2>

          <p className="mt-2 text-sm leading-relaxed text-ink-600">
            {configured
              ? 'Send us a message and we will reply with an honest view of how we can help.'
              : 'Our WhatsApp number is being finalised and will be published here shortly. In the meantime, send us your details and we will come back to you.'}
          </p>

          {configured ? (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-[0.95rem] font-semibold text-ink-950 transition-colors hover:bg-[#1eb457]"
            >
              <MessageCircle className="size-[1.05rem]" aria-hidden="true" />
              Open WhatsApp chat
            </a>
          ) : (
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-brand-600 text-[0.95rem] font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Go to contact form
            </Link>
          )}
        </div>
      ) : null}

      {configured ? (
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Bishora on WhatsApp"
          className={cn(
            'group inline-flex h-14 items-center gap-2.5 rounded-full bg-[#25D366] px-4 text-ink-950',
            'shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1eb457] sm:px-5',
          )}
        >
          <MessageCircle className="size-6 shrink-0" aria-hidden="true" />
          <span className="hidden text-[0.95rem] font-bold sm:inline">
            Chat on WhatsApp
          </span>
        </a>
      ) : (
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="WhatsApp contact — number to be confirmed"
          className={cn(
            'group inline-flex h-14 items-center gap-2.5 rounded-full bg-ink-950 px-4 text-white',
            'shadow-lift transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink-800 sm:px-5',
          )}
        >
          <MessageCircle className="size-6 shrink-0 text-[#25D366]" aria-hidden="true" />
          <span className="hidden text-[0.95rem] font-bold sm:inline">
            WhatsApp
          </span>
        </button>
      )}
    </div>
  );
}
