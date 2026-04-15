/**
 * CE.SDK Photo UI Starterkit - React Entry Point
 *
 * A custom photo editing UI built with CE.SDK featuring crop, filters,
 * adjustments, and a mobile-optimized interface.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import { createRoot } from 'react-dom/client';

import App from './app/App';

// ============================================================================
// Configuration
// ============================================================================

const engineConfig = {
  // Unique user identifier for analytics (customize for your app)
  userId: 'starterkit-photo-ui-user',

  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',

  // Base URL for CE.SDK assets (for self-hosted deployments)
  // baseURL: '/assets/',

  // Feature flags
  featureFlags: {
    preventScrolling: true
  }
};

// ============================================================================
// Initialize React Application
// ============================================================================

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);
root.render(<App engineConfig={engineConfig} />);
