import { gaMeasurementId, isMeasurementIdValid } from '../config/analytics';

/**
 * ============================================================================
 * BISHORA — GA4 EVENT TAXONOMY
 * ============================================================================
 * Every event below describes something the WEBSITE can actually observe.
 * None of them claim that a message reached Bishora.
 *
 * NAVIGATION
 *   page_view               one per route change (see RouteAnalytics).
 *
 * CONTACT INTENT — opening a channel, NOT a confirmed enquiry
 *   whatsapp_click          visitor clicked a wa.me link. Opening WhatsApp is
 *                           not proof that a message was sent.
 *   email_click             visitor clicked a mailto: link. Opening a mail
 *                           client is not proof that an email was sent.
 *   phone_click             visitor clicked a tel: link. The dialer opening is
 *                           not proof that a call was placed.
 *   consultation_click      visitor clicked an in-page CTA that leads to the
 *                           contact flow. Intent only.
 *   contact_success         the contact form validated and the success screen
 *                           ("your enquiry is ready") was shown. The visitor
 *                           still sends the message from their own WhatsApp or
 *                           email app, so this is a COMPLETED FORM — not a
 *                           received enquiry.
 *
 * CONFIRMED INBOUND ENQUIRY — reserved, never fired by this build
 *   enquiry_received        only after a server-side integration confirms an
 *                           actual inbound message (WhatsApp Business webhook
 *                           or email/backend intake). See
 *                           ENQUIRY_RECEIVED_EVENT below.
 * ============================================================================
 */

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** True when a valid Measurement ID is configured. */
export const analyticsEnabled = isMeasurementIdValid;

/** Script element id — also guards against a second initialisation. */
const SCRIPT_ID = 'bishora-ga4';

/** Longest free-text value sent to GA4 (link labels, not user input). */
const MAX_TEXT_LENGTH = 100;

/** Contact route used to detect consultation CTAs. */
const CONTACT_PATH = '/contact';

/**
 * Reserved name for a CONFIRMED inbound enquiry.
 *
 * Never call `trackEvent(ENQUIRY_RECEIVED_EVENT, ...)` from the browser. This
 * page cannot know whether the visitor pressed Send in WhatsApp, whether an
 * email left their outbox, or whether Bishora received anything at all.
 *
 * Planned flow once a receiving integration exists:
 *
 *   visitor → contact form → WhatsApp/Email app → Bishora inbox
 *     → WhatsApp Business webhook (or email intake) confirms the message
 *     → server reports `enquiry_received` (Measurement Protocol), or redirects
 *       back with a signed token so this page may send it exactly once.
 *
 * Contract (keep these names stable once the integration ships):
 *   channel: 'whatsapp' | 'email'
 *   service_interest?: string
 *   Never: name, phone number, email address, message body or WhatsApp content.
 */
export const ENQUIRY_RECEIVED_EVENT = 'enquiry_received' as const;

export type EnquiryReceivedParams = {
  channel: 'whatsapp' | 'email';
  service_interest?: string;
};

/**
 * CTA labels that indicate a real consultation intent. Plain navigation links
 * such as "Contact" are deliberately excluded so the event keeps its meaning.
 *
 * These phrases are static copy from the components; if a CTA label changes,
 * the phrase list must change with it. CTAs whose label is too generic for a
 * text match opt in explicitly with `data-analytics-cta="consultation"`.
 */
const CONSULTATION_CTA = /(consult|quote|enquir|talk to|contact us|contact bishora|call us|get started|start a project|get in touch|ask about|ask your question|discuss this package|baat karein|apne business|apna business)/i;

/**
 * Defence in depth: never let an email address or a phone-like number reach
 * GA4, even if a future call site passes one by mistake.
 */
const LOOKS_PERSONAL = /@|\d{7,}/;

let initialised = false;
let lastPageView = { path: '', at: 0 };

function cleanText(value: string): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, MAX_TEXT_LENGTH);
}

function currentPath(): string {
  return `${window.location.pathname}${window.location.search}`;
}

/** Installs the gtag queue and loader exactly once, and enables click tracking. */
export function initAnalytics(): void {
  if (!analyticsEnabled || initialised) return;
  if (document.getElementById(SCRIPT_ID)) return;

  initialised = true;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag() {
      // Matches Google's snippet exactly: queue the arguments object.
      window.dataLayer?.push(arguments as unknown as unknown[]);
    };

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaMeasurementId)}`;
  document.head.appendChild(script);

  window.gtag('js', new Date());
  // Automatic page views are off: RouteAnalytics sends exactly one page_view
  // per route change, because an SPA navigation should count once and must
  // report the new URL and the new title.
  //
  // Keep the GA4 stream setting "Page changes based on browser history events"
  // (Enhanced measurement) OFF as well. While it is on, gtag.js adds a second
  // page_view on history changes that reports the URL being left and carries no
  // page_path, so those extra hits come from the property, not from this file.
  window.gtag('config', gaMeasurementId, { send_page_view: false });

  document.addEventListener('click', handleDocumentClick, true);
}

/** Sends one event with page context attached. */
export function trackEvent(name: string, params: AnalyticsParams = {}): void {
  if (!analyticsEnabled) return;

  const gtag = window.gtag;
  if (!gtag) return;

  const clean: AnalyticsParams = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === '') continue;
    if (typeof value === 'string') {
      const text = cleanText(value);
      if (!text) continue;
      const isPageContext = key === 'page_path' || key === 'page_title';
      if (!isPageContext && LOOKS_PERSONAL.test(text)) continue;
      clean[key] = text;
    } else {
      clean[key] = value;
    }
  }

  gtag('event', name, {
    page_path: currentPath(),
    page_location: window.location.href,
    page_title: document.title,
    ...clean,
  });
}

/**
 * Sends one page_view per route. The short duplicate window absorbs React
 * StrictMode's double effect in development without dropping real navigations.
 */
export function trackPageView(path: string, title: string): void {
  if (!analyticsEnabled) return;

  const now = Date.now();
  if (lastPageView.path === path && now - lastPageView.at < 800) return;

  lastPageView = { path, at: now };
  trackEvent('page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: title,
  });
}

/** Nearest meaningful region for a click, e.g. "cta-heading" or "header". */
function describeLocation(anchor: Element): string {
  const labelled = anchor.closest('[data-analytics-location]');
  if (labelled) {
    return labelled.getAttribute('data-analytics-location') || 'page';
  }

  if (anchor.closest('header')) return 'header';
  if (anchor.closest('footer')) return 'footer';
  if (anchor.closest('[role="dialog"]')) return 'floating_widget';

  const section = anchor.closest('section');
  if (section) {
    const label =
      section.getAttribute('aria-labelledby') ||
      section.getAttribute('aria-label') ||
      section.id;
    if (label) return label;
  }

  return anchor.closest('main') ? 'page_content' : 'page';
}

/** True for in-page CTAs that lead to the contact flow. */
function isConsultationLink(anchor: HTMLAnchorElement, href: string): boolean {
  let url: URL;
  try {
    url = new URL(href, window.location.origin);
  } catch {
    return false;
  }

  if (url.origin !== window.location.origin) return false;
  if (url.pathname.replace(/\/+$/, '') !== CONTACT_PATH) return false;

  // Explicit opt-in for CTAs whose label alone would be too generic, such as a
  // button that only says "Contact". Deterministic and immune to copy changes.
  if (anchor.closest('[data-analytics-cta="consultation"]')) return true;

  // Top-level navigation ("Contact" in the header/footer menus) is not a CTA.
  if (anchor.closest('nav')) return false;

  return CONSULTATION_CTA.test(anchor.textContent ?? '');
}

/**
 * One delegated listener covers every WhatsApp, email, phone and consultation
 * link on the site — header, footer, pricing, industry pages and the contact
 * success screen — without touching their markup.
 *
 * These are INTENT events: they record that the visitor opened a contact
 * channel. They are not evidence of a sent message or a received enquiry.
 */
function handleDocumentClick(event: MouseEvent): void {
  if (!analyticsEnabled) return;

  const target = event.target;
  if (!(target instanceof Element)) return;

  const anchor = target.closest('a');
  if (!(anchor instanceof HTMLAnchorElement)) return;

  const href = anchor.getAttribute('href');
  if (!href) return;

  const buttonLocation = describeLocation(anchor);
  const linkText = cleanText(anchor.textContent ?? '');

  if (/^https?:\/\/(?:www\.)?(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\//i.test(href)) {
    trackEvent('whatsapp_click', {
      button_location: buttonLocation,
      link_text: linkText,
    });
    return;
  }

  if (href.startsWith('mailto:')) {
    trackEvent('email_click', {
      button_location: buttonLocation,
      link_text: linkText,
    });
    return;
  }

  if (href.startsWith('tel:')) {
    trackEvent('phone_click', {
      button_location: buttonLocation,
      link_text: linkText,
    });
    return;
  }

  if (isConsultationLink(anchor, href)) {
    trackEvent('consultation_click', {
      button_location: buttonLocation,
      cta_text: linkText,
    });
  }
}
