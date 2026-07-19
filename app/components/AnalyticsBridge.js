"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "../lib/analytics";

export default function AnalyticsBridge() {
  const pathname = usePathname();

  useEffect(() => {
    trackEvent("page_view", {
      path: pathname,
      title: document.title,
    });
  }, [pathname]);

  useEffect(() => {
    /** @param {MouseEvent} event */
    const onClick = (event) => {
      const target = event.target instanceof Element
        ? event.target.closest("a[data-track]")
        : null;
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
