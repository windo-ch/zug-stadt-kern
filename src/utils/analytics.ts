/**
 * Analytics utility for managing Umami Analytics script loading
 * based on user cookie consent preferences
 */

const UMANI_SCRIPT_URL = 'https://cloud.umami.is/script.js';
const UMANI_WEBSITE_ID = '3006cbcc-e885-42fd-94e8-d303802847c5';
const SCRIPT_ID = 'umami-analytics-script';

interface CookieSettings {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

/**
 * Get current cookie preferences from localStorage
 */
export const getCookiePreferences = (): CookieSettings | null => {
  try {
    const stored = localStorage.getItem('cookie-preferences');
    if (!stored) return null;
    return JSON.parse(stored) as CookieSettings;
  } catch {
    return null;
  }
};

/**
 * Check if analytics cookies are accepted
 */
export const hasAnalyticsConsent = (): boolean => {
  const preferences = getCookiePreferences();
  return preferences?.analytics === true;
};

/**
 * Load Umami Analytics script
 */
const loadAnalyticsScript = (): void => {
  // Check if script already exists
  if (document.getElementById(SCRIPT_ID)) {
    return;
  }

  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.src = UMANI_SCRIPT_URL;
  script.setAttribute('data-website-id', UMANI_WEBSITE_ID);
  script.defer = true;
  script.async = true;
  
  document.head.appendChild(script);
};

/**
 * Remove Umami Analytics script
 */
const removeAnalyticsScript = (): void => {
  const script = document.getElementById(SCRIPT_ID);
  if (script) {
    script.remove();
  }
  
  // Also clear any Umami data if it exists
  if (typeof window !== 'undefined' && (window as any).umami) {
    try {
      // Clear Umami cookies
      document.cookie.split(';').forEach(cookie => {
        const eqPos = cookie.indexOf('=');
        const name = eqPos > -1 ? cookie.substr(0, eqPos).trim() : cookie.trim();
        if (name.startsWith('_umami')) {
          document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
        }
      });
    } catch (e) {
      // Silently fail if cookies can't be cleared
    }
  }
};

/**
 * Initialize analytics based on current cookie preferences
 * Call this on app load to check existing consent
 */
export const initializeAnalytics = (): void => {
  if (hasAnalyticsConsent()) {
    loadAnalyticsScript();
  } else {
    removeAnalyticsScript();
  }
};

/**
 * Update analytics based on new consent preferences
 * Call this when user changes their cookie preferences
 */
export const updateAnalytics = (preferences: CookieSettings): void => {
  if (preferences.analytics) {
    loadAnalyticsScript();
  } else {
    removeAnalyticsScript();
  }
};
