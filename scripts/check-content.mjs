import { siteContent } from "../app/content/siteContent.js";

const PLACEHOLDER_PATTERNS = [
  "000000",
  "yourname",
  "/xxx",
  "图片占位",
  "href=\"#\"",
];

const errors = [];

function walk(value, path = "root") {
  if (typeof value === "string") {
    for (const pattern of PLACEHOLDER_PATTERNS) {
      if (value.toLowerCase().includes(pattern.toLowerCase())) {
        errors.push(`${path}: contains placeholder pattern \"${pattern}\"`);
      }
    }
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, `${path}[${index}]`));
    return;
  }

  if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value)) {
      walk(item, `${path}.${key}`);
    }
  }
}

function checkLinks() {
  const allExternalLinks = [];

  siteContent.socialLinks.forEach((item) => allExternalLinks.push({ path: `socialLinks.${item.label}`, url: item.url }));

  Object.entries(siteContent.sections).forEach(([sectionName, sectionData]) => {
    if (!Array.isArray(sectionData)) {
      return;
    }

    sectionData.forEach((entry, index) => {
      if (entry.url) {
        allExternalLinks.push({ path: `sections.${sectionName}[${index}]`, url: entry.url });
      }
      if (Array.isArray(entry.items)) {
        entry.items.forEach((item, itemIndex) => {
          allExternalLinks.push({ path: `sections.${sectionName}[${index}].items[${itemIndex}]`, url: item.url });
        });
      }
    });
  });

  for (const link of allExternalLinks) {
    if (!link.url || typeof link.url !== "string") {
      errors.push(`${link.path}: missing url`);
      continue;
    }
    if (!link.url.startsWith("https://")) {
      errors.push(`${link.path}: url must start with https://`);
    }
  }

  const allowedAnchors = new Set(["#home", "#blog", "#game", "#music", "#images", "#favorites", "#contact"]);
  siteContent.navLinks.forEach((link, index) => {
    if (!allowedAnchors.has(link.href)) {
      errors.push(`navLinks[${index}] invalid anchor: ${link.href}`);
    }
  });
}

walk(siteContent);
checkLinks();

if (errors.length > 0) {
  console.error("❌ Content quality check failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("✅ Content quality check passed.");
