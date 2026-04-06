import { navLinks, socialLinks } from "./navigation.js";
import { blogPosts } from "./sections/blog.js";
import { gameEntries } from "./sections/game.js";
import { calculateProgress, progress } from "./progress.js";
import { site } from "./site.js";

export const siteContent = {
  site,
  socialLinks,
  navLinks,
  sections: {
    blog: blogPosts,
    game: gameEntries,
  },
  progress,
};

export { calculateProgress };
