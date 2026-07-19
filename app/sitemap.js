import { siteContent } from "./content/siteContent.js";

export default function sitemap() {
  return [
    {
      url: siteContent.site.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteContent.site.domain}/game`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
