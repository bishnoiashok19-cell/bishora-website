import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initAnalytics } from './lib/analytics';
import './index.css';

// Loads GA4 only when a valid Measurement ID is configured; otherwise a no-op.
initAnalytics();

const container = document.getElementById('root');

if (!container) {
  throw new Error('Bishora: could not find the #root element to mount the app.');
}

createRoot(container).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
