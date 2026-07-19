import { siteContent } from "../app/content/siteContent.js";
import { addError, readRepoFile } from "./lib/content-helpers.mjs";

const errors = [];
const expectedSectionKeys = ["blog", "game", "upcoming"];
const actualSectionKeys = Object.keys(siteContent.sections);

if (expectedSectionKeys.join(",") !== actualSectionKeys.join(",")) {
  addError(errors, `siteContent.sections must expose keys in order: ${expectedSectionKeys.join(", ")}`);
}

const pageSource = readRepoFile("app/page.js");
const layoutSource = readRepoFile("app/layout.js");
const gamePageSource = readRepoFile("app/game/page.js");
const analyticsBridgeSource = readRepoFile("app/components/AnalyticsBridge.js");
const globalStylesSource = readRepoFile("app/globals.css");
const heroSource = readRepoFile("app/components/HeroSection.js");
const navbarSource = readRepoFile("app/components/Navbar.js");
const footerSource = readRepoFile("app/components/SiteFooter.js");
const socialLinksSource = readRepoFile("app/components/SocialLinks.js");
const gameGallerySource = readRepoFile("app/components/GameGallery.js");
const blogSectionSource = readRepoFile("app/components/BlogSection.js");

if (pageSource.includes('"use client"')) {
  addError(errors, "app/page.js must remain a server component");
}

const allowedClientEntries = new Set([
  "app/components/AnalyticsBridge.js",
  "app/components/RevealSection.js",
]);

["app/components/AnalyticsBridge.js", "app/components/RevealSection.js", "app/components/HeroSection.js", "app/components/Navbar.js", "app/components/BlogSection.js", "app/components/GameSection.js", "app/components/GameGallery.js"].forEach((relativePath) => {
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
  'id="main-content"',
  'HeroSection hero={siteContent.hero}',
  'siteContent.sections.upcoming.map',
  'upcoming.topics.map',
].forEach((needle) => {
  if (!pageSource.includes(needle)) {
    addError(errors, `app/page.js is missing section wiring: ${needle}`);
  }
});

if (!layoutSource.includes('className="skip-link"') || !layoutSource.includes('href="#main-content"')) {
  addError(errors, "Root layout must expose a skip link to #main-content");
}

if (!heroSource.includes("<h1") || !heroSource.includes("hero.primaryAction") || !heroSource.includes("hero.secondaryAction")) {
  addError(errors, "HeroSection must render a semantic heading and both configured actions");
}

if (!navbarSource.includes('aria-label="主导航"')) {
  addError(errors, "Navbar must expose a labelled primary navigation");
}

if (navbarSource.includes('className="hidden gap-8 lg:flex"')) {
  addError(errors, "Navbar must not hide all primary links on mobile");
}

if (!navbarSource.includes("SocialLinks")) {
  addError(errors, "Navbar must consume the shared SocialLinks renderer");
}

if (!footerSource.includes("SocialLinks")) {
  addError(errors, "SiteFooter must consume the shared SocialLinks renderer");
}

if (!socialLinksSource.includes("SocialIcon")) {
  addError(errors, "SocialLinks must consume the shared SocialIcon registry");
}

if (!gameGallerySource.includes("getGameDisplayItems")) {
  addError(errors, "GameGallery must use shared game presentation rules");
}

if (!blogSectionSource.includes("getBlogCategoryStyle")) {
  addError(errors, "BlogSection must use shared blog presentation rules");
}

["aria-hidden", "scroller-clone", "<Image"].forEach((needle) => {
  if (!blogSectionSource.includes(needle)) {
    addError(errors, `BlogSection is missing accessible marquee/image behavior: ${needle}`);
  }
});

if (!blogSectionSource.includes("isClone ? (") || blogSectionSource.includes("tabIndex={isClone")) {
  addError(errors, "Blog marquee clones must render without interactive links");
}

if (!gameGallerySource.includes('(max-width: 767px) 96vw, (max-width: 1279px) 47vw, 31vw')) {
  addError(errors, "GameGallery must describe its one, two, and three-column responsive image sizes");
}

if (!socialLinksSource.includes('social.url.startsWith("https://")')) {
  addError(errors, "SocialLinks must only open HTTPS destinations in a new tab");
}

if (!gamePageSource.includes('canonical: "/game"') || !gamePageSource.includes("openGraph:")) {
  addError(errors, "Game archive metadata must expose a canonical URL and Open Graph data");
}

if (!analyticsBridgeSource.includes("usePathname") || !analyticsBridgeSource.includes("[pathname]")) {
  addError(errors, "AnalyticsBridge must track App Router pathname changes");
}

if (!analyticsBridgeSource.includes("event.target instanceof Element")) {
  addError(errors, "AnalyticsBridge must guard non-Element click targets");
}

if (!heroSource.includes("orbit-badge-shell")) {
  addError(errors, "Hero orbit badges must separate positioning from counter-rotation");
}

if (globalStylesSource.includes("calc(var(--hero-size) *")) {
  addError(errors, "Hero geometry must not depend on experimental CSS multiplication");
}

if (errors.length > 0) {
  console.error("Structure check failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Structure check passed.");
