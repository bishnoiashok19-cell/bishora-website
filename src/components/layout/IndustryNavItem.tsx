import { useEffect, useRef, useState } from 'react';
import type { FocusEvent } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { IndustryMegaMenu } from '../industries/IndustryMegaMenu';
import { cn } from '../../lib/utils';

export type IndustryNavItemProps = {
  /** True while the header sits over the dark home hero. */
  transparent: boolean;
};

/**
 * Desktop "Choose Your Business" nav item.
 *
 * The label navigates to /industries while the chevron button opens the
 * structured mega menu. Escape, outside clicks and focus leaving the item all
 * close it, so keyboard users are never trapped.
 */
export function IndustryNavItem({ transparent }: IndustryNavItemProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  const isActive =
    location.pathname === '/industries' ||
    location.pathname.startsWith('/industries/');

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const handleBlur = (event: FocusEvent<HTMLLIElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setOpen(false);
    }
  };

  return (
    <li
      ref={wrapperRef}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={handleBlur}
    >
      <div className="flex items-center">
        <NavLink
          to="/industries"
          className={cn(
            'inline-flex items-center rounded-full py-2 pl-2.5 text-[0.9375rem] font-medium transition-colors duration-200 xl:pl-4',
            transparent
              ? 'text-ink-100 hover:text-white'
              : 'text-ink-600 hover:text-ink-950',
            isActive && (transparent ? 'text-white' : 'text-brand-700'),
          )}
        >
          Choose Your Business
        </NavLink>

        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls="industry-mega-menu"
          aria-label="Browse business categories"
          onClick={() => setOpen(true)}
          className={cn(
            'inline-flex size-7 items-center justify-center rounded-full transition-colors duration-200',
            transparent
              ? 'text-ink-200 hover:bg-white/10 hover:text-white'
              : 'text-ink-500 hover:bg-ink-50 hover:text-ink-900',
            open && (transparent ? 'bg-white/10 text-white' : 'bg-ink-50 text-ink-900'),
          )}
        >
          <ChevronDown
            className={cn(
              'size-4 transition-transform duration-200',
              open && 'rotate-180',
            )}
            aria-hidden="true"
          />
        </button>
      </div>

      {open ? (
        <IndustryMegaMenu onNavigate={() => setOpen(false)} />
      ) : null}
    </li>
  );
}
