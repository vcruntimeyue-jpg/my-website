import { siteContent } from "./content/siteContent";

export default function sitemap() {
  return [
    {
      url: siteContent.site.domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
