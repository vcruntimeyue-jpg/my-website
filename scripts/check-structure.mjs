import { siteContent } from "../app/content/siteContent.js";
import { addError, readRepoFile } from "./lib/content-helpers.mjs";

const errors = [];
const expectedSectionKeys = ["blog", "game"];
const actualSectionKeys = Object.keys(siteContent.sections);

if (expectedSectionKeys.join(",") !== actualSectionKeys.join(",")) {
  addError(errors, `siteContent.sections must expose keys in order: ${expectedSectionKeys.join(", ")}`);
}

const pageSource = readRepoFile("app/page.js");
const navbarSource = readRepoFile("app/components/Navbar.js");
const footerSource = readRepoFile("app/components/SiteFooter.js");
const socialLinksSource = readRepoFile("app/components/SocialLinks.js");
const musicSectionSource = readRepoFile("app/components/MusicSection.js");
const imagesSectionSource = readRepoFile("app/components/ImagesSection.js");
const favoritesSectionSource = readRepoFile("app/components/FavoritesSection.js");
const gameGallerySource = readRepoFile("app/components/GameGallery.js");
const blogSectionSource = readRepoFile("app/components/BlogSection.js");

if (pageSource.includes('"use client"')) {
  addError(errors, "app/page.js must remain a server component");
}

const allowedClientEntries = new Set([
  "app/components/AnalyticsBridge.js",
  "app/components/RevealSection.js",
]);

["app/components/AnalyticsBridge.js", "app/components/RevealSection.js", "app/components/HeroSection.js", "app/components/Navbar.js", "app/components/BlogSection.js", "app/components/GameSection.js", "app/components/GameGallery.js", "app/components/MusicSection.js", "app/components/ImagesSection.js", "app/components/FavoritesSection.js"].forEach((relativePath) => {
  const source = readRepoFile(relativePath);
  const hasUseClient = source.includes('"use client"');

  if (hasUseClient && !allowedClientEntries.has(relativePath)) {
    addError(errors, `${relativePath} should not declare "use client"`);
  }

  if (!hasUseClient && allowedClientEntries.has(relativePath)) {
    addError(errors, `${relativePath} must remain a client entry`);
  }
});

[
  'BlogSection posts={siteContent.sections.blog}',
  'GameSection items={siteContent.sections.game}',
  '<MusicSection />',
  '<ImagesSection />',
  '<FavoritesSection />',
].forEach((needle) => {
  if (!pageSource.includes(needle)) {
    addError(errors, `app/page.js is missing section wiring: ${needle}`);
  }
});

if (!navbarSource.includes("SocialLinks")) {
  addError(errors, "Navbar must consume the shared SocialLinks renderer");
}

if (!footerSource.includes("SocialLinks")) {
  addError(errors, "SiteFooter must consume the shared SocialLinks renderer");
}

if (!socialLinksSource.includes("SocialIcon")) {
  addError(errors, "SocialLinks must consume the shared SocialIcon registry");
}

if (musicSectionSource.includes("items.map") || musicSectionSource.includes("data-track={`music:")) {
  addError(errors, "MusicSection should be intro-only");
}

if (imagesSectionSource.includes("items.map") || imagesSectionSource.includes("data-track={`image:")) {
  addError(errors, "ImagesSection should be intro-only");
}

if (favoritesSectionSource.includes("groups.map") || favoritesSectionSource.includes("data-track={`favorite:")) {
  addError(errors, "FavoritesSection should be intro-only");
}

if (!gameGallerySource.includes("getGameDisplayItems")) {
  addError(errors, "GameGallery must use shared game presentation rules");
}

if (!blogSectionSource.includes("getBlogCategoryStyle")) {
  addError(errors, "BlogSection must use shared blog presentation rules");
}

if (errors.length > 0) {
  console.error("Structure check failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Structure check passed.");
