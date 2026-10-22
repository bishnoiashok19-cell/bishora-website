import { useId, useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

export type AccordionItem = {
  question: string;
  answer: string;
};

export type AccordionProps = {
  items: AccordionItem[];
  className?: string;
  /** Allow several panels open at once. */
  allowMultiple?: boolean;
};

/**
 * Accessible disclosure list used for FAQs.
 *
 * Uses a real button per question with `aria-expanded` / `aria-controls`
 * wired to the panel, so keyboard and screen-reader users get the expected
 * behaviour.
 */
export function Accordion({
  items,
  className,
  allowMultiple = false,
}: AccordionProps) {
  const baseId = useId();
  const [open, setOpen] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpen((current) => {
      if (current.includes(index)) {
        return current.filter((value) => value !== index);
      }
      return allowMultiple ? [...current, index] : [index];
    });
  };

  return (
    <div className={cn('divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft', className)}>
      {items.map((item, index) => {
        const isOpen = open.includes(index);
        const buttonId = `${baseId}-trigger-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(index)}
                className="flex w-full items-start justify-between gap-6 px-5 py-5 text-left transition-colors duration-200 hover:bg-ink-50/70 sm:px-7"
              >
                <span
                  className={cn(
                    'font-display text-[1.0625rem] leading-snug font-semibold transition-colors sm:text-lg',
                    isOpen ? 'text-brand-800' : 'text-ink-900',
                  )}
                >
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
                    isOpen
                      ? 'rotate-45 border-brand-200 bg-brand-50 text-brand-700'
                      : 'border-ink-200 bg-white text-ink-500',
                  )}
                >
                  <Plus className="size-4" strokeWidth={2.4} />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-7"
            >
              <p className="max-w-3xl text-[0.975rem] leading-relaxed text-ink-600">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
