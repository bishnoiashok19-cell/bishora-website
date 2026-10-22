import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll position on route change and supports in-page anchors
 * (for example `/services#paid-advertising`).
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.slice(1);
      let attempts = 0;

      const tryScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
        attempts += 1;
        if (attempts < 20) {
          window.setTimeout(tryScroll, 50);
        }
      };

      tryScroll();
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
