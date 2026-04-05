export function trackEvent(name, payload = {}) {
  if (typeof window === "undefined") {
    return;
  }

  if (window.va && typeof window.va.track === "function") {
    window.va.track(name, payload);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", name, payload);
  }

  if (window.umami && typeof window.umami.track === "function") {
    window.umami.track(name, payload);
  }

  if (typeof window.plausible === "function") {
    window.plausible(name, { props: payload });
  }
}
