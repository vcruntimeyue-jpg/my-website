"use client";

import { useEffect } from "react";
import { trackEvent } from "../lib/analytics";

export default function AnalyticsBridge() {
  useEffect(() => {
    trackEvent("page_view", {
      path: window.location.pathname,
      title: document.title,
    });

    const onClick = (event) => {
      const target = event.target.closest("a[data-track]");
      if (!target) {
        return;
      }

      trackEvent("link_click", {
        track: target.getAttribute("data-track"),
        href: target.getAttribute("href"),
        text: (target.textContent || "").trim().slice(0, 80),
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
