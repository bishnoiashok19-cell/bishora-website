import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import Home from './pages/Home';

// Interior pages are code-split so the first paint only ships what it needs.
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

function RouteFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center bg-white"
      role="status"
      aria-live="polite"
    >
      <span className="size-8 animate-spin rounded-full border-2 border-ink-200 border-t-brand-600" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main id="main-content">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
