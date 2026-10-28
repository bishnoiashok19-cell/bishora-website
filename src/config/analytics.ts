/**
 * ============================================================================
 * BISHORA — GOOGLE ANALYTICS 4 CONFIGURATION
 * ============================================================================
 * A GA4 Measurement ID is public — it ships in the page source of every
 * production page — so the live ID lives here to keep production builds
 * reproducible from the repository.
 *
 * Set `VITE_GA_MEASUREMENT_ID` to override it, for example to point a local
 * QA build at a test data stream instead of the live property.
 * ============================================================================
 */

export const gaMeasurementId = (
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-L3LVK8WBFD'
).trim();

/**
 * Real GA4 measurement IDs are `G-` followed by at least six alphanumerics.
 * Anything else disables analytics completely rather than sending data to a
 * broken or invented destination.
 */
export const isMeasurementIdValid = /^G-[A-Z0-9]{6,}$/i.test(gaMeasurementId);
