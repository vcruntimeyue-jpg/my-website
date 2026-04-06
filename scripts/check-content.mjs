import { navLinks, socialLinks } from "../app/content/navigation.js";
import { getFeaturedGames } from "../app/content/presentation.js";
import { progress } from "../app/content/progress.js";
import { BLOG_CATEGORIES, NAV_ANCHORS, PROGRESS_STATUSES } from "../app/content/schema.js";
import { favoriteGroups } from "../app/content/sections/favorites.js";
import { gameEntries } from "../app/content/sections/game.js";
import { imageEntries } from "../app/content/sections/images.js";
import { musicEntries } from "../app/content/sections/music.js";
import { blogPosts } from "../app/content/sections/blog.js";
import { site } from "../app/content/site.js";
import {
  addError,
  assertArray,
  assertRequiredText,
  assertUnique,
  walkValues,
} from "./lib/content-helpers.mjs";

const PLACEHOLDER_PATTERNS = ["000000", "yourname", "/xxx", "图片占位", "href=\"#\""];
const errors = [];

function checkPlaceholders() {
  walkValues(
    {
      site,
      socialLinks,
      navLinks,
      blogPosts,
      gameEntries,
      musicEntries,
      imageEntries,
      favoriteGroups,
      progress,
    },
    (value, fieldPath) => {
      if (typeof value !== "string") {
        return;
      }

      PLACEHOLDER_PATTERNS.forEach((pattern) => {
        if (value.toLowerCase().includes(pattern.toLowerCase())) {
          addError(errors, `${fieldPath}: contains placeholder pattern "${pattern}"`);
        }
      });
    },
  );
}

function assertHttpsUrl(url, fieldPath) {
  if (typeof url !== "string" || !url.startsWith("https://")) {
    addError(errors, `${fieldPath}: url must start with https://`);
  }
}

function assertIsoDate(value, fieldPath) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    addError(errors, `${fieldPath}: must use YYYY-MM-DD format`);
    return;
  }

  const parsed = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    addError(errors, `${fieldPath}: invalid calendar date`);
  }
}

function checkSite() {
  ["name", "locale", "domain", "title", "description", "tagline"].forEach((key) => {
    assertRequiredText(errors, site[key], `site.${key}`);
  });

  if (typeof site.taglineHighlight !== "string") {
    addError(errors, "site.taglineHighlight: must be a string");
  }

  assertHttpsUrl(site.domain, "site.domain");
}

function checkNavigation() {
  assertArray(errors, socialLinks, "socialLinks");
  assertArray(errors, navLinks, "navLinks");

  assertUnique(errors, socialLinks.map((item) => item.label), "socialLinks.label");
  assertUnique(errors, navLinks.map((item) => item.label), "navLinks.label");
  assertUnique(errors, navLinks.map((item) => item.href), "navLinks.href");

  socialLinks.forEach((item, index) => {
    assertRequiredText(errors, item.platform, `socialLinks[${index}].platform`);
    assertRequiredText(errors, item.label, `socialLinks[${index}].label`);
    assertRequiredText(errors, item.iconKey, `socialLinks[${index}].iconKey`);
    assertHttpsUrl(item.url, `socialLinks[${index}].url`);
  });

  navLinks.forEach((item, index) => {
    assertRequiredText(errors, item.label, `navLinks[${index}].label`);
    if (!NAV_ANCHORS.includes(item.href)) {
      addError(errors, `navLinks[${index}].href: invalid anchor "${item.href}"`);
    }
  });
}

function checkBlog() {
  assertArray(errors, blogPosts, "sections.blog");
  assertUnique(errors, blogPosts.map((post) => post.title), "sections.blog.title");

  blogPosts.forEach((post, index) => {
    assertRequiredText(errors, post.title, `sections.blog[${index}].title`);
    assertIsoDate(post.date, `sections.blog[${index}].date`);
    assertRequiredText(errors, post.summary, `sections.blog[${index}].summary`);
    assertRequiredText(errors, post.cover, `sections.blog[${index}].cover`);
    assertHttpsUrl(post.url, `sections.blog[${index}].url`);

    if (!BLOG_CATEGORIES.includes(post.category)) {
      addError(errors, `sections.blog[${index}].category: invalid category "${post.category}"`);
    }

    if (!assertArray(errors, post.tags, `sections.blog[${index}].tags`)) {
      return;
    }

    if (post.tags.length === 0) {
      addError(errors, `sections.blog[${index}].tags: must contain at least one tag`);
    }
  });
}

function checkGames() {
  assertArray(errors, gameEntries, "sections.game");
  assertUnique(errors, gameEntries.map((item) => item.title), "sections.game.title");

  gameEntries.forEach((item, index) => {
    assertRequiredText(errors, item.title, `sections.game[${index}].title`);
    assertRequiredText(errors, item.summary, `sections.game[${index}].summary`);
    assertRequiredText(errors, item.posterColor, `sections.game[${index}].posterColor`);

    if (item.cover) {
      assertRequiredText(errors, item.cover, `sections.game[${index}].cover`);
    }

    if (item.featuredOnHome && typeof item.featuredOrder !== "number") {
      addError(errors, `sections.game[${index}].featuredOrder: featured items must have a numeric order`);
    }

    if (!item.featuredOnHome && item.featuredOrder !== null) {
      addError(errors, `sections.game[${index}].featuredOrder: non-featured items must use null`);
    }
  });

  const featuredGames = getFeaturedGames(gameEntries);
  const featuredOrders = featuredGames.map((item) => item.featuredOrder);
  assertUnique(errors, featuredOrders, "sections.game.featuredOrder");

  featuredOrders.forEach((order, index) => {
    if (order !== index + 1) {
      addError(errors, `sections.game.featuredOrder: expected contiguous home ordering starting at 1`);
    }
  });
}

function checkMusic() {
  assertArray(errors, musicEntries, "sections.music");
  assertUnique(errors, musicEntries.map((item) => item.title), "sections.music.title");

  musicEntries.forEach((item, index) => {
    assertRequiredText(errors, item.title, `sections.music[${index}].title`);
    assertRequiredText(errors, item.summary, `sections.music[${index}].summary`);
    assertRequiredText(errors, item.cover, `sections.music[${index}].cover`);
    assertHttpsUrl(item.url, `sections.music[${index}].url`);
  });
}

function checkImages() {
  assertArray(errors, imageEntries, "sections.images");
  assertUnique(errors, imageEntries.map((item) => item.title), "sections.images.title");

  imageEntries.forEach((item, index) => {
    assertRequiredText(errors, item.title, `sections.images[${index}].title`);
    assertRequiredText(errors, item.desc, `sections.images[${index}].desc`);
    assertRequiredText(errors, item.image, `sections.images[${index}].image`);
    assertRequiredText(errors, item.category, `sections.images[${index}].category`);
    assertHttpsUrl(item.url, `sections.images[${index}].url`);
  });
}

function checkFavorites() {
  assertArray(errors, favoriteGroups, "sections.favorites");
  assertUnique(errors, favoriteGroups.map((group) => group.group), "sections.favorites.group");

  favoriteGroups.forEach((group, groupIndex) => {
    assertRequiredText(errors, group.group, `sections.favorites[${groupIndex}].group`);

    if (!assertArray(errors, group.items, `sections.favorites[${groupIndex}].items`)) {
      return;
    }

    assertUnique(
      errors,
      group.items.map((item) => item.title),
      `sections.favorites[${groupIndex}].items.title`,
    );

    group.items.forEach((item, itemIndex) => {
      assertRequiredText(errors, item.title, `sections.favorites[${groupIndex}].items[${itemIndex}].title`);
      assertRequiredText(errors, item.subtitle, `sections.favorites[${groupIndex}].items[${itemIndex}].subtitle`);
      assertRequiredText(errors, item.desc, `sections.favorites[${groupIndex}].items[${itemIndex}].desc`);
      assertRequiredText(errors, item.cover, `sections.favorites[${groupIndex}].items[${itemIndex}].cover`);
      assertHttpsUrl(item.url, `sections.favorites[${groupIndex}].items[${itemIndex}].url`);
    });
  });
}

function checkProgress() {
  assertArray(errors, progress, "progress");
  assertUnique(errors, progress.map((item) => item.id), "progress.id");

  progress.forEach((item, index) => {
    assertRequiredText(errors, item.id, `progress[${index}].id`);
    assertRequiredText(errors, item.name, `progress[${index}].name`);

    if (typeof item.weight !== "number" || item.weight <= 0) {
      addError(errors, `progress[${index}].weight: must be a positive number`);
    }

    if (!PROGRESS_STATUSES.includes(item.status)) {
      addError(errors, `progress[${index}].status: invalid status "${item.status}"`);
    }
  });
}

checkPlaceholders();
checkSite();
checkNavigation();
checkBlog();
checkGames();
checkMusic();
checkImages();
checkFavorites();
checkProgress();

if (errors.length > 0) {
  console.error("Content quality check failed:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log("Content quality check passed.");
