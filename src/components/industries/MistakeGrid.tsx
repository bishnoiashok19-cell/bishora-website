import { AlertTriangle } from 'lucide-react';

export type MistakeGridProps = {
  items: string[];
};

/** Common, specific mistakes — short enough to scan, concrete enough to act on. */
export function MistakeGrid({ items }: MistakeGridProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-xl border border-accent-200/70 bg-accent-100/40 p-4"
        >
          <AlertTriangle
            className="mt-0.5 size-4 shrink-0 text-accent-700"
            aria-hidden="true"
          />
          <span className="text-[0.925rem] leading-relaxed text-ink-800">{item}</span>
        </li>
      ))}
    </ul>
  );
}
