/**
 * Google Analytics 4 integration for landing page
 * Captures ad params (gclid, gbraid, wbraid, utm_*) and fires events
 */

import {
  resolveAppStoreCampaignToken,
  type AppStoreAttributionParams,
} from "./appStore";

interface StoredAdParams extends AppStoreAttributionParams {
  timestamp: number;
}

const AD_PARAMS_STORAGE_KEY = "dreamread_ad_params";
const AD_PARAMS_EXPIRY_MS = 24 * 60 * 60 * 1000; // 24 hours

/**
 * Extract ad attribution params from URL
 */
export function extractAdParams(): AppStoreAttributionParams {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const adParams: AppStoreAttributionParams = {};

  const keys = ["gclid", "gbraid", "wbraid", "utm_source", "utm_campaign", "utm_term"] as const;
  for (const key of keys) {
    const value = params.get(key);
    if (value) {
      adParams[key] = value;
    }
  }

  return adParams;
}

/**
 * Store ad params in localStorage on first visit
 */
export function storeAdParams(params: AppStoreAttributionParams): void {
  if (typeof window === "undefined" || Object.keys(params).length === 0) return;

  const stored: StoredAdParams = {
    ...params,
    timestamp: Date.now(),
  };

  try {
    localStorage.setItem(AD_PARAMS_STORAGE_KEY, JSON.stringify(stored));
  } catch (e) {
    console.warn("Failed to store ad params:", e);
  }
}

/**
 * Retrieve stored ad params if still valid
 */
export function getStoredAdParams(): AppStoreAttributionParams | null {
  if (typeof window === "undefined") return null;

  try {
    const stored = localStorage.getItem(AD_PARAMS_STORAGE_KEY);
    if (!stored) return null;

    const parsed: StoredAdParams = JSON.parse(stored);
    const age = Date.now() - parsed.timestamp;

    // Return params if less than 24 hours old
    if (age < AD_PARAMS_EXPIRY_MS) {
      const { timestamp, ...params } = parsed;
      return params;
    }

    // Clear expired params
    localStorage.removeItem(AD_PARAMS_STORAGE_KEY);
    return null;
  } catch (e) {
    console.warn("Failed to retrieve ad params:", e);
    return null;
  }
}

/**
 * Fire landing_view event with ad params
 */
export function firePageViewEvent(): void {
  if (typeof window === "undefined" || !("gtag" in window)) return;

  const gtag = (window as any).gtag as Function;
  const adParams = getStoredAdParams();

  const eventData: Record<string, any> = {
    event: "landing_view",
  };

  if (adParams) {
    if (adParams.gclid) eventData.gclid = adParams.gclid;
    if (adParams.gbraid) eventData.gbraid = adParams.gbraid;
    if (adParams.wbraid) eventData.wbraid = adParams.wbraid;
    if (adParams.utm_source) eventData.utm_source = adParams.utm_source;
    if (adParams.utm_campaign) eventData.utm_campaign = adParams.utm_campaign;
    if (adParams.utm_term) eventData.utm_term = adParams.utm_term;
  }

  gtag("event", "landing_view", eventData);
}

/**
 * Google Ads conversion send_to value for App Store click conversion action.
 * Configured in Google Ads account 969-403-5382, conversion "App Store Click".
 */
const GOOGLE_ADS_APP_STORE_CLICK_SEND_TO = "AW-16934994769/Cth2CNfyxJwcENGGnos_";

/**
 * Fire app_store_click event with ad params
 */
export function fireAppStoreClickEvent(ctaSource?: string): void {
  if (typeof window === "undefined" || !("gtag" in window)) return;

  const gtag = (window as any).gtag as Function;
  const urlParams = extractAdParams();
  const adParams =
    Object.keys(urlParams).length > 0 ? urlParams : getStoredAdParams();
  const campaignToken = resolveAppStoreCampaignToken(adParams);

  const eventData: Record<string, any> = {
    event: "app_store_click",
    campaign_token: campaignToken,
  };

  if (adParams) {
    if (adParams.gclid) eventData.gclid = adParams.gclid;
    if (adParams.gbraid) eventData.gbraid = adParams.gbraid;
    if (adParams.wbraid) eventData.wbraid = adParams.wbraid;
    if (adParams.utm_source) eventData.utm_source = adParams.utm_source;
    if (adParams.utm_campaign) eventData.utm_campaign = adParams.utm_campaign;
    if (adParams.utm_term) eventData.utm_term = adParams.utm_term;
  }

  if (ctaSource) {
    eventData.cta_source = ctaSource;
  }

  // GA4 event for analytics
  gtag("event", "app_store_click", eventData);

  // Google Ads conversion event for ad attribution / bidding optimization
  gtag("event", "conversion", {
    send_to: GOOGLE_ADS_APP_STORE_CLICK_SEND_TO,
  });
}

/**
 * Hook-like function for initializing analytics on client side
 * Call this in a useEffect on page load
 */
export function initializeAnalytics(): void {
  // Extract and store ad params from URL on first visit
  const urlParams = extractAdParams();
  if (Object.keys(urlParams).length > 0) {
    storeAdParams(urlParams);
  }

  // Fire page view event
  firePageViewEvent();
}
