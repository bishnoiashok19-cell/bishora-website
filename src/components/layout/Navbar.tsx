import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { navLinks, primaryCta } from '../../config/site';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { MobileMenu } from './MobileMenu';
import { IndustryNavItem } from './IndustryNavItem';
import { Logo } from './Logo';
import { cn } from '../../lib/utils';

/**
 * Sticky site header.
 *
 * On the home page the header sits transparently over the dark hero until
 * the visitor scrolls, then it becomes a solid, elevated bar. On every other
 * page it is solid from the start.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-ink-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-[60] transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300',
          transparent
            ? 'border-b border-transparent bg-transparent'
            : 'border-b border-ink-100/90 bg-white/92 shadow-soft backdrop-blur-xl',
        )}
      >
        <Container>
          <div className="flex h-[4.5rem] items-center justify-between gap-4 lg:h-20">
            <Link
              to="/"
              className="rounded-lg"
            >
              <Logo tone={transparent ? 'light' : 'dark'} />
              <span className="sr-only">— home</span>
            </Link>

            <nav aria-label="Primary" className="hidden lg:block">
              <ul className="flex items-center gap-0.5 xl:gap-1">
                {navLinks.map((link) =>
                  link.to === '/industries' ? (
                    <IndustryNavItem
                      key={link.to}
                      transparent={transparent}
                    />
                  ) : (
                    <li key={link.to}>
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          cn(
                            'relative inline-flex items-center rounded-full px-2.5 py-2 text-[0.9375rem] font-medium transition-colors duration-200 xl:px-4',
                            transparent
                              ? 'text-ink-100 hover:text-white'
                              : 'text-ink-600 hover:text-ink-950',
                            isActive &&
                              (transparent
                                ? 'text-white'
                                : 'text-brand-700'),
                          )
                        }
                      >
                        {({ isActive }) => (
                          <>
                            {link.label}
                            <span
                              aria-hidden="true"
                              className={cn(
                                'pointer-events-none absolute inset-x-2.5 -bottom-0.5 h-0.5 rounded-full bg-brand-500 transition-all duration-300 xl:inset-x-4',
                                isActive
                                  ? 'opacity-100'
                                  : 'scale-x-0 opacity-0',
                                transparent ? 'bg-brand-300' : 'bg-brand-600',
                              )}
                            />
                          </>
                        )}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            <div className="flex items-center gap-2.5">
              {/*
                `max-sm:hidden` is used instead of `hidden sm:inline-flex`.
                The Button base styles already set `display: inline-flex`, and
                Tailwind emits `.inline-flex` after `.hidden` in the utilities
                layer — so `hidden` on its own would lose the cascade and the
                button would stay visible on small screens. A `max-*` variant
                lives in a media query, which is emitted after the base
                utilities, so it reliably wins.
              */}
              <Button
                to={primaryCta.to}
                size="md"
                className="max-sm:hidden"
              >
                {primaryCta.label}
              </Button>

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label="Open navigation menu"
                className={cn(
                  'inline-flex size-11 items-center justify-center rounded-full border transition-colors duration-200 lg:hidden',
                  transparent
                    ? 'border-white/25 text-white hover:bg-white/10'
                    : 'border-ink-200 bg-white text-ink-800 hover:bg-ink-50',
                )}
              >
                <Menu className="size-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}
