/**
 * Tiny class-name joiner. Avoids pulling in a dependency for something this
 * small — keeps the production bundle lean.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(' ');
}

/** Formats a number for display without pulling in a formatting library. */
export function formatPhoneForLink(phone: string): string {
  return phone.replace(/[^\d+]/g, '');
}
