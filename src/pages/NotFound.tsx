import { ArrowLeft, Compass, Home, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { navLinks } from '../config/site';
import { Link } from 'react-router-dom';
import { useSeo } from '../lib/seo';

export default function NotFound() {
  useSeo({
    title: 'Page Not Found (404) | Bishora',
    description:
      'The page you are looking for could not be found. Head back to the Bishora homepage or get in touch about digital marketing for your local business.',
    path: '/404',
    noindex: true,
  });

  return (
    <section className="relative overflow-hidden bg-ink-950 pt-32 pb-24 sm:pt-40 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-brand-600/22 blur-[130px]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p
            aria-hidden="true"
            className="font-display text-[5rem] leading-none font-extrabold text-brand-500/25 sm:text-[7rem]"
          >
            404
          </p>

          <h1 className="mt-2 text-3xl leading-tight font-extrabold text-white sm:text-4xl">
            We could not find that page.
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-ink-300 sm:text-lg">
            The link may be out of date, or the page may have moved. Let’s get
            you back to something useful.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              to="/"
              size="lg"
              icon={<Home className="size-5" aria-hidden="true" />}
            >
              Back to home
            </Button>
            <Button
              to="/contact"
              variant="outlineLight"
              size="lg"
              icon={<MessageCircle className="size-5" aria-hidden="true" />}
            >
              Get in touch
            </Button>
          </div>

          <div className="mt-14 border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-400">
              Popular pages
            </p>

            <ul className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:border-brand-400/40 hover:bg-white/10 hover:text-white"
                  >
                    <Compass className="size-4" aria-hidden="true" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-ink-400">
              <ArrowLeft className="size-4" aria-hidden="true" />
              If you followed a link from somewhere else, please let us know so
              we can fix it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
