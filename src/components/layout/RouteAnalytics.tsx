import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '../../lib/analytics';

/**
 * Sends exactly one GA4 `page_view` per client-side route change.
 *
 * GA4's automatic page views are disabled in `initAnalytics`, so this is the
 * only source of page_view events. The title is read on the next tick because
 * each page sets `document.title` in its own effect.
 */
export function RouteAnalytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const path = `${pathname}${search}`;
    const timer = window.setTimeout(() => {
      trackPageView(path, document.title);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname, search]);

  return null;
}
