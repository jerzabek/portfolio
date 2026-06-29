// Google AdSense configuration.
//
// The publisher (client) ID is fixed for your account. To turn the in-feed
// ad on, create an "In-feed" ad unit in the AdSense dashboard
// (Ads → By ad unit → In-feed ads) and paste the two generated values below.
//
//  - ADSENSE_INFEED_SLOT       -> the `data-ad-slot` value (a number string)
//  - ADSENSE_INFEED_LAYOUT_KEY -> the `data-ad-layout-key` value (e.g. -fb+5w+4e-db+86)
//
// Until both are filled in, <AdCard /> renders a styled "Sponsored" placeholder
// instead of a live ad, so the layout stays previewable in dev.

export const ADSENSE_CLIENT = 'ca-pub-7131271092857002';

export const ADSENSE_INFEED_SLOT = '6385011722';
export const ADSENSE_INFEED_LAYOUT_KEY = '-73+ed+2i-1n-4w';

export const adsenseConfigured =
	ADSENSE_INFEED_SLOT.length > 0 && ADSENSE_INFEED_LAYOUT_KEY.length > 0;
