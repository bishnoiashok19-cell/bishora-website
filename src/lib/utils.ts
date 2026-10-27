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

/**
 * Trims long editorial copy for meta descriptions without cutting a word in
 * half. Keeps the result under `max` characters including the ellipsis.
 */
export function truncateText(value: string, max = 158): string {
  const clean = value.replace(/\s+/g, ' ').trim();

  if (clean.length <= max) return clean;

  const cut = clean.slice(0, max - 3);
  const lastSpace = cut.lastIndexOf(' ');
  const body = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;

  return `${body.trimEnd()}...`;
}
