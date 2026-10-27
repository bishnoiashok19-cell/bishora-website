import { ArrowRight } from 'lucide-react';
import type { GuidePriority } from '../../data/industries/types';

export type JourneyFlowProps = {
  steps: GuidePriority[];
  /** Short label under the flow, e.g. "Every step is a chance to lose the customer." */
  note?: string;
};

/**
 * The customer's path from search to enquiry.
 *
 * Vertical on mobile, four-up on desktop, with a connecting rule that keeps
 * the reading order obvious without adding decorative clutter.
 */
export function JourneyFlow({ steps, note }: JourneyFlowProps) {
  return (
    <div>
      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {steps.map((step, index) => (
          <li key={step.title} className="relative">
            <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-5 shadow-soft">
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-ink-950 font-display text-xs font-bold tabular-nums text-white"
                >
                  {index + 1}
                </span>
                {index < steps.length - 1 ? (
                  <ArrowRight
                    className="hidden size-4 text-ink-300 lg:block"
                    aria-hidden="true"
                  />
                ) : null}
                <span className="text-[0.7rem] font-semibold tracking-[0.14em] text-ink-500 uppercase">
                  Step {index + 1}
                </span>
              </div>

              <h3 className="mt-3 font-display text-[1.0125rem] leading-snug font-bold text-ink-950">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{step.why}</p>
            </div>
          </li>
        ))}
      </ol>

      {note ? (
        <p className="mt-4 text-sm leading-relaxed text-ink-500">{note}</p>
      ) : null}
    </div>
  );
}
