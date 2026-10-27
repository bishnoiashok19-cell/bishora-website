import { Fragment, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';
import { genericServices, getServiceSubServices, servicePath, subServicePath } from './data/servicePages';
import { seoSubServices } from './data/seoSubServices';
import Home from './pages/Home';

// Interior pages are code-split so the first paint only ships what it needs.
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Seo = lazy(() => import('./pages/Seo'));
const SeoSubServicePage = lazy(() => import('./pages/SeoSubService'));
const ServicePage = lazy(() => import('./pages/ServicePage'));
const ServiceSubServicePage = lazy(() => import('./pages/ServiceSubServicePage'));
const About = lazy(() => import('./pages/About'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Industries = lazy(() => import('./pages/Industries'));
const IndustryCategory = lazy(() => import('./pages/IndustryCategory'));
const IndustrySubcategory = lazy(() => import('./pages/IndustrySubcategory'));
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
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/services/seo" element={<Seo />} />
            {seoSubServices.map((subService) => (
              <Route
                key={subService.slug}
                path={`/services/seo/${subService.slug}`}
                element={<SeoSubServicePage subService={subService} />}
              />
            ))}
            {genericServices.map((service) => (
              <Fragment key={service.slug}>
                <Route
                  path={servicePath(service.slug)}
                  element={<ServicePage service={service} />}
                />
                {getServiceSubServices(service).map((subService) => (
                  <Route
                    key={subService.slug}
                    path={subServicePath(service.slug, subService.slug)}
                    element={
                      <ServiceSubServicePage
                        service={service}
                        subService={subService}
                      />
                    }
                  />
                ))}
              </Fragment>
            ))}
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industries" element={<Industries />} />
            <Route
              path="/industries/:industrySlug"
              element={<IndustryCategory />}
            />
            <Route
              path="/industries/:industrySlug/:subcategorySlug"
              element={<IndustrySubcategory />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
