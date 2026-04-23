export interface AppStoreAttributionParams {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  utm_source?: string;
  utm_campaign?: string;
  utm_term?: string;
}

const APP_STORE_BASE_URL =
  "https://apps.apple.com/app/dreamread-audiobook-player/id6761422972";
const APP_STORE_PROVIDER_TOKEN = "128710901";
const APP_STORE_MEDIA_TYPE_TOKEN = "8";
const ORGANIC_CAMPAIGN_TOKEN = "landing_organic";
const GOOGLE_ADS_CAMPAIGN_TOKEN = "googleads_launch";

export function resolveAppStoreCampaignToken(
  params?: AppStoreAttributionParams | null
): string {
  const utmSource = params?.utm_source?.toLowerCase();
  const utmCampaign = params?.utm_campaign?.toLowerCase();

  const isGooglePaidVisit =
    Boolean(params?.gclid || params?.gbraid || params?.wbraid) ||
    utmSource === "google" ||
    utmSource === "googleads" ||
    utmCampaign?.includes("google") === true;

  return isGooglePaidVisit
    ? GOOGLE_ADS_CAMPAIGN_TOKEN
    : ORGANIC_CAMPAIGN_TOKEN;
}

export function buildAppStoreUrl(
  params?: AppStoreAttributionParams | null
): string {
  const url = new URL(APP_STORE_BASE_URL);
  url.searchParams.set("pt", APP_STORE_PROVIDER_TOKEN);
  url.searchParams.set("ct", resolveAppStoreCampaignToken(params));
  url.searchParams.set("mt", APP_STORE_MEDIA_TYPE_TOKEN);
  return url.toString();
}

export function getDefaultAppStoreUrl(): string {
  return buildAppStoreUrl(null);
}
