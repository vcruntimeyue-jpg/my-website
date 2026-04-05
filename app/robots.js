import { siteContent } from "./content/siteContent";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteContent.site.domain}/sitemap.xml`,
    host: siteContent.site.domain,
  };
}
