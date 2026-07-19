import { BLOG_CATEGORIES } from "./schema.js";

/** @type {import("./schema").BlogCategory[]} */
export const blogCategoryOrder = /** @type {import("./schema").BlogCategory[]} */ (BLOG_CATEGORIES);

/** @type {Record<import("./schema").BlogCategory, { backgroundColor: string, borderColor: string }>} */
export const blogCategoryStyles = {
  AI: {
    backgroundColor: "#4c9ff2",
    borderColor: "#8bd0ff",
  },
  Web3: {
    backgroundColor: "#ab2965",
    borderColor: "#d86ca0",
  },
  网络基础: {
    backgroundColor: "#3d4eb9",
    borderColor: "#7486de",
  },
  电脑装机: {
    backgroundColor: "#2a6f77",
    borderColor: "#61a7b0",
  },
  运动健身: {
    backgroundColor: "#2f7f58",
    borderColor: "#62a985",
  },
  营养补剂: {
    backgroundColor: "#b91c1c",
    borderColor: "#ef6b6b",
  },
};

/**
 * @param {import("./schema").BlogCategory} category
 * @param {number} fallbackIndex
 */
export function getBlogCategoryStyle(category, fallbackIndex) {
  if (category && blogCategoryStyles[category]) {
    return blogCategoryStyles[category];
  }

  return blogCategoryStyles[blogCategoryOrder[fallbackIndex % blogCategoryOrder.length]];
}

/** @param {import("./schema").GameEntry[]} items */
export function getFeaturedGames(items) {
  return items
    .filter((item) => item.featuredOnHome)
    .sort((a, b) => (a.featuredOrder ?? Number.MAX_SAFE_INTEGER) - (b.featuredOrder ?? Number.MAX_SAFE_INTEGER));
}

/**
 * @param {import("./schema").GameEntry[]} items
 * @param {"home"|"archive"} [variant]
 */
export function getGameDisplayItems(items, variant = "home") {
  return variant === "home" ? getFeaturedGames(items) : items;
}
