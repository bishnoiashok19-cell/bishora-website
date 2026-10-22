/**
 * ============================================================================
 * BISHORA — CENTRAL SITE CONFIGURATION
 * ============================================================================
 * This is the ONE place to edit the business details for the whole site.
 *
 * The navbar, footer, contact page, floating WhatsApp button and the enquiry
 * form all read from this file, so a change here updates every page at once.
 *
 * The social profile URLs are intentionally left blank until real profiles
 * exist — an empty value makes the site render a disabled "coming soon"
 * placeholder instead of inventing a link.
 * ============================================================================
 */

export const siteConfig = {
  /** Brand name — always "Bishora" (B-I-S-H-O-R-A). */
  name: 'Bishora',
  /** Used as the wordmark suffix / descriptor. */
  descriptor: 'Digital Marketing Agency',
  /** Primary domain, no protocol. */
  domain: 'bishora.com',
  /** Canonical origin used for SEO tags, canonical links and the sitemap. */
  url: 'https://bishora.com',

  /** Main positioning line, used in the hero and meta defaults. */
  tagline: 'Helping Local Businesses Get Found, Get Leads & Grow Online.',

  /** Default meta description (page-level descriptions override this). */
  description:
    'Bishora is a digital marketing agency helping small and local businesses get found, get leads and grow online through SEO, AEO, GEO, paid advertising, websites, landing pages and content.',

  locale: 'en_GB',
  language: 'en',
} as const;

/**
 * ---------------------------------------------------------------------------
 * CONTACT DETAILS — the business contact details used across the site.
 * ---------------------------------------------------------------------------
 * If a value is ever cleared, the site renders an honest "not configured yet"
 * placeholder instead of a fake phone number or email.
 */
export const contactConfig = {
  /** Business email address — used for every `mailto:` link on the site. */
  email: 'support@bishora.com',
  /** Business phone number (display format) — used for every `tel:` link. */
  phone: '8104536096',
  /** Public business address / service area. */
  address: 'Nokha, Bikaner, Rajasthan, India',
  /** Business availability. */
  hours: 'Online enquiries available 24/7',
  /** Shown next to the enquiry form so visitors know what to expect. */
  responseNote: 'Enquiries are reviewed personally and answered as quickly as possible.',
} as const;

/**
 * ---------------------------------------------------------------------------
 * WHATSAPP — the number every WhatsApp CTA links to.
 * ---------------------------------------------------------------------------
 * Format: country code + number, digits only, no "+", spaces or dashes.
 * Example: '447700900123'  (UK)  /  '15550101234'  (US)
 * If it is ever cleared, the floating button explains that the number is not
 * configured yet instead of linking to a broken chat.
 */
export const whatsappConfig = {
  /**
   * WhatsApp number in international format, digits only.
   * Country code 91 (India) + local number 8104536096.
   * The country code is required — a wa.me link without it will not resolve.
   */
  number: '918104536096',
  /** Pre-filled message that opens with the WhatsApp chat. */
  message:
    "Hi Bishora, I'd like to talk about how to get more customers for my business.",
} as const;

/**
 * ---------------------------------------------------------------------------
 * SOCIAL PROFILES — add your real profile URLs.
 * ---------------------------------------------------------------------------
 * Leave blank and the footer shows disabled "coming soon" placeholders
 * instead of inventing social links.
 */
export const socialConfig = {
  facebook: '',
  instagram: '',
  linkedin: '',
  x: '',
} as const;

export type SocialKey = keyof typeof socialConfig;

/** Navigation links shown in the desktop nav, mobile menu and footer. */
export const navLinks = [
  { label: 'Home', to: '/', description: 'What Bishora does and how we work' },
  { label: 'Services', to: '/services', description: 'SEO, ads, websites and social media' },
  { label: 'About', to: '/about', description: 'The agency behind Bishora' },
  { label: 'Portfolio', to: '/portfolio', description: 'Projects and case study work' },
  { label: 'Contact', to: '/contact', description: 'Start a conversation with us' },
] as const;

/** Primary call-to-action used in the navbar, hero and footer. */
export const primaryCta = {
  label: 'Get Free Consultation',
  to: '/contact',
} as const;

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** True when a real contact email has been supplied. */
export const hasEmail = (): boolean => contactConfig.email.trim().length > 0;

/** True when a real contact phone number has been supplied. */
export const hasPhone = (): boolean => contactConfig.phone.trim().length > 0;

/** True when a real WhatsApp number has been supplied. */
export const hasWhatsapp = (): boolean => whatsappConfig.number.trim().length > 0;

/** Builds a wa.me deep link with the pre-filled message. */
export const whatsappLink = (message: string = whatsappConfig.message): string => {
  const number = whatsappConfig.number.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

/** Builds a mailto: link for the configured business email. */
export const mailtoLink = (subject = 'New enquiry for Bishora'): string =>
  `mailto:${contactConfig.email}?subject=${encodeURIComponent(subject)}`;
