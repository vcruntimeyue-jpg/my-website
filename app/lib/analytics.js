/**
 * @typedef {Window & {
 *   va?: {track?: (name: string, payload: Record<string, unknown>) => void},
 *   gtag?: (command: string, name: string, payload: Record<string, unknown>) => void,
 *   umami?: {track?: (name: string, payload: Record<string, unknown>) => void},
 *   plausible?: (name: string, options: {props: Record<string, unknown>}) => void
 * }} AnalyticsWindow
 */

/**
 * @param {string} name
 * @param {Record<string, unknown>} [payload]
 */
export function trackEvent(name, payload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  const analyticsWindow = /** @type {AnalyticsWindow} */ (window);

  if (analyticsWindow.va && typeof analyticsWindow.va.track === "function") {
    analyticsWindow.va.track(name, payload);
  }

  if (typeof analyticsWindow.gtag === "function") {
    analyticsWindow.gtag("event", name, payload);
  }

  if (analyticsWindow.umami && typeof analyticsWindow.umami.track === "function") {
    analyticsWindow.umami.track(name, payload);
  }

  if (typeof analyticsWindow.plausible === "function") {
    analyticsWindow.plausible(name, { props: payload });
  }
}
